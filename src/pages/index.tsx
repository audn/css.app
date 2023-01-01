import { NextSeo } from 'next-seo';
import { Hydrate } from '../common/components/Hydrate';
import { DefaultLayout } from '../common/layouts/Default';
import { useAllPosts } from '../common/utils/hooks/posts';

export default function Home() {
  const {
    data,
    isLoading,
    error: fetchError,
    refetch,
    isRefetching,
  } = useAllPosts();

  return (
    <DefaultLayout>
      <NextSeo />

      <div className="flex flex-col">
        <h2 className="!text-on-100 !text-lg font-semibold">
          Recently posted components
        </h2>
        {/* <h4 className="text-lg mt-3 !font-medium">
          Browsing components posted by community members.
        </h4> */}
      </div>
      <Hydrate.Posts
        data={data}
        error={fetchError}
        isLoading={isLoading}
        refetch={refetch}
        isRefetching={isRefetching}
      />
    </DefaultLayout>
  );
}
