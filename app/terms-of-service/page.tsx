import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">Last Updated: May 20, 2025</p>

            <h2 className="text-xl font-bold mb-4 mt-8">1. Introduction</h2>
            <p className="mb-4">
              Welcome to Bilal Technical Services. These Terms of Service ("Terms") govern your use of our website
              located at www.bilaltechnical.services ("Website") and the services we provide ("Services"). By accessing
              our Website or using our Services, you agree to be bound by these Terms.
            </p>
            <p className="mb-4">
              Please read these Terms carefully before using our Website or Services. If you do not agree to all the
              terms and conditions of this agreement, you may not access the Website or use any Services.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">2. Services</h2>
            <p className="mb-4">
              Bilal Technical Services provides various technical and maintenance services including but not limited to
              painting, AC repair and installation, electrical work, plumbing, carpentry, gypsum work, tiles work, and
              handyman services in Dubai, UAE.
            </p>
            <p className="mb-4">We reserve the right to refuse service to anyone for any reason at any time.</p>

            <h2 className="text-xl font-bold mb-4 mt-8">3. Service Appointments and Cancellations</h2>
            <p className="mb-4">
              When you schedule a service appointment with us, we will make arrangements to provide the requested
              services at the agreed-upon time and location. If you need to cancel or reschedule an appointment, please
              notify us at least 24 hours in advance.
            </p>
            <p className="mb-4">
              We reserve the right to charge a cancellation fee for appointments canceled with less than 24 hours'
              notice or for no-shows.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">4. Payment Terms</h2>
            <p className="mb-4">
              Payment for our services is due upon completion of the work unless otherwise agreed upon in writing. We
              accept various payment methods as specified at the time of service.
            </p>
            <p className="mb-4">
              For larger projects, we may require a deposit before commencing work. The specific payment schedule will
              be outlined in your service agreement or quote.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">5. Warranties and Guarantees</h2>
            <p className="mb-4">
              We provide warranties on our workmanship as specified in your service agreement. The duration and terms of
              the warranty may vary depending on the type of service provided.
            </p>
            <p className="mb-4">
              Our warranties do not cover damage resulting from misuse, abuse, accidents, or normal wear and tear.
              Manufacturer warranties for materials and equipment are passed on to the customer where applicable.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">6. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, Bilal Technical Services shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting
              from:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your use or inability to use our services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any interruption or cessation of transmission to or from our services</li>
              <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our services</li>
            </ul>

            <h2 className="text-xl font-bold mb-4 mt-8">7. Indemnification</h2>
            <p className="mb-4">
              You agree to defend, indemnify, and hold harmless Bilal Technical Services and its licensee and licensors,
              and their employees, contractors, agents, officers, and directors, from and against any and all claims,
              damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to
              attorney's fees) arising from your use of and access to our services.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">8. Governing Law</h2>
            <p className="mb-4">
              These Terms shall be governed and construed in accordance with the laws of the United Arab Emirates,
              without regard to its conflict of law provisions.
            </p>
            <p className="mb-4">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p className="mb-4">
              By continuing to access or use our services after those revisions become effective, you agree to be bound
              by the revised terms. If you do not agree to the new terms, please stop using our services.
            </p>

            <h2 className="text-xl font-bold mb-4 mt-8">10. Contact Us</h2>
            <p className="mb-4">If you have any questions about these Terms, please contact us at:</p>
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
