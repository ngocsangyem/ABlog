# Client

-   In front-end we submit user detail to the **_server_**
-   **_Server_** will fetch the api user detail along with **ID**. At this point **_server_** will generator a **Token**
-   Then send the **Token** to the front-end. When the **Token** receive Angular will store it in **Localstroage** of the browser
-   Then browser will send back the **Token** to the **_server_**, if the **Token** have been same the **_server_** will return back the admin view, Otherwhise it will return user view
