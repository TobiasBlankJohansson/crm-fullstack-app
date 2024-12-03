export function Footer() {
    return (
      <div className="bg-[#0469a2] text-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-sm text-center mb-4">
            &copy; {new Date().getFullYear()} ANCHOR SWEDEN AB. All Rights Reserved.
          </p>
          <p className="text-sm text-center">
            Stockholm Office: 123 Business Lane, Stockholm, 100 12
          </p>
          <p className="text-sm text-center mb-4">
            Phone: +46 8 123 456 78
          </p>
  
          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm4.25-2.75a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.99h5V24H0zM8.59 8.99h4.6v2.01h.07c.64-1.17 2.14-2.39 4.41-2.39 4.67 0 5.53 3.07 5.53 7.05V24h-5v-6.33c0-1.51-.03-3.44-2.12-3.44-2.12 0-2.45 1.65-2.45 3.36V24h-5V8.99z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
  }
  