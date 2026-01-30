type FAQ = {
  question: string;
  answer: string;
};

export type FAQSectionKey =
  | "homecare"
  | "insurance"
  | "lawfirms"
  | "privatesecurity";

export const FAQSections: Record<FAQSectionKey, FAQ[]> = {
  homecare: [
    {
      question: `What is a Home Care Virtual Assistant?`,
      answer: `
          A Home Care Virtual Assistant (VA) is a trained, remote professional
          who supports your agency with tasks such as scheduling caregivers,
          coordinating services, managing intakes, billing support, and client
          communication—so your on-site team can focus on patient care.
        `,
    },
    {
      question: `Are your VAs experienced in the home care industry?`,
      answer: `
          Yes. We recruit bilingual, industry-specific professionals who
          understand the unique workflows and compliance requirements of home
          care agencies.
        `,
    },
    {
      question: `Is patient information secure and HIPAA-compliant?`,
      answer: `
          Absolutely. We have the resources, secure data systems, and advanced
          tech equipment to keep your client information private and compliant.
          Every VA is trained in confidentiality and HIPAA protocols, so you can
          trust that sensitive data stays protected.
        `,
    },
    {
      question: `Can a VA handle scheduling across multiple locations?`,
      answer: `
          Yes. Our VAs are skilled at managing complex schedules for
          multi-location or multi-disciplinary teams, ensuring seamless
          communication between caregivers, clients, and administrators.
        `,
    },
    {
      question: `Do you offer bilingual or multilingual support?`,
      answer: `
          We do. All of our VAs are bilingual (English/Spanish) and can support
          agencies that serve diverse client populations.
        `,
    },
    {
      question: `How quickly can we get started?`,
      answer: `
          Most agencies are matched with a qualified VA within a few business
          days. After a brief onboarding call, your VA can begin handling tasks
          immediately.
        `,
    },
    {
      question: `How much does a Home Care VA cost compared to hiring in-house staff?`,
      answer: `
          Hiring a VA through InteractiveWorkers is a cost-effective alternative
          to adding full-time staff. You get experienced support without the
          overhead of benefits, payroll taxes, or long hiring cycles.
        `,
    },
  ],
  insurance: [
    {
      question:
        "How can InteractiveWorkers’ Remote workers help my insurance company manage claims more efficiently?",
      answer: `
          Our Remote workers handle claim intake, documentation, follow-ups, and
          customer communication, helping you reduce backlogs and process claims
          faster without hiring additional staff.
        `,
    },
    {
      question:
        "Are your virtual assistants familiar with insurance compliance standards?",
      answer: `
          Yes. All our Remote workers are familiar with insurance industry
          protocols and follow strict data security and confidentiality policies
          to protect sensitive client information.
        `,
    },
    {
      question: "Do you offer bilingual support for policyholders?",
      answer: `
          Absolutely. We provide English- and Spanish-speaking Remote workers so
          you can serve a wider client base seamlessly without language
          barriers.
        `,
    },
    {
      question:
        "Can your Remote workers assist with customer service as well as claims?",
      answer: `
          Yes. In addition to claims coordination, our Remote workers handle
          inbound calls, policyholder inquiries, and follow-ups, freeing your
          licensed staff to focus on higher-value tasks.
        `,
    },
    {
      question: "How do you ensure quality and accuracy in claims support?",
      answer: `
          We use real-time productivity and reporting tools to track tasks,
          maintain accuracy, and keep you informed—without micromanaging.
        `,
    },
    {
      question:
        "How does working with InteractiveWorkers save my insurance company money?",
      answer: `
          You reduce recruitment, training, and overhead expenses while gaining
          skilled, ready-to-work professionals. Many clients cut admin costs by
          40–60%.
        `,
    },
  ],
  lawfirms: [
    {
      question: "Are your virtual assistants trained for legal tasks?",
      answer: `
          Absolutely. Our legal VAs are experienced in law firm operations such
          as client intake, appointment scheduling, translation, call handling,
          and administrative support. They’re trained to understand legal
          terminology and workflows, so your attorneys spend less time
          explaining and more time practicing law.
        `,
    },
    {
      question: "Can your VAs work with case management and legal software?",
      answer: `
          Yes. Our assistants are proficient in common legal platforms (Clio,
          MyCase, PracticePanther, etc.) and can quickly adapt to your firm’s
          specific tools to ensure seamless integration into your existing
          processes.
        `,
    },
    {
      question: "Are your VAs bilingual?",
      answer: `
          Yes. We specialize in bilingual English-Spanish professionals so your
          firm can expand its reach, improve client service, and capture more
          opportunities without language barriers.
        `,
    },
    {
      question:
        "Can your VAs support my firm after hours or across time zones?",
      answer: `
          Absolutely. Our VAs are adaptable to your firm’s schedule — including
          evenings, weekends, or multiple time zones. This 24/7 availability
          means your clients never feel neglected, and your team can rest
          knowing support continues around the clock.
        `,
    },
    {
      question: "Is hiring a VA cost-effective compared to in-house staff?",
      answer: `
          Definitely. Our legal-trained VAs deliver top-tier support at a
          fraction of the cost of full-time in-house employees, helping you cut
          non-billable hours by up to 60%.
        `,
    },
    {
      question: "Can we scale the number of VAs as our firm grows?",
      answer: `
          Yes. InteractiveWorkers is designed to scale with your firm. You can
          add or adjust support as your caseload changes without worrying about
          extra overhead or long-term contracts.
        `,
    },
    {
      question: "How do we get started?",
      answer: `
          Simply schedule a free consultation or request a customized VA
          staffing plan. We’ll evaluate your firm’s needs, recommend the right
          VA roles, and handle onboarding so you can start delegating securely
          and confidently.
        `,
    },
  ],
  privatesecurity: [
    {
      question:
        "How can InteractiveWorkers’ Remote workers help my insurance company manage claims more efficiently?",
      answer: `
          Our VAs are trained to manage calls, assign guards, coordinate shift
          changes, and update logs in real time. This keeps your operations
          responsive, organized, and client-ready at all times.
        `,
    },
    {
      question: "Do your VAs understand private security protocols?",
      answer: `
          Yes. All our Remote workers are familiar with insurance industry
          protocols and follow strict data security and confidentiality policies
          to protect sensitive client information.
        `,
    },
    {
      question:
        "Can your VAs handle emergencies or last-minute schedule changes?",
      answer: `
          Absolutely. Our dispatchers and schedulers are experienced in crisis
          management and can quickly reassign personnel or escalate incidents as
          needed.
        `,
    },
    {
      question:
        "What types of roles can you fill for a private security company?",
      answer: `
          We offer dispatchers, schedulers, HR coordinators, and call center
          agents—covering all back-office and communication needs so your field
          team can focus on protecting clients.
        `,
    },
    {
      question: "Can you provide 24/7 support? How flexible is your coverage?",
      answer: `
          Definitely. Our security-trained VAs deliver top-tier support at a
          fraction of the cost of full-time in-house employees, helping you cut
          non-billable hours by up to 60%.
        `,
    },
    {
      question:
        "Will our clients know they’re speaking with a virtual assistant?",
      answer: `
          We integrate seamlessly with your systems and use your company’s
          scripts and branding so interactions feel like in-house staff—not
          outsourced support.
        `,
    },
    {
      question: "Do your virtual assistants work during holidays and weekends?",
      answer: `
          Yes. Our trained security VAs provide coverage on holidays and
          weekends at no extra cost, ensuring your dispatch, scheduling, and
          call support never misses a beat. This keeps your operations running
          smoothly 24/7, without unexpected overtime charges.
        `,
    },
    {
      question: "How quickly can we scale up or down?",
      answer: `
          You can add or remove VA support as contracts, events, or emergencies
          change. We handle recruitment and training, giving you on-demand
          scalability.
        `,
    },
    {
      question: "Is bilingual support available?",
      answer: `
          Yes. All of our dispatchers and call center agents are bilingual
          (English/Spanish), enabling you to serve a wider client base
          effectively.
        `,
    },
    {
      question: "What’s the ROI compared to hiring in-house staff?",
      answer: `
          Our clients typically reduce administrative costs by 30–50% while
          improving response times. You pay only for the coverage you need—no
          benefits, overtime fee, or recruitment costs.
        `,
    },
  ],
};
