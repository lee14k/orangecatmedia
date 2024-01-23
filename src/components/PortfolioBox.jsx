import { useState } from "react";
import { Tab } from "@headlessui/react";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function PortfolioBox (){
    let [categories] = useState({
        Photo: [
          {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            img:'./photo1.jpg'
        
          },
          {
            id: 2,
            title: "So you've bought coffee... now what?",
            img:'./photo2.jpg'

          },
          {
            id: 3,
            title: "So you've bought coffee... now what?",
            img:'./photo3.jpg'

          },
          {
            id: 4,
            title: "So you've bought coffee... now what?",
            img:'./photo4.jpg'

          },
          {
            id: 5,
            title: "So you've bought coffee... now what?",
            img:'./photo5.jpg'

          },
          {
            id: 6,
            title: "So you've bought coffee... now what?",
            img:'./photo6.jpg'

          },
        ],
        Video: [
          {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            img:''

          },
          {
            id: 2,
            title: 'The most innovative things happening in coffee',
            img:''

          },
        ],
        Web: [
          {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            img:''

          },
          {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            img:''

          },
        ],
      })
return (
    <div className="portfolio pt-48">
        <h1 className="text-6xl big-headline ">Check out our work</h1>
        <div className="w-full px-2 py-16 sm:px-0 ">
      <Tab.Group>
        <Tab.List className="flex rounded-xl bg-orange-900/20 p-1 mx-16">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                  'ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-white text-orange-700 shadow'
                    : 'text-orange-100 '
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
                'ring-white/60 ring-offset-2 ring-offset-orange-400 focus:outline-none focus:ring-2'
              )}
            >
              <ul className="grid grid-cols-3 pb-48">
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative rounded-md p-3 hover:bg-gray-100"
                  >
                

                    <div className="photoboxes">
                    <img src=
                      {post.img}
                    />
                      </div>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'ring-orange-400 focus:z-10 focus:outline-none focus:ring-2'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
    </div>
);
}