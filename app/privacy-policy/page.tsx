import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: May 20, 2025</p>

            <h2 className="text-xl font-bold mb-4 mt-8">1. Introduction</h2>
            <p className="mb-4">
              At Bilal Technical Services ("we," "our," or "us"), we respect your privacy and are committed to
              protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website www.bilaltechnical.services or use our services.
            </p>
            <p className="mb-4">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site or use our services.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">2. Information We Collect</h2>
            <p className="mb-4">
              We may collect personal identification information from you in various ways, including, but not limited
              to, when you visit our site, register on the site, fill out a form, or in connection with other
              activities, services, features, or resources we make available.
            </p>
            <p className="mb-4">The personal information we collect may include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Contact information including email address and phone number</li>
              <li>Address and location details</li>
              <li>Information about your service requirements</li>
              <li>Other information relevant to customer surveys and/or offers</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">3. How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect from you for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To improve our website and services</li>
              <li>To process transactions and send related information</li>
              <li>To send periodic emails regarding your orders or other products and services</li>
              <li>To respond to inquiries, questions, and/or other requests</li>
              <li>To personalize your experience and deliver content relevant to your interests</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">4. Information Protection</h2>
            <p className="mb-4">
              We adopt appropriate data collection, storage, and processing practices and security measures to protect
              against unauthorized access, alteration, disclosure, or destruction of your personal information,
              username, password, transaction information, and data stored on our site.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">5. Sharing Your Personal Information</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal identification information to others. We may share generic
              aggregated demographic information not linked to any personal identification information regarding
              visitors and users with our business partners, trusted affiliates, and advertisers.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">6. Third-Party Websites</h2>
            <p className="mb-4">
              Users may find content on our site that links to the sites and services of our partners, suppliers,
              advertisers, sponsors, licensors, and other third parties. We do not control the content or links that
              appear on these sites and are not responsible for the practices employed by websites linked to or from our
              site.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">7. Changes to This Privacy Policy</h2>
            <p className="mb-4">
              Bilal Technical Services has the discretion to update this privacy policy at any time. When we do, we will
              revise the updated date at the top of this page. We encourage users to frequently check this page for any
              changes to stay informed about how we are helping to protect the personal information we collect.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">8. Your Acceptance of These Terms</h2>
            <p className="mb-4">
              By using this site, you signify your acceptance of this policy. If you do not agree to this policy, please
              do not use our site. Your continued use of the site following the posting of changes to this policy will
              be deemed your acceptance of those changes.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, the practices of this site, or your dealings with
              this site, please contact us at:
            </p>
            <p className="mb-4">
              Bilal Technical Services
              <br />
              International City, Dubai, UAE
              <br />
              Email:{" "}
              <a href="mailto:info@bilaltechnical.services" className="text-blue-600 hover:underline">
                info@bilaltechnical.services
              </a>
              <br />
              Phone:{" "}
              <a href="tel:+971568480376" className="text-blue-600 hover:underline">
                +971568480376
              </a>
              <br />
              Website:{" "}
              <a href="https://www.bilaltechnical.services" className="text-blue-600 hover:underline">
                www.bilaltechnical.services
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
