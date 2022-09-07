# Chat with Min (Web)
_Copyright © 2022 Min Kabar Kyaw_  

Web version of chat application implemented ![here](https://github.com/mink0003/chat-application-desktop), with extra features. This project uses the React framework with Javascript as the frontend and Firestore for backend operations.

## Introduction
A simple chat program to send and receive messages via a server in Firestore. The user enters a "secret" in order to access the chat page to send messages to Min. You cannot chat with Min without the secret.

## System Features:
Unlike the ![desktop implementation](https://github.com/mink0003/chat-application-desktop) which deals with lower level network sockets, using a high-level frameworks and modules like React and Firestore reduces the need to mange certain facets of the application, such as threading and UI state changes: Javascript automatically handles async calls to its Web API (despite its single-threaded nature), and the React framework handles changes in UI components through automatic re-rendering whenever there is a UI state change.

- **Responsive Design:** UI elements made with ![Material UI](https://mui.com/material-ui/getting-started/overview/) and its ![Breakpoint](https://mui.com/material-ui/customization/breakpoints/#main-content) API allow for component size adaptation based on device size
- **Firestore:** Chat messages are stored as documents in a collection in Firestore, with each document containing information on the name, message and timestamp of the message.
- **Real-time Chat Updates:** An observer is set on a document in Firestore that updates the UI state of the chat screen component whenever there is a change (and hence triggering React to re-render the component and updating the UI).
- **Authentication:** The "secret" is tied to an account in Fire Authentication, which sets the user object that is referenced to grant access to private pages.
## Application Preview
<img src=https://user-images.githubusercontent.com/76023265/184114938-b11e6c55-7093-46b2-b5f4-ebaf9ec23d25.png width=800/><img src=https://user-images.githubusercontent.com/76023265/184115188-f56c025d-50b5-4048-bbf0-fd6229064d2d.png width=400/><img src=https://user-images.githubusercontent.com/76023265/184115302-5a084f67-5df4-4fcd-a403-0c496bc8cac1.png width=400/><img src=https://user-images.githubusercontent.com/76023265/184115641-20cca0d3-8f8d-41cc-829c-b30c18357ad0.png width=400/><img src=https://user-images.githubusercontent.com/76023265/184115736-33ecce99-7dd3-486f-8525-1386e290d81e.png width=400/>





