import { PageLayout } from "@/components/PageLayout";

const Terms = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <p className="text-muted-foreground mb-6">
          Last Updated: {new Date().toLocaleDateString()}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using Dragon Scale Studio's website and services, you accept 
            and agree to be bound by these Terms of Service. If you do not agree to these 
            terms, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
          <p className="mb-4">
            Dragon Scale Studio provides music education services including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Private and group music lessons</li>
            <li>School music programs</li>
            <li>Special events and performances</li>
            <li>Music curriculum development</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Registration and Enrollment</h2>
          <p className="mb-4">
            To enroll in our programs:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You must provide accurate and complete registration information</li>
            <li>Parents/guardians must provide consent for students under 18</li>
            <li>Payment is due at the time of registration unless other arrangements are made</li>
            <li>We reserve the right to refuse service to anyone for any reason</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Payment and Cancellation</h2>
          <p className="mb-4">
            <strong>Payment Terms:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Lesson fees are due at the beginning of each month</li>
            <li>Payment methods include cash, check, or electronic transfer</li>
            <li>Late payments may result in suspension of lessons</li>
          </ul>
          <p className="mb-4 mt-4">
            <strong>Cancellation Policy:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>24-hour notice required for lesson cancellations</li>
            <li>Missed lessons without notice will not be refunded or rescheduled</li>
            <li>We will make reasonable efforts to reschedule lessons canceled by the instructor</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Student Conduct</h2>
          <p className="mb-4">
            Students are expected to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Arrive on time for scheduled lessons</li>
            <li>Bring required materials (instrument, books, etc.)</li>
            <li>Practice regularly between lessons</li>
            <li>Treat instructors, staff, and other students with respect</li>
            <li>Follow studio policies and instructor guidance</li>
          </ul>
          <p className="mb-4">
            We reserve the right to terminate services for students who repeatedly violate 
            conduct expectations without refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Liability and Safety</h2>
          <p className="mb-4">
            Dragon Scale Studio takes reasonable precautions to ensure student safety. However:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Students participate in activities at their own risk</li>
            <li>Parents/guardians are responsible for students before and after lesson times</li>
            <li>We are not responsible for lost, stolen, or damaged personal property</li>
            <li>Students must follow all safety guidelines provided by instructors</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Photography and Media Release</h2>
          <p className="mb-4">
            We may photograph or video record lessons, performances, and events for 
            promotional purposes. By enrolling, you consent to such recording unless 
            you notify us in writing of your objection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
          <p className="mb-4">
            All curriculum, teaching materials, and content provided by Dragon Scale Studio 
            are our intellectual property and may not be reproduced or distributed without 
            written permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms of Service at any time. Changes 
            will be effective immediately upon posting to this page. Continued use of 
            our services constitutes acceptance of modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
          <p className="mb-4">
            These Terms of Service are governed by the laws of the State of Arizona. 
            Any disputes shall be resolved in the courts of Maricopa County, Arizona.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            Questions about these Terms of Service should be directed to:
          </p>
          <ul className="list-none mb-4">
            <li className="mb-2">Dragon Scale Studio</li>
            <li className="mb-2">Email: angela@dragonscalestudio.com</li>
            <li className="mb-2">Phone: (480) 588-0709</li>
            <li className="mb-2">Address: 20522 E Superstition Dr, Queen Creek AZ 85142</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  );
};

export default Terms;
