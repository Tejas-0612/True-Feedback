<div align="center">
  <br />
    <a href="https://true-feedback-green.vercel.app/" target="_blank">
     <p style="font-size: 3.5rem; line-height: 2rem; font-weight: 700; margin-bottom: 1rem; color:white">True Feedback</p>
    </a>

  <br />

  <p>A Platform for Collecting Anonymous Feedback</p>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. 🔋 [Features](#features)
3. ⚙️ [Tech Stack](#tech-stack)
4. 🤸 [Quick Start](#quick-start)
5. ⚖️ [License](#license)
6. 🙏🏻 [Acknowledgements](#acknowledgements)

## <a name="introduction">🤖 Introduction</a>

This platform is a **feedback collection app** that enables users to generate shareable links for receiving **anonymous feedback**. Users can easily share these links, and anyone with access can provide feedback without revealing their identity. With a sleek and intuitive interface, the app simplifies the process of gathering honest input, fostering open communication and engagement.

## <a name="features">🔋 Features</a>

👉 **User Authentication:** Users can sign up and log in using their email and password for secure access.

👉 **Email Verification:** New users must verify their email address to activate their account, ensuring valid registrations.

👉 **Link Generation:** Users can generate unique, shareable links to receive feedback.

👉 **Anonymous Feedback:** Feedback received through the link is completely anonymous, ensuring privacy.

👉 **Dashboard:** Users can manage their feedback links and view received feedback on a simple dashboard.

👉 **Copy Link:** Easily copy the generated link to share with others.

👉 **Feedback Submission:** Visitors can submit feedback quickly through a clean, easy-to-use form.

👉 **Feedback Storage:** All feedback is securely stored and only visible to the link creator.

👉 **Link Deactivation:** Users can deactivate or delete feedback links as needed for better control.

and many more, including real time event listening and reusability

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- next-auth
- MongoDB
- Shadcn UI
- TailwindCSS
- React Hook Form
- Zod
- TypeScript

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Tejas-0612/True-Feedback.git
cd True-Feedback
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
MONGODB_URI=
RESEND_API_KEY=
NEXTAUTH_SECRET=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up for the corresponding websites on [MongoDB](https://www.mongodb.com/), [Clerk](https://clerk.com/), and [Uploadthing](https://uploadthing.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="license">⚖️ License</a>

Distributed under the MIT License. See LICENSE for more information.

## <a name="acknowledgements">🙏🏻 Acknowledgements</a>

- <a href="https://vercel.com/" target="_blank"> Vercel</a> - For providing a seamless deployment experience and performance optimization.

<br />

#
