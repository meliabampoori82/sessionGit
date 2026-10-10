import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner.jsx';
import { site } from '../data/site.js';

const content = {
  privacy: {
    label: 'Legal',
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'About this policy',
        body: 'This is a demonstration website. It does not operate a production customer database, and the placeholder text below describes intent rather than a live legal agreement.',
      },
      {
        heading: 'What we collect',
        body: 'Forms on this site collect the details you type in — name, email, phone number and message. In this demo those details are stored in your own browser only, using local storage, and are not transmitted anywhere.',
      },
      {
        heading: 'Favourites',
        body: 'Saved vehicles are held in your browser under a local storage key. Clearing your browser data removes them.',
      },
      {
        heading: 'Third-party content',
        body: 'Photography is served from a third-party image CDN, which may receive your IP address and request headers when images load.',
      },
      {
        heading: 'Contact',
        body: `Questions about this page can be sent to ${site.email}. Replace this policy with your own reviewed text before publishing the site.`,
      },
    ],
  },
  terms: {
    label: 'Legal',
    title: 'Terms and Conditions',
    sections: [
      {
        heading: 'Demonstration content',
        body: 'All vehicles, prices, specifications and availability shown on this site are sample content used to demonstrate the design. Nothing here is an offer to sell, and no vehicle is claimed to be in stock.',
      },
      {
        heading: 'Estimates',
        body: 'Monthly payment figures produced by the finance calculator are estimates only. Actual terms depend on lender approval, credit history, taxes and fees.',
      },
      {
        heading: 'Submissions',
        body: 'Test drive requests, contact messages and newsletter signups on this demo are stored locally in your browser and are not delivered to any dealership.',
      },
      {
        heading: 'Brands',
        body: `${site.name} is an independent dealership and is not affiliated with, authorised by, or an official partner of any vehicle manufacturer. Manufacturer names are used for descriptive purposes only.`,
      },
      {
        heading: 'Replacing these terms',
        body: 'Substitute these placeholder terms with your own legally reviewed documents before publishing the site.',
      },
    ],
  },
};

export default function Legal({ page = 'privacy' }) {
  const doc = content[page] ?? content.privacy;

  return (
    <>
      <PageBanner label={doc.label} title={doc.title} crumbs={[{ label: doc.title }]} />

      <section className="section">
        <div className="shell legal">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}

          <p className="legal__back">
            <Link className="link-arrow" to="/">
              Back to home
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
