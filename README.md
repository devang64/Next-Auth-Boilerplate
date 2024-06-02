# NextAuth Boilerplate

NextAuth Boilerplate is a versatile and customizable authentication solution tailored for Next.js 14, offering seamless integration. This feature-rich boilerplate not only provides a secure and efficient user authentication process but also acts as a robust foundation for web applications.

![Login to NextAuth App](login_nextauth_app_image_url)
![Sign Up for NextAuth App](signup_nextauth_app_image_url)

## Key Features

- **Next.js 14 Integration**: Utilize the latest features of Next.js 14 for building modern and scalable web applications with enhanced developer experiences.
- **MongoDB and Scalable Data Management**: Store user data securely in MongoDB, ensuring scalability and reliability.
- **Professionally Designed Register and Login Example**: Explore a practical example of implementing a secure register and login system with a quality professional design.
- **Multi-Provider Support**: Integrate popular authentication providers such as Google and GitHub with NextAuth, offering users a variety of login options.
- **Extensibility**: Customize authentication behavior to fit your specific requirements, whether adding new providers, enhancing security measures, or tailoring the user experience.
- **Customizable Login Page**: Tailor the login experience to your application's needs, allowing for the creation of a unique and branded login page.
- **Secure Authentication Flow**: Implement a secure authentication flow with ease.
- **Easy Configuration**: Seamlessly connect your Next.js application to MongoDB by configuring environment variables.
- **App Router and Redirects**:
  - **With App Router**: Manage authentication-related routes, enabling smooth navigation and user experience.
  - **Redirect After Login**: Implement seamless redirection after login, enhancing user engagement and ensuring a fluid user journey.

## Usage and Examples

### Credentials Example
- **Credential Authentication**: Learn how to implement credential-based authentication, enhancing security and user access control.
- **Structured App Directory**: Explore a well-organized app directory showcasing best practices for implementing NextAuth within a Next.js project.
- **Auth Adapters for Customization**: Understand the power of Adapters for customizing data storage and authentication behavior, ensuring flexibility and adaptability.

### Multi-Provider Support
- **Social Authentication**: Enable users to sign in using popular social media accounts such as GitHub and Google, with the flexibility to include additional authentication providers as needed.

### Responsive Design
- **User-Friendly Interface**: Provide a seamless experience across devices with a responsive and thoughtfully designed user interface, ensuring accessibility and user engagement.

## Getting Started

### Prerequisites
- Node.js (>=18.17)
- Internet connection

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/devang64/Next-Auth-Boilerplate.git
    ```

2. **Install dependencies**:
    ```bash
    cd folder_name
    npm install
    ```

3. **Configure environment variables**:
    - In the root directory, create a `.env` file and configure the following variables:
      ```env
      MONGO_URI=
      GITHUB_CLIENT_ID=
      GITHUB_SECRET=
      NEXTAUTH_SECRET=
      NEXTAUTH_URL=
      GOOGLE_CLIENT_ID=
      GOOGLE_SECRET=
      ```

4. **Run the application**:
    ```bash
    npm run dev
    ```

