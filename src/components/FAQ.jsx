    import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "What types of photo and video services do you offer?",
    answer:
      "We offer a range of services including commercial photography, event coverage, promotional videos, and custom projects tailored to your needs.",
  },
  {
    question: "How do you price your photo and video services?",
    answer:
      "Our pricing is based on the type of project, duration, location, and specific client requirements. We offer customizable packages to fit various budgets.",
  },
  {
    question: "How long does it take to get my final photos or videos?",
    answer:
      "Photos can be delivered as soon as within 48 hours of the shoot. Videos can take up to 2 weeks depending on the complexity of the project.",
  },
  {
    question: "What platforms do you use for website design?",
    answer:
      "We specialize in creating websites using Nextjs, JavaScript, WordPress, Shopify, and custom HTML/CSS, depending on your specific needs, preferences, and given constraints.",
  },
  {
    question: "Can you help with website maintenance and updates?",
    answer:
      "Absolutely, we offer ongoing support and maintenance services to keep your website up-to-date and running smoothly.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline varies based on the project's complexity, but typically, a basic website takes 4-6 weeks from concept to launch.",
  },
]


const FAQ = () => {
    return (
       <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
    );
    }

export default FAQ
