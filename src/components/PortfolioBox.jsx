import { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import Link from 'next/link';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function PortfolioBox() {
  const [categories, setCategories] = useState({
    Photo: [],
    Video: [
      {
        id: 1,
        title: 'Mr Bike and Ski',
        img: '',
        videoUrl: 'https://www.youtube.com/embed/ysI8wlB8ZiA?si=l87SEX0hfLyg2obh',
      },
      {
        id: 2,
        title: 'Family Inn',
        img: '',
        videoUrl: 'https://www.youtube.com/embed/8Ak6dXuuioA?si=_ygvEAL8oF2mUtBw',
      },
      {
        id: 3,
        title: 'Search & Rescue',
        img: '',
        videoUrl: 'https://www.youtube.com/embed/m3JrmbRU64U?si=4qLINxZunpdeenX1',
      },
    ],
    Web: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        img: '/webs1.png',
        link:'https://www.wihomewinemakers.com/'
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        img: '/webs2.png',
        link:''

      },
      {
        id: 3,
        title: "The worst advice we've ever heard about coffee",
        img: '/webs3.png',
        link:'https://www.pinecrestoflakegeneva.com/'

      },
    ],
  });

  useEffect(() => {
    // Fetch images from your API and update the Photo category
    fetch('/api/images')
      .then((response) => response.json())
      .then((data) => {
        setCategories((prevCategories) => ({
          ...prevCategories,
          Photo: data, // assuming 'data' is an array of image objects
        }));
      })
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="portfolio pt-48">
      <h1 className="text-6xl big-headline ml-20">Check out our work</h1>
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex rounded-xl bg-orange-900/20 p-1 mx-16">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                    'ring-white/60 focus:outline-none focus:ring-2',
                    selected ? 'bg-white text-orange-700 shadow' : 'text-orange-100',
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white/60 ring-offset-2 focus:outline-none focus:ring-2',
                )}
              >
                <div className="flex overflow-x-auto pb-10 gap-12 pl-12">
                  {posts.map((post) => (
                    <div key={post.id} className="flex-none w-1/5">
                      {idx === 0 ? (
                        // Photo category
                        <img src={`/api/imageProxy?imageId=${post.id}`} alt={post.title} style={{ width: '70%', height: 'auto' }} loading="lazy" />
                      ) : idx === 1 ? (
                        // Video category
                        post.videoUrl ? (
                          <iframe
                            width="460"
                            height="315"
                            src={post.videoUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div
                            className="photoboxes"
                            style={{ backgroundImage: `url(${post.img})` }}
                          ></div>
                        )
                      ) : (
                        // Web category
                        post.link ? (
                          <Link href={post.link}>
                              <div
                                className="photoboxes"
                                style={{ backgroundImage: `url(${post.img})` }}
                              ></div>
                          </Link>
                        ) : (
                          <div
                            className="photoboxes"
                            style={{ backgroundImage: `url(${post.img})` }}
                          ></div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}