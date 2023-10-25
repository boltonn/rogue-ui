'use client'
import { useCallback, useEffect, Fragment } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from 'react-intersection-observer';
import rogueBackend from "@/apis/rogueBackend";
import useCollectionStore from "@/store/collections";

function Images() {
    const { ref, inView } = useInView();
    const { collections } = useCollectionStore();
    console.log(collections);

    // useCallback function to fetch images use a body get request
    const fetchImages = useCallback(
        async ({ pageParam = 0 }) => {
            const { data: images } = await rogueBackend.post(
                '/images',
                {
                    collections: collections,
                    page: pageParam,
                },
            );
            return images;
        },
        [collections],
    );



    // infinite scroll of images if client is scrolled to bottom
    const {
        data,
        error,
        isFetching,
        isFetchingNextPage,
        isLoading,
        isError,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery({
        queryKey: ['images', collections],
        queryFn: fetchImages,
        getPreviousPageParam: (firstPage) => firstPage.previous ?? undefined,
        getNextPageParam: (lastPage) => lastPage.nextId ?? undefined,
    })

    useEffect(() => {
        if (inView) {
            fetchNextPage()
        }
    }, [fetchNextPage, inView])

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {
                data.pages.map((page) => (
                    <Fragment key={page.nextId}>
                        {page.map((image) => (
                            <p className="text-white" key={image.id}>
                                {image.hash.md5}
                            </p>
                        ))}
                    </Fragment>
                ))
            }
            < div >
                <button
                    ref={ref}
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                            ? 'Load Newer'
                            : 'Nothing more to load'}
                </button>
            </div >
            <div>
                {isFetching && !isFetchingNextPage
                    ? 'Background Updating...'
                    : null}
            </div>
        </div>
    )
}



export default Images;
