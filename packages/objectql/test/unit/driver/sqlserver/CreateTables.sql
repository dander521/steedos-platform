USE [driver-test]
GO
/****** Object:  Table [dbo].[TestCrudForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestCrudForSqlserver](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[title] [varchar](50) NULL,
	[count] [int] NULL,
 CONSTRAINT [PK_TestCrudForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TestFieldsForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestFieldsForSqlserver](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[title] [varchar](50) NULL,
	[tag] [varchar](50) NULL,
 CONSTRAINT [PK_TestFieldsForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TestFieldTypesForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestFieldTypesForSqlserver](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[text] [varchar](50) NULL,
	[textarea] [varchar](50) NULL,
	[int] [int] NULL,
	[float] [float] NULL,
	[date] [datetime] NULL,
	[datetime] [datetime] NULL,
	[bool] [bit] NULL,
 CONSTRAINT [PK_TestFieldTypesForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TestFiltersForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestFiltersForSqlserver](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[title] [varchar](50) NULL,
	[count] [int] NULL,
 CONSTRAINT [PK_TestFiltersForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TestPageForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestPageForSqlserver](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[title] [varchar](50) NULL,
	[index] [int] NULL,
 CONSTRAINT [PK_TestPageForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TestPrimaryKeyForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestPrimaryKeyForSqlserver](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[name] [varchar](50) NULL,
	[title] [varchar](50) NULL,
	[count] [int] NULL,
 CONSTRAINT [PK_TestPrimaryKeyForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[TestSortForSqlserver]    Script Date: 2019/4/24 18:22:13 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TestSortForSqlserver](
	[id] [varchar](50) NOT NULL,
	[name] [varchar](50) NULL,
	[title] [varchar](50) NULL,
	[count] [int] NULL,
 CONSTRAINT [PK_TestSortForSqlserver] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
