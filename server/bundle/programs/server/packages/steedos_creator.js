(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ReactiveVar = Package['reactive-var'].ReactiveVar;
var ReactiveDict = Package['reactive-dict'].ReactiveDict;
var ECMAScript = Package.ecmascript.ECMAScript;
var Random = Package.random.Random;
var DDP = Package['ddp-client'].DDP;
var DDPServer = Package['ddp-server'].DDPServer;
var check = Package.check.check;
var Match = Package.check.Match;
var DDPRateLimiter = Package['ddp-rate-limiter'].DDPRateLimiter;
var _ = Package.underscore._;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Blaze = Package.ui.Blaze;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var JsonRoutes = Package['simple:json-routes'].JsonRoutes;
var RestMiddleware = Package['simple:json-routes'].RestMiddleware;
var Restivus = Package['nimble:restivus'].Restivus;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Tabular = Package['aldeed:tabular'].Tabular;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var BlazeLayout = Package['kadira:blaze-layout'].BlazeLayout;
var FlowRouter = Package['kadira:flow-router'].FlowRouter;
var Template = Package['meteorhacks:ssr'].Template;
var SSR = Package['meteorhacks:ssr'].SSR;
var SubsManager = Package['meteorhacks:subs-manager'].SubsManager;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var Accounts = Package['accounts-base'].Accounts;
var ServerSession = Package['steedos:base'].ServerSession;
var Selector = Package['steedos:base'].Selector;
var Steedos = Package['steedos:base'].Steedos;
var AjaxCollection = Package['steedos:base'].AjaxCollection;
var SteedosDataManager = Package['steedos:base'].SteedosDataManager;
var SteedosOffice = Package['steedos:base'].SteedosOffice;
var billingManager = Package['steedos:base'].billingManager;
var Theme = Package['steedos:theme'].Theme;
var CFDataManager = Package['steedos:autoform'].CFDataManager;
var Push = Package['raix:push'].Push;
var Logger = Package['steedos:logger'].Logger;
var _i18n = Package['universe:i18n']._i18n;
var i18n = Package['universe:i18n'].i18n;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;
var HTML = Package.htmljs.HTML;
var Collection2 = Package['aldeed:collection2-core'].Collection2;
var FS = Package['steedos:cfs-base-package'].FS;
var Spacebars = Package.spacebars.Spacebars;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;

/* Package-scope variables */
var __coffeescriptShare, permissionManager, uuflowManager;

var require = meteorInstall({"node_modules":{"meteor":{"steedos:creator":{"i18n":{"en.i18n.json.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/i18n/en.i18n.json.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Package['universe:i18n'].i18n.addTranslations('en','',{"Steedos Creator":"Creator","Refresh":"Refresh","Confirm":"Confirm","list_view_recent":"Recent","list_view_all":"All","list_view_mine":"Mine","list_view_no_records":"No items to display.","please_select":"Please select ","list_view":"List View","creator_list_item_counts":"%s items","creator_list_new_list_view":"New","creator_list_delete_list_view":"Delete","creator_list_select_fields":"Select Fields to Display","creator_available_fields":"Available Fields","creator_visible_fields":"Visible Fields","creator_list_filter":"Filter","creator_list_filter_cancel":"Cancel","creator_list_filter_save_as":"Save as","creator_list_filter_save":"Save","creator_list_new_filter":"New Filter","creator_list_add_filter":"Add Filter","creator_list_remove_all_filters":"Remove All","creator_list_matching_all_filters":"Matching all these filters","creator_list_view_controls":"LIST VIEW CONTROLS","creator_list_export_list_view":"Export list view","creator_list_copy_list_view":"Copy list view","reset_column_width":"Reset column width","creator_list_edit":"Edit List View","creator_filter_option_field":"field","creator_filter_option_operation":"operation","creator_filter_option_value":"value","creator_filter_option_start_value":"start value","creator_filter_option_end_value":"end value","creator_filter_option_start_end_error":"The starting value cannot be greater than the ending value","creator_filter_option_done":"Done","creator_filter_operation_required_error":"operation is required","creator_filter_operation_equal":"equal","creator_filter_operation_unequal":"not equal","creator_filter_operation_less_than":"less than","creator_filter_operation_greater_than":"greater than","creator_filter_operation_less_or_equal":"less or equal","creator_filter_operation_greater_or_equal":"greater or equal","creator_filter_operation_contains":"contains","creator_filter_operation_does_not_contain":"not contain","creator_filter_operation_starts_with":"starts with","creator_app_launcher":"App Launcher","creator_app_launcher_all_apps":"App Apps","creator_app_launcher_all_items":"All Items","creator_filter_operation_between":"Range","creator_filter_operation_between_last_year":"Last Year","creator_filter_operation_between_this_year":"This Year","creator_filter_operation_between_next_year":"Next Year","creator_filter_operation_between_today":"Today","creator_filter_operation_between_yestday":"Yestday","creator_filter_operation_between_last_quarter":"Last Quarter","creator_filter_operation_between_this_quarter":"This Quarter","creator_filter_operation_between_next_quarter":"Next Quarter","creator_filter_operation_between_tomorrow":"Tomorrow","creator_filter_operation_between_this_week":"This Week","creator_filter_operation_between_last_week":"Last Week","creator_filter_operation_between_next_week":"Next Week","creator_filter_operation_between_this_month":"This Month","creator_filter_operation_between_last_month":"Last Month","creator_filter_operation_between_next_month":"Next Month","creator_filter_operation_between_last_7_days":"Last 7 Days","creator_filter_operation_between_last_30_days":"Last 30 Days","creator_filter_operation_between_last_60_days":"Last 60 Days","creator_filter_operation_between_last_90_days":"Last 90 Days","creator_filter_operation_between_last_120_days":"Last 120 Days","creator_filter_operation_between_next_7_days":"Next 7 Days","creator_filter_operation_between_next_30_days":"Next 30 Days","creator_filter_operation_between_next_60_days":"Next 60 Days","creator_filter_operation_between_next_90_days":"Next 90 Days","creator_filter_operation_between_next_120_days":"Next 120 Days","creator_filter_close_filter_panel":"Close Filter Panel","creator_header_search":"Search in %s and more...","creator_header_search_recent_items":"Recent Items","creator_view_related_objects":"RELATED","creator_view_details":"DETAILS","creator_actions_upload_file":"Upload","creator_home_apps":"Steedos Office","creator_detail_info":"DETAILS","creator_detail_related":"RELATED","creator_new":"New","creator_change_view":"Change view","creator_edit_list":"Edit List","creator_refresh":"Refresh","creator_charts":"Charts","creator_filters":"Filters","true":"YES","false":"NO"});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"zh-CN.i18n.json.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/i18n/zh-CN.i18n.json.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Package['universe:i18n'].i18n.addTranslations('zh-CN','',{"Steedos Creator":"开发平台","Refresh":"刷新","Confirm":"确定","list_view_recent":"最近访问","list_view_all":"全部","list_view_mine":"我的","list_view_no_records":"没有可显示的项目.","please_select":"请选择","list_view":"列表视图","creator_list_item_counts":"%s个项目","creator_list_new_list_view":"新建","creator_list_delete_list_view":"删除","creator_list_select_fields":"选择要显示的字段","creator_available_fields":"可利用字段","creator_visible_fields":"已显示字段","creator_list_filter":"筛选条件","creator_list_filter_cancel":"取消","creator_list_filter_save_as":"另存为","creator_list_filter_save":"保存","creator_list_new_filter":"新建筛选条件","creator_list_add_filter":"添加筛选条件","creator_list_remove_all_filters":"清空","creator_list_matching_all_filters":"匹配所有筛选条件","creator_list_view_controls":"列表视图设置","creator_list_export_list_view":"导出Excel","creator_list_copy_list_view":"复制视图","reset_column_width":"重置列宽","creator_list_edit":"编辑视图","creator_filter_option_field":"字段","creator_filter_option_operation":"运算符","creator_filter_operation_equal":"等于","creator_filter_operation_unequal":"不等于","creator_filter_operation_less_than":"小于","creator_filter_operation_greater_than":"大于","creator_filter_operation_less_or_equal":"小于或等于","creator_filter_operation_greater_or_equal":"大于或等于","creator_filter_operation_contains":"包含","creator_filter_operation_does_not_contain":"不包含","creator_filter_operation_starts_with":"起始字符","creator_filter_option_value":"值","creator_filter_option_start_value":"起始值","creator_filter_option_end_value":"结束值","creator_filter_option_start_end_error":"起始值不能大于结束值","creator_filter_option_done":"完成","creator_filter_operation_required_error":"请选择运算符","creator_filter_operation_between":"范围","creator_filter_operation_between_last_year":"去年","creator_filter_operation_between_this_year":"今年","creator_filter_operation_between_next_year":"明年","creator_filter_operation_between_today":"今天","creator_filter_operation_between_yestday":"昨天","creator_filter_operation_between_last_quarter":"上季度","creator_filter_operation_between_this_quarter":"本季度","creator_filter_operation_between_next_quarter":"下季度","creator_filter_operation_between_tomorrow":"明天","creator_filter_operation_between_this_week":"本周","creator_filter_operation_between_last_week":"上周","creator_filter_operation_between_next_week":"下周","creator_filter_operation_between_this_month":"本月","creator_filter_operation_between_last_month":"上月","creator_filter_operation_between_next_month":"下月","creator_filter_operation_between_last_7_days":"过去7天","creator_filter_operation_between_last_30_days":"过去30天","creator_filter_operation_between_last_60_days":"过去60天","creator_filter_operation_between_last_90_days":"过去90天","creator_filter_operation_between_last_120_days":"过去120天","creator_filter_operation_between_next_7_days":"未来7天","creator_filter_operation_between_next_30_days":"未来30天","creator_filter_operation_between_next_60_days":"未来60天","creator_filter_operation_between_next_90_days":"未来90天","creator_filter_operation_between_next_120_days":"未来120天","creator_filter_close_filter_panel":"关闭过滤面板","creator_app_launcher":"应用程序启动器","creator_app_launcher_all_apps":"所有应用程序","creator_app_launcher_all_items":"所有项目","creator_header_search":"搜索 %s 和更多...","creator_header_search_recent_items":"最近项目","creator_view_related_objects":"相关","creator_view_details":"详细信息","creator_actions_upload_file":"上传","creator_home_apps":"华炎办公","creator_detail_info":"详细信息","creator_detail_related":"相关","creator_new":"新建","creator_change_view":"修改视图","creator_edit_list":"编辑列表","creator_refresh":"刷新","creator_charts":"图表","creator_filters":"过滤器","true":"是","false":"否"});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"checkNpm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/checkNpm.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let checkNpmVersions;
module.link("meteor/tmeasday:check-npm-versions", {
  checkNpmVersions(v) {
    checkNpmVersions = v;
  }

}, 0);
checkNpmVersions({
  busboy: "^0.2.13",
  mkdirp: "^0.3.5",
  "xml2js": "^0.4.19",
  "node-xlsx": "^0.12.0"
}, 'steedos:creator');

if (Meteor.settings && Meteor.settings.cfs && Meteor.settings.cfs.aliyun) {
  checkNpmVersions({
    "aliyun-sdk": "^1.11.12"
  }, 'steedos:creator');
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"core.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/core.coffee                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Creator.getSchema = function (object_name) {
  var ref;
  return (ref = Creator.getObject(object_name)) != null ? ref.schema : void 0;
};

Creator.getObjectFirstListViewUrl = function (object_name) {
  var app_id, list_view, list_view_id;
  list_view = Creator.getObjectFirstListView(object_name);
  list_view_id = list_view != null ? list_view._id : void 0;
  app_id = Session.get("app_id");

  if (object_name === "meeting") {
    return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/calendar/");
  } else {
    return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/grid/" + list_view_id);
  }
};

Creator.getObjectUrl = function (object_name, record_id, app_id) {
  var list_view, list_view_id;

  if (!app_id) {
    app_id = Session.get("app_id");
  }

  if (!object_name) {
    object_name = Session.get("object_name");
  }

  list_view = Creator.getListView(object_name, null);
  list_view_id = list_view != null ? list_view._id : void 0;

  if (record_id) {
    return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/view/" + record_id);
  } else {
    if (object_name === "meeting") {
      return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/calendar/");
    } else {
      return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/grid/" + list_view_id);
    }
  }
};

Creator.getObjectRouterUrl = function (object_name, record_id, app_id) {
  var list_view, list_view_id;

  if (!app_id) {
    app_id = Session.get("app_id");
  }

  if (!object_name) {
    object_name = Session.get("object_name");
  }

  list_view = Creator.getListView(object_name, null);
  list_view_id = list_view != null ? list_view._id : void 0;

  if (record_id) {
    return "/app/" + app_id + "/" + object_name + "/view/" + record_id;
  } else {
    if (object_name === "meeting") {
      return "/app/" + app_id + "/" + object_name + "/calendar/";
    } else {
      return "/app/" + app_id + "/" + object_name + "/grid/" + list_view_id;
    }
  }
};

Creator.getListViewUrl = function (object_name, app_id, list_view_id) {
  var url;
  url = Creator.getListViewRelativeUrl(object_name, app_id, list_view_id);
  return Creator.getRelativeUrl(url);
};

Creator.getListViewRelativeUrl = function (object_name, app_id, list_view_id) {
  if (list_view_id === "calendar") {
    return "/app/" + app_id + "/" + object_name + "/calendar/";
  } else {
    return "/app/" + app_id + "/" + object_name + "/grid/" + list_view_id;
  }
};

Creator.getSwitchListUrl = function (object_name, app_id, list_view_id) {
  if (list_view_id) {
    return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/" + list_view_id + "/list");
  } else {
    return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/list/switch");
  }
};

Creator.getRelatedObjectUrl = function (object_name, app_id, record_id, related_object_name) {
  return Creator.getRelativeUrl("/app/" + app_id + "/" + object_name + "/" + record_id + "/" + related_object_name + "/grid");
};

Creator.getObjectLookupFieldOptions = function (object_name, is_deep, is_skip_hide) {
  var _object, _options, fields, icon;

  _options = [];

  if (!object_name) {
    return _options;
  }

  _object = Creator.getObject(object_name);
  fields = _object != null ? _object.fields : void 0;
  icon = _object != null ? _object.icon : void 0;

  _.forEach(fields, function (f, k) {
    if (is_skip_hide && f.hidden) {
      return;
    }

    if (f.type === "select") {
      return _options.push({
        label: "" + (f.label || k),
        value: "" + k,
        icon: icon
      });
    } else {
      return _options.push({
        label: f.label || k,
        value: k,
        icon: icon
      });
    }
  });

  if (is_deep) {
    _.forEach(fields, function (f, k) {
      var r_object;

      if (is_skip_hide && f.hidden) {
        return;
      }

      if ((f.type === "lookup" || f.type === "master_detail") && f.reference_to) {
        r_object = Creator.getObject(f.reference_to);

        if (r_object) {
          return _.forEach(r_object.fields, function (f2, k2) {
            return _options.push({
              label: (f.label || k) + "=>" + (f2.label || k2),
              value: k + "." + k2,
              icon: r_object != null ? r_object.icon : void 0
            });
          });
        }
      }
    });
  }

  return _options;
};

Creator.getObjectFilterFieldOptions = function (object_name) {
  var _object, _options, fields, icon, permission_fields;

  _options = [];

  if (!object_name) {
    return _options;
  }

  _object = Creator.getObject(object_name);
  fields = _object != null ? _object.fields : void 0;
  permission_fields = Creator.getFields(object_name);
  icon = _object != null ? _object.icon : void 0;

  _.forEach(fields, function (f, k) {
    if (!_.include(["grid", "object", "[Object]", "[object]", "Object"], f.type) && !f.hidden) {
      if (!/\w+\./.test(k) && _.indexOf(permission_fields, k) > -1) {
        return _options.push({
          label: f.label || k,
          value: k,
          icon: icon
        });
      }
    }
  });

  return _options;
}; /*
   filters: 要转换的filters
   fields: 对象字段
   filter_fields: 默认过滤字段，支持字符串数组和对象数组两种格式，如:['filed_name1','filed_name2'],[{field:'filed_name1',required:true}]
   处理逻辑: 把filters中存在于filter_fields的过滤条件增加每项的is_default、is_required属性，不存在于filter_fields的过滤条件对应的移除每项的相关属性
   返回结果: 处理后的filters
    */

Creator.getFiltersWithFilterFields = function (filters, fields, filter_fields) {
  if (!filters) {
    filters = [];
  }

  if (!filter_fields) {
    filter_fields = [];
  }

  if (filter_fields != null ? filter_fields.length : void 0) {
    filter_fields.forEach(function (n) {
      if (_.isString(n)) {
        n = {
          field: n,
          required: false
        };
      }

      if (fields[n.field] && !_.findWhere(filters, {
        field: n.field
      })) {
        return filters.push({
          field: n.field,
          is_default: true,
          is_required: n.required
        });
      }
    });
  }

  filters.forEach(function (filterItem) {
    var matchField;
    matchField = filter_fields.find(function (n) {
      return n === filterItem.field || n.field === filterItem.field;
    });

    if (_.isString(matchField)) {
      matchField = {
        field: matchField,
        required: false
      };
    }

    if (matchField) {
      filterItem.is_default = true;
      return filterItem.is_required = matchField.required;
    } else {
      delete filterItem.is_default;
      return delete filterItem.is_required;
    }
  });
  return filters;
};

Creator.getObjectRecord = function (object_name, record_id, select_fields, expand) {
  var collection, record, ref, ref1, ref2;

  if (!object_name) {
    object_name = Session.get("object_name");
  }

  if (!record_id) {
    record_id = Session.get("record_id");
  }

  if (Meteor.isClient) {
    if (object_name === Session.get("object_name") && record_id === Session.get("record_id")) {
      if ((ref = Template.instance()) != null ? ref.record : void 0) {
        return (ref1 = Template.instance()) != null ? (ref2 = ref1.record) != null ? ref2.get() : void 0 : void 0;
      }
    } else {
      return Creator.odata.get(object_name, record_id, select_fields, expand);
    }
  }

  collection = Creator.getCollection(object_name);

  if (collection) {
    record = collection.findOne(record_id);
    return record;
  }
};

Creator.getApp = function (app_id) {
  var app, ref, ref1;

  if (!app_id) {
    app_id = Session.get("app_id");
  }

  app = Creator.Apps[app_id];

  if ((ref = Creator.deps) != null) {
    if ((ref1 = ref.app) != null) {
      ref1.depend();
    }
  }

  return app;
};

Creator.getAppObjectNames = function (app_id) {
  var app, objects;
  app = Creator.getApp(app_id);
  objects = [];

  if (app) {
    _.each(app.objects, function (v) {
      var obj;
      obj = Creator.getObject(v);

      if ((obj != null ? obj.permissions.get().allowRead : void 0) && !obj.hidden) {
        return objects.push(v);
      }
    });
  }

  return objects;
};

Creator.getVisibleApps = function (includeAdmin) {
  var apps;
  apps = [];

  _.each(Creator.Apps, function (v, k) {
    if (v.visible !== false && v._id !== "admin" || includeAdmin && v._id === "admin") {
      return apps.push(v);
    }
  });

  return apps;
};

Creator.getVisibleAppsObjects = function () {
  var apps, objects, visibleObjectNames;
  apps = Creator.getVisibleApps();
  visibleObjectNames = _.flatten(_.pluck(apps, 'objects'));
  objects = _.filter(Creator.Objects, function (obj) {
    if (visibleObjectNames.indexOf(obj.name) < 0) {
      return false;
    } else {
      return !obj.hidden;
    }
  });
  objects = objects.sort(Creator.sortingMethod.bind({
    key: "label"
  }));
  objects = _.pluck(objects, 'name');
  return _.uniq(objects);
};

Creator.getAppsObjects = function () {
  var objects, tempObjects;
  objects = [];
  tempObjects = [];

  _.forEach(Creator.Apps, function (app) {
    tempObjects = _.filter(app.objects, function (obj) {
      return !obj.hidden;
    });
    return objects = objects.concat(tempObjects);
  });

  return _.uniq(objects);
};

Creator.validateFilters = function (filters, logic) {
  var e, errorMsg, filter_items, filter_length, flag, index, word;
  filter_items = _.map(filters, function (obj) {
    if (_.isEmpty(obj)) {
      return false;
    } else {
      return obj;
    }
  });
  filter_items = _.compact(filter_items);
  errorMsg = "";
  filter_length = filter_items.length;

  if (logic) {
    logic = logic.replace(/\n/g, "").replace(/\s+/g, " ");

    if (/[._\-!+]+/ig.test(logic)) {
      errorMsg = "含有特殊字符。";
    }

    if (!errorMsg) {
      index = logic.match(/\d+/ig);

      if (!index) {
        errorMsg = "有些筛选条件进行了定义，但未在高级筛选条件中被引用。";
      } else {
        index.forEach(function (i) {
          if (i < 1 || i > filter_length) {
            return errorMsg = "您的筛选条件引用了未定义的筛选器：" + i + "。";
          }
        });
        flag = 1;

        while (flag <= filter_length) {
          if (!index.includes("" + flag)) {
            errorMsg = "有些筛选条件进行了定义，但未在高级筛选条件中被引用。";
          }

          flag++;
        }
      }
    }

    if (!errorMsg) {
      word = logic.match(/[a-zA-Z]+/ig);

      if (word) {
        word.forEach(function (w) {
          if (!/^(and|or)$/ig.test(w)) {
            return errorMsg = "检查您的高级筛选条件中的拼写。";
          }
        });
      }
    }

    if (!errorMsg) {
      try {
        Creator["eval"](logic.replace(/and/ig, "&&").replace(/or/ig, "||"));
      } catch (error) {
        e = error;
        errorMsg = "您的筛选器中含有特殊字符";
      }

      if (/(AND)[^()]+(OR)/ig.test(logic) || /(OR)[^()]+(AND)/ig.test(logic)) {
        errorMsg = "您的筛选器必须在连续性的 AND 和 OR 表达式前后使用括号。";
      }
    }
  }

  if (errorMsg) {
    console.log("error", errorMsg);

    if (Meteor.isClient) {
      toastr.error(errorMsg);
    }

    return false;
  } else {
    return true;
  }
}; /*
   options参数：
   	extend-- 是否需要把当前用户基本信息加入公式，即让公式支持Creator.USER_CONTEXT中的值，默认为true
   	userId-- 当前登录用户
   	spaceId-- 当前所在工作区
   extend为true时，后端需要额外传入userId及spaceId用于抓取Creator.USER_CONTEXT对应的值
    */

Creator.formatFiltersToMongo = function (filters, options) {
  var selector;

  if (!(filters != null ? filters.length : void 0)) {
    return;
  }

  if (!(filters[0] instanceof Array)) {
    filters = _.map(filters, function (obj) {
      return [obj.field, obj.operation, obj.value];
    });
  }

  selector = [];

  _.each(filters, function (filter) {
    var field, option, reg, sub_selector, value;
    field = filter[0];
    option = filter[1];

    if (Meteor.isClient) {
      value = Creator.evaluateFormula(filter[2]);
    } else {
      value = Creator.evaluateFormula(filter[2], null, options);
    }

    sub_selector = {};
    sub_selector[field] = {};

    if (option === "=") {
      sub_selector[field]["$eq"] = value;
    } else if (option === "<>") {
      sub_selector[field]["$ne"] = value;
    } else if (option === ">") {
      sub_selector[field]["$gt"] = value;
    } else if (option === ">=") {
      sub_selector[field]["$gte"] = value;
    } else if (option === "<") {
      sub_selector[field]["$lt"] = value;
    } else if (option === "<=") {
      sub_selector[field]["$lte"] = value;
    } else if (option === "startswith") {
      reg = new RegExp("^" + value, "i");
      sub_selector[field]["$regex"] = reg;
    } else if (option === "contains") {
      reg = new RegExp(value, "i");
      sub_selector[field]["$regex"] = reg;
    } else if (option === "notcontains") {
      reg = new RegExp("^((?!" + value + ").)*$", "i");
      sub_selector[field]["$regex"] = reg;
    }

    return selector.push(sub_selector);
  });

  return selector;
};

Creator.isBetweenFilterOperation = function (operation) {
  var ref;
  return operation === "between" || !!((ref = Creator.getBetweenTimeBuiltinValues(true)) != null ? ref[operation] : void 0);
}; /*
   options参数：
   	extend-- 是否需要把当前用户基本信息加入公式，即让公式支持Creator.USER_CONTEXT中的值，默认为true
   	userId-- 当前登录用户
   	spaceId-- 当前所在工作区
   	extend为true时，后端需要额外传入userId及spaceId用于抓取Creator.USER_CONTEXT对应的值
    */

Creator.formatFiltersToDev = function (filters, object_name, options) {
  var logicTempFilters, selector, steedosFilters;
  steedosFilters = require("@steedos/filters");

  if (!filters.length) {
    return;
  }

  if (options != null ? options.is_logic_or : void 0) {
    logicTempFilters = [];
    filters.forEach(function (n) {
      logicTempFilters.push(n);
      return logicTempFilters.push("or");
    });
    logicTempFilters.pop();
    filters = logicTempFilters;
  }

  selector = steedosFilters.formatFiltersToDev(filters, Creator.USER_CONTEXT);
  return selector;
}; /*
   options参数：
   	extend-- 是否需要把当前用户基本信息加入公式，即让公式支持Creator.USER_CONTEXT中的值，默认为true
   	userId-- 当前登录用户
   	spaceId-- 当前所在工作区
   extend为true时，后端需要额外传入userId及spaceId用于抓取Creator.USER_CONTEXT对应的值
    */

Creator.formatLogicFiltersToDev = function (filters, filter_logic, options) {
  var format_logic;
  format_logic = filter_logic.replace(/\(\s+/ig, "(").replace(/\s+\)/ig, ")").replace(/\(/g, "[").replace(/\)/g, "]").replace(/\s+/g, ",").replace(/(and|or)/ig, "'$1'");
  format_logic = format_logic.replace(/(\d)+/ig, function (x) {
    var _f, field, option, sub_selector, value;

    _f = filters[x - 1];
    field = _f.field;
    option = _f.operation;

    if (Meteor.isClient) {
      value = Creator.evaluateFormula(_f.value);
    } else {
      value = Creator.evaluateFormula(_f.value, null, options);
    }

    sub_selector = [];

    if (_.isArray(value) === true) {
      if (option === "=") {
        _.each(value, function (v) {
          return sub_selector.push([field, option, v], "or");
        });
      } else if (option === "<>") {
        _.each(value, function (v) {
          return sub_selector.push([field, option, v], "and");
        });
      } else {
        _.each(value, function (v) {
          return sub_selector.push([field, option, v], "or");
        });
      }

      if (sub_selector[sub_selector.length - 1] === "and" || sub_selector[sub_selector.length - 1] === "or") {
        sub_selector.pop();
      }
    } else {
      sub_selector = [field, option, value];
    }

    console.log("sub_selector", sub_selector);
    return JSON.stringify(sub_selector);
  });
  format_logic = "[" + format_logic + "]";
  return Creator["eval"](format_logic);
};

Creator.getRelatedObjects = function (object_name, spaceId, userId) {
  var _object, permissions, related_object_names, related_objects, unrelated_objects;

  if (Meteor.isClient) {
    if (!object_name) {
      object_name = Session.get("object_name");
    }

    if (!spaceId) {
      spaceId = Session.get("spaceId");
    }

    if (!userId) {
      userId = Meteor.userId();
    }
  }

  related_object_names = [];
  _object = Creator.getObject(object_name);

  if (!_object) {
    return related_object_names;
  }

  related_objects = Creator.getObjectRelateds(_object._collection_name);
  related_object_names = _.pluck(related_objects, "object_name");

  if ((related_object_names != null ? related_object_names.length : void 0) === 0) {
    return related_object_names;
  }

  permissions = Creator.getPermissions(object_name, spaceId, userId);
  unrelated_objects = permissions.unrelated_objects;
  related_object_names = _.difference(related_object_names, unrelated_objects);
  return _.filter(related_objects, function (related_object) {
    var allowRead, isActive, ref, related_object_name;
    related_object_name = related_object.object_name;
    isActive = related_object_names.indexOf(related_object_name) > -1;
    allowRead = (ref = Creator.getPermissions(related_object_name, spaceId, userId)) != null ? ref.allowRead : void 0;
    return isActive && allowRead;
  });
};

Creator.getRelatedObjectNames = function (object_name, spaceId, userId) {
  var related_objects;
  related_objects = Creator.getRelatedObjects(object_name, spaceId, userId);
  return _.pluck(related_objects, "object_name");
};

Creator.getActions = function (object_name, spaceId, userId) {
  var actions, disabled_actions, obj, permissions;

  if (Meteor.isClient) {
    if (!object_name) {
      object_name = Session.get("object_name");
    }

    if (!spaceId) {
      spaceId = Session.get("spaceId");
    }

    if (!userId) {
      userId = Meteor.userId();
    }
  }

  obj = Creator.getObject(object_name);

  if (!obj) {
    return;
  }

  permissions = Creator.getPermissions(object_name, spaceId, userId);
  disabled_actions = permissions.disabled_actions;
  actions = _.sortBy(_.values(obj.actions), 'sort');

  _.each(actions, function (action) {
    if (Steedos.isMobile() && action.on === "record" && action.name !== 'standard_edit') {
      return action.on = 'record_more';
    }
  });

  actions = _.filter(actions, function (action) {
    return _.indexOf(disabled_actions, action.name) < 0;
  });
  return actions;
};

/返回当前用户有权限访问的所有list_view，包括分享的，用户自定义非分享的（除非owner变了），以及默认的其他视图注意Creator.getPermissions函数中是不会有用户自定义非分享的视图的，所以Creator.getPermissions函数中拿到的结果不全，并不是当前用户能看到所有视图/;

Creator.getListViews = function (object_name, spaceId, userId) {
  var disabled_list_views, isMobile, list_views, object;

  if (Meteor.isClient) {
    if (!object_name) {
      object_name = Session.get("object_name");
    }

    if (!spaceId) {
      spaceId = Session.get("spaceId");
    }

    if (!userId) {
      userId = Meteor.userId();
    }
  }

  object = Creator.getObject(object_name);

  if (!object) {
    return;
  }

  disabled_list_views = Creator.getPermissions(object_name, spaceId, userId).disabled_list_views || [];
  list_views = [];
  isMobile = Steedos.isMobile();

  _.each(object.list_views, function (item, item_name) {
    if (isMobile && item.type === "calendar") {
      return;
    }

    if (item_name !== "default") {
      if (_.indexOf(disabled_list_views, item_name) < 0 || item.owner === userId) {
        return list_views.push(item);
      }
    }
  });

  return list_views;
};

Creator.getFields = function (object_name, spaceId, userId) {
  var fieldsName, unreadable_fields;

  if (Meteor.isClient) {
    if (!object_name) {
      object_name = Session.get("object_name");
    }

    if (!spaceId) {
      spaceId = Session.get("spaceId");
    }

    if (!userId) {
      userId = Meteor.userId();
    }
  }

  fieldsName = Creator.getObjectFieldsName(object_name);
  unreadable_fields = Creator.getPermissions(object_name, spaceId, userId).unreadable_fields;
  return _.difference(fieldsName, unreadable_fields);
};

Creator.isloading = function () {
  return !Creator.bootstrapLoaded.get();
};

Creator.convertSpecialCharacter = function (str) {
  return str.replace(/([\^\$\(\)\*\+\?\.\\\|\[\]\{\}])/g, "\\$1");
};

Creator.getDisabledFields = function (schema) {
  var fields;
  fields = _.map(schema, function (field, fieldName) {
    return field.autoform && field.autoform.disabled && !field.autoform.omit && fieldName;
  });
  fields = _.compact(fields);
  return fields;
};

Creator.getHiddenFields = function (schema) {
  var fields;
  fields = _.map(schema, function (field, fieldName) {
    return field.autoform && field.autoform.type === "hidden" && !field.autoform.omit && fieldName;
  });
  fields = _.compact(fields);
  return fields;
};

Creator.getFieldsWithNoGroup = function (schema) {
  var fields;
  fields = _.map(schema, function (field, fieldName) {
    return (!field.autoform || !field.autoform.group || field.autoform.group === "-") && (!field.autoform || field.autoform.type !== "hidden") && fieldName;
  });
  fields = _.compact(fields);
  return fields;
};

Creator.getSortedFieldGroupNames = function (schema) {
  var names;
  names = _.map(schema, function (field) {
    return field.autoform && field.autoform.group !== "-" && field.autoform.group;
  });
  names = _.compact(names);
  names = _.unique(names);
  return names;
};

Creator.getFieldsForGroup = function (schema, groupName) {
  var fields;
  fields = _.map(schema, function (field, fieldName) {
    return field.autoform && field.autoform.group === groupName && field.autoform.type !== "hidden" && fieldName;
  });
  fields = _.compact(fields);
  return fields;
};

Creator.getFieldsWithoutOmit = function (schema, keys) {
  keys = _.map(keys, function (key) {
    var field, ref;
    field = _.pick(schema, key);

    if ((ref = field[key].autoform) != null ? ref.omit : void 0) {
      return false;
    } else {
      return key;
    }
  });
  keys = _.compact(keys);
  return keys;
};

Creator.getFieldsInFirstLevel = function (firstLevelKeys, keys) {
  keys = _.map(keys, function (key) {
    if (_.indexOf(firstLevelKeys, key) > -1) {
      return key;
    } else {
      return false;
    }
  });
  keys = _.compact(keys);
  return keys;
};

Creator.getFieldsForReorder = function (schema, keys, isSingle) {
  var childKeys, fields, i, is_range_1, is_range_2, is_wide_1, is_wide_2, sc_1, sc_2;
  fields = [];
  i = 0;

  while (i < keys.length) {
    sc_1 = _.pick(schema, keys[i]);
    sc_2 = _.pick(schema, keys[i + 1]);
    is_wide_1 = false;
    is_wide_2 = false;
    is_range_1 = false;
    is_range_2 = false;

    _.each(sc_1, function (value) {
      var ref, ref1, ref2;

      if (((ref = value.autoform) != null ? ref.is_wide : void 0) || ((ref1 = value.autoform) != null ? ref1.type : void 0) === "table") {
        is_wide_1 = true;
      }

      if ((ref2 = value.autoform) != null ? ref2.is_range : void 0) {
        return is_range_1 = true;
      }
    });

    _.each(sc_2, function (value) {
      var ref, ref1, ref2;

      if (((ref = value.autoform) != null ? ref.is_wide : void 0) || ((ref1 = value.autoform) != null ? ref1.type : void 0) === "table") {
        is_wide_2 = true;
      }

      if ((ref2 = value.autoform) != null ? ref2.is_range : void 0) {
        return is_range_2 = true;
      }
    });

    if (isSingle) {
      fields.push(keys.slice(i, i + 1));
      i += 1;
    } else {
      if (!is_range_1 && is_range_2) {
        childKeys = keys.slice(i, i + 1);
        childKeys.push(void 0);
        fields.push(childKeys);
        i += 1;
      } else if (is_wide_1) {
        fields.push(keys.slice(i, i + 1));
        i += 1;
      } else if (!is_wide_1 && is_wide_2) {
        childKeys = keys.slice(i, i + 1);
        childKeys.push(void 0);
        fields.push(childKeys);
        i += 1;
      } else if (!is_wide_1 && !is_wide_2) {
        childKeys = keys.slice(i, i + 1);

        if (keys[i + 1]) {
          childKeys.push(keys[i + 1]);
        } else {
          childKeys.push(void 0);
        }

        fields.push(childKeys);
        i += 2;
      }
    }
  }

  return fields;
};

if (Meteor.isServer) {
  Creator.getAllRelatedObjects = function (object_name) {
    var related_object_names;
    related_object_names = [];

    _.each(Creator.Objects, function (related_object, related_object_name) {
      return _.each(related_object.fields, function (related_field, related_field_name) {
        if (related_field.type === "master_detail" && related_field.reference_to && related_field.reference_to === object_name) {
          return related_object_names.push(related_object_name);
        }
      });
    });

    if (Creator.getObject(object_name).enable_files) {
      related_object_names.push("cms_files");
    }

    return related_object_names;
  };
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lib":{"apps.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/lib/apps.coffee                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Creator.appsByName = {};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"methods":{"object_recent_viewed.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/object_recent_viewed.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  "object_recent_viewed": function (object_name, record_id) {
    var collection_recent_viewed, current_recent_viewed, doc, filters, spaceId;

    if (!this.userId) {
      return null;
    }

    if (object_name === "object_recent_viewed") {
      return;
    }

    if (object_name && record_id) {
      doc = Creator.getCollection(object_name).findOne({
        _id: record_id
      }, {
        fields: {
          space: 1
        }
      });
      spaceId = doc.space;
      collection_recent_viewed = Creator.getCollection("object_recent_viewed");
      filters = {
        owner: this.userId,
        space: spaceId,
        'record.o': object_name,
        'record.ids': [record_id]
      };
      current_recent_viewed = collection_recent_viewed.findOne(filters);

      if (current_recent_viewed) {
        collection_recent_viewed.update(current_recent_viewed._id, {
          $inc: {
            count: 1
          },
          $set: {
            modified: new Date(),
            modified_by: this.userId
          }
        });
      } else {
        collection_recent_viewed.insert({
          _id: collection_recent_viewed._makeNewID(),
          owner: this.userId,
          space: spaceId,
          record: {
            o: object_name,
            ids: [record_id]
          },
          count: 1,
          created: new Date(),
          created_by: this.userId,
          modified: new Date(),
          modified_by: this.userId
        });
      }
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object_recent_record.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/object_recent_record.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var async_recent_aggregate, recent_aggregate, search_object;

recent_aggregate = function (created_by, spaceId, _records, callback) {
  return Creator.Collections.object_recent_viewed.rawCollection().aggregate([{
    $match: {
      created_by: created_by,
      space: spaceId
    }
  }, {
    $group: {
      _id: {
        object_name: "$record.o",
        record_id: "$record.ids",
        space: "$space"
      },
      maxCreated: {
        $max: "$created"
      }
    }
  }, {
    $sort: {
      maxCreated: -1
    }
  }, {
    $limit: 10
  }], function (err, data) {
    if (err) {
      throw new Error(err);
    }

    data.forEach(function (doc) {
      return _records.push(doc._id);
    });

    if (callback && _.isFunction(callback)) {
      callback();
    }
  });
};

async_recent_aggregate = Meteor.wrapAsync(recent_aggregate);

search_object = function (space, object_name, userId, searchText) {
  var _object, _object_collection, _object_name_key, data, fields, query, query_and, records, search_Keywords;

  data = new Array();

  if (searchText) {
    _object = Creator.getObject(object_name);
    _object_collection = Creator.getCollection(object_name);
    _object_name_key = _object != null ? _object.NAME_FIELD_KEY : void 0;

    if (_object && _object_collection && _object_name_key) {
      query = {};
      search_Keywords = searchText.split(" ");
      query_and = [];
      search_Keywords.forEach(function (keyword) {
        var subquery;
        subquery = {};
        subquery[_object_name_key] = {
          $regex: keyword.trim()
        };
        return query_and.push(subquery);
      });
      query.$and = query_and;
      query.space = {
        $in: [space]
      };
      fields = {
        _id: 1
      };
      fields[_object_name_key] = 1;
      records = _object_collection.find(query, {
        fields: fields,
        sort: {
          modified: 1
        },
        limit: 5
      });
      records.forEach(function (record) {
        return data.push({
          _id: record._id,
          _name: record[_object_name_key],
          _object_name: object_name
        });
      });
    }
  }

  return data;
};

Meteor.methods({
  'object_recent_record': function (spaceId) {
    var data, records;
    data = new Array();
    records = new Array();
    async_recent_aggregate(this.userId, spaceId, records);
    records.forEach(function (item) {
      var fields, record, record_object, record_object_collection;
      record_object = Creator.getObject(item.object_name, item.space);

      if (!record_object) {
        return;
      }

      record_object_collection = Creator.getCollection(item.object_name, item.space);

      if (record_object && record_object_collection) {
        fields = {
          _id: 1
        };
        fields[record_object.NAME_FIELD_KEY] = 1;
        record = record_object_collection.findOne(item.record_id[0], {
          fields: fields
        });

        if (record) {
          return data.push({
            _id: record._id,
            _name: record[record_object.NAME_FIELD_KEY],
            _object_name: item.object_name
          });
        }
      }
    });
    return data;
  },
  'object_record_search': function (options) {
    var data, searchText, self, space;
    self = this;
    data = new Array();
    searchText = options.searchText;
    space = options.space;

    _.forEach(Creator.objectsByName, function (_object, name) {
      var object_record;

      if (_object.enable_search) {
        object_record = search_object(space, _object.name, self.userId, searchText);
        return data = data.concat(object_record);
      }
    });

    return data;
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object_listviews_options.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/object_listviews_options.coffee                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  update_filters: function (listview_id, filters, filter_scope, filter_logic) {
    return Creator.Collections.object_listviews.direct.update({
      _id: listview_id
    }, {
      $set: {
        filters: filters,
        filter_scope: filter_scope,
        filter_logic: filter_logic
      }
    });
  },
  update_columns: function (listview_id, columns) {
    check(columns, Array);

    if (columns.length < 1) {
      throw new Meteor.Error(400, "Select at least one field to display");
    }

    return Creator.Collections.object_listviews.update({
      _id: listview_id
    }, {
      $set: {
        columns: columns
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"report_data.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/report_data.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  'report_data': function (options) {
    var compoundFields, cursor, fields, filterFields, filter_scope, filters, objectFields, object_name, ref, result, selector, space, userId;
    check(options, Object);
    space = options.space;
    fields = options.fields;
    object_name = options.object_name;
    filter_scope = options.filter_scope;
    filters = options.filters;
    filterFields = {};
    compoundFields = [];
    objectFields = (ref = Creator.getObject(object_name)) != null ? ref.fields : void 0;

    _.each(fields, function (item, index) {
      var childKey, name, objectField, splits;
      splits = item.split(".");
      name = splits[0];
      objectField = objectFields[name];

      if (splits.length > 1 && objectField) {
        childKey = item.replace(name + ".", "");
        compoundFields.push({
          name: name,
          childKey: childKey,
          field: objectField
        });
      }

      return filterFields[name] = 1;
    });

    selector = {};
    userId = this.userId;
    selector.space = space;

    if (filter_scope === "spacex") {
      selector.space = {
        $in: [null, space]
      };
    } else if (filter_scope === "mine") {
      selector.owner = userId;
    }

    if (Creator.isCommonSpace(space) && Creator.isSpaceAdmin(space, this.userId)) {
      delete selector.space;
    }

    if (filters && filters.length > 0) {
      selector["$and"] = filters;
    }

    cursor = Creator.getCollection(object_name).find(selector, {
      fields: filterFields,
      skip: 0,
      limit: 10000
    });
    result = cursor.fetch();

    if (compoundFields.length) {
      result = result.map(function (item, index) {
        _.each(compoundFields, function (compoundFieldItem, index) {
          var compoundFilterFields, itemKey, itemValue, ref1, referenceItem, reference_to, type;
          itemKey = compoundFieldItem.name + "*%*" + compoundFieldItem.childKey.replace(/\./g, "*%*");
          itemValue = item[compoundFieldItem.name];
          type = compoundFieldItem.field.type;

          if (["lookup", "master_detail"].indexOf(type) > -1) {
            reference_to = compoundFieldItem.field.reference_to;
            compoundFilterFields = {};
            compoundFilterFields[compoundFieldItem.childKey] = 1;
            referenceItem = Creator.getCollection(reference_to).findOne({
              _id: itemValue
            }, {
              fields: compoundFilterFields
            });

            if (referenceItem) {
              item[itemKey] = referenceItem[compoundFieldItem.childKey];
            }
          } else if (type === "select") {
            options = compoundFieldItem.field.options;
            item[itemKey] = ((ref1 = _.findWhere(options, {
              value: itemValue
            })) != null ? ref1.label : void 0) || itemValue;
          } else {
            item[itemKey] = itemValue;
          }

          if (!item[itemKey]) {
            return item[itemKey] = "--";
          }
        });

        return item;
      });
      return result;
    } else {
      return result;
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user_tabular_settings.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/user_tabular_settings.coffee                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
/*
    type: "user"
    object_name: "object_listviews"
    record_id: "{object_name},{listview_id}"
    settings:
        column_width: { field_a: 100, field_2: 150 }
        sort: [["field_a", "desc"]]
    owner: {userId}
 */Meteor.methods({
  "tabular_sort_settings": function (object_name, list_view_id, sort) {
    var doc, obj, setting, userId;
    userId = this.userId;
    setting = Creator.Collections.settings.findOne({
      object_name: object_name,
      record_id: "object_listviews",
      owner: userId
    });

    if (setting) {
      return Creator.Collections.settings.update({
        _id: setting._id
      }, {
        $set: (obj = {}, obj["settings." + list_view_id + ".sort"] = sort, obj)
      });
    } else {
      doc = {
        type: "user",
        object_name: object_name,
        record_id: "object_listviews",
        settings: {},
        owner: userId
      };
      doc.settings[list_view_id] = {};
      doc.settings[list_view_id].sort = sort;
      return Creator.Collections.settings.insert(doc);
    }
  },
  "tabular_column_width_settings": function (object_name, list_view_id, column_width) {
    var doc, obj, setting, userId;
    userId = this.userId;
    setting = Creator.Collections.settings.findOne({
      object_name: object_name,
      record_id: "object_listviews",
      owner: userId
    });

    if (setting) {
      return Creator.Collections.settings.update({
        _id: setting._id
      }, {
        $set: (obj = {}, obj["settings." + list_view_id + ".column_width"] = column_width, obj)
      });
    } else {
      doc = {
        type: "user",
        object_name: object_name,
        record_id: "object_listviews",
        settings: {},
        owner: userId
      };
      doc.settings[list_view_id] = {};
      doc.settings[list_view_id].column_width = column_width;
      return Creator.Collections.settings.insert(doc);
    }
  },
  "grid_settings": function (object_name, list_view_id, column_width, sort) {
    var doc, obj, obj1, ref, ref1, setting, userId;
    userId = this.userId;
    setting = Creator.Collections.settings.findOne({
      object_name: object_name,
      record_id: "object_gridviews",
      owner: userId
    });

    if (setting) {
      column_width._id_actions = ((ref = setting.settings["" + list_view_id]) != null ? (ref1 = ref.column_width) != null ? ref1._id_actions : void 0 : void 0) === 46 ? 47 : 46;

      if (sort) {
        return Creator.Collections.settings.update({
          _id: setting._id
        }, {
          $set: (obj = {}, obj["settings." + list_view_id + ".sort"] = sort, obj["settings." + list_view_id + ".column_width"] = column_width, obj)
        });
      } else {
        return Creator.Collections.settings.update({
          _id: setting._id
        }, {
          $set: (obj1 = {}, obj1["settings." + list_view_id + ".column_width"] = column_width, obj1)
        });
      }
    } else {
      doc = {
        type: "user",
        object_name: object_name,
        record_id: "object_gridviews",
        settings: {},
        owner: userId
      };
      doc.settings[list_view_id] = {};
      doc.settings[list_view_id].column_width = column_width;
      doc.settings[list_view_id].sort = sort;
      return Creator.Collections.settings.insert(doc);
    }
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object_export2xml.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/object_export2xml.coffee                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _mixFieldsData, _mixRelatedData, _writeXmlFile, fs, logger, mkdirp, path, xml2js;

xml2js = require('xml2js');
fs = require('fs');
path = require('path');
mkdirp = require('mkdirp');
logger = new Logger('Export_TO_XML');

_writeXmlFile = function (jsonObj, objName) {
  var builder, day, fileAddress, fileName, filePath, month, now, stream, xml, year;
  builder = new xml2js.Builder();
  xml = builder.buildObject(jsonObj);
  stream = new Buffer(xml);
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth() + 1;
  day = now.getDate();
  filePath = path.join(__meteor_bootstrap__.serverDir, '../../../export/' + year + '/' + month + '/' + day + '/' + objName);
  fileName = (jsonObj != null ? jsonObj._id : void 0) + ".xml";
  fileAddress = path.join(filePath, fileName);

  if (!fs.existsSync(filePath)) {
    mkdirp.sync(filePath);
  }

  fs.writeFile(fileAddress, stream, function (err) {
    if (err) {
      return logger.error(jsonObj._id + "写入xml文件失败", err);
    }
  });
  return filePath;
};

_mixFieldsData = function (obj, objName) {
  var jsonObj, mixBool, mixDate, mixDefault, objFields, ref;
  jsonObj = {};
  objFields = typeof Creator !== "undefined" && Creator !== null ? (ref = Creator.getObject(objName)) != null ? ref.fields : void 0 : void 0;

  mixDefault = function (field_name) {
    return jsonObj[field_name] = obj[field_name] || "";
  };

  mixDate = function (field_name, type) {
    var date, dateStr, format;
    date = obj[field_name];

    if (type === "date") {
      format = "YYYY-MM-DD";
    } else {
      format = "YYYY-MM-DD HH:mm:ss";
    }

    if (date != null && format != null) {
      dateStr = moment(date).format(format);
    }

    return jsonObj[field_name] = dateStr || "";
  };

  mixBool = function (field_name) {
    if (obj[field_name] === true) {
      return jsonObj[field_name] = "是";
    } else if (obj[field_name] === false) {
      return jsonObj[field_name] = "否";
    } else {
      return jsonObj[field_name] = "";
    }
  };

  _.each(objFields, function (field, field_name) {
    switch (field != null ? field.type : void 0) {
      case "date":
      case "datetime":
        return mixDate(field_name, field.type);

      case "boolean":
        return mixBool(field_name);

      default:
        return mixDefault(field_name);
    }
  });

  return jsonObj;
};

_mixRelatedData = function (obj, objName) {
  var relatedObjNames, related_objects;
  related_objects = {};
  relatedObjNames = typeof Creator !== "undefined" && Creator !== null ? Creator.getAllRelatedObjects(objName) : void 0;
  relatedObjNames.forEach(function (relatedObjName) {
    var fields, obj1, ref, relatedCollection, relatedRecordList, relatedTableData, related_field_name;
    relatedTableData = [];

    if (relatedObjName === "cms_files") {
      related_field_name = "parent.ids";
    } else {
      fields = typeof Creator !== "undefined" && Creator !== null ? (ref = Creator.Objects[relatedObjName]) != null ? ref.fields : void 0 : void 0;
      related_field_name = "";

      _.each(fields, function (field, field_name) {
        if ((field != null ? field.reference_to : void 0) === objName) {
          return related_field_name = field_name;
        }
      });
    }

    if (related_field_name) {
      relatedCollection = Creator.getCollection(relatedObjName);
      relatedRecordList = relatedCollection.find((obj1 = {}, obj1["" + related_field_name] = obj._id, obj1)).fetch();
      relatedRecordList.forEach(function (relatedObj) {
        var fieldsData;
        fieldsData = _mixFieldsData(relatedObj, relatedObjName);
        return relatedTableData.push(fieldsData);
      });
    }

    return related_objects[relatedObjName] = relatedTableData;
  });
  return related_objects;
};

Creator.Export2xml = function (objName, recordList) {
  var collection;
  logger.info("Run Creator.Export2xml");
  console.time("Creator.Export2xml");
  collection = Creator.getCollection(objName);
  recordList = collection.find({}).fetch();
  recordList.forEach(function (recordObj) {
    var fieldsData, filePath, jsonObj, related_objects;
    jsonObj = {};
    jsonObj._id = recordObj._id;
    fieldsData = _mixFieldsData(recordObj, objName);
    jsonObj[objName] = fieldsData;
    related_objects = _mixRelatedData(recordObj, objName);
    jsonObj["related_objects"] = related_objects;
    return filePath = _writeXmlFile(jsonObj, objName);
  });
  console.timeEnd("Creator.Export2xml");
  return filePath;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object_import_jobs.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/object_import_jobs.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"related_objects_records.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/methods/related_objects_records.coffee                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.methods({
  related_objects_records: function (object_name, related_object_name, related_field_name, record_id, spaceId) {
    var permissions, related_records, selector, userId;
    userId = this.userId;

    if (related_object_name === "cfs.files.filerecord") {
      selector = {
        "metadata.space": spaceId
      };
    } else {
      selector = {
        space: spaceId
      };
    }

    if (related_object_name === "cms_files") {
      selector["parent.o"] = object_name;
      selector["parent.ids"] = [record_id];
    } else {
      selector[related_field_name] = record_id;
    }

    permissions = Creator.getPermissions(related_object_name, spaceId, userId);

    if (!permissions.viewAllRecords && permissions.allowRead) {
      selector.owner = userId;
    }

    related_records = Creator.getCollection(related_object_name).find(selector);
    return related_records.count();
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"publications":{"object.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/object.coffee                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish("creator_object_record", function (object_name, id, space_id) {
  var collection;
  collection = Creator.getCollection(object_name, space_id);

  if (collection) {
    return collection.find({
      _id: id
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object_tabular.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/object_tabular.coffee                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publishComposite("steedos_object_tabular", function (tableName, ids, fields, spaceId) {
  var _fields, _keys, _object, _object_name, data, keys, object_colleciton, reference_fields, self;

  if (!this.userId) {
    return this.ready();
  }

  check(tableName, String);
  check(ids, Array);
  check(fields, Match.Optional(Object));
  _object_name = tableName.replace("creator_", "");
  _object = Creator.getObject(_object_name, spaceId);

  if (spaceId) {
    _object_name = Creator.getObjectName(_object);
  }

  object_colleciton = Creator.getCollection(_object_name);
  _fields = _object != null ? _object.fields : void 0;

  if (!_fields || !object_colleciton) {
    return this.ready();
  }

  reference_fields = _.filter(_fields, function (f) {
    return _.isFunction(f.reference_to) || !_.isEmpty(f.reference_to);
  });
  self = this;
  self.unblock();

  if (reference_fields.length > 0) {
    data = {
      find: function () {
        var field_keys;
        self.unblock();
        field_keys = {};

        _.each(_.keys(fields), function (f) {
          if (!/\w+(\.\$){1}\w?/.test(f)) {
            return field_keys[f] = 1;
          }
        });

        return object_colleciton.find({
          _id: {
            $in: ids
          }
        }, {
          fields: field_keys
        });
      }
    };
    data.children = [];
    keys = _.keys(fields);

    if (keys.length < 1) {
      keys = _.keys(_fields);
    }

    _keys = [];
    keys.forEach(function (key) {
      if (_object.schema._objectKeys[key + '.']) {
        _keys = _keys.concat(_.map(_object.schema._objectKeys[key + '.'], function (k) {
          return key + '.' + k;
        }));
      }

      return _keys.push(key);
    });

    _keys.forEach(function (key) {
      var reference_field;
      reference_field = _fields[key];

      if (reference_field && (_.isFunction(reference_field.reference_to) || !_.isEmpty(reference_field.reference_to))) {
        return data.children.push({
          find: function (parent) {
            var children_fields, e, name_field_key, p_k, query, reference_ids, reference_to, reference_to_object, s_k;

            try {
              self.unblock();
              query = {};

              if (/\w+(\.\$\.){1}\w+/.test(key)) {
                p_k = key.replace(/(\w+)\.\$\.\w+/ig, "$1");
                s_k = key.replace(/\w+\.\$\.(\w+)/ig, "$1");
                reference_ids = parent[p_k].getProperty(s_k);
              } else {
                reference_ids = key.split('.').reduce(function (o, x) {
                  return o != null ? o[x] : void 0;
                }, parent);
              }

              reference_to = reference_field.reference_to;

              if (_.isFunction(reference_to)) {
                reference_to = reference_to();
              }

              if (_.isArray(reference_to)) {
                if (_.isObject(reference_ids) && !_.isArray(reference_ids)) {
                  reference_to = reference_ids.o;
                  reference_ids = reference_ids.ids || [];
                } else {
                  return [];
                }
              }

              if (_.isArray(reference_ids)) {
                query._id = {
                  $in: reference_ids
                };
              } else {
                query._id = reference_ids;
              }

              reference_to_object = Creator.getObject(reference_to, spaceId);
              name_field_key = reference_to_object.NAME_FIELD_KEY;
              children_fields = {
                _id: 1,
                space: 1
              };

              if (name_field_key) {
                children_fields[name_field_key] = 1;
              }

              return Creator.getCollection(reference_to, spaceId).find(query, {
                fields: children_fields
              });
            } catch (error) {
              e = error;
              console.log(reference_to, parent, e);
              return [];
            }
          }
        });
      }
    });

    return data;
  } else {
    return {
      find: function () {
        self.unblock();
        return object_colleciton.find({
          _id: {
            $in: ids
          }
        }, {
          fields: fields
        });
      }
    };
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"object_listviews.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/object_listviews.coffee                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish("object_listviews", function (object_name, spaceId) {
  var userId;
  userId = this.userId;
  return Creator.getCollection("object_listviews").find({
    object_name: object_name,
    space: spaceId,
    "$or": [{
      owner: userId
    }, {
      shared: true
    }]
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"user_tabular_settings.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/user_tabular_settings.coffee                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish("user_tabular_settings", function (object_name) {
  var userId;
  userId = this.userId;
  return Creator.Collections.settings.find({
    object_name: {
      $in: object_name
    },
    record_id: {
      $in: ["object_listviews", "object_gridviews"]
    },
    owner: userId
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"related_objects_records.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/related_objects_records.coffee                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish("related_objects_records", function (object_name, related_object_name, related_field_name, record_id, spaceId) {
  var permissions, selector, userId;
  userId = this.userId;

  if (related_object_name === "cfs.files.filerecord") {
    selector = {
      "metadata.space": spaceId
    };
  } else {
    selector = {
      space: spaceId
    };
  }

  if (related_object_name === "cms_files") {
    selector["parent.o"] = object_name;
    selector["parent.ids"] = [record_id];
  } else {
    selector[related_field_name] = record_id;
  }

  permissions = Creator.getPermissions(related_object_name, spaceId, userId);

  if (!permissions.viewAllRecords && permissions.allowRead) {
    selector.owner = userId;
  }

  return Creator.getCollection(related_object_name).find(selector);
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"space_user_info.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/space_user_info.coffee                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
Meteor.publish('space_user_info', function (spaceId, userId) {
  return Creator.getCollection("space_users").find({
    space: spaceId,
    user: userId
  });
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"contacts_view_limits.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/contacts_view_limits.coffee                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isServer) {
  Meteor.publish('contacts_view_limits', function (spaceId) {
    var selector;

    if (!this.userId) {
      return this.ready();
    }

    if (!spaceId) {
      return this.ready();
    }

    selector = {
      space: spaceId,
      key: 'contacts_view_limits'
    };
    return db.space_settings.find(selector);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"contacts_no_force_phone_users.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/publications/contacts_no_force_phone_users.coffee                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
if (Meteor.isServer) {
  Meteor.publish('contacts_no_force_phone_users', function (spaceId) {
    var selector;

    if (!this.userId) {
      return this.ready();
    }

    if (!spaceId) {
      return this.ready();
    }

    selector = {
      space: spaceId,
      key: 'contacts_no_force_phone_users'
    };
    return db.space_settings.find(selector);
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"permission_manager.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/lib/permission_manager.coffee                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
permissionManager = {};

permissionManager.getFlowPermissions = function (flow_id, user_id) {
  var flow, my_permissions, org_ids, organizations, orgs_can_add, orgs_can_admin, orgs_can_monitor, space_id, users_can_add, users_can_admin, users_can_monitor;
  flow = uuflowManager.getFlow(flow_id);
  space_id = flow.space;
  org_ids = new Array();
  organizations = db.organizations.find({
    space: space_id,
    users: user_id
  }, {
    fields: {
      parents: 1
    }
  }).fetch();

  _.each(organizations, function (org) {
    org_ids.push(org._id);

    if (org.parents) {
      return _.each(org.parents, function (parent_id) {
        return org_ids.push(parent_id);
      });
    }
  });

  org_ids = _.uniq(org_ids);
  my_permissions = new Array();

  if (flow.perms) {
    if (flow.perms.users_can_add) {
      users_can_add = flow.perms.users_can_add;

      if (users_can_add.includes(user_id)) {
        my_permissions.push("add");
      }
    }

    if (flow.perms.orgs_can_add) {
      orgs_can_add = flow.perms.orgs_can_add;

      _.each(org_ids, function (org_id) {
        if (orgs_can_add.includes(org_id)) {
          return my_permissions.push("add");
        }
      });
    }

    if (flow.perms.users_can_monitor) {
      users_can_monitor = flow.perms.users_can_monitor;

      if (users_can_monitor.includes(user_id)) {
        my_permissions.push("monitor");
      }
    }

    if (flow.perms.orgs_can_monitor) {
      orgs_can_monitor = flow.perms.orgs_can_monitor;

      _.each(org_ids, function (org_id) {
        if (orgs_can_monitor.includes(org_id)) {
          return my_permissions.push("monitor");
        }
      });
    }

    if (flow.perms.users_can_admin) {
      users_can_admin = flow.perms.users_can_admin;

      if (users_can_admin.includes(user_id)) {
        my_permissions.push("admin");
      }
    }

    if (flow.perms.orgs_can_admin) {
      orgs_can_admin = flow.perms.orgs_can_admin;

      _.each(org_ids, function (org_id) {
        if (orgs_can_admin.includes(org_id)) {
          return my_permissions.push("admin");
        }
      });
    }
  }

  my_permissions = _.uniq(my_permissions);
  return my_permissions;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"uuflow_manager.coffee":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/lib/uuflow_manager.coffee                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var _eval;

_eval = require('eval');
uuflowManager = {};

uuflowManager.check_authorization = function (req) {
  var authToken, hashedToken, query, user, userId;
  query = req.query;
  userId = query["X-User-Id"];
  authToken = query["X-Auth-Token"];

  if (!userId || !authToken) {
    throw new Meteor.Error(401, 'Unauthorized');
  }

  hashedToken = Accounts._hashLoginToken(authToken);
  user = Meteor.users.findOne({
    _id: userId,
    "services.resume.loginTokens.hashedToken": hashedToken
  });

  if (!user) {
    throw new Meteor.Error(401, 'Unauthorized');
  }

  return user;
};

uuflowManager.getSpace = function (space_id) {
  var space;
  space = Creator.Collections.spaces.findOne(space_id);

  if (!space) {
    throw new Meteor.Error('error!', "space_id有误或此space已经被删除");
  }

  return space;
};

uuflowManager.getFlow = function (flow_id) {
  var flow;
  flow = Creator.Collections.flows.findOne(flow_id);

  if (!flow) {
    throw new Meteor.Error('error!', "id有误或此流程已经被删除");
  }

  return flow;
};

uuflowManager.getSpaceUser = function (space_id, user_id) {
  var space_user;
  space_user = Creator.Collections.space_users.findOne({
    space: space_id,
    user: user_id
  });

  if (!space_user) {
    throw new Meteor.Error('error!', "user_id对应的用户不属于当前space");
  }

  return space_user;
};

uuflowManager.getSpaceUserOrgInfo = function (space_user) {
  var info, org;
  info = new Object();
  info.organization = space_user.organization;
  org = Creator.Collections.organizations.findOne(space_user.organization, {
    fields: {
      name: 1,
      fullname: 1
    }
  });
  info.organization_name = org.name;
  info.organization_fullname = org.fullname;
  return info;
};

uuflowManager.isFlowEnabled = function (flow) {
  if (flow.state !== "enabled") {
    throw new Meteor.Error('error!', "流程未启用,操作失败");
  }
};

uuflowManager.isFlowSpaceMatched = function (flow, space_id) {
  if (flow.space !== space_id) {
    throw new Meteor.Error('error!', "流程和工作区ID不匹配");
  }
};

uuflowManager.getForm = function (form_id) {
  var form;
  form = Creator.Collections.forms.findOne(form_id);

  if (!form) {
    throw new Meteor.Error('error!', '表单ID有误或此表单已经被删除');
  }

  return form;
};

uuflowManager.getCategory = function (category_id) {
  return Creator.Collections.categories.findOne(category_id);
};

uuflowManager.create_instance = function (instance_from_client, user_info) {
  var appr_obj, approve_from_client, category, flow, flow_id, form, ins_obj, new_ins_id, now, permissions, space, space_id, space_user, space_user_org_info, start_step, trace_from_client, trace_obj, user_id;
  check(instance_from_client["applicant"], String);
  check(instance_from_client["space"], String);
  check(instance_from_client["flow"], String);
  check(instance_from_client["record_ids"], [{
    o: String,
    ids: [String]
  }]);
  uuflowManager.checkIsInApproval(instance_from_client["record_ids"][0], instance_from_client["space"]);
  space_id = instance_from_client["space"];
  flow_id = instance_from_client["flow"];
  user_id = user_info._id;
  trace_from_client = null;
  approve_from_client = null;

  if (instance_from_client["traces"] && instance_from_client["traces"][0]) {
    trace_from_client = instance_from_client["traces"][0];

    if (trace_from_client["approves"] && trace_from_client["approves"][0]) {
      approve_from_client = instance_from_client["traces"][0]["approves"][0];
    }
  }

  space = uuflowManager.getSpace(space_id);
  flow = uuflowManager.getFlow(flow_id);
  space_user = uuflowManager.getSpaceUser(space_id, user_id);
  space_user_org_info = uuflowManager.getSpaceUserOrgInfo(space_user);
  uuflowManager.isFlowEnabled(flow);
  uuflowManager.isFlowSpaceMatched(flow, space_id);
  form = uuflowManager.getForm(flow.form);
  permissions = permissionManager.getFlowPermissions(flow_id, user_id);

  if (!permissions.includes("add")) {
    throw new Meteor.Error('error!', "当前用户没有此流程的新建权限");
  }

  now = new Date();
  ins_obj = {};
  ins_obj._id = Creator.Collections.instances._makeNewID();
  ins_obj.space = space_id;
  ins_obj.flow = flow_id;
  ins_obj.flow_version = flow.current._id;
  ins_obj.form = flow.form;
  ins_obj.form_version = flow.current.form_version;
  ins_obj.name = flow.name;
  ins_obj.submitter = user_id;
  ins_obj.submitter_name = user_info.name;
  ins_obj.applicant = instance_from_client["applicant"] ? instance_from_client["applicant"] : user_id;
  ins_obj.applicant_name = instance_from_client["applicant_name"] ? instance_from_client["applicant_name"] : user_info.name;
  ins_obj.applicant_organization = instance_from_client["applicant_organization"] ? instance_from_client["applicant_organization"] : space_user.organization;
  ins_obj.applicant_organization_name = instance_from_client["applicant_organization_name"] ? instance_from_client["applicant_organization_name"] : space_user_org_info.organization_name;
  ins_obj.applicant_organization_fullname = instance_from_client["applicant_organization_fullname"] ? instance_from_client["applicant_organization_fullname"] : space_user_org_info.organization_fullname;
  ins_obj.applicant_company = instance_from_client["applicant_company"] ? instance_from_client["applicant_company"] : space_user.company_id;
  ins_obj.state = 'draft';
  ins_obj.code = '';
  ins_obj.is_archived = false;
  ins_obj.is_deleted = false;
  ins_obj.created = now;
  ins_obj.created_by = user_id;
  ins_obj.modified = now;
  ins_obj.modified_by = user_id;
  ins_obj.values = new Object();
  ins_obj.record_ids = instance_from_client["record_ids"];

  if (space_user.company_id) {
    ins_obj.company_id = space_user.company_id;
  }

  trace_obj = {};
  trace_obj._id = new Mongo.ObjectID()._str;
  trace_obj.instance = ins_obj._id;
  trace_obj.is_finished = false;
  start_step = _.find(flow.current.steps, function (step) {
    return step.step_type === 'start';
  });
  trace_obj.step = start_step._id;
  trace_obj.name = start_step.name;
  trace_obj.start_date = now;
  appr_obj = {};
  appr_obj._id = new Mongo.ObjectID()._str;
  appr_obj.instance = ins_obj._id;
  appr_obj.trace = trace_obj._id;
  appr_obj.is_finished = false;
  appr_obj.user = instance_from_client["applicant"] ? instance_from_client["applicant"] : user_id;
  appr_obj.user_name = instance_from_client["applicant_name"] ? instance_from_client["applicant_name"] : user_info.name;
  appr_obj.handler = user_id;
  appr_obj.handler_name = user_info.name;
  appr_obj.handler_organization = space_user.organization;
  appr_obj.handler_organization_name = space_user_org_info.name;
  appr_obj.handler_organization_fullname = space_user_org_info.fullname;
  appr_obj.type = 'draft';
  appr_obj.start_date = now;
  appr_obj.read_date = now;
  appr_obj.is_read = true;
  appr_obj.is_error = false;
  appr_obj.description = '';
  appr_obj.values = uuflowManager.initiateValues(ins_obj.record_ids[0], flow_id, space_id, form.current.fields);
  trace_obj.approves = [appr_obj];
  ins_obj.traces = [trace_obj];
  ins_obj.inbox_users = instance_from_client.inbox_users || [];
  ins_obj.current_step_name = start_step.name;

  if (flow.auto_remind === true) {
    ins_obj.auto_remind = true;
  }

  ins_obj.flow_name = flow.name;

  if (form.category) {
    category = uuflowManager.getCategory(form.category);

    if (category) {
      ins_obj.category_name = category.name;
      ins_obj.category = category._id;
    }
  }

  new_ins_id = Creator.Collections.instances.insert(ins_obj);
  uuflowManager.initiateAttach(ins_obj.record_ids[0], space_id, ins_obj._id, appr_obj._id);
  uuflowManager.initiateRecordInstanceInfo(ins_obj.record_ids[0], new_ins_id, space_id);
  return new_ins_id;
};

uuflowManager.initiateValues = function (recordIds, flowId, spaceId, fields) {
  var fieldCodes, filterValues, ow, record, tableFieldCodes, tableFieldMap, values;
  fieldCodes = [];

  _.each(fields, function (f) {
    if (f.type === 'section') {
      return _.each(f.fields, function (ff) {
        return fieldCodes.push(ff.code);
      });
    } else {
      return fieldCodes.push(f.code);
    }
  });

  values = {};
  ow = Creator.Collections.object_workflows.findOne({
    object_name: recordIds.o,
    flow_id: flowId
  });
  record = Creator.getCollection(recordIds.o, spaceId).findOne(recordIds.ids[0]);

  if (ow && record) {
    tableFieldCodes = [];
    tableFieldMap = [];
    ow.field_map.forEach(function (fm) {
      var fieldsObj, lookupFieldName, lookupObject, oTableCode, object, objectField, objectFieldName, wTableCode;

      if (fm.workflow_field.indexOf('.$.') > 0 && fm.object_field.indexOf('.$.') > 0) {
        wTableCode = fm.workflow_field.split('.$.')[0];
        oTableCode = fm.object_field.split('.$.')[0];

        if (record.hasOwnProperty(oTableCode) && _.isArray(record[oTableCode])) {
          tableFieldCodes.push(JSON.stringify({
            workflow_table_field_code: wTableCode,
            object_table_field_code: oTableCode
          }));
          return tableFieldMap.push(fm);
        }
      } else if (fm.object_field.indexOf('.') > 0 && fm.object_field.indexOf('.$.') === -1) {
        objectFieldName = fm.object_field.split('.')[0];
        lookupFieldName = fm.object_field.split('.')[1];
        object = Creator.getObject(recordIds.o, spaceId);

        if (object) {
          objectField = object.fields[objectFieldName];

          if (objectField && (objectField.type === "lookup" || objectField.type === "master_detail") && !objectField.multiple) {
            fieldsObj = {};
            fieldsObj[lookupFieldName] = 1;
            lookupObject = Creator.getCollection(objectField.reference_to, spaceId).findOne(record[objectFieldName], {
              fields: fieldsObj
            });

            if (lookupObject) {
              return values[fm.workflow_field] = lookupObject[lookupFieldName];
            }
          }
        }
      } else if (record.hasOwnProperty(fm.object_field)) {
        return values[fm.workflow_field] = record[fm.object_field];
      }
    });

    _.uniq(tableFieldCodes).forEach(function (tfc) {
      var c;
      c = JSON.parse(tfc);
      values[c.workflow_table_field_code] = [];
      return record[c.object_table_field_code].forEach(function (tr) {
        var newTr;
        newTr = {};

        _.each(tr, function (v, k) {
          return tableFieldMap.forEach(function (tfm) {
            var wTdCode;

            if (tfm.object_field === c.object_table_field_code + '.$.' + k) {
              wTdCode = tfm.workflow_field.split('.$.')[1];
              return newTr[wTdCode] = v;
            }
          });
        });

        if (!_.isEmpty(newTr)) {
          return values[c.workflow_table_field_code].push(newTr);
        }
      });
    });

    if (ow.field_map_script) {
      _.extend(values, uuflowManager.evalFieldMapScript(ow.field_map_script, recordIds.o, spaceId, recordIds.ids[0]));
    }
  }

  filterValues = {};

  _.each(_.keys(values), function (k) {
    if (fieldCodes.includes(k)) {
      return filterValues[k] = values[k];
    }
  });

  return filterValues;
};

uuflowManager.evalFieldMapScript = function (field_map_script, objectName, spaceId, objectId) {
  var func, record, script, values;
  record = Creator.getCollection(objectName, spaceId).findOne(objectId);
  script = "module.exports = function (record) { " + field_map_script + " }";
  func = _eval(script, "field_map_script");
  values = func(record);

  if (_.isObject(values)) {
    return values;
  } else {
    console.error("evalFieldMapScript: 脚本返回值类型不是对象");
  }

  return {};
};

uuflowManager.initiateAttach = function (recordIds, spaceId, insId, approveId) {
  Creator.Collections['cms_files'].find({
    space: spaceId,
    parent: recordIds
  }).forEach(function (cf) {
    return _.each(cf.versions, function (versionId, idx) {
      var f, newFile;
      f = Creator.Collections['cfs.files.filerecord'].findOne(versionId);
      newFile = new FS.File();
      return newFile.attachData(f.createReadStream('files'), {
        type: f.original.type
      }, function (err) {
        var metadata;

        if (err) {
          throw new Meteor.Error(err.error, err.reason);
        }

        newFile.name(f.name());
        newFile.size(f.size());
        metadata = {
          owner: f.metadata.owner,
          owner_name: f.metadata.owner_name,
          space: spaceId,
          instance: insId,
          approve: approveId,
          parent: cf._id
        };

        if (idx === 0) {
          metadata.current = true;
        }

        newFile.metadata = metadata;
        return cfs.instances.insert(newFile);
      });
    });
  });
};

uuflowManager.initiateRecordInstanceInfo = function (recordIds, insId, spaceId) {
  Creator.getCollection(recordIds.o, spaceId).update(recordIds.ids[0], {
    $push: {
      instances: {
        $each: [{
          _id: insId,
          state: 'draft'
        }],
        $position: 0
      }
    },
    $set: {
      locked: true,
      instance_state: 'draft'
    }
  });
};

uuflowManager.checkIsInApproval = function (recordIds, spaceId) {
  var record;
  record = Creator.getCollection(recordIds.o, spaceId).findOne({
    _id: recordIds.ids[0],
    instances: {
      $exists: true
    }
  }, {
    fields: {
      instances: 1
    }
  });

  if (record && record.instances[0].state !== 'completed' && Creator.Collections.instances.find(record.instances[0]._id).count() > 0) {
    throw new Meteor.Error('error!', "此记录已发起流程正在审批中，待审批结束方可发起下一次审批！");
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"routes":{"s3.coffee":function(require){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/routes/s3.coffee                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var Busboy, Fiber, getQueryString;
Busboy = require('busboy');
Fiber = require('fibers');

JsonRoutes.parseFiles = function (req, res, next) {
  var busboy, files, image;
  files = [];
  image = {};

  if (req.method === "POST") {
    busboy = new Busboy({
      headers: req.headers
    });
    busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
      var buffers;
      image.mimeType = mimetype;
      image.encoding = encoding;
      image.filename = filename;
      buffers = [];
      file.on('data', function (data) {
        return buffers.push(data);
      });
      return file.on('end', function () {
        image.data = Buffer.concat(buffers);
        return files.push(image);
      });
    });
    busboy.on("field", function (fieldname, value) {
      return req.body[fieldname] = value;
    });
    busboy.on("finish", function () {
      req.files = files;
      return Fiber(function () {
        return next();
      }).run();
    });
    return req.pipe(busboy);
  } else {
    return next();
  }
};

JsonRoutes.add("post", "/s3/", function (req, res, next) {
  return JsonRoutes.parseFiles(req, res, function () {
    var collection, fileCollection, newFile;
    collection = cfs.files;
    fileCollection = Creator.getObject("cms_files").db;

    if (req.files && req.files[0]) {
      newFile = new FS.File();
      return newFile.attachData(req.files[0].data, {
        type: req.files[0].mimeType
      }, function (err) {
        var body, e, extention, fileObj, filename, metadata, newFileObjId, object_name, owner, owner_name, parent, record_id, resp, size, space;
        filename = req.files[0].filename;
        extention = filename.split('.').pop();

        if (["image.jpg", "image.gif", "image.jpeg", "image.png"].includes(filename.toLowerCase())) {
          filename = "image-" + moment(new Date()).format('YYYYMMDDHHmmss') + "." + extention;
        }

        body = req.body;

        try {
          if (body && (body['upload_from'] === "IE" || body['upload_from'] === "node")) {
            filename = decodeURIComponent(filename);
          }
        } catch (error) {
          e = error;
          console.error(filename);
          console.error(e);
          filename = filename.replace(/%/g, "-");
        }

        newFile.name(filename);

        if (body && body['owner'] && body['space'] && body['record_id'] && body['object_name']) {
          parent = body['parent'];
          owner = body['owner'];
          owner_name = body['owner_name'];
          space = body['space'];
          record_id = body['record_id'];
          object_name = body['object_name'];
          parent = body['parent'];
          metadata = {
            owner: owner,
            owner_name: owner_name,
            space: space,
            record_id: record_id,
            object_name: object_name
          };

          if (parent) {
            metadata.parent = parent;
          }

          newFile.metadata = metadata;
          fileObj = collection.insert(newFile);
        } else {
          fileObj = collection.insert(newFile);
        }

        size = fileObj.original.size;

        if (!size) {
          size = 1024;
        }

        if (parent) {
          fileCollection.update({
            _id: parent
          }, {
            $set: {
              extention: extention,
              size: size,
              modified: new Date(),
              modified_by: owner
            },
            $push: {
              versions: {
                $each: [fileObj._id],
                $position: 0
              }
            }
          });
        } else {
          newFileObjId = fileCollection.direct.insert({
            name: filename,
            description: '',
            extention: extention,
            size: size,
            versions: [fileObj._id],
            parent: {
              o: object_name,
              ids: [record_id]
            },
            owner: owner,
            space: space,
            created: new Date(),
            created_by: owner,
            modified: new Date(),
            modified_by: owner
          });
          fileObj.update({
            $set: {
              'metadata.parent': newFileObjId
            }
          });
        }

        resp = {
          version_id: fileObj._id,
          size: size
        };
        res.setHeader("x-amz-version-id", fileObj._id);
        res.end(JSON.stringify(resp));
      });
    } else {
      res.statusCode = 500;
      return res.end();
    }
  });
});
JsonRoutes.add("post", "/s3/:collection", function (req, res, next) {
  var collectionName, e, userId;

  try {
    userId = Steedos.getUserIdFromAuthToken(req, res);

    if (!userId) {
      throw new Meteor.Error(500, "No permission");
    }

    collectionName = req.params.collection;
    JsonRoutes.parseFiles(req, res, function () {
      var collection, newFile, resultData;
      collection = cfs[collectionName];

      if (!collection) {
        throw new Meteor.Error(500, "No Collection");
      }

      if (req.files && req.files[0]) {
        newFile = new FS.File();
        newFile.name(req.files[0].filename);

        if (req.body) {
          newFile.metadata = req.body;
        }

        newFile.owner = userId;
        newFile.metadata.owner = userId;
        newFile.attachData(req.files[0].data, {
          type: req.files[0].mimeType
        });
        collection.insert(newFile);
        resultData = collection.files.findOne(newFile._id);
        JsonRoutes.sendResult(res, {
          code: 200,
          data: resultData
        });
      } else {
        throw new Meteor.Error(500, "No File");
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: e.error || 500,
      data: {
        errors: e.reason || e.message
      }
    });
  }
});

getQueryString = function (accessKeyId, secretAccessKey, query, method) {
  var ALY, canonicalizedQueryString, date, queryKeys, queryStr, stringToSign;
  console.log("----uuflowManager.getQueryString----");
  ALY = require('aliyun-sdk');
  date = ALY.util.date.getDate();
  query.Format = "json";
  query.Version = "2017-03-21";
  query.AccessKeyId = accessKeyId;
  query.SignatureMethod = "HMAC-SHA1";
  query.Timestamp = ALY.util.date.iso8601(date);
  query.SignatureVersion = "1.0";
  query.SignatureNonce = String(date.getTime());
  queryKeys = Object.keys(query);
  queryKeys.sort();
  canonicalizedQueryString = "";
  queryKeys.forEach(function (name) {
    return canonicalizedQueryString += "&" + name + "=" + ALY.util.popEscape(query[name]);
  });
  stringToSign = method.toUpperCase() + '&%2F&' + ALY.util.popEscape(canonicalizedQueryString.substr(1));
  query.Signature = ALY.util.crypto.hmac(secretAccessKey + '&', stringToSign, 'base64', 'sha1');
  queryStr = ALY.util.queryParamsToString(query);
  console.log(queryStr);
  return queryStr;
};

JsonRoutes.add("post", "/s3/vod/upload", function (req, res, next) {
  var ALY, collectionName, e, userId;

  try {
    userId = Steedos.getUserIdFromAuthToken(req, res);

    if (!userId) {
      throw new Meteor.Error(500, "No permission");
    }

    collectionName = "videos";
    ALY = require('aliyun-sdk');
    JsonRoutes.parseFiles(req, res, function () {
      var accessKeyId, collection, date, oss, query, r, ref, ref1, ref2, ref3, secretAccessKey, uploadAddress, uploadAuth, url, videoId;
      collection = cfs[collectionName];

      if (!collection) {
        throw new Meteor.Error(500, "No Collection");
      }

      if (req.files && req.files[0]) {
        if (collectionName === 'videos' && ((ref = Meteor.settings["public"].cfs) != null ? ref.store : void 0) === "OSS") {
          accessKeyId = (ref1 = Meteor.settings.cfs.aliyun) != null ? ref1.accessKeyId : void 0;
          secretAccessKey = (ref2 = Meteor.settings.cfs.aliyun) != null ? ref2.secretAccessKey : void 0;
          date = ALY.util.date.getDate();
          query = {
            Action: "CreateUploadVideo",
            Title: req.files[0].filename,
            FileName: req.files[0].filename
          };
          url = "http://vod.cn-shanghai.aliyuncs.com/?" + getQueryString(accessKeyId, secretAccessKey, query, 'GET');
          r = HTTP.call('GET', url);
          console.log(r);

          if ((ref3 = r.data) != null ? ref3.VideoId : void 0) {
            videoId = r.data.VideoId;
            uploadAddress = JSON.parse(new Buffer(r.data.UploadAddress, 'base64').toString());
            console.log(uploadAddress);
            uploadAuth = JSON.parse(new Buffer(r.data.UploadAuth, 'base64').toString());
            console.log(uploadAuth);
            oss = new ALY.OSS({
              "accessKeyId": uploadAuth.AccessKeyId,
              "secretAccessKey": uploadAuth.AccessKeySecret,
              "endpoint": uploadAddress.Endpoint,
              "apiVersion": '2013-10-15',
              "securityToken": uploadAuth.SecurityToken
            });
            return oss.putObject({
              Bucket: uploadAddress.Bucket,
              Key: uploadAddress.FileName,
              Body: req.files[0].data,
              AccessControlAllowOrigin: '',
              ContentType: req.files[0].mimeType,
              CacheControl: 'no-cache',
              ContentDisposition: '',
              ContentEncoding: 'utf-8',
              ServerSideEncryption: 'AES256',
              Expires: null
            }, Meteor.bindEnvironment(function (err, data) {
              var getPlayInfoQuery, getPlayInfoResult, getPlayInfoUrl, newDate;

              if (err) {
                console.log('error:', err);
                throw new Meteor.Error(500, err.message);
              }

              console.log('success:', data);
              newDate = ALY.util.date.getDate();
              getPlayInfoQuery = {
                Action: 'GetPlayInfo',
                VideoId: videoId
              };
              getPlayInfoUrl = "http://vod.cn-shanghai.aliyuncs.com/?" + getQueryString(accessKeyId, secretAccessKey, getPlayInfoQuery, 'GET');
              getPlayInfoResult = HTTP.call('GET', getPlayInfoUrl);
              return JsonRoutes.sendResult(res, {
                code: 200,
                data: getPlayInfoResult
              });
            }));
          }
        }
      } else {
        throw new Meteor.Error(500, "No File");
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: e.error || 500,
      data: {
        errors: e.reason || e.message
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"api_workflow_drafts.coffee":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/steedos_creator/server/routes/api_workflow_drafts.coffee                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
JsonRoutes.add('post', '/api/workflow/drafts', function (req, res, next) {
  var current_user_id, current_user_info, e, hashData, inserted_instances;

  try {
    current_user_info = uuflowManager.check_authorization(req);
    current_user_id = current_user_info._id;
    hashData = req.body;
    inserted_instances = new Array();

    _.each(hashData['Instances'], function (instance_from_client) {
      var new_ins, new_ins_id;
      new_ins_id = uuflowManager.create_instance(instance_from_client, current_user_info);
      new_ins = Creator.Collections.instances.findOne({
        _id: new_ins_id
      }, {
        fields: {
          space: 1,
          flow: 1,
          flow_version: 1,
          form: 1,
          form_version: 1
        }
      });
      return inserted_instances.push(new_ins);
    });

    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        inserts: inserted_instances
      }
    });
  } catch (error) {
    e = error;
    console.error(e.stack);
    return JsonRoutes.sendResult(res, {
      code: 200,
      data: {
        errors: [{
          errorMessage: e.reason || e.message
        }]
      }
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".i18n.json",
    ".coffee"
  ]
});

require("/node_modules/meteor/steedos:creator/i18n/en.i18n.json.js");
require("/node_modules/meteor/steedos:creator/i18n/zh-CN.i18n.json.js");
require("/node_modules/meteor/steedos:creator/checkNpm.js");
require("/node_modules/meteor/steedos:creator/core.coffee");
require("/node_modules/meteor/steedos:creator/lib/apps.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/object_recent_viewed.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/object_recent_record.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/object_listviews_options.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/report_data.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/user_tabular_settings.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/object_export2xml.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/object_import_jobs.coffee");
require("/node_modules/meteor/steedos:creator/server/methods/related_objects_records.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/object.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/object_tabular.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/object_listviews.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/user_tabular_settings.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/related_objects_records.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/space_user_info.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/contacts_view_limits.coffee");
require("/node_modules/meteor/steedos:creator/server/publications/contacts_no_force_phone_users.coffee");
require("/node_modules/meteor/steedos:creator/server/lib/permission_manager.coffee");
require("/node_modules/meteor/steedos:creator/server/lib/uuflow_manager.coffee");
require("/node_modules/meteor/steedos:creator/server/routes/s3.coffee");
require("/node_modules/meteor/steedos:creator/server/routes/api_workflow_drafts.coffee");

/* Exports */
Package._define("steedos:creator", {
  uuflowManager: uuflowManager,
  permissionManager: permissionManager
});

})();

//# sourceURL=meteor://💻app/packages/steedos_creator.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvc3RlZWRvczpjcmVhdG9yL2NoZWNrTnBtLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3IvY29yZS5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL2NvcmUuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3IvbGliL2FwcHMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL21ldGhvZHMvb2JqZWN0X3JlY2VudF92aWV3ZWQuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbWV0aG9kcy9vYmplY3RfcmVjZW50X3ZpZXdlZC5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvbWV0aG9kcy9vYmplY3RfcmVjZW50X3JlY29yZC5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzL29iamVjdF9yZWNlbnRfcmVjb3JkLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvc3RlZWRvc19jcmVhdG9yL3NlcnZlci9tZXRob2RzL29iamVjdF9saXN0dmlld3Nfb3B0aW9ucy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzL29iamVjdF9saXN0dmlld3Nfb3B0aW9ucy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvbWV0aG9kcy9yZXBvcnRfZGF0YS5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzL3JlcG9ydF9kYXRhLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvc3RlZWRvc19jcmVhdG9yL3NlcnZlci9tZXRob2RzL3VzZXJfdGFidWxhcl9zZXR0aW5ncy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzL3VzZXJfdGFidWxhcl9zZXR0aW5ncy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvbWV0aG9kcy9vYmplY3RfZXhwb3J0MnhtbC5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tZXRob2RzL29iamVjdF9leHBvcnQyeG1sLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvc3RlZWRvc19jcmVhdG9yL3NlcnZlci9tZXRob2RzL3JlbGF0ZWRfb2JqZWN0c19yZWNvcmRzLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL21ldGhvZHMvcmVsYXRlZF9vYmplY3RzX3JlY29yZHMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL3B1YmxpY2F0aW9ucy9vYmplY3QuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcHVibGljYXRpb25zL29iamVjdC5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvcHVibGljYXRpb25zL29iamVjdF90YWJ1bGFyLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3B1YmxpY2F0aW9ucy9vYmplY3RfdGFidWxhci5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvcHVibGljYXRpb25zL29iamVjdF9saXN0dmlld3MuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL3B1YmxpY2F0aW9ucy91c2VyX3RhYnVsYXJfc2V0dGluZ3MuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL3B1YmxpY2F0aW9ucy9yZWxhdGVkX29iamVjdHNfcmVjb3Jkcy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvcmVsYXRlZF9vYmplY3RzX3JlY29yZHMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL3B1YmxpY2F0aW9ucy9zcGFjZV91c2VyX2luZm8uY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL3B1YmxpY2F0aW9ucy9jb250YWN0c192aWV3X2xpbWl0cy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvY29udGFjdHNfdmlld19saW1pdHMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL3B1YmxpY2F0aW9ucy9jb250YWN0c19ub19mb3JjZV9waG9uZV91c2Vycy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9wdWJsaWNhdGlvbnMvY29udGFjdHNfbm9fZm9yY2VfcGhvbmVfdXNlcnMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3Ivc2VydmVyL2xpYi9wZXJtaXNzaW9uX21hbmFnZXIuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvbGliL3Blcm1pc3Npb25fbWFuYWdlci5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvbGliL3V1Zmxvd19tYW5hZ2VyLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL2xpYi91dWZsb3dfbWFuYWdlci5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvcm91dGVzL3MzLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvc2VydmVyL3JvdXRlcy9zMy5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3N0ZWVkb3NfY3JlYXRvci9zZXJ2ZXIvcm91dGVzL2FwaV93b3JrZmxvd19kcmFmdHMuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9zZXJ2ZXIvcm91dGVzL2FwaV93b3JrZmxvd19kcmFmdHMuY29mZmVlIl0sIm5hbWVzIjpbImNoZWNrTnBtVmVyc2lvbnMiLCJtb2R1bGUiLCJsaW5rIiwidiIsImJ1c2JveSIsIm1rZGlycCIsIk1ldGVvciIsInNldHRpbmdzIiwiY2ZzIiwiYWxpeXVuIiwiQ3JlYXRvciIsImdldFNjaGVtYSIsIm9iamVjdF9uYW1lIiwicmVmIiwiZ2V0T2JqZWN0Iiwic2NoZW1hIiwiZ2V0T2JqZWN0Rmlyc3RMaXN0Vmlld1VybCIsImFwcF9pZCIsImxpc3RfdmlldyIsImxpc3Rfdmlld19pZCIsImdldE9iamVjdEZpcnN0TGlzdFZpZXciLCJfaWQiLCJTZXNzaW9uIiwiZ2V0IiwiZ2V0UmVsYXRpdmVVcmwiLCJnZXRPYmplY3RVcmwiLCJyZWNvcmRfaWQiLCJnZXRMaXN0VmlldyIsImdldE9iamVjdFJvdXRlclVybCIsImdldExpc3RWaWV3VXJsIiwidXJsIiwiZ2V0TGlzdFZpZXdSZWxhdGl2ZVVybCIsImdldFN3aXRjaExpc3RVcmwiLCJnZXRSZWxhdGVkT2JqZWN0VXJsIiwicmVsYXRlZF9vYmplY3RfbmFtZSIsImdldE9iamVjdExvb2t1cEZpZWxkT3B0aW9ucyIsImlzX2RlZXAiLCJpc19za2lwX2hpZGUiLCJfb2JqZWN0IiwiX29wdGlvbnMiLCJmaWVsZHMiLCJpY29uIiwiXyIsImZvckVhY2giLCJmIiwiayIsImhpZGRlbiIsInR5cGUiLCJwdXNoIiwibGFiZWwiLCJ2YWx1ZSIsInJfb2JqZWN0IiwicmVmZXJlbmNlX3RvIiwiZjIiLCJrMiIsImdldE9iamVjdEZpbHRlckZpZWxkT3B0aW9ucyIsInBlcm1pc3Npb25fZmllbGRzIiwiZ2V0RmllbGRzIiwiaW5jbHVkZSIsInRlc3QiLCJpbmRleE9mIiwiZ2V0RmlsdGVyc1dpdGhGaWx0ZXJGaWVsZHMiLCJmaWx0ZXJzIiwiZmlsdGVyX2ZpZWxkcyIsImxlbmd0aCIsIm4iLCJpc1N0cmluZyIsImZpZWxkIiwicmVxdWlyZWQiLCJmaW5kV2hlcmUiLCJpc19kZWZhdWx0IiwiaXNfcmVxdWlyZWQiLCJmaWx0ZXJJdGVtIiwibWF0Y2hGaWVsZCIsImZpbmQiLCJnZXRPYmplY3RSZWNvcmQiLCJzZWxlY3RfZmllbGRzIiwiZXhwYW5kIiwiY29sbGVjdGlvbiIsInJlY29yZCIsInJlZjEiLCJyZWYyIiwiaXNDbGllbnQiLCJUZW1wbGF0ZSIsImluc3RhbmNlIiwib2RhdGEiLCJnZXRDb2xsZWN0aW9uIiwiZmluZE9uZSIsImdldEFwcCIsImFwcCIsIkFwcHMiLCJkZXBzIiwiZGVwZW5kIiwiZ2V0QXBwT2JqZWN0TmFtZXMiLCJvYmplY3RzIiwiZWFjaCIsIm9iaiIsInBlcm1pc3Npb25zIiwiYWxsb3dSZWFkIiwiZ2V0VmlzaWJsZUFwcHMiLCJpbmNsdWRlQWRtaW4iLCJhcHBzIiwidmlzaWJsZSIsImdldFZpc2libGVBcHBzT2JqZWN0cyIsInZpc2libGVPYmplY3ROYW1lcyIsImZsYXR0ZW4iLCJwbHVjayIsImZpbHRlciIsIk9iamVjdHMiLCJuYW1lIiwic29ydCIsInNvcnRpbmdNZXRob2QiLCJiaW5kIiwia2V5IiwidW5pcSIsImdldEFwcHNPYmplY3RzIiwidGVtcE9iamVjdHMiLCJjb25jYXQiLCJ2YWxpZGF0ZUZpbHRlcnMiLCJsb2dpYyIsImUiLCJlcnJvck1zZyIsImZpbHRlcl9pdGVtcyIsImZpbHRlcl9sZW5ndGgiLCJmbGFnIiwiaW5kZXgiLCJ3b3JkIiwibWFwIiwiaXNFbXB0eSIsImNvbXBhY3QiLCJyZXBsYWNlIiwibWF0Y2giLCJpIiwiaW5jbHVkZXMiLCJ3IiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidG9hc3RyIiwiZm9ybWF0RmlsdGVyc1RvTW9uZ28iLCJvcHRpb25zIiwic2VsZWN0b3IiLCJBcnJheSIsIm9wZXJhdGlvbiIsIm9wdGlvbiIsInJlZyIsInN1Yl9zZWxlY3RvciIsImV2YWx1YXRlRm9ybXVsYSIsIlJlZ0V4cCIsImlzQmV0d2VlbkZpbHRlck9wZXJhdGlvbiIsImdldEJldHdlZW5UaW1lQnVpbHRpblZhbHVlcyIsImZvcm1hdEZpbHRlcnNUb0RldiIsImxvZ2ljVGVtcEZpbHRlcnMiLCJzdGVlZG9zRmlsdGVycyIsInJlcXVpcmUiLCJpc19sb2dpY19vciIsInBvcCIsIlVTRVJfQ09OVEVYVCIsImZvcm1hdExvZ2ljRmlsdGVyc1RvRGV2IiwiZmlsdGVyX2xvZ2ljIiwiZm9ybWF0X2xvZ2ljIiwieCIsIl9mIiwiaXNBcnJheSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRSZWxhdGVkT2JqZWN0cyIsInNwYWNlSWQiLCJ1c2VySWQiLCJyZWxhdGVkX29iamVjdF9uYW1lcyIsInJlbGF0ZWRfb2JqZWN0cyIsInVucmVsYXRlZF9vYmplY3RzIiwiZ2V0T2JqZWN0UmVsYXRlZHMiLCJfY29sbGVjdGlvbl9uYW1lIiwiZ2V0UGVybWlzc2lvbnMiLCJkaWZmZXJlbmNlIiwicmVsYXRlZF9vYmplY3QiLCJpc0FjdGl2ZSIsImdldFJlbGF0ZWRPYmplY3ROYW1lcyIsImdldEFjdGlvbnMiLCJhY3Rpb25zIiwiZGlzYWJsZWRfYWN0aW9ucyIsInNvcnRCeSIsInZhbHVlcyIsImFjdGlvbiIsIlN0ZWVkb3MiLCJpc01vYmlsZSIsIm9uIiwiZ2V0TGlzdFZpZXdzIiwiZGlzYWJsZWRfbGlzdF92aWV3cyIsImxpc3Rfdmlld3MiLCJvYmplY3QiLCJpdGVtIiwiaXRlbV9uYW1lIiwib3duZXIiLCJmaWVsZHNOYW1lIiwidW5yZWFkYWJsZV9maWVsZHMiLCJnZXRPYmplY3RGaWVsZHNOYW1lIiwiaXNsb2FkaW5nIiwiYm9vdHN0cmFwTG9hZGVkIiwiY29udmVydFNwZWNpYWxDaGFyYWN0ZXIiLCJzdHIiLCJnZXREaXNhYmxlZEZpZWxkcyIsImZpZWxkTmFtZSIsImF1dG9mb3JtIiwiZGlzYWJsZWQiLCJvbWl0IiwiZ2V0SGlkZGVuRmllbGRzIiwiZ2V0RmllbGRzV2l0aE5vR3JvdXAiLCJncm91cCIsImdldFNvcnRlZEZpZWxkR3JvdXBOYW1lcyIsIm5hbWVzIiwidW5pcXVlIiwiZ2V0RmllbGRzRm9yR3JvdXAiLCJncm91cE5hbWUiLCJnZXRGaWVsZHNXaXRob3V0T21pdCIsImtleXMiLCJwaWNrIiwiZ2V0RmllbGRzSW5GaXJzdExldmVsIiwiZmlyc3RMZXZlbEtleXMiLCJnZXRGaWVsZHNGb3JSZW9yZGVyIiwiaXNTaW5nbGUiLCJjaGlsZEtleXMiLCJpc19yYW5nZV8xIiwiaXNfcmFuZ2VfMiIsImlzX3dpZGVfMSIsImlzX3dpZGVfMiIsInNjXzEiLCJzY18yIiwiaXNfd2lkZSIsImlzX3JhbmdlIiwic2xpY2UiLCJpc1NlcnZlciIsImdldEFsbFJlbGF0ZWRPYmplY3RzIiwicmVsYXRlZF9maWVsZCIsInJlbGF0ZWRfZmllbGRfbmFtZSIsImVuYWJsZV9maWxlcyIsImFwcHNCeU5hbWUiLCJtZXRob2RzIiwiY29sbGVjdGlvbl9yZWNlbnRfdmlld2VkIiwiY3VycmVudF9yZWNlbnRfdmlld2VkIiwiZG9jIiwic3BhY2UiLCJ1cGRhdGUiLCIkaW5jIiwiY291bnQiLCIkc2V0IiwibW9kaWZpZWQiLCJEYXRlIiwibW9kaWZpZWRfYnkiLCJpbnNlcnQiLCJfbWFrZU5ld0lEIiwibyIsImlkcyIsImNyZWF0ZWQiLCJjcmVhdGVkX2J5IiwiYXN5bmNfcmVjZW50X2FnZ3JlZ2F0ZSIsInJlY2VudF9hZ2dyZWdhdGUiLCJzZWFyY2hfb2JqZWN0IiwiX3JlY29yZHMiLCJjYWxsYmFjayIsIkNvbGxlY3Rpb25zIiwib2JqZWN0X3JlY2VudF92aWV3ZWQiLCJyYXdDb2xsZWN0aW9uIiwiYWdncmVnYXRlIiwiJG1hdGNoIiwiJGdyb3VwIiwibWF4Q3JlYXRlZCIsIiRtYXgiLCIkc29ydCIsIiRsaW1pdCIsImVyciIsImRhdGEiLCJFcnJvciIsImlzRnVuY3Rpb24iLCJ3cmFwQXN5bmMiLCJzZWFyY2hUZXh0IiwiX29iamVjdF9jb2xsZWN0aW9uIiwiX29iamVjdF9uYW1lX2tleSIsInF1ZXJ5IiwicXVlcnlfYW5kIiwicmVjb3JkcyIsInNlYXJjaF9LZXl3b3JkcyIsIk5BTUVfRklFTERfS0VZIiwic3BsaXQiLCJrZXl3b3JkIiwic3VicXVlcnkiLCIkcmVnZXgiLCJ0cmltIiwiJGFuZCIsIiRpbiIsImxpbWl0IiwiX25hbWUiLCJfb2JqZWN0X25hbWUiLCJyZWNvcmRfb2JqZWN0IiwicmVjb3JkX29iamVjdF9jb2xsZWN0aW9uIiwic2VsZiIsIm9iamVjdHNCeU5hbWUiLCJvYmplY3RfcmVjb3JkIiwiZW5hYmxlX3NlYXJjaCIsInVwZGF0ZV9maWx0ZXJzIiwibGlzdHZpZXdfaWQiLCJmaWx0ZXJfc2NvcGUiLCJvYmplY3RfbGlzdHZpZXdzIiwiZGlyZWN0IiwidXBkYXRlX2NvbHVtbnMiLCJjb2x1bW5zIiwiY2hlY2siLCJjb21wb3VuZEZpZWxkcyIsImN1cnNvciIsImZpbHRlckZpZWxkcyIsIm9iamVjdEZpZWxkcyIsInJlc3VsdCIsIk9iamVjdCIsImNoaWxkS2V5Iiwib2JqZWN0RmllbGQiLCJzcGxpdHMiLCJpc0NvbW1vblNwYWNlIiwiaXNTcGFjZUFkbWluIiwic2tpcCIsImZldGNoIiwiY29tcG91bmRGaWVsZEl0ZW0iLCJjb21wb3VuZEZpbHRlckZpZWxkcyIsIml0ZW1LZXkiLCJpdGVtVmFsdWUiLCJyZWZlcmVuY2VJdGVtIiwic2V0dGluZyIsImNvbHVtbl93aWR0aCIsIm9iajEiLCJfaWRfYWN0aW9ucyIsIl9taXhGaWVsZHNEYXRhIiwiX21peFJlbGF0ZWREYXRhIiwiX3dyaXRlWG1sRmlsZSIsImZzIiwibG9nZ2VyIiwicGF0aCIsInhtbDJqcyIsIkxvZ2dlciIsImpzb25PYmoiLCJvYmpOYW1lIiwiYnVpbGRlciIsImRheSIsImZpbGVBZGRyZXNzIiwiZmlsZU5hbWUiLCJmaWxlUGF0aCIsIm1vbnRoIiwibm93Iiwic3RyZWFtIiwieG1sIiwieWVhciIsIkJ1aWxkZXIiLCJidWlsZE9iamVjdCIsIkJ1ZmZlciIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiam9pbiIsIl9fbWV0ZW9yX2Jvb3RzdHJhcF9fIiwic2VydmVyRGlyIiwiZXhpc3RzU3luYyIsInN5bmMiLCJ3cml0ZUZpbGUiLCJtaXhCb29sIiwibWl4RGF0ZSIsIm1peERlZmF1bHQiLCJvYmpGaWVsZHMiLCJmaWVsZF9uYW1lIiwiZGF0ZSIsImRhdGVTdHIiLCJmb3JtYXQiLCJtb21lbnQiLCJyZWxhdGVkT2JqTmFtZXMiLCJyZWxhdGVkT2JqTmFtZSIsInJlbGF0ZWRDb2xsZWN0aW9uIiwicmVsYXRlZFJlY29yZExpc3QiLCJyZWxhdGVkVGFibGVEYXRhIiwicmVsYXRlZE9iaiIsImZpZWxkc0RhdGEiLCJFeHBvcnQyeG1sIiwicmVjb3JkTGlzdCIsImluZm8iLCJ0aW1lIiwicmVjb3JkT2JqIiwidGltZUVuZCIsInJlbGF0ZWRfb2JqZWN0c19yZWNvcmRzIiwicmVsYXRlZF9yZWNvcmRzIiwidmlld0FsbFJlY29yZHMiLCJwdWJsaXNoIiwiaWQiLCJzcGFjZV9pZCIsInB1Ymxpc2hDb21wb3NpdGUiLCJ0YWJsZU5hbWUiLCJfZmllbGRzIiwiX2tleXMiLCJvYmplY3RfY29sbGVjaXRvbiIsInJlZmVyZW5jZV9maWVsZHMiLCJyZWFkeSIsIlN0cmluZyIsIk1hdGNoIiwiT3B0aW9uYWwiLCJnZXRPYmplY3ROYW1lIiwidW5ibG9jayIsImZpZWxkX2tleXMiLCJjaGlsZHJlbiIsIl9vYmplY3RLZXlzIiwicmVmZXJlbmNlX2ZpZWxkIiwicGFyZW50IiwiY2hpbGRyZW5fZmllbGRzIiwibmFtZV9maWVsZF9rZXkiLCJwX2siLCJyZWZlcmVuY2VfaWRzIiwicmVmZXJlbmNlX3RvX29iamVjdCIsInNfayIsImdldFByb3BlcnR5IiwicmVkdWNlIiwiaXNPYmplY3QiLCJzaGFyZWQiLCJ1c2VyIiwiZGIiLCJzcGFjZV9zZXR0aW5ncyIsInBlcm1pc3Npb25NYW5hZ2VyIiwiZ2V0Rmxvd1Blcm1pc3Npb25zIiwiZmxvd19pZCIsInVzZXJfaWQiLCJmbG93IiwibXlfcGVybWlzc2lvbnMiLCJvcmdfaWRzIiwib3JnYW5pemF0aW9ucyIsIm9yZ3NfY2FuX2FkZCIsIm9yZ3NfY2FuX2FkbWluIiwib3Jnc19jYW5fbW9uaXRvciIsInVzZXJzX2Nhbl9hZGQiLCJ1c2Vyc19jYW5fYWRtaW4iLCJ1c2Vyc19jYW5fbW9uaXRvciIsInV1Zmxvd01hbmFnZXIiLCJnZXRGbG93IiwidXNlcnMiLCJwYXJlbnRzIiwib3JnIiwicGFyZW50X2lkIiwicGVybXMiLCJvcmdfaWQiLCJfZXZhbCIsImNoZWNrX2F1dGhvcml6YXRpb24iLCJyZXEiLCJhdXRoVG9rZW4iLCJoYXNoZWRUb2tlbiIsIkFjY291bnRzIiwiX2hhc2hMb2dpblRva2VuIiwiZ2V0U3BhY2UiLCJzcGFjZXMiLCJmbG93cyIsImdldFNwYWNlVXNlciIsInNwYWNlX3VzZXIiLCJzcGFjZV91c2VycyIsImdldFNwYWNlVXNlck9yZ0luZm8iLCJvcmdhbml6YXRpb24iLCJmdWxsbmFtZSIsIm9yZ2FuaXphdGlvbl9uYW1lIiwib3JnYW5pemF0aW9uX2Z1bGxuYW1lIiwiaXNGbG93RW5hYmxlZCIsInN0YXRlIiwiaXNGbG93U3BhY2VNYXRjaGVkIiwiZ2V0Rm9ybSIsImZvcm1faWQiLCJmb3JtIiwiZm9ybXMiLCJnZXRDYXRlZ29yeSIsImNhdGVnb3J5X2lkIiwiY2F0ZWdvcmllcyIsImNyZWF0ZV9pbnN0YW5jZSIsImluc3RhbmNlX2Zyb21fY2xpZW50IiwidXNlcl9pbmZvIiwiYXBwcl9vYmoiLCJhcHByb3ZlX2Zyb21fY2xpZW50IiwiY2F0ZWdvcnkiLCJpbnNfb2JqIiwibmV3X2luc19pZCIsInNwYWNlX3VzZXJfb3JnX2luZm8iLCJzdGFydF9zdGVwIiwidHJhY2VfZnJvbV9jbGllbnQiLCJ0cmFjZV9vYmoiLCJjaGVja0lzSW5BcHByb3ZhbCIsImluc3RhbmNlcyIsImZsb3dfdmVyc2lvbiIsImN1cnJlbnQiLCJmb3JtX3ZlcnNpb24iLCJzdWJtaXR0ZXIiLCJzdWJtaXR0ZXJfbmFtZSIsImFwcGxpY2FudCIsImFwcGxpY2FudF9uYW1lIiwiYXBwbGljYW50X29yZ2FuaXphdGlvbiIsImFwcGxpY2FudF9vcmdhbml6YXRpb25fbmFtZSIsImFwcGxpY2FudF9vcmdhbml6YXRpb25fZnVsbG5hbWUiLCJhcHBsaWNhbnRfY29tcGFueSIsImNvbXBhbnlfaWQiLCJjb2RlIiwiaXNfYXJjaGl2ZWQiLCJpc19kZWxldGVkIiwicmVjb3JkX2lkcyIsIk1vbmdvIiwiT2JqZWN0SUQiLCJfc3RyIiwiaXNfZmluaXNoZWQiLCJzdGVwcyIsInN0ZXAiLCJzdGVwX3R5cGUiLCJzdGFydF9kYXRlIiwidHJhY2UiLCJ1c2VyX25hbWUiLCJoYW5kbGVyIiwiaGFuZGxlcl9uYW1lIiwiaGFuZGxlcl9vcmdhbml6YXRpb24iLCJoYW5kbGVyX29yZ2FuaXphdGlvbl9uYW1lIiwiaGFuZGxlcl9vcmdhbml6YXRpb25fZnVsbG5hbWUiLCJyZWFkX2RhdGUiLCJpc19yZWFkIiwiaXNfZXJyb3IiLCJkZXNjcmlwdGlvbiIsImluaXRpYXRlVmFsdWVzIiwiYXBwcm92ZXMiLCJ0cmFjZXMiLCJpbmJveF91c2VycyIsImN1cnJlbnRfc3RlcF9uYW1lIiwiYXV0b19yZW1pbmQiLCJmbG93X25hbWUiLCJjYXRlZ29yeV9uYW1lIiwiaW5pdGlhdGVBdHRhY2giLCJpbml0aWF0ZVJlY29yZEluc3RhbmNlSW5mbyIsInJlY29yZElkcyIsImZsb3dJZCIsImZpZWxkQ29kZXMiLCJmaWx0ZXJWYWx1ZXMiLCJvdyIsInRhYmxlRmllbGRDb2RlcyIsInRhYmxlRmllbGRNYXAiLCJmZiIsIm9iamVjdF93b3JrZmxvd3MiLCJmaWVsZF9tYXAiLCJmbSIsImZpZWxkc09iaiIsImxvb2t1cEZpZWxkTmFtZSIsImxvb2t1cE9iamVjdCIsIm9UYWJsZUNvZGUiLCJvYmplY3RGaWVsZE5hbWUiLCJ3VGFibGVDb2RlIiwid29ya2Zsb3dfZmllbGQiLCJvYmplY3RfZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIndvcmtmbG93X3RhYmxlX2ZpZWxkX2NvZGUiLCJvYmplY3RfdGFibGVfZmllbGRfY29kZSIsIm11bHRpcGxlIiwidGZjIiwiYyIsInBhcnNlIiwidHIiLCJuZXdUciIsInRmbSIsIndUZENvZGUiLCJmaWVsZF9tYXBfc2NyaXB0IiwiZXh0ZW5kIiwiZXZhbEZpZWxkTWFwU2NyaXB0Iiwib2JqZWN0TmFtZSIsIm9iamVjdElkIiwiZnVuYyIsInNjcmlwdCIsImluc0lkIiwiYXBwcm92ZUlkIiwiY2YiLCJ2ZXJzaW9ucyIsInZlcnNpb25JZCIsImlkeCIsIm5ld0ZpbGUiLCJGUyIsIkZpbGUiLCJhdHRhY2hEYXRhIiwiY3JlYXRlUmVhZFN0cmVhbSIsIm9yaWdpbmFsIiwibWV0YWRhdGEiLCJyZWFzb24iLCJzaXplIiwib3duZXJfbmFtZSIsImFwcHJvdmUiLCIkcHVzaCIsIiRlYWNoIiwiJHBvc2l0aW9uIiwibG9ja2VkIiwiaW5zdGFuY2Vfc3RhdGUiLCIkZXhpc3RzIiwiQnVzYm95IiwiRmliZXIiLCJnZXRRdWVyeVN0cmluZyIsIkpzb25Sb3V0ZXMiLCJwYXJzZUZpbGVzIiwicmVzIiwibmV4dCIsImZpbGVzIiwiaW1hZ2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmllbGRuYW1lIiwiZmlsZSIsImZpbGVuYW1lIiwiZW5jb2RpbmciLCJtaW1ldHlwZSIsImJ1ZmZlcnMiLCJtaW1lVHlwZSIsImJvZHkiLCJydW4iLCJwaXBlIiwiYWRkIiwiZmlsZUNvbGxlY3Rpb24iLCJleHRlbnRpb24iLCJmaWxlT2JqIiwibmV3RmlsZU9iaklkIiwicmVzcCIsInRvTG93ZXJDYXNlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwidmVyc2lvbl9pZCIsInNldEhlYWRlciIsImVuZCIsInN0YXR1c0NvZGUiLCJjb2xsZWN0aW9uTmFtZSIsImdldFVzZXJJZEZyb21BdXRoVG9rZW4iLCJwYXJhbXMiLCJyZXN1bHREYXRhIiwic2VuZFJlc3VsdCIsInN0YWNrIiwiZXJyb3JzIiwibWVzc2FnZSIsImFjY2Vzc0tleUlkIiwic2VjcmV0QWNjZXNzS2V5IiwiQUxZIiwiY2Fub25pY2FsaXplZFF1ZXJ5U3RyaW5nIiwicXVlcnlLZXlzIiwicXVlcnlTdHIiLCJzdHJpbmdUb1NpZ24iLCJ1dGlsIiwiRm9ybWF0IiwiVmVyc2lvbiIsIkFjY2Vzc0tleUlkIiwiU2lnbmF0dXJlTWV0aG9kIiwiVGltZXN0YW1wIiwiaXNvODYwMSIsIlNpZ25hdHVyZVZlcnNpb24iLCJTaWduYXR1cmVOb25jZSIsImdldFRpbWUiLCJwb3BFc2NhcGUiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0ciIsIlNpZ25hdHVyZSIsImNyeXB0byIsImhtYWMiLCJxdWVyeVBhcmFtc1RvU3RyaW5nIiwib3NzIiwiciIsInJlZjMiLCJ1cGxvYWRBZGRyZXNzIiwidXBsb2FkQXV0aCIsInZpZGVvSWQiLCJzdG9yZSIsIkFjdGlvbiIsIlRpdGxlIiwiRmlsZU5hbWUiLCJIVFRQIiwiY2FsbCIsIlZpZGVvSWQiLCJVcGxvYWRBZGRyZXNzIiwidG9TdHJpbmciLCJVcGxvYWRBdXRoIiwiT1NTIiwiQWNjZXNzS2V5U2VjcmV0IiwiRW5kcG9pbnQiLCJTZWN1cml0eVRva2VuIiwicHV0T2JqZWN0IiwiQnVja2V0IiwiS2V5IiwiQm9keSIsIkFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbiIsIkNvbnRlbnRUeXBlIiwiQ2FjaGVDb250cm9sIiwiQ29udGVudERpc3Bvc2l0aW9uIiwiQ29udGVudEVuY29kaW5nIiwiU2VydmVyU2lkZUVuY3J5cHRpb24iLCJFeHBpcmVzIiwiYmluZEVudmlyb25tZW50IiwiZ2V0UGxheUluZm9RdWVyeSIsImdldFBsYXlJbmZvUmVzdWx0IiwiZ2V0UGxheUluZm9VcmwiLCJuZXdEYXRlIiwiY3VycmVudF91c2VyX2lkIiwiY3VycmVudF91c2VyX2luZm8iLCJoYXNoRGF0YSIsImluc2VydGVkX2luc3RhbmNlcyIsIm5ld19pbnMiLCJpbnNlcnRzIiwiZXJyb3JNZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QTJCO0FBQzFCbEcsWUFBTSxHQURvQjtBQUUxQmhPLFlBQU07QUFBRW9XLGdCQUFRLENBQUM7QUFBRW9FLHdCQUFjaGtCLEVBQUUyYyxNQUFGLElBQVkzYyxFQUFFNmY7QUFBOUIsU0FBRDtBQUFWO0FBRm9CLEtBQTNCLENDVUU7QUFVRDtBRDFDSCxHIiwiZmlsZSI6Ii9wYWNrYWdlcy9zdGVlZG9zX2NyZWF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHRjaGVja05wbVZlcnNpb25zXG59IGZyb20gJ21ldGVvci90bWVhc2RheTpjaGVjay1ucG0tdmVyc2lvbnMnO1xuY2hlY2tOcG1WZXJzaW9ucyh7XG5cdGJ1c2JveTogXCJeMC4yLjEzXCIsXG5cdG1rZGlycDogXCJeMC4zLjVcIixcblx0XCJ4bWwyanNcIjogXCJeMC40LjE5XCIsXG5cdFwibm9kZS14bHN4XCI6IFwiXjAuMTIuMFwiXG59LCAnc3RlZWRvczpjcmVhdG9yJyk7XG5cbmlmIChNZXRlb3Iuc2V0dGluZ3MgJiYgTWV0ZW9yLnNldHRpbmdzLmNmcyAmJiBNZXRlb3Iuc2V0dGluZ3MuY2ZzLmFsaXl1bikge1xuXHRjaGVja05wbVZlcnNpb25zKHtcblx0XHRcImFsaXl1bi1zZGtcIjogXCJeMS4xMS4xMlwiXG5cdH0sICdzdGVlZG9zOmNyZWF0b3InKTtcbn0iLCJcblx0IyBDcmVhdG9yLmluaXRBcHBzKClcblxuXG4jIENyZWF0b3IuaW5pdEFwcHMgPSAoKS0+XG4jIFx0aWYgTWV0ZW9yLmlzU2VydmVyXG4jIFx0XHRfLmVhY2ggQ3JlYXRvci5BcHBzLCAoYXBwLCBhcHBfaWQpLT5cbiMgXHRcdFx0ZGJfYXBwID0gZGIuYXBwcy5maW5kT25lKGFwcF9pZClcbiMgXHRcdFx0aWYgIWRiX2FwcFxuIyBcdFx0XHRcdGFwcC5faWQgPSBhcHBfaWRcbiMgXHRcdFx0XHRkYi5hcHBzLmluc2VydChhcHApXG4jIGVsc2VcbiMgXHRhcHAuX2lkID0gYXBwX2lkXG4jIFx0ZGIuYXBwcy51cGRhdGUoe19pZDogYXBwX2lkfSwgYXBwKVxuXG5DcmVhdG9yLmdldFNjaGVtYSA9IChvYmplY3RfbmFtZSktPlxuXHRyZXR1cm4gQ3JlYXRvci5nZXRPYmplY3Qob2JqZWN0X25hbWUpPy5zY2hlbWFcblxuQ3JlYXRvci5nZXRPYmplY3RGaXJzdExpc3RWaWV3VXJsID0gKG9iamVjdF9uYW1lKS0+XG5cdGxpc3RfdmlldyA9IENyZWF0b3IuZ2V0T2JqZWN0Rmlyc3RMaXN0VmlldyhvYmplY3RfbmFtZSlcblx0bGlzdF92aWV3X2lkID0gbGlzdF92aWV3Py5faWRcblx0YXBwX2lkID0gU2Vzc2lvbi5nZXQoXCJhcHBfaWRcIilcblx0aWYgb2JqZWN0X25hbWUgaXMgXCJtZWV0aW5nXCJcblx0XHRyZXR1cm4gQ3JlYXRvci5nZXRSZWxhdGl2ZVVybChcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvY2FsZW5kYXIvXCIpXG5cdGVsc2Vcblx0XHRyZXR1cm4gQ3JlYXRvci5nZXRSZWxhdGl2ZVVybChcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvZ3JpZC9cIiArIGxpc3Rfdmlld19pZClcblxuQ3JlYXRvci5nZXRPYmplY3RVcmwgPSAob2JqZWN0X25hbWUsIHJlY29yZF9pZCwgYXBwX2lkKSAtPlxuXHRpZiAhYXBwX2lkXG5cdFx0YXBwX2lkID0gU2Vzc2lvbi5nZXQoXCJhcHBfaWRcIilcblx0aWYgIW9iamVjdF9uYW1lXG5cdFx0b2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpXG5cblx0bGlzdF92aWV3ID0gQ3JlYXRvci5nZXRMaXN0VmlldyhvYmplY3RfbmFtZSwgbnVsbClcblx0bGlzdF92aWV3X2lkID0gbGlzdF92aWV3Py5faWRcblxuXHRpZiByZWNvcmRfaWRcblx0XHRyZXR1cm4gQ3JlYXRvci5nZXRSZWxhdGl2ZVVybChcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvdmlldy9cIiArIHJlY29yZF9pZClcblx0ZWxzZVxuXHRcdGlmIG9iamVjdF9uYW1lIGlzIFwibWVldGluZ1wiXG5cdFx0XHRyZXR1cm4gQ3JlYXRvci5nZXRSZWxhdGl2ZVVybChcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvY2FsZW5kYXIvXCIpXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIENyZWF0b3IuZ2V0UmVsYXRpdmVVcmwoXCIvYXBwL1wiICsgYXBwX2lkICsgXCIvXCIgKyBvYmplY3RfbmFtZSArIFwiL2dyaWQvXCIgKyBsaXN0X3ZpZXdfaWQpXG5cbkNyZWF0b3IuZ2V0T2JqZWN0Um91dGVyVXJsID0gKG9iamVjdF9uYW1lLCByZWNvcmRfaWQsIGFwcF9pZCkgLT5cblx0aWYgIWFwcF9pZFxuXHRcdGFwcF9pZCA9IFNlc3Npb24uZ2V0KFwiYXBwX2lkXCIpXG5cdGlmICFvYmplY3RfbmFtZVxuXHRcdG9iamVjdF9uYW1lID0gU2Vzc2lvbi5nZXQoXCJvYmplY3RfbmFtZVwiKVxuXG5cdGxpc3RfdmlldyA9IENyZWF0b3IuZ2V0TGlzdFZpZXcob2JqZWN0X25hbWUsIG51bGwpXG5cdGxpc3Rfdmlld19pZCA9IGxpc3Rfdmlldz8uX2lkXG5cblx0aWYgcmVjb3JkX2lkXG5cdFx0cmV0dXJuIFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi92aWV3L1wiICsgcmVjb3JkX2lkXG5cdGVsc2Vcblx0XHRpZiBvYmplY3RfbmFtZSBpcyBcIm1lZXRpbmdcIlxuXHRcdFx0cmV0dXJuIFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9jYWxlbmRhci9cIlxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvZ3JpZC9cIiArIGxpc3Rfdmlld19pZFxuXG5DcmVhdG9yLmdldExpc3RWaWV3VXJsID0gKG9iamVjdF9uYW1lLCBhcHBfaWQsIGxpc3Rfdmlld19pZCkgLT5cblx0dXJsID0gQ3JlYXRvci5nZXRMaXN0Vmlld1JlbGF0aXZlVXJsKG9iamVjdF9uYW1lLCBhcHBfaWQsIGxpc3Rfdmlld19pZClcblx0cmV0dXJuIENyZWF0b3IuZ2V0UmVsYXRpdmVVcmwodXJsKVxuXG5DcmVhdG9yLmdldExpc3RWaWV3UmVsYXRpdmVVcmwgPSAob2JqZWN0X25hbWUsIGFwcF9pZCwgbGlzdF92aWV3X2lkKSAtPlxuXHRpZiBsaXN0X3ZpZXdfaWQgaXMgXCJjYWxlbmRhclwiXG5cdFx0cmV0dXJuIFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9jYWxlbmRhci9cIlxuXHRlbHNlXG5cdFx0cmV0dXJuIFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9ncmlkL1wiICsgbGlzdF92aWV3X2lkXG5cbkNyZWF0b3IuZ2V0U3dpdGNoTGlzdFVybCA9IChvYmplY3RfbmFtZSwgYXBwX2lkLCBsaXN0X3ZpZXdfaWQpIC0+XG5cdGlmIGxpc3Rfdmlld19pZFxuXHRcdHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9cIiArIGxpc3Rfdmlld19pZCArIFwiL2xpc3RcIilcblx0ZWxzZVxuXHRcdHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9saXN0L3N3aXRjaFwiKVxuXG5DcmVhdG9yLmdldFJlbGF0ZWRPYmplY3RVcmwgPSAob2JqZWN0X25hbWUsIGFwcF9pZCwgcmVjb3JkX2lkLCByZWxhdGVkX29iamVjdF9uYW1lKSAtPlxuXHRyZXR1cm4gQ3JlYXRvci5nZXRSZWxhdGl2ZVVybChcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvXCIgKyByZWNvcmRfaWQgKyBcIi9cIiArIHJlbGF0ZWRfb2JqZWN0X25hbWUgKyBcIi9ncmlkXCIpXG5cbkNyZWF0b3IuZ2V0T2JqZWN0TG9va3VwRmllbGRPcHRpb25zID0gKG9iamVjdF9uYW1lLCBpc19kZWVwLCBpc19za2lwX2hpZGUpLT5cblx0X29wdGlvbnMgPSBbXVxuXHR1bmxlc3Mgb2JqZWN0X25hbWVcblx0XHRyZXR1cm4gX29wdGlvbnNcblx0X29iamVjdCA9IENyZWF0b3IuZ2V0T2JqZWN0KG9iamVjdF9uYW1lKVxuXHRmaWVsZHMgPSBfb2JqZWN0Py5maWVsZHNcblx0aWNvbiA9IF9vYmplY3Q/Lmljb25cblx0Xy5mb3JFYWNoIGZpZWxkcywgKGYsIGspLT5cblx0XHRpZiBpc19za2lwX2hpZGUgYW5kIGYuaGlkZGVuXG5cdFx0XHRyZXR1cm5cblx0XHRpZiBmLnR5cGUgPT0gXCJzZWxlY3RcIlxuXHRcdFx0X29wdGlvbnMucHVzaCB7bGFiZWw6IFwiI3tmLmxhYmVsIHx8IGt9XCIsIHZhbHVlOiBcIiN7a31cIiwgaWNvbjogaWNvbn1cblx0XHRlbHNlXG5cdFx0XHRfb3B0aW9ucy5wdXNoIHtsYWJlbDogZi5sYWJlbCB8fCBrLCB2YWx1ZTogaywgaWNvbjogaWNvbn1cblx0aWYgaXNfZGVlcFxuXHRcdF8uZm9yRWFjaCBmaWVsZHMsIChmLCBrKS0+XG5cdFx0XHRpZiBpc19za2lwX2hpZGUgYW5kIGYuaGlkZGVuXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0aWYgKGYudHlwZSA9PSBcImxvb2t1cFwiIHx8IGYudHlwZSA9PSBcIm1hc3Rlcl9kZXRhaWxcIikgJiYgZi5yZWZlcmVuY2VfdG9cblx0XHRcdFx0cl9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChmLnJlZmVyZW5jZV90bylcblx0XHRcdFx0aWYgcl9vYmplY3Rcblx0XHRcdFx0XHRfLmZvckVhY2ggcl9vYmplY3QuZmllbGRzLCAoZjIsIGsyKS0+XG5cdFx0XHRcdFx0XHRfb3B0aW9ucy5wdXNoIHtsYWJlbDogXCIje2YubGFiZWwgfHwga309PiN7ZjIubGFiZWwgfHwgazJ9XCIsIHZhbHVlOiBcIiN7a30uI3trMn1cIiwgaWNvbjogcl9vYmplY3Q/Lmljb259XG5cdHJldHVybiBfb3B0aW9uc1xuXG4jIOe7n+S4gOS4uuWvueixoW9iamVjdF9uYW1l5o+Q5L6b5Y+v55So5LqO6L+H6JmR5Zmo6L+H6JmR5a2X5q61XG5DcmVhdG9yLmdldE9iamVjdEZpbHRlckZpZWxkT3B0aW9ucyA9IChvYmplY3RfbmFtZSktPlxuXHRfb3B0aW9ucyA9IFtdXG5cdHVubGVzcyBvYmplY3RfbmFtZVxuXHRcdHJldHVybiBfb3B0aW9uc1xuXHRfb2JqZWN0ID0gQ3JlYXRvci5nZXRPYmplY3Qob2JqZWN0X25hbWUpXG5cdGZpZWxkcyA9IF9vYmplY3Q/LmZpZWxkc1xuXHRwZXJtaXNzaW9uX2ZpZWxkcyA9IENyZWF0b3IuZ2V0RmllbGRzKG9iamVjdF9uYW1lKVxuXHRpY29uID0gX29iamVjdD8uaWNvblxuXHRfLmZvckVhY2ggZmllbGRzLCAoZiwgayktPlxuXHRcdCMgaGlkZGVuLGdyaWTnrYnnsbvlnovnmoTlrZfmrrXvvIzkuI3pnIDopoHov4fmu6Rcblx0XHRpZiAhXy5pbmNsdWRlKFtcImdyaWRcIixcIm9iamVjdFwiLCBcIltPYmplY3RdXCIsIFwiW29iamVjdF1cIiwgXCJPYmplY3RcIl0sIGYudHlwZSkgYW5kICFmLmhpZGRlblxuXHRcdFx0IyBmaWx0ZXJzLiQuZmllbGTlj4pmbG93LmN1cnJlbnTnrYnlrZDlrZfmrrXkuZ/kuI3pnIDopoHov4fmu6Rcblx0XHRcdGlmICEvXFx3K1xcLi8udGVzdChrKSBhbmQgXy5pbmRleE9mKHBlcm1pc3Npb25fZmllbGRzLCBrKSA+IC0xXG5cdFx0XHRcdF9vcHRpb25zLnB1c2gge2xhYmVsOiBmLmxhYmVsIHx8IGssIHZhbHVlOiBrLCBpY29uOiBpY29ufVxuXG5cdHJldHVybiBfb3B0aW9uc1xuXG4jIyNcbmZpbHRlcnM6IOimgei9rOaNoueahGZpbHRlcnNcbmZpZWxkczog5a+56LGh5a2X5q61XG5maWx0ZXJfZmllbGRzOiDpu5jorqTov4fmu6TlrZfmrrXvvIzmlK/mjIHlrZfnrKbkuLLmlbDnu4Tlkozlr7nosaHmlbDnu4TkuKTnp43moLzlvI/vvIzlpoI6WydmaWxlZF9uYW1lMScsJ2ZpbGVkX25hbWUyJ10sW3tmaWVsZDonZmlsZWRfbmFtZTEnLHJlcXVpcmVkOnRydWV9XVxu5aSE55CG6YC76L6ROiDmiopmaWx0ZXJz5Lit5a2Y5Zyo5LqOZmlsdGVyX2ZpZWxkc+eahOi/h+a7pOadoeS7tuWinuWKoOavj+mhueeahGlzX2RlZmF1bHTjgIFpc19yZXF1aXJlZOWxnuaAp++8jOS4jeWtmOWcqOS6jmZpbHRlcl9maWVsZHPnmoTov4fmu6TmnaHku7blr7nlupTnmoTnp7vpmaTmr4/pobnnmoTnm7jlhbPlsZ7mgKdcbui/lOWbnue7k+aenDog5aSE55CG5ZCO55qEZmlsdGVyc1xuIyMjXG5DcmVhdG9yLmdldEZpbHRlcnNXaXRoRmlsdGVyRmllbGRzID0gKGZpbHRlcnMsIGZpZWxkcywgZmlsdGVyX2ZpZWxkcyktPlxuXHR1bmxlc3MgZmlsdGVyc1xuXHRcdGZpbHRlcnMgPSBbXVxuXHR1bmxlc3MgZmlsdGVyX2ZpZWxkc1xuXHRcdGZpbHRlcl9maWVsZHMgPSBbXVxuXHRpZiBmaWx0ZXJfZmllbGRzPy5sZW5ndGhcblx0XHRmaWx0ZXJfZmllbGRzLmZvckVhY2ggKG4pLT5cblx0XHRcdGlmIF8uaXNTdHJpbmcobilcblx0XHRcdFx0biA9IFxuXHRcdFx0XHRcdGZpZWxkOiBuLFxuXHRcdFx0XHRcdHJlcXVpcmVkOiBmYWxzZVxuXHRcdFx0aWYgZmllbGRzW24uZmllbGRdIGFuZCAhXy5maW5kV2hlcmUoZmlsdGVycyx7ZmllbGQ6bi5maWVsZH0pXG5cdFx0XHRcdGZpbHRlcnMucHVzaFxuXHRcdFx0XHRcdGZpZWxkOiBuLmZpZWxkLFxuXHRcdFx0XHRcdGlzX2RlZmF1bHQ6IHRydWUsXG5cdFx0XHRcdFx0aXNfcmVxdWlyZWQ6IG4ucmVxdWlyZWRcblx0ZmlsdGVycy5mb3JFYWNoIChmaWx0ZXJJdGVtKS0+XG5cdFx0bWF0Y2hGaWVsZCA9IGZpbHRlcl9maWVsZHMuZmluZCAobiktPiByZXR1cm4gbiA9PSBmaWx0ZXJJdGVtLmZpZWxkIG9yIG4uZmllbGQgPT0gZmlsdGVySXRlbS5maWVsZFxuXHRcdGlmIF8uaXNTdHJpbmcobWF0Y2hGaWVsZClcblx0XHRcdG1hdGNoRmllbGQgPSBcblx0XHRcdFx0ZmllbGQ6IG1hdGNoRmllbGQsXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZVxuXHRcdGlmIG1hdGNoRmllbGRcblx0XHRcdGZpbHRlckl0ZW0uaXNfZGVmYXVsdCA9IHRydWVcblx0XHRcdGZpbHRlckl0ZW0uaXNfcmVxdWlyZWQgPSBtYXRjaEZpZWxkLnJlcXVpcmVkXG5cdFx0ZWxzZVxuXHRcdFx0ZGVsZXRlIGZpbHRlckl0ZW0uaXNfZGVmYXVsdFxuXHRcdFx0ZGVsZXRlIGZpbHRlckl0ZW0uaXNfcmVxdWlyZWRcblx0cmV0dXJuIGZpbHRlcnNcblxuQ3JlYXRvci5nZXRPYmplY3RSZWNvcmQgPSAob2JqZWN0X25hbWUsIHJlY29yZF9pZCwgc2VsZWN0X2ZpZWxkcywgZXhwYW5kKS0+XG5cblx0aWYgIW9iamVjdF9uYW1lXG5cdFx0b2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpXG5cblx0aWYgIXJlY29yZF9pZFxuXHRcdHJlY29yZF9pZCA9IFNlc3Npb24uZ2V0KFwicmVjb3JkX2lkXCIpXG5cdGlmIE1ldGVvci5pc0NsaWVudFxuXHRcdGlmIG9iamVjdF9uYW1lID09IFNlc3Npb24uZ2V0KFwib2JqZWN0X25hbWVcIikgJiYgIHJlY29yZF9pZCA9PSBTZXNzaW9uLmdldChcInJlY29yZF9pZFwiKVxuXHRcdFx0aWYgVGVtcGxhdGUuaW5zdGFuY2UoKT8ucmVjb3JkXG5cdFx0XHRcdHJldHVybiBUZW1wbGF0ZS5pbnN0YW5jZSgpPy5yZWNvcmQ/LmdldCgpXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIENyZWF0b3Iub2RhdGEuZ2V0KG9iamVjdF9uYW1lLCByZWNvcmRfaWQsIHNlbGVjdF9maWVsZHMsIGV4cGFuZClcblxuXHRjb2xsZWN0aW9uID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdF9uYW1lKVxuXHRpZiBjb2xsZWN0aW9uXG5cdFx0cmVjb3JkID0gY29sbGVjdGlvbi5maW5kT25lKHJlY29yZF9pZClcblx0XHRyZXR1cm4gcmVjb3JkXG5cbkNyZWF0b3IuZ2V0QXBwID0gKGFwcF9pZCktPlxuXHRpZiAhYXBwX2lkXG5cdFx0YXBwX2lkID0gU2Vzc2lvbi5nZXQoXCJhcHBfaWRcIilcblx0YXBwID0gQ3JlYXRvci5BcHBzW2FwcF9pZF1cblx0Q3JlYXRvci5kZXBzPy5hcHA/LmRlcGVuZCgpXG5cdHJldHVybiBhcHBcblxuXG5DcmVhdG9yLmdldEFwcE9iamVjdE5hbWVzID0gKGFwcF9pZCktPlxuXHRhcHAgPSBDcmVhdG9yLmdldEFwcChhcHBfaWQpXG5cblx0b2JqZWN0cyA9IFtdXG5cdGlmIGFwcFxuXHRcdF8uZWFjaCBhcHAub2JqZWN0cywgKHYpLT5cblx0XHRcdG9iaiA9IENyZWF0b3IuZ2V0T2JqZWN0KHYpXG5cdFx0XHRpZiBvYmo/LnBlcm1pc3Npb25zLmdldCgpLmFsbG93UmVhZCBhbmQgIW9iai5oaWRkZW5cblx0XHRcdFx0b2JqZWN0cy5wdXNoIHZcblx0cmV0dXJuIG9iamVjdHNcblxuQ3JlYXRvci5nZXRWaXNpYmxlQXBwcyA9IChpbmNsdWRlQWRtaW4pLT5cblx0YXBwcyA9IFtdXG5cdF8uZWFjaCBDcmVhdG9yLkFwcHMsICh2LCBrKS0+XG5cdFx0aWYgKHYudmlzaWJsZSAhPSBmYWxzZSBhbmQgdi5faWQgIT0gXCJhZG1pblwiKSBvciAoaW5jbHVkZUFkbWluIGFuZCB2Ll9pZCA9PSBcImFkbWluXCIpXG5cdFx0XHRhcHBzLnB1c2ggdlxuXHRyZXR1cm4gYXBwcztcblxuQ3JlYXRvci5nZXRWaXNpYmxlQXBwc09iamVjdHMgPSAoKS0+XG5cdGFwcHMgPSBDcmVhdG9yLmdldFZpc2libGVBcHBzKClcblx0dmlzaWJsZU9iamVjdE5hbWVzID0gXy5mbGF0dGVuKF8ucGx1Y2soYXBwcywnb2JqZWN0cycpKVxuXHRvYmplY3RzID0gXy5maWx0ZXIgQ3JlYXRvci5PYmplY3RzLCAob2JqKS0+XG5cdFx0aWYgdmlzaWJsZU9iamVjdE5hbWVzLmluZGV4T2Yob2JqLm5hbWUpIDwgMFxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuICFvYmouaGlkZGVuXG5cdG9iamVjdHMgPSBvYmplY3RzLnNvcnQoQ3JlYXRvci5zb3J0aW5nTWV0aG9kLmJpbmQoe2tleTpcImxhYmVsXCJ9KSlcblx0b2JqZWN0cyA9IF8ucGx1Y2sob2JqZWN0cywnbmFtZScpXG5cdHJldHVybiBfLnVuaXEgb2JqZWN0c1xuXG5DcmVhdG9yLmdldEFwcHNPYmplY3RzID0gKCktPlxuXHRvYmplY3RzID0gW11cblx0dGVtcE9iamVjdHMgPSBbXVxuXHRfLmZvckVhY2ggQ3JlYXRvci5BcHBzLCAoYXBwKS0+XG5cdFx0dGVtcE9iamVjdHMgPSBfLmZpbHRlciBhcHAub2JqZWN0cywgKG9iaiktPlxuXHRcdFx0cmV0dXJuICFvYmouaGlkZGVuXG5cdFx0b2JqZWN0cyA9IG9iamVjdHMuY29uY2F0KHRlbXBPYmplY3RzKVxuXHRyZXR1cm4gXy51bmlxIG9iamVjdHNcblxuQ3JlYXRvci52YWxpZGF0ZUZpbHRlcnMgPSAoZmlsdGVycywgbG9naWMpLT5cblx0ZmlsdGVyX2l0ZW1zID0gXy5tYXAgZmlsdGVycywgKG9iaikgLT5cblx0XHRpZiBfLmlzRW1wdHkob2JqKVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIG9ialxuXHRmaWx0ZXJfaXRlbXMgPSBfLmNvbXBhY3QoZmlsdGVyX2l0ZW1zKVxuXHRlcnJvck1zZyA9IFwiXCJcblx0ZmlsdGVyX2xlbmd0aCA9IGZpbHRlcl9pdGVtcy5sZW5ndGhcblx0aWYgbG9naWNcblx0XHQjIOagvOW8j+WMlmZpbHRlclxuXHRcdGxvZ2ljID0gbG9naWMucmVwbGFjZSgvXFxuL2csIFwiXCIpLnJlcGxhY2UoL1xccysvZywgXCIgXCIpXG5cblx0XHQjIOWIpOaWreeJueauiuWtl+esplxuXHRcdGlmIC9bLl9cXC0hK10rL2lnLnRlc3QobG9naWMpXG5cdFx0XHRlcnJvck1zZyA9IFwi5ZCr5pyJ54m55q6K5a2X56ym44CCXCJcblxuXHRcdGlmICFlcnJvck1zZ1xuXHRcdFx0aW5kZXggPSBsb2dpYy5tYXRjaCgvXFxkKy9pZylcblx0XHRcdGlmICFpbmRleFxuXHRcdFx0XHRlcnJvck1zZyA9IFwi5pyJ5Lqb562b6YCJ5p2h5Lu26L+b6KGM5LqG5a6a5LmJ77yM5L2G5pyq5Zyo6auY57qn562b6YCJ5p2h5Lu25Lit6KKr5byV55So44CCXCJcblx0XHRcdGVsc2Vcblx0XHRcdFx0aW5kZXguZm9yRWFjaCAoaSktPlxuXHRcdFx0XHRcdGlmIGkgPCAxIG9yIGkgPiBmaWx0ZXJfbGVuZ3RoXG5cdFx0XHRcdFx0XHRlcnJvck1zZyA9IFwi5oKo55qE562b6YCJ5p2h5Lu25byV55So5LqG5pyq5a6a5LmJ55qE562b6YCJ5Zmo77yaI3tpfeOAglwiXG5cblx0XHRcdFx0ZmxhZyA9IDFcblx0XHRcdFx0d2hpbGUgZmxhZyA8PSBmaWx0ZXJfbGVuZ3RoXG5cdFx0XHRcdFx0aWYgIWluZGV4LmluY2x1ZGVzKFwiI3tmbGFnfVwiKVxuXHRcdFx0XHRcdFx0ZXJyb3JNc2cgPSBcIuacieS6m+etm+mAieadoeS7tui/m+ihjOS6huWumuS5ie+8jOS9huacquWcqOmrmOe6p+etm+mAieadoeS7tuS4reiiq+W8leeUqOOAglwiXG5cdFx0XHRcdFx0ZmxhZysrO1xuXG5cdFx0aWYgIWVycm9yTXNnXG5cdFx0XHQjIOWIpOaWreaYr+WQpuaciemdnuazleiLseaWh+Wtl+esplxuXHRcdFx0d29yZCA9IGxvZ2ljLm1hdGNoKC9bYS16QS1aXSsvaWcpXG5cdFx0XHRpZiB3b3JkXG5cdFx0XHRcdHdvcmQuZm9yRWFjaCAodyktPlxuXHRcdFx0XHRcdGlmICEvXihhbmR8b3IpJC9pZy50ZXN0KHcpXG5cdFx0XHRcdFx0XHRlcnJvck1zZyA9IFwi5qOA5p+l5oKo55qE6auY57qn562b6YCJ5p2h5Lu25Lit55qE5ou85YaZ44CCXCJcblxuXHRcdGlmICFlcnJvck1zZ1xuXHRcdFx0IyDliKTmlq3moLzlvI/mmK/lkKbmraPnoa5cblx0XHRcdHRyeVxuXHRcdFx0XHRDcmVhdG9yLmV2YWwobG9naWMucmVwbGFjZSgvYW5kL2lnLCBcIiYmXCIpLnJlcGxhY2UoL29yL2lnLCBcInx8XCIpKVxuXHRcdFx0Y2F0Y2ggZVxuXHRcdFx0XHRlcnJvck1zZyA9IFwi5oKo55qE562b6YCJ5Zmo5Lit5ZCr5pyJ54m55q6K5a2X56ymXCJcblxuXHRcdFx0aWYgLyhBTkQpW14oKV0rKE9SKS9pZy50ZXN0KGxvZ2ljKSB8fCAgLyhPUilbXigpXSsoQU5EKS9pZy50ZXN0KGxvZ2ljKVxuXHRcdFx0XHRlcnJvck1zZyA9IFwi5oKo55qE562b6YCJ5Zmo5b+F6aG75Zyo6L+e57ut5oCn55qEIEFORCDlkowgT1Ig6KGo6L6+5byP5YmN5ZCO5L2/55So5ous5Y+344CCXCJcblx0aWYgZXJyb3JNc2dcblx0XHRjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yTXNnXG5cdFx0aWYgTWV0ZW9yLmlzQ2xpZW50XG5cdFx0XHR0b2FzdHIuZXJyb3IoZXJyb3JNc2cpXG5cdFx0cmV0dXJuIGZhbHNlXG5cdGVsc2Vcblx0XHRyZXR1cm4gdHJ1ZVxuXG4jIFwiPVwiLCBcIjw+XCIsIFwiPlwiLCBcIj49XCIsIFwiPFwiLCBcIjw9XCIsIFwic3RhcnRzd2l0aFwiLCBcImNvbnRhaW5zXCIsIFwibm90Y29udGFpbnNcIi5cbiMjI1xub3B0aW9uc+WPguaVsO+8mlxuXHRleHRlbmQtLSDmmK/lkKbpnIDopoHmiorlvZPliY3nlKjmiLfln7rmnKzkv6Hmga/liqDlhaXlhazlvI/vvIzljbPorqnlhazlvI/mlK/mjIFDcmVhdG9yLlVTRVJfQ09OVEVYVOS4reeahOWAvO+8jOm7mOiupOS4unRydWVcblx0dXNlcklkLS0g5b2T5YmN55m75b2V55So5oi3XG5cdHNwYWNlSWQtLSDlvZPliY3miYDlnKjlt6XkvZzljLpcbmV4dGVuZOS4unRydWXml7bvvIzlkI7nq6/pnIDopoHpop3lpJbkvKDlhaV1c2VySWTlj4pzcGFjZUlk55So5LqO5oqT5Y+WQ3JlYXRvci5VU0VSX0NPTlRFWFTlr7nlupTnmoTlgLxcbiMjI1xuQ3JlYXRvci5mb3JtYXRGaWx0ZXJzVG9Nb25nbyA9IChmaWx0ZXJzLCBvcHRpb25zKS0+XG5cdHVubGVzcyBmaWx0ZXJzPy5sZW5ndGhcblx0XHRyZXR1cm5cblx0IyDlvZNmaWx0ZXJz5LiN5pivW0FycmF5Xeexu+Wei+iAjOaYr1tPYmplY3Rd57G75Z6L5pe277yM6L+b6KGM5qC85byP6L2s5o2iXG5cdHVubGVzcyBmaWx0ZXJzWzBdIGluc3RhbmNlb2YgQXJyYXlcblx0XHRmaWx0ZXJzID0gXy5tYXAgZmlsdGVycywgKG9iaiktPlxuXHRcdFx0cmV0dXJuIFtvYmouZmllbGQsIG9iai5vcGVyYXRpb24sIG9iai52YWx1ZV1cblx0c2VsZWN0b3IgPSBbXVxuXHRfLmVhY2ggZmlsdGVycywgKGZpbHRlciktPlxuXHRcdGZpZWxkID0gZmlsdGVyWzBdXG5cdFx0b3B0aW9uID0gZmlsdGVyWzFdXG5cdFx0aWYgTWV0ZW9yLmlzQ2xpZW50XG5cdFx0XHR2YWx1ZSA9IENyZWF0b3IuZXZhbHVhdGVGb3JtdWxhKGZpbHRlclsyXSlcblx0XHRlbHNlXG5cdFx0XHR2YWx1ZSA9IENyZWF0b3IuZXZhbHVhdGVGb3JtdWxhKGZpbHRlclsyXSwgbnVsbCwgb3B0aW9ucylcblx0XHRzdWJfc2VsZWN0b3IgPSB7fVxuXHRcdHN1Yl9zZWxlY3RvcltmaWVsZF0gPSB7fVxuXHRcdGlmIG9wdGlvbiA9PSBcIj1cIlxuXHRcdFx0c3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRlcVwiXSA9IHZhbHVlXG5cdFx0ZWxzZSBpZiBvcHRpb24gPT0gXCI8PlwiXG5cdFx0XHRzdWJfc2VsZWN0b3JbZmllbGRdW1wiJG5lXCJdID0gdmFsdWVcblx0XHRlbHNlIGlmIG9wdGlvbiA9PSBcIj5cIlxuXHRcdFx0c3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRndFwiXSA9IHZhbHVlXG5cdFx0ZWxzZSBpZiBvcHRpb24gPT0gXCI+PVwiXG5cdFx0XHRzdWJfc2VsZWN0b3JbZmllbGRdW1wiJGd0ZVwiXSA9IHZhbHVlXG5cdFx0ZWxzZSBpZiBvcHRpb24gPT0gXCI8XCJcblx0XHRcdHN1Yl9zZWxlY3RvcltmaWVsZF1bXCIkbHRcIl0gPSB2YWx1ZVxuXHRcdGVsc2UgaWYgb3B0aW9uID09IFwiPD1cIlxuXHRcdFx0c3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRsdGVcIl0gPSB2YWx1ZVxuXHRcdGVsc2UgaWYgb3B0aW9uID09IFwic3RhcnRzd2l0aFwiXG5cdFx0XHRyZWcgPSBuZXcgUmVnRXhwKFwiXlwiICsgdmFsdWUsIFwiaVwiKVxuXHRcdFx0c3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRyZWdleFwiXSA9IHJlZ1xuXHRcdGVsc2UgaWYgb3B0aW9uID09IFwiY29udGFpbnNcIlxuXHRcdFx0cmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgXCJpXCIpXG5cdFx0XHRzdWJfc2VsZWN0b3JbZmllbGRdW1wiJHJlZ2V4XCJdID0gcmVnXG5cdFx0ZWxzZSBpZiBvcHRpb24gPT0gXCJub3Rjb250YWluc1wiXG5cdFx0XHRyZWcgPSBuZXcgUmVnRXhwKFwiXigoPyFcIiArIHZhbHVlICsgXCIpLikqJFwiLCBcImlcIilcblx0XHRcdHN1Yl9zZWxlY3RvcltmaWVsZF1bXCIkcmVnZXhcIl0gPSByZWdcblx0XHRzZWxlY3Rvci5wdXNoIHN1Yl9zZWxlY3RvclxuXHRyZXR1cm4gc2VsZWN0b3JcblxuQ3JlYXRvci5pc0JldHdlZW5GaWx0ZXJPcGVyYXRpb24gPSAob3BlcmF0aW9uKS0+XG5cdHJldHVybiBvcGVyYXRpb24gPT0gXCJiZXR3ZWVuXCIgb3IgISFDcmVhdG9yLmdldEJldHdlZW5UaW1lQnVpbHRpblZhbHVlcyh0cnVlKT9bb3BlcmF0aW9uXVxuXG4jIyNcbm9wdGlvbnPlj4LmlbDvvJpcblx0ZXh0ZW5kLS0g5piv5ZCm6ZyA6KaB5oqK5b2T5YmN55So5oi35Z+65pys5L+h5oGv5Yqg5YWl5YWs5byP77yM5Y2z6K6p5YWs5byP5pSv5oyBQ3JlYXRvci5VU0VSX0NPTlRFWFTkuK3nmoTlgLzvvIzpu5jorqTkuLp0cnVlXG5cdHVzZXJJZC0tIOW9k+WJjeeZu+W9leeUqOaIt1xuXHRzcGFjZUlkLS0g5b2T5YmN5omA5Zyo5bel5L2c5Yy6XG5cdGV4dGVuZOS4unRydWXml7bvvIzlkI7nq6/pnIDopoHpop3lpJbkvKDlhaV1c2VySWTlj4pzcGFjZUlk55So5LqO5oqT5Y+WQ3JlYXRvci5VU0VSX0NPTlRFWFTlr7nlupTnmoTlgLxcbiMjI1xuQ3JlYXRvci5mb3JtYXRGaWx0ZXJzVG9EZXYgPSAoZmlsdGVycywgb2JqZWN0X25hbWUsIG9wdGlvbnMpLT5cblx0c3RlZWRvc0ZpbHRlcnMgPSByZXF1aXJlKFwiQHN0ZWVkb3MvZmlsdGVyc1wiKTtcblx0dW5sZXNzIGZpbHRlcnMubGVuZ3RoXG5cdFx0cmV0dXJuXG5cdGlmIG9wdGlvbnM/LmlzX2xvZ2ljX29yXG5cdFx0IyDlpoLmnpxpc19sb2dpY19vcuS4unRydWXvvIzkuLpmaWx0ZXJz56ys5LiA5bGC5YWD57Sg5aKe5Yqgb3Lpl7TpmpRcblx0XHRsb2dpY1RlbXBGaWx0ZXJzID0gW11cblx0XHRmaWx0ZXJzLmZvckVhY2ggKG4pLT5cblx0XHRcdGxvZ2ljVGVtcEZpbHRlcnMucHVzaChuKVxuXHRcdFx0bG9naWNUZW1wRmlsdGVycy5wdXNoKFwib3JcIilcblx0XHRsb2dpY1RlbXBGaWx0ZXJzLnBvcCgpXG5cdFx0ZmlsdGVycyA9IGxvZ2ljVGVtcEZpbHRlcnNcblx0c2VsZWN0b3IgPSBzdGVlZG9zRmlsdGVycy5mb3JtYXRGaWx0ZXJzVG9EZXYoZmlsdGVycywgQ3JlYXRvci5VU0VSX0NPTlRFWFQpXG5cdHJldHVybiBzZWxlY3RvclxuXG4jIyNcbm9wdGlvbnPlj4LmlbDvvJpcblx0ZXh0ZW5kLS0g5piv5ZCm6ZyA6KaB5oqK5b2T5YmN55So5oi35Z+65pys5L+h5oGv5Yqg5YWl5YWs5byP77yM5Y2z6K6p5YWs5byP5pSv5oyBQ3JlYXRvci5VU0VSX0NPTlRFWFTkuK3nmoTlgLzvvIzpu5jorqTkuLp0cnVlXG5cdHVzZXJJZC0tIOW9k+WJjeeZu+W9leeUqOaIt1xuXHRzcGFjZUlkLS0g5b2T5YmN5omA5Zyo5bel5L2c5Yy6XG5leHRlbmTkuLp0cnVl5pe277yM5ZCO56uv6ZyA6KaB6aKd5aSW5Lyg5YWldXNlcklk5Y+Kc3BhY2VJZOeUqOS6juaKk+WPlkNyZWF0b3IuVVNFUl9DT05URVhU5a+55bqU55qE5YC8XG4jIyNcbkNyZWF0b3IuZm9ybWF0TG9naWNGaWx0ZXJzVG9EZXYgPSAoZmlsdGVycywgZmlsdGVyX2xvZ2ljLCBvcHRpb25zKS0+XG5cdGZvcm1hdF9sb2dpYyA9IGZpbHRlcl9sb2dpYy5yZXBsYWNlKC9cXChcXHMrL2lnLCBcIihcIikucmVwbGFjZSgvXFxzK1xcKS9pZywgXCIpXCIpLnJlcGxhY2UoL1xcKC9nLCBcIltcIikucmVwbGFjZSgvXFwpL2csIFwiXVwiKS5yZXBsYWNlKC9cXHMrL2csIFwiLFwiKS5yZXBsYWNlKC8oYW5kfG9yKS9pZywgXCInJDEnXCIpXG5cdGZvcm1hdF9sb2dpYyA9IGZvcm1hdF9sb2dpYy5yZXBsYWNlKC8oXFxkKSsvaWcsICh4KS0+XG5cdFx0X2YgPSBmaWx0ZXJzW3gtMV1cblx0XHRmaWVsZCA9IF9mLmZpZWxkXG5cdFx0b3B0aW9uID0gX2Yub3BlcmF0aW9uXG5cdFx0aWYgTWV0ZW9yLmlzQ2xpZW50XG5cdFx0XHR2YWx1ZSA9IENyZWF0b3IuZXZhbHVhdGVGb3JtdWxhKF9mLnZhbHVlKVxuXHRcdGVsc2Vcblx0XHRcdHZhbHVlID0gQ3JlYXRvci5ldmFsdWF0ZUZvcm11bGEoX2YudmFsdWUsIG51bGwsIG9wdGlvbnMpXG5cdFx0c3ViX3NlbGVjdG9yID0gW11cblx0XHRpZiBfLmlzQXJyYXkodmFsdWUpID09IHRydWVcblx0XHRcdGlmIG9wdGlvbiA9PSBcIj1cIlxuXHRcdFx0XHRfLmVhY2ggdmFsdWUsICh2KS0+XG5cdFx0XHRcdFx0c3ViX3NlbGVjdG9yLnB1c2ggW2ZpZWxkLCBvcHRpb24sIHZdLCBcIm9yXCJcblx0XHRcdGVsc2UgaWYgb3B0aW9uID09IFwiPD5cIlxuXHRcdFx0XHRfLmVhY2ggdmFsdWUsICh2KS0+XG5cdFx0XHRcdFx0c3ViX3NlbGVjdG9yLnB1c2ggW2ZpZWxkLCBvcHRpb24sIHZdLCBcImFuZFwiXG5cdFx0XHRlbHNlXG5cdFx0XHRcdF8uZWFjaCB2YWx1ZSwgKHYpLT5cblx0XHRcdFx0XHRzdWJfc2VsZWN0b3IucHVzaCBbZmllbGQsIG9wdGlvbiwgdl0sIFwib3JcIlxuXHRcdFx0aWYgc3ViX3NlbGVjdG9yW3N1Yl9zZWxlY3Rvci5sZW5ndGggLSAxXSA9PSBcImFuZFwiIHx8IHN1Yl9zZWxlY3RvcltzdWJfc2VsZWN0b3IubGVuZ3RoIC0gMV0gPT0gXCJvclwiXG5cdFx0XHRcdHN1Yl9zZWxlY3Rvci5wb3AoKVxuXHRcdGVsc2Vcblx0XHRcdHN1Yl9zZWxlY3RvciA9IFtmaWVsZCwgb3B0aW9uLCB2YWx1ZV1cblx0XHRjb25zb2xlLmxvZyBcInN1Yl9zZWxlY3RvclwiLCBzdWJfc2VsZWN0b3Jcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkoc3ViX3NlbGVjdG9yKVxuXHQpXG5cdGZvcm1hdF9sb2dpYyA9IFwiWyN7Zm9ybWF0X2xvZ2ljfV1cIlxuXHRyZXR1cm4gQ3JlYXRvci5ldmFsKGZvcm1hdF9sb2dpYylcblxuQ3JlYXRvci5nZXRSZWxhdGVkT2JqZWN0cyA9IChvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKS0+XG5cdGlmIE1ldGVvci5pc0NsaWVudFxuXHRcdGlmICFvYmplY3RfbmFtZVxuXHRcdFx0b2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpXG5cdFx0aWYgIXNwYWNlSWRcblx0XHRcdHNwYWNlSWQgPSBTZXNzaW9uLmdldChcInNwYWNlSWRcIilcblx0XHRpZiAhdXNlcklkXG5cdFx0XHR1c2VySWQgPSBNZXRlb3IudXNlcklkKClcblxuXHRyZWxhdGVkX29iamVjdF9uYW1lcyA9IFtdXG5cdF9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSlcblxuXHRpZiAhX29iamVjdFxuXHRcdHJldHVybiByZWxhdGVkX29iamVjdF9uYW1lc1xuXG4jXHRyZWxhdGVkX29iamVjdF9uYW1lcyA9IF8ucGx1Y2soX29iamVjdC5yZWxhdGVkX29iamVjdHMsXCJvYmplY3RfbmFtZVwiKVxuXG5cdHJlbGF0ZWRfb2JqZWN0cyA9IENyZWF0b3IuZ2V0T2JqZWN0UmVsYXRlZHMoX29iamVjdC5fY29sbGVjdGlvbl9uYW1lKVxuXG5cdHJlbGF0ZWRfb2JqZWN0X25hbWVzID0gXy5wbHVjayhyZWxhdGVkX29iamVjdHMsXCJvYmplY3RfbmFtZVwiKVxuXHRpZiByZWxhdGVkX29iamVjdF9uYW1lcz8ubGVuZ3RoID09IDBcblx0XHRyZXR1cm4gcmVsYXRlZF9vYmplY3RfbmFtZXNcblxuXHRwZXJtaXNzaW9ucyA9IENyZWF0b3IuZ2V0UGVybWlzc2lvbnMob2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZClcblx0dW5yZWxhdGVkX29iamVjdHMgPSBwZXJtaXNzaW9ucy51bnJlbGF0ZWRfb2JqZWN0c1xuXG5cdHJlbGF0ZWRfb2JqZWN0X25hbWVzID0gXy5kaWZmZXJlbmNlIHJlbGF0ZWRfb2JqZWN0X25hbWVzLCB1bnJlbGF0ZWRfb2JqZWN0c1xuXHRyZXR1cm4gXy5maWx0ZXIgcmVsYXRlZF9vYmplY3RzLCAocmVsYXRlZF9vYmplY3QpLT5cblx0XHRyZWxhdGVkX29iamVjdF9uYW1lID0gcmVsYXRlZF9vYmplY3Qub2JqZWN0X25hbWVcblx0XHRpc0FjdGl2ZSA9IHJlbGF0ZWRfb2JqZWN0X25hbWVzLmluZGV4T2YocmVsYXRlZF9vYmplY3RfbmFtZSkgPiAtMVxuXHRcdGFsbG93UmVhZCA9IENyZWF0b3IuZ2V0UGVybWlzc2lvbnMocmVsYXRlZF9vYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKT8uYWxsb3dSZWFkXG5cdFx0cmV0dXJuIGlzQWN0aXZlIGFuZCBhbGxvd1JlYWRcblxuQ3JlYXRvci5nZXRSZWxhdGVkT2JqZWN0TmFtZXMgPSAob2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCktPlxuXHRyZWxhdGVkX29iamVjdHMgPSBDcmVhdG9yLmdldFJlbGF0ZWRPYmplY3RzKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpXG5cdHJldHVybiBfLnBsdWNrKHJlbGF0ZWRfb2JqZWN0cyxcIm9iamVjdF9uYW1lXCIpXG5cbkNyZWF0b3IuZ2V0QWN0aW9ucyA9IChvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKS0+XG5cdGlmIE1ldGVvci5pc0NsaWVudFxuXHRcdGlmICFvYmplY3RfbmFtZVxuXHRcdFx0b2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpXG5cdFx0aWYgIXNwYWNlSWRcblx0XHRcdHNwYWNlSWQgPSBTZXNzaW9uLmdldChcInNwYWNlSWRcIilcblx0XHRpZiAhdXNlcklkXG5cdFx0XHR1c2VySWQgPSBNZXRlb3IudXNlcklkKClcblxuXHRvYmogPSBDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSlcblxuXHRpZiAhb2JqXG5cdFx0cmV0dXJuXG5cblx0cGVybWlzc2lvbnMgPSBDcmVhdG9yLmdldFBlcm1pc3Npb25zKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpXG5cdGRpc2FibGVkX2FjdGlvbnMgPSBwZXJtaXNzaW9ucy5kaXNhYmxlZF9hY3Rpb25zXG5cdGFjdGlvbnMgPSBfLnNvcnRCeShfLnZhbHVlcyhvYmouYWN0aW9ucykgLCAnc29ydCcpO1xuXG5cdF8uZWFjaCBhY3Rpb25zLCAoYWN0aW9uKS0+XG5cdFx0aWYgU3RlZWRvcy5pc01vYmlsZSgpICYmIGFjdGlvbi5vbiA9PSBcInJlY29yZFwiICYmIGFjdGlvbi5uYW1lICE9ICdzdGFuZGFyZF9lZGl0J1xuXHRcdFx0YWN0aW9uLm9uID0gJ3JlY29yZF9tb3JlJ1xuXG5cdGFjdGlvbnMgPSBfLmZpbHRlciBhY3Rpb25zLCAoYWN0aW9uKS0+XG5cdFx0cmV0dXJuIF8uaW5kZXhPZihkaXNhYmxlZF9hY3Rpb25zLCBhY3Rpb24ubmFtZSkgPCAwXG5cblx0cmV0dXJuIGFjdGlvbnNcblxuLy8vXG5cdOi/lOWbnuW9k+WJjeeUqOaIt+acieadg+mZkOiuv+mXrueahOaJgOaciWxpc3Rfdmlld++8jOWMheaLrOWIhuS6q+eahO+8jOeUqOaIt+iHquWumuS5iemdnuWIhuS6q+eahO+8iOmZpOmdnm93bmVy5Y+Y5LqG77yJ77yM5Lul5Y+K6buY6K6k55qE5YW25LuW6KeG5Zu+XG5cdOazqOaEj0NyZWF0b3IuZ2V0UGVybWlzc2lvbnPlh73mlbDkuK3mmK/kuI3kvJrmnInnlKjmiLfoh6rlrprkuYnpnZ7liIbkuqvnmoTop4blm77nmoTvvIzmiYDku6VDcmVhdG9yLmdldFBlcm1pc3Npb25z5Ye95pWw5Lit5ou/5Yiw55qE57uT5p6c5LiN5YWo77yM5bm25LiN5piv5b2T5YmN55So5oi36IO955yL5Yiw5omA5pyJ6KeG5Zu+XG4vLy9cbkNyZWF0b3IuZ2V0TGlzdFZpZXdzID0gKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpLT5cblx0aWYgTWV0ZW9yLmlzQ2xpZW50XG5cdFx0aWYgIW9iamVjdF9uYW1lXG5cdFx0XHRvYmplY3RfbmFtZSA9IFNlc3Npb24uZ2V0KFwib2JqZWN0X25hbWVcIilcblx0XHRpZiAhc3BhY2VJZFxuXHRcdFx0c3BhY2VJZCA9IFNlc3Npb24uZ2V0KFwic3BhY2VJZFwiKVxuXHRcdGlmICF1c2VySWRcblx0XHRcdHVzZXJJZCA9IE1ldGVvci51c2VySWQoKVxuXG5cdG9iamVjdCA9IENyZWF0b3IuZ2V0T2JqZWN0KG9iamVjdF9uYW1lKVxuXG5cdGlmICFvYmplY3Rcblx0XHRyZXR1cm5cblxuXHRkaXNhYmxlZF9saXN0X3ZpZXdzID0gQ3JlYXRvci5nZXRQZXJtaXNzaW9ucyhvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKS5kaXNhYmxlZF9saXN0X3ZpZXdzIHx8IFtdXG5cblx0bGlzdF92aWV3cyA9IFtdXG5cblx0aXNNb2JpbGUgPSBTdGVlZG9zLmlzTW9iaWxlKClcblxuXHRfLmVhY2ggb2JqZWN0Lmxpc3Rfdmlld3MsIChpdGVtLCBpdGVtX25hbWUpLT5cblx0XHRpZiBpc01vYmlsZSBhbmQgaXRlbS50eXBlID09IFwiY2FsZW5kYXJcIlxuXHRcdFx0IyDmiYvmnLrkuIrlhYjkuI3mmL7npLrml6Xljobop4blm75cblx0XHRcdHJldHVyblxuXHRcdGlmIGl0ZW1fbmFtZSAhPSBcImRlZmF1bHRcIlxuXHRcdFx0aWYgXy5pbmRleE9mKGRpc2FibGVkX2xpc3Rfdmlld3MsIGl0ZW1fbmFtZSkgPCAwIHx8IGl0ZW0ub3duZXIgPT0gdXNlcklkXG5cdFx0XHRcdGxpc3Rfdmlld3MucHVzaCBpdGVtXG5cblx0cmV0dXJuIGxpc3Rfdmlld3NcblxuIyDliY3lj7DnkIborrrkuIrkuI3lupTor6XosIPnlKjor6Xlh73mlbDvvIzlm6DkuLrlrZfmrrXnmoTmnYPpmZDpg73lnKhDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSkuZmllbGRz55qE55u45YWz5bGe5oCn5Lit5pyJ5qCH6K+G5LqGXG5DcmVhdG9yLmdldEZpZWxkcyA9IChvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKS0+XG5cdGlmIE1ldGVvci5pc0NsaWVudFxuXHRcdGlmICFvYmplY3RfbmFtZVxuXHRcdFx0b2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpXG5cdFx0aWYgIXNwYWNlSWRcblx0XHRcdHNwYWNlSWQgPSBTZXNzaW9uLmdldChcInNwYWNlSWRcIilcblx0XHRpZiAhdXNlcklkXG5cdFx0XHR1c2VySWQgPSBNZXRlb3IudXNlcklkKClcblxuXHRmaWVsZHNOYW1lID0gQ3JlYXRvci5nZXRPYmplY3RGaWVsZHNOYW1lKG9iamVjdF9uYW1lKVxuXHR1bnJlYWRhYmxlX2ZpZWxkcyA9ICBDcmVhdG9yLmdldFBlcm1pc3Npb25zKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpLnVucmVhZGFibGVfZmllbGRzXG5cdHJldHVybiBfLmRpZmZlcmVuY2UoZmllbGRzTmFtZSwgdW5yZWFkYWJsZV9maWVsZHMpXG5cbkNyZWF0b3IuaXNsb2FkaW5nID0gKCktPlxuXHRyZXR1cm4gIUNyZWF0b3IuYm9vdHN0cmFwTG9hZGVkLmdldCgpXG5cbkNyZWF0b3IuY29udmVydFNwZWNpYWxDaGFyYWN0ZXIgPSAoc3RyKS0+XG5cdHJldHVybiBzdHIucmVwbGFjZSgvKFtcXF5cXCRcXChcXClcXCpcXCtcXD9cXC5cXFxcXFx8XFxbXFxdXFx7XFx9XSkvZywgXCJcXFxcJDFcIilcblxuIyDorqHnrpdmaWVsZHPnm7jlhbPlh73mlbBcbiMgU1RBUlRcbkNyZWF0b3IuZ2V0RGlzYWJsZWRGaWVsZHMgPSAoc2NoZW1hKS0+XG5cdGZpZWxkcyA9IF8ubWFwKHNjaGVtYSwgKGZpZWxkLCBmaWVsZE5hbWUpIC0+XG5cdFx0cmV0dXJuIGZpZWxkLmF1dG9mb3JtIGFuZCBmaWVsZC5hdXRvZm9ybS5kaXNhYmxlZCBhbmQgIWZpZWxkLmF1dG9mb3JtLm9taXQgYW5kIGZpZWxkTmFtZVxuXHQpXG5cdGZpZWxkcyA9IF8uY29tcGFjdChmaWVsZHMpXG5cdHJldHVybiBmaWVsZHNcblxuQ3JlYXRvci5nZXRIaWRkZW5GaWVsZHMgPSAoc2NoZW1hKS0+XG5cdGZpZWxkcyA9IF8ubWFwKHNjaGVtYSwgKGZpZWxkLCBmaWVsZE5hbWUpIC0+XG5cdFx0cmV0dXJuIGZpZWxkLmF1dG9mb3JtIGFuZCBmaWVsZC5hdXRvZm9ybS50eXBlID09IFwiaGlkZGVuXCIgYW5kICFmaWVsZC5hdXRvZm9ybS5vbWl0IGFuZCBmaWVsZE5hbWVcblx0KVxuXHRmaWVsZHMgPSBfLmNvbXBhY3QoZmllbGRzKVxuXHRyZXR1cm4gZmllbGRzXG5cbkNyZWF0b3IuZ2V0RmllbGRzV2l0aE5vR3JvdXAgPSAoc2NoZW1hKS0+XG5cdGZpZWxkcyA9IF8ubWFwKHNjaGVtYSwgKGZpZWxkLCBmaWVsZE5hbWUpIC0+XG5cdFx0cmV0dXJuICghZmllbGQuYXV0b2Zvcm0gb3IgIWZpZWxkLmF1dG9mb3JtLmdyb3VwIG9yIGZpZWxkLmF1dG9mb3JtLmdyb3VwID09IFwiLVwiKSBhbmQgKCFmaWVsZC5hdXRvZm9ybSBvciBmaWVsZC5hdXRvZm9ybS50eXBlICE9IFwiaGlkZGVuXCIpIGFuZCBmaWVsZE5hbWVcblx0KVxuXHRmaWVsZHMgPSBfLmNvbXBhY3QoZmllbGRzKVxuXHRyZXR1cm4gZmllbGRzXG5cbkNyZWF0b3IuZ2V0U29ydGVkRmllbGRHcm91cE5hbWVzID0gKHNjaGVtYSktPlxuXHRuYW1lcyA9IF8ubWFwKHNjaGVtYSwgKGZpZWxkKSAtPlxuIFx0XHRyZXR1cm4gZmllbGQuYXV0b2Zvcm0gYW5kIGZpZWxkLmF1dG9mb3JtLmdyb3VwICE9IFwiLVwiIGFuZCBmaWVsZC5hdXRvZm9ybS5ncm91cFxuXHQpXG5cdG5hbWVzID0gXy5jb21wYWN0KG5hbWVzKVxuXHRuYW1lcyA9IF8udW5pcXVlKG5hbWVzKVxuXHRyZXR1cm4gbmFtZXNcblxuQ3JlYXRvci5nZXRGaWVsZHNGb3JHcm91cCA9IChzY2hlbWEsIGdyb3VwTmFtZSkgLT5cbiAgXHRmaWVsZHMgPSBfLm1hcChzY2hlbWEsIChmaWVsZCwgZmllbGROYW1lKSAtPlxuICAgIFx0cmV0dXJuIGZpZWxkLmF1dG9mb3JtIGFuZCBmaWVsZC5hdXRvZm9ybS5ncm91cCA9PSBncm91cE5hbWUgYW5kIGZpZWxkLmF1dG9mb3JtLnR5cGUgIT0gXCJoaWRkZW5cIiBhbmQgZmllbGROYW1lXG4gIFx0KVxuICBcdGZpZWxkcyA9IF8uY29tcGFjdChmaWVsZHMpXG4gIFx0cmV0dXJuIGZpZWxkc1xuXG5DcmVhdG9yLmdldEZpZWxkc1dpdGhvdXRPbWl0ID0gKHNjaGVtYSwga2V5cykgLT5cblx0a2V5cyA9IF8ubWFwKGtleXMsIChrZXkpIC0+XG5cdFx0ZmllbGQgPSBfLnBpY2soc2NoZW1hLCBrZXkpXG5cdFx0aWYgZmllbGRba2V5XS5hdXRvZm9ybT8ub21pdFxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGtleVxuXHQpXG5cdGtleXMgPSBfLmNvbXBhY3Qoa2V5cylcblx0cmV0dXJuIGtleXNcblxuQ3JlYXRvci5nZXRGaWVsZHNJbkZpcnN0TGV2ZWwgPSAoZmlyc3RMZXZlbEtleXMsIGtleXMpIC0+XG5cdGtleXMgPSBfLm1hcChrZXlzLCAoa2V5KSAtPlxuXHRcdGlmIF8uaW5kZXhPZihmaXJzdExldmVsS2V5cywga2V5KSA+IC0xXG5cdFx0XHRyZXR1cm4ga2V5XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlXG5cdClcblx0a2V5cyA9IF8uY29tcGFjdChrZXlzKVxuXHRyZXR1cm4ga2V5c1xuXG5DcmVhdG9yLmdldEZpZWxkc0ZvclJlb3JkZXIgPSAoc2NoZW1hLCBrZXlzLCBpc1NpbmdsZSkgLT5cblx0ZmllbGRzID0gW11cblx0aSA9IDBcblx0d2hpbGUgaSA8IGtleXMubGVuZ3RoXG5cdFx0c2NfMSA9IF8ucGljayhzY2hlbWEsIGtleXNbaV0pXG5cdFx0c2NfMiA9IF8ucGljayhzY2hlbWEsIGtleXNbaSsxXSlcblxuXHRcdGlzX3dpZGVfMSA9IGZhbHNlXG5cdFx0aXNfd2lkZV8yID0gZmFsc2VcblxuXHRcdGlzX3JhbmdlXzEgPSBmYWxzZVxuXHRcdGlzX3JhbmdlXzIgPSBmYWxzZVxuXG5cdFx0Xy5lYWNoIHNjXzEsICh2YWx1ZSkgLT5cblx0XHRcdGlmIHZhbHVlLmF1dG9mb3JtPy5pc193aWRlIHx8IHZhbHVlLmF1dG9mb3JtPy50eXBlID09IFwidGFibGVcIlxuXHRcdFx0XHRpc193aWRlXzEgPSB0cnVlXG5cblx0XHRcdGlmIHZhbHVlLmF1dG9mb3JtPy5pc19yYW5nZVxuXHRcdFx0XHRpc19yYW5nZV8xID0gdHJ1ZVxuXG5cdFx0Xy5lYWNoIHNjXzIsICh2YWx1ZSkgLT5cblx0XHRcdGlmIHZhbHVlLmF1dG9mb3JtPy5pc193aWRlIHx8IHZhbHVlLmF1dG9mb3JtPy50eXBlID09IFwidGFibGVcIlxuXHRcdFx0XHRpc193aWRlXzIgPSB0cnVlXG5cblx0XHRcdGlmIHZhbHVlLmF1dG9mb3JtPy5pc19yYW5nZVxuXHRcdFx0XHRpc19yYW5nZV8yID0gdHJ1ZVxuXG5cdFx0aWYgaXNTaW5nbGVcblx0XHRcdGZpZWxkcy5wdXNoIGtleXMuc2xpY2UoaSwgaSsxKVxuXHRcdFx0aSArPSAxXG5cdFx0ZWxzZVxuXHRcdFx0aWYgIWlzX3JhbmdlXzEgJiYgaXNfcmFuZ2VfMlxuXHRcdFx0XHRjaGlsZEtleXMgPSBrZXlzLnNsaWNlKGksIGkrMSlcblx0XHRcdFx0Y2hpbGRLZXlzLnB1c2ggdW5kZWZpbmVkXG5cdFx0XHRcdGZpZWxkcy5wdXNoIGNoaWxkS2V5c1xuXHRcdFx0XHRpICs9IDFcblx0XHRcdGVsc2UgaWYgaXNfd2lkZV8xXG5cdFx0XHRcdGZpZWxkcy5wdXNoIGtleXMuc2xpY2UoaSwgaSsxKVxuXHRcdFx0XHRpICs9IDFcblx0XHRcdGVsc2UgaWYgIWlzX3dpZGVfMSBhbmQgaXNfd2lkZV8yXG5cdFx0XHRcdGNoaWxkS2V5cyA9IGtleXMuc2xpY2UoaSwgaSsxKVxuXHRcdFx0XHRjaGlsZEtleXMucHVzaCB1bmRlZmluZWRcblx0XHRcdFx0ZmllbGRzLnB1c2ggY2hpbGRLZXlzXG5cdFx0XHRcdGkgKz0gMVxuXHRcdFx0ZWxzZSBpZiAhaXNfd2lkZV8xIGFuZCAhaXNfd2lkZV8yXG5cdFx0XHRcdGNoaWxkS2V5cyA9IGtleXMuc2xpY2UoaSwgaSsxKVxuXHRcdFx0XHRpZiBrZXlzW2krMV1cblx0XHRcdFx0XHRjaGlsZEtleXMucHVzaCBrZXlzW2krMV1cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGNoaWxkS2V5cy5wdXNoIHVuZGVmaW5lZFxuXHRcdFx0XHRmaWVsZHMucHVzaCBjaGlsZEtleXNcblx0XHRcdFx0aSArPSAyXG5cblx0cmV0dXJuIGZpZWxkc1xuXG4jIEVORFxuXG5pZiBNZXRlb3IuaXNTZXJ2ZXJcblx0Q3JlYXRvci5nZXRBbGxSZWxhdGVkT2JqZWN0cyA9IChvYmplY3RfbmFtZSktPlxuXHRcdHJlbGF0ZWRfb2JqZWN0X25hbWVzID0gW11cblx0XHRfLmVhY2ggQ3JlYXRvci5PYmplY3RzLCAocmVsYXRlZF9vYmplY3QsIHJlbGF0ZWRfb2JqZWN0X25hbWUpLT5cblx0XHRcdF8uZWFjaCByZWxhdGVkX29iamVjdC5maWVsZHMsIChyZWxhdGVkX2ZpZWxkLCByZWxhdGVkX2ZpZWxkX25hbWUpLT5cblx0XHRcdFx0aWYgcmVsYXRlZF9maWVsZC50eXBlID09IFwibWFzdGVyX2RldGFpbFwiIGFuZCByZWxhdGVkX2ZpZWxkLnJlZmVyZW5jZV90byBhbmQgcmVsYXRlZF9maWVsZC5yZWZlcmVuY2VfdG8gPT0gb2JqZWN0X25hbWVcblx0XHRcdFx0XHRyZWxhdGVkX29iamVjdF9uYW1lcy5wdXNoIHJlbGF0ZWRfb2JqZWN0X25hbWVcblxuXHRcdGlmIENyZWF0b3IuZ2V0T2JqZWN0KG9iamVjdF9uYW1lKS5lbmFibGVfZmlsZXNcblx0XHRcdHJlbGF0ZWRfb2JqZWN0X25hbWVzLnB1c2ggXCJjbXNfZmlsZXNcIlxuXG5cdFx0cmV0dXJuIHJlbGF0ZWRfb2JqZWN0X25hbWVzIiwiQ3JlYXRvci5nZXRTY2hlbWEgPSBmdW5jdGlvbihvYmplY3RfbmFtZSkge1xuICB2YXIgcmVmO1xuICByZXR1cm4gKHJlZiA9IENyZWF0b3IuZ2V0T2JqZWN0KG9iamVjdF9uYW1lKSkgIT0gbnVsbCA/IHJlZi5zY2hlbWEgOiB2b2lkIDA7XG59O1xuXG5DcmVhdG9yLmdldE9iamVjdEZpcnN0TGlzdFZpZXdVcmwgPSBmdW5jdGlvbihvYmplY3RfbmFtZSkge1xuICB2YXIgYXBwX2lkLCBsaXN0X3ZpZXcsIGxpc3Rfdmlld19pZDtcbiAgbGlzdF92aWV3ID0gQ3JlYXRvci5nZXRPYmplY3RGaXJzdExpc3RWaWV3KG9iamVjdF9uYW1lKTtcbiAgbGlzdF92aWV3X2lkID0gbGlzdF92aWV3ICE9IG51bGwgPyBsaXN0X3ZpZXcuX2lkIDogdm9pZCAwO1xuICBhcHBfaWQgPSBTZXNzaW9uLmdldChcImFwcF9pZFwiKTtcbiAgaWYgKG9iamVjdF9uYW1lID09PSBcIm1lZXRpbmdcIikge1xuICAgIHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9jYWxlbmRhci9cIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIENyZWF0b3IuZ2V0UmVsYXRpdmVVcmwoXCIvYXBwL1wiICsgYXBwX2lkICsgXCIvXCIgKyBvYmplY3RfbmFtZSArIFwiL2dyaWQvXCIgKyBsaXN0X3ZpZXdfaWQpO1xuICB9XG59O1xuXG5DcmVhdG9yLmdldE9iamVjdFVybCA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCByZWNvcmRfaWQsIGFwcF9pZCkge1xuICB2YXIgbGlzdF92aWV3LCBsaXN0X3ZpZXdfaWQ7XG4gIGlmICghYXBwX2lkKSB7XG4gICAgYXBwX2lkID0gU2Vzc2lvbi5nZXQoXCJhcHBfaWRcIik7XG4gIH1cbiAgaWYgKCFvYmplY3RfbmFtZSkge1xuICAgIG9iamVjdF9uYW1lID0gU2Vzc2lvbi5nZXQoXCJvYmplY3RfbmFtZVwiKTtcbiAgfVxuICBsaXN0X3ZpZXcgPSBDcmVhdG9yLmdldExpc3RWaWV3KG9iamVjdF9uYW1lLCBudWxsKTtcbiAgbGlzdF92aWV3X2lkID0gbGlzdF92aWV3ICE9IG51bGwgPyBsaXN0X3ZpZXcuX2lkIDogdm9pZCAwO1xuICBpZiAocmVjb3JkX2lkKSB7XG4gICAgcmV0dXJuIENyZWF0b3IuZ2V0UmVsYXRpdmVVcmwoXCIvYXBwL1wiICsgYXBwX2lkICsgXCIvXCIgKyBvYmplY3RfbmFtZSArIFwiL3ZpZXcvXCIgKyByZWNvcmRfaWQpO1xuICB9IGVsc2Uge1xuICAgIGlmIChvYmplY3RfbmFtZSA9PT0gXCJtZWV0aW5nXCIpIHtcbiAgICAgIHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9jYWxlbmRhci9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9ncmlkL1wiICsgbGlzdF92aWV3X2lkKTtcbiAgICB9XG4gIH1cbn07XG5cbkNyZWF0b3IuZ2V0T2JqZWN0Um91dGVyVXJsID0gZnVuY3Rpb24ob2JqZWN0X25hbWUsIHJlY29yZF9pZCwgYXBwX2lkKSB7XG4gIHZhciBsaXN0X3ZpZXcsIGxpc3Rfdmlld19pZDtcbiAgaWYgKCFhcHBfaWQpIHtcbiAgICBhcHBfaWQgPSBTZXNzaW9uLmdldChcImFwcF9pZFwiKTtcbiAgfVxuICBpZiAoIW9iamVjdF9uYW1lKSB7XG4gICAgb2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpO1xuICB9XG4gIGxpc3RfdmlldyA9IENyZWF0b3IuZ2V0TGlzdFZpZXcob2JqZWN0X25hbWUsIG51bGwpO1xuICBsaXN0X3ZpZXdfaWQgPSBsaXN0X3ZpZXcgIT0gbnVsbCA/IGxpc3Rfdmlldy5faWQgOiB2b2lkIDA7XG4gIGlmIChyZWNvcmRfaWQpIHtcbiAgICByZXR1cm4gXCIvYXBwL1wiICsgYXBwX2lkICsgXCIvXCIgKyBvYmplY3RfbmFtZSArIFwiL3ZpZXcvXCIgKyByZWNvcmRfaWQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG9iamVjdF9uYW1lID09PSBcIm1lZXRpbmdcIikge1xuICAgICAgcmV0dXJuIFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9jYWxlbmRhci9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9ncmlkL1wiICsgbGlzdF92aWV3X2lkO1xuICAgIH1cbiAgfVxufTtcblxuQ3JlYXRvci5nZXRMaXN0Vmlld1VybCA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBhcHBfaWQsIGxpc3Rfdmlld19pZCkge1xuICB2YXIgdXJsO1xuICB1cmwgPSBDcmVhdG9yLmdldExpc3RWaWV3UmVsYXRpdmVVcmwob2JqZWN0X25hbWUsIGFwcF9pZCwgbGlzdF92aWV3X2lkKTtcbiAgcmV0dXJuIENyZWF0b3IuZ2V0UmVsYXRpdmVVcmwodXJsKTtcbn07XG5cbkNyZWF0b3IuZ2V0TGlzdFZpZXdSZWxhdGl2ZVVybCA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBhcHBfaWQsIGxpc3Rfdmlld19pZCkge1xuICBpZiAobGlzdF92aWV3X2lkID09PSBcImNhbGVuZGFyXCIpIHtcbiAgICByZXR1cm4gXCIvYXBwL1wiICsgYXBwX2lkICsgXCIvXCIgKyBvYmplY3RfbmFtZSArIFwiL2NhbGVuZGFyL1wiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvZ3JpZC9cIiArIGxpc3Rfdmlld19pZDtcbiAgfVxufTtcblxuQ3JlYXRvci5nZXRTd2l0Y2hMaXN0VXJsID0gZnVuY3Rpb24ob2JqZWN0X25hbWUsIGFwcF9pZCwgbGlzdF92aWV3X2lkKSB7XG4gIGlmIChsaXN0X3ZpZXdfaWQpIHtcbiAgICByZXR1cm4gQ3JlYXRvci5nZXRSZWxhdGl2ZVVybChcIi9hcHAvXCIgKyBhcHBfaWQgKyBcIi9cIiArIG9iamVjdF9uYW1lICsgXCIvXCIgKyBsaXN0X3ZpZXdfaWQgKyBcIi9saXN0XCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9saXN0L3N3aXRjaFwiKTtcbiAgfVxufTtcblxuQ3JlYXRvci5nZXRSZWxhdGVkT2JqZWN0VXJsID0gZnVuY3Rpb24ob2JqZWN0X25hbWUsIGFwcF9pZCwgcmVjb3JkX2lkLCByZWxhdGVkX29iamVjdF9uYW1lKSB7XG4gIHJldHVybiBDcmVhdG9yLmdldFJlbGF0aXZlVXJsKFwiL2FwcC9cIiArIGFwcF9pZCArIFwiL1wiICsgb2JqZWN0X25hbWUgKyBcIi9cIiArIHJlY29yZF9pZCArIFwiL1wiICsgcmVsYXRlZF9vYmplY3RfbmFtZSArIFwiL2dyaWRcIik7XG59O1xuXG5DcmVhdG9yLmdldE9iamVjdExvb2t1cEZpZWxkT3B0aW9ucyA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBpc19kZWVwLCBpc19za2lwX2hpZGUpIHtcbiAgdmFyIF9vYmplY3QsIF9vcHRpb25zLCBmaWVsZHMsIGljb247XG4gIF9vcHRpb25zID0gW107XG4gIGlmICghb2JqZWN0X25hbWUpIHtcbiAgICByZXR1cm4gX29wdGlvbnM7XG4gIH1cbiAgX29iamVjdCA9IENyZWF0b3IuZ2V0T2JqZWN0KG9iamVjdF9uYW1lKTtcbiAgZmllbGRzID0gX29iamVjdCAhPSBudWxsID8gX29iamVjdC5maWVsZHMgOiB2b2lkIDA7XG4gIGljb24gPSBfb2JqZWN0ICE9IG51bGwgPyBfb2JqZWN0Lmljb24gOiB2b2lkIDA7XG4gIF8uZm9yRWFjaChmaWVsZHMsIGZ1bmN0aW9uKGYsIGspIHtcbiAgICBpZiAoaXNfc2tpcF9oaWRlICYmIGYuaGlkZGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmLnR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgIHJldHVybiBfb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgbGFiZWw6IFwiXCIgKyAoZi5sYWJlbCB8fCBrKSxcbiAgICAgICAgdmFsdWU6IFwiXCIgKyBrLFxuICAgICAgICBpY29uOiBpY29uXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIF9vcHRpb25zLnB1c2goe1xuICAgICAgICBsYWJlbDogZi5sYWJlbCB8fCBrLFxuICAgICAgICB2YWx1ZTogayxcbiAgICAgICAgaWNvbjogaWNvblxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgaWYgKGlzX2RlZXApIHtcbiAgICBfLmZvckVhY2goZmllbGRzLCBmdW5jdGlvbihmLCBrKSB7XG4gICAgICB2YXIgcl9vYmplY3Q7XG4gICAgICBpZiAoaXNfc2tpcF9oaWRlICYmIGYuaGlkZGVuKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICgoZi50eXBlID09PSBcImxvb2t1cFwiIHx8IGYudHlwZSA9PT0gXCJtYXN0ZXJfZGV0YWlsXCIpICYmIGYucmVmZXJlbmNlX3RvKSB7XG4gICAgICAgIHJfb2JqZWN0ID0gQ3JlYXRvci5nZXRPYmplY3QoZi5yZWZlcmVuY2VfdG8pO1xuICAgICAgICBpZiAocl9vYmplY3QpIHtcbiAgICAgICAgICByZXR1cm4gXy5mb3JFYWNoKHJfb2JqZWN0LmZpZWxkcywgZnVuY3Rpb24oZjIsIGsyKSB7XG4gICAgICAgICAgICByZXR1cm4gX29wdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgIGxhYmVsOiAoZi5sYWJlbCB8fCBrKSArIFwiPT5cIiArIChmMi5sYWJlbCB8fCBrMiksXG4gICAgICAgICAgICAgIHZhbHVlOiBrICsgXCIuXCIgKyBrMixcbiAgICAgICAgICAgICAgaWNvbjogcl9vYmplY3QgIT0gbnVsbCA/IHJfb2JqZWN0Lmljb24gOiB2b2lkIDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIF9vcHRpb25zO1xufTtcblxuQ3JlYXRvci5nZXRPYmplY3RGaWx0ZXJGaWVsZE9wdGlvbnMgPSBmdW5jdGlvbihvYmplY3RfbmFtZSkge1xuICB2YXIgX29iamVjdCwgX29wdGlvbnMsIGZpZWxkcywgaWNvbiwgcGVybWlzc2lvbl9maWVsZHM7XG4gIF9vcHRpb25zID0gW107XG4gIGlmICghb2JqZWN0X25hbWUpIHtcbiAgICByZXR1cm4gX29wdGlvbnM7XG4gIH1cbiAgX29iamVjdCA9IENyZWF0b3IuZ2V0T2JqZWN0KG9iamVjdF9uYW1lKTtcbiAgZmllbGRzID0gX29iamVjdCAhPSBudWxsID8gX29iamVjdC5maWVsZHMgOiB2b2lkIDA7XG4gIHBlcm1pc3Npb25fZmllbGRzID0gQ3JlYXRvci5nZXRGaWVsZHMob2JqZWN0X25hbWUpO1xuICBpY29uID0gX29iamVjdCAhPSBudWxsID8gX29iamVjdC5pY29uIDogdm9pZCAwO1xuICBfLmZvckVhY2goZmllbGRzLCBmdW5jdGlvbihmLCBrKSB7XG4gICAgaWYgKCFfLmluY2x1ZGUoW1wiZ3JpZFwiLCBcIm9iamVjdFwiLCBcIltPYmplY3RdXCIsIFwiW29iamVjdF1cIiwgXCJPYmplY3RcIl0sIGYudHlwZSkgJiYgIWYuaGlkZGVuKSB7XG4gICAgICBpZiAoIS9cXHcrXFwuLy50ZXN0KGspICYmIF8uaW5kZXhPZihwZXJtaXNzaW9uX2ZpZWxkcywgaykgPiAtMSkge1xuICAgICAgICByZXR1cm4gX29wdGlvbnMucHVzaCh7XG4gICAgICAgICAgbGFiZWw6IGYubGFiZWwgfHwgayxcbiAgICAgICAgICB2YWx1ZTogayxcbiAgICAgICAgICBpY29uOiBpY29uXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBfb3B0aW9ucztcbn07XG5cblxuLypcbmZpbHRlcnM6IOimgei9rOaNoueahGZpbHRlcnNcbmZpZWxkczog5a+56LGh5a2X5q61XG5maWx0ZXJfZmllbGRzOiDpu5jorqTov4fmu6TlrZfmrrXvvIzmlK/mjIHlrZfnrKbkuLLmlbDnu4Tlkozlr7nosaHmlbDnu4TkuKTnp43moLzlvI/vvIzlpoI6WydmaWxlZF9uYW1lMScsJ2ZpbGVkX25hbWUyJ10sW3tmaWVsZDonZmlsZWRfbmFtZTEnLHJlcXVpcmVkOnRydWV9XVxu5aSE55CG6YC76L6ROiDmiopmaWx0ZXJz5Lit5a2Y5Zyo5LqOZmlsdGVyX2ZpZWxkc+eahOi/h+a7pOadoeS7tuWinuWKoOavj+mhueeahGlzX2RlZmF1bHTjgIFpc19yZXF1aXJlZOWxnuaAp++8jOS4jeWtmOWcqOS6jmZpbHRlcl9maWVsZHPnmoTov4fmu6TmnaHku7blr7nlupTnmoTnp7vpmaTmr4/pobnnmoTnm7jlhbPlsZ7mgKdcbui/lOWbnue7k+aenDog5aSE55CG5ZCO55qEZmlsdGVyc1xuICovXG5cbkNyZWF0b3IuZ2V0RmlsdGVyc1dpdGhGaWx0ZXJGaWVsZHMgPSBmdW5jdGlvbihmaWx0ZXJzLCBmaWVsZHMsIGZpbHRlcl9maWVsZHMpIHtcbiAgaWYgKCFmaWx0ZXJzKSB7XG4gICAgZmlsdGVycyA9IFtdO1xuICB9XG4gIGlmICghZmlsdGVyX2ZpZWxkcykge1xuICAgIGZpbHRlcl9maWVsZHMgPSBbXTtcbiAgfVxuICBpZiAoZmlsdGVyX2ZpZWxkcyAhPSBudWxsID8gZmlsdGVyX2ZpZWxkcy5sZW5ndGggOiB2b2lkIDApIHtcbiAgICBmaWx0ZXJfZmllbGRzLmZvckVhY2goZnVuY3Rpb24obikge1xuICAgICAgaWYgKF8uaXNTdHJpbmcobikpIHtcbiAgICAgICAgbiA9IHtcbiAgICAgICAgICBmaWVsZDogbixcbiAgICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmIChmaWVsZHNbbi5maWVsZF0gJiYgIV8uZmluZFdoZXJlKGZpbHRlcnMsIHtcbiAgICAgICAgZmllbGQ6IG4uZmllbGRcbiAgICAgIH0pKSB7XG4gICAgICAgIHJldHVybiBmaWx0ZXJzLnB1c2goe1xuICAgICAgICAgIGZpZWxkOiBuLmZpZWxkLFxuICAgICAgICAgIGlzX2RlZmF1bHQ6IHRydWUsXG4gICAgICAgICAgaXNfcmVxdWlyZWQ6IG4ucmVxdWlyZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZmlsdGVycy5mb3JFYWNoKGZ1bmN0aW9uKGZpbHRlckl0ZW0pIHtcbiAgICB2YXIgbWF0Y2hGaWVsZDtcbiAgICBtYXRjaEZpZWxkID0gZmlsdGVyX2ZpZWxkcy5maW5kKGZ1bmN0aW9uKG4pIHtcbiAgICAgIHJldHVybiBuID09PSBmaWx0ZXJJdGVtLmZpZWxkIHx8IG4uZmllbGQgPT09IGZpbHRlckl0ZW0uZmllbGQ7XG4gICAgfSk7XG4gICAgaWYgKF8uaXNTdHJpbmcobWF0Y2hGaWVsZCkpIHtcbiAgICAgIG1hdGNoRmllbGQgPSB7XG4gICAgICAgIGZpZWxkOiBtYXRjaEZpZWxkLFxuICAgICAgICByZXF1aXJlZDogZmFsc2VcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChtYXRjaEZpZWxkKSB7XG4gICAgICBmaWx0ZXJJdGVtLmlzX2RlZmF1bHQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZpbHRlckl0ZW0uaXNfcmVxdWlyZWQgPSBtYXRjaEZpZWxkLnJlcXVpcmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgZmlsdGVySXRlbS5pc19kZWZhdWx0O1xuICAgICAgcmV0dXJuIGRlbGV0ZSBmaWx0ZXJJdGVtLmlzX3JlcXVpcmVkO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJzO1xufTtcblxuQ3JlYXRvci5nZXRPYmplY3RSZWNvcmQgPSBmdW5jdGlvbihvYmplY3RfbmFtZSwgcmVjb3JkX2lkLCBzZWxlY3RfZmllbGRzLCBleHBhbmQpIHtcbiAgdmFyIGNvbGxlY3Rpb24sIHJlY29yZCwgcmVmLCByZWYxLCByZWYyO1xuICBpZiAoIW9iamVjdF9uYW1lKSB7XG4gICAgb2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpO1xuICB9XG4gIGlmICghcmVjb3JkX2lkKSB7XG4gICAgcmVjb3JkX2lkID0gU2Vzc2lvbi5nZXQoXCJyZWNvcmRfaWRcIik7XG4gIH1cbiAgaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICAgIGlmIChvYmplY3RfbmFtZSA9PT0gU2Vzc2lvbi5nZXQoXCJvYmplY3RfbmFtZVwiKSAmJiByZWNvcmRfaWQgPT09IFNlc3Npb24uZ2V0KFwicmVjb3JkX2lkXCIpKSB7XG4gICAgICBpZiAoKHJlZiA9IFRlbXBsYXRlLmluc3RhbmNlKCkpICE9IG51bGwgPyByZWYucmVjb3JkIDogdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiAocmVmMSA9IFRlbXBsYXRlLmluc3RhbmNlKCkpICE9IG51bGwgPyAocmVmMiA9IHJlZjEucmVjb3JkKSAhPSBudWxsID8gcmVmMi5nZXQoKSA6IHZvaWQgMCA6IHZvaWQgMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIENyZWF0b3Iub2RhdGEuZ2V0KG9iamVjdF9uYW1lLCByZWNvcmRfaWQsIHNlbGVjdF9maWVsZHMsIGV4cGFuZCk7XG4gICAgfVxuICB9XG4gIGNvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqZWN0X25hbWUpO1xuICBpZiAoY29sbGVjdGlvbikge1xuICAgIHJlY29yZCA9IGNvbGxlY3Rpb24uZmluZE9uZShyZWNvcmRfaWQpO1xuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cbn07XG5cbkNyZWF0b3IuZ2V0QXBwID0gZnVuY3Rpb24oYXBwX2lkKSB7XG4gIHZhciBhcHAsIHJlZiwgcmVmMTtcbiAgaWYgKCFhcHBfaWQpIHtcbiAgICBhcHBfaWQgPSBTZXNzaW9uLmdldChcImFwcF9pZFwiKTtcbiAgfVxuICBhcHAgPSBDcmVhdG9yLkFwcHNbYXBwX2lkXTtcbiAgaWYgKChyZWYgPSBDcmVhdG9yLmRlcHMpICE9IG51bGwpIHtcbiAgICBpZiAoKHJlZjEgPSByZWYuYXBwKSAhPSBudWxsKSB7XG4gICAgICByZWYxLmRlcGVuZCgpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXBwO1xufTtcblxuQ3JlYXRvci5nZXRBcHBPYmplY3ROYW1lcyA9IGZ1bmN0aW9uKGFwcF9pZCkge1xuICB2YXIgYXBwLCBvYmplY3RzO1xuICBhcHAgPSBDcmVhdG9yLmdldEFwcChhcHBfaWQpO1xuICBvYmplY3RzID0gW107XG4gIGlmIChhcHApIHtcbiAgICBfLmVhY2goYXBwLm9iamVjdHMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgIHZhciBvYmo7XG4gICAgICBvYmogPSBDcmVhdG9yLmdldE9iamVjdCh2KTtcbiAgICAgIGlmICgob2JqICE9IG51bGwgPyBvYmoucGVybWlzc2lvbnMuZ2V0KCkuYWxsb3dSZWFkIDogdm9pZCAwKSAmJiAhb2JqLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gb2JqZWN0cy5wdXNoKHYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiBvYmplY3RzO1xufTtcblxuQ3JlYXRvci5nZXRWaXNpYmxlQXBwcyA9IGZ1bmN0aW9uKGluY2x1ZGVBZG1pbikge1xuICB2YXIgYXBwcztcbiAgYXBwcyA9IFtdO1xuICBfLmVhY2goQ3JlYXRvci5BcHBzLCBmdW5jdGlvbih2LCBrKSB7XG4gICAgaWYgKCh2LnZpc2libGUgIT09IGZhbHNlICYmIHYuX2lkICE9PSBcImFkbWluXCIpIHx8IChpbmNsdWRlQWRtaW4gJiYgdi5faWQgPT09IFwiYWRtaW5cIikpIHtcbiAgICAgIHJldHVybiBhcHBzLnB1c2godik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGFwcHM7XG59O1xuXG5DcmVhdG9yLmdldFZpc2libGVBcHBzT2JqZWN0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXBwcywgb2JqZWN0cywgdmlzaWJsZU9iamVjdE5hbWVzO1xuICBhcHBzID0gQ3JlYXRvci5nZXRWaXNpYmxlQXBwcygpO1xuICB2aXNpYmxlT2JqZWN0TmFtZXMgPSBfLmZsYXR0ZW4oXy5wbHVjayhhcHBzLCAnb2JqZWN0cycpKTtcbiAgb2JqZWN0cyA9IF8uZmlsdGVyKENyZWF0b3IuT2JqZWN0cywgZnVuY3Rpb24ob2JqKSB7XG4gICAgaWYgKHZpc2libGVPYmplY3ROYW1lcy5pbmRleE9mKG9iai5uYW1lKSA8IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICFvYmouaGlkZGVuO1xuICAgIH1cbiAgfSk7XG4gIG9iamVjdHMgPSBvYmplY3RzLnNvcnQoQ3JlYXRvci5zb3J0aW5nTWV0aG9kLmJpbmQoe1xuICAgIGtleTogXCJsYWJlbFwiXG4gIH0pKTtcbiAgb2JqZWN0cyA9IF8ucGx1Y2sob2JqZWN0cywgJ25hbWUnKTtcbiAgcmV0dXJuIF8udW5pcShvYmplY3RzKTtcbn07XG5cbkNyZWF0b3IuZ2V0QXBwc09iamVjdHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG9iamVjdHMsIHRlbXBPYmplY3RzO1xuICBvYmplY3RzID0gW107XG4gIHRlbXBPYmplY3RzID0gW107XG4gIF8uZm9yRWFjaChDcmVhdG9yLkFwcHMsIGZ1bmN0aW9uKGFwcCkge1xuICAgIHRlbXBPYmplY3RzID0gXy5maWx0ZXIoYXBwLm9iamVjdHMsIGZ1bmN0aW9uKG9iaikge1xuICAgICAgcmV0dXJuICFvYmouaGlkZGVuO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmplY3RzID0gb2JqZWN0cy5jb25jYXQodGVtcE9iamVjdHMpO1xuICB9KTtcbiAgcmV0dXJuIF8udW5pcShvYmplY3RzKTtcbn07XG5cbkNyZWF0b3IudmFsaWRhdGVGaWx0ZXJzID0gZnVuY3Rpb24oZmlsdGVycywgbG9naWMpIHtcbiAgdmFyIGUsIGVycm9yTXNnLCBmaWx0ZXJfaXRlbXMsIGZpbHRlcl9sZW5ndGgsIGZsYWcsIGluZGV4LCB3b3JkO1xuICBmaWx0ZXJfaXRlbXMgPSBfLm1hcChmaWx0ZXJzLCBmdW5jdGlvbihvYmopIHtcbiAgICBpZiAoXy5pc0VtcHR5KG9iaikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG4gIH0pO1xuICBmaWx0ZXJfaXRlbXMgPSBfLmNvbXBhY3QoZmlsdGVyX2l0ZW1zKTtcbiAgZXJyb3JNc2cgPSBcIlwiO1xuICBmaWx0ZXJfbGVuZ3RoID0gZmlsdGVyX2l0ZW1zLmxlbmd0aDtcbiAgaWYgKGxvZ2ljKSB7XG4gICAgbG9naWMgPSBsb2dpYy5yZXBsYWNlKC9cXG4vZywgXCJcIikucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XG4gICAgaWYgKC9bLl9cXC0hK10rL2lnLnRlc3QobG9naWMpKSB7XG4gICAgICBlcnJvck1zZyA9IFwi5ZCr5pyJ54m55q6K5a2X56ym44CCXCI7XG4gICAgfVxuICAgIGlmICghZXJyb3JNc2cpIHtcbiAgICAgIGluZGV4ID0gbG9naWMubWF0Y2goL1xcZCsvaWcpO1xuICAgICAgaWYgKCFpbmRleCkge1xuICAgICAgICBlcnJvck1zZyA9IFwi5pyJ5Lqb562b6YCJ5p2h5Lu26L+b6KGM5LqG5a6a5LmJ77yM5L2G5pyq5Zyo6auY57qn562b6YCJ5p2h5Lu25Lit6KKr5byV55So44CCXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRleC5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICBpZiAoaSA8IDEgfHwgaSA+IGZpbHRlcl9sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvck1zZyA9IFwi5oKo55qE562b6YCJ5p2h5Lu25byV55So5LqG5pyq5a6a5LmJ55qE562b6YCJ5Zmo77yaXCIgKyBpICsgXCLjgIJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBmbGFnID0gMTtcbiAgICAgICAgd2hpbGUgKGZsYWcgPD0gZmlsdGVyX2xlbmd0aCkge1xuICAgICAgICAgIGlmICghaW5kZXguaW5jbHVkZXMoXCJcIiArIGZsYWcpKSB7XG4gICAgICAgICAgICBlcnJvck1zZyA9IFwi5pyJ5Lqb562b6YCJ5p2h5Lu26L+b6KGM5LqG5a6a5LmJ77yM5L2G5pyq5Zyo6auY57qn562b6YCJ5p2h5Lu25Lit6KKr5byV55So44CCXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZsYWcrKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWVycm9yTXNnKSB7XG4gICAgICB3b3JkID0gbG9naWMubWF0Y2goL1thLXpBLVpdKy9pZyk7XG4gICAgICBpZiAod29yZCkge1xuICAgICAgICB3b3JkLmZvckVhY2goZnVuY3Rpb24odykge1xuICAgICAgICAgIGlmICghL14oYW5kfG9yKSQvaWcudGVzdCh3KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yTXNnID0gXCLmo4Dmn6XmgqjnmoTpq5jnuqfnrZvpgInmnaHku7bkuK3nmoTmi7zlhpnjgIJcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWVycm9yTXNnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBDcmVhdG9yW1wiZXZhbFwiXShsb2dpYy5yZXBsYWNlKC9hbmQvaWcsIFwiJiZcIikucmVwbGFjZSgvb3IvaWcsIFwifHxcIikpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICBlcnJvck1zZyA9IFwi5oKo55qE562b6YCJ5Zmo5Lit5ZCr5pyJ54m55q6K5a2X56ymXCI7XG4gICAgICB9XG4gICAgICBpZiAoLyhBTkQpW14oKV0rKE9SKS9pZy50ZXN0KGxvZ2ljKSB8fCAvKE9SKVteKCldKyhBTkQpL2lnLnRlc3QobG9naWMpKSB7XG4gICAgICAgIGVycm9yTXNnID0gXCLmgqjnmoTnrZvpgInlmajlv4XpobvlnKjov57nu63mgKfnmoQgQU5EIOWSjCBPUiDooajovr7lvI/liY3lkI7kvb/nlKjmi6zlj7fjgIJcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGVycm9yTXNnKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvclwiLCBlcnJvck1zZyk7XG4gICAgaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICAgICAgdG9hc3RyLmVycm9yKGVycm9yTXNnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qXG5vcHRpb25z5Y+C5pWw77yaXG5cdGV4dGVuZC0tIOaYr+WQpumcgOimgeaKiuW9k+WJjeeUqOaIt+WfuuacrOS/oeaBr+WKoOWFpeWFrOW8j++8jOWNs+iuqeWFrOW8j+aUr+aMgUNyZWF0b3IuVVNFUl9DT05URVhU5Lit55qE5YC877yM6buY6K6k5Li6dHJ1ZVxuXHR1c2VySWQtLSDlvZPliY3nmbvlvZXnlKjmiLdcblx0c3BhY2VJZC0tIOW9k+WJjeaJgOWcqOW3peS9nOWMulxuZXh0ZW5k5Li6dHJ1ZeaXtu+8jOWQjuerr+mcgOimgemineWkluS8oOWFpXVzZXJJZOWPinNwYWNlSWTnlKjkuo7mipPlj5ZDcmVhdG9yLlVTRVJfQ09OVEVYVOWvueW6lOeahOWAvFxuICovXG5cbkNyZWF0b3IuZm9ybWF0RmlsdGVyc1RvTW9uZ28gPSBmdW5jdGlvbihmaWx0ZXJzLCBvcHRpb25zKSB7XG4gIHZhciBzZWxlY3RvcjtcbiAgaWYgKCEoZmlsdGVycyAhPSBudWxsID8gZmlsdGVycy5sZW5ndGggOiB2b2lkIDApKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghKGZpbHRlcnNbMF0gaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICBmaWx0ZXJzID0gXy5tYXAoZmlsdGVycywgZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gW29iai5maWVsZCwgb2JqLm9wZXJhdGlvbiwgb2JqLnZhbHVlXTtcbiAgICB9KTtcbiAgfVxuICBzZWxlY3RvciA9IFtdO1xuICBfLmVhY2goZmlsdGVycywgZnVuY3Rpb24oZmlsdGVyKSB7XG4gICAgdmFyIGZpZWxkLCBvcHRpb24sIHJlZywgc3ViX3NlbGVjdG9yLCB2YWx1ZTtcbiAgICBmaWVsZCA9IGZpbHRlclswXTtcbiAgICBvcHRpb24gPSBmaWx0ZXJbMV07XG4gICAgaWYgKE1ldGVvci5pc0NsaWVudCkge1xuICAgICAgdmFsdWUgPSBDcmVhdG9yLmV2YWx1YXRlRm9ybXVsYShmaWx0ZXJbMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IENyZWF0b3IuZXZhbHVhdGVGb3JtdWxhKGZpbHRlclsyXSwgbnVsbCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHN1Yl9zZWxlY3RvciA9IHt9O1xuICAgIHN1Yl9zZWxlY3RvcltmaWVsZF0gPSB7fTtcbiAgICBpZiAob3B0aW9uID09PSBcIj1cIikge1xuICAgICAgc3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRlcVwiXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uID09PSBcIjw+XCIpIHtcbiAgICAgIHN1Yl9zZWxlY3RvcltmaWVsZF1bXCIkbmVcIl0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gXCI+XCIpIHtcbiAgICAgIHN1Yl9zZWxlY3RvcltmaWVsZF1bXCIkZ3RcIl0gPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gXCI+PVwiKSB7XG4gICAgICBzdWJfc2VsZWN0b3JbZmllbGRdW1wiJGd0ZVwiXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uID09PSBcIjxcIikge1xuICAgICAgc3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRsdFwiXSA9IHZhbHVlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9uID09PSBcIjw9XCIpIHtcbiAgICAgIHN1Yl9zZWxlY3RvcltmaWVsZF1bXCIkbHRlXCJdID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChvcHRpb24gPT09IFwic3RhcnRzd2l0aFwiKSB7XG4gICAgICByZWcgPSBuZXcgUmVnRXhwKFwiXlwiICsgdmFsdWUsIFwiaVwiKTtcbiAgICAgIHN1Yl9zZWxlY3RvcltmaWVsZF1bXCIkcmVnZXhcIl0gPSByZWc7XG4gICAgfSBlbHNlIGlmIChvcHRpb24gPT09IFwiY29udGFpbnNcIikge1xuICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgXCJpXCIpO1xuICAgICAgc3ViX3NlbGVjdG9yW2ZpZWxkXVtcIiRyZWdleFwiXSA9IHJlZztcbiAgICB9IGVsc2UgaWYgKG9wdGlvbiA9PT0gXCJub3Rjb250YWluc1wiKSB7XG4gICAgICByZWcgPSBuZXcgUmVnRXhwKFwiXigoPyFcIiArIHZhbHVlICsgXCIpLikqJFwiLCBcImlcIik7XG4gICAgICBzdWJfc2VsZWN0b3JbZmllbGRdW1wiJHJlZ2V4XCJdID0gcmVnO1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0b3IucHVzaChzdWJfc2VsZWN0b3IpO1xuICB9KTtcbiAgcmV0dXJuIHNlbGVjdG9yO1xufTtcblxuQ3JlYXRvci5pc0JldHdlZW5GaWx0ZXJPcGVyYXRpb24gPSBmdW5jdGlvbihvcGVyYXRpb24pIHtcbiAgdmFyIHJlZjtcbiAgcmV0dXJuIG9wZXJhdGlvbiA9PT0gXCJiZXR3ZWVuXCIgfHwgISEoKHJlZiA9IENyZWF0b3IuZ2V0QmV0d2VlblRpbWVCdWlsdGluVmFsdWVzKHRydWUpKSAhPSBudWxsID8gcmVmW29wZXJhdGlvbl0gOiB2b2lkIDApO1xufTtcblxuXG4vKlxub3B0aW9uc+WPguaVsO+8mlxuXHRleHRlbmQtLSDmmK/lkKbpnIDopoHmiorlvZPliY3nlKjmiLfln7rmnKzkv6Hmga/liqDlhaXlhazlvI/vvIzljbPorqnlhazlvI/mlK/mjIFDcmVhdG9yLlVTRVJfQ09OVEVYVOS4reeahOWAvO+8jOm7mOiupOS4unRydWVcblx0dXNlcklkLS0g5b2T5YmN55m75b2V55So5oi3XG5cdHNwYWNlSWQtLSDlvZPliY3miYDlnKjlt6XkvZzljLpcblx0ZXh0ZW5k5Li6dHJ1ZeaXtu+8jOWQjuerr+mcgOimgemineWkluS8oOWFpXVzZXJJZOWPinNwYWNlSWTnlKjkuo7mipPlj5ZDcmVhdG9yLlVTRVJfQ09OVEVYVOWvueW6lOeahOWAvFxuICovXG5cbkNyZWF0b3IuZm9ybWF0RmlsdGVyc1RvRGV2ID0gZnVuY3Rpb24oZmlsdGVycywgb2JqZWN0X25hbWUsIG9wdGlvbnMpIHtcbiAgdmFyIGxvZ2ljVGVtcEZpbHRlcnMsIHNlbGVjdG9yLCBzdGVlZG9zRmlsdGVycztcbiAgc3RlZWRvc0ZpbHRlcnMgPSByZXF1aXJlKFwiQHN0ZWVkb3MvZmlsdGVyc1wiKTtcbiAgaWYgKCFmaWx0ZXJzLmxlbmd0aCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAob3B0aW9ucyAhPSBudWxsID8gb3B0aW9ucy5pc19sb2dpY19vciA6IHZvaWQgMCkge1xuICAgIGxvZ2ljVGVtcEZpbHRlcnMgPSBbXTtcbiAgICBmaWx0ZXJzLmZvckVhY2goZnVuY3Rpb24obikge1xuICAgICAgbG9naWNUZW1wRmlsdGVycy5wdXNoKG4pO1xuICAgICAgcmV0dXJuIGxvZ2ljVGVtcEZpbHRlcnMucHVzaChcIm9yXCIpO1xuICAgIH0pO1xuICAgIGxvZ2ljVGVtcEZpbHRlcnMucG9wKCk7XG4gICAgZmlsdGVycyA9IGxvZ2ljVGVtcEZpbHRlcnM7XG4gIH1cbiAgc2VsZWN0b3IgPSBzdGVlZG9zRmlsdGVycy5mb3JtYXRGaWx0ZXJzVG9EZXYoZmlsdGVycywgQ3JlYXRvci5VU0VSX0NPTlRFWFQpO1xuICByZXR1cm4gc2VsZWN0b3I7XG59O1xuXG5cbi8qXG5vcHRpb25z5Y+C5pWw77yaXG5cdGV4dGVuZC0tIOaYr+WQpumcgOimgeaKiuW9k+WJjeeUqOaIt+WfuuacrOS/oeaBr+WKoOWFpeWFrOW8j++8jOWNs+iuqeWFrOW8j+aUr+aMgUNyZWF0b3IuVVNFUl9DT05URVhU5Lit55qE5YC877yM6buY6K6k5Li6dHJ1ZVxuXHR1c2VySWQtLSDlvZPliY3nmbvlvZXnlKjmiLdcblx0c3BhY2VJZC0tIOW9k+WJjeaJgOWcqOW3peS9nOWMulxuZXh0ZW5k5Li6dHJ1ZeaXtu+8jOWQjuerr+mcgOimgemineWkluS8oOWFpXVzZXJJZOWPinNwYWNlSWTnlKjkuo7mipPlj5ZDcmVhdG9yLlVTRVJfQ09OVEVYVOWvueW6lOeahOWAvFxuICovXG5cbkNyZWF0b3IuZm9ybWF0TG9naWNGaWx0ZXJzVG9EZXYgPSBmdW5jdGlvbihmaWx0ZXJzLCBmaWx0ZXJfbG9naWMsIG9wdGlvbnMpIHtcbiAgdmFyIGZvcm1hdF9sb2dpYztcbiAgZm9ybWF0X2xvZ2ljID0gZmlsdGVyX2xvZ2ljLnJlcGxhY2UoL1xcKFxccysvaWcsIFwiKFwiKS5yZXBsYWNlKC9cXHMrXFwpL2lnLCBcIilcIikucmVwbGFjZSgvXFwoL2csIFwiW1wiKS5yZXBsYWNlKC9cXCkvZywgXCJdXCIpLnJlcGxhY2UoL1xccysvZywgXCIsXCIpLnJlcGxhY2UoLyhhbmR8b3IpL2lnLCBcIickMSdcIik7XG4gIGZvcm1hdF9sb2dpYyA9IGZvcm1hdF9sb2dpYy5yZXBsYWNlKC8oXFxkKSsvaWcsIGZ1bmN0aW9uKHgpIHtcbiAgICB2YXIgX2YsIGZpZWxkLCBvcHRpb24sIHN1Yl9zZWxlY3RvciwgdmFsdWU7XG4gICAgX2YgPSBmaWx0ZXJzW3ggLSAxXTtcbiAgICBmaWVsZCA9IF9mLmZpZWxkO1xuICAgIG9wdGlvbiA9IF9mLm9wZXJhdGlvbjtcbiAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgICB2YWx1ZSA9IENyZWF0b3IuZXZhbHVhdGVGb3JtdWxhKF9mLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBDcmVhdG9yLmV2YWx1YXRlRm9ybXVsYShfZi52YWx1ZSwgbnVsbCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIHN1Yl9zZWxlY3RvciA9IFtdO1xuICAgIGlmIChfLmlzQXJyYXkodmFsdWUpID09PSB0cnVlKSB7XG4gICAgICBpZiAob3B0aW9uID09PSBcIj1cIikge1xuICAgICAgICBfLmVhY2godmFsdWUsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICByZXR1cm4gc3ViX3NlbGVjdG9yLnB1c2goW2ZpZWxkLCBvcHRpb24sIHZdLCBcIm9yXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAob3B0aW9uID09PSBcIjw+XCIpIHtcbiAgICAgICAgXy5lYWNoKHZhbHVlLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIHN1Yl9zZWxlY3Rvci5wdXNoKFtmaWVsZCwgb3B0aW9uLCB2XSwgXCJhbmRcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgXy5lYWNoKHZhbHVlLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIHN1Yl9zZWxlY3Rvci5wdXNoKFtmaWVsZCwgb3B0aW9uLCB2XSwgXCJvclwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoc3ViX3NlbGVjdG9yW3N1Yl9zZWxlY3Rvci5sZW5ndGggLSAxXSA9PT0gXCJhbmRcIiB8fCBzdWJfc2VsZWN0b3Jbc3ViX3NlbGVjdG9yLmxlbmd0aCAtIDFdID09PSBcIm9yXCIpIHtcbiAgICAgICAgc3ViX3NlbGVjdG9yLnBvcCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzdWJfc2VsZWN0b3IgPSBbZmllbGQsIG9wdGlvbiwgdmFsdWVdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcInN1Yl9zZWxlY3RvclwiLCBzdWJfc2VsZWN0b3IpO1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdWJfc2VsZWN0b3IpO1xuICB9KTtcbiAgZm9ybWF0X2xvZ2ljID0gXCJbXCIgKyBmb3JtYXRfbG9naWMgKyBcIl1cIjtcbiAgcmV0dXJuIENyZWF0b3JbXCJldmFsXCJdKGZvcm1hdF9sb2dpYyk7XG59O1xuXG5DcmVhdG9yLmdldFJlbGF0ZWRPYmplY3RzID0gZnVuY3Rpb24ob2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCkge1xuICB2YXIgX29iamVjdCwgcGVybWlzc2lvbnMsIHJlbGF0ZWRfb2JqZWN0X25hbWVzLCByZWxhdGVkX29iamVjdHMsIHVucmVsYXRlZF9vYmplY3RzO1xuICBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgaWYgKCFvYmplY3RfbmFtZSkge1xuICAgICAgb2JqZWN0X25hbWUgPSBTZXNzaW9uLmdldChcIm9iamVjdF9uYW1lXCIpO1xuICAgIH1cbiAgICBpZiAoIXNwYWNlSWQpIHtcbiAgICAgIHNwYWNlSWQgPSBTZXNzaW9uLmdldChcInNwYWNlSWRcIik7XG4gICAgfVxuICAgIGlmICghdXNlcklkKSB7XG4gICAgICB1c2VySWQgPSBNZXRlb3IudXNlcklkKCk7XG4gICAgfVxuICB9XG4gIHJlbGF0ZWRfb2JqZWN0X25hbWVzID0gW107XG4gIF9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSk7XG4gIGlmICghX29iamVjdCkge1xuICAgIHJldHVybiByZWxhdGVkX29iamVjdF9uYW1lcztcbiAgfVxuICByZWxhdGVkX29iamVjdHMgPSBDcmVhdG9yLmdldE9iamVjdFJlbGF0ZWRzKF9vYmplY3QuX2NvbGxlY3Rpb25fbmFtZSk7XG4gIHJlbGF0ZWRfb2JqZWN0X25hbWVzID0gXy5wbHVjayhyZWxhdGVkX29iamVjdHMsIFwib2JqZWN0X25hbWVcIik7XG4gIGlmICgocmVsYXRlZF9vYmplY3RfbmFtZXMgIT0gbnVsbCA/IHJlbGF0ZWRfb2JqZWN0X25hbWVzLmxlbmd0aCA6IHZvaWQgMCkgPT09IDApIHtcbiAgICByZXR1cm4gcmVsYXRlZF9vYmplY3RfbmFtZXM7XG4gIH1cbiAgcGVybWlzc2lvbnMgPSBDcmVhdG9yLmdldFBlcm1pc3Npb25zKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpO1xuICB1bnJlbGF0ZWRfb2JqZWN0cyA9IHBlcm1pc3Npb25zLnVucmVsYXRlZF9vYmplY3RzO1xuICByZWxhdGVkX29iamVjdF9uYW1lcyA9IF8uZGlmZmVyZW5jZShyZWxhdGVkX29iamVjdF9uYW1lcywgdW5yZWxhdGVkX29iamVjdHMpO1xuICByZXR1cm4gXy5maWx0ZXIocmVsYXRlZF9vYmplY3RzLCBmdW5jdGlvbihyZWxhdGVkX29iamVjdCkge1xuICAgIHZhciBhbGxvd1JlYWQsIGlzQWN0aXZlLCByZWYsIHJlbGF0ZWRfb2JqZWN0X25hbWU7XG4gICAgcmVsYXRlZF9vYmplY3RfbmFtZSA9IHJlbGF0ZWRfb2JqZWN0Lm9iamVjdF9uYW1lO1xuICAgIGlzQWN0aXZlID0gcmVsYXRlZF9vYmplY3RfbmFtZXMuaW5kZXhPZihyZWxhdGVkX29iamVjdF9uYW1lKSA+IC0xO1xuICAgIGFsbG93UmVhZCA9IChyZWYgPSBDcmVhdG9yLmdldFBlcm1pc3Npb25zKHJlbGF0ZWRfb2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCkpICE9IG51bGwgPyByZWYuYWxsb3dSZWFkIDogdm9pZCAwO1xuICAgIHJldHVybiBpc0FjdGl2ZSAmJiBhbGxvd1JlYWQ7XG4gIH0pO1xufTtcblxuQ3JlYXRvci5nZXRSZWxhdGVkT2JqZWN0TmFtZXMgPSBmdW5jdGlvbihvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKSB7XG4gIHZhciByZWxhdGVkX29iamVjdHM7XG4gIHJlbGF0ZWRfb2JqZWN0cyA9IENyZWF0b3IuZ2V0UmVsYXRlZE9iamVjdHMob2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCk7XG4gIHJldHVybiBfLnBsdWNrKHJlbGF0ZWRfb2JqZWN0cywgXCJvYmplY3RfbmFtZVwiKTtcbn07XG5cbkNyZWF0b3IuZ2V0QWN0aW9ucyA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpIHtcbiAgdmFyIGFjdGlvbnMsIGRpc2FibGVkX2FjdGlvbnMsIG9iaiwgcGVybWlzc2lvbnM7XG4gIGlmIChNZXRlb3IuaXNDbGllbnQpIHtcbiAgICBpZiAoIW9iamVjdF9uYW1lKSB7XG4gICAgICBvYmplY3RfbmFtZSA9IFNlc3Npb24uZ2V0KFwib2JqZWN0X25hbWVcIik7XG4gICAgfVxuICAgIGlmICghc3BhY2VJZCkge1xuICAgICAgc3BhY2VJZCA9IFNlc3Npb24uZ2V0KFwic3BhY2VJZFwiKTtcbiAgICB9XG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHVzZXJJZCA9IE1ldGVvci51c2VySWQoKTtcbiAgICB9XG4gIH1cbiAgb2JqID0gQ3JlYXRvci5nZXRPYmplY3Qob2JqZWN0X25hbWUpO1xuICBpZiAoIW9iaikge1xuICAgIHJldHVybjtcbiAgfVxuICBwZXJtaXNzaW9ucyA9IENyZWF0b3IuZ2V0UGVybWlzc2lvbnMob2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCk7XG4gIGRpc2FibGVkX2FjdGlvbnMgPSBwZXJtaXNzaW9ucy5kaXNhYmxlZF9hY3Rpb25zO1xuICBhY3Rpb25zID0gXy5zb3J0QnkoXy52YWx1ZXMob2JqLmFjdGlvbnMpLCAnc29ydCcpO1xuICBfLmVhY2goYWN0aW9ucywgZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKFN0ZWVkb3MuaXNNb2JpbGUoKSAmJiBhY3Rpb24ub24gPT09IFwicmVjb3JkXCIgJiYgYWN0aW9uLm5hbWUgIT09ICdzdGFuZGFyZF9lZGl0Jykge1xuICAgICAgcmV0dXJuIGFjdGlvbi5vbiA9ICdyZWNvcmRfbW9yZSc7XG4gICAgfVxuICB9KTtcbiAgYWN0aW9ucyA9IF8uZmlsdGVyKGFjdGlvbnMsIGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHJldHVybiBfLmluZGV4T2YoZGlzYWJsZWRfYWN0aW9ucywgYWN0aW9uLm5hbWUpIDwgMDtcbiAgfSk7XG4gIHJldHVybiBhY3Rpb25zO1xufTtcblxuL+i/lOWbnuW9k+WJjeeUqOaIt+acieadg+mZkOiuv+mXrueahOaJgOaciWxpc3Rfdmlld++8jOWMheaLrOWIhuS6q+eahO+8jOeUqOaIt+iHquWumuS5iemdnuWIhuS6q+eahO+8iOmZpOmdnm93bmVy5Y+Y5LqG77yJ77yM5Lul5Y+K6buY6K6k55qE5YW25LuW6KeG5Zu+5rOo5oSPQ3JlYXRvci5nZXRQZXJtaXNzaW9uc+WHveaVsOS4reaYr+S4jeS8muacieeUqOaIt+iHquWumuS5iemdnuWIhuS6q+eahOinhuWbvueahO+8jOaJgOS7pUNyZWF0b3IuZ2V0UGVybWlzc2lvbnPlh73mlbDkuK3mi7/liLDnmoTnu5PmnpzkuI3lhajvvIzlubbkuI3mmK/lvZPliY3nlKjmiLfog73nnIvliLDmiYDmnInop4blm74vO1xuXG5DcmVhdG9yLmdldExpc3RWaWV3cyA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBzcGFjZUlkLCB1c2VySWQpIHtcbiAgdmFyIGRpc2FibGVkX2xpc3Rfdmlld3MsIGlzTW9iaWxlLCBsaXN0X3ZpZXdzLCBvYmplY3Q7XG4gIGlmIChNZXRlb3IuaXNDbGllbnQpIHtcbiAgICBpZiAoIW9iamVjdF9uYW1lKSB7XG4gICAgICBvYmplY3RfbmFtZSA9IFNlc3Npb24uZ2V0KFwib2JqZWN0X25hbWVcIik7XG4gICAgfVxuICAgIGlmICghc3BhY2VJZCkge1xuICAgICAgc3BhY2VJZCA9IFNlc3Npb24uZ2V0KFwic3BhY2VJZFwiKTtcbiAgICB9XG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHVzZXJJZCA9IE1ldGVvci51c2VySWQoKTtcbiAgICB9XG4gIH1cbiAgb2JqZWN0ID0gQ3JlYXRvci5nZXRPYmplY3Qob2JqZWN0X25hbWUpO1xuICBpZiAoIW9iamVjdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBkaXNhYmxlZF9saXN0X3ZpZXdzID0gQ3JlYXRvci5nZXRQZXJtaXNzaW9ucyhvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKS5kaXNhYmxlZF9saXN0X3ZpZXdzIHx8IFtdO1xuICBsaXN0X3ZpZXdzID0gW107XG4gIGlzTW9iaWxlID0gU3RlZWRvcy5pc01vYmlsZSgpO1xuICBfLmVhY2gob2JqZWN0Lmxpc3Rfdmlld3MsIGZ1bmN0aW9uKGl0ZW0sIGl0ZW1fbmFtZSkge1xuICAgIGlmIChpc01vYmlsZSAmJiBpdGVtLnR5cGUgPT09IFwiY2FsZW5kYXJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXRlbV9uYW1lICE9PSBcImRlZmF1bHRcIikge1xuICAgICAgaWYgKF8uaW5kZXhPZihkaXNhYmxlZF9saXN0X3ZpZXdzLCBpdGVtX25hbWUpIDwgMCB8fCBpdGVtLm93bmVyID09PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Rfdmlld3MucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbGlzdF92aWV3cztcbn07XG5cbkNyZWF0b3IuZ2V0RmllbGRzID0gZnVuY3Rpb24ob2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCkge1xuICB2YXIgZmllbGRzTmFtZSwgdW5yZWFkYWJsZV9maWVsZHM7XG4gIGlmIChNZXRlb3IuaXNDbGllbnQpIHtcbiAgICBpZiAoIW9iamVjdF9uYW1lKSB7XG4gICAgICBvYmplY3RfbmFtZSA9IFNlc3Npb24uZ2V0KFwib2JqZWN0X25hbWVcIik7XG4gICAgfVxuICAgIGlmICghc3BhY2VJZCkge1xuICAgICAgc3BhY2VJZCA9IFNlc3Npb24uZ2V0KFwic3BhY2VJZFwiKTtcbiAgICB9XG4gICAgaWYgKCF1c2VySWQpIHtcbiAgICAgIHVzZXJJZCA9IE1ldGVvci51c2VySWQoKTtcbiAgICB9XG4gIH1cbiAgZmllbGRzTmFtZSA9IENyZWF0b3IuZ2V0T2JqZWN0RmllbGRzTmFtZShvYmplY3RfbmFtZSk7XG4gIHVucmVhZGFibGVfZmllbGRzID0gQ3JlYXRvci5nZXRQZXJtaXNzaW9ucyhvYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKS51bnJlYWRhYmxlX2ZpZWxkcztcbiAgcmV0dXJuIF8uZGlmZmVyZW5jZShmaWVsZHNOYW1lLCB1bnJlYWRhYmxlX2ZpZWxkcyk7XG59O1xuXG5DcmVhdG9yLmlzbG9hZGluZyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIUNyZWF0b3IuYm9vdHN0cmFwTG9hZGVkLmdldCgpO1xufTtcblxuQ3JlYXRvci5jb252ZXJ0U3BlY2lhbENoYXJhY3RlciA9IGZ1bmN0aW9uKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbXFxeXFwkXFwoXFwpXFwqXFwrXFw/XFwuXFxcXFxcfFxcW1xcXVxce1xcfV0pL2csIFwiXFxcXCQxXCIpO1xufTtcblxuQ3JlYXRvci5nZXREaXNhYmxlZEZpZWxkcyA9IGZ1bmN0aW9uKHNjaGVtYSkge1xuICB2YXIgZmllbGRzO1xuICBmaWVsZHMgPSBfLm1hcChzY2hlbWEsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gZmllbGQuYXV0b2Zvcm0gJiYgZmllbGQuYXV0b2Zvcm0uZGlzYWJsZWQgJiYgIWZpZWxkLmF1dG9mb3JtLm9taXQgJiYgZmllbGROYW1lO1xuICB9KTtcbiAgZmllbGRzID0gXy5jb21wYWN0KGZpZWxkcyk7XG4gIHJldHVybiBmaWVsZHM7XG59O1xuXG5DcmVhdG9yLmdldEhpZGRlbkZpZWxkcyA9IGZ1bmN0aW9uKHNjaGVtYSkge1xuICB2YXIgZmllbGRzO1xuICBmaWVsZHMgPSBfLm1hcChzY2hlbWEsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gZmllbGQuYXV0b2Zvcm0gJiYgZmllbGQuYXV0b2Zvcm0udHlwZSA9PT0gXCJoaWRkZW5cIiAmJiAhZmllbGQuYXV0b2Zvcm0ub21pdCAmJiBmaWVsZE5hbWU7XG4gIH0pO1xuICBmaWVsZHMgPSBfLmNvbXBhY3QoZmllbGRzKTtcbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbkNyZWF0b3IuZ2V0RmllbGRzV2l0aE5vR3JvdXAgPSBmdW5jdGlvbihzY2hlbWEpIHtcbiAgdmFyIGZpZWxkcztcbiAgZmllbGRzID0gXy5tYXAoc2NoZW1hLCBmdW5jdGlvbihmaWVsZCwgZmllbGROYW1lKSB7XG4gICAgcmV0dXJuICghZmllbGQuYXV0b2Zvcm0gfHwgIWZpZWxkLmF1dG9mb3JtLmdyb3VwIHx8IGZpZWxkLmF1dG9mb3JtLmdyb3VwID09PSBcIi1cIikgJiYgKCFmaWVsZC5hdXRvZm9ybSB8fCBmaWVsZC5hdXRvZm9ybS50eXBlICE9PSBcImhpZGRlblwiKSAmJiBmaWVsZE5hbWU7XG4gIH0pO1xuICBmaWVsZHMgPSBfLmNvbXBhY3QoZmllbGRzKTtcbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbkNyZWF0b3IuZ2V0U29ydGVkRmllbGRHcm91cE5hbWVzID0gZnVuY3Rpb24oc2NoZW1hKSB7XG4gIHZhciBuYW1lcztcbiAgbmFtZXMgPSBfLm1hcChzY2hlbWEsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgcmV0dXJuIGZpZWxkLmF1dG9mb3JtICYmIGZpZWxkLmF1dG9mb3JtLmdyb3VwICE9PSBcIi1cIiAmJiBmaWVsZC5hdXRvZm9ybS5ncm91cDtcbiAgfSk7XG4gIG5hbWVzID0gXy5jb21wYWN0KG5hbWVzKTtcbiAgbmFtZXMgPSBfLnVuaXF1ZShuYW1lcyk7XG4gIHJldHVybiBuYW1lcztcbn07XG5cbkNyZWF0b3IuZ2V0RmllbGRzRm9yR3JvdXAgPSBmdW5jdGlvbihzY2hlbWEsIGdyb3VwTmFtZSkge1xuICB2YXIgZmllbGRzO1xuICBmaWVsZHMgPSBfLm1hcChzY2hlbWEsIGZ1bmN0aW9uKGZpZWxkLCBmaWVsZE5hbWUpIHtcbiAgICByZXR1cm4gZmllbGQuYXV0b2Zvcm0gJiYgZmllbGQuYXV0b2Zvcm0uZ3JvdXAgPT09IGdyb3VwTmFtZSAmJiBmaWVsZC5hdXRvZm9ybS50eXBlICE9PSBcImhpZGRlblwiICYmIGZpZWxkTmFtZTtcbiAgfSk7XG4gIGZpZWxkcyA9IF8uY29tcGFjdChmaWVsZHMpO1xuICByZXR1cm4gZmllbGRzO1xufTtcblxuQ3JlYXRvci5nZXRGaWVsZHNXaXRob3V0T21pdCA9IGZ1bmN0aW9uKHNjaGVtYSwga2V5cykge1xuICBrZXlzID0gXy5tYXAoa2V5cywgZnVuY3Rpb24oa2V5KSB7XG4gICAgdmFyIGZpZWxkLCByZWY7XG4gICAgZmllbGQgPSBfLnBpY2soc2NoZW1hLCBrZXkpO1xuICAgIGlmICgocmVmID0gZmllbGRba2V5XS5hdXRvZm9ybSkgIT0gbnVsbCA/IHJlZi5vbWl0IDogdm9pZCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9KTtcbiAga2V5cyA9IF8uY29tcGFjdChrZXlzKTtcbiAgcmV0dXJuIGtleXM7XG59O1xuXG5DcmVhdG9yLmdldEZpZWxkc0luRmlyc3RMZXZlbCA9IGZ1bmN0aW9uKGZpcnN0TGV2ZWxLZXlzLCBrZXlzKSB7XG4gIGtleXMgPSBfLm1hcChrZXlzLCBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoXy5pbmRleE9mKGZpcnN0TGV2ZWxLZXlzLCBrZXkpID4gLTEpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0pO1xuICBrZXlzID0gXy5jb21wYWN0KGtleXMpO1xuICByZXR1cm4ga2V5cztcbn07XG5cbkNyZWF0b3IuZ2V0RmllbGRzRm9yUmVvcmRlciA9IGZ1bmN0aW9uKHNjaGVtYSwga2V5cywgaXNTaW5nbGUpIHtcbiAgdmFyIGNoaWxkS2V5cywgZmllbGRzLCBpLCBpc19yYW5nZV8xLCBpc19yYW5nZV8yLCBpc193aWRlXzEsIGlzX3dpZGVfMiwgc2NfMSwgc2NfMjtcbiAgZmllbGRzID0gW107XG4gIGkgPSAwO1xuICB3aGlsZSAoaSA8IGtleXMubGVuZ3RoKSB7XG4gICAgc2NfMSA9IF8ucGljayhzY2hlbWEsIGtleXNbaV0pO1xuICAgIHNjXzIgPSBfLnBpY2soc2NoZW1hLCBrZXlzW2kgKyAxXSk7XG4gICAgaXNfd2lkZV8xID0gZmFsc2U7XG4gICAgaXNfd2lkZV8yID0gZmFsc2U7XG4gICAgaXNfcmFuZ2VfMSA9IGZhbHNlO1xuICAgIGlzX3JhbmdlXzIgPSBmYWxzZTtcbiAgICBfLmVhY2goc2NfMSwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciByZWYsIHJlZjEsIHJlZjI7XG4gICAgICBpZiAoKChyZWYgPSB2YWx1ZS5hdXRvZm9ybSkgIT0gbnVsbCA/IHJlZi5pc193aWRlIDogdm9pZCAwKSB8fCAoKHJlZjEgPSB2YWx1ZS5hdXRvZm9ybSkgIT0gbnVsbCA/IHJlZjEudHlwZSA6IHZvaWQgMCkgPT09IFwidGFibGVcIikge1xuICAgICAgICBpc193aWRlXzEgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKChyZWYyID0gdmFsdWUuYXV0b2Zvcm0pICE9IG51bGwgPyByZWYyLmlzX3JhbmdlIDogdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBpc19yYW5nZV8xID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfLmVhY2goc2NfMiwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciByZWYsIHJlZjEsIHJlZjI7XG4gICAgICBpZiAoKChyZWYgPSB2YWx1ZS5hdXRvZm9ybSkgIT0gbnVsbCA/IHJlZi5pc193aWRlIDogdm9pZCAwKSB8fCAoKHJlZjEgPSB2YWx1ZS5hdXRvZm9ybSkgIT0gbnVsbCA/IHJlZjEudHlwZSA6IHZvaWQgMCkgPT09IFwidGFibGVcIikge1xuICAgICAgICBpc193aWRlXzIgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKChyZWYyID0gdmFsdWUuYXV0b2Zvcm0pICE9IG51bGwgPyByZWYyLmlzX3JhbmdlIDogdm9pZCAwKSB7XG4gICAgICAgIHJldHVybiBpc19yYW5nZV8yID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoaXNTaW5nbGUpIHtcbiAgICAgIGZpZWxkcy5wdXNoKGtleXMuc2xpY2UoaSwgaSArIDEpKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFpc19yYW5nZV8xICYmIGlzX3JhbmdlXzIpIHtcbiAgICAgICAgY2hpbGRLZXlzID0ga2V5cy5zbGljZShpLCBpICsgMSk7XG4gICAgICAgIGNoaWxkS2V5cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIGZpZWxkcy5wdXNoKGNoaWxkS2V5cyk7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoaXNfd2lkZV8xKSB7XG4gICAgICAgIGZpZWxkcy5wdXNoKGtleXMuc2xpY2UoaSwgaSArIDEpKTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfSBlbHNlIGlmICghaXNfd2lkZV8xICYmIGlzX3dpZGVfMikge1xuICAgICAgICBjaGlsZEtleXMgPSBrZXlzLnNsaWNlKGksIGkgKyAxKTtcbiAgICAgICAgY2hpbGRLZXlzLnB1c2godm9pZCAwKTtcbiAgICAgICAgZmllbGRzLnB1c2goY2hpbGRLZXlzKTtcbiAgICAgICAgaSArPSAxO1xuICAgICAgfSBlbHNlIGlmICghaXNfd2lkZV8xICYmICFpc193aWRlXzIpIHtcbiAgICAgICAgY2hpbGRLZXlzID0ga2V5cy5zbGljZShpLCBpICsgMSk7XG4gICAgICAgIGlmIChrZXlzW2kgKyAxXSkge1xuICAgICAgICAgIGNoaWxkS2V5cy5wdXNoKGtleXNbaSArIDFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZEtleXMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICAgIGZpZWxkcy5wdXNoKGNoaWxkS2V5cyk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpZWxkcztcbn07XG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgQ3JlYXRvci5nZXRBbGxSZWxhdGVkT2JqZWN0cyA9IGZ1bmN0aW9uKG9iamVjdF9uYW1lKSB7XG4gICAgdmFyIHJlbGF0ZWRfb2JqZWN0X25hbWVzO1xuICAgIHJlbGF0ZWRfb2JqZWN0X25hbWVzID0gW107XG4gICAgXy5lYWNoKENyZWF0b3IuT2JqZWN0cywgZnVuY3Rpb24ocmVsYXRlZF9vYmplY3QsIHJlbGF0ZWRfb2JqZWN0X25hbWUpIHtcbiAgICAgIHJldHVybiBfLmVhY2gocmVsYXRlZF9vYmplY3QuZmllbGRzLCBmdW5jdGlvbihyZWxhdGVkX2ZpZWxkLCByZWxhdGVkX2ZpZWxkX25hbWUpIHtcbiAgICAgICAgaWYgKHJlbGF0ZWRfZmllbGQudHlwZSA9PT0gXCJtYXN0ZXJfZGV0YWlsXCIgJiYgcmVsYXRlZF9maWVsZC5yZWZlcmVuY2VfdG8gJiYgcmVsYXRlZF9maWVsZC5yZWZlcmVuY2VfdG8gPT09IG9iamVjdF9uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHJlbGF0ZWRfb2JqZWN0X25hbWVzLnB1c2gocmVsYXRlZF9vYmplY3RfbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSkuZW5hYmxlX2ZpbGVzKSB7XG4gICAgICByZWxhdGVkX29iamVjdF9uYW1lcy5wdXNoKFwiY21zX2ZpbGVzXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVsYXRlZF9vYmplY3RfbmFtZXM7XG4gIH07XG59XG4iLCJDcmVhdG9yLmFwcHNCeU5hbWUgPSB7fVxuXG4iLCJNZXRlb3IubWV0aG9kc1xuXHRcIm9iamVjdF9yZWNlbnRfdmlld2VkXCI6IChvYmplY3RfbmFtZSwgcmVjb3JkX2lkKS0+XG5cblx0XHRpZiAhdGhpcy51c2VySWRcblx0XHRcdHJldHVybiBudWxsXG5cblx0XHRpZiBvYmplY3RfbmFtZSA9PSBcIm9iamVjdF9yZWNlbnRfdmlld2VkXCJcblx0XHRcdHJldHVyblxuXHRcdGlmIG9iamVjdF9uYW1lIGFuZCByZWNvcmRfaWRcblxuXHRcdFx0ZG9jID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdF9uYW1lKS5maW5kT25lKHtfaWQ6IHJlY29yZF9pZH0sIHtmaWVsZHM6IHtzcGFjZTogMX19KVxuXHRcdFx0c3BhY2VJZCA9IGRvYy5zcGFjZVxuXG5cdFx0XHRjb2xsZWN0aW9uX3JlY2VudF92aWV3ZWQgPSBDcmVhdG9yLmdldENvbGxlY3Rpb24oXCJvYmplY3RfcmVjZW50X3ZpZXdlZFwiKVxuXHRcdFx0ZmlsdGVycyA9IHsgb3duZXI6IHRoaXMudXNlcklkLCBzcGFjZTogc3BhY2VJZCwgJ3JlY29yZC5vJzogb2JqZWN0X25hbWUsICdyZWNvcmQuaWRzJzogW3JlY29yZF9pZF19XG5cdFx0XHRjdXJyZW50X3JlY2VudF92aWV3ZWQgPSBjb2xsZWN0aW9uX3JlY2VudF92aWV3ZWQuZmluZE9uZShmaWx0ZXJzKVxuXHRcdFx0aWYgY3VycmVudF9yZWNlbnRfdmlld2VkXG5cdFx0XHRcdGNvbGxlY3Rpb25fcmVjZW50X3ZpZXdlZC51cGRhdGUoXG5cdFx0XHRcdFx0Y3VycmVudF9yZWNlbnRfdmlld2VkLl9pZCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkaW5jOiB7XG5cdFx0XHRcdFx0XHRcdGNvdW50OiAxXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0JHNldDoge1xuXHRcdFx0XHRcdFx0XHRtb2RpZmllZDogbmV3IERhdGUoKVxuXHRcdFx0XHRcdFx0XHRtb2RpZmllZF9ieTogdGhpcy51c2VySWRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdClcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y29sbGVjdGlvbl9yZWNlbnRfdmlld2VkLmluc2VydChcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRfaWQ6IGNvbGxlY3Rpb25fcmVjZW50X3ZpZXdlZC5fbWFrZU5ld0lEKClcblx0XHRcdFx0XHRcdG93bmVyOiB0aGlzLnVzZXJJZFxuXHRcdFx0XHRcdFx0c3BhY2U6IHNwYWNlSWRcblx0XHRcdFx0XHRcdHJlY29yZDoge286IG9iamVjdF9uYW1lLCBpZHM6IFtyZWNvcmRfaWRdfVxuXHRcdFx0XHRcdFx0Y291bnQ6IDFcblx0XHRcdFx0XHRcdGNyZWF0ZWQ6IG5ldyBEYXRlKClcblx0XHRcdFx0XHRcdGNyZWF0ZWRfYnk6IHRoaXMudXNlcklkXG5cdFx0XHRcdFx0XHRtb2RpZmllZDogbmV3IERhdGUoKVxuXHRcdFx0XHRcdFx0bW9kaWZpZWRfYnk6IHRoaXMudXNlcklkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpXG5cdFx0XHRyZXR1cm4iLCJNZXRlb3IubWV0aG9kcyh7XG4gIFwib2JqZWN0X3JlY2VudF92aWV3ZWRcIjogZnVuY3Rpb24ob2JqZWN0X25hbWUsIHJlY29yZF9pZCkge1xuICAgIHZhciBjb2xsZWN0aW9uX3JlY2VudF92aWV3ZWQsIGN1cnJlbnRfcmVjZW50X3ZpZXdlZCwgZG9jLCBmaWx0ZXJzLCBzcGFjZUlkO1xuICAgIGlmICghdGhpcy51c2VySWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAob2JqZWN0X25hbWUgPT09IFwib2JqZWN0X3JlY2VudF92aWV3ZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob2JqZWN0X25hbWUgJiYgcmVjb3JkX2lkKSB7XG4gICAgICBkb2MgPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqZWN0X25hbWUpLmZpbmRPbmUoe1xuICAgICAgICBfaWQ6IHJlY29yZF9pZFxuICAgICAgfSwge1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBzcGFjZTogMVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHNwYWNlSWQgPSBkb2Muc3BhY2U7XG4gICAgICBjb2xsZWN0aW9uX3JlY2VudF92aWV3ZWQgPSBDcmVhdG9yLmdldENvbGxlY3Rpb24oXCJvYmplY3RfcmVjZW50X3ZpZXdlZFwiKTtcbiAgICAgIGZpbHRlcnMgPSB7XG4gICAgICAgIG93bmVyOiB0aGlzLnVzZXJJZCxcbiAgICAgICAgc3BhY2U6IHNwYWNlSWQsXG4gICAgICAgICdyZWNvcmQubyc6IG9iamVjdF9uYW1lLFxuICAgICAgICAncmVjb3JkLmlkcyc6IFtyZWNvcmRfaWRdXG4gICAgICB9O1xuICAgICAgY3VycmVudF9yZWNlbnRfdmlld2VkID0gY29sbGVjdGlvbl9yZWNlbnRfdmlld2VkLmZpbmRPbmUoZmlsdGVycyk7XG4gICAgICBpZiAoY3VycmVudF9yZWNlbnRfdmlld2VkKSB7XG4gICAgICAgIGNvbGxlY3Rpb25fcmVjZW50X3ZpZXdlZC51cGRhdGUoY3VycmVudF9yZWNlbnRfdmlld2VkLl9pZCwge1xuICAgICAgICAgICRpbmM6IHtcbiAgICAgICAgICAgIGNvdW50OiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICBtb2RpZmllZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIG1vZGlmaWVkX2J5OiB0aGlzLnVzZXJJZFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsZWN0aW9uX3JlY2VudF92aWV3ZWQuaW5zZXJ0KHtcbiAgICAgICAgICBfaWQ6IGNvbGxlY3Rpb25fcmVjZW50X3ZpZXdlZC5fbWFrZU5ld0lEKCksXG4gICAgICAgICAgb3duZXI6IHRoaXMudXNlcklkLFxuICAgICAgICAgIHNwYWNlOiBzcGFjZUlkLFxuICAgICAgICAgIHJlY29yZDoge1xuICAgICAgICAgICAgbzogb2JqZWN0X25hbWUsXG4gICAgICAgICAgICBpZHM6IFtyZWNvcmRfaWRdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb3VudDogMSxcbiAgICAgICAgICBjcmVhdGVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIGNyZWF0ZWRfYnk6IHRoaXMudXNlcklkLFxuICAgICAgICAgIG1vZGlmaWVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgIG1vZGlmaWVkX2J5OiB0aGlzLnVzZXJJZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuIiwicmVjZW50X2FnZ3JlZ2F0ZSA9IChjcmVhdGVkX2J5LCBzcGFjZUlkLCBfcmVjb3JkcywgY2FsbGJhY2spLT5cblx0Q3JlYXRvci5Db2xsZWN0aW9ucy5vYmplY3RfcmVjZW50X3ZpZXdlZC5yYXdDb2xsZWN0aW9uKCkuYWdncmVnYXRlIFtcblx0XHR7JG1hdGNoOiB7Y3JlYXRlZF9ieTogY3JlYXRlZF9ieSwgc3BhY2U6IHNwYWNlSWR9fSxcblx0XHR7JGdyb3VwOiB7X2lkOiB7b2JqZWN0X25hbWU6IFwiJHJlY29yZC5vXCIsIHJlY29yZF9pZDogXCIkcmVjb3JkLmlkc1wiLCBzcGFjZTogXCIkc3BhY2VcIn0sIG1heENyZWF0ZWQ6IHskbWF4OiBcIiRjcmVhdGVkXCJ9fX0sXG5cdFx0eyRzb3J0OiB7bWF4Q3JlYXRlZDogLTF9fSxcblx0XHR7JGxpbWl0OiAxMH1cblx0XSwgKGVyciwgZGF0YSktPlxuXHRcdGlmIGVyclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycilcblxuXHRcdGRhdGEuZm9yRWFjaCAoZG9jKSAtPlxuI1x0XHRcdGNvbnNvbGUubG9nIFwiZG9jXCIsIGRvY1xuXHRcdFx0X3JlY29yZHMucHVzaCBkb2MuX2lkXG5cblx0XHRpZiBjYWxsYmFjayAmJiBfLmlzRnVuY3Rpb24oY2FsbGJhY2spXG5cdFx0XHRjYWxsYmFjaygpXG5cdFx0cmV0dXJuXG5cbmFzeW5jX3JlY2VudF9hZ2dyZWdhdGUgPSBNZXRlb3Iud3JhcEFzeW5jKHJlY2VudF9hZ2dyZWdhdGUpXG5cbnNlYXJjaF9vYmplY3QgPSAoc3BhY2UsIG9iamVjdF9uYW1lLHVzZXJJZCwgc2VhcmNoVGV4dCktPlxuXHRkYXRhID0gbmV3IEFycmF5KClcblxuXHRpZiBzZWFyY2hUZXh0XG5cblx0XHRfb2JqZWN0ID0gQ3JlYXRvci5nZXRPYmplY3Qob2JqZWN0X25hbWUpXG5cblx0XHRfb2JqZWN0X2NvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqZWN0X25hbWUpXG5cdFx0X29iamVjdF9uYW1lX2tleSA9IF9vYmplY3Q/Lk5BTUVfRklFTERfS0VZXG5cdFx0aWYgX29iamVjdCAmJiBfb2JqZWN0X2NvbGxlY3Rpb24gJiYgX29iamVjdF9uYW1lX2tleVxuXHRcdFx0cXVlcnkgPSB7fVxuXHRcdFx0c2VhcmNoX0tleXdvcmRzID0gc2VhcmNoVGV4dC5zcGxpdChcIiBcIilcblx0XHRcdHF1ZXJ5X2FuZCA9IFtdXG5cdFx0XHRzZWFyY2hfS2V5d29yZHMuZm9yRWFjaCAoa2V5d29yZCktPlxuXHRcdFx0XHRzdWJxdWVyeSA9IHt9XG5cdFx0XHRcdHN1YnF1ZXJ5W19vYmplY3RfbmFtZV9rZXldID0geyRyZWdleDoga2V5d29yZC50cmltKCl9XG5cdFx0XHRcdHF1ZXJ5X2FuZC5wdXNoIHN1YnF1ZXJ5XG5cblx0XHRcdHF1ZXJ5LiRhbmQgPSBxdWVyeV9hbmRcblx0XHRcdHF1ZXJ5LnNwYWNlID0geyRpbjogW3NwYWNlXX1cblxuXHRcdFx0ZmllbGRzID0ge19pZDogMX1cblx0XHRcdGZpZWxkc1tfb2JqZWN0X25hbWVfa2V5XSA9IDFcblxuXHRcdFx0cmVjb3JkcyA9IF9vYmplY3RfY29sbGVjdGlvbi5maW5kKHF1ZXJ5LCB7ZmllbGRzOiBmaWVsZHMsIHNvcnQ6IHttb2RpZmllZDogMX0sIGxpbWl0OiA1fSlcblxuXHRcdFx0cmVjb3Jkcy5mb3JFYWNoIChyZWNvcmQpLT5cblx0XHRcdFx0ZGF0YS5wdXNoIHtfaWQ6IHJlY29yZC5faWQsIF9uYW1lOiByZWNvcmRbX29iamVjdF9uYW1lX2tleV0sIF9vYmplY3RfbmFtZTogb2JqZWN0X25hbWV9XG5cdFxuXHRyZXR1cm4gZGF0YVxuXG5NZXRlb3IubWV0aG9kc1xuXHQnb2JqZWN0X3JlY2VudF9yZWNvcmQnOiAoc3BhY2VJZCktPlxuXHRcdGRhdGEgPSBuZXcgQXJyYXkoKVxuXHRcdHJlY29yZHMgPSBuZXcgQXJyYXkoKVxuXG5cdFx0YXN5bmNfcmVjZW50X2FnZ3JlZ2F0ZSh0aGlzLnVzZXJJZCwgc3BhY2VJZCwgcmVjb3JkcylcblxuXHRcdHJlY29yZHMuZm9yRWFjaCAoaXRlbSktPlxuI1x0XHRcdGNvbnNvbGUubG9nIGl0ZW1cblx0XHRcdHJlY29yZF9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChpdGVtLm9iamVjdF9uYW1lLCBpdGVtLnNwYWNlKVxuXG5cdFx0XHRpZiAhcmVjb3JkX29iamVjdFxuXHRcdFx0XHRyZXR1cm5cblxuXHRcdFx0cmVjb3JkX29iamVjdF9jb2xsZWN0aW9uID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKGl0ZW0ub2JqZWN0X25hbWUsIGl0ZW0uc3BhY2UpXG5cblx0XHRcdGlmIHJlY29yZF9vYmplY3QgJiYgcmVjb3JkX29iamVjdF9jb2xsZWN0aW9uXG5cdFx0XHRcdGZpZWxkcyA9IHtfaWQ6IDF9XG5cblx0XHRcdFx0ZmllbGRzW3JlY29yZF9vYmplY3QuTkFNRV9GSUVMRF9LRVldID0gMVxuXG5cdFx0XHRcdHJlY29yZCA9IHJlY29yZF9vYmplY3RfY29sbGVjdGlvbi5maW5kT25lKGl0ZW0ucmVjb3JkX2lkWzBdLCB7ZmllbGRzOiBmaWVsZHN9KVxuXHRcdFx0XHRpZiByZWNvcmRcblx0XHRcdFx0XHRkYXRhLnB1c2gge19pZDogcmVjb3JkLl9pZCwgX25hbWU6IHJlY29yZFtyZWNvcmRfb2JqZWN0Lk5BTUVfRklFTERfS0VZXSwgX29iamVjdF9uYW1lOiBpdGVtLm9iamVjdF9uYW1lfVxuXG5cdFx0cmV0dXJuIGRhdGFcblxuXHQnb2JqZWN0X3JlY29yZF9zZWFyY2gnOiAob3B0aW9ucyktPlxuXHRcdHNlbGYgPSB0aGlzXG5cblx0XHRkYXRhID0gbmV3IEFycmF5KClcblxuXHRcdHNlYXJjaFRleHQgPSBvcHRpb25zLnNlYXJjaFRleHRcblx0XHRzcGFjZSA9IG9wdGlvbnMuc3BhY2VcblxuXHRcdF8uZm9yRWFjaCBDcmVhdG9yLm9iamVjdHNCeU5hbWUsIChfb2JqZWN0LCBuYW1lKS0+XG5cdFx0XHRpZiBfb2JqZWN0LmVuYWJsZV9zZWFyY2hcblx0XHRcdFx0b2JqZWN0X3JlY29yZCA9IHNlYXJjaF9vYmplY3Qoc3BhY2UsIF9vYmplY3QubmFtZSwgc2VsZi51c2VySWQsIHNlYXJjaFRleHQpXG5cdFx0XHRcdGRhdGEgPSBkYXRhLmNvbmNhdChvYmplY3RfcmVjb3JkKVxuXG5cdFx0cmV0dXJuIGRhdGFcbiIsInZhciBhc3luY19yZWNlbnRfYWdncmVnYXRlLCByZWNlbnRfYWdncmVnYXRlLCBzZWFyY2hfb2JqZWN0O1xuXG5yZWNlbnRfYWdncmVnYXRlID0gZnVuY3Rpb24oY3JlYXRlZF9ieSwgc3BhY2VJZCwgX3JlY29yZHMsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBDcmVhdG9yLkNvbGxlY3Rpb25zLm9iamVjdF9yZWNlbnRfdmlld2VkLnJhd0NvbGxlY3Rpb24oKS5hZ2dyZWdhdGUoW1xuICAgIHtcbiAgICAgICRtYXRjaDoge1xuICAgICAgICBjcmVhdGVkX2J5OiBjcmVhdGVkX2J5LFxuICAgICAgICBzcGFjZTogc3BhY2VJZFxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgICRncm91cDoge1xuICAgICAgICBfaWQ6IHtcbiAgICAgICAgICBvYmplY3RfbmFtZTogXCIkcmVjb3JkLm9cIixcbiAgICAgICAgICByZWNvcmRfaWQ6IFwiJHJlY29yZC5pZHNcIixcbiAgICAgICAgICBzcGFjZTogXCIkc3BhY2VcIlxuICAgICAgICB9LFxuICAgICAgICBtYXhDcmVhdGVkOiB7XG4gICAgICAgICAgJG1heDogXCIkY3JlYXRlZFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICAkc29ydDoge1xuICAgICAgICBtYXhDcmVhdGVkOiAtMVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgICRsaW1pdDogMTBcbiAgICB9XG4gIF0sIGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZG9jKSB7XG4gICAgICByZXR1cm4gX3JlY29yZHMucHVzaChkb2MuX2lkKTtcbiAgICB9KTtcbiAgICBpZiAoY2FsbGJhY2sgJiYgXy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICB9XG4gIH0pO1xufTtcblxuYXN5bmNfcmVjZW50X2FnZ3JlZ2F0ZSA9IE1ldGVvci53cmFwQXN5bmMocmVjZW50X2FnZ3JlZ2F0ZSk7XG5cbnNlYXJjaF9vYmplY3QgPSBmdW5jdGlvbihzcGFjZSwgb2JqZWN0X25hbWUsIHVzZXJJZCwgc2VhcmNoVGV4dCkge1xuICB2YXIgX29iamVjdCwgX29iamVjdF9jb2xsZWN0aW9uLCBfb2JqZWN0X25hbWVfa2V5LCBkYXRhLCBmaWVsZHMsIHF1ZXJ5LCBxdWVyeV9hbmQsIHJlY29yZHMsIHNlYXJjaF9LZXl3b3JkcztcbiAgZGF0YSA9IG5ldyBBcnJheSgpO1xuICBpZiAoc2VhcmNoVGV4dCkge1xuICAgIF9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSk7XG4gICAgX29iamVjdF9jb2xsZWN0aW9uID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdF9uYW1lKTtcbiAgICBfb2JqZWN0X25hbWVfa2V5ID0gX29iamVjdCAhPSBudWxsID8gX29iamVjdC5OQU1FX0ZJRUxEX0tFWSA6IHZvaWQgMDtcbiAgICBpZiAoX29iamVjdCAmJiBfb2JqZWN0X2NvbGxlY3Rpb24gJiYgX29iamVjdF9uYW1lX2tleSkge1xuICAgICAgcXVlcnkgPSB7fTtcbiAgICAgIHNlYXJjaF9LZXl3b3JkcyA9IHNlYXJjaFRleHQuc3BsaXQoXCIgXCIpO1xuICAgICAgcXVlcnlfYW5kID0gW107XG4gICAgICBzZWFyY2hfS2V5d29yZHMuZm9yRWFjaChmdW5jdGlvbihrZXl3b3JkKSB7XG4gICAgICAgIHZhciBzdWJxdWVyeTtcbiAgICAgICAgc3VicXVlcnkgPSB7fTtcbiAgICAgICAgc3VicXVlcnlbX29iamVjdF9uYW1lX2tleV0gPSB7XG4gICAgICAgICAgJHJlZ2V4OiBrZXl3b3JkLnRyaW0oKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcXVlcnlfYW5kLnB1c2goc3VicXVlcnkpO1xuICAgICAgfSk7XG4gICAgICBxdWVyeS4kYW5kID0gcXVlcnlfYW5kO1xuICAgICAgcXVlcnkuc3BhY2UgPSB7XG4gICAgICAgICRpbjogW3NwYWNlXVxuICAgICAgfTtcbiAgICAgIGZpZWxkcyA9IHtcbiAgICAgICAgX2lkOiAxXG4gICAgICB9O1xuICAgICAgZmllbGRzW19vYmplY3RfbmFtZV9rZXldID0gMTtcbiAgICAgIHJlY29yZHMgPSBfb2JqZWN0X2NvbGxlY3Rpb24uZmluZChxdWVyeSwge1xuICAgICAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICAgICAgc29ydDoge1xuICAgICAgICAgIG1vZGlmaWVkOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGxpbWl0OiA1XG4gICAgICB9KTtcbiAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbihyZWNvcmQpIHtcbiAgICAgICAgcmV0dXJuIGRhdGEucHVzaCh7XG4gICAgICAgICAgX2lkOiByZWNvcmQuX2lkLFxuICAgICAgICAgIF9uYW1lOiByZWNvcmRbX29iamVjdF9uYW1lX2tleV0sXG4gICAgICAgICAgX29iamVjdF9uYW1lOiBvYmplY3RfbmFtZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YTtcbn07XG5cbk1ldGVvci5tZXRob2RzKHtcbiAgJ29iamVjdF9yZWNlbnRfcmVjb3JkJzogZnVuY3Rpb24oc3BhY2VJZCkge1xuICAgIHZhciBkYXRhLCByZWNvcmRzO1xuICAgIGRhdGEgPSBuZXcgQXJyYXkoKTtcbiAgICByZWNvcmRzID0gbmV3IEFycmF5KCk7XG4gICAgYXN5bmNfcmVjZW50X2FnZ3JlZ2F0ZSh0aGlzLnVzZXJJZCwgc3BhY2VJZCwgcmVjb3Jkcyk7XG4gICAgcmVjb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIHZhciBmaWVsZHMsIHJlY29yZCwgcmVjb3JkX29iamVjdCwgcmVjb3JkX29iamVjdF9jb2xsZWN0aW9uO1xuICAgICAgcmVjb3JkX29iamVjdCA9IENyZWF0b3IuZ2V0T2JqZWN0KGl0ZW0ub2JqZWN0X25hbWUsIGl0ZW0uc3BhY2UpO1xuICAgICAgaWYgKCFyZWNvcmRfb2JqZWN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlY29yZF9vYmplY3RfY29sbGVjdGlvbiA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihpdGVtLm9iamVjdF9uYW1lLCBpdGVtLnNwYWNlKTtcbiAgICAgIGlmIChyZWNvcmRfb2JqZWN0ICYmIHJlY29yZF9vYmplY3RfY29sbGVjdGlvbikge1xuICAgICAgICBmaWVsZHMgPSB7XG4gICAgICAgICAgX2lkOiAxXG4gICAgICAgIH07XG4gICAgICAgIGZpZWxkc1tyZWNvcmRfb2JqZWN0Lk5BTUVfRklFTERfS0VZXSA9IDE7XG4gICAgICAgIHJlY29yZCA9IHJlY29yZF9vYmplY3RfY29sbGVjdGlvbi5maW5kT25lKGl0ZW0ucmVjb3JkX2lkWzBdLCB7XG4gICAgICAgICAgZmllbGRzOiBmaWVsZHNcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZWNvcmQpIHtcbiAgICAgICAgICByZXR1cm4gZGF0YS5wdXNoKHtcbiAgICAgICAgICAgIF9pZDogcmVjb3JkLl9pZCxcbiAgICAgICAgICAgIF9uYW1lOiByZWNvcmRbcmVjb3JkX29iamVjdC5OQU1FX0ZJRUxEX0tFWV0sXG4gICAgICAgICAgICBfb2JqZWN0X25hbWU6IGl0ZW0ub2JqZWN0X25hbWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9LFxuICAnb2JqZWN0X3JlY29yZF9zZWFyY2gnOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGRhdGEsIHNlYXJjaFRleHQsIHNlbGYsIHNwYWNlO1xuICAgIHNlbGYgPSB0aGlzO1xuICAgIGRhdGEgPSBuZXcgQXJyYXkoKTtcbiAgICBzZWFyY2hUZXh0ID0gb3B0aW9ucy5zZWFyY2hUZXh0O1xuICAgIHNwYWNlID0gb3B0aW9ucy5zcGFjZTtcbiAgICBfLmZvckVhY2goQ3JlYXRvci5vYmplY3RzQnlOYW1lLCBmdW5jdGlvbihfb2JqZWN0LCBuYW1lKSB7XG4gICAgICB2YXIgb2JqZWN0X3JlY29yZDtcbiAgICAgIGlmIChfb2JqZWN0LmVuYWJsZV9zZWFyY2gpIHtcbiAgICAgICAgb2JqZWN0X3JlY29yZCA9IHNlYXJjaF9vYmplY3Qoc3BhY2UsIF9vYmplY3QubmFtZSwgc2VsZi51c2VySWQsIHNlYXJjaFRleHQpO1xuICAgICAgICByZXR1cm4gZGF0YSA9IGRhdGEuY29uY2F0KG9iamVjdF9yZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG59KTtcbiIsIk1ldGVvci5tZXRob2RzXG4gICAgdXBkYXRlX2ZpbHRlcnM6IChsaXN0dmlld19pZCwgZmlsdGVycywgZmlsdGVyX3Njb3BlLCBmaWx0ZXJfbG9naWMpLT5cbiAgICAgICAgQ3JlYXRvci5Db2xsZWN0aW9ucy5vYmplY3RfbGlzdHZpZXdzLmRpcmVjdC51cGRhdGUoe19pZDogbGlzdHZpZXdfaWR9LCB7JHNldDoge2ZpbHRlcnM6IGZpbHRlcnMsIGZpbHRlcl9zY29wZTogZmlsdGVyX3Njb3BlLCBmaWx0ZXJfbG9naWM6IGZpbHRlcl9sb2dpY319KVxuXG4gICAgdXBkYXRlX2NvbHVtbnM6IChsaXN0dmlld19pZCwgY29sdW1ucyktPlxuICAgICAgICBjaGVjayhjb2x1bW5zLCBBcnJheSlcbiAgICAgICAgXG4gICAgICAgIGlmIGNvbHVtbnMubGVuZ3RoIDwgMVxuICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvciA0MDAsIFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBmaWVsZCB0byBkaXNwbGF5XCJcbiAgICAgICAgQ3JlYXRvci5Db2xsZWN0aW9ucy5vYmplY3RfbGlzdHZpZXdzLnVwZGF0ZSh7X2lkOiBsaXN0dmlld19pZH0sIHskc2V0OiB7Y29sdW1uczogY29sdW1uc319KVxuIiwiTWV0ZW9yLm1ldGhvZHMoe1xuICB1cGRhdGVfZmlsdGVyczogZnVuY3Rpb24obGlzdHZpZXdfaWQsIGZpbHRlcnMsIGZpbHRlcl9zY29wZSwgZmlsdGVyX2xvZ2ljKSB7XG4gICAgcmV0dXJuIENyZWF0b3IuQ29sbGVjdGlvbnMub2JqZWN0X2xpc3R2aWV3cy5kaXJlY3QudXBkYXRlKHtcbiAgICAgIF9pZDogbGlzdHZpZXdfaWRcbiAgICB9LCB7XG4gICAgICAkc2V0OiB7XG4gICAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXG4gICAgICAgIGZpbHRlcl9zY29wZTogZmlsdGVyX3Njb3BlLFxuICAgICAgICBmaWx0ZXJfbG9naWM6IGZpbHRlcl9sb2dpY1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB1cGRhdGVfY29sdW1uczogZnVuY3Rpb24obGlzdHZpZXdfaWQsIGNvbHVtbnMpIHtcbiAgICBjaGVjayhjb2x1bW5zLCBBcnJheSk7XG4gICAgaWYgKGNvbHVtbnMubGVuZ3RoIDwgMSkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig0MDAsIFwiU2VsZWN0IGF0IGxlYXN0IG9uZSBmaWVsZCB0byBkaXNwbGF5XCIpO1xuICAgIH1cbiAgICByZXR1cm4gQ3JlYXRvci5Db2xsZWN0aW9ucy5vYmplY3RfbGlzdHZpZXdzLnVwZGF0ZSh7XG4gICAgICBfaWQ6IGxpc3R2aWV3X2lkXG4gICAgfSwge1xuICAgICAgJHNldDoge1xuICAgICAgICBjb2x1bW5zOiBjb2x1bW5zXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiTWV0ZW9yLm1ldGhvZHNcblx0J3JlcG9ydF9kYXRhJzogKG9wdGlvbnMpLT5cblx0XHRjaGVjayhvcHRpb25zLCBPYmplY3QpXG5cdFx0c3BhY2UgPSBvcHRpb25zLnNwYWNlXG5cdFx0ZmllbGRzID0gb3B0aW9ucy5maWVsZHNcblx0XHRvYmplY3RfbmFtZSA9IG9wdGlvbnMub2JqZWN0X25hbWVcblx0XHRmaWx0ZXJfc2NvcGUgPSBvcHRpb25zLmZpbHRlcl9zY29wZVxuXHRcdGZpbHRlcnMgPSBvcHRpb25zLmZpbHRlcnNcblx0XHRmaWx0ZXJGaWVsZHMgPSB7fVxuXHRcdGNvbXBvdW5kRmllbGRzID0gW11cblx0XHRvYmplY3RGaWVsZHMgPSBDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSk/LmZpZWxkc1xuXHRcdF8uZWFjaCBmaWVsZHMsIChpdGVtLCBpbmRleCktPlxuXHRcdFx0c3BsaXRzID0gaXRlbS5zcGxpdChcIi5cIilcblx0XHRcdG5hbWUgPSBzcGxpdHNbMF1cblx0XHRcdG9iamVjdEZpZWxkID0gb2JqZWN0RmllbGRzW25hbWVdXG5cdFx0XHRpZiBzcGxpdHMubGVuZ3RoID4gMSBhbmQgb2JqZWN0RmllbGRcblx0XHRcdFx0Y2hpbGRLZXkgPSBpdGVtLnJlcGxhY2UgbmFtZSArIFwiLlwiLCBcIlwiXG5cdFx0XHRcdGNvbXBvdW5kRmllbGRzLnB1c2goe25hbWU6IG5hbWUsIGNoaWxkS2V5OiBjaGlsZEtleSwgZmllbGQ6IG9iamVjdEZpZWxkfSlcblx0XHRcdGZpbHRlckZpZWxkc1tuYW1lXSA9IDFcblxuXHRcdHNlbGVjdG9yID0ge31cblx0XHR1c2VySWQgPSB0aGlzLnVzZXJJZFxuXHRcdHNlbGVjdG9yLnNwYWNlID0gc3BhY2Vcblx0XHRpZiBmaWx0ZXJfc2NvcGUgPT0gXCJzcGFjZXhcIlxuXHRcdFx0c2VsZWN0b3Iuc3BhY2UgPSBcblx0XHRcdFx0JGluOiBbbnVsbCxzcGFjZV1cblx0XHRlbHNlIGlmIGZpbHRlcl9zY29wZSA9PSBcIm1pbmVcIlxuXHRcdFx0c2VsZWN0b3Iub3duZXIgPSB1c2VySWRcblxuXHRcdGlmIENyZWF0b3IuaXNDb21tb25TcGFjZShzcGFjZSkgJiYgQ3JlYXRvci5pc1NwYWNlQWRtaW4oc3BhY2UsIEB1c2VySWQpXG5cdFx0XHRkZWxldGUgc2VsZWN0b3Iuc3BhY2VcblxuXHRcdGlmIGZpbHRlcnMgYW5kIGZpbHRlcnMubGVuZ3RoID4gMFxuXHRcdFx0c2VsZWN0b3JbXCIkYW5kXCJdID0gZmlsdGVyc1xuXG5cdFx0Y3Vyc29yID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdF9uYW1lKS5maW5kKHNlbGVjdG9yLCB7ZmllbGRzOiBmaWx0ZXJGaWVsZHMsIHNraXA6IDAsIGxpbWl0OiAxMDAwMH0pXG4jXHRcdGlmIGN1cnNvci5jb3VudCgpID4gMTAwMDBcbiNcdFx0XHRyZXR1cm4gW11cblx0XHRyZXN1bHQgPSBjdXJzb3IuZmV0Y2goKVxuXHRcdGlmIGNvbXBvdW5kRmllbGRzLmxlbmd0aFxuXHRcdFx0cmVzdWx0ID0gcmVzdWx0Lm1hcCAoaXRlbSxpbmRleCktPlxuXHRcdFx0XHRfLmVhY2ggY29tcG91bmRGaWVsZHMsIChjb21wb3VuZEZpZWxkSXRlbSwgaW5kZXgpLT5cblx0XHRcdFx0XHRpdGVtS2V5ID0gY29tcG91bmRGaWVsZEl0ZW0ubmFtZSArIFwiKiUqXCIgKyBjb21wb3VuZEZpZWxkSXRlbS5jaGlsZEtleS5yZXBsYWNlKC9cXC4vZywgXCIqJSpcIilcblx0XHRcdFx0XHRpdGVtVmFsdWUgPSBpdGVtW2NvbXBvdW5kRmllbGRJdGVtLm5hbWVdXG5cdFx0XHRcdFx0dHlwZSA9IGNvbXBvdW5kRmllbGRJdGVtLmZpZWxkLnR5cGVcblx0XHRcdFx0XHRpZiBbXCJsb29rdXBcIiwgXCJtYXN0ZXJfZGV0YWlsXCJdLmluZGV4T2YodHlwZSkgPiAtMVxuXHRcdFx0XHRcdFx0cmVmZXJlbmNlX3RvID0gY29tcG91bmRGaWVsZEl0ZW0uZmllbGQucmVmZXJlbmNlX3RvXG5cdFx0XHRcdFx0XHRjb21wb3VuZEZpbHRlckZpZWxkcyA9IHt9XG5cdFx0XHRcdFx0XHRjb21wb3VuZEZpbHRlckZpZWxkc1tjb21wb3VuZEZpZWxkSXRlbS5jaGlsZEtleV0gPSAxXG5cdFx0XHRcdFx0XHRyZWZlcmVuY2VJdGVtID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKHJlZmVyZW5jZV90bykuZmluZE9uZSB7X2lkOiBpdGVtVmFsdWV9LCBmaWVsZHM6IGNvbXBvdW5kRmlsdGVyRmllbGRzXG5cdFx0XHRcdFx0XHRpZiByZWZlcmVuY2VJdGVtXG5cdFx0XHRcdFx0XHRcdGl0ZW1baXRlbUtleV0gPSByZWZlcmVuY2VJdGVtW2NvbXBvdW5kRmllbGRJdGVtLmNoaWxkS2V5XVxuXHRcdFx0XHRcdGVsc2UgaWYgdHlwZSA9PSBcInNlbGVjdFwiXG5cdFx0XHRcdFx0XHRvcHRpb25zID0gY29tcG91bmRGaWVsZEl0ZW0uZmllbGQub3B0aW9uc1xuXHRcdFx0XHRcdFx0aXRlbVtpdGVtS2V5XSA9IF8uZmluZFdoZXJlKG9wdGlvbnMsIHt2YWx1ZTogaXRlbVZhbHVlfSk/LmxhYmVsIG9yIGl0ZW1WYWx1ZVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGl0ZW1baXRlbUtleV0gPSBpdGVtVmFsdWVcblx0XHRcdFx0XHR1bmxlc3MgaXRlbVtpdGVtS2V5XVxuXHRcdFx0XHRcdFx0aXRlbVtpdGVtS2V5XSA9IFwiLS1cIlxuXHRcdFx0XHRyZXR1cm4gaXRlbVxuXHRcdFx0cmV0dXJuIHJlc3VsdFxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiByZXN1bHRcblxuIiwiTWV0ZW9yLm1ldGhvZHMoe1xuICAncmVwb3J0X2RhdGEnOiBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGNvbXBvdW5kRmllbGRzLCBjdXJzb3IsIGZpZWxkcywgZmlsdGVyRmllbGRzLCBmaWx0ZXJfc2NvcGUsIGZpbHRlcnMsIG9iamVjdEZpZWxkcywgb2JqZWN0X25hbWUsIHJlZiwgcmVzdWx0LCBzZWxlY3Rvciwgc3BhY2UsIHVzZXJJZDtcbiAgICBjaGVjayhvcHRpb25zLCBPYmplY3QpO1xuICAgIHNwYWNlID0gb3B0aW9ucy5zcGFjZTtcbiAgICBmaWVsZHMgPSBvcHRpb25zLmZpZWxkcztcbiAgICBvYmplY3RfbmFtZSA9IG9wdGlvbnMub2JqZWN0X25hbWU7XG4gICAgZmlsdGVyX3Njb3BlID0gb3B0aW9ucy5maWx0ZXJfc2NvcGU7XG4gICAgZmlsdGVycyA9IG9wdGlvbnMuZmlsdGVycztcbiAgICBmaWx0ZXJGaWVsZHMgPSB7fTtcbiAgICBjb21wb3VuZEZpZWxkcyA9IFtdO1xuICAgIG9iamVjdEZpZWxkcyA9IChyZWYgPSBDcmVhdG9yLmdldE9iamVjdChvYmplY3RfbmFtZSkpICE9IG51bGwgPyByZWYuZmllbGRzIDogdm9pZCAwO1xuICAgIF8uZWFjaChmaWVsZHMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICB2YXIgY2hpbGRLZXksIG5hbWUsIG9iamVjdEZpZWxkLCBzcGxpdHM7XG4gICAgICBzcGxpdHMgPSBpdGVtLnNwbGl0KFwiLlwiKTtcbiAgICAgIG5hbWUgPSBzcGxpdHNbMF07XG4gICAgICBvYmplY3RGaWVsZCA9IG9iamVjdEZpZWxkc1tuYW1lXTtcbiAgICAgIGlmIChzcGxpdHMubGVuZ3RoID4gMSAmJiBvYmplY3RGaWVsZCkge1xuICAgICAgICBjaGlsZEtleSA9IGl0ZW0ucmVwbGFjZShuYW1lICsgXCIuXCIsIFwiXCIpO1xuICAgICAgICBjb21wb3VuZEZpZWxkcy5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgIGNoaWxkS2V5OiBjaGlsZEtleSxcbiAgICAgICAgICBmaWVsZDogb2JqZWN0RmllbGRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmlsdGVyRmllbGRzW25hbWVdID0gMTtcbiAgICB9KTtcbiAgICBzZWxlY3RvciA9IHt9O1xuICAgIHVzZXJJZCA9IHRoaXMudXNlcklkO1xuICAgIHNlbGVjdG9yLnNwYWNlID0gc3BhY2U7XG4gICAgaWYgKGZpbHRlcl9zY29wZSA9PT0gXCJzcGFjZXhcIikge1xuICAgICAgc2VsZWN0b3Iuc3BhY2UgPSB7XG4gICAgICAgICRpbjogW251bGwsIHNwYWNlXVxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlcl9zY29wZSA9PT0gXCJtaW5lXCIpIHtcbiAgICAgIHNlbGVjdG9yLm93bmVyID0gdXNlcklkO1xuICAgIH1cbiAgICBpZiAoQ3JlYXRvci5pc0NvbW1vblNwYWNlKHNwYWNlKSAmJiBDcmVhdG9yLmlzU3BhY2VBZG1pbihzcGFjZSwgdGhpcy51c2VySWQpKSB7XG4gICAgICBkZWxldGUgc2VsZWN0b3Iuc3BhY2U7XG4gICAgfVxuICAgIGlmIChmaWx0ZXJzICYmIGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgc2VsZWN0b3JbXCIkYW5kXCJdID0gZmlsdGVycztcbiAgICB9XG4gICAgY3Vyc29yID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdF9uYW1lKS5maW5kKHNlbGVjdG9yLCB7XG4gICAgICBmaWVsZHM6IGZpbHRlckZpZWxkcyxcbiAgICAgIHNraXA6IDAsXG4gICAgICBsaW1pdDogMTAwMDBcbiAgICB9KTtcbiAgICByZXN1bHQgPSBjdXJzb3IuZmV0Y2goKTtcbiAgICBpZiAoY29tcG91bmRGaWVsZHMubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQubWFwKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIF8uZWFjaChjb21wb3VuZEZpZWxkcywgZnVuY3Rpb24oY29tcG91bmRGaWVsZEl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGNvbXBvdW5kRmlsdGVyRmllbGRzLCBpdGVtS2V5LCBpdGVtVmFsdWUsIHJlZjEsIHJlZmVyZW5jZUl0ZW0sIHJlZmVyZW5jZV90bywgdHlwZTtcbiAgICAgICAgICBpdGVtS2V5ID0gY29tcG91bmRGaWVsZEl0ZW0ubmFtZSArIFwiKiUqXCIgKyBjb21wb3VuZEZpZWxkSXRlbS5jaGlsZEtleS5yZXBsYWNlKC9cXC4vZywgXCIqJSpcIik7XG4gICAgICAgICAgaXRlbVZhbHVlID0gaXRlbVtjb21wb3VuZEZpZWxkSXRlbS5uYW1lXTtcbiAgICAgICAgICB0eXBlID0gY29tcG91bmRGaWVsZEl0ZW0uZmllbGQudHlwZTtcbiAgICAgICAgICBpZiAoW1wibG9va3VwXCIsIFwibWFzdGVyX2RldGFpbFwiXS5pbmRleE9mKHR5cGUpID4gLTEpIHtcbiAgICAgICAgICAgIHJlZmVyZW5jZV90byA9IGNvbXBvdW5kRmllbGRJdGVtLmZpZWxkLnJlZmVyZW5jZV90bztcbiAgICAgICAgICAgIGNvbXBvdW5kRmlsdGVyRmllbGRzID0ge307XG4gICAgICAgICAgICBjb21wb3VuZEZpbHRlckZpZWxkc1tjb21wb3VuZEZpZWxkSXRlbS5jaGlsZEtleV0gPSAxO1xuICAgICAgICAgICAgcmVmZXJlbmNlSXRlbSA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWZlcmVuY2VfdG8pLmZpbmRPbmUoe1xuICAgICAgICAgICAgICBfaWQ6IGl0ZW1WYWx1ZVxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICBmaWVsZHM6IGNvbXBvdW5kRmlsdGVyRmllbGRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VJdGVtKSB7XG4gICAgICAgICAgICAgIGl0ZW1baXRlbUtleV0gPSByZWZlcmVuY2VJdGVtW2NvbXBvdW5kRmllbGRJdGVtLmNoaWxkS2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBjb21wb3VuZEZpZWxkSXRlbS5maWVsZC5vcHRpb25zO1xuICAgICAgICAgICAgaXRlbVtpdGVtS2V5XSA9ICgocmVmMSA9IF8uZmluZFdoZXJlKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW1WYWx1ZVxuICAgICAgICAgICAgfSkpICE9IG51bGwgPyByZWYxLmxhYmVsIDogdm9pZCAwKSB8fCBpdGVtVmFsdWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1baXRlbUtleV0gPSBpdGVtVmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXRlbVtpdGVtS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW1baXRlbUtleV0gPSBcIi0tXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9XG59KTtcbiIsIiMjI1xuICAgIHR5cGU6IFwidXNlclwiXG4gICAgb2JqZWN0X25hbWU6IFwib2JqZWN0X2xpc3R2aWV3c1wiXG4gICAgcmVjb3JkX2lkOiBcIntvYmplY3RfbmFtZX0se2xpc3R2aWV3X2lkfVwiXG4gICAgc2V0dGluZ3M6XG4gICAgICAgIGNvbHVtbl93aWR0aDogeyBmaWVsZF9hOiAxMDAsIGZpZWxkXzI6IDE1MCB9XG4gICAgICAgIHNvcnQ6IFtbXCJmaWVsZF9hXCIsIFwiZGVzY1wiXV1cbiAgICBvd25lcjoge3VzZXJJZH1cbiMjI1xuXG5NZXRlb3IubWV0aG9kc1xuICAgIFwidGFidWxhcl9zb3J0X3NldHRpbmdzXCI6IChvYmplY3RfbmFtZSwgbGlzdF92aWV3X2lkLCBzb3J0KS0+XG4gICAgICAgIHVzZXJJZCA9IHRoaXMudXNlcklkXG4gICAgICAgIHNldHRpbmcgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLmZpbmRPbmUoe29iamVjdF9uYW1lOiBvYmplY3RfbmFtZSwgcmVjb3JkX2lkOiBcIm9iamVjdF9saXN0dmlld3NcIiwgb3duZXI6IHVzZXJJZH0pXG4gICAgICAgIGlmIHNldHRpbmdcbiAgICAgICAgICAgIENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MudXBkYXRlKHtfaWQ6IHNldHRpbmcuX2lkfSwgeyRzZXQ6IHtcInNldHRpbmdzLiN7bGlzdF92aWV3X2lkfS5zb3J0XCI6IHNvcnR9fSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZG9jID0gXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICBvYmplY3RfbmFtZTogb2JqZWN0X25hbWVcbiAgICAgICAgICAgICAgICByZWNvcmRfaWQ6IFwib2JqZWN0X2xpc3R2aWV3c1wiXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHt9XG4gICAgICAgICAgICAgICAgb3duZXI6IHVzZXJJZFxuXG4gICAgICAgICAgICBkb2Muc2V0dGluZ3NbbGlzdF92aWV3X2lkXSA9IHt9XG4gICAgICAgICAgICBkb2Muc2V0dGluZ3NbbGlzdF92aWV3X2lkXS5zb3J0ID0gc29ydFxuXG4gICAgICAgICAgICBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLmluc2VydChkb2MpXG5cbiAgICBcInRhYnVsYXJfY29sdW1uX3dpZHRoX3NldHRpbmdzXCI6IChvYmplY3RfbmFtZSwgbGlzdF92aWV3X2lkLCBjb2x1bW5fd2lkdGgpLT5cbiAgICAgICAgdXNlcklkID0gdGhpcy51c2VySWRcbiAgICAgICAgc2V0dGluZyA9IENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MuZmluZE9uZSh7b2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLCByZWNvcmRfaWQ6IFwib2JqZWN0X2xpc3R2aWV3c1wiLCBvd25lcjogdXNlcklkfSlcbiAgICAgICAgaWYgc2V0dGluZ1xuICAgICAgICAgICAgQ3JlYXRvci5Db2xsZWN0aW9ucy5zZXR0aW5ncy51cGRhdGUoe19pZDogc2V0dGluZy5faWR9LCB7JHNldDoge1wic2V0dGluZ3MuI3tsaXN0X3ZpZXdfaWR9LmNvbHVtbl93aWR0aFwiOiBjb2x1bW5fd2lkdGh9fSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZG9jID0gXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1c2VyXCJcbiAgICAgICAgICAgICAgICBvYmplY3RfbmFtZTogb2JqZWN0X25hbWVcbiAgICAgICAgICAgICAgICByZWNvcmRfaWQ6IFwib2JqZWN0X2xpc3R2aWV3c1wiXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHt9XG4gICAgICAgICAgICAgICAgb3duZXI6IHVzZXJJZFxuXG4gICAgICAgICAgICBkb2Muc2V0dGluZ3NbbGlzdF92aWV3X2lkXSA9IHt9XG4gICAgICAgICAgICBkb2Muc2V0dGluZ3NbbGlzdF92aWV3X2lkXS5jb2x1bW5fd2lkdGggPSBjb2x1bW5fd2lkdGhcblxuICAgICAgICAgICAgQ3JlYXRvci5Db2xsZWN0aW9ucy5zZXR0aW5ncy5pbnNlcnQoZG9jKVxuXG4gICAgXCJncmlkX3NldHRpbmdzXCI6IChvYmplY3RfbmFtZSwgbGlzdF92aWV3X2lkLCBjb2x1bW5fd2lkdGgsIHNvcnQpLT5cbiAgICAgICAgdXNlcklkID0gdGhpcy51c2VySWRcbiAgICAgICAgc2V0dGluZyA9IENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MuZmluZE9uZSh7b2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLCByZWNvcmRfaWQ6IFwib2JqZWN0X2dyaWR2aWV3c1wiLCBvd25lcjogdXNlcklkfSlcbiAgICAgICAgaWYgc2V0dGluZ1xuICAgICAgICAgICAgIyDmr4/mrKHpg73lvLrliLbmlLnlj5hfaWRfYWN0aW9uc+WIl+eahOWuveW6pu+8jOS7peino+WGs+W9k+eUqOaIt+WPquaUueWPmOWtl+auteasoeW6j+iAjOayoeacieaUueWPmOS7u+S9leWtl+auteWuveW6puaXtu+8jOWJjeerr+ayoeacieiuoumYheWIsOWtl+auteasoeW6j+WPmOabtOeahOaVsOaNrueahOmXrumimFxuICAgICAgICAgICAgY29sdW1uX3dpZHRoLl9pZF9hY3Rpb25zID0gaWYgc2V0dGluZy5zZXR0aW5nc1tcIiN7bGlzdF92aWV3X2lkfVwiXT8uY29sdW1uX3dpZHRoPy5faWRfYWN0aW9ucyA9PSA0NiB0aGVuIDQ3IGVsc2UgNDZcbiAgICAgICAgICAgIGlmIHNvcnRcbiAgICAgICAgICAgICAgICBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLnVwZGF0ZSh7X2lkOiBzZXR0aW5nLl9pZH0sIHskc2V0OiB7XCJzZXR0aW5ncy4je2xpc3Rfdmlld19pZH0uc29ydFwiOiBzb3J0LCBcInNldHRpbmdzLiN7bGlzdF92aWV3X2lkfS5jb2x1bW5fd2lkdGhcIjogY29sdW1uX3dpZHRofX0pXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgQ3JlYXRvci5Db2xsZWN0aW9ucy5zZXR0aW5ncy51cGRhdGUoe19pZDogc2V0dGluZy5faWR9LCB7JHNldDoge1wic2V0dGluZ3MuI3tsaXN0X3ZpZXdfaWR9LmNvbHVtbl93aWR0aFwiOiBjb2x1bW5fd2lkdGh9fSlcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgZG9jID1cbiAgICAgICAgICAgICAgICB0eXBlOiBcInVzZXJcIlxuICAgICAgICAgICAgICAgIG9iamVjdF9uYW1lOiBvYmplY3RfbmFtZVxuICAgICAgICAgICAgICAgIHJlY29yZF9pZDogXCJvYmplY3RfZ3JpZHZpZXdzXCJcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge31cbiAgICAgICAgICAgICAgICBvd25lcjogdXNlcklkXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRvYy5zZXR0aW5nc1tsaXN0X3ZpZXdfaWRdID0ge31cbiAgICAgICAgICAgIGRvYy5zZXR0aW5nc1tsaXN0X3ZpZXdfaWRdLmNvbHVtbl93aWR0aCA9IGNvbHVtbl93aWR0aFxuICAgICAgICAgICAgZG9jLnNldHRpbmdzW2xpc3Rfdmlld19pZF0uc29ydCA9IHNvcnRcblxuICAgICAgICAgICAgQ3JlYXRvci5Db2xsZWN0aW9ucy5zZXR0aW5ncy5pbnNlcnQoZG9jKSIsIlxuLypcbiAgICB0eXBlOiBcInVzZXJcIlxuICAgIG9iamVjdF9uYW1lOiBcIm9iamVjdF9saXN0dmlld3NcIlxuICAgIHJlY29yZF9pZDogXCJ7b2JqZWN0X25hbWV9LHtsaXN0dmlld19pZH1cIlxuICAgIHNldHRpbmdzOlxuICAgICAgICBjb2x1bW5fd2lkdGg6IHsgZmllbGRfYTogMTAwLCBmaWVsZF8yOiAxNTAgfVxuICAgICAgICBzb3J0OiBbW1wiZmllbGRfYVwiLCBcImRlc2NcIl1dXG4gICAgb3duZXI6IHt1c2VySWR9XG4gKi9cbk1ldGVvci5tZXRob2RzKHtcbiAgXCJ0YWJ1bGFyX3NvcnRfc2V0dGluZ3NcIjogZnVuY3Rpb24ob2JqZWN0X25hbWUsIGxpc3Rfdmlld19pZCwgc29ydCkge1xuICAgIHZhciBkb2MsIG9iaiwgc2V0dGluZywgdXNlcklkO1xuICAgIHVzZXJJZCA9IHRoaXMudXNlcklkO1xuICAgIHNldHRpbmcgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLmZpbmRPbmUoe1xuICAgICAgb2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLFxuICAgICAgcmVjb3JkX2lkOiBcIm9iamVjdF9saXN0dmlld3NcIixcbiAgICAgIG93bmVyOiB1c2VySWRcbiAgICB9KTtcbiAgICBpZiAoc2V0dGluZykge1xuICAgICAgcmV0dXJuIENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MudXBkYXRlKHtcbiAgICAgICAgX2lkOiBzZXR0aW5nLl9pZFxuICAgICAgfSwge1xuICAgICAgICAkc2V0OiAoXG4gICAgICAgICAgb2JqID0ge30sXG4gICAgICAgICAgb2JqW1wic2V0dGluZ3MuXCIgKyBsaXN0X3ZpZXdfaWQgKyBcIi5zb3J0XCJdID0gc29ydCxcbiAgICAgICAgICBvYmpcbiAgICAgICAgKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvYyA9IHtcbiAgICAgICAgdHlwZTogXCJ1c2VyXCIsXG4gICAgICAgIG9iamVjdF9uYW1lOiBvYmplY3RfbmFtZSxcbiAgICAgICAgcmVjb3JkX2lkOiBcIm9iamVjdF9saXN0dmlld3NcIixcbiAgICAgICAgc2V0dGluZ3M6IHt9LFxuICAgICAgICBvd25lcjogdXNlcklkXG4gICAgICB9O1xuICAgICAgZG9jLnNldHRpbmdzW2xpc3Rfdmlld19pZF0gPSB7fTtcbiAgICAgIGRvYy5zZXR0aW5nc1tsaXN0X3ZpZXdfaWRdLnNvcnQgPSBzb3J0O1xuICAgICAgcmV0dXJuIENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MuaW5zZXJ0KGRvYyk7XG4gICAgfVxuICB9LFxuICBcInRhYnVsYXJfY29sdW1uX3dpZHRoX3NldHRpbmdzXCI6IGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBsaXN0X3ZpZXdfaWQsIGNvbHVtbl93aWR0aCkge1xuICAgIHZhciBkb2MsIG9iaiwgc2V0dGluZywgdXNlcklkO1xuICAgIHVzZXJJZCA9IHRoaXMudXNlcklkO1xuICAgIHNldHRpbmcgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLmZpbmRPbmUoe1xuICAgICAgb2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLFxuICAgICAgcmVjb3JkX2lkOiBcIm9iamVjdF9saXN0dmlld3NcIixcbiAgICAgIG93bmVyOiB1c2VySWRcbiAgICB9KTtcbiAgICBpZiAoc2V0dGluZykge1xuICAgICAgcmV0dXJuIENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MudXBkYXRlKHtcbiAgICAgICAgX2lkOiBzZXR0aW5nLl9pZFxuICAgICAgfSwge1xuICAgICAgICAkc2V0OiAoXG4gICAgICAgICAgb2JqID0ge30sXG4gICAgICAgICAgb2JqW1wic2V0dGluZ3MuXCIgKyBsaXN0X3ZpZXdfaWQgKyBcIi5jb2x1bW5fd2lkdGhcIl0gPSBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgb2JqXG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2MgPSB7XG4gICAgICAgIHR5cGU6IFwidXNlclwiLFxuICAgICAgICBvYmplY3RfbmFtZTogb2JqZWN0X25hbWUsXG4gICAgICAgIHJlY29yZF9pZDogXCJvYmplY3RfbGlzdHZpZXdzXCIsXG4gICAgICAgIHNldHRpbmdzOiB7fSxcbiAgICAgICAgb3duZXI6IHVzZXJJZFxuICAgICAgfTtcbiAgICAgIGRvYy5zZXR0aW5nc1tsaXN0X3ZpZXdfaWRdID0ge307XG4gICAgICBkb2Muc2V0dGluZ3NbbGlzdF92aWV3X2lkXS5jb2x1bW5fd2lkdGggPSBjb2x1bW5fd2lkdGg7XG4gICAgICByZXR1cm4gQ3JlYXRvci5Db2xsZWN0aW9ucy5zZXR0aW5ncy5pbnNlcnQoZG9jKTtcbiAgICB9XG4gIH0sXG4gIFwiZ3JpZF9zZXR0aW5nc1wiOiBmdW5jdGlvbihvYmplY3RfbmFtZSwgbGlzdF92aWV3X2lkLCBjb2x1bW5fd2lkdGgsIHNvcnQpIHtcbiAgICB2YXIgZG9jLCBvYmosIG9iajEsIHJlZiwgcmVmMSwgc2V0dGluZywgdXNlcklkO1xuICAgIHVzZXJJZCA9IHRoaXMudXNlcklkO1xuICAgIHNldHRpbmcgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLmZpbmRPbmUoe1xuICAgICAgb2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLFxuICAgICAgcmVjb3JkX2lkOiBcIm9iamVjdF9ncmlkdmlld3NcIixcbiAgICAgIG93bmVyOiB1c2VySWRcbiAgICB9KTtcbiAgICBpZiAoc2V0dGluZykge1xuICAgICAgY29sdW1uX3dpZHRoLl9pZF9hY3Rpb25zID0gKChyZWYgPSBzZXR0aW5nLnNldHRpbmdzW1wiXCIgKyBsaXN0X3ZpZXdfaWRdKSAhPSBudWxsID8gKHJlZjEgPSByZWYuY29sdW1uX3dpZHRoKSAhPSBudWxsID8gcmVmMS5faWRfYWN0aW9ucyA6IHZvaWQgMCA6IHZvaWQgMCkgPT09IDQ2ID8gNDcgOiA0NjtcbiAgICAgIGlmIChzb3J0KSB7XG4gICAgICAgIHJldHVybiBDcmVhdG9yLkNvbGxlY3Rpb25zLnNldHRpbmdzLnVwZGF0ZSh7XG4gICAgICAgICAgX2lkOiBzZXR0aW5nLl9pZFxuICAgICAgICB9LCB7XG4gICAgICAgICAgJHNldDogKFxuICAgICAgICAgICAgb2JqID0ge30sXG4gICAgICAgICAgICBvYmpbXCJzZXR0aW5ncy5cIiArIGxpc3Rfdmlld19pZCArIFwiLnNvcnRcIl0gPSBzb3J0LFxuICAgICAgICAgICAgb2JqW1wic2V0dGluZ3MuXCIgKyBsaXN0X3ZpZXdfaWQgKyBcIi5jb2x1bW5fd2lkdGhcIl0gPSBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICBvYmpcbiAgICAgICAgICApXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MudXBkYXRlKHtcbiAgICAgICAgICBfaWQ6IHNldHRpbmcuX2lkXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAkc2V0OiAoXG4gICAgICAgICAgICBvYmoxID0ge30sXG4gICAgICAgICAgICBvYmoxW1wic2V0dGluZ3MuXCIgKyBsaXN0X3ZpZXdfaWQgKyBcIi5jb2x1bW5fd2lkdGhcIl0gPSBjb2x1bW5fd2lkdGgsXG4gICAgICAgICAgICBvYmoxXG4gICAgICAgICAgKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG9jID0ge1xuICAgICAgICB0eXBlOiBcInVzZXJcIixcbiAgICAgICAgb2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLFxuICAgICAgICByZWNvcmRfaWQ6IFwib2JqZWN0X2dyaWR2aWV3c1wiLFxuICAgICAgICBzZXR0aW5nczoge30sXG4gICAgICAgIG93bmVyOiB1c2VySWRcbiAgICAgIH07XG4gICAgICBkb2Muc2V0dGluZ3NbbGlzdF92aWV3X2lkXSA9IHt9O1xuICAgICAgZG9jLnNldHRpbmdzW2xpc3Rfdmlld19pZF0uY29sdW1uX3dpZHRoID0gY29sdW1uX3dpZHRoO1xuICAgICAgZG9jLnNldHRpbmdzW2xpc3Rfdmlld19pZF0uc29ydCA9IHNvcnQ7XG4gICAgICByZXR1cm4gQ3JlYXRvci5Db2xsZWN0aW9ucy5zZXR0aW5ncy5pbnNlcnQoZG9jKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwieG1sMmpzID0gcmVxdWlyZSAneG1sMmpzJ1xuZnMgPSByZXF1aXJlICdmcydcbnBhdGggPSByZXF1aXJlICdwYXRoJ1xubWtkaXJwID0gcmVxdWlyZSAnbWtkaXJwJ1xuXG5sb2dnZXIgPSBuZXcgTG9nZ2VyICdFeHBvcnRfVE9fWE1MJ1xuXG5fd3JpdGVYbWxGaWxlID0gKGpzb25PYmosb2JqTmFtZSkgLT5cblx0IyDovax4bWxcblx0YnVpbGRlciA9IG5ldyB4bWwyanMuQnVpbGRlcigpXG5cdHhtbCA9IGJ1aWxkZXIuYnVpbGRPYmplY3QganNvbk9ialxuXG5cdCMg6L2s5Li6YnVmZmVyXG5cdHN0cmVhbSA9IG5ldyBCdWZmZXIgeG1sXG5cblx0IyDmoLnmja7lvZPlpKnml7bpl7TnmoTlubTmnIjml6XkvZzkuLrlrZjlgqjot6/lvoRcblx0bm93ID0gbmV3IERhdGVcblx0eWVhciA9IG5vdy5nZXRGdWxsWWVhcigpXG5cdG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxXG5cdGRheSA9IG5vdy5nZXREYXRlKClcblxuXHQjIOaWh+S7tui3r+W+hFxuXHRmaWxlUGF0aCA9IHBhdGguam9pbihfX21ldGVvcl9ib290c3RyYXBfXy5zZXJ2ZXJEaXIsJy4uLy4uLy4uL2V4cG9ydC8nICsgeWVhciArICcvJyArIG1vbnRoICsgJy8nICsgZGF5ICsgJy8nICsgb2JqTmFtZSApXG5cdGZpbGVOYW1lID0ganNvbk9iaj8uX2lkICsgXCIueG1sXCJcblx0ZmlsZUFkZHJlc3MgPSBwYXRoLmpvaW4gZmlsZVBhdGgsIGZpbGVOYW1lXG5cblx0aWYgIWZzLmV4aXN0c1N5bmMgZmlsZVBhdGhcblx0XHRta2RpcnAuc3luYyBmaWxlUGF0aFxuXG5cdCMg5YaZ5YWl5paH5Lu2XG5cdGZzLndyaXRlRmlsZSBmaWxlQWRkcmVzcywgc3RyZWFtLCAoZXJyKSAtPlxuXHRcdGlmIGVyclxuXHRcdFx0bG9nZ2VyLmVycm9yIFwiI3tqc29uT2JqLl9pZH3lhpnlhaV4bWzmlofku7blpLHotKVcIixlcnJcblx0XG5cdHJldHVybiBmaWxlUGF0aFxuXG5cbiMg5pW055CGRmllbGRz55qEanNvbuaVsOaNrlxuX21peEZpZWxkc0RhdGEgPSAob2JqLG9iak5hbWUpIC0+XG5cdCMg5Yid5aeL5YyW5a+56LGh5pWw5o2uXG5cdGpzb25PYmogPSB7fVxuXHQjIOiOt+WPlmZpZWxkc1xuXHRvYmpGaWVsZHMgPSBDcmVhdG9yPy5nZXRPYmplY3Qob2JqTmFtZSk/LmZpZWxkc1xuXG5cdG1peERlZmF1bHQgPSAoZmllbGRfbmFtZSktPlxuXHRcdGpzb25PYmpbZmllbGRfbmFtZV0gPSBvYmpbZmllbGRfbmFtZV0gfHwgXCJcIlxuXG5cdG1peERhdGUgPSAoZmllbGRfbmFtZSx0eXBlKS0+XG5cdFx0ZGF0ZSA9IG9ialtmaWVsZF9uYW1lXVxuXHRcdGlmIHR5cGUgPT0gXCJkYXRlXCJcblx0XHRcdGZvcm1hdCA9IFwiWVlZWS1NTS1ERFwiXG5cdFx0ZWxzZVxuXHRcdFx0Zm9ybWF0ID0gXCJZWVlZLU1NLUREIEhIOm1tOnNzXCJcblx0XHRpZiBkYXRlPyBhbmQgZm9ybWF0P1xuXHRcdFx0ZGF0ZVN0ciA9IG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KVxuXHRcdGpzb25PYmpbZmllbGRfbmFtZV0gPSBkYXRlU3RyIHx8IFwiXCJcblxuXHRtaXhCb29sID0gKGZpZWxkX25hbWUpLT5cblx0XHRpZiBvYmpbZmllbGRfbmFtZV0gPT0gdHJ1ZVxuXHRcdFx0anNvbk9ialtmaWVsZF9uYW1lXSA9IFwi5pivXCJcblx0XHRlbHNlIGlmIG9ialtmaWVsZF9uYW1lXSA9PSBmYWxzZVxuXHRcdFx0anNvbk9ialtmaWVsZF9uYW1lXSA9IFwi5ZCmXCJcblx0XHRlbHNlXG5cdFx0XHRqc29uT2JqW2ZpZWxkX25hbWVdID0gXCJcIlxuXG5cdCMg5b6q546v5q+P5LiqZmllbGRzLOW5tuWIpOaWreWPluWAvFxuXHRfLmVhY2ggb2JqRmllbGRzLCAoZmllbGQsIGZpZWxkX25hbWUpLT5cblx0XHRzd2l0Y2ggZmllbGQ/LnR5cGVcblx0XHRcdHdoZW4gXCJkYXRlXCIsXCJkYXRldGltZVwiIHRoZW4gbWl4RGF0ZSBmaWVsZF9uYW1lLGZpZWxkLnR5cGVcblx0XHRcdHdoZW4gXCJib29sZWFuXCIgdGhlbiBtaXhCb29sIGZpZWxkX25hbWVcblx0XHRcdGVsc2UgbWl4RGVmYXVsdCBmaWVsZF9uYW1lXG5cblx0cmV0dXJuIGpzb25PYmpcblxuIyDojrflj5blrZDooajmlbTnkIbmlbDmja5cbl9taXhSZWxhdGVkRGF0YSA9IChvYmosb2JqTmFtZSkgLT5cblx0IyDliJ3lp4vljJblr7nosaHmlbDmja5cblx0cmVsYXRlZF9vYmplY3RzID0ge31cblxuXHQjIOiOt+WPluebuOWFs+ihqFxuXHRyZWxhdGVkT2JqTmFtZXMgPSBDcmVhdG9yPy5nZXRBbGxSZWxhdGVkT2JqZWN0cyBvYmpOYW1lXG5cblx0IyDlvqrnjq/nm7jlhbPooahcblx0cmVsYXRlZE9iak5hbWVzLmZvckVhY2ggKHJlbGF0ZWRPYmpOYW1lKSAtPlxuXHRcdCMg5q+P5Liq6KGo5a6a5LmJ5LiA5Liq5a+56LGh5pWw57uEXG5cdFx0cmVsYXRlZFRhYmxlRGF0YSA9IFtdXG5cblx0XHQjICrorr7nva7lhbPogZTmkJzntKLmn6Xor6LnmoTlrZfmrrVcblx0XHQjIOmZhOS7tueahOWFs+iBlOaQnOe0ouWtl+auteaYr+Wumuatu+eahFxuXHRcdGlmIHJlbGF0ZWRPYmpOYW1lID09IFwiY21zX2ZpbGVzXCJcblx0XHRcdHJlbGF0ZWRfZmllbGRfbmFtZSA9IFwicGFyZW50Lmlkc1wiXG5cdFx0ZWxzZVxuXHRcdFx0IyDojrflj5ZmaWVsZHNcblx0XHRcdGZpZWxkcyA9IENyZWF0b3I/Lk9iamVjdHNbcmVsYXRlZE9iak5hbWVdPy5maWVsZHNcblx0XHRcdCMg5b6q546v5q+P5LiqZmllbGQs5om+5Ye6cmVmZXJlbmNlX3Rv55qE5YWz6IGU5a2X5q61XG5cdFx0XHRyZWxhdGVkX2ZpZWxkX25hbWUgPSBcIlwiXG5cdFx0XHRfLmVhY2ggZmllbGRzLCAoZmllbGQsIGZpZWxkX25hbWUpLT5cblx0XHRcdFx0aWYgZmllbGQ/LnJlZmVyZW5jZV90byA9PSBvYmpOYW1lXG5cdFx0XHRcdFx0cmVsYXRlZF9maWVsZF9uYW1lID0gZmllbGRfbmFtZVxuXG5cdFx0IyDmoLnmja7mib7lh7rnmoTlhbPogZTlrZfmrrXvvIzmn6XlrZDooajmlbDmja5cblx0XHRpZiByZWxhdGVkX2ZpZWxkX25hbWVcblx0XHRcdHJlbGF0ZWRDb2xsZWN0aW9uID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKHJlbGF0ZWRPYmpOYW1lKVxuXHRcdFx0IyDojrflj5bliLDmiYDmnInnmoTmlbDmja5cblx0XHRcdHJlbGF0ZWRSZWNvcmRMaXN0ID0gcmVsYXRlZENvbGxlY3Rpb24uZmluZCh7XCIje3JlbGF0ZWRfZmllbGRfbmFtZX1cIjpvYmouX2lkfSkuZmV0Y2goKVxuXHRcdFx0IyDlvqrnjq/mr4/kuIDmnaHmlbDmja5cblx0XHRcdHJlbGF0ZWRSZWNvcmRMaXN0LmZvckVhY2ggKHJlbGF0ZWRPYmopLT5cblx0XHRcdFx0IyDmlbTlkIhmaWVsZHPmlbDmja5cblx0XHRcdFx0ZmllbGRzRGF0YSA9IF9taXhGaWVsZHNEYXRhIHJlbGF0ZWRPYmoscmVsYXRlZE9iak5hbWVcblx0XHRcdFx0IyDmiorkuIDmnaHorrDlvZXmj5LlhaXliLDlr7nosaHmlbDnu4TkuK1cblx0XHRcdFx0cmVsYXRlZFRhYmxlRGF0YS5wdXNoIGZpZWxkc0RhdGFcblxuXHRcdCMg5oqK5LiA5Liq5a2Q6KGo55qE5omA5pyJ5pWw5o2u5o+S5YWl5YiwcmVsYXRlZF9vYmplY3Rz5Lit77yM5YaN5b6q546v5LiL5LiA5LiqXG5cdFx0cmVsYXRlZF9vYmplY3RzW3JlbGF0ZWRPYmpOYW1lXSA9IHJlbGF0ZWRUYWJsZURhdGFcblxuXHRyZXR1cm4gcmVsYXRlZF9vYmplY3RzXG5cbiMgQ3JlYXRvci5FeHBvcnQyeG1sKClcbkNyZWF0b3IuRXhwb3J0MnhtbCA9IChvYmpOYW1lLCByZWNvcmRMaXN0KSAtPlxuXHRsb2dnZXIuaW5mbyBcIlJ1biBDcmVhdG9yLkV4cG9ydDJ4bWxcIlxuXG5cdGNvbnNvbGUudGltZSBcIkNyZWF0b3IuRXhwb3J0MnhtbFwiXG5cblx0IyDmtYvor5XmlbDmja5cblx0IyBvYmpOYW1lID0gXCJhcmNoaXZlX3JlY29yZHNcIlxuXG5cdCMg5p+l5om+5a+56LGh5pWw5o2uXG5cdGNvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqTmFtZSlcblx0IyDmtYvor5XmlbDmja5cblx0cmVjb3JkTGlzdCA9IGNvbGxlY3Rpb24uZmluZCh7fSkuZmV0Y2goKVxuXG5cdHJlY29yZExpc3QuZm9yRWFjaCAocmVjb3JkT2JqKS0+XG5cdFx0anNvbk9iaiA9IHt9XG5cdFx0anNvbk9iai5faWQgPSByZWNvcmRPYmouX2lkXG5cblx0XHQjIOaVtOeQhuS4u+ihqOeahEZpZWxkc+aVsOaNrlxuXHRcdGZpZWxkc0RhdGEgPSBfbWl4RmllbGRzRGF0YSByZWNvcmRPYmosb2JqTmFtZVxuXHRcdGpzb25PYmpbb2JqTmFtZV0gPSBmaWVsZHNEYXRhXG5cblx0XHQjIOaVtOeQhuebuOWFs+ihqOaVsOaNrlxuXHRcdHJlbGF0ZWRfb2JqZWN0cyA9IF9taXhSZWxhdGVkRGF0YSByZWNvcmRPYmosb2JqTmFtZVxuXG5cdFx0anNvbk9ialtcInJlbGF0ZWRfb2JqZWN0c1wiXSA9IHJlbGF0ZWRfb2JqZWN0c1xuXG5cdFx0IyDovazkuLp4bWzkv53lrZjmlofku7Zcblx0XHRmaWxlUGF0aCA9IF93cml0ZVhtbEZpbGUganNvbk9iaixvYmpOYW1lXG5cblx0Y29uc29sZS50aW1lRW5kIFwiQ3JlYXRvci5FeHBvcnQyeG1sXCJcblx0cmV0dXJuIGZpbGVQYXRoIiwidmFyIF9taXhGaWVsZHNEYXRhLCBfbWl4UmVsYXRlZERhdGEsIF93cml0ZVhtbEZpbGUsIGZzLCBsb2dnZXIsIG1rZGlycCwgcGF0aCwgeG1sMmpzO1xuXG54bWwyanMgPSByZXF1aXJlKCd4bWwyanMnKTtcblxuZnMgPSByZXF1aXJlKCdmcycpO1xuXG5wYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5ta2RpcnAgPSByZXF1aXJlKCdta2RpcnAnKTtcblxubG9nZ2VyID0gbmV3IExvZ2dlcignRXhwb3J0X1RPX1hNTCcpO1xuXG5fd3JpdGVYbWxGaWxlID0gZnVuY3Rpb24oanNvbk9iaiwgb2JqTmFtZSkge1xuICB2YXIgYnVpbGRlciwgZGF5LCBmaWxlQWRkcmVzcywgZmlsZU5hbWUsIGZpbGVQYXRoLCBtb250aCwgbm93LCBzdHJlYW0sIHhtbCwgeWVhcjtcbiAgYnVpbGRlciA9IG5ldyB4bWwyanMuQnVpbGRlcigpO1xuICB4bWwgPSBidWlsZGVyLmJ1aWxkT2JqZWN0KGpzb25PYmopO1xuICBzdHJlYW0gPSBuZXcgQnVmZmVyKHhtbCk7XG4gIG5vdyA9IG5ldyBEYXRlO1xuICB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKCk7XG4gIG1vbnRoID0gbm93LmdldE1vbnRoKCkgKyAxO1xuICBkYXkgPSBub3cuZ2V0RGF0ZSgpO1xuICBmaWxlUGF0aCA9IHBhdGguam9pbihfX21ldGVvcl9ib290c3RyYXBfXy5zZXJ2ZXJEaXIsICcuLi8uLi8uLi9leHBvcnQvJyArIHllYXIgKyAnLycgKyBtb250aCArICcvJyArIGRheSArICcvJyArIG9iak5hbWUpO1xuICBmaWxlTmFtZSA9IChqc29uT2JqICE9IG51bGwgPyBqc29uT2JqLl9pZCA6IHZvaWQgMCkgKyBcIi54bWxcIjtcbiAgZmlsZUFkZHJlc3MgPSBwYXRoLmpvaW4oZmlsZVBhdGgsIGZpbGVOYW1lKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKGZpbGVQYXRoKSkge1xuICAgIG1rZGlycC5zeW5jKGZpbGVQYXRoKTtcbiAgfVxuICBmcy53cml0ZUZpbGUoZmlsZUFkZHJlc3MsIHN0cmVhbSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIGxvZ2dlci5lcnJvcihqc29uT2JqLl9pZCArIFwi5YaZ5YWleG1s5paH5Lu25aSx6LSlXCIsIGVycik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpbGVQYXRoO1xufTtcblxuX21peEZpZWxkc0RhdGEgPSBmdW5jdGlvbihvYmosIG9iak5hbWUpIHtcbiAgdmFyIGpzb25PYmosIG1peEJvb2wsIG1peERhdGUsIG1peERlZmF1bHQsIG9iakZpZWxkcywgcmVmO1xuICBqc29uT2JqID0ge307XG4gIG9iakZpZWxkcyA9IHR5cGVvZiBDcmVhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIENyZWF0b3IgIT09IG51bGwgPyAocmVmID0gQ3JlYXRvci5nZXRPYmplY3Qob2JqTmFtZSkpICE9IG51bGwgPyByZWYuZmllbGRzIDogdm9pZCAwIDogdm9pZCAwO1xuICBtaXhEZWZhdWx0ID0gZnVuY3Rpb24oZmllbGRfbmFtZSkge1xuICAgIHJldHVybiBqc29uT2JqW2ZpZWxkX25hbWVdID0gb2JqW2ZpZWxkX25hbWVdIHx8IFwiXCI7XG4gIH07XG4gIG1peERhdGUgPSBmdW5jdGlvbihmaWVsZF9uYW1lLCB0eXBlKSB7XG4gICAgdmFyIGRhdGUsIGRhdGVTdHIsIGZvcm1hdDtcbiAgICBkYXRlID0gb2JqW2ZpZWxkX25hbWVdO1xuICAgIGlmICh0eXBlID09PSBcImRhdGVcIikge1xuICAgICAgZm9ybWF0ID0gXCJZWVlZLU1NLUREXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdCA9IFwiWVlZWS1NTS1ERCBISDptbTpzc1wiO1xuICAgIH1cbiAgICBpZiAoKGRhdGUgIT0gbnVsbCkgJiYgKGZvcm1hdCAhPSBudWxsKSkge1xuICAgICAgZGF0ZVN0ciA9IG1vbWVudChkYXRlKS5mb3JtYXQoZm9ybWF0KTtcbiAgICB9XG4gICAgcmV0dXJuIGpzb25PYmpbZmllbGRfbmFtZV0gPSBkYXRlU3RyIHx8IFwiXCI7XG4gIH07XG4gIG1peEJvb2wgPSBmdW5jdGlvbihmaWVsZF9uYW1lKSB7XG4gICAgaWYgKG9ialtmaWVsZF9uYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGpzb25PYmpbZmllbGRfbmFtZV0gPSBcIuaYr1wiO1xuICAgIH0gZWxzZSBpZiAob2JqW2ZpZWxkX25hbWVdID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGpzb25PYmpbZmllbGRfbmFtZV0gPSBcIuWQplwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ganNvbk9ialtmaWVsZF9uYW1lXSA9IFwiXCI7XG4gICAgfVxuICB9O1xuICBfLmVhY2gob2JqRmllbGRzLCBmdW5jdGlvbihmaWVsZCwgZmllbGRfbmFtZSkge1xuICAgIHN3aXRjaCAoZmllbGQgIT0gbnVsbCA/IGZpZWxkLnR5cGUgOiB2b2lkIDApIHtcbiAgICAgIGNhc2UgXCJkYXRlXCI6XG4gICAgICBjYXNlIFwiZGF0ZXRpbWVcIjpcbiAgICAgICAgcmV0dXJuIG1peERhdGUoZmllbGRfbmFtZSwgZmllbGQudHlwZSk7XG4gICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICByZXR1cm4gbWl4Qm9vbChmaWVsZF9uYW1lKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBtaXhEZWZhdWx0KGZpZWxkX25hbWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBqc29uT2JqO1xufTtcblxuX21peFJlbGF0ZWREYXRhID0gZnVuY3Rpb24ob2JqLCBvYmpOYW1lKSB7XG4gIHZhciByZWxhdGVkT2JqTmFtZXMsIHJlbGF0ZWRfb2JqZWN0cztcbiAgcmVsYXRlZF9vYmplY3RzID0ge307XG4gIHJlbGF0ZWRPYmpOYW1lcyA9IHR5cGVvZiBDcmVhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIENyZWF0b3IgIT09IG51bGwgPyBDcmVhdG9yLmdldEFsbFJlbGF0ZWRPYmplY3RzKG9iak5hbWUpIDogdm9pZCAwO1xuICByZWxhdGVkT2JqTmFtZXMuZm9yRWFjaChmdW5jdGlvbihyZWxhdGVkT2JqTmFtZSkge1xuICAgIHZhciBmaWVsZHMsIG9iajEsIHJlZiwgcmVsYXRlZENvbGxlY3Rpb24sIHJlbGF0ZWRSZWNvcmRMaXN0LCByZWxhdGVkVGFibGVEYXRhLCByZWxhdGVkX2ZpZWxkX25hbWU7XG4gICAgcmVsYXRlZFRhYmxlRGF0YSA9IFtdO1xuICAgIGlmIChyZWxhdGVkT2JqTmFtZSA9PT0gXCJjbXNfZmlsZXNcIikge1xuICAgICAgcmVsYXRlZF9maWVsZF9uYW1lID0gXCJwYXJlbnQuaWRzXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpZWxkcyA9IHR5cGVvZiBDcmVhdG9yICE9PSBcInVuZGVmaW5lZFwiICYmIENyZWF0b3IgIT09IG51bGwgPyAocmVmID0gQ3JlYXRvci5PYmplY3RzW3JlbGF0ZWRPYmpOYW1lXSkgIT0gbnVsbCA/IHJlZi5maWVsZHMgOiB2b2lkIDAgOiB2b2lkIDA7XG4gICAgICByZWxhdGVkX2ZpZWxkX25hbWUgPSBcIlwiO1xuICAgICAgXy5lYWNoKGZpZWxkcywgZnVuY3Rpb24oZmllbGQsIGZpZWxkX25hbWUpIHtcbiAgICAgICAgaWYgKChmaWVsZCAhPSBudWxsID8gZmllbGQucmVmZXJlbmNlX3RvIDogdm9pZCAwKSA9PT0gb2JqTmFtZSkge1xuICAgICAgICAgIHJldHVybiByZWxhdGVkX2ZpZWxkX25hbWUgPSBmaWVsZF9uYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHJlbGF0ZWRfZmllbGRfbmFtZSkge1xuICAgICAgcmVsYXRlZENvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ocmVsYXRlZE9iak5hbWUpO1xuICAgICAgcmVsYXRlZFJlY29yZExpc3QgPSByZWxhdGVkQ29sbGVjdGlvbi5maW5kKChcbiAgICAgICAgb2JqMSA9IHt9LFxuICAgICAgICBvYmoxW1wiXCIgKyByZWxhdGVkX2ZpZWxkX25hbWVdID0gb2JqLl9pZCxcbiAgICAgICAgb2JqMVxuICAgICAgKSkuZmV0Y2goKTtcbiAgICAgIHJlbGF0ZWRSZWNvcmRMaXN0LmZvckVhY2goZnVuY3Rpb24ocmVsYXRlZE9iaikge1xuICAgICAgICB2YXIgZmllbGRzRGF0YTtcbiAgICAgICAgZmllbGRzRGF0YSA9IF9taXhGaWVsZHNEYXRhKHJlbGF0ZWRPYmosIHJlbGF0ZWRPYmpOYW1lKTtcbiAgICAgICAgcmV0dXJuIHJlbGF0ZWRUYWJsZURhdGEucHVzaChmaWVsZHNEYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVsYXRlZF9vYmplY3RzW3JlbGF0ZWRPYmpOYW1lXSA9IHJlbGF0ZWRUYWJsZURhdGE7XG4gIH0pO1xuICByZXR1cm4gcmVsYXRlZF9vYmplY3RzO1xufTtcblxuQ3JlYXRvci5FeHBvcnQyeG1sID0gZnVuY3Rpb24ob2JqTmFtZSwgcmVjb3JkTGlzdCkge1xuICB2YXIgY29sbGVjdGlvbjtcbiAgbG9nZ2VyLmluZm8oXCJSdW4gQ3JlYXRvci5FeHBvcnQyeG1sXCIpO1xuICBjb25zb2xlLnRpbWUoXCJDcmVhdG9yLkV4cG9ydDJ4bWxcIik7XG4gIGNvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqTmFtZSk7XG4gIHJlY29yZExpc3QgPSBjb2xsZWN0aW9uLmZpbmQoe30pLmZldGNoKCk7XG4gIHJlY29yZExpc3QuZm9yRWFjaChmdW5jdGlvbihyZWNvcmRPYmopIHtcbiAgICB2YXIgZmllbGRzRGF0YSwgZmlsZVBhdGgsIGpzb25PYmosIHJlbGF0ZWRfb2JqZWN0cztcbiAgICBqc29uT2JqID0ge307XG4gICAganNvbk9iai5faWQgPSByZWNvcmRPYmouX2lkO1xuICAgIGZpZWxkc0RhdGEgPSBfbWl4RmllbGRzRGF0YShyZWNvcmRPYmosIG9iak5hbWUpO1xuICAgIGpzb25PYmpbb2JqTmFtZV0gPSBmaWVsZHNEYXRhO1xuICAgIHJlbGF0ZWRfb2JqZWN0cyA9IF9taXhSZWxhdGVkRGF0YShyZWNvcmRPYmosIG9iak5hbWUpO1xuICAgIGpzb25PYmpbXCJyZWxhdGVkX29iamVjdHNcIl0gPSByZWxhdGVkX29iamVjdHM7XG4gICAgcmV0dXJuIGZpbGVQYXRoID0gX3dyaXRlWG1sRmlsZShqc29uT2JqLCBvYmpOYW1lKTtcbiAgfSk7XG4gIGNvbnNvbGUudGltZUVuZChcIkNyZWF0b3IuRXhwb3J0MnhtbFwiKTtcbiAgcmV0dXJuIGZpbGVQYXRoO1xufTtcbiIsIk1ldGVvci5tZXRob2RzIFxuXHRyZWxhdGVkX29iamVjdHNfcmVjb3JkczogKG9iamVjdF9uYW1lLCByZWxhdGVkX29iamVjdF9uYW1lLCByZWxhdGVkX2ZpZWxkX25hbWUsIHJlY29yZF9pZCwgc3BhY2VJZCktPlxuXHRcdHVzZXJJZCA9IHRoaXMudXNlcklkXG5cdFx0aWYgcmVsYXRlZF9vYmplY3RfbmFtZSA9PSBcImNmcy5maWxlcy5maWxlcmVjb3JkXCJcblx0XHRcdHNlbGVjdG9yID0ge1wibWV0YWRhdGEuc3BhY2VcIjogc3BhY2VJZH1cblx0XHRlbHNlXG5cdFx0XHRzZWxlY3RvciA9IHtzcGFjZTogc3BhY2VJZH1cblx0XHRcblx0XHRpZiByZWxhdGVkX29iamVjdF9uYW1lID09IFwiY21zX2ZpbGVzXCJcblx0XHRcdCMg6ZmE5Lu255qE5YWz6IGU5pCc57Si5p2h5Lu25piv5a6a5q2755qEXG5cdFx0XHRzZWxlY3RvcltcInBhcmVudC5vXCJdID0gb2JqZWN0X25hbWVcblx0XHRcdHNlbGVjdG9yW1wicGFyZW50Lmlkc1wiXSA9IFtyZWNvcmRfaWRdXG5cdFx0ZWxzZVxuXHRcdFx0c2VsZWN0b3JbcmVsYXRlZF9maWVsZF9uYW1lXSA9IHJlY29yZF9pZFxuXG5cdFx0cGVybWlzc2lvbnMgPSBDcmVhdG9yLmdldFBlcm1pc3Npb25zKHJlbGF0ZWRfb2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZClcblx0XHRpZiAhcGVybWlzc2lvbnMudmlld0FsbFJlY29yZHMgYW5kIHBlcm1pc3Npb25zLmFsbG93UmVhZFxuXHRcdFx0c2VsZWN0b3Iub3duZXIgPSB1c2VySWRcblx0XHRcblx0XHRyZWxhdGVkX3JlY29yZHMgPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ocmVsYXRlZF9vYmplY3RfbmFtZSkuZmluZChzZWxlY3Rvcilcblx0XHRyZXR1cm4gcmVsYXRlZF9yZWNvcmRzLmNvdW50KCkiLCJNZXRlb3IubWV0aG9kcyh7XG4gIHJlbGF0ZWRfb2JqZWN0c19yZWNvcmRzOiBmdW5jdGlvbihvYmplY3RfbmFtZSwgcmVsYXRlZF9vYmplY3RfbmFtZSwgcmVsYXRlZF9maWVsZF9uYW1lLCByZWNvcmRfaWQsIHNwYWNlSWQpIHtcbiAgICB2YXIgcGVybWlzc2lvbnMsIHJlbGF0ZWRfcmVjb3Jkcywgc2VsZWN0b3IsIHVzZXJJZDtcbiAgICB1c2VySWQgPSB0aGlzLnVzZXJJZDtcbiAgICBpZiAocmVsYXRlZF9vYmplY3RfbmFtZSA9PT0gXCJjZnMuZmlsZXMuZmlsZXJlY29yZFwiKSB7XG4gICAgICBzZWxlY3RvciA9IHtcbiAgICAgICAgXCJtZXRhZGF0YS5zcGFjZVwiOiBzcGFjZUlkXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RvciA9IHtcbiAgICAgICAgc3BhY2U6IHNwYWNlSWRcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChyZWxhdGVkX29iamVjdF9uYW1lID09PSBcImNtc19maWxlc1wiKSB7XG4gICAgICBzZWxlY3RvcltcInBhcmVudC5vXCJdID0gb2JqZWN0X25hbWU7XG4gICAgICBzZWxlY3RvcltcInBhcmVudC5pZHNcIl0gPSBbcmVjb3JkX2lkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0b3JbcmVsYXRlZF9maWVsZF9uYW1lXSA9IHJlY29yZF9pZDtcbiAgICB9XG4gICAgcGVybWlzc2lvbnMgPSBDcmVhdG9yLmdldFBlcm1pc3Npb25zKHJlbGF0ZWRfb2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZCk7XG4gICAgaWYgKCFwZXJtaXNzaW9ucy52aWV3QWxsUmVjb3JkcyAmJiBwZXJtaXNzaW9ucy5hbGxvd1JlYWQpIHtcbiAgICAgIHNlbGVjdG9yLm93bmVyID0gdXNlcklkO1xuICAgIH1cbiAgICByZWxhdGVkX3JlY29yZHMgPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ocmVsYXRlZF9vYmplY3RfbmFtZSkuZmluZChzZWxlY3Rvcik7XG4gICAgcmV0dXJuIHJlbGF0ZWRfcmVjb3Jkcy5jb3VudCgpO1xuICB9XG59KTtcbiIsIk1ldGVvci5wdWJsaXNoIFwiY3JlYXRvcl9vYmplY3RfcmVjb3JkXCIsIChvYmplY3RfbmFtZSwgaWQsIHNwYWNlX2lkKS0+XG5cdGNvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqZWN0X25hbWUsIHNwYWNlX2lkKVxuXHRpZiBjb2xsZWN0aW9uXG5cdFx0cmV0dXJuIGNvbGxlY3Rpb24uZmluZCh7X2lkOiBpZH0pXG5cbiIsIk1ldGVvci5wdWJsaXNoKFwiY3JlYXRvcl9vYmplY3RfcmVjb3JkXCIsIGZ1bmN0aW9uKG9iamVjdF9uYW1lLCBpZCwgc3BhY2VfaWQpIHtcbiAgdmFyIGNvbGxlY3Rpb247XG4gIGNvbGxlY3Rpb24gPSBDcmVhdG9yLmdldENvbGxlY3Rpb24ob2JqZWN0X25hbWUsIHNwYWNlX2lkKTtcbiAgaWYgKGNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gY29sbGVjdGlvbi5maW5kKHtcbiAgICAgIF9pZDogaWRcbiAgICB9KTtcbiAgfVxufSk7XG4iLCJNZXRlb3IucHVibGlzaENvbXBvc2l0ZSBcInN0ZWVkb3Nfb2JqZWN0X3RhYnVsYXJcIiwgKHRhYmxlTmFtZSwgaWRzLCBmaWVsZHMsIHNwYWNlSWQpLT5cblx0dW5sZXNzIHRoaXMudXNlcklkXG5cdFx0cmV0dXJuIHRoaXMucmVhZHkoKVxuXG5cdGNoZWNrKHRhYmxlTmFtZSwgU3RyaW5nKTtcblx0Y2hlY2soaWRzLCBBcnJheSk7XG5cdGNoZWNrKGZpZWxkcywgTWF0Y2guT3B0aW9uYWwoT2JqZWN0KSk7XG5cblx0X29iamVjdF9uYW1lID0gdGFibGVOYW1lLnJlcGxhY2UoXCJjcmVhdG9yX1wiLFwiXCIpXG5cdF9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChfb2JqZWN0X25hbWUsIHNwYWNlSWQpXG5cblx0aWYgc3BhY2VJZFxuXHRcdF9vYmplY3RfbmFtZSA9IENyZWF0b3IuZ2V0T2JqZWN0TmFtZShfb2JqZWN0KVxuXG5cdG9iamVjdF9jb2xsZWNpdG9uID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKF9vYmplY3RfbmFtZSlcblxuXG5cdF9maWVsZHMgPSBfb2JqZWN0Py5maWVsZHNcblx0aWYgIV9maWVsZHMgfHwgIW9iamVjdF9jb2xsZWNpdG9uXG5cdFx0cmV0dXJuIHRoaXMucmVhZHkoKVxuXG5cdHJlZmVyZW5jZV9maWVsZHMgPSBfLmZpbHRlciBfZmllbGRzLCAoZiktPlxuXHRcdHJldHVybiBfLmlzRnVuY3Rpb24oZi5yZWZlcmVuY2VfdG8pIHx8ICFfLmlzRW1wdHkoZi5yZWZlcmVuY2VfdG8pXG5cblx0c2VsZiA9IHRoaXNcblxuXHRzZWxmLnVuYmxvY2soKTtcblxuXHRpZiByZWZlcmVuY2VfZmllbGRzLmxlbmd0aCA+IDBcblx0XHRkYXRhID0ge1xuXHRcdFx0ZmluZDogKCktPlxuXHRcdFx0XHRzZWxmLnVuYmxvY2soKTtcblx0XHRcdFx0ZmllbGRfa2V5cyA9IHt9XG5cdFx0XHRcdF8uZWFjaCBfLmtleXMoZmllbGRzKSwgKGYpLT5cblx0XHRcdFx0XHR1bmxlc3MgL1xcdysoXFwuXFwkKXsxfVxcdz8vLnRlc3QoZilcblx0XHRcdFx0XHRcdGZpZWxkX2tleXNbZl0gPSAxXG5cdFx0XHRcdFxuXHRcdFx0XHRyZXR1cm4gb2JqZWN0X2NvbGxlY2l0b24uZmluZCh7X2lkOiB7JGluOiBpZHN9fSwge2ZpZWxkczogZmllbGRfa2V5c30pO1xuXHRcdH1cblxuXHRcdGRhdGEuY2hpbGRyZW4gPSBbXVxuXG5cdFx0a2V5cyA9IF8ua2V5cyhmaWVsZHMpXG5cblx0XHRpZiBrZXlzLmxlbmd0aCA8IDFcblx0XHRcdGtleXMgPSBfLmtleXMoX2ZpZWxkcylcblxuXHRcdF9rZXlzID0gW11cblxuXHRcdGtleXMuZm9yRWFjaCAoa2V5KS0+XG5cdFx0XHRpZiBfb2JqZWN0LnNjaGVtYS5fb2JqZWN0S2V5c1trZXkgKyAnLiddXG5cdFx0XHRcdF9rZXlzID0gX2tleXMuY29uY2F0KF8ubWFwKF9vYmplY3Quc2NoZW1hLl9vYmplY3RLZXlzW2tleSArICcuJ10sIChrKS0+XG5cdFx0XHRcdFx0cmV0dXJuIGtleSArICcuJyArIGtcblx0XHRcdFx0KSlcblx0XHRcdF9rZXlzLnB1c2goa2V5KVxuXG5cdFx0X2tleXMuZm9yRWFjaCAoa2V5KS0+XG5cdFx0XHRyZWZlcmVuY2VfZmllbGQgPSBfZmllbGRzW2tleV1cblxuXHRcdFx0aWYgcmVmZXJlbmNlX2ZpZWxkICYmIChfLmlzRnVuY3Rpb24ocmVmZXJlbmNlX2ZpZWxkLnJlZmVyZW5jZV90bykgfHwgIV8uaXNFbXB0eShyZWZlcmVuY2VfZmllbGQucmVmZXJlbmNlX3RvKSkgICMgYW5kIENyZWF0b3IuQ29sbGVjdGlvbnNbcmVmZXJlbmNlX2ZpZWxkLnJlZmVyZW5jZV90b11cblx0XHRcdFx0ZGF0YS5jaGlsZHJlbi5wdXNoIHtcblx0XHRcdFx0XHRmaW5kOiAocGFyZW50KSAtPlxuXHRcdFx0XHRcdFx0dHJ5XG5cdFx0XHRcdFx0XHRcdHNlbGYudW5ibG9jaygpO1xuXG5cdFx0XHRcdFx0XHRcdHF1ZXJ5ID0ge31cblxuXHRcdFx0XHRcdFx0XHQjIOihqOagvOWtkOWtl+auteeJueauiuWkhOeQhlxuXHRcdFx0XHRcdFx0XHRpZiAvXFx3KyhcXC5cXCRcXC4pezF9XFx3Ky8udGVzdChrZXkpXG5cdFx0XHRcdFx0XHRcdFx0cF9rID0ga2V5LnJlcGxhY2UoLyhcXHcrKVxcLlxcJFxcLlxcdysvaWcsIFwiJDFcIilcblx0XHRcdFx0XHRcdFx0XHRzX2sgPSBrZXkucmVwbGFjZSgvXFx3K1xcLlxcJFxcLihcXHcrKS9pZywgXCIkMVwiKVxuXHRcdFx0XHRcdFx0XHRcdHJlZmVyZW5jZV9pZHMgPSBwYXJlbnRbcF9rXS5nZXRQcm9wZXJ0eShzX2spXG5cdFx0XHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdFx0XHRyZWZlcmVuY2VfaWRzID0ga2V5LnNwbGl0KCcuJykucmVkdWNlIChvLCB4KSAtPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvP1t4XVxuXHRcdFx0XHRcdFx0XHRcdCwgcGFyZW50XG5cblx0XHRcdFx0XHRcdFx0cmVmZXJlbmNlX3RvID0gcmVmZXJlbmNlX2ZpZWxkLnJlZmVyZW5jZV90b1xuXG5cdFx0XHRcdFx0XHRcdGlmIF8uaXNGdW5jdGlvbihyZWZlcmVuY2VfdG8pXG5cdFx0XHRcdFx0XHRcdFx0cmVmZXJlbmNlX3RvID0gcmVmZXJlbmNlX3RvKClcblxuXHRcdFx0XHRcdFx0XHRpZiBfLmlzQXJyYXkocmVmZXJlbmNlX3RvKVxuXHRcdFx0XHRcdFx0XHRcdGlmIF8uaXNPYmplY3QocmVmZXJlbmNlX2lkcykgJiYgIV8uaXNBcnJheShyZWZlcmVuY2VfaWRzKVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmZXJlbmNlX3RvID0gcmVmZXJlbmNlX2lkcy5vXG5cdFx0XHRcdFx0XHRcdFx0XHRyZWZlcmVuY2VfaWRzID0gcmVmZXJlbmNlX2lkcy5pZHMgfHwgW11cblx0XHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gW11cblxuXHRcdFx0XHRcdFx0XHRpZiBfLmlzQXJyYXkocmVmZXJlbmNlX2lkcylcblx0XHRcdFx0XHRcdFx0XHRxdWVyeS5faWQgPSB7JGluOiByZWZlcmVuY2VfaWRzfVxuXHRcdFx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRcdFx0cXVlcnkuX2lkID0gcmVmZXJlbmNlX2lkc1xuXG5cdFx0XHRcdFx0XHRcdHJlZmVyZW5jZV90b19vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChyZWZlcmVuY2VfdG8sIHNwYWNlSWQpXG5cblx0XHRcdFx0XHRcdFx0bmFtZV9maWVsZF9rZXkgPSByZWZlcmVuY2VfdG9fb2JqZWN0Lk5BTUVfRklFTERfS0VZXG5cblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW5fZmllbGRzID0ge19pZDogMSwgc3BhY2U6IDF9XG5cblx0XHRcdFx0XHRcdFx0aWYgbmFtZV9maWVsZF9rZXlcblx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbl9maWVsZHNbbmFtZV9maWVsZF9rZXldID0gMVxuXG5cdFx0XHRcdFx0XHRcdHJldHVybiBDcmVhdG9yLmdldENvbGxlY3Rpb24ocmVmZXJlbmNlX3RvLCBzcGFjZUlkKS5maW5kKHF1ZXJ5LCB7XG5cdFx0XHRcdFx0XHRcdFx0ZmllbGRzOiBjaGlsZHJlbl9maWVsZHNcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRjYXRjaCBlXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlZmVyZW5jZV90bywgcGFyZW50LCBlKVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gW11cblx0XHRcdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGFcblx0ZWxzZVxuXHRcdHJldHVybiB7XG5cdFx0XHRmaW5kOiAoKS0+XG5cdFx0XHRcdHNlbGYudW5ibG9jaygpO1xuXHRcdFx0XHRyZXR1cm4gb2JqZWN0X2NvbGxlY2l0b24uZmluZCh7X2lkOiB7JGluOiBpZHN9fSwge2ZpZWxkczogZmllbGRzfSlcblx0XHR9O1xuXG4iLCJNZXRlb3IucHVibGlzaENvbXBvc2l0ZShcInN0ZWVkb3Nfb2JqZWN0X3RhYnVsYXJcIiwgZnVuY3Rpb24odGFibGVOYW1lLCBpZHMsIGZpZWxkcywgc3BhY2VJZCkge1xuICB2YXIgX2ZpZWxkcywgX2tleXMsIF9vYmplY3QsIF9vYmplY3RfbmFtZSwgZGF0YSwga2V5cywgb2JqZWN0X2NvbGxlY2l0b24sIHJlZmVyZW5jZV9maWVsZHMsIHNlbGY7XG4gIGlmICghdGhpcy51c2VySWQpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xuICB9XG4gIGNoZWNrKHRhYmxlTmFtZSwgU3RyaW5nKTtcbiAgY2hlY2soaWRzLCBBcnJheSk7XG4gIGNoZWNrKGZpZWxkcywgTWF0Y2guT3B0aW9uYWwoT2JqZWN0KSk7XG4gIF9vYmplY3RfbmFtZSA9IHRhYmxlTmFtZS5yZXBsYWNlKFwiY3JlYXRvcl9cIiwgXCJcIik7XG4gIF9vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChfb2JqZWN0X25hbWUsIHNwYWNlSWQpO1xuICBpZiAoc3BhY2VJZCkge1xuICAgIF9vYmplY3RfbmFtZSA9IENyZWF0b3IuZ2V0T2JqZWN0TmFtZShfb2JqZWN0KTtcbiAgfVxuICBvYmplY3RfY29sbGVjaXRvbiA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihfb2JqZWN0X25hbWUpO1xuICBfZmllbGRzID0gX29iamVjdCAhPSBudWxsID8gX29iamVjdC5maWVsZHMgOiB2b2lkIDA7XG4gIGlmICghX2ZpZWxkcyB8fCAhb2JqZWN0X2NvbGxlY2l0b24pIHtcbiAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xuICB9XG4gIHJlZmVyZW5jZV9maWVsZHMgPSBfLmZpbHRlcihfZmllbGRzLCBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIF8uaXNGdW5jdGlvbihmLnJlZmVyZW5jZV90bykgfHwgIV8uaXNFbXB0eShmLnJlZmVyZW5jZV90byk7XG4gIH0pO1xuICBzZWxmID0gdGhpcztcbiAgc2VsZi51bmJsb2NrKCk7XG4gIGlmIChyZWZlcmVuY2VfZmllbGRzLmxlbmd0aCA+IDApIHtcbiAgICBkYXRhID0ge1xuICAgICAgZmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmaWVsZF9rZXlzO1xuICAgICAgICBzZWxmLnVuYmxvY2soKTtcbiAgICAgICAgZmllbGRfa2V5cyA9IHt9O1xuICAgICAgICBfLmVhY2goXy5rZXlzKGZpZWxkcyksIGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgICBpZiAoIS9cXHcrKFxcLlxcJCl7MX1cXHc/Ly50ZXN0KGYpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGRfa2V5c1tmXSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iamVjdF9jb2xsZWNpdG9uLmZpbmQoe1xuICAgICAgICAgIF9pZDoge1xuICAgICAgICAgICAgJGluOiBpZHNcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkX2tleXNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkYXRhLmNoaWxkcmVuID0gW107XG4gICAga2V5cyA9IF8ua2V5cyhmaWVsZHMpO1xuICAgIGlmIChrZXlzLmxlbmd0aCA8IDEpIHtcbiAgICAgIGtleXMgPSBfLmtleXMoX2ZpZWxkcyk7XG4gICAgfVxuICAgIF9rZXlzID0gW107XG4gICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgaWYgKF9vYmplY3Quc2NoZW1hLl9vYmplY3RLZXlzW2tleSArICcuJ10pIHtcbiAgICAgICAgX2tleXMgPSBfa2V5cy5jb25jYXQoXy5tYXAoX29iamVjdC5zY2hlbWEuX29iamVjdEtleXNba2V5ICsgJy4nXSwgZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiBrZXkgKyAnLicgKyBrO1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gX2tleXMucHVzaChrZXkpO1xuICAgIH0pO1xuICAgIF9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICB2YXIgcmVmZXJlbmNlX2ZpZWxkO1xuICAgICAgcmVmZXJlbmNlX2ZpZWxkID0gX2ZpZWxkc1trZXldO1xuICAgICAgaWYgKHJlZmVyZW5jZV9maWVsZCAmJiAoXy5pc0Z1bmN0aW9uKHJlZmVyZW5jZV9maWVsZC5yZWZlcmVuY2VfdG8pIHx8ICFfLmlzRW1wdHkocmVmZXJlbmNlX2ZpZWxkLnJlZmVyZW5jZV90bykpKSB7XG4gICAgICAgIHJldHVybiBkYXRhLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgIGZpbmQ6IGZ1bmN0aW9uKHBhcmVudCkge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuX2ZpZWxkcywgZSwgbmFtZV9maWVsZF9rZXksIHBfaywgcXVlcnksIHJlZmVyZW5jZV9pZHMsIHJlZmVyZW5jZV90bywgcmVmZXJlbmNlX3RvX29iamVjdCwgc19rO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgc2VsZi51bmJsb2NrKCk7XG4gICAgICAgICAgICAgIHF1ZXJ5ID0ge307XG4gICAgICAgICAgICAgIGlmICgvXFx3KyhcXC5cXCRcXC4pezF9XFx3Ky8udGVzdChrZXkpKSB7XG4gICAgICAgICAgICAgICAgcF9rID0ga2V5LnJlcGxhY2UoLyhcXHcrKVxcLlxcJFxcLlxcdysvaWcsIFwiJDFcIik7XG4gICAgICAgICAgICAgICAgc19rID0ga2V5LnJlcGxhY2UoL1xcdytcXC5cXCRcXC4oXFx3KykvaWcsIFwiJDFcIik7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlX2lkcyA9IHBhcmVudFtwX2tdLmdldFByb3BlcnR5KHNfayk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlX2lkcyA9IGtleS5zcGxpdCgnLicpLnJlZHVjZShmdW5jdGlvbihvLCB4KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbyAhPSBudWxsID8gb1t4XSA6IHZvaWQgMDtcbiAgICAgICAgICAgICAgICB9LCBwYXJlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlZmVyZW5jZV90byA9IHJlZmVyZW5jZV9maWVsZC5yZWZlcmVuY2VfdG87XG4gICAgICAgICAgICAgIGlmIChfLmlzRnVuY3Rpb24ocmVmZXJlbmNlX3RvKSkge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZV90byA9IHJlZmVyZW5jZV90bygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChfLmlzQXJyYXkocmVmZXJlbmNlX3RvKSkge1xuICAgICAgICAgICAgICAgIGlmIChfLmlzT2JqZWN0KHJlZmVyZW5jZV9pZHMpICYmICFfLmlzQXJyYXkocmVmZXJlbmNlX2lkcykpIHtcbiAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV90byA9IHJlZmVyZW5jZV9pZHMubztcbiAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9pZHMgPSByZWZlcmVuY2VfaWRzLmlkcyB8fCBbXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoXy5pc0FycmF5KHJlZmVyZW5jZV9pZHMpKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkuX2lkID0ge1xuICAgICAgICAgICAgICAgICAgJGluOiByZWZlcmVuY2VfaWRzXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5faWQgPSByZWZlcmVuY2VfaWRzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJlZmVyZW5jZV90b19vYmplY3QgPSBDcmVhdG9yLmdldE9iamVjdChyZWZlcmVuY2VfdG8sIHNwYWNlSWQpO1xuICAgICAgICAgICAgICBuYW1lX2ZpZWxkX2tleSA9IHJlZmVyZW5jZV90b19vYmplY3QuTkFNRV9GSUVMRF9LRVk7XG4gICAgICAgICAgICAgIGNoaWxkcmVuX2ZpZWxkcyA9IHtcbiAgICAgICAgICAgICAgICBfaWQ6IDEsXG4gICAgICAgICAgICAgICAgc3BhY2U6IDFcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKG5hbWVfZmllbGRfa2V5KSB7XG4gICAgICAgICAgICAgICAgY2hpbGRyZW5fZmllbGRzW25hbWVfZmllbGRfa2V5XSA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWZlcmVuY2VfdG8sIHNwYWNlSWQpLmZpbmQocXVlcnksIHtcbiAgICAgICAgICAgICAgICBmaWVsZHM6IGNoaWxkcmVuX2ZpZWxkc1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVmZXJlbmNlX3RvLCBwYXJlbnQsIGUpO1xuICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgZmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYudW5ibG9jaygpO1xuICAgICAgICByZXR1cm4gb2JqZWN0X2NvbGxlY2l0b24uZmluZCh7XG4gICAgICAgICAgX2lkOiB7XG4gICAgICAgICAgICAkaW46IGlkc1xuICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgIGZpZWxkczogZmllbGRzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn0pO1xuIiwiTWV0ZW9yLnB1Ymxpc2ggXCJvYmplY3RfbGlzdHZpZXdzXCIsIChvYmplY3RfbmFtZSwgc3BhY2VJZCktPlxuICAgIHVzZXJJZCA9IHRoaXMudXNlcklkXG4gICAgcmV0dXJuIENyZWF0b3IuZ2V0Q29sbGVjdGlvbihcIm9iamVjdF9saXN0dmlld3NcIikuZmluZCh7b2JqZWN0X25hbWU6IG9iamVjdF9uYW1lLCBzcGFjZTogc3BhY2VJZCAsXCIkb3JcIjpbe293bmVyOiB1c2VySWR9LCB7c2hhcmVkOiB0cnVlfV19KSIsIk1ldGVvci5wdWJsaXNoIFwidXNlcl90YWJ1bGFyX3NldHRpbmdzXCIsIChvYmplY3RfbmFtZSktPlxuICAgIHVzZXJJZCA9IHRoaXMudXNlcklkXG4gICAgcmV0dXJuIENyZWF0b3IuQ29sbGVjdGlvbnMuc2V0dGluZ3MuZmluZCh7b2JqZWN0X25hbWU6IHskaW46IG9iamVjdF9uYW1lfSwgcmVjb3JkX2lkOiB7JGluOiBbXCJvYmplY3RfbGlzdHZpZXdzXCIsIFwib2JqZWN0X2dyaWR2aWV3c1wiXX0sIG93bmVyOiB1c2VySWR9KVxuIiwiTWV0ZW9yLnB1Ymxpc2ggXCJyZWxhdGVkX29iamVjdHNfcmVjb3Jkc1wiLCAob2JqZWN0X25hbWUsIHJlbGF0ZWRfb2JqZWN0X25hbWUsIHJlbGF0ZWRfZmllbGRfbmFtZSwgcmVjb3JkX2lkLCBzcGFjZUlkKS0+XG5cdHVzZXJJZCA9IHRoaXMudXNlcklkXG5cdGlmIHJlbGF0ZWRfb2JqZWN0X25hbWUgPT0gXCJjZnMuZmlsZXMuZmlsZXJlY29yZFwiXG5cdFx0c2VsZWN0b3IgPSB7XCJtZXRhZGF0YS5zcGFjZVwiOiBzcGFjZUlkfVxuXHRlbHNlXG5cdFx0c2VsZWN0b3IgPSB7c3BhY2U6IHNwYWNlSWR9XG5cdFxuXHRpZiByZWxhdGVkX29iamVjdF9uYW1lID09IFwiY21zX2ZpbGVzXCJcblx0XHQjIOmZhOS7tueahOWFs+iBlOaQnOe0ouadoeS7tuaYr+Wumuatu+eahFxuXHRcdHNlbGVjdG9yW1wicGFyZW50Lm9cIl0gPSBvYmplY3RfbmFtZVxuXHRcdHNlbGVjdG9yW1wicGFyZW50Lmlkc1wiXSA9IFtyZWNvcmRfaWRdXG5cdGVsc2Vcblx0XHRzZWxlY3RvcltyZWxhdGVkX2ZpZWxkX25hbWVdID0gcmVjb3JkX2lkXG5cblx0cGVybWlzc2lvbnMgPSBDcmVhdG9yLmdldFBlcm1pc3Npb25zKHJlbGF0ZWRfb2JqZWN0X25hbWUsIHNwYWNlSWQsIHVzZXJJZClcblx0aWYgIXBlcm1pc3Npb25zLnZpZXdBbGxSZWNvcmRzIGFuZCBwZXJtaXNzaW9ucy5hbGxvd1JlYWRcblx0XHRzZWxlY3Rvci5vd25lciA9IHVzZXJJZFxuXHRcblx0cmV0dXJuIENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWxhdGVkX29iamVjdF9uYW1lKS5maW5kKHNlbGVjdG9yKSIsIk1ldGVvci5wdWJsaXNoKFwicmVsYXRlZF9vYmplY3RzX3JlY29yZHNcIiwgZnVuY3Rpb24ob2JqZWN0X25hbWUsIHJlbGF0ZWRfb2JqZWN0X25hbWUsIHJlbGF0ZWRfZmllbGRfbmFtZSwgcmVjb3JkX2lkLCBzcGFjZUlkKSB7XG4gIHZhciBwZXJtaXNzaW9ucywgc2VsZWN0b3IsIHVzZXJJZDtcbiAgdXNlcklkID0gdGhpcy51c2VySWQ7XG4gIGlmIChyZWxhdGVkX29iamVjdF9uYW1lID09PSBcImNmcy5maWxlcy5maWxlcmVjb3JkXCIpIHtcbiAgICBzZWxlY3RvciA9IHtcbiAgICAgIFwibWV0YWRhdGEuc3BhY2VcIjogc3BhY2VJZFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0b3IgPSB7XG4gICAgICBzcGFjZTogc3BhY2VJZFxuICAgIH07XG4gIH1cbiAgaWYgKHJlbGF0ZWRfb2JqZWN0X25hbWUgPT09IFwiY21zX2ZpbGVzXCIpIHtcbiAgICBzZWxlY3RvcltcInBhcmVudC5vXCJdID0gb2JqZWN0X25hbWU7XG4gICAgc2VsZWN0b3JbXCJwYXJlbnQuaWRzXCJdID0gW3JlY29yZF9pZF07XG4gIH0gZWxzZSB7XG4gICAgc2VsZWN0b3JbcmVsYXRlZF9maWVsZF9uYW1lXSA9IHJlY29yZF9pZDtcbiAgfVxuICBwZXJtaXNzaW9ucyA9IENyZWF0b3IuZ2V0UGVybWlzc2lvbnMocmVsYXRlZF9vYmplY3RfbmFtZSwgc3BhY2VJZCwgdXNlcklkKTtcbiAgaWYgKCFwZXJtaXNzaW9ucy52aWV3QWxsUmVjb3JkcyAmJiBwZXJtaXNzaW9ucy5hbGxvd1JlYWQpIHtcbiAgICBzZWxlY3Rvci5vd25lciA9IHVzZXJJZDtcbiAgfVxuICByZXR1cm4gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKHJlbGF0ZWRfb2JqZWN0X25hbWUpLmZpbmQoc2VsZWN0b3IpO1xufSk7XG4iLCJNZXRlb3IucHVibGlzaCAnc3BhY2VfdXNlcl9pbmZvJywgKHNwYWNlSWQsIHVzZXJJZCktPlxuXHRyZXR1cm4gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKFwic3BhY2VfdXNlcnNcIikuZmluZCh7c3BhY2U6IHNwYWNlSWQsIHVzZXI6IHVzZXJJZH0pIiwiXG5pZiBNZXRlb3IuaXNTZXJ2ZXJcblxuXHRNZXRlb3IucHVibGlzaCAnY29udGFjdHNfdmlld19saW1pdHMnLCAoc3BhY2VJZCktPlxuXG5cdFx0dW5sZXNzIHRoaXMudXNlcklkXG5cdFx0XHRyZXR1cm4gdGhpcy5yZWFkeSgpXG5cblx0XHR1bmxlc3Mgc3BhY2VJZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVhZHkoKVxuXG5cdFx0c2VsZWN0b3IgPVxuXHRcdFx0c3BhY2U6IHNwYWNlSWRcblx0XHRcdGtleTogJ2NvbnRhY3RzX3ZpZXdfbGltaXRzJ1xuXG5cdFx0cmV0dXJuIGRiLnNwYWNlX3NldHRpbmdzLmZpbmQoc2VsZWN0b3IpIiwiaWYgKE1ldGVvci5pc1NlcnZlcikge1xuICBNZXRlb3IucHVibGlzaCgnY29udGFjdHNfdmlld19saW1pdHMnLCBmdW5jdGlvbihzcGFjZUlkKSB7XG4gICAgdmFyIHNlbGVjdG9yO1xuICAgIGlmICghdGhpcy51c2VySWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XG4gICAgfVxuICAgIGlmICghc3BhY2VJZCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVhZHkoKTtcbiAgICB9XG4gICAgc2VsZWN0b3IgPSB7XG4gICAgICBzcGFjZTogc3BhY2VJZCxcbiAgICAgIGtleTogJ2NvbnRhY3RzX3ZpZXdfbGltaXRzJ1xuICAgIH07XG4gICAgcmV0dXJuIGRiLnNwYWNlX3NldHRpbmdzLmZpbmQoc2VsZWN0b3IpO1xuICB9KTtcbn1cbiIsIlxuaWYgTWV0ZW9yLmlzU2VydmVyXG5cblx0TWV0ZW9yLnB1Ymxpc2ggJ2NvbnRhY3RzX25vX2ZvcmNlX3Bob25lX3VzZXJzJywgKHNwYWNlSWQpLT5cblxuXHRcdHVubGVzcyB0aGlzLnVzZXJJZFxuXHRcdFx0cmV0dXJuIHRoaXMucmVhZHkoKVxuXG5cdFx0dW5sZXNzIHNwYWNlSWRcblx0XHRcdHJldHVybiB0aGlzLnJlYWR5KClcblxuXHRcdHNlbGVjdG9yID1cblx0XHRcdHNwYWNlOiBzcGFjZUlkXG5cdFx0XHRrZXk6ICdjb250YWN0c19ub19mb3JjZV9waG9uZV91c2VycydcblxuXHRcdHJldHVybiBkYi5zcGFjZV9zZXR0aW5ncy5maW5kKHNlbGVjdG9yKSIsImlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcbiAgTWV0ZW9yLnB1Ymxpc2goJ2NvbnRhY3RzX25vX2ZvcmNlX3Bob25lX3VzZXJzJywgZnVuY3Rpb24oc3BhY2VJZCkge1xuICAgIHZhciBzZWxlY3RvcjtcbiAgICBpZiAoIXRoaXMudXNlcklkKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZWFkeSgpO1xuICAgIH1cbiAgICBpZiAoIXNwYWNlSWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlYWR5KCk7XG4gICAgfVxuICAgIHNlbGVjdG9yID0ge1xuICAgICAgc3BhY2U6IHNwYWNlSWQsXG4gICAgICBrZXk6ICdjb250YWN0c19ub19mb3JjZV9waG9uZV91c2VycydcbiAgICB9O1xuICAgIHJldHVybiBkYi5zcGFjZV9zZXR0aW5ncy5maW5kKHNlbGVjdG9yKTtcbiAgfSk7XG59XG4iLCJwZXJtaXNzaW9uTWFuYWdlciA9IHt9XG5cbnBlcm1pc3Npb25NYW5hZ2VyLmdldEZsb3dQZXJtaXNzaW9ucyA9IChmbG93X2lkLCB1c2VyX2lkKSAtPlxuXHQjIOagueaNrjpmbG93X2lk5p+l5Yiw5a+55bqU55qEZmxvd1xuXHRmbG93ID0gdXVmbG93TWFuYWdlci5nZXRGbG93KGZsb3dfaWQpXG5cdHNwYWNlX2lkID0gZmxvdy5zcGFjZVxuXHQjIOagueaNrnNwYWNlX2lk5ZKMOnVzZXJfaWTliLBvcmdhbml6YXRpb25z6KGo5Lit5p+l5Yiw55So5oi35omA5bGe5omA5pyJ55qEb3JnX2lk77yI5YyF5ous5LiK57qn57uESUTvvIlcblx0b3JnX2lkcyA9IG5ldyBBcnJheVxuXHRvcmdhbml6YXRpb25zID0gZGIub3JnYW5pemF0aW9ucy5maW5kKHtcblx0XHRzcGFjZTogc3BhY2VfaWQsIHVzZXJzOiB1c2VyX2lkIH0sIHsgZmllbGRzOiB7IHBhcmVudHM6IDEgfSB9KS5mZXRjaCgpXG5cdF8uZWFjaChvcmdhbml6YXRpb25zLCAob3JnKSAtPlxuXHRcdG9yZ19pZHMucHVzaChvcmcuX2lkKVxuXHRcdGlmIG9yZy5wYXJlbnRzXG5cdFx0XHRfLmVhY2gob3JnLnBhcmVudHMsIChwYXJlbnRfaWQpIC0+XG5cdFx0XHRcdG9yZ19pZHMucHVzaChwYXJlbnRfaWQpXG5cdFx0XHQpXG5cdClcblx0b3JnX2lkcyA9IF8udW5pcShvcmdfaWRzKVxuXHRteV9wZXJtaXNzaW9ucyA9IG5ldyBBcnJheVxuXHRpZiBmbG93LnBlcm1zXG5cdFx0IyDliKTmlq1mbG93LnBlcm1zLnVzZXJzX2Nhbl9hZG1pbuS4reaYr+WQpuWMheWQq+W9k+WJjeeUqOaIt++8jFxuXHRcdCMg5oiW6ICFZmxvdy5wZXJtcy5vcmdzX2Nhbl9hZGTmmK/lkKbljIXlkKs05q2l5b6X5Yiw55qEb3JnX2lk5pWw57uE5Lit55qE5Lu75L2V5LiA5Liq77yMXG5cdFx0IyDoi6XmmK/vvIzliJnlnKjov5Tlm57nmoTmlbDnu4TkuK3liqDkuIphZGRcblx0XHRpZiBmbG93LnBlcm1zLnVzZXJzX2Nhbl9hZGRcblx0XHRcdHVzZXJzX2Nhbl9hZGQgPSBmbG93LnBlcm1zLnVzZXJzX2Nhbl9hZGRcblx0XHRcdGlmIHVzZXJzX2Nhbl9hZGQuaW5jbHVkZXModXNlcl9pZClcblx0XHRcdFx0bXlfcGVybWlzc2lvbnMucHVzaChcImFkZFwiKVxuXG5cdFx0aWYgZmxvdy5wZXJtcy5vcmdzX2Nhbl9hZGRcblx0XHRcdG9yZ3NfY2FuX2FkZCA9IGZsb3cucGVybXMub3Jnc19jYW5fYWRkXG5cdFx0XHRfLmVhY2gob3JnX2lkcywgKG9yZ19pZCkgLT5cblx0XHRcdFx0aWYgb3Jnc19jYW5fYWRkLmluY2x1ZGVzKG9yZ19pZClcblx0XHRcdFx0XHRteV9wZXJtaXNzaW9ucy5wdXNoKFwiYWRkXCIpXG5cdFx0XHQpXG5cdFx0IyDliKTmlq1mbG93LnBlcm1zLnVzZXJzX2Nhbl9tb25pdG9y5Lit5piv5ZCm5YyF5ZCr5b2T5YmN55So5oi377yMXG5cdFx0IyDmiJbogIVmbG93LnBlcm1zLm9yZ3NfY2FuX21vbml0b3LmmK/lkKbljIXlkKs05q2l5b6X5Yiw55qEb3JnX2lk5pWw57uE5Lit55qE5Lu75L2V5LiA5Liq77yMXG5cdFx0IyDoi6XmmK/vvIzliJnlnKjov5Tlm57nmoTmlbDnu4TkuK3liqDkuIptb25pdG9yXG5cdFx0aWYgZmxvdy5wZXJtcy51c2Vyc19jYW5fbW9uaXRvclxuXHRcdFx0dXNlcnNfY2FuX21vbml0b3IgPSBmbG93LnBlcm1zLnVzZXJzX2Nhbl9tb25pdG9yXG5cdFx0XHRpZiB1c2Vyc19jYW5fbW9uaXRvci5pbmNsdWRlcyh1c2VyX2lkKVxuXHRcdFx0XHRteV9wZXJtaXNzaW9ucy5wdXNoKFwibW9uaXRvclwiKVxuXG5cdFx0aWYgZmxvdy5wZXJtcy5vcmdzX2Nhbl9tb25pdG9yXG5cdFx0XHRvcmdzX2Nhbl9tb25pdG9yID0gZmxvdy5wZXJtcy5vcmdzX2Nhbl9tb25pdG9yXG5cdFx0XHRfLmVhY2gob3JnX2lkcywgKG9yZ19pZCkgLT5cblx0XHRcdFx0aWYgb3Jnc19jYW5fbW9uaXRvci5pbmNsdWRlcyhvcmdfaWQpXG5cdFx0XHRcdFx0bXlfcGVybWlzc2lvbnMucHVzaChcIm1vbml0b3JcIilcblx0XHRcdClcblx0XHQjIOWIpOaWrWZsb3cucGVybXMudXNlcnNfY2FuX2FkbWlu5Lit5piv5ZCm5YyF5ZCr5b2T5YmN55So5oi377yMXG5cdFx0IyDmiJbogIVmbG93LnBlcm1zLm9yZ3NfY2FuX2FkbWlu5piv5ZCm5YyF5ZCrNOatpeW+l+WIsOeahG9yZ19pZOaVsOe7hOS4reeahOS7u+S9leS4gOS4qu+8jFxuXHRcdCMg6Iul5piv77yM5YiZ5Zyo6L+U5Zue55qE5pWw57uE5Lit5Yqg5LiKYWRtaW5cblx0XHRpZiBmbG93LnBlcm1zLnVzZXJzX2Nhbl9hZG1pblxuXHRcdFx0dXNlcnNfY2FuX2FkbWluID0gZmxvdy5wZXJtcy51c2Vyc19jYW5fYWRtaW5cblx0XHRcdGlmIHVzZXJzX2Nhbl9hZG1pbi5pbmNsdWRlcyh1c2VyX2lkKVxuXHRcdFx0XHRteV9wZXJtaXNzaW9ucy5wdXNoKFwiYWRtaW5cIilcblxuXHRcdGlmIGZsb3cucGVybXMub3Jnc19jYW5fYWRtaW5cblx0XHRcdG9yZ3NfY2FuX2FkbWluID0gZmxvdy5wZXJtcy5vcmdzX2Nhbl9hZG1pblxuXHRcdFx0Xy5lYWNoKG9yZ19pZHMsIChvcmdfaWQpIC0+XG5cdFx0XHRcdGlmIG9yZ3NfY2FuX2FkbWluLmluY2x1ZGVzKG9yZ19pZClcblx0XHRcdFx0XHRteV9wZXJtaXNzaW9ucy5wdXNoKFwiYWRtaW5cIilcblx0XHRcdClcblxuXHRteV9wZXJtaXNzaW9ucyA9IF8udW5pcShteV9wZXJtaXNzaW9ucylcblx0cmV0dXJuIG15X3Blcm1pc3Npb25zIiwiICAgICAgICAgICAgICAgICAgICAgIFxuXG5wZXJtaXNzaW9uTWFuYWdlciA9IHt9O1xuXG5wZXJtaXNzaW9uTWFuYWdlci5nZXRGbG93UGVybWlzc2lvbnMgPSBmdW5jdGlvbihmbG93X2lkLCB1c2VyX2lkKSB7XG4gIHZhciBmbG93LCBteV9wZXJtaXNzaW9ucywgb3JnX2lkcywgb3JnYW5pemF0aW9ucywgb3Jnc19jYW5fYWRkLCBvcmdzX2Nhbl9hZG1pbiwgb3Jnc19jYW5fbW9uaXRvciwgc3BhY2VfaWQsIHVzZXJzX2Nhbl9hZGQsIHVzZXJzX2Nhbl9hZG1pbiwgdXNlcnNfY2FuX21vbml0b3I7XG4gIGZsb3cgPSB1dWZsb3dNYW5hZ2VyLmdldEZsb3coZmxvd19pZCk7XG4gIHNwYWNlX2lkID0gZmxvdy5zcGFjZTtcbiAgb3JnX2lkcyA9IG5ldyBBcnJheTtcbiAgb3JnYW5pemF0aW9ucyA9IGRiLm9yZ2FuaXphdGlvbnMuZmluZCh7XG4gICAgc3BhY2U6IHNwYWNlX2lkLFxuICAgIHVzZXJzOiB1c2VyX2lkXG4gIH0sIHtcbiAgICBmaWVsZHM6IHtcbiAgICAgIHBhcmVudHM6IDFcbiAgICB9XG4gIH0pLmZldGNoKCk7XG4gIF8uZWFjaChvcmdhbml6YXRpb25zLCBmdW5jdGlvbihvcmcpIHtcbiAgICBvcmdfaWRzLnB1c2gob3JnLl9pZCk7XG4gICAgaWYgKG9yZy5wYXJlbnRzKSB7XG4gICAgICByZXR1cm4gXy5lYWNoKG9yZy5wYXJlbnRzLCBmdW5jdGlvbihwYXJlbnRfaWQpIHtcbiAgICAgICAgcmV0dXJuIG9yZ19pZHMucHVzaChwYXJlbnRfaWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgb3JnX2lkcyA9IF8udW5pcShvcmdfaWRzKTtcbiAgbXlfcGVybWlzc2lvbnMgPSBuZXcgQXJyYXk7XG4gIGlmIChmbG93LnBlcm1zKSB7XG4gICAgaWYgKGZsb3cucGVybXMudXNlcnNfY2FuX2FkZCkge1xuICAgICAgdXNlcnNfY2FuX2FkZCA9IGZsb3cucGVybXMudXNlcnNfY2FuX2FkZDtcbiAgICAgIGlmICh1c2Vyc19jYW5fYWRkLmluY2x1ZGVzKHVzZXJfaWQpKSB7XG4gICAgICAgIG15X3Blcm1pc3Npb25zLnB1c2goXCJhZGRcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmbG93LnBlcm1zLm9yZ3NfY2FuX2FkZCkge1xuICAgICAgb3Jnc19jYW5fYWRkID0gZmxvdy5wZXJtcy5vcmdzX2Nhbl9hZGQ7XG4gICAgICBfLmVhY2gob3JnX2lkcywgZnVuY3Rpb24ob3JnX2lkKSB7XG4gICAgICAgIGlmIChvcmdzX2Nhbl9hZGQuaW5jbHVkZXMob3JnX2lkKSkge1xuICAgICAgICAgIHJldHVybiBteV9wZXJtaXNzaW9ucy5wdXNoKFwiYWRkXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZsb3cucGVybXMudXNlcnNfY2FuX21vbml0b3IpIHtcbiAgICAgIHVzZXJzX2Nhbl9tb25pdG9yID0gZmxvdy5wZXJtcy51c2Vyc19jYW5fbW9uaXRvcjtcbiAgICAgIGlmICh1c2Vyc19jYW5fbW9uaXRvci5pbmNsdWRlcyh1c2VyX2lkKSkge1xuICAgICAgICBteV9wZXJtaXNzaW9ucy5wdXNoKFwibW9uaXRvclwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZsb3cucGVybXMub3Jnc19jYW5fbW9uaXRvcikge1xuICAgICAgb3Jnc19jYW5fbW9uaXRvciA9IGZsb3cucGVybXMub3Jnc19jYW5fbW9uaXRvcjtcbiAgICAgIF8uZWFjaChvcmdfaWRzLCBmdW5jdGlvbihvcmdfaWQpIHtcbiAgICAgICAgaWYgKG9yZ3NfY2FuX21vbml0b3IuaW5jbHVkZXMob3JnX2lkKSkge1xuICAgICAgICAgIHJldHVybiBteV9wZXJtaXNzaW9ucy5wdXNoKFwibW9uaXRvclwiKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmbG93LnBlcm1zLnVzZXJzX2Nhbl9hZG1pbikge1xuICAgICAgdXNlcnNfY2FuX2FkbWluID0gZmxvdy5wZXJtcy51c2Vyc19jYW5fYWRtaW47XG4gICAgICBpZiAodXNlcnNfY2FuX2FkbWluLmluY2x1ZGVzKHVzZXJfaWQpKSB7XG4gICAgICAgIG15X3Blcm1pc3Npb25zLnB1c2goXCJhZG1pblwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZsb3cucGVybXMub3Jnc19jYW5fYWRtaW4pIHtcbiAgICAgIG9yZ3NfY2FuX2FkbWluID0gZmxvdy5wZXJtcy5vcmdzX2Nhbl9hZG1pbjtcbiAgICAgIF8uZWFjaChvcmdfaWRzLCBmdW5jdGlvbihvcmdfaWQpIHtcbiAgICAgICAgaWYgKG9yZ3NfY2FuX2FkbWluLmluY2x1ZGVzKG9yZ19pZCkpIHtcbiAgICAgICAgICByZXR1cm4gbXlfcGVybWlzc2lvbnMucHVzaChcImFkbWluXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgbXlfcGVybWlzc2lvbnMgPSBfLnVuaXEobXlfcGVybWlzc2lvbnMpO1xuICByZXR1cm4gbXlfcGVybWlzc2lvbnM7XG59O1xuIiwiX2V2YWwgPSByZXF1aXJlKCdldmFsJylcbnV1Zmxvd01hbmFnZXIgPSB7fVxuXG51dWZsb3dNYW5hZ2VyLmNoZWNrX2F1dGhvcml6YXRpb24gPSAocmVxKSAtPlxuXHRxdWVyeSA9IHJlcS5xdWVyeVxuXHR1c2VySWQgPSBxdWVyeVtcIlgtVXNlci1JZFwiXVxuXHRhdXRoVG9rZW4gPSBxdWVyeVtcIlgtQXV0aC1Ub2tlblwiXVxuXG5cdGlmIG5vdCB1c2VySWQgb3Igbm90IGF1dGhUb2tlblxuXHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IgNDAxLCAnVW5hdXRob3JpemVkJ1xuXG5cdGhhc2hlZFRva2VuID0gQWNjb3VudHMuX2hhc2hMb2dpblRva2VuKGF1dGhUb2tlbilcblx0dXNlciA9IE1ldGVvci51c2Vycy5maW5kT25lXG5cdFx0X2lkOiB1c2VySWQsXG5cdFx0XCJzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuaGFzaGVkVG9rZW5cIjogaGFzaGVkVG9rZW5cblxuXHRpZiBub3QgdXNlclxuXHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IgNDAxLCAnVW5hdXRob3JpemVkJ1xuXG5cdHJldHVybiB1c2VyXG5cbnV1Zmxvd01hbmFnZXIuZ2V0U3BhY2UgPSAoc3BhY2VfaWQpIC0+XG5cdHNwYWNlID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5zcGFjZXMuZmluZE9uZShzcGFjZV9pZClcblx0aWYgbm90IHNwYWNlXG5cdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignZXJyb3IhJywgXCJzcGFjZV9pZOacieivr+aIluatpHNwYWNl5bey57uP6KKr5Yig6ZmkXCIpXG5cdHJldHVybiBzcGFjZVxuXG51dWZsb3dNYW5hZ2VyLmdldEZsb3cgPSAoZmxvd19pZCkgLT5cblx0ZmxvdyA9IENyZWF0b3IuQ29sbGVjdGlvbnMuZmxvd3MuZmluZE9uZShmbG93X2lkKVxuXHRpZiBub3QgZmxvd1xuXHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2Vycm9yIScsIFwiaWTmnInor6/miJbmraTmtYHnqIvlt7Lnu4/ooqvliKDpmaRcIilcblx0cmV0dXJuIGZsb3dcblxudXVmbG93TWFuYWdlci5nZXRTcGFjZVVzZXIgPSAoc3BhY2VfaWQsIHVzZXJfaWQpIC0+XG5cdHNwYWNlX3VzZXIgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLnNwYWNlX3VzZXJzLmZpbmRPbmUoeyBzcGFjZTogc3BhY2VfaWQsIHVzZXI6IHVzZXJfaWQgfSlcblx0aWYgbm90IHNwYWNlX3VzZXJcblx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCBcInVzZXJfaWTlr7nlupTnmoTnlKjmiLfkuI3lsZ7kuo7lvZPliY1zcGFjZVwiKVxuXHRyZXR1cm4gc3BhY2VfdXNlclxuXG51dWZsb3dNYW5hZ2VyLmdldFNwYWNlVXNlck9yZ0luZm8gPSAoc3BhY2VfdXNlcikgLT5cblx0aW5mbyA9IG5ldyBPYmplY3Rcblx0aW5mby5vcmdhbml6YXRpb24gPSBzcGFjZV91c2VyLm9yZ2FuaXphdGlvblxuXHRvcmcgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLm9yZ2FuaXphdGlvbnMuZmluZE9uZShzcGFjZV91c2VyLm9yZ2FuaXphdGlvbiwgeyBmaWVsZHM6IHsgbmFtZTogMSAsIGZ1bGxuYW1lOiAxIH0gfSlcblx0aW5mby5vcmdhbml6YXRpb25fbmFtZSA9IG9yZy5uYW1lXG5cdGluZm8ub3JnYW5pemF0aW9uX2Z1bGxuYW1lID0gb3JnLmZ1bGxuYW1lXG5cdHJldHVybiBpbmZvXG5cbnV1Zmxvd01hbmFnZXIuaXNGbG93RW5hYmxlZCA9IChmbG93KSAtPlxuXHRpZiBmbG93LnN0YXRlIGlzbnQgXCJlbmFibGVkXCJcblx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCBcIua1geeoi+acquWQr+eUqCzmk43kvZzlpLHotKVcIilcblxudXVmbG93TWFuYWdlci5pc0Zsb3dTcGFjZU1hdGNoZWQgPSAoZmxvdywgc3BhY2VfaWQpIC0+XG5cdGlmIGZsb3cuc3BhY2UgaXNudCBzcGFjZV9pZFxuXHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2Vycm9yIScsIFwi5rWB56iL5ZKM5bel5L2c5Yy6SUTkuI3ljLnphY1cIilcblxudXVmbG93TWFuYWdlci5nZXRGb3JtID0gKGZvcm1faWQpIC0+XG5cdGZvcm0gPSBDcmVhdG9yLkNvbGxlY3Rpb25zLmZvcm1zLmZpbmRPbmUoZm9ybV9pZClcblx0aWYgbm90IGZvcm1cblx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCAn6KGo5Y2VSUTmnInor6/miJbmraTooajljZXlt7Lnu4/ooqvliKDpmaQnKVxuXG5cdHJldHVybiBmb3JtXG5cbnV1Zmxvd01hbmFnZXIuZ2V0Q2F0ZWdvcnkgPSAoY2F0ZWdvcnlfaWQpIC0+XG5cdHJldHVybiBDcmVhdG9yLkNvbGxlY3Rpb25zLmNhdGVnb3JpZXMuZmluZE9uZShjYXRlZ29yeV9pZClcblxudXVmbG93TWFuYWdlci5jcmVhdGVfaW5zdGFuY2UgPSAoaW5zdGFuY2VfZnJvbV9jbGllbnQsIHVzZXJfaW5mbykgLT5cblx0Y2hlY2sgaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRcIl0sIFN0cmluZ1xuXHRjaGVjayBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInNwYWNlXCJdLCBTdHJpbmdcblx0Y2hlY2sgaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJmbG93XCJdLCBTdHJpbmdcblx0Y2hlY2sgaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJyZWNvcmRfaWRzXCJdLCBbe286IFN0cmluZywgaWRzOiBbU3RyaW5nXX1dXG5cblx0IyDmoKHpqozmmK/lkKZyZWNvcmTlt7Lnu4/lj5HotbfnmoTnlLPor7fov5jlnKjlrqHmibnkuK1cblx0dXVmbG93TWFuYWdlci5jaGVja0lzSW5BcHByb3ZhbChpbnN0YW5jZV9mcm9tX2NsaWVudFtcInJlY29yZF9pZHNcIl1bMF0sIGluc3RhbmNlX2Zyb21fY2xpZW50W1wic3BhY2VcIl0pXG5cblx0c3BhY2VfaWQgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInNwYWNlXCJdXG5cdGZsb3dfaWQgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImZsb3dcIl1cblx0dXNlcl9pZCA9IHVzZXJfaW5mby5faWRcblx0IyDojrflj5bliY3lj7DmiYDkvKDnmoR0cmFjZVxuXHR0cmFjZV9mcm9tX2NsaWVudCA9IG51bGxcblx0IyDojrflj5bliY3lj7DmiYDkvKDnmoRhcHByb3ZlXG5cdGFwcHJvdmVfZnJvbV9jbGllbnQgPSBudWxsXG5cdGlmIGluc3RhbmNlX2Zyb21fY2xpZW50W1widHJhY2VzXCJdIGFuZCBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInRyYWNlc1wiXVswXVxuXHRcdHRyYWNlX2Zyb21fY2xpZW50ID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJ0cmFjZXNcIl1bMF1cblx0XHRpZiB0cmFjZV9mcm9tX2NsaWVudFtcImFwcHJvdmVzXCJdIGFuZCB0cmFjZV9mcm9tX2NsaWVudFtcImFwcHJvdmVzXCJdWzBdXG5cdFx0XHRhcHByb3ZlX2Zyb21fY2xpZW50ID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJ0cmFjZXNcIl1bMF1bXCJhcHByb3Zlc1wiXVswXVxuXG5cdCMg6I635Y+W5LiA5Liqc3BhY2Vcblx0c3BhY2UgPSB1dWZsb3dNYW5hZ2VyLmdldFNwYWNlKHNwYWNlX2lkKVxuXHQjIOiOt+WPluS4gOS4qmZsb3dcblx0ZmxvdyA9IHV1Zmxvd01hbmFnZXIuZ2V0RmxvdyhmbG93X2lkKVxuXHQjIOiOt+WPluS4gOS4qnNwYWNl5LiL55qE5LiA5LiqdXNlclxuXHRzcGFjZV91c2VyID0gdXVmbG93TWFuYWdlci5nZXRTcGFjZVVzZXIoc3BhY2VfaWQsIHVzZXJfaWQpXG5cdCMg6I635Y+Wc3BhY2VfdXNlcuaJgOWcqOeahOmDqOmXqOS/oeaBr1xuXHRzcGFjZV91c2VyX29yZ19pbmZvID0gdXVmbG93TWFuYWdlci5nZXRTcGFjZVVzZXJPcmdJbmZvKHNwYWNlX3VzZXIpXG5cdCMg5Yik5pat5LiA5LiqZmxvd+aYr+WQpuS4uuWQr+eUqOeKtuaAgVxuXHR1dWZsb3dNYW5hZ2VyLmlzRmxvd0VuYWJsZWQoZmxvdylcblx0IyDliKTmlq3kuIDkuKpmbG935ZKMc3BhY2VfaWTmmK/lkKbljLnphY1cblx0dXVmbG93TWFuYWdlci5pc0Zsb3dTcGFjZU1hdGNoZWQoZmxvdywgc3BhY2VfaWQpXG5cblx0Zm9ybSA9IHV1Zmxvd01hbmFnZXIuZ2V0Rm9ybShmbG93LmZvcm0pXG5cblx0cGVybWlzc2lvbnMgPSBwZXJtaXNzaW9uTWFuYWdlci5nZXRGbG93UGVybWlzc2lvbnMoZmxvd19pZCwgdXNlcl9pZClcblxuXHRpZiBub3QgcGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhZGRcIilcblx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCBcIuW9k+WJjeeUqOaIt+ayoeacieatpOa1geeoi+eahOaWsOW7uuadg+mZkFwiKVxuXG5cdG5vdyA9IG5ldyBEYXRlXG5cdGluc19vYmogPSB7fVxuXHRpbnNfb2JqLl9pZCA9IENyZWF0b3IuQ29sbGVjdGlvbnMuaW5zdGFuY2VzLl9tYWtlTmV3SUQoKVxuXHRpbnNfb2JqLnNwYWNlID0gc3BhY2VfaWRcblx0aW5zX29iai5mbG93ID0gZmxvd19pZFxuXHRpbnNfb2JqLmZsb3dfdmVyc2lvbiA9IGZsb3cuY3VycmVudC5faWRcblx0aW5zX29iai5mb3JtID0gZmxvdy5mb3JtXG5cdGluc19vYmouZm9ybV92ZXJzaW9uID0gZmxvdy5jdXJyZW50LmZvcm1fdmVyc2lvblxuXHRpbnNfb2JqLm5hbWUgPSBmbG93Lm5hbWVcblx0aW5zX29iai5zdWJtaXR0ZXIgPSB1c2VyX2lkXG5cdGluc19vYmouc3VibWl0dGVyX25hbWUgPSB1c2VyX2luZm8ubmFtZVxuXHRpbnNfb2JqLmFwcGxpY2FudCA9IGlmIGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50XCJdIHRoZW4gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRcIl0gZWxzZSB1c2VyX2lkXG5cdGluc19vYmouYXBwbGljYW50X25hbWUgPSBpZiBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudF9uYW1lXCJdIHRoZW4gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfbmFtZVwiXSBlbHNlIHVzZXJfaW5mby5uYW1lXG5cdGluc19vYmouYXBwbGljYW50X29yZ2FuaXphdGlvbiA9IGlmIGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X29yZ2FuaXphdGlvblwiXSB0aGVuIGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X29yZ2FuaXphdGlvblwiXSBlbHNlIHNwYWNlX3VzZXIub3JnYW5pemF0aW9uXG5cdGluc19vYmouYXBwbGljYW50X29yZ2FuaXphdGlvbl9uYW1lID0gaWYgaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfb3JnYW5pemF0aW9uX25hbWVcIl0gdGhlbiBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudF9vcmdhbml6YXRpb25fbmFtZVwiXSBlbHNlIHNwYWNlX3VzZXJfb3JnX2luZm8ub3JnYW5pemF0aW9uX25hbWVcblx0aW5zX29iai5hcHBsaWNhbnRfb3JnYW5pemF0aW9uX2Z1bGxuYW1lID0gaWYgaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfb3JnYW5pemF0aW9uX2Z1bGxuYW1lXCJdIHRoZW4gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfb3JnYW5pemF0aW9uX2Z1bGxuYW1lXCJdIGVsc2UgIHNwYWNlX3VzZXJfb3JnX2luZm8ub3JnYW5pemF0aW9uX2Z1bGxuYW1lXG5cdGluc19vYmouYXBwbGljYW50X2NvbXBhbnkgPSBpZiBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudF9jb21wYW55XCJdIHRoZW4gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfY29tcGFueVwiXSBlbHNlIHNwYWNlX3VzZXIuY29tcGFueV9pZFxuXHRpbnNfb2JqLnN0YXRlID0gJ2RyYWZ0J1xuXHRpbnNfb2JqLmNvZGUgPSAnJ1xuXHRpbnNfb2JqLmlzX2FyY2hpdmVkID0gZmFsc2Vcblx0aW5zX29iai5pc19kZWxldGVkID0gZmFsc2Vcblx0aW5zX29iai5jcmVhdGVkID0gbm93XG5cdGluc19vYmouY3JlYXRlZF9ieSA9IHVzZXJfaWRcblx0aW5zX29iai5tb2RpZmllZCA9IG5vd1xuXHRpbnNfb2JqLm1vZGlmaWVkX2J5ID0gdXNlcl9pZFxuXHRpbnNfb2JqLnZhbHVlcyA9IG5ldyBPYmplY3RcblxuXHRpbnNfb2JqLnJlY29yZF9pZHMgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInJlY29yZF9pZHNcIl1cblxuXHRpZiBzcGFjZV91c2VyLmNvbXBhbnlfaWRcblx0XHRpbnNfb2JqLmNvbXBhbnlfaWQgPSBzcGFjZV91c2VyLmNvbXBhbnlfaWRcblxuXHQjIOaWsOW7ulRyYWNlXG5cdHRyYWNlX29iaiA9IHt9XG5cdHRyYWNlX29iai5faWQgPSBuZXcgTW9uZ28uT2JqZWN0SUQoKS5fc3RyXG5cdHRyYWNlX29iai5pbnN0YW5jZSA9IGluc19vYmouX2lkXG5cdHRyYWNlX29iai5pc19maW5pc2hlZCA9IGZhbHNlXG5cdCMg5b2T5YmN5pyA5paw54mIZmxvd+S4reW8gOWni+iKgueCuVxuXHRzdGFydF9zdGVwID0gXy5maW5kKGZsb3cuY3VycmVudC5zdGVwcywgKHN0ZXApIC0+XG5cdFx0cmV0dXJuIHN0ZXAuc3RlcF90eXBlIGlzICdzdGFydCdcblx0KVxuXHR0cmFjZV9vYmouc3RlcCA9IHN0YXJ0X3N0ZXAuX2lkXG5cdHRyYWNlX29iai5uYW1lID0gc3RhcnRfc3RlcC5uYW1lXG5cblx0dHJhY2Vfb2JqLnN0YXJ0X2RhdGUgPSBub3dcblx0IyDmlrDlu7pBcHByb3ZlXG5cdGFwcHJfb2JqID0ge31cblx0YXBwcl9vYmouX2lkID0gbmV3IE1vbmdvLk9iamVjdElEKCkuX3N0clxuXHRhcHByX29iai5pbnN0YW5jZSA9IGluc19vYmouX2lkXG5cdGFwcHJfb2JqLnRyYWNlID0gdHJhY2Vfb2JqLl9pZFxuXHRhcHByX29iai5pc19maW5pc2hlZCA9IGZhbHNlXG5cdGFwcHJfb2JqLnVzZXIgPSBpZiBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudFwiXSB0aGVuIGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50XCJdIGVsc2UgdXNlcl9pZFxuXHRhcHByX29iai51c2VyX25hbWUgPSBpZiBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudF9uYW1lXCJdIHRoZW4gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfbmFtZVwiXSBlbHNlIHVzZXJfaW5mby5uYW1lXG5cdGFwcHJfb2JqLmhhbmRsZXIgPSB1c2VyX2lkXG5cdGFwcHJfb2JqLmhhbmRsZXJfbmFtZSA9IHVzZXJfaW5mby5uYW1lXG5cdGFwcHJfb2JqLmhhbmRsZXJfb3JnYW5pemF0aW9uID0gc3BhY2VfdXNlci5vcmdhbml6YXRpb25cblx0YXBwcl9vYmouaGFuZGxlcl9vcmdhbml6YXRpb25fbmFtZSA9IHNwYWNlX3VzZXJfb3JnX2luZm8ubmFtZVxuXHRhcHByX29iai5oYW5kbGVyX29yZ2FuaXphdGlvbl9mdWxsbmFtZSA9IHNwYWNlX3VzZXJfb3JnX2luZm8uZnVsbG5hbWVcblx0YXBwcl9vYmoudHlwZSA9ICdkcmFmdCdcblx0YXBwcl9vYmouc3RhcnRfZGF0ZSA9IG5vd1xuXHRhcHByX29iai5yZWFkX2RhdGUgPSBub3dcblx0YXBwcl9vYmouaXNfcmVhZCA9IHRydWVcblx0YXBwcl9vYmouaXNfZXJyb3IgPSBmYWxzZVxuXHRhcHByX29iai5kZXNjcmlwdGlvbiA9ICcnXG5cdGFwcHJfb2JqLnZhbHVlcyA9IHV1Zmxvd01hbmFnZXIuaW5pdGlhdGVWYWx1ZXMoaW5zX29iai5yZWNvcmRfaWRzWzBdLCBmbG93X2lkLCBzcGFjZV9pZCwgZm9ybS5jdXJyZW50LmZpZWxkcylcblxuXHR0cmFjZV9vYmouYXBwcm92ZXMgPSBbYXBwcl9vYmpdXG5cdGluc19vYmoudHJhY2VzID0gW3RyYWNlX29ial1cblxuXHRpbnNfb2JqLmluYm94X3VzZXJzID0gaW5zdGFuY2VfZnJvbV9jbGllbnQuaW5ib3hfdXNlcnMgfHwgW11cblxuXHRpbnNfb2JqLmN1cnJlbnRfc3RlcF9uYW1lID0gc3RhcnRfc3RlcC5uYW1lXG5cblx0aWYgZmxvdy5hdXRvX3JlbWluZCBpcyB0cnVlXG5cdFx0aW5zX29iai5hdXRvX3JlbWluZCA9IHRydWVcblxuXHQjIOaWsOW7uueUs+ivt+WNleaXtu+8jGluc3RhbmNlc+iusOW9lea1geeoi+WQjeensOOAgea1geeoi+WIhuexu+WQjeensCAjMTMxM1xuXHRpbnNfb2JqLmZsb3dfbmFtZSA9IGZsb3cubmFtZVxuXHRpZiBmb3JtLmNhdGVnb3J5XG5cdFx0Y2F0ZWdvcnkgPSB1dWZsb3dNYW5hZ2VyLmdldENhdGVnb3J5KGZvcm0uY2F0ZWdvcnkpXG5cdFx0aWYgY2F0ZWdvcnlcblx0XHRcdGluc19vYmouY2F0ZWdvcnlfbmFtZSA9IGNhdGVnb3J5Lm5hbWVcblx0XHRcdGluc19vYmouY2F0ZWdvcnkgPSBjYXRlZ29yeS5faWRcblxuXHRuZXdfaW5zX2lkID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5pbnN0YW5jZXMuaW5zZXJ0KGluc19vYmopXG5cblx0dXVmbG93TWFuYWdlci5pbml0aWF0ZUF0dGFjaChpbnNfb2JqLnJlY29yZF9pZHNbMF0sIHNwYWNlX2lkLCBpbnNfb2JqLl9pZCwgYXBwcl9vYmouX2lkKVxuXG5cdHV1Zmxvd01hbmFnZXIuaW5pdGlhdGVSZWNvcmRJbnN0YW5jZUluZm8oaW5zX29iai5yZWNvcmRfaWRzWzBdLCBuZXdfaW5zX2lkLCBzcGFjZV9pZClcblxuXHRyZXR1cm4gbmV3X2luc19pZFxuXG51dWZsb3dNYW5hZ2VyLmluaXRpYXRlVmFsdWVzID0gKHJlY29yZElkcywgZmxvd0lkLCBzcGFjZUlkLCBmaWVsZHMpIC0+XG5cdGZpZWxkQ29kZXMgPSBbXVxuXHRfLmVhY2ggZmllbGRzLCAoZiktPlxuXHRcdGlmIGYudHlwZSA9PSAnc2VjdGlvbidcblx0XHRcdF8uZWFjaCBmLmZpZWxkcywgKGZmKS0+XG5cdFx0XHRcdGZpZWxkQ29kZXMucHVzaCBmZi5jb2RlXG5cdFx0ZWxzZVxuXHRcdFx0ZmllbGRDb2Rlcy5wdXNoIGYuY29kZVxuXG5cdHZhbHVlcyA9IHt9XG5cdG93ID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5vYmplY3Rfd29ya2Zsb3dzLmZpbmRPbmUoe1xuXHRcdG9iamVjdF9uYW1lOiByZWNvcmRJZHMubyxcblx0XHRmbG93X2lkOiBmbG93SWRcblx0fSlcblx0cmVjb3JkID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKHJlY29yZElkcy5vLCBzcGFjZUlkKS5maW5kT25lKHJlY29yZElkcy5pZHNbMF0pXG5cdGlmIG93IGFuZCByZWNvcmRcblx0XHR0YWJsZUZpZWxkQ29kZXMgPSBbXVxuXHRcdHRhYmxlRmllbGRNYXAgPSBbXVxuXG5cdFx0b3cuZmllbGRfbWFwLmZvckVhY2ggKGZtKSAtPlxuXHRcdFx0IyDliKTmlq3mmK/lkKbmmK/lrZDooajlrZfmrrVcblx0XHRcdGlmIGZtLndvcmtmbG93X2ZpZWxkLmluZGV4T2YoJy4kLicpID4gMCBhbmQgZm0ub2JqZWN0X2ZpZWxkLmluZGV4T2YoJy4kLicpID4gMFxuXHRcdFx0XHR3VGFibGVDb2RlID0gZm0ud29ya2Zsb3dfZmllbGQuc3BsaXQoJy4kLicpWzBdXG5cdFx0XHRcdG9UYWJsZUNvZGUgPSBmbS5vYmplY3RfZmllbGQuc3BsaXQoJy4kLicpWzBdXG5cdFx0XHRcdGlmIHJlY29yZC5oYXNPd25Qcm9wZXJ0eShvVGFibGVDb2RlKSBhbmQgXy5pc0FycmF5KHJlY29yZFtvVGFibGVDb2RlXSlcblx0XHRcdFx0XHR0YWJsZUZpZWxkQ29kZXMucHVzaChKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0XHR3b3JrZmxvd190YWJsZV9maWVsZF9jb2RlOiB3VGFibGVDb2RlLFxuXHRcdFx0XHRcdFx0b2JqZWN0X3RhYmxlX2ZpZWxkX2NvZGU6IG9UYWJsZUNvZGVcblx0XHRcdFx0XHR9KSlcblx0XHRcdFx0XHR0YWJsZUZpZWxkTWFwLnB1c2goZm0pXG5cblx0XHRcdCMg5aSE55CGbG9va3Vw57G75Z6L5a2X5q61XG5cdFx0XHRlbHNlIGlmIGZtLm9iamVjdF9maWVsZC5pbmRleE9mKCcuJykgPiAwIGFuZCBmbS5vYmplY3RfZmllbGQuaW5kZXhPZignLiQuJykgPT0gLTFcblx0XHRcdFx0b2JqZWN0RmllbGROYW1lID0gZm0ub2JqZWN0X2ZpZWxkLnNwbGl0KCcuJylbMF1cblx0XHRcdFx0bG9va3VwRmllbGROYW1lID0gZm0ub2JqZWN0X2ZpZWxkLnNwbGl0KCcuJylbMV1cblx0XHRcdFx0b2JqZWN0ID0gQ3JlYXRvci5nZXRPYmplY3QocmVjb3JkSWRzLm8sIHNwYWNlSWQpXG5cdFx0XHRcdGlmIG9iamVjdFxuXHRcdFx0XHRcdG9iamVjdEZpZWxkID0gb2JqZWN0LmZpZWxkc1tvYmplY3RGaWVsZE5hbWVdXG5cdFx0XHRcdFx0aWYgb2JqZWN0RmllbGQgJiYgKG9iamVjdEZpZWxkLnR5cGUgPT0gXCJsb29rdXBcIiB8fCBvYmplY3RGaWVsZC50eXBlID09IFwibWFzdGVyX2RldGFpbFwiKSAmJiAhb2JqZWN0RmllbGQubXVsdGlwbGVcblx0XHRcdFx0XHRcdGZpZWxkc09iaiA9IHt9XG5cdFx0XHRcdFx0XHRmaWVsZHNPYmpbbG9va3VwRmllbGROYW1lXSA9IDFcblx0XHRcdFx0XHRcdGxvb2t1cE9iamVjdCA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihvYmplY3RGaWVsZC5yZWZlcmVuY2VfdG8sIHNwYWNlSWQpLmZpbmRPbmUocmVjb3JkW29iamVjdEZpZWxkTmFtZV0sIHsgZmllbGRzOiBmaWVsZHNPYmogfSlcblx0XHRcdFx0XHRcdGlmIGxvb2t1cE9iamVjdFxuXHRcdFx0XHRcdFx0XHR2YWx1ZXNbZm0ud29ya2Zsb3dfZmllbGRdID0gbG9va3VwT2JqZWN0W2xvb2t1cEZpZWxkTmFtZV1cblxuXHRcdFx0ZWxzZSBpZiByZWNvcmQuaGFzT3duUHJvcGVydHkoZm0ub2JqZWN0X2ZpZWxkKVxuXHRcdFx0XHR2YWx1ZXNbZm0ud29ya2Zsb3dfZmllbGRdID0gcmVjb3JkW2ZtLm9iamVjdF9maWVsZF1cblxuXHRcdF8udW5pcSh0YWJsZUZpZWxkQ29kZXMpLmZvckVhY2ggKHRmYykgLT5cblx0XHRcdGMgPSBKU09OLnBhcnNlKHRmYylcblx0XHRcdHZhbHVlc1tjLndvcmtmbG93X3RhYmxlX2ZpZWxkX2NvZGVdID0gW11cblx0XHRcdHJlY29yZFtjLm9iamVjdF90YWJsZV9maWVsZF9jb2RlXS5mb3JFYWNoICh0cikgLT5cblx0XHRcdFx0bmV3VHIgPSB7fVxuXHRcdFx0XHRfLmVhY2ggdHIsICh2LCBrKSAtPlxuXHRcdFx0XHRcdHRhYmxlRmllbGRNYXAuZm9yRWFjaCAodGZtKSAtPlxuXHRcdFx0XHRcdFx0aWYgdGZtLm9iamVjdF9maWVsZCBpcyAoYy5vYmplY3RfdGFibGVfZmllbGRfY29kZSArICcuJC4nICsgaylcblx0XHRcdFx0XHRcdFx0d1RkQ29kZSA9IHRmbS53b3JrZmxvd19maWVsZC5zcGxpdCgnLiQuJylbMV1cblx0XHRcdFx0XHRcdFx0bmV3VHJbd1RkQ29kZV0gPSB2XG5cdFx0XHRcdGlmIG5vdCBfLmlzRW1wdHkobmV3VHIpXG5cdFx0XHRcdFx0dmFsdWVzW2Mud29ya2Zsb3dfdGFibGVfZmllbGRfY29kZV0ucHVzaChuZXdUcilcblxuXHRcdCMg5aaC5p6c6YWN572u5LqG6ISa5pys5YiZ5omn6KGM6ISa5pysXG5cdFx0aWYgb3cuZmllbGRfbWFwX3NjcmlwdFxuXHRcdFx0Xy5leHRlbmQodmFsdWVzLCB1dWZsb3dNYW5hZ2VyLmV2YWxGaWVsZE1hcFNjcmlwdChvdy5maWVsZF9tYXBfc2NyaXB0LCByZWNvcmRJZHMubywgc3BhY2VJZCwgcmVjb3JkSWRzLmlkc1swXSkpXG5cblx0IyDov4fmu6Tmjol2YWx1ZXPkuK3nmoTpnZ7ms5VrZXlcblx0ZmlsdGVyVmFsdWVzID0ge31cblx0Xy5lYWNoIF8ua2V5cyh2YWx1ZXMpLCAoayktPlxuXHRcdGlmIGZpZWxkQ29kZXMuaW5jbHVkZXMoaylcblx0XHRcdGZpbHRlclZhbHVlc1trXSA9IHZhbHVlc1trXVxuXG5cdHJldHVybiBmaWx0ZXJWYWx1ZXNcblxudXVmbG93TWFuYWdlci5ldmFsRmllbGRNYXBTY3JpcHQgPSAoZmllbGRfbWFwX3NjcmlwdCwgb2JqZWN0TmFtZSwgc3BhY2VJZCwgb2JqZWN0SWQpLT5cblx0cmVjb3JkID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdE5hbWUsIHNwYWNlSWQpLmZpbmRPbmUob2JqZWN0SWQpXG5cdHNjcmlwdCA9IFwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAocmVjb3JkKSB7IFwiICsgZmllbGRfbWFwX3NjcmlwdCArIFwiIH1cIlxuXHRmdW5jID0gX2V2YWwoc2NyaXB0LCBcImZpZWxkX21hcF9zY3JpcHRcIilcblx0dmFsdWVzID0gZnVuYyhyZWNvcmQpXG5cdGlmIF8uaXNPYmplY3QgdmFsdWVzXG5cdFx0cmV0dXJuIHZhbHVlc1xuXHRlbHNlXG5cdFx0Y29uc29sZS5lcnJvciBcImV2YWxGaWVsZE1hcFNjcmlwdDog6ISa5pys6L+U5Zue5YC857G75Z6L5LiN5piv5a+56LGhXCJcblx0cmV0dXJuIHt9XG5cblxuXG51dWZsb3dNYW5hZ2VyLmluaXRpYXRlQXR0YWNoID0gKHJlY29yZElkcywgc3BhY2VJZCwgaW5zSWQsIGFwcHJvdmVJZCkgLT5cblxuXHRDcmVhdG9yLkNvbGxlY3Rpb25zWydjbXNfZmlsZXMnXS5maW5kKHtcblx0XHRzcGFjZTogc3BhY2VJZCxcblx0XHRwYXJlbnQ6IHJlY29yZElkc1xuXHR9KS5mb3JFYWNoIChjZikgLT5cblx0XHRfLmVhY2ggY2YudmVyc2lvbnMsICh2ZXJzaW9uSWQsIGlkeCkgLT5cblx0XHRcdGYgPSBDcmVhdG9yLkNvbGxlY3Rpb25zWydjZnMuZmlsZXMuZmlsZXJlY29yZCddLmZpbmRPbmUodmVyc2lvbklkKVxuXHRcdFx0bmV3RmlsZSA9IG5ldyBGUy5GaWxlKClcblxuXHRcdFx0bmV3RmlsZS5hdHRhY2hEYXRhIGYuY3JlYXRlUmVhZFN0cmVhbSgnZmlsZXMnKSwge1xuXHRcdFx0XHRcdHR5cGU6IGYub3JpZ2luYWwudHlwZVxuXHRcdFx0fSwgKGVycikgLT5cblx0XHRcdFx0aWYgKGVycilcblx0XHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKGVyci5lcnJvciwgZXJyLnJlYXNvbilcblxuXHRcdFx0XHRuZXdGaWxlLm5hbWUoZi5uYW1lKCkpXG5cdFx0XHRcdG5ld0ZpbGUuc2l6ZShmLnNpemUoKSlcblx0XHRcdFx0bWV0YWRhdGEgPSB7XG5cdFx0XHRcdFx0b3duZXI6IGYubWV0YWRhdGEub3duZXIsXG5cdFx0XHRcdFx0b3duZXJfbmFtZTogZi5tZXRhZGF0YS5vd25lcl9uYW1lLFxuXHRcdFx0XHRcdHNwYWNlOiBzcGFjZUlkLFxuXHRcdFx0XHRcdGluc3RhbmNlOiBpbnNJZCxcblx0XHRcdFx0XHRhcHByb3ZlOiBhcHByb3ZlSWRcblx0XHRcdFx0XHRwYXJlbnQ6IGNmLl9pZFxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgaWR4IGlzIDBcblx0XHRcdFx0XHRtZXRhZGF0YS5jdXJyZW50ID0gdHJ1ZVxuXG5cdFx0XHRcdG5ld0ZpbGUubWV0YWRhdGEgPSBtZXRhZGF0YVxuXHRcdFx0XHRjZnMuaW5zdGFuY2VzLmluc2VydChuZXdGaWxlKVxuXG5cdHJldHVyblxuXG51dWZsb3dNYW5hZ2VyLmluaXRpYXRlUmVjb3JkSW5zdGFuY2VJbmZvID0gKHJlY29yZElkcywgaW5zSWQsIHNwYWNlSWQpIC0+XG5cdENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWNvcmRJZHMubywgc3BhY2VJZCkudXBkYXRlKHJlY29yZElkcy5pZHNbMF0sIHtcblx0XHQkcHVzaDoge1xuXHRcdFx0aW5zdGFuY2VzOiB7XG5cdFx0XHRcdCRlYWNoOiBbe1xuXHRcdFx0XHRcdF9pZDogaW5zSWQsXG5cdFx0XHRcdFx0c3RhdGU6ICdkcmFmdCdcblx0XHRcdFx0fV0sXG5cdFx0XHRcdCRwb3NpdGlvbjogMFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0JHNldDoge1xuXHRcdFx0bG9ja2VkOiB0cnVlXG5cdFx0XHRpbnN0YW5jZV9zdGF0ZTogJ2RyYWZ0J1xuXHRcdH1cblx0fSlcblxuXHRyZXR1cm5cblxudXVmbG93TWFuYWdlci5jaGVja0lzSW5BcHByb3ZhbCA9IChyZWNvcmRJZHMsIHNwYWNlSWQpIC0+XG5cdHJlY29yZCA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWNvcmRJZHMubywgc3BhY2VJZCkuZmluZE9uZSh7XG5cdFx0X2lkOiByZWNvcmRJZHMuaWRzWzBdLCBpbnN0YW5jZXM6IHsgJGV4aXN0czogdHJ1ZSB9XG5cdH0sIHsgZmllbGRzOiB7IGluc3RhbmNlczogMSB9IH0pXG5cblx0aWYgcmVjb3JkIGFuZCByZWNvcmQuaW5zdGFuY2VzWzBdLnN0YXRlIGlzbnQgJ2NvbXBsZXRlZCcgYW5kIENyZWF0b3IuQ29sbGVjdGlvbnMuaW5zdGFuY2VzLmZpbmQocmVjb3JkLmluc3RhbmNlc1swXS5faWQpLmNvdW50KCkgPiAwXG5cdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignZXJyb3IhJywgXCLmraTorrDlvZXlt7Llj5HotbfmtYHnqIvmraPlnKjlrqHmibnkuK3vvIzlvoXlrqHmibnnu5PmnZ/mlrnlj6/lj5HotbfkuIvkuIDmrKHlrqHmibnvvIFcIilcblxuXHRyZXR1cm5cblxuIiwidmFyIF9ldmFsOyAgICAgICAgICAgICAgIFxuXG5fZXZhbCA9IHJlcXVpcmUoJ2V2YWwnKTtcblxudXVmbG93TWFuYWdlciA9IHt9O1xuXG51dWZsb3dNYW5hZ2VyLmNoZWNrX2F1dGhvcml6YXRpb24gPSBmdW5jdGlvbihyZXEpIHtcbiAgdmFyIGF1dGhUb2tlbiwgaGFzaGVkVG9rZW4sIHF1ZXJ5LCB1c2VyLCB1c2VySWQ7XG4gIHF1ZXJ5ID0gcmVxLnF1ZXJ5O1xuICB1c2VySWQgPSBxdWVyeVtcIlgtVXNlci1JZFwiXTtcbiAgYXV0aFRva2VuID0gcXVlcnlbXCJYLUF1dGgtVG9rZW5cIl07XG4gIGlmICghdXNlcklkIHx8ICFhdXRoVG9rZW4pIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDQwMSwgJ1VuYXV0aG9yaXplZCcpO1xuICB9XG4gIGhhc2hlZFRva2VuID0gQWNjb3VudHMuX2hhc2hMb2dpblRva2VuKGF1dGhUb2tlbik7XG4gIHVzZXIgPSBNZXRlb3IudXNlcnMuZmluZE9uZSh7XG4gICAgX2lkOiB1c2VySWQsXG4gICAgXCJzZXJ2aWNlcy5yZXN1bWUubG9naW5Ub2tlbnMuaGFzaGVkVG9rZW5cIjogaGFzaGVkVG9rZW5cbiAgfSk7XG4gIGlmICghdXNlcikge1xuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNDAxLCAnVW5hdXRob3JpemVkJyk7XG4gIH1cbiAgcmV0dXJuIHVzZXI7XG59O1xuXG51dWZsb3dNYW5hZ2VyLmdldFNwYWNlID0gZnVuY3Rpb24oc3BhY2VfaWQpIHtcbiAgdmFyIHNwYWNlO1xuICBzcGFjZSA9IENyZWF0b3IuQ29sbGVjdGlvbnMuc3BhY2VzLmZpbmRPbmUoc3BhY2VfaWQpO1xuICBpZiAoIXNwYWNlKSB7XG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignZXJyb3IhJywgXCJzcGFjZV9pZOacieivr+aIluatpHNwYWNl5bey57uP6KKr5Yig6ZmkXCIpO1xuICB9XG4gIHJldHVybiBzcGFjZTtcbn07XG5cbnV1Zmxvd01hbmFnZXIuZ2V0RmxvdyA9IGZ1bmN0aW9uKGZsb3dfaWQpIHtcbiAgdmFyIGZsb3c7XG4gIGZsb3cgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLmZsb3dzLmZpbmRPbmUoZmxvd19pZCk7XG4gIGlmICghZmxvdykge1xuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2Vycm9yIScsIFwiaWTmnInor6/miJbmraTmtYHnqIvlt7Lnu4/ooqvliKDpmaRcIik7XG4gIH1cbiAgcmV0dXJuIGZsb3c7XG59O1xuXG51dWZsb3dNYW5hZ2VyLmdldFNwYWNlVXNlciA9IGZ1bmN0aW9uKHNwYWNlX2lkLCB1c2VyX2lkKSB7XG4gIHZhciBzcGFjZV91c2VyO1xuICBzcGFjZV91c2VyID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5zcGFjZV91c2Vycy5maW5kT25lKHtcbiAgICBzcGFjZTogc3BhY2VfaWQsXG4gICAgdXNlcjogdXNlcl9pZFxuICB9KTtcbiAgaWYgKCFzcGFjZV91c2VyKSB7XG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignZXJyb3IhJywgXCJ1c2VyX2lk5a+55bqU55qE55So5oi35LiN5bGe5LqO5b2T5YmNc3BhY2VcIik7XG4gIH1cbiAgcmV0dXJuIHNwYWNlX3VzZXI7XG59O1xuXG51dWZsb3dNYW5hZ2VyLmdldFNwYWNlVXNlck9yZ0luZm8gPSBmdW5jdGlvbihzcGFjZV91c2VyKSB7XG4gIHZhciBpbmZvLCBvcmc7XG4gIGluZm8gPSBuZXcgT2JqZWN0O1xuICBpbmZvLm9yZ2FuaXphdGlvbiA9IHNwYWNlX3VzZXIub3JnYW5pemF0aW9uO1xuICBvcmcgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLm9yZ2FuaXphdGlvbnMuZmluZE9uZShzcGFjZV91c2VyLm9yZ2FuaXphdGlvbiwge1xuICAgIGZpZWxkczoge1xuICAgICAgbmFtZTogMSxcbiAgICAgIGZ1bGxuYW1lOiAxXG4gICAgfVxuICB9KTtcbiAgaW5mby5vcmdhbml6YXRpb25fbmFtZSA9IG9yZy5uYW1lO1xuICBpbmZvLm9yZ2FuaXphdGlvbl9mdWxsbmFtZSA9IG9yZy5mdWxsbmFtZTtcbiAgcmV0dXJuIGluZm87XG59O1xuXG51dWZsb3dNYW5hZ2VyLmlzRmxvd0VuYWJsZWQgPSBmdW5jdGlvbihmbG93KSB7XG4gIGlmIChmbG93LnN0YXRlICE9PSBcImVuYWJsZWRcIikge1xuICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2Vycm9yIScsIFwi5rWB56iL5pyq5ZCv55SoLOaTjeS9nOWksei0pVwiKTtcbiAgfVxufTtcblxudXVmbG93TWFuYWdlci5pc0Zsb3dTcGFjZU1hdGNoZWQgPSBmdW5jdGlvbihmbG93LCBzcGFjZV9pZCkge1xuICBpZiAoZmxvdy5zcGFjZSAhPT0gc3BhY2VfaWQpIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCBcIua1geeoi+WSjOW3peS9nOWMuklE5LiN5Yy56YWNXCIpO1xuICB9XG59O1xuXG51dWZsb3dNYW5hZ2VyLmdldEZvcm0gPSBmdW5jdGlvbihmb3JtX2lkKSB7XG4gIHZhciBmb3JtO1xuICBmb3JtID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5mb3Jtcy5maW5kT25lKGZvcm1faWQpO1xuICBpZiAoIWZvcm0pIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCAn6KGo5Y2VSUTmnInor6/miJbmraTooajljZXlt7Lnu4/ooqvliKDpmaQnKTtcbiAgfVxuICByZXR1cm4gZm9ybTtcbn07XG5cbnV1Zmxvd01hbmFnZXIuZ2V0Q2F0ZWdvcnkgPSBmdW5jdGlvbihjYXRlZ29yeV9pZCkge1xuICByZXR1cm4gQ3JlYXRvci5Db2xsZWN0aW9ucy5jYXRlZ29yaWVzLmZpbmRPbmUoY2F0ZWdvcnlfaWQpO1xufTtcblxudXVmbG93TWFuYWdlci5jcmVhdGVfaW5zdGFuY2UgPSBmdW5jdGlvbihpbnN0YW5jZV9mcm9tX2NsaWVudCwgdXNlcl9pbmZvKSB7XG4gIHZhciBhcHByX29iaiwgYXBwcm92ZV9mcm9tX2NsaWVudCwgY2F0ZWdvcnksIGZsb3csIGZsb3dfaWQsIGZvcm0sIGluc19vYmosIG5ld19pbnNfaWQsIG5vdywgcGVybWlzc2lvbnMsIHNwYWNlLCBzcGFjZV9pZCwgc3BhY2VfdXNlciwgc3BhY2VfdXNlcl9vcmdfaW5mbywgc3RhcnRfc3RlcCwgdHJhY2VfZnJvbV9jbGllbnQsIHRyYWNlX29iaiwgdXNlcl9pZDtcbiAgY2hlY2soaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRcIl0sIFN0cmluZyk7XG4gIGNoZWNrKGluc3RhbmNlX2Zyb21fY2xpZW50W1wic3BhY2VcIl0sIFN0cmluZyk7XG4gIGNoZWNrKGluc3RhbmNlX2Zyb21fY2xpZW50W1wiZmxvd1wiXSwgU3RyaW5nKTtcbiAgY2hlY2soaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJyZWNvcmRfaWRzXCJdLCBbXG4gICAge1xuICAgICAgbzogU3RyaW5nLFxuICAgICAgaWRzOiBbU3RyaW5nXVxuICAgIH1cbiAgXSk7XG4gIHV1Zmxvd01hbmFnZXIuY2hlY2tJc0luQXBwcm92YWwoaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJyZWNvcmRfaWRzXCJdWzBdLCBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInNwYWNlXCJdKTtcbiAgc3BhY2VfaWQgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInNwYWNlXCJdO1xuICBmbG93X2lkID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJmbG93XCJdO1xuICB1c2VyX2lkID0gdXNlcl9pbmZvLl9pZDtcbiAgdHJhY2VfZnJvbV9jbGllbnQgPSBudWxsO1xuICBhcHByb3ZlX2Zyb21fY2xpZW50ID0gbnVsbDtcbiAgaWYgKGluc3RhbmNlX2Zyb21fY2xpZW50W1widHJhY2VzXCJdICYmIGluc3RhbmNlX2Zyb21fY2xpZW50W1widHJhY2VzXCJdWzBdKSB7XG4gICAgdHJhY2VfZnJvbV9jbGllbnQgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInRyYWNlc1wiXVswXTtcbiAgICBpZiAodHJhY2VfZnJvbV9jbGllbnRbXCJhcHByb3Zlc1wiXSAmJiB0cmFjZV9mcm9tX2NsaWVudFtcImFwcHJvdmVzXCJdWzBdKSB7XG4gICAgICBhcHByb3ZlX2Zyb21fY2xpZW50ID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJ0cmFjZXNcIl1bMF1bXCJhcHByb3Zlc1wiXVswXTtcbiAgICB9XG4gIH1cbiAgc3BhY2UgPSB1dWZsb3dNYW5hZ2VyLmdldFNwYWNlKHNwYWNlX2lkKTtcbiAgZmxvdyA9IHV1Zmxvd01hbmFnZXIuZ2V0RmxvdyhmbG93X2lkKTtcbiAgc3BhY2VfdXNlciA9IHV1Zmxvd01hbmFnZXIuZ2V0U3BhY2VVc2VyKHNwYWNlX2lkLCB1c2VyX2lkKTtcbiAgc3BhY2VfdXNlcl9vcmdfaW5mbyA9IHV1Zmxvd01hbmFnZXIuZ2V0U3BhY2VVc2VyT3JnSW5mbyhzcGFjZV91c2VyKTtcbiAgdXVmbG93TWFuYWdlci5pc0Zsb3dFbmFibGVkKGZsb3cpO1xuICB1dWZsb3dNYW5hZ2VyLmlzRmxvd1NwYWNlTWF0Y2hlZChmbG93LCBzcGFjZV9pZCk7XG4gIGZvcm0gPSB1dWZsb3dNYW5hZ2VyLmdldEZvcm0oZmxvdy5mb3JtKTtcbiAgcGVybWlzc2lvbnMgPSBwZXJtaXNzaW9uTWFuYWdlci5nZXRGbG93UGVybWlzc2lvbnMoZmxvd19pZCwgdXNlcl9pZCk7XG4gIGlmICghcGVybWlzc2lvbnMuaW5jbHVkZXMoXCJhZGRcIikpIHtcbiAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdlcnJvciEnLCBcIuW9k+WJjeeUqOaIt+ayoeacieatpOa1geeoi+eahOaWsOW7uuadg+mZkFwiKTtcbiAgfVxuICBub3cgPSBuZXcgRGF0ZTtcbiAgaW5zX29iaiA9IHt9O1xuICBpbnNfb2JqLl9pZCA9IENyZWF0b3IuQ29sbGVjdGlvbnMuaW5zdGFuY2VzLl9tYWtlTmV3SUQoKTtcbiAgaW5zX29iai5zcGFjZSA9IHNwYWNlX2lkO1xuICBpbnNfb2JqLmZsb3cgPSBmbG93X2lkO1xuICBpbnNfb2JqLmZsb3dfdmVyc2lvbiA9IGZsb3cuY3VycmVudC5faWQ7XG4gIGluc19vYmouZm9ybSA9IGZsb3cuZm9ybTtcbiAgaW5zX29iai5mb3JtX3ZlcnNpb24gPSBmbG93LmN1cnJlbnQuZm9ybV92ZXJzaW9uO1xuICBpbnNfb2JqLm5hbWUgPSBmbG93Lm5hbWU7XG4gIGluc19vYmouc3VibWl0dGVyID0gdXNlcl9pZDtcbiAgaW5zX29iai5zdWJtaXR0ZXJfbmFtZSA9IHVzZXJfaW5mby5uYW1lO1xuICBpbnNfb2JqLmFwcGxpY2FudCA9IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50XCJdID8gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRcIl0gOiB1c2VyX2lkO1xuICBpbnNfb2JqLmFwcGxpY2FudF9uYW1lID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfbmFtZVwiXSA/IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X25hbWVcIl0gOiB1c2VyX2luZm8ubmFtZTtcbiAgaW5zX29iai5hcHBsaWNhbnRfb3JnYW5pemF0aW9uID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfb3JnYW5pemF0aW9uXCJdID8gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfb3JnYW5pemF0aW9uXCJdIDogc3BhY2VfdXNlci5vcmdhbml6YXRpb247XG4gIGluc19vYmouYXBwbGljYW50X29yZ2FuaXphdGlvbl9uYW1lID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfb3JnYW5pemF0aW9uX25hbWVcIl0gPyBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudF9vcmdhbml6YXRpb25fbmFtZVwiXSA6IHNwYWNlX3VzZXJfb3JnX2luZm8ub3JnYW5pemF0aW9uX25hbWU7XG4gIGluc19vYmouYXBwbGljYW50X29yZ2FuaXphdGlvbl9mdWxsbmFtZSA9IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X29yZ2FuaXphdGlvbl9mdWxsbmFtZVwiXSA/IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X29yZ2FuaXphdGlvbl9mdWxsbmFtZVwiXSA6IHNwYWNlX3VzZXJfb3JnX2luZm8ub3JnYW5pemF0aW9uX2Z1bGxuYW1lO1xuICBpbnNfb2JqLmFwcGxpY2FudF9jb21wYW55ID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfY29tcGFueVwiXSA/IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X2NvbXBhbnlcIl0gOiBzcGFjZV91c2VyLmNvbXBhbnlfaWQ7XG4gIGluc19vYmouc3RhdGUgPSAnZHJhZnQnO1xuICBpbnNfb2JqLmNvZGUgPSAnJztcbiAgaW5zX29iai5pc19hcmNoaXZlZCA9IGZhbHNlO1xuICBpbnNfb2JqLmlzX2RlbGV0ZWQgPSBmYWxzZTtcbiAgaW5zX29iai5jcmVhdGVkID0gbm93O1xuICBpbnNfb2JqLmNyZWF0ZWRfYnkgPSB1c2VyX2lkO1xuICBpbnNfb2JqLm1vZGlmaWVkID0gbm93O1xuICBpbnNfb2JqLm1vZGlmaWVkX2J5ID0gdXNlcl9pZDtcbiAgaW5zX29iai52YWx1ZXMgPSBuZXcgT2JqZWN0O1xuICBpbnNfb2JqLnJlY29yZF9pZHMgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcInJlY29yZF9pZHNcIl07XG4gIGlmIChzcGFjZV91c2VyLmNvbXBhbnlfaWQpIHtcbiAgICBpbnNfb2JqLmNvbXBhbnlfaWQgPSBzcGFjZV91c2VyLmNvbXBhbnlfaWQ7XG4gIH1cbiAgdHJhY2Vfb2JqID0ge307XG4gIHRyYWNlX29iai5faWQgPSBuZXcgTW9uZ28uT2JqZWN0SUQoKS5fc3RyO1xuICB0cmFjZV9vYmouaW5zdGFuY2UgPSBpbnNfb2JqLl9pZDtcbiAgdHJhY2Vfb2JqLmlzX2ZpbmlzaGVkID0gZmFsc2U7XG4gIHN0YXJ0X3N0ZXAgPSBfLmZpbmQoZmxvdy5jdXJyZW50LnN0ZXBzLCBmdW5jdGlvbihzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXAuc3RlcF90eXBlID09PSAnc3RhcnQnO1xuICB9KTtcbiAgdHJhY2Vfb2JqLnN0ZXAgPSBzdGFydF9zdGVwLl9pZDtcbiAgdHJhY2Vfb2JqLm5hbWUgPSBzdGFydF9zdGVwLm5hbWU7XG4gIHRyYWNlX29iai5zdGFydF9kYXRlID0gbm93O1xuICBhcHByX29iaiA9IHt9O1xuICBhcHByX29iai5faWQgPSBuZXcgTW9uZ28uT2JqZWN0SUQoKS5fc3RyO1xuICBhcHByX29iai5pbnN0YW5jZSA9IGluc19vYmouX2lkO1xuICBhcHByX29iai50cmFjZSA9IHRyYWNlX29iai5faWQ7XG4gIGFwcHJfb2JqLmlzX2ZpbmlzaGVkID0gZmFsc2U7XG4gIGFwcHJfb2JqLnVzZXIgPSBpbnN0YW5jZV9mcm9tX2NsaWVudFtcImFwcGxpY2FudFwiXSA/IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50XCJdIDogdXNlcl9pZDtcbiAgYXBwcl9vYmoudXNlcl9uYW1lID0gaW5zdGFuY2VfZnJvbV9jbGllbnRbXCJhcHBsaWNhbnRfbmFtZVwiXSA/IGluc3RhbmNlX2Zyb21fY2xpZW50W1wiYXBwbGljYW50X25hbWVcIl0gOiB1c2VyX2luZm8ubmFtZTtcbiAgYXBwcl9vYmouaGFuZGxlciA9IHVzZXJfaWQ7XG4gIGFwcHJfb2JqLmhhbmRsZXJfbmFtZSA9IHVzZXJfaW5mby5uYW1lO1xuICBhcHByX29iai5oYW5kbGVyX29yZ2FuaXphdGlvbiA9IHNwYWNlX3VzZXIub3JnYW5pemF0aW9uO1xuICBhcHByX29iai5oYW5kbGVyX29yZ2FuaXphdGlvbl9uYW1lID0gc3BhY2VfdXNlcl9vcmdfaW5mby5uYW1lO1xuICBhcHByX29iai5oYW5kbGVyX29yZ2FuaXphdGlvbl9mdWxsbmFtZSA9IHNwYWNlX3VzZXJfb3JnX2luZm8uZnVsbG5hbWU7XG4gIGFwcHJfb2JqLnR5cGUgPSAnZHJhZnQnO1xuICBhcHByX29iai5zdGFydF9kYXRlID0gbm93O1xuICBhcHByX29iai5yZWFkX2RhdGUgPSBub3c7XG4gIGFwcHJfb2JqLmlzX3JlYWQgPSB0cnVlO1xuICBhcHByX29iai5pc19lcnJvciA9IGZhbHNlO1xuICBhcHByX29iai5kZXNjcmlwdGlvbiA9ICcnO1xuICBhcHByX29iai52YWx1ZXMgPSB1dWZsb3dNYW5hZ2VyLmluaXRpYXRlVmFsdWVzKGluc19vYmoucmVjb3JkX2lkc1swXSwgZmxvd19pZCwgc3BhY2VfaWQsIGZvcm0uY3VycmVudC5maWVsZHMpO1xuICB0cmFjZV9vYmouYXBwcm92ZXMgPSBbYXBwcl9vYmpdO1xuICBpbnNfb2JqLnRyYWNlcyA9IFt0cmFjZV9vYmpdO1xuICBpbnNfb2JqLmluYm94X3VzZXJzID0gaW5zdGFuY2VfZnJvbV9jbGllbnQuaW5ib3hfdXNlcnMgfHwgW107XG4gIGluc19vYmouY3VycmVudF9zdGVwX25hbWUgPSBzdGFydF9zdGVwLm5hbWU7XG4gIGlmIChmbG93LmF1dG9fcmVtaW5kID09PSB0cnVlKSB7XG4gICAgaW5zX29iai5hdXRvX3JlbWluZCA9IHRydWU7XG4gIH1cbiAgaW5zX29iai5mbG93X25hbWUgPSBmbG93Lm5hbWU7XG4gIGlmIChmb3JtLmNhdGVnb3J5KSB7XG4gICAgY2F0ZWdvcnkgPSB1dWZsb3dNYW5hZ2VyLmdldENhdGVnb3J5KGZvcm0uY2F0ZWdvcnkpO1xuICAgIGlmIChjYXRlZ29yeSkge1xuICAgICAgaW5zX29iai5jYXRlZ29yeV9uYW1lID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgIGluc19vYmouY2F0ZWdvcnkgPSBjYXRlZ29yeS5faWQ7XG4gICAgfVxuICB9XG4gIG5ld19pbnNfaWQgPSBDcmVhdG9yLkNvbGxlY3Rpb25zLmluc3RhbmNlcy5pbnNlcnQoaW5zX29iaik7XG4gIHV1Zmxvd01hbmFnZXIuaW5pdGlhdGVBdHRhY2goaW5zX29iai5yZWNvcmRfaWRzWzBdLCBzcGFjZV9pZCwgaW5zX29iai5faWQsIGFwcHJfb2JqLl9pZCk7XG4gIHV1Zmxvd01hbmFnZXIuaW5pdGlhdGVSZWNvcmRJbnN0YW5jZUluZm8oaW5zX29iai5yZWNvcmRfaWRzWzBdLCBuZXdfaW5zX2lkLCBzcGFjZV9pZCk7XG4gIHJldHVybiBuZXdfaW5zX2lkO1xufTtcblxudXVmbG93TWFuYWdlci5pbml0aWF0ZVZhbHVlcyA9IGZ1bmN0aW9uKHJlY29yZElkcywgZmxvd0lkLCBzcGFjZUlkLCBmaWVsZHMpIHtcbiAgdmFyIGZpZWxkQ29kZXMsIGZpbHRlclZhbHVlcywgb3csIHJlY29yZCwgdGFibGVGaWVsZENvZGVzLCB0YWJsZUZpZWxkTWFwLCB2YWx1ZXM7XG4gIGZpZWxkQ29kZXMgPSBbXTtcbiAgXy5lYWNoKGZpZWxkcywgZnVuY3Rpb24oZikge1xuICAgIGlmIChmLnR5cGUgPT09ICdzZWN0aW9uJykge1xuICAgICAgcmV0dXJuIF8uZWFjaChmLmZpZWxkcywgZnVuY3Rpb24oZmYpIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkQ29kZXMucHVzaChmZi5jb2RlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmllbGRDb2Rlcy5wdXNoKGYuY29kZSk7XG4gICAgfVxuICB9KTtcbiAgdmFsdWVzID0ge307XG4gIG93ID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5vYmplY3Rfd29ya2Zsb3dzLmZpbmRPbmUoe1xuICAgIG9iamVjdF9uYW1lOiByZWNvcmRJZHMubyxcbiAgICBmbG93X2lkOiBmbG93SWRcbiAgfSk7XG4gIHJlY29yZCA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWNvcmRJZHMubywgc3BhY2VJZCkuZmluZE9uZShyZWNvcmRJZHMuaWRzWzBdKTtcbiAgaWYgKG93ICYmIHJlY29yZCkge1xuICAgIHRhYmxlRmllbGRDb2RlcyA9IFtdO1xuICAgIHRhYmxlRmllbGRNYXAgPSBbXTtcbiAgICBvdy5maWVsZF9tYXAuZm9yRWFjaChmdW5jdGlvbihmbSkge1xuICAgICAgdmFyIGZpZWxkc09iaiwgbG9va3VwRmllbGROYW1lLCBsb29rdXBPYmplY3QsIG9UYWJsZUNvZGUsIG9iamVjdCwgb2JqZWN0RmllbGQsIG9iamVjdEZpZWxkTmFtZSwgd1RhYmxlQ29kZTtcbiAgICAgIGlmIChmbS53b3JrZmxvd19maWVsZC5pbmRleE9mKCcuJC4nKSA+IDAgJiYgZm0ub2JqZWN0X2ZpZWxkLmluZGV4T2YoJy4kLicpID4gMCkge1xuICAgICAgICB3VGFibGVDb2RlID0gZm0ud29ya2Zsb3dfZmllbGQuc3BsaXQoJy4kLicpWzBdO1xuICAgICAgICBvVGFibGVDb2RlID0gZm0ub2JqZWN0X2ZpZWxkLnNwbGl0KCcuJC4nKVswXTtcbiAgICAgICAgaWYgKHJlY29yZC5oYXNPd25Qcm9wZXJ0eShvVGFibGVDb2RlKSAmJiBfLmlzQXJyYXkocmVjb3JkW29UYWJsZUNvZGVdKSkge1xuICAgICAgICAgIHRhYmxlRmllbGRDb2Rlcy5wdXNoKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHdvcmtmbG93X3RhYmxlX2ZpZWxkX2NvZGU6IHdUYWJsZUNvZGUsXG4gICAgICAgICAgICBvYmplY3RfdGFibGVfZmllbGRfY29kZTogb1RhYmxlQ29kZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICByZXR1cm4gdGFibGVGaWVsZE1hcC5wdXNoKGZtKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChmbS5vYmplY3RfZmllbGQuaW5kZXhPZignLicpID4gMCAmJiBmbS5vYmplY3RfZmllbGQuaW5kZXhPZignLiQuJykgPT09IC0xKSB7XG4gICAgICAgIG9iamVjdEZpZWxkTmFtZSA9IGZtLm9iamVjdF9maWVsZC5zcGxpdCgnLicpWzBdO1xuICAgICAgICBsb29rdXBGaWVsZE5hbWUgPSBmbS5vYmplY3RfZmllbGQuc3BsaXQoJy4nKVsxXTtcbiAgICAgICAgb2JqZWN0ID0gQ3JlYXRvci5nZXRPYmplY3QocmVjb3JkSWRzLm8sIHNwYWNlSWQpO1xuICAgICAgICBpZiAob2JqZWN0KSB7XG4gICAgICAgICAgb2JqZWN0RmllbGQgPSBvYmplY3QuZmllbGRzW29iamVjdEZpZWxkTmFtZV07XG4gICAgICAgICAgaWYgKG9iamVjdEZpZWxkICYmIChvYmplY3RGaWVsZC50eXBlID09PSBcImxvb2t1cFwiIHx8IG9iamVjdEZpZWxkLnR5cGUgPT09IFwibWFzdGVyX2RldGFpbFwiKSAmJiAhb2JqZWN0RmllbGQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGZpZWxkc09iaiA9IHt9O1xuICAgICAgICAgICAgZmllbGRzT2JqW2xvb2t1cEZpZWxkTmFtZV0gPSAxO1xuICAgICAgICAgICAgbG9va3VwT2JqZWN0ID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKG9iamVjdEZpZWxkLnJlZmVyZW5jZV90bywgc3BhY2VJZCkuZmluZE9uZShyZWNvcmRbb2JqZWN0RmllbGROYW1lXSwge1xuICAgICAgICAgICAgICBmaWVsZHM6IGZpZWxkc09ialxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobG9va3VwT2JqZWN0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZXNbZm0ud29ya2Zsb3dfZmllbGRdID0gbG9va3VwT2JqZWN0W2xvb2t1cEZpZWxkTmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC5oYXNPd25Qcm9wZXJ0eShmbS5vYmplY3RfZmllbGQpKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZXNbZm0ud29ya2Zsb3dfZmllbGRdID0gcmVjb3JkW2ZtLm9iamVjdF9maWVsZF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgXy51bmlxKHRhYmxlRmllbGRDb2RlcykuZm9yRWFjaChmdW5jdGlvbih0ZmMpIHtcbiAgICAgIHZhciBjO1xuICAgICAgYyA9IEpTT04ucGFyc2UodGZjKTtcbiAgICAgIHZhbHVlc1tjLndvcmtmbG93X3RhYmxlX2ZpZWxkX2NvZGVdID0gW107XG4gICAgICByZXR1cm4gcmVjb3JkW2Mub2JqZWN0X3RhYmxlX2ZpZWxkX2NvZGVdLmZvckVhY2goZnVuY3Rpb24odHIpIHtcbiAgICAgICAgdmFyIG5ld1RyO1xuICAgICAgICBuZXdUciA9IHt9O1xuICAgICAgICBfLmVhY2godHIsIGZ1bmN0aW9uKHYsIGspIHtcbiAgICAgICAgICByZXR1cm4gdGFibGVGaWVsZE1hcC5mb3JFYWNoKGZ1bmN0aW9uKHRmbSkge1xuICAgICAgICAgICAgdmFyIHdUZENvZGU7XG4gICAgICAgICAgICBpZiAodGZtLm9iamVjdF9maWVsZCA9PT0gKGMub2JqZWN0X3RhYmxlX2ZpZWxkX2NvZGUgKyAnLiQuJyArIGspKSB7XG4gICAgICAgICAgICAgIHdUZENvZGUgPSB0Zm0ud29ya2Zsb3dfZmllbGQuc3BsaXQoJy4kLicpWzFdO1xuICAgICAgICAgICAgICByZXR1cm4gbmV3VHJbd1RkQ29kZV0gPSB2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFfLmlzRW1wdHkobmV3VHIpKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlc1tjLndvcmtmbG93X3RhYmxlX2ZpZWxkX2NvZGVdLnB1c2gobmV3VHIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAob3cuZmllbGRfbWFwX3NjcmlwdCkge1xuICAgICAgXy5leHRlbmQodmFsdWVzLCB1dWZsb3dNYW5hZ2VyLmV2YWxGaWVsZE1hcFNjcmlwdChvdy5maWVsZF9tYXBfc2NyaXB0LCByZWNvcmRJZHMubywgc3BhY2VJZCwgcmVjb3JkSWRzLmlkc1swXSkpO1xuICAgIH1cbiAgfVxuICBmaWx0ZXJWYWx1ZXMgPSB7fTtcbiAgXy5lYWNoKF8ua2V5cyh2YWx1ZXMpLCBmdW5jdGlvbihrKSB7XG4gICAgaWYgKGZpZWxkQ29kZXMuaW5jbHVkZXMoaykpIHtcbiAgICAgIHJldHVybiBmaWx0ZXJWYWx1ZXNba10gPSB2YWx1ZXNba107XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGZpbHRlclZhbHVlcztcbn07XG5cbnV1Zmxvd01hbmFnZXIuZXZhbEZpZWxkTWFwU2NyaXB0ID0gZnVuY3Rpb24oZmllbGRfbWFwX3NjcmlwdCwgb2JqZWN0TmFtZSwgc3BhY2VJZCwgb2JqZWN0SWQpIHtcbiAgdmFyIGZ1bmMsIHJlY29yZCwgc2NyaXB0LCB2YWx1ZXM7XG4gIHJlY29yZCA9IENyZWF0b3IuZ2V0Q29sbGVjdGlvbihvYmplY3ROYW1lLCBzcGFjZUlkKS5maW5kT25lKG9iamVjdElkKTtcbiAgc2NyaXB0ID0gXCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChyZWNvcmQpIHsgXCIgKyBmaWVsZF9tYXBfc2NyaXB0ICsgXCIgfVwiO1xuICBmdW5jID0gX2V2YWwoc2NyaXB0LCBcImZpZWxkX21hcF9zY3JpcHRcIik7XG4gIHZhbHVlcyA9IGZ1bmMocmVjb3JkKTtcbiAgaWYgKF8uaXNPYmplY3QodmFsdWVzKSkge1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcImV2YWxGaWVsZE1hcFNjcmlwdDog6ISa5pys6L+U5Zue5YC857G75Z6L5LiN5piv5a+56LGhXCIpO1xuICB9XG4gIHJldHVybiB7fTtcbn07XG5cbnV1Zmxvd01hbmFnZXIuaW5pdGlhdGVBdHRhY2ggPSBmdW5jdGlvbihyZWNvcmRJZHMsIHNwYWNlSWQsIGluc0lkLCBhcHByb3ZlSWQpIHtcbiAgQ3JlYXRvci5Db2xsZWN0aW9uc1snY21zX2ZpbGVzJ10uZmluZCh7XG4gICAgc3BhY2U6IHNwYWNlSWQsXG4gICAgcGFyZW50OiByZWNvcmRJZHNcbiAgfSkuZm9yRWFjaChmdW5jdGlvbihjZikge1xuICAgIHJldHVybiBfLmVhY2goY2YudmVyc2lvbnMsIGZ1bmN0aW9uKHZlcnNpb25JZCwgaWR4KSB7XG4gICAgICB2YXIgZiwgbmV3RmlsZTtcbiAgICAgIGYgPSBDcmVhdG9yLkNvbGxlY3Rpb25zWydjZnMuZmlsZXMuZmlsZXJlY29yZCddLmZpbmRPbmUodmVyc2lvbklkKTtcbiAgICAgIG5ld0ZpbGUgPSBuZXcgRlMuRmlsZSgpO1xuICAgICAgcmV0dXJuIG5ld0ZpbGUuYXR0YWNoRGF0YShmLmNyZWF0ZVJlYWRTdHJlYW0oJ2ZpbGVzJyksIHtcbiAgICAgICAgdHlwZTogZi5vcmlnaW5hbC50eXBlXG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhO1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcihlcnIuZXJyb3IsIGVyci5yZWFzb24pO1xuICAgICAgICB9XG4gICAgICAgIG5ld0ZpbGUubmFtZShmLm5hbWUoKSk7XG4gICAgICAgIG5ld0ZpbGUuc2l6ZShmLnNpemUoKSk7XG4gICAgICAgIG1ldGFkYXRhID0ge1xuICAgICAgICAgIG93bmVyOiBmLm1ldGFkYXRhLm93bmVyLFxuICAgICAgICAgIG93bmVyX25hbWU6IGYubWV0YWRhdGEub3duZXJfbmFtZSxcbiAgICAgICAgICBzcGFjZTogc3BhY2VJZCxcbiAgICAgICAgICBpbnN0YW5jZTogaW5zSWQsXG4gICAgICAgICAgYXBwcm92ZTogYXBwcm92ZUlkLFxuICAgICAgICAgIHBhcmVudDogY2YuX2lkXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpZHggPT09IDApIHtcbiAgICAgICAgICBtZXRhZGF0YS5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBuZXdGaWxlLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIHJldHVybiBjZnMuaW5zdGFuY2VzLmluc2VydChuZXdGaWxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnV1Zmxvd01hbmFnZXIuaW5pdGlhdGVSZWNvcmRJbnN0YW5jZUluZm8gPSBmdW5jdGlvbihyZWNvcmRJZHMsIGluc0lkLCBzcGFjZUlkKSB7XG4gIENyZWF0b3IuZ2V0Q29sbGVjdGlvbihyZWNvcmRJZHMubywgc3BhY2VJZCkudXBkYXRlKHJlY29yZElkcy5pZHNbMF0sIHtcbiAgICAkcHVzaDoge1xuICAgICAgaW5zdGFuY2VzOiB7XG4gICAgICAgICRlYWNoOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgX2lkOiBpbnNJZCxcbiAgICAgICAgICAgIHN0YXRlOiAnZHJhZnQnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICAkcG9zaXRpb246IDBcbiAgICAgIH1cbiAgICB9LFxuICAgICRzZXQ6IHtcbiAgICAgIGxvY2tlZDogdHJ1ZSxcbiAgICAgIGluc3RhbmNlX3N0YXRlOiAnZHJhZnQnXG4gICAgfVxuICB9KTtcbn07XG5cbnV1Zmxvd01hbmFnZXIuY2hlY2tJc0luQXBwcm92YWwgPSBmdW5jdGlvbihyZWNvcmRJZHMsIHNwYWNlSWQpIHtcbiAgdmFyIHJlY29yZDtcbiAgcmVjb3JkID0gQ3JlYXRvci5nZXRDb2xsZWN0aW9uKHJlY29yZElkcy5vLCBzcGFjZUlkKS5maW5kT25lKHtcbiAgICBfaWQ6IHJlY29yZElkcy5pZHNbMF0sXG4gICAgaW5zdGFuY2VzOiB7XG4gICAgICAkZXhpc3RzOiB0cnVlXG4gICAgfVxuICB9LCB7XG4gICAgZmllbGRzOiB7XG4gICAgICBpbnN0YW5jZXM6IDFcbiAgICB9XG4gIH0pO1xuICBpZiAocmVjb3JkICYmIHJlY29yZC5pbnN0YW5jZXNbMF0uc3RhdGUgIT09ICdjb21wbGV0ZWQnICYmIENyZWF0b3IuQ29sbGVjdGlvbnMuaW5zdGFuY2VzLmZpbmQocmVjb3JkLmluc3RhbmNlc1swXS5faWQpLmNvdW50KCkgPiAwKSB7XG4gICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcignZXJyb3IhJywgXCLmraTorrDlvZXlt7Llj5HotbfmtYHnqIvmraPlnKjlrqHmibnkuK3vvIzlvoXlrqHmibnnu5PmnZ/mlrnlj6/lj5HotbfkuIvkuIDmrKHlrqHmibnvvIFcIik7XG4gIH1cbn07XG4iLCJCdXNib3kgPSByZXF1aXJlKCdidXNib3knKTtcbkZpYmVyID0gcmVxdWlyZSgnZmliZXJzJyk7XG5cbkpzb25Sb3V0ZXMucGFyc2VGaWxlcyA9IChyZXEsIHJlcywgbmV4dCkgLT5cblx0XHRmaWxlcyA9IFtdOyAjIFN0b3JlIGZpbGVzIGluIGFuIGFycmF5IGFuZCB0aGVuIHBhc3MgdGhlbSB0byByZXF1ZXN0LlxuXHRcdGltYWdlID0ge307ICMgY3JhdGUgYW4gaW1hZ2Ugb2JqZWN0XG5cblx0XHRpZiAocmVxLm1ldGhvZCA9PSBcIlBPU1RcIilcblx0XHRcdGJ1c2JveSA9IG5ldyBCdXNib3koeyBoZWFkZXJzOiByZXEuaGVhZGVycyB9KTtcblx0XHRcdGJ1c2JveS5vbiBcImZpbGVcIiwgIChmaWVsZG5hbWUsIGZpbGUsIGZpbGVuYW1lLCBlbmNvZGluZywgbWltZXR5cGUpIC0+XG5cdFx0XHRcdGltYWdlLm1pbWVUeXBlID0gbWltZXR5cGU7XG5cdFx0XHRcdGltYWdlLmVuY29kaW5nID0gZW5jb2Rpbmc7XG5cdFx0XHRcdGltYWdlLmZpbGVuYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0IyBidWZmZXIgdGhlIHJlYWQgY2h1bmtzXG5cdFx0XHRcdGJ1ZmZlcnMgPSBbXTtcblxuXHRcdFx0XHRmaWxlLm9uICdkYXRhJywgKGRhdGEpIC0+XG5cdFx0XHRcdFx0YnVmZmVycy5wdXNoKGRhdGEpO1xuXG5cdFx0XHRcdGZpbGUub24gJ2VuZCcsICgpIC0+XG5cdFx0XHRcdFx0IyBjb25jYXQgdGhlIGNodW5rc1xuXHRcdFx0XHRcdGltYWdlLmRhdGEgPSBCdWZmZXIuY29uY2F0KGJ1ZmZlcnMpO1xuXHRcdFx0XHRcdCMgcHVzaCB0aGUgaW1hZ2Ugb2JqZWN0IHRvIHRoZSBmaWxlIGFycmF5XG5cdFx0XHRcdFx0ZmlsZXMucHVzaChpbWFnZSk7XG5cblxuXHRcdFx0YnVzYm95Lm9uIFwiZmllbGRcIiwgKGZpZWxkbmFtZSwgdmFsdWUpIC0+XG5cdFx0XHRcdHJlcS5ib2R5W2ZpZWxkbmFtZV0gPSB2YWx1ZTtcblxuXHRcdFx0YnVzYm95Lm9uIFwiZmluaXNoXCIsICAoKSAtPlxuXHRcdFx0XHQjIFBhc3MgdGhlIGZpbGUgYXJyYXkgdG9nZXRoZXIgd2l0aCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRyZXEuZmlsZXMgPSBmaWxlcztcblxuXHRcdFx0XHRGaWJlciAoKS0+XG5cdFx0XHRcdFx0bmV4dCgpO1xuXHRcdFx0XHQucnVuKCk7XG5cblx0XHRcdCMgUGFzcyByZXF1ZXN0IHRvIGJ1c2JveVxuXHRcdFx0cmVxLnBpcGUoYnVzYm95KTtcblxuXHRcdGVsc2Vcblx0XHRcdG5leHQoKTtcblxuSnNvblJvdXRlcy5hZGQgXCJwb3N0XCIsIFwiL3MzL1wiLCAgKHJlcSwgcmVzLCBuZXh0KSAtPlxuXG5cdEpzb25Sb3V0ZXMucGFyc2VGaWxlcyByZXEsIHJlcywgKCktPlxuXHRcdGNvbGxlY3Rpb24gPSBjZnMuZmlsZXNcblx0XHRmaWxlQ29sbGVjdGlvbiA9IENyZWF0b3IuZ2V0T2JqZWN0KFwiY21zX2ZpbGVzXCIpLmRiXG5cblx0XHRpZiByZXEuZmlsZXMgYW5kIHJlcS5maWxlc1swXVxuXG5cdFx0XHRuZXdGaWxlID0gbmV3IEZTLkZpbGUoKTtcblx0XHRcdG5ld0ZpbGUuYXR0YWNoRGF0YSByZXEuZmlsZXNbMF0uZGF0YSwge3R5cGU6IHJlcS5maWxlc1swXS5taW1lVHlwZX0sIChlcnIpIC0+XG5cdFx0XHRcdGZpbGVuYW1lID0gcmVxLmZpbGVzWzBdLmZpbGVuYW1lXG5cdFx0XHRcdGV4dGVudGlvbiA9IGZpbGVuYW1lLnNwbGl0KCcuJykucG9wKClcblx0XHRcdFx0aWYgW1wiaW1hZ2UuanBnXCIsIFwiaW1hZ2UuZ2lmXCIsIFwiaW1hZ2UuanBlZ1wiLCBcImltYWdlLnBuZ1wiXS5pbmNsdWRlcyhmaWxlbmFtZS50b0xvd2VyQ2FzZSgpKVxuXHRcdFx0XHRcdGZpbGVuYW1lID0gXCJpbWFnZS1cIiArIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVlNTURESEhtbXNzJykgKyBcIi5cIiArIGV4dGVudGlvblxuXG5cdFx0XHRcdGJvZHkgPSByZXEuYm9keVxuXHRcdFx0XHR0cnlcblx0XHRcdFx0XHRpZiBib2R5ICYmIChib2R5Wyd1cGxvYWRfZnJvbSddIGlzIFwiSUVcIiBvciBib2R5Wyd1cGxvYWRfZnJvbSddIGlzIFwibm9kZVwiKVxuXHRcdFx0XHRcdFx0ZmlsZW5hbWUgPSBkZWNvZGVVUklDb21wb25lbnQoZmlsZW5hbWUpXG5cdFx0XHRcdGNhdGNoIGVcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGZpbGVuYW1lKVxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IgZVxuXHRcdFx0XHRcdGZpbGVuYW1lID0gZmlsZW5hbWUucmVwbGFjZSgvJS9nLCBcIi1cIilcblxuXHRcdFx0XHRuZXdGaWxlLm5hbWUoZmlsZW5hbWUpXG5cblx0XHRcdFx0aWYgYm9keSAmJiBib2R5Wydvd25lciddICYmIGJvZHlbJ3NwYWNlJ10gJiYgYm9keVsncmVjb3JkX2lkJ10gICYmIGJvZHlbJ29iamVjdF9uYW1lJ11cblx0XHRcdFx0XHRwYXJlbnQgPSBib2R5WydwYXJlbnQnXVxuXHRcdFx0XHRcdG93bmVyID0gYm9keVsnb3duZXInXVxuXHRcdFx0XHRcdG93bmVyX25hbWUgPSBib2R5Wydvd25lcl9uYW1lJ11cblx0XHRcdFx0XHRzcGFjZSA9IGJvZHlbJ3NwYWNlJ11cblx0XHRcdFx0XHRyZWNvcmRfaWQgPSBib2R5WydyZWNvcmRfaWQnXVxuXHRcdFx0XHRcdG9iamVjdF9uYW1lID0gYm9keVsnb2JqZWN0X25hbWUnXVxuXHRcdFx0XHRcdHBhcmVudCA9IGJvZHlbJ3BhcmVudCddXG5cdFx0XHRcdFx0bWV0YWRhdGEgPSB7b3duZXI6b3duZXIsIG93bmVyX25hbWU6b3duZXJfbmFtZSwgc3BhY2U6c3BhY2UsIHJlY29yZF9pZDpyZWNvcmRfaWQsIG9iamVjdF9uYW1lOiBvYmplY3RfbmFtZX1cblx0XHRcdFx0XHRpZiBwYXJlbnRcblx0XHRcdFx0XHRcdG1ldGFkYXRhLnBhcmVudCA9IHBhcmVudFxuXHRcdFx0XHRcdG5ld0ZpbGUubWV0YWRhdGEgPSBtZXRhZGF0YVxuXHRcdFx0XHRcdGZpbGVPYmogPSBjb2xsZWN0aW9uLmluc2VydCBuZXdGaWxlXG5cblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGZpbGVPYmogPSBjb2xsZWN0aW9uLmluc2VydCBuZXdGaWxlXG5cblxuXHRcdFx0XHRzaXplID0gZmlsZU9iai5vcmlnaW5hbC5zaXplXG5cdFx0XHRcdGlmICFzaXplXG5cdFx0XHRcdFx0c2l6ZSA9IDEwMjRcblx0XHRcdFx0aWYgcGFyZW50XG5cdFx0XHRcdFx0ZmlsZUNvbGxlY3Rpb24udXBkYXRlKHtfaWQ6cGFyZW50fSx7XG5cdFx0XHRcdFx0XHQkc2V0OlxuXHRcdFx0XHRcdFx0XHRleHRlbnRpb246IGV4dGVudGlvblxuXHRcdFx0XHRcdFx0XHRzaXplOiBzaXplXG5cdFx0XHRcdFx0XHRcdG1vZGlmaWVkOiAobmV3IERhdGUoKSlcblx0XHRcdFx0XHRcdFx0bW9kaWZpZWRfYnk6IG93bmVyXG5cdFx0XHRcdFx0XHQkcHVzaDpcblx0XHRcdFx0XHRcdFx0dmVyc2lvbnM6XG5cdFx0XHRcdFx0XHRcdFx0JGVhY2g6IFsgZmlsZU9iai5faWQgXVxuXHRcdFx0XHRcdFx0XHRcdCRwb3NpdGlvbjogMFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRuZXdGaWxlT2JqSWQgPSBmaWxlQ29sbGVjdGlvbi5kaXJlY3QuaW5zZXJ0IHtcblx0XHRcdFx0XHRcdG5hbWU6IGZpbGVuYW1lXG5cdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJydcblx0XHRcdFx0XHRcdGV4dGVudGlvbjogZXh0ZW50aW9uXG5cdFx0XHRcdFx0XHRzaXplOiBzaXplXG5cdFx0XHRcdFx0XHR2ZXJzaW9uczogW2ZpbGVPYmouX2lkXVxuXHRcdFx0XHRcdFx0cGFyZW50OiB7bzpvYmplY3RfbmFtZSxpZHM6W3JlY29yZF9pZF19XG5cdFx0XHRcdFx0XHRvd25lcjogb3duZXJcblx0XHRcdFx0XHRcdHNwYWNlOiBzcGFjZVxuXHRcdFx0XHRcdFx0Y3JlYXRlZDogKG5ldyBEYXRlKCkpXG5cdFx0XHRcdFx0XHRjcmVhdGVkX2J5OiBvd25lclxuXHRcdFx0XHRcdFx0bW9kaWZpZWQ6IChuZXcgRGF0ZSgpKVxuXHRcdFx0XHRcdFx0bW9kaWZpZWRfYnk6IG93bmVyXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZpbGVPYmoudXBkYXRlKHskc2V0OiB7J21ldGFkYXRhLnBhcmVudCcgOiBuZXdGaWxlT2JqSWR9fSlcblxuXHRcdFx0XHRyZXNwID1cblx0XHRcdFx0XHR2ZXJzaW9uX2lkOiBmaWxlT2JqLl9pZCxcblx0XHRcdFx0XHRzaXplOiBzaXplXG5cblx0XHRcdFx0cmVzLnNldEhlYWRlcihcIngtYW16LXZlcnNpb24taWRcIixmaWxlT2JqLl9pZCk7XG5cdFx0XHRcdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkocmVzcCkpO1xuXHRcdFx0XHRyZXR1cm5cblx0XHRlbHNlXG5cdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDUwMDtcblx0XHRcdHJlcy5lbmQoKTtcblxuSnNvblJvdXRlcy5hZGQgXCJwb3N0XCIsIFwiL3MzLzpjb2xsZWN0aW9uXCIsICAocmVxLCByZXMsIG5leHQpIC0+XG5cdHRyeVxuXHRcdHVzZXJJZCA9IFN0ZWVkb3MuZ2V0VXNlcklkRnJvbUF1dGhUb2tlbihyZXEsIHJlcylcblx0XHRpZiAhdXNlcklkXG5cdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBwZXJtaXNzaW9uXCIpXG5cblx0XHRjb2xsZWN0aW9uTmFtZSA9IHJlcS5wYXJhbXMuY29sbGVjdGlvblxuXG5cdFx0SnNvblJvdXRlcy5wYXJzZUZpbGVzIHJlcSwgcmVzLCAoKS0+XG5cdFx0XHRjb2xsZWN0aW9uID0gY2ZzW2NvbGxlY3Rpb25OYW1lXVxuXG5cdFx0XHRpZiBub3QgY29sbGVjdGlvblxuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBDb2xsZWN0aW9uXCIpXG5cblx0XHRcdGlmIHJlcS5maWxlcyBhbmQgcmVxLmZpbGVzWzBdXG5cblx0XHRcdFx0bmV3RmlsZSA9IG5ldyBGUy5GaWxlKClcblx0XHRcdFx0bmV3RmlsZS5uYW1lKHJlcS5maWxlc1swXS5maWxlbmFtZSlcblxuXHRcdFx0XHRpZiByZXEuYm9keVxuXHRcdFx0XHRcdG5ld0ZpbGUubWV0YWRhdGEgPSByZXEuYm9keVxuXG5cdFx0XHRcdG5ld0ZpbGUub3duZXIgPSB1c2VySWRcblx0XHRcdFx0bmV3RmlsZS5tZXRhZGF0YS5vd25lciA9IHVzZXJJZFxuXG5cdFx0XHRcdG5ld0ZpbGUuYXR0YWNoRGF0YSByZXEuZmlsZXNbMF0uZGF0YSwge3R5cGU6IHJlcS5maWxlc1swXS5taW1lVHlwZX1cblxuXHRcdFx0XHRjb2xsZWN0aW9uLmluc2VydCBuZXdGaWxlXG5cblx0XHRcdFx0cmVzdWx0RGF0YSA9IGNvbGxlY3Rpb24uZmlsZXMuZmluZE9uZShuZXdGaWxlLl9pZClcblx0XHRcdFx0SnNvblJvdXRlcy5zZW5kUmVzdWx0IHJlcyxcblx0XHRcdFx0XHRjb2RlOiAyMDBcblx0XHRcdFx0XHRkYXRhOiByZXN1bHREYXRhXG5cdFx0XHRcdHJldHVyblxuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBGaWxlXCIpXG5cblx0XHRyZXR1cm5cblx0Y2F0Y2ggZVxuXHRcdGNvbnNvbGUuZXJyb3IgZS5zdGFja1xuXHRcdEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsIHtcblx0XHRcdGNvZGU6IGUuZXJyb3IgfHwgNTAwXG5cdFx0XHRkYXRhOiB7ZXJyb3JzOiBlLnJlYXNvbiB8fCBlLm1lc3NhZ2V9XG5cdFx0fVxuXG5cblxuZ2V0UXVlcnlTdHJpbmcgPSAoYWNjZXNzS2V5SWQsIHNlY3JldEFjY2Vzc0tleSwgcXVlcnksIG1ldGhvZCkgLT5cblx0Y29uc29sZS5sb2cgXCItLS0tdXVmbG93TWFuYWdlci5nZXRRdWVyeVN0cmluZy0tLS1cIlxuXHRBTFkgPSByZXF1aXJlKCdhbGl5dW4tc2RrJylcblx0ZGF0ZSA9IEFMWS51dGlsLmRhdGUuZ2V0RGF0ZSgpXG5cblx0cXVlcnkuRm9ybWF0ID0gXCJqc29uXCJcblx0cXVlcnkuVmVyc2lvbiA9IFwiMjAxNy0wMy0yMVwiXG5cdHF1ZXJ5LkFjY2Vzc0tleUlkID0gYWNjZXNzS2V5SWRcblx0cXVlcnkuU2lnbmF0dXJlTWV0aG9kID0gXCJITUFDLVNIQTFcIlxuXHRxdWVyeS5UaW1lc3RhbXAgPSBBTFkudXRpbC5kYXRlLmlzbzg2MDEoZGF0ZSlcblx0cXVlcnkuU2lnbmF0dXJlVmVyc2lvbiA9IFwiMS4wXCJcblx0cXVlcnkuU2lnbmF0dXJlTm9uY2UgPSBTdHJpbmcoZGF0ZS5nZXRUaW1lKCkpXG5cblx0cXVlcnlLZXlzID0gT2JqZWN0LmtleXMocXVlcnkpXG5cdHF1ZXJ5S2V5cy5zb3J0KClcblxuXHRjYW5vbmljYWxpemVkUXVlcnlTdHJpbmcgPSBcIlwiXG5cdHF1ZXJ5S2V5cy5mb3JFYWNoIChuYW1lKSAtPlxuXHRcdGNhbm9uaWNhbGl6ZWRRdWVyeVN0cmluZyArPSBcIiZcIiArIG5hbWUgKyBcIj1cIiArIEFMWS51dGlsLnBvcEVzY2FwZShxdWVyeVtuYW1lXSlcblxuXHRzdHJpbmdUb1NpZ24gPSBtZXRob2QudG9VcHBlckNhc2UoKSArICcmJTJGJicgKyBBTFkudXRpbC5wb3BFc2NhcGUoY2Fub25pY2FsaXplZFF1ZXJ5U3RyaW5nLnN1YnN0cigxKSlcblxuXHRxdWVyeS5TaWduYXR1cmUgPSBBTFkudXRpbC5jcnlwdG8uaG1hYyhzZWNyZXRBY2Nlc3NLZXkgKyAnJicsIHN0cmluZ1RvU2lnbiwgJ2Jhc2U2NCcsICdzaGExJylcblxuXHRxdWVyeVN0ciA9IEFMWS51dGlsLnF1ZXJ5UGFyYW1zVG9TdHJpbmcocXVlcnkpXG5cdGNvbnNvbGUubG9nIHF1ZXJ5U3RyXG5cdHJldHVybiBxdWVyeVN0clxuXG5Kc29uUm91dGVzLmFkZCBcInBvc3RcIiwgXCIvczMvdm9kL3VwbG9hZFwiLCAgKHJlcSwgcmVzLCBuZXh0KSAtPlxuXHR0cnlcblx0XHR1c2VySWQgPSBTdGVlZG9zLmdldFVzZXJJZEZyb21BdXRoVG9rZW4ocmVxLCByZXMpXG5cdFx0aWYgIXVzZXJJZFxuXHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIFwiTm8gcGVybWlzc2lvblwiKVxuXG5cdFx0Y29sbGVjdGlvbk5hbWUgPSBcInZpZGVvc1wiXG5cblx0XHRBTFkgPSByZXF1aXJlKCdhbGl5dW4tc2RrJylcblxuXHRcdEpzb25Sb3V0ZXMucGFyc2VGaWxlcyByZXEsIHJlcywgKCktPlxuXHRcdFx0Y29sbGVjdGlvbiA9IGNmc1tjb2xsZWN0aW9uTmFtZV1cblxuXHRcdFx0aWYgbm90IGNvbGxlY3Rpb25cblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIFwiTm8gQ29sbGVjdGlvblwiKVxuXG5cdFx0XHRpZiByZXEuZmlsZXMgYW5kIHJlcS5maWxlc1swXVxuXG5cdFx0XHRcdGlmIGNvbGxlY3Rpb25OYW1lIGlzICd2aWRlb3MnIGFuZCBNZXRlb3Iuc2V0dGluZ3MucHVibGljLmNmcz8uc3RvcmUgaXMgXCJPU1NcIlxuXHRcdFx0XHRcdGFjY2Vzc0tleUlkID0gTWV0ZW9yLnNldHRpbmdzLmNmcy5hbGl5dW4/LmFjY2Vzc0tleUlkXG5cdFx0XHRcdFx0c2VjcmV0QWNjZXNzS2V5ID0gTWV0ZW9yLnNldHRpbmdzLmNmcy5hbGl5dW4/LnNlY3JldEFjY2Vzc0tleVxuXG5cdFx0XHRcdFx0ZGF0ZSA9IEFMWS51dGlsLmRhdGUuZ2V0RGF0ZSgpXG5cblx0XHRcdFx0XHRxdWVyeSA9IHtcblx0XHRcdFx0XHRcdEFjdGlvbjogXCJDcmVhdGVVcGxvYWRWaWRlb1wiXG5cdFx0XHRcdFx0XHRUaXRsZTogcmVxLmZpbGVzWzBdLmZpbGVuYW1lXG5cdFx0XHRcdFx0XHRGaWxlTmFtZTogcmVxLmZpbGVzWzBdLmZpbGVuYW1lXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dXJsID0gXCJodHRwOi8vdm9kLmNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS8/XCIgKyBnZXRRdWVyeVN0cmluZyhhY2Nlc3NLZXlJZCwgc2VjcmV0QWNjZXNzS2V5LCBxdWVyeSwgJ0dFVCcpXG5cblx0XHRcdFx0XHRyID0gSFRUUC5jYWxsICdHRVQnLCB1cmxcblxuXHRcdFx0XHRcdGNvbnNvbGUubG9nIHJcblxuXHRcdFx0XHRcdGlmIHIuZGF0YT8uVmlkZW9JZFxuXHRcdFx0XHRcdFx0dmlkZW9JZCA9IHIuZGF0YS5WaWRlb0lkXG5cdFx0XHRcdFx0XHR1cGxvYWRBZGRyZXNzID0gSlNPTi5wYXJzZShuZXcgQnVmZmVyKHIuZGF0YS5VcGxvYWRBZGRyZXNzLCAnYmFzZTY0JykudG9TdHJpbmcoKSlcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nIHVwbG9hZEFkZHJlc3Ncblx0XHRcdFx0XHRcdHVwbG9hZEF1dGggPSBKU09OLnBhcnNlKG5ldyBCdWZmZXIoci5kYXRhLlVwbG9hZEF1dGgsICdiYXNlNjQnKS50b1N0cmluZygpKVxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2cgdXBsb2FkQXV0aFxuXG5cdFx0XHRcdFx0XHRvc3MgPSBuZXcgQUxZLk9TUyh7XG5cdFx0XHRcdFx0XHRcdFwiYWNjZXNzS2V5SWRcIjogdXBsb2FkQXV0aC5BY2Nlc3NLZXlJZCxcblx0XHRcdFx0XHRcdFx0XCJzZWNyZXRBY2Nlc3NLZXlcIjogdXBsb2FkQXV0aC5BY2Nlc3NLZXlTZWNyZXQsXG5cdFx0XHRcdFx0XHRcdFwiZW5kcG9pbnRcIjogdXBsb2FkQWRkcmVzcy5FbmRwb2ludCxcblx0XHRcdFx0XHRcdFx0XCJhcGlWZXJzaW9uXCI6ICcyMDEzLTEwLTE1Jyxcblx0XHRcdFx0XHRcdFx0XCJzZWN1cml0eVRva2VuXCI6IHVwbG9hZEF1dGguU2VjdXJpdHlUb2tlblxuXHRcdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdFx0b3NzLnB1dE9iamVjdCB7XG5cdFx0XHRcdFx0XHRcdEJ1Y2tldDogdXBsb2FkQWRkcmVzcy5CdWNrZXQsXG5cdFx0XHRcdFx0XHRcdEtleTogdXBsb2FkQWRkcmVzcy5GaWxlTmFtZSxcblx0XHRcdFx0XHRcdFx0Qm9keTogcmVxLmZpbGVzWzBdLmRhdGEsXG5cdFx0XHRcdFx0XHRcdEFjY2Vzc0NvbnRyb2xBbGxvd09yaWdpbjogJycsXG5cdFx0XHRcdFx0XHRcdENvbnRlbnRUeXBlOiByZXEuZmlsZXNbMF0ubWltZVR5cGUsXG5cdFx0XHRcdFx0XHRcdENhY2hlQ29udHJvbDogJ25vLWNhY2hlJyxcblx0XHRcdFx0XHRcdFx0Q29udGVudERpc3Bvc2l0aW9uOiAnJyxcblx0XHRcdFx0XHRcdFx0Q29udGVudEVuY29kaW5nOiAndXRmLTgnLFxuXHRcdFx0XHRcdFx0XHRTZXJ2ZXJTaWRlRW5jcnlwdGlvbjogJ0FFUzI1NicsXG5cdFx0XHRcdFx0XHRcdEV4cGlyZXM6IG51bGxcblx0XHRcdFx0XHRcdH0sIE1ldGVvci5iaW5kRW52aXJvbm1lbnQgKGVyciwgZGF0YSkgLT5cblxuXHRcdFx0XHRcdFx0XHRpZiBlcnJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyKVxuXHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoNTAwLCBlcnIubWVzc2FnZSlcblxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnc3VjY2VzczonLCBkYXRhKVxuXG5cdFx0XHRcdFx0XHRcdG5ld0RhdGUgPSBBTFkudXRpbC5kYXRlLmdldERhdGUoKVxuXG5cdFx0XHRcdFx0XHRcdGdldFBsYXlJbmZvUXVlcnkgPSB7XG5cdFx0XHRcdFx0XHRcdFx0QWN0aW9uOiAnR2V0UGxheUluZm8nXG5cdFx0XHRcdFx0XHRcdFx0VmlkZW9JZDogdmlkZW9JZFxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Z2V0UGxheUluZm9VcmwgPSBcImh0dHA6Ly92b2QuY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tLz9cIiArIGdldFF1ZXJ5U3RyaW5nKGFjY2Vzc0tleUlkLCBzZWNyZXRBY2Nlc3NLZXksIGdldFBsYXlJbmZvUXVlcnksICdHRVQnKVxuXG5cdFx0XHRcdFx0XHRcdGdldFBsYXlJbmZvUmVzdWx0ID0gSFRUUC5jYWxsICdHRVQnLCBnZXRQbGF5SW5mb1VybFxuXG5cdFx0XHRcdFx0XHRcdEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsXG5cdFx0XHRcdFx0XHRcdFx0Y29kZTogMjAwXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YTogZ2V0UGxheUluZm9SZXN1bHRcblxuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBGaWxlXCIpXG5cblx0XHRyZXR1cm5cblx0Y2F0Y2ggZVxuXHRcdGNvbnNvbGUuZXJyb3IgZS5zdGFja1xuXHRcdEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsIHtcblx0XHRcdGNvZGU6IGUuZXJyb3IgfHwgNTAwXG5cdFx0XHRkYXRhOiB7ZXJyb3JzOiBlLnJlYXNvbiB8fCBlLm1lc3NhZ2V9XG5cdFx0fSIsInZhciBCdXNib3ksIEZpYmVyLCBnZXRRdWVyeVN0cmluZztcblxuQnVzYm95ID0gcmVxdWlyZSgnYnVzYm95Jyk7XG5cbkZpYmVyID0gcmVxdWlyZSgnZmliZXJzJyk7XG5cbkpzb25Sb3V0ZXMucGFyc2VGaWxlcyA9IGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHZhciBidXNib3ksIGZpbGVzLCBpbWFnZTtcbiAgZmlsZXMgPSBbXTtcbiAgaW1hZ2UgPSB7fTtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgYnVzYm95ID0gbmV3IEJ1c2JveSh7XG4gICAgICBoZWFkZXJzOiByZXEuaGVhZGVyc1xuICAgIH0pO1xuICAgIGJ1c2JveS5vbihcImZpbGVcIiwgZnVuY3Rpb24oZmllbGRuYW1lLCBmaWxlLCBmaWxlbmFtZSwgZW5jb2RpbmcsIG1pbWV0eXBlKSB7XG4gICAgICB2YXIgYnVmZmVycztcbiAgICAgIGltYWdlLm1pbWVUeXBlID0gbWltZXR5cGU7XG4gICAgICBpbWFnZS5lbmNvZGluZyA9IGVuY29kaW5nO1xuICAgICAgaW1hZ2UuZmlsZW5hbWUgPSBmaWxlbmFtZTtcbiAgICAgIGJ1ZmZlcnMgPSBbXTtcbiAgICAgIGZpbGUub24oJ2RhdGEnLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIHJldHVybiBidWZmZXJzLnB1c2goZGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmaWxlLm9uKCdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgaW1hZ2UuZGF0YSA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycyk7XG4gICAgICAgIHJldHVybiBmaWxlcy5wdXNoKGltYWdlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGJ1c2JveS5vbihcImZpZWxkXCIsIGZ1bmN0aW9uKGZpZWxkbmFtZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiByZXEuYm9keVtmaWVsZG5hbWVdID0gdmFsdWU7XG4gICAgfSk7XG4gICAgYnVzYm95Lm9uKFwiZmluaXNoXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgcmVxLmZpbGVzID0gZmlsZXM7XG4gICAgICByZXR1cm4gRmliZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBuZXh0KCk7XG4gICAgICB9KS5ydW4oKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVxLnBpcGUoYnVzYm95KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59O1xuXG5Kc29uUm91dGVzLmFkZChcInBvc3RcIiwgXCIvczMvXCIsIGZ1bmN0aW9uKHJlcSwgcmVzLCBuZXh0KSB7XG4gIHJldHVybiBKc29uUm91dGVzLnBhcnNlRmlsZXMocmVxLCByZXMsIGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb2xsZWN0aW9uLCBmaWxlQ29sbGVjdGlvbiwgbmV3RmlsZTtcbiAgICBjb2xsZWN0aW9uID0gY2ZzLmZpbGVzO1xuICAgIGZpbGVDb2xsZWN0aW9uID0gQ3JlYXRvci5nZXRPYmplY3QoXCJjbXNfZmlsZXNcIikuZGI7XG4gICAgaWYgKHJlcS5maWxlcyAmJiByZXEuZmlsZXNbMF0pIHtcbiAgICAgIG5ld0ZpbGUgPSBuZXcgRlMuRmlsZSgpO1xuICAgICAgcmV0dXJuIG5ld0ZpbGUuYXR0YWNoRGF0YShyZXEuZmlsZXNbMF0uZGF0YSwge1xuICAgICAgICB0eXBlOiByZXEuZmlsZXNbMF0ubWltZVR5cGVcbiAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICB2YXIgYm9keSwgZSwgZXh0ZW50aW9uLCBmaWxlT2JqLCBmaWxlbmFtZSwgbWV0YWRhdGEsIG5ld0ZpbGVPYmpJZCwgb2JqZWN0X25hbWUsIG93bmVyLCBvd25lcl9uYW1lLCBwYXJlbnQsIHJlY29yZF9pZCwgcmVzcCwgc2l6ZSwgc3BhY2U7XG4gICAgICAgIGZpbGVuYW1lID0gcmVxLmZpbGVzWzBdLmZpbGVuYW1lO1xuICAgICAgICBleHRlbnRpb24gPSBmaWxlbmFtZS5zcGxpdCgnLicpLnBvcCgpO1xuICAgICAgICBpZiAoW1wiaW1hZ2UuanBnXCIsIFwiaW1hZ2UuZ2lmXCIsIFwiaW1hZ2UuanBlZ1wiLCBcImltYWdlLnBuZ1wiXS5pbmNsdWRlcyhmaWxlbmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgIGZpbGVuYW1lID0gXCJpbWFnZS1cIiArIG1vbWVudChuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVlNTURESEhtbXNzJykgKyBcIi5cIiArIGV4dGVudGlvbjtcbiAgICAgICAgfVxuICAgICAgICBib2R5ID0gcmVxLmJvZHk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKGJvZHkgJiYgKGJvZHlbJ3VwbG9hZF9mcm9tJ10gPT09IFwiSUVcIiB8fCBib2R5Wyd1cGxvYWRfZnJvbSddID09PSBcIm5vZGVcIikpIHtcbiAgICAgICAgICAgIGZpbGVuYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbGVuYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgZSA9IGVycm9yO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZmlsZW5hbWUpO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgZmlsZW5hbWUgPSBmaWxlbmFtZS5yZXBsYWNlKC8lL2csIFwiLVwiKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdGaWxlLm5hbWUoZmlsZW5hbWUpO1xuICAgICAgICBpZiAoYm9keSAmJiBib2R5Wydvd25lciddICYmIGJvZHlbJ3NwYWNlJ10gJiYgYm9keVsncmVjb3JkX2lkJ10gJiYgYm9keVsnb2JqZWN0X25hbWUnXSkge1xuICAgICAgICAgIHBhcmVudCA9IGJvZHlbJ3BhcmVudCddO1xuICAgICAgICAgIG93bmVyID0gYm9keVsnb3duZXInXTtcbiAgICAgICAgICBvd25lcl9uYW1lID0gYm9keVsnb3duZXJfbmFtZSddO1xuICAgICAgICAgIHNwYWNlID0gYm9keVsnc3BhY2UnXTtcbiAgICAgICAgICByZWNvcmRfaWQgPSBib2R5WydyZWNvcmRfaWQnXTtcbiAgICAgICAgICBvYmplY3RfbmFtZSA9IGJvZHlbJ29iamVjdF9uYW1lJ107XG4gICAgICAgICAgcGFyZW50ID0gYm9keVsncGFyZW50J107XG4gICAgICAgICAgbWV0YWRhdGEgPSB7XG4gICAgICAgICAgICBvd25lcjogb3duZXIsXG4gICAgICAgICAgICBvd25lcl9uYW1lOiBvd25lcl9uYW1lLFxuICAgICAgICAgICAgc3BhY2U6IHNwYWNlLFxuICAgICAgICAgICAgcmVjb3JkX2lkOiByZWNvcmRfaWQsXG4gICAgICAgICAgICBvYmplY3RfbmFtZTogb2JqZWN0X25hbWVcbiAgICAgICAgICB9O1xuICAgICAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV3RmlsZS5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICAgIGZpbGVPYmogPSBjb2xsZWN0aW9uLmluc2VydChuZXdGaWxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWxlT2JqID0gY29sbGVjdGlvbi5pbnNlcnQobmV3RmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgc2l6ZSA9IGZpbGVPYmoub3JpZ2luYWwuc2l6ZTtcbiAgICAgICAgaWYgKCFzaXplKSB7XG4gICAgICAgICAgc2l6ZSA9IDEwMjQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgIGZpbGVDb2xsZWN0aW9uLnVwZGF0ZSh7XG4gICAgICAgICAgICBfaWQ6IHBhcmVudFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICRzZXQ6IHtcbiAgICAgICAgICAgICAgZXh0ZW50aW9uOiBleHRlbnRpb24sXG4gICAgICAgICAgICAgIHNpemU6IHNpemUsXG4gICAgICAgICAgICAgIG1vZGlmaWVkOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICBtb2RpZmllZF9ieTogb3duZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkcHVzaDoge1xuICAgICAgICAgICAgICB2ZXJzaW9uczoge1xuICAgICAgICAgICAgICAgICRlYWNoOiBbZmlsZU9iai5faWRdLFxuICAgICAgICAgICAgICAgICRwb3NpdGlvbjogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3RmlsZU9iaklkID0gZmlsZUNvbGxlY3Rpb24uZGlyZWN0Lmluc2VydCh7XG4gICAgICAgICAgICBuYW1lOiBmaWxlbmFtZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgIGV4dGVudGlvbjogZXh0ZW50aW9uLFxuICAgICAgICAgICAgc2l6ZTogc2l6ZSxcbiAgICAgICAgICAgIHZlcnNpb25zOiBbZmlsZU9iai5faWRdLFxuICAgICAgICAgICAgcGFyZW50OiB7XG4gICAgICAgICAgICAgIG86IG9iamVjdF9uYW1lLFxuICAgICAgICAgICAgICBpZHM6IFtyZWNvcmRfaWRdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3duZXI6IG93bmVyLFxuICAgICAgICAgICAgc3BhY2U6IHNwYWNlLFxuICAgICAgICAgICAgY3JlYXRlZDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIGNyZWF0ZWRfYnk6IG93bmVyLFxuICAgICAgICAgICAgbW9kaWZpZWQ6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICBtb2RpZmllZF9ieTogb3duZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmaWxlT2JqLnVwZGF0ZSh7XG4gICAgICAgICAgICAkc2V0OiB7XG4gICAgICAgICAgICAgICdtZXRhZGF0YS5wYXJlbnQnOiBuZXdGaWxlT2JqSWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXNwID0ge1xuICAgICAgICAgIHZlcnNpb25faWQ6IGZpbGVPYmouX2lkLFxuICAgICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgfTtcbiAgICAgICAgcmVzLnNldEhlYWRlcihcIngtYW16LXZlcnNpb24taWRcIiwgZmlsZU9iai5faWQpO1xuICAgICAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHJlc3ApKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMDtcbiAgICAgIHJldHVybiByZXMuZW5kKCk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5Kc29uUm91dGVzLmFkZChcInBvc3RcIiwgXCIvczMvOmNvbGxlY3Rpb25cIiwgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgdmFyIGNvbGxlY3Rpb25OYW1lLCBlLCB1c2VySWQ7XG4gIHRyeSB7XG4gICAgdXNlcklkID0gU3RlZWRvcy5nZXRVc2VySWRGcm9tQXV0aFRva2VuKHJlcSwgcmVzKTtcbiAgICBpZiAoIXVzZXJJZCkge1xuICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIFwiTm8gcGVybWlzc2lvblwiKTtcbiAgICB9XG4gICAgY29sbGVjdGlvbk5hbWUgPSByZXEucGFyYW1zLmNvbGxlY3Rpb247XG4gICAgSnNvblJvdXRlcy5wYXJzZUZpbGVzKHJlcSwgcmVzLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb2xsZWN0aW9uLCBuZXdGaWxlLCByZXN1bHREYXRhO1xuICAgICAgY29sbGVjdGlvbiA9IGNmc1tjb2xsZWN0aW9uTmFtZV07XG4gICAgICBpZiAoIWNvbGxlY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIFwiTm8gQ29sbGVjdGlvblwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXEuZmlsZXMgJiYgcmVxLmZpbGVzWzBdKSB7XG4gICAgICAgIG5ld0ZpbGUgPSBuZXcgRlMuRmlsZSgpO1xuICAgICAgICBuZXdGaWxlLm5hbWUocmVxLmZpbGVzWzBdLmZpbGVuYW1lKTtcbiAgICAgICAgaWYgKHJlcS5ib2R5KSB7XG4gICAgICAgICAgbmV3RmlsZS5tZXRhZGF0YSA9IHJlcS5ib2R5O1xuICAgICAgICB9XG4gICAgICAgIG5ld0ZpbGUub3duZXIgPSB1c2VySWQ7XG4gICAgICAgIG5ld0ZpbGUubWV0YWRhdGEub3duZXIgPSB1c2VySWQ7XG4gICAgICAgIG5ld0ZpbGUuYXR0YWNoRGF0YShyZXEuZmlsZXNbMF0uZGF0YSwge1xuICAgICAgICAgIHR5cGU6IHJlcS5maWxlc1swXS5taW1lVHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgY29sbGVjdGlvbi5pbnNlcnQobmV3RmlsZSk7XG4gICAgICAgIHJlc3VsdERhdGEgPSBjb2xsZWN0aW9uLmZpbGVzLmZpbmRPbmUobmV3RmlsZS5faWQpO1xuICAgICAgICBKc29uUm91dGVzLnNlbmRSZXN1bHQocmVzLCB7XG4gICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdERhdGFcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBGaWxlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGUgPSBlcnJvcjtcbiAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spO1xuICAgIHJldHVybiBKc29uUm91dGVzLnNlbmRSZXN1bHQocmVzLCB7XG4gICAgICBjb2RlOiBlLmVycm9yIHx8IDUwMCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZXJyb3JzOiBlLnJlYXNvbiB8fCBlLm1lc3NhZ2VcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSk7XG5cbmdldFF1ZXJ5U3RyaW5nID0gZnVuY3Rpb24oYWNjZXNzS2V5SWQsIHNlY3JldEFjY2Vzc0tleSwgcXVlcnksIG1ldGhvZCkge1xuICB2YXIgQUxZLCBjYW5vbmljYWxpemVkUXVlcnlTdHJpbmcsIGRhdGUsIHF1ZXJ5S2V5cywgcXVlcnlTdHIsIHN0cmluZ1RvU2lnbjtcbiAgY29uc29sZS5sb2coXCItLS0tdXVmbG93TWFuYWdlci5nZXRRdWVyeVN0cmluZy0tLS1cIik7XG4gIEFMWSA9IHJlcXVpcmUoJ2FsaXl1bi1zZGsnKTtcbiAgZGF0ZSA9IEFMWS51dGlsLmRhdGUuZ2V0RGF0ZSgpO1xuICBxdWVyeS5Gb3JtYXQgPSBcImpzb25cIjtcbiAgcXVlcnkuVmVyc2lvbiA9IFwiMjAxNy0wMy0yMVwiO1xuICBxdWVyeS5BY2Nlc3NLZXlJZCA9IGFjY2Vzc0tleUlkO1xuICBxdWVyeS5TaWduYXR1cmVNZXRob2QgPSBcIkhNQUMtU0hBMVwiO1xuICBxdWVyeS5UaW1lc3RhbXAgPSBBTFkudXRpbC5kYXRlLmlzbzg2MDEoZGF0ZSk7XG4gIHF1ZXJ5LlNpZ25hdHVyZVZlcnNpb24gPSBcIjEuMFwiO1xuICBxdWVyeS5TaWduYXR1cmVOb25jZSA9IFN0cmluZyhkYXRlLmdldFRpbWUoKSk7XG4gIHF1ZXJ5S2V5cyA9IE9iamVjdC5rZXlzKHF1ZXJ5KTtcbiAgcXVlcnlLZXlzLnNvcnQoKTtcbiAgY2Fub25pY2FsaXplZFF1ZXJ5U3RyaW5nID0gXCJcIjtcbiAgcXVlcnlLZXlzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBjYW5vbmljYWxpemVkUXVlcnlTdHJpbmcgKz0gXCImXCIgKyBuYW1lICsgXCI9XCIgKyBBTFkudXRpbC5wb3BFc2NhcGUocXVlcnlbbmFtZV0pO1xuICB9KTtcbiAgc3RyaW5nVG9TaWduID0gbWV0aG9kLnRvVXBwZXJDYXNlKCkgKyAnJiUyRiYnICsgQUxZLnV0aWwucG9wRXNjYXBlKGNhbm9uaWNhbGl6ZWRRdWVyeVN0cmluZy5zdWJzdHIoMSkpO1xuICBxdWVyeS5TaWduYXR1cmUgPSBBTFkudXRpbC5jcnlwdG8uaG1hYyhzZWNyZXRBY2Nlc3NLZXkgKyAnJicsIHN0cmluZ1RvU2lnbiwgJ2Jhc2U2NCcsICdzaGExJyk7XG4gIHF1ZXJ5U3RyID0gQUxZLnV0aWwucXVlcnlQYXJhbXNUb1N0cmluZyhxdWVyeSk7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5U3RyKTtcbiAgcmV0dXJuIHF1ZXJ5U3RyO1xufTtcblxuSnNvblJvdXRlcy5hZGQoXCJwb3N0XCIsIFwiL3MzL3ZvZC91cGxvYWRcIiwgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgdmFyIEFMWSwgY29sbGVjdGlvbk5hbWUsIGUsIHVzZXJJZDtcbiAgdHJ5IHtcbiAgICB1c2VySWQgPSBTdGVlZG9zLmdldFVzZXJJZEZyb21BdXRoVG9rZW4ocmVxLCByZXMpO1xuICAgIGlmICghdXNlcklkKSB7XG4gICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBwZXJtaXNzaW9uXCIpO1xuICAgIH1cbiAgICBjb2xsZWN0aW9uTmFtZSA9IFwidmlkZW9zXCI7XG4gICAgQUxZID0gcmVxdWlyZSgnYWxpeXVuLXNkaycpO1xuICAgIEpzb25Sb3V0ZXMucGFyc2VGaWxlcyhyZXEsIHJlcywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYWNjZXNzS2V5SWQsIGNvbGxlY3Rpb24sIGRhdGUsIG9zcywgcXVlcnksIHIsIHJlZiwgcmVmMSwgcmVmMiwgcmVmMywgc2VjcmV0QWNjZXNzS2V5LCB1cGxvYWRBZGRyZXNzLCB1cGxvYWRBdXRoLCB1cmwsIHZpZGVvSWQ7XG4gICAgICBjb2xsZWN0aW9uID0gY2ZzW2NvbGxlY3Rpb25OYW1lXTtcbiAgICAgIGlmICghY29sbGVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKDUwMCwgXCJObyBDb2xsZWN0aW9uXCIpO1xuICAgICAgfVxuICAgICAgaWYgKHJlcS5maWxlcyAmJiByZXEuZmlsZXNbMF0pIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25OYW1lID09PSAndmlkZW9zJyAmJiAoKHJlZiA9IE1ldGVvci5zZXR0aW5nc1tcInB1YmxpY1wiXS5jZnMpICE9IG51bGwgPyByZWYuc3RvcmUgOiB2b2lkIDApID09PSBcIk9TU1wiKSB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQgPSAocmVmMSA9IE1ldGVvci5zZXR0aW5ncy5jZnMuYWxpeXVuKSAhPSBudWxsID8gcmVmMS5hY2Nlc3NLZXlJZCA6IHZvaWQgMDtcbiAgICAgICAgICBzZWNyZXRBY2Nlc3NLZXkgPSAocmVmMiA9IE1ldGVvci5zZXR0aW5ncy5jZnMuYWxpeXVuKSAhPSBudWxsID8gcmVmMi5zZWNyZXRBY2Nlc3NLZXkgOiB2b2lkIDA7XG4gICAgICAgICAgZGF0ZSA9IEFMWS51dGlsLmRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgIHF1ZXJ5ID0ge1xuICAgICAgICAgICAgQWN0aW9uOiBcIkNyZWF0ZVVwbG9hZFZpZGVvXCIsXG4gICAgICAgICAgICBUaXRsZTogcmVxLmZpbGVzWzBdLmZpbGVuYW1lLFxuICAgICAgICAgICAgRmlsZU5hbWU6IHJlcS5maWxlc1swXS5maWxlbmFtZVxuICAgICAgICAgIH07XG4gICAgICAgICAgdXJsID0gXCJodHRwOi8vdm9kLmNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS8/XCIgKyBnZXRRdWVyeVN0cmluZyhhY2Nlc3NLZXlJZCwgc2VjcmV0QWNjZXNzS2V5LCBxdWVyeSwgJ0dFVCcpO1xuICAgICAgICAgIHIgPSBIVFRQLmNhbGwoJ0dFVCcsIHVybCk7XG4gICAgICAgICAgY29uc29sZS5sb2cocik7XG4gICAgICAgICAgaWYgKChyZWYzID0gci5kYXRhKSAhPSBudWxsID8gcmVmMy5WaWRlb0lkIDogdm9pZCAwKSB7XG4gICAgICAgICAgICB2aWRlb0lkID0gci5kYXRhLlZpZGVvSWQ7XG4gICAgICAgICAgICB1cGxvYWRBZGRyZXNzID0gSlNPTi5wYXJzZShuZXcgQnVmZmVyKHIuZGF0YS5VcGxvYWRBZGRyZXNzLCAnYmFzZTY0JykudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh1cGxvYWRBZGRyZXNzKTtcbiAgICAgICAgICAgIHVwbG9hZEF1dGggPSBKU09OLnBhcnNlKG5ldyBCdWZmZXIoci5kYXRhLlVwbG9hZEF1dGgsICdiYXNlNjQnKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVwbG9hZEF1dGgpO1xuICAgICAgICAgICAgb3NzID0gbmV3IEFMWS5PU1Moe1xuICAgICAgICAgICAgICBcImFjY2Vzc0tleUlkXCI6IHVwbG9hZEF1dGguQWNjZXNzS2V5SWQsXG4gICAgICAgICAgICAgIFwic2VjcmV0QWNjZXNzS2V5XCI6IHVwbG9hZEF1dGguQWNjZXNzS2V5U2VjcmV0LFxuICAgICAgICAgICAgICBcImVuZHBvaW50XCI6IHVwbG9hZEFkZHJlc3MuRW5kcG9pbnQsXG4gICAgICAgICAgICAgIFwiYXBpVmVyc2lvblwiOiAnMjAxMy0xMC0xNScsXG4gICAgICAgICAgICAgIFwic2VjdXJpdHlUb2tlblwiOiB1cGxvYWRBdXRoLlNlY3VyaXR5VG9rZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIG9zcy5wdXRPYmplY3Qoe1xuICAgICAgICAgICAgICBCdWNrZXQ6IHVwbG9hZEFkZHJlc3MuQnVja2V0LFxuICAgICAgICAgICAgICBLZXk6IHVwbG9hZEFkZHJlc3MuRmlsZU5hbWUsXG4gICAgICAgICAgICAgIEJvZHk6IHJlcS5maWxlc1swXS5kYXRhLFxuICAgICAgICAgICAgICBBY2Nlc3NDb250cm9sQWxsb3dPcmlnaW46ICcnLFxuICAgICAgICAgICAgICBDb250ZW50VHlwZTogcmVxLmZpbGVzWzBdLm1pbWVUeXBlLFxuICAgICAgICAgICAgICBDYWNoZUNvbnRyb2w6ICduby1jYWNoZScsXG4gICAgICAgICAgICAgIENvbnRlbnREaXNwb3NpdGlvbjogJycsXG4gICAgICAgICAgICAgIENvbnRlbnRFbmNvZGluZzogJ3V0Zi04JyxcbiAgICAgICAgICAgICAgU2VydmVyU2lkZUVuY3J5cHRpb246ICdBRVMyNTYnLFxuICAgICAgICAgICAgICBFeHBpcmVzOiBudWxsXG4gICAgICAgICAgICB9LCBNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICB2YXIgZ2V0UGxheUluZm9RdWVyeSwgZ2V0UGxheUluZm9SZXN1bHQsIGdldFBsYXlJbmZvVXJsLCBuZXdEYXRlO1xuICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOicsIGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIGVyci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzczonLCBkYXRhKTtcbiAgICAgICAgICAgICAgbmV3RGF0ZSA9IEFMWS51dGlsLmRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgICBnZXRQbGF5SW5mb1F1ZXJ5ID0ge1xuICAgICAgICAgICAgICAgIEFjdGlvbjogJ0dldFBsYXlJbmZvJyxcbiAgICAgICAgICAgICAgICBWaWRlb0lkOiB2aWRlb0lkXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGdldFBsYXlJbmZvVXJsID0gXCJodHRwOi8vdm9kLmNuLXNoYW5naGFpLmFsaXl1bmNzLmNvbS8/XCIgKyBnZXRRdWVyeVN0cmluZyhhY2Nlc3NLZXlJZCwgc2VjcmV0QWNjZXNzS2V5LCBnZXRQbGF5SW5mb1F1ZXJ5LCAnR0VUJyk7XG4gICAgICAgICAgICAgIGdldFBsYXlJbmZvUmVzdWx0ID0gSFRUUC5jYWxsKCdHRVQnLCBnZXRQbGF5SW5mb1VybCk7XG4gICAgICAgICAgICAgIHJldHVybiBKc29uUm91dGVzLnNlbmRSZXN1bHQocmVzLCB7XG4gICAgICAgICAgICAgICAgY29kZTogMjAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IGdldFBsYXlJbmZvUmVzdWx0XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIFwiTm8gRmlsZVwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0gZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlLnN0YWNrKTtcbiAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0KHJlcywge1xuICAgICAgY29kZTogZS5lcnJvciB8fCA1MDAsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGVycm9yczogZS5yZWFzb24gfHwgZS5tZXNzYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuIiwiSnNvblJvdXRlcy5hZGQgJ3Bvc3QnLCAnL2FwaS93b3JrZmxvdy9kcmFmdHMnLCAocmVxLCByZXMsIG5leHQpIC0+XG5cdHRyeVxuXHRcdGN1cnJlbnRfdXNlcl9pbmZvID0gdXVmbG93TWFuYWdlci5jaGVja19hdXRob3JpemF0aW9uKHJlcSlcblx0XHRjdXJyZW50X3VzZXJfaWQgPSBjdXJyZW50X3VzZXJfaW5mby5faWRcblxuXHRcdGhhc2hEYXRhID0gcmVxLmJvZHlcblxuXHRcdGluc2VydGVkX2luc3RhbmNlcyA9IG5ldyBBcnJheVxuXG5cdFx0Xy5lYWNoIGhhc2hEYXRhWydJbnN0YW5jZXMnXSwgKGluc3RhbmNlX2Zyb21fY2xpZW50KSAtPlxuXHRcdFx0bmV3X2luc19pZCA9IHV1Zmxvd01hbmFnZXIuY3JlYXRlX2luc3RhbmNlKGluc3RhbmNlX2Zyb21fY2xpZW50LCBjdXJyZW50X3VzZXJfaW5mbylcblxuXHRcdFx0bmV3X2lucyA9IENyZWF0b3IuQ29sbGVjdGlvbnMuaW5zdGFuY2VzLmZpbmRPbmUoeyBfaWQ6IG5ld19pbnNfaWQgfSwgeyBmaWVsZHM6IHsgc3BhY2U6IDEsIGZsb3c6IDEsIGZsb3dfdmVyc2lvbjogMSwgZm9ybTogMSwgZm9ybV92ZXJzaW9uOiAxIH0gfSlcblxuXHRcdFx0aW5zZXJ0ZWRfaW5zdGFuY2VzLnB1c2gobmV3X2lucylcblxuXHRcdEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsIHtcblx0XHRcdGNvZGU6IDIwMFxuXHRcdFx0ZGF0YTogeyBpbnNlcnRzOiBpbnNlcnRlZF9pbnN0YW5jZXMgfVxuXHRcdH1cblx0Y2F0Y2ggZVxuXHRcdGNvbnNvbGUuZXJyb3IgZS5zdGFja1xuXHRcdEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsIHtcblx0XHRcdGNvZGU6IDIwMFxuXHRcdFx0ZGF0YTogeyBlcnJvcnM6IFt7IGVycm9yTWVzc2FnZTogZS5yZWFzb24gfHwgZS5tZXNzYWdlIH1dIH1cblx0XHR9XG5cbiIsIkpzb25Sb3V0ZXMuYWRkKCdwb3N0JywgJy9hcGkvd29ya2Zsb3cvZHJhZnRzJywgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgdmFyIGN1cnJlbnRfdXNlcl9pZCwgY3VycmVudF91c2VyX2luZm8sIGUsIGhhc2hEYXRhLCBpbnNlcnRlZF9pbnN0YW5jZXM7XG4gIHRyeSB7XG4gICAgY3VycmVudF91c2VyX2luZm8gPSB1dWZsb3dNYW5hZ2VyLmNoZWNrX2F1dGhvcml6YXRpb24ocmVxKTtcbiAgICBjdXJyZW50X3VzZXJfaWQgPSBjdXJyZW50X3VzZXJfaW5mby5faWQ7XG4gICAgaGFzaERhdGEgPSByZXEuYm9keTtcbiAgICBpbnNlcnRlZF9pbnN0YW5jZXMgPSBuZXcgQXJyYXk7XG4gICAgXy5lYWNoKGhhc2hEYXRhWydJbnN0YW5jZXMnXSwgZnVuY3Rpb24oaW5zdGFuY2VfZnJvbV9jbGllbnQpIHtcbiAgICAgIHZhciBuZXdfaW5zLCBuZXdfaW5zX2lkO1xuICAgICAgbmV3X2luc19pZCA9IHV1Zmxvd01hbmFnZXIuY3JlYXRlX2luc3RhbmNlKGluc3RhbmNlX2Zyb21fY2xpZW50LCBjdXJyZW50X3VzZXJfaW5mbyk7XG4gICAgICBuZXdfaW5zID0gQ3JlYXRvci5Db2xsZWN0aW9ucy5pbnN0YW5jZXMuZmluZE9uZSh7XG4gICAgICAgIF9pZDogbmV3X2luc19pZFxuICAgICAgfSwge1xuICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICBzcGFjZTogMSxcbiAgICAgICAgICBmbG93OiAxLFxuICAgICAgICAgIGZsb3dfdmVyc2lvbjogMSxcbiAgICAgICAgICBmb3JtOiAxLFxuICAgICAgICAgIGZvcm1fdmVyc2lvbjogMVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBpbnNlcnRlZF9pbnN0YW5jZXMucHVzaChuZXdfaW5zKTtcbiAgICB9KTtcbiAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0KHJlcywge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgZGF0YToge1xuICAgICAgICBpbnNlcnRzOiBpbnNlcnRlZF9pbnN0YW5jZXNcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlID0gZXJyb3I7XG4gICAgY29uc29sZS5lcnJvcihlLnN0YWNrKTtcbiAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0KHJlcywge1xuICAgICAgY29kZTogMjAwLFxuICAgICAgZGF0YToge1xuICAgICAgICBlcnJvcnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGUucmVhc29uIHx8IGUubWVzc2FnZVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==
