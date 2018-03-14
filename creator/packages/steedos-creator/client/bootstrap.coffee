Creator.isLoadingSpace = new ReactiveVar(true)

Creator.bootstrap = ()->
	Creator.isLoadingSpace.set(true)
	spaceId = Steedos.getSpaceId()
	unless spaceId
		return
	Meteor.call "creator.bootstrap", spaceId, (error, result)->
		if error or !result
			console.log error
		else
			if result.space._id != spaceId
				Steedos.setSpaceId(result.space._id)

			Creator.Objects = result.objects
			baseFields = _.keys(Creator.baseObject.fields)

			_.each Creator.Objects, (object, object_name)->
				Creator.loadObjects object, object_name

			_.each result.objects, (res_object, object_name)->
				object = Creator.getObject(object_name)
				permissions = res_object.permissions
				unless object
					return
				object.permissions.set(permissions)
				_.each object.fields, (field, field_name)->
					fs = object.schema._schema[field_name]
					if !fs.autoform
						fs.autoform = {}
					if _.indexOf(permissions.fields, field_name)>=0
						field.hidden = false
						field.omit = false
						fs.autoform.omit = false
					else
						field.hidden = true
						field.omit = true
						fs.autoform.omit = true
				_.each permissions.readonly_fields, (field_name)->
					f = object.fields[field_name]
					if f
						fs = object.schema._schema[field_name]
						if !fs.autoform
							fs.autoform = {}
						f.readonly = true
						fs.autoform.readonly = true
						fs.autoform.disabled = true

			_.each result.assigned_apps, (app_name)->
				Creator.Apps[app_name]?.visible = true

		Creator.isLoadingSpace.set(false)

Meteor.startup ->
	Tracker.autorun ->
		Creator.bootstrap()