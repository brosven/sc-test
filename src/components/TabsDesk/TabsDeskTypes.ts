export type TabsType = {
  header: string;
  body: JSX.Element;
};

export type TabsDeskProps = {
  tabs: TabsType[];
  tabListLabel: string;
};
