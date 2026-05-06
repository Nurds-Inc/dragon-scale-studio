import { PageLayout } from "@/components/PageLayout";

const Privacy = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="text-muted-foreground mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Submit an inquiry through our contact form</li>
            <li>Register for music lessons or programs</li>
            <li>Communicate with us via email or phone</li>
          </ul>
          <p className="mb-4">
            This information may include your name, email address, phone number, 
            and details about your inquiry or interest in our programs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Communicate with you about our programs and services</li>
            <li>Process registrations and payments</li>
            <li>Improve our website and services</li>
            <li>Send you updates and marketing communications (with your consent)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Children's Privacy (COPPA Compliance)</h2>
          <p className="mb-4">
            We are committed to protecting the privacy of children. Our website and services 
            are directed to parents, guardians, and schools. We do not knowingly collect 
            personal information from children under 13 without parental consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
          <p className="mb-4">
            We do not sell, trade, or rent your personal information to third parties. 
            We may share information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who assist in our operations</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement reasonable security measures to protect your information from 
            unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Cookies and Analytics</h2>
          <p className="mb-4">
            We use Google Analytics to understand how visitors use our website. 
            This helps us improve our services and user experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. We will notify you of 
            any changes by posting the new policy on this page with an updated date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this privacy policy, please contact us:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">Email: angela@dragonscalestudio.com</li>
            <li className="mb-2">Phone: (480) 588-0709</li>
            <li className="mb-2">Address: 20522 E Superstition Dr, Queen Creek AZ 85142</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
};

export default Privacy;
