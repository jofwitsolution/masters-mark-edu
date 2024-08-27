type SocialLink = {
  label: string;
  route: string;
  icon: string;
};

type NavLink = {
  label: string;
  route: string;
  icon?: string;
};

type DashboardNavLinks = {
  route: string;
  label: string;
  icon: string;
};

type GetAllPostParams = {
  page?: number;
  pageSize?: number;
  searchQuery?: string;
  filter?: string;
};

type SearchParamsProps = {
  searchParams: { [key: string]: string | undefined };
};
