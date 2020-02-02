# Students OpenAPI.

## Why a Standard?

Design and develop a RESTful API is not hard, but mantaining it, creating documentation for other people on your team to understand what it does, it is. By using a Standard, such as [OpenAPI (a.k.a Swagger)](https://swagger.io/), you are following some conventions and community best practices when designing RESTful APIs. 

## Why using OpenAPI Standard?

Using [OpenAPI Standard](https://swagger.io/), you can develop a RESTful API by defining an OpenAPI document (JSON or YAML syntax) and you can generate documentation based on it, so you're writing documentation for your API at the same time you're developing it. This way, API development is made easier, creating the documentation automatically so your team can read it and understand how to consume it.
Another advantage of [OpenAPI](https://swagger.io/) is that they provide some useful tools for RESTful API development such as: 
- [API Design with Automatic Documentation Creation and Visualization.](https://swagger.io/tools/swagger-editor/).
- [Server-Side Code Generation.](https://swagger.io/tools/swagger-codegen/) 
- [Client-Side Code Generation.](https://swagger.io/tools/swagger-codegen/)

## Getting Started.

The API was developed using [SwaggerHub](https://app.swaggerhub.com/). It's public and available at [Students API.](https://app.swaggerhub.com/apis/lagp0310/students-api/1.0.0)

### Example.

I'll show how to get a Student using [SwaggerHub.](https://app.swaggerhub.com/)

When you go to [Students API.](https://app.swaggerhub.com/apis/lagp0310/students-api/1.0.0), you'll get to a site that looks like the following:

![SwaggerHub API Main Page](/screenshots/0.png "SwaggerHub API Main Page")

There you have three sections:

- Options and API Specification on the **left**,
- Editor in the **middle** and,
- Automatically Generated Documentation for the API definition on the **right**.

In the API Documentation, scroll down to ```Regular Users - GET /students/{studentID}```. You'll see something like this:

![GET Student by it's ID - Main](/screenshots/1.png "Get Student by it's ID - Main")

This is the definition for the [HTTP Verb](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) ```GET``` for the specified ```URI``` at the top (```/students/{studentID}```). Here you can see the required parameters to make this request and the defined responses with the proper [HTTP Code](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml) and an example for each of them.  

Also, in case your API accepts more than one [Media Type](https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types), you can use the dropdown for selecting the proper media type. Here we just defined ```application/json``` media type.  

To make this request, you will need to pass the ```studentID``` parameter to the ```URI```. You can just use the parameter defined or, if you prefer, you can change it.
When you're ready to make the request, just hit the ***Execute*** button.

![GET Student by it's ID - Try it out](/screenshots/2.png "GET Student by it's ID - Try it out")

You'll see the ```curl``` command to make the request along with the request URL.

![GET Student by it's ID - Executed](/screenshots/3.png "GET Student by it's ID - Executed")

If you scroll down, you'll also see the response, which contains:

- HTTP Response Code.
- Response Body.
- Response Headers.
- Request Duration.

![GET Student by it's ID - Response](/screenshots/4.png "GET Student by it's ID - Response")

## Project Structure.

- [dynamic-html](/dynamic-html): API Dynamic Documentation which runs on a Node Server.
- [html](/html): Simple HTML Documentation for the API.
- [html2](/html2): Better HTML Documentation for the API.
- [openapi](/openapi): API Definition (OpenAPI Document; JSON and YAML format).

## Documentation.

Basically, you've everything on the [OpenAPI website](https://swagger.io/).

Also, the following are resources I used when writing this API:

- [OpenAPI Docs.](https://swagger.io/docs/)
- [OpenAPI Specification Version 3.0.2.](https://swagger.io/specification/)
- [Swagger OpenSource Tools.](https://swagger.io/tools/open-source/)
- [SwaggerHub - Awesome Platform for API Development and Testing.](https://swagger.io/tools/swaggerhub/)
- [Swagger's GitHub Repository.](https://github.com/swagger-api)

## Authors.
- Luis Alberto.

## License.
This project is licensed under the MIT License - see the [License.md](LICENSE.md) file for details.