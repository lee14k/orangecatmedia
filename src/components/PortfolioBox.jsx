import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function PortfolioBox (){
  const [categories, setCategories] = useState({
    Photo: [
        
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
      useEffect(() => {
        // Fetch images from your API and update the Photo category
        fetch('/api/images')
          .then(response => response.json())
          .then(data => {
            setCategories(prevCategories => ({
              ...prevCategories,
              Photo: data // assuming 'data' is an array of image objects
            }));
          })
          .catch(error => console.error('Error fetching images:', error));
      }, []);
      return (
        <div className="portfolio pt-48">
            <h1 className="text-6xl big-headline">Check out our work</h1>
            <div className="w-full px-2 py-16 sm:px-0">
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
                             <div className="flex overflow-x-auto pb-48">
                               {posts.map((post) => (
                                 <div
                                   key={post.id}
                                   className="flex-none w-1/3 p-3"
                                 >
                                   {idx === 0 ? ( // Check if it's the "Photo" category
                                     <img src={`/api/imageProxy?imageId=${post.id}`} alt={post.title} style={{ width: '100%', height: 'auto' }} />
                                   ) : (
                                     <div
                                       className="photoboxes"
                                       style={{ backgroundImage: `url(${post.img})` }}
                                     ></div>
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