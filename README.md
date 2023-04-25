# Front-end for URL Shortener
This is the front-end part of a full-stack URL shortener application. It is built using React, and communicates with the back-end API to shorten URLs and retrieve usage statistics.

## Installation
To install and run the application, you can follow these steps:

- Clone the repository using git clone
- Navigate to the project directory using cd url-shortener-front-end
- Install the required dependencies using npm install
- Start the development server using npm start
- This should launch the application in your default browser.

## Usage
The application has two main components: the Register and Login pages, and the URL Shortener and Statistics views.

### Register and Login
When you first launch the application, you will be presented with the Register page. Here, you can create a new account by entering your username and password.

Once you have created an account, you can log in to the application using your username and password. After logging in, you will be redirected to the URL Shortener view.

### URL Shortener
The URL Shortener view allows you to enter a long URL, which will be shortened and displayed in the table below. To shorten a URL, simply enter it in the input field and click the "Shorten" button.

Once a URL has been shortened, it will be displayed in the table below along with its corresponding short URL. You can copy the short URL to your clipboard by clicking the "Copy" button next to the corresponding row.

### Statistics
The Statistics view displays a table of all the URLs that you have shortened, along with their corresponding short URLs and usage statistics. To view the statistics for your URLs, click on the "View My URLs" button. This table is a react component that will automatically reload after a succesful form submission of a long URL.

## Conclusion
The front-end part of this full-stack URL shortener application allows you to create an account, log in, and shorten URLs. It also provides usage statistics for the URLs that you have shortened. The application is built using React, and communicates with the back-end API to provide these features. The Back-end API was build on another repo using technologies such as Postgresql, Node, Postman, JWTs and more. 