import React, { ReactNode } from 'react';
import {
    Page,
    AppBreadcrumbProps,
    Breadcrumb,
    BreadcrumbItem,
    MenuProps,
    MenuModel,
    AppSubMenuProps,
    LayoutConfig,
    LayoutState,
    AppBreadcrumbState,
    Breadcrumb,
    LayoutContextProps,
    MailContextProps,
    MenuContextProps,
    UserDataContext,
    ChatContextProps,
    TaskContextProps,
    AppConfigProps,
    NodeRef,
    AppTopbarRef,
    MenuModelItem,
    AppMenuItemProps,
    AppMenuItem
} from './layout';
import { Demo, LayoutType, SortOrderType, CustomEvent, ChartDataState, ChartOptionsState, AppMailSidebarItem, AppMailReplyProps, AppMailProps } from './demo';

import { DashboardData } from './service';

type ChildContainerProps = {
    children: ReactNode;
};

export type {
    DashboardData,
    User,
    Page,
    AppBreadcrumbProps,
    Breadcrumb,
    BreadcrumbItem,
    MenuProps,
    MenuModel,
    LayoutConfig,
    LayoutState,
    Breadcrumb,
    LayoutContextProps,
    MailContextProps,
    MenuContextProps,
    UserDataContext,
    ChatContextProps,
    TaskContextProps,
    AppConfigProps,
    NodeRef,
    AppTopbarRef,
    AppMenuItemProps,
    ChildContainerProps,
    Demo,
    LayoutType,
    SortOrderType,
    CustomEvent,
    ChartDataState,
    ChartOptionsState,
    AppMailSidebarItem,
    AppMailReplyProps,
    AppMailProps,
    AppMenuItem
};
