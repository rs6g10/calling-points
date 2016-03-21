# ttl-engineering for rahuldevendra.sharma@gmail.com

This project is generated with [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
Please note that files, environment settings are unchanged from the starter kit. The only files changed or added
are relevant to this exercise

## ThoughtProcess while doing this assignment
--TODO

## Build & development

1. npm install
2. npm test
3. npm start
4. Then visit `localhost:3000` in your browser.
http://localhost:3000

---
## Testing

1. npm test

This assignment has been tested in three mordern browsers viz. [Chrome](http://i.imgur.com/FqOVTGP.png), [Firefox](http://i.imgur.com/ReKyCLU.png) and [Microsoft Edge](http://i.imgur.com/zZQYFMl.png). Results can be found on clicking in the links

#UI Developer Technical Exercise

Using the supplied live departure board data (ldb.json), create a web page that faithfully reproduces the mock-up (see mockup.png).

We expect you to test drive your code, ensuring data integrity and consistent mark-up generation.

###ldb.json

```javascript
{
    "journey": {
        "origin": "London Euston",
        "destination": "Manchester Piccadilly",
        "scheduled": "14:00"
    },
    "callingPoints": [
        {
            "station": "London Euston",
            "scheduled": "14:00",
            "expected": "14:00",
            "actual": "14:00",
            "platform": ""
        },
        {
            "station": "Stoke-On-Trent",
            "scheduled": "15:25",
            "expected": "15:35",
            "actual": "15:35",
            "platform": "2"
        },
        {
            "station": "Macclesfield",
            "scheduled": "15:41",
            "expected": "15:50",
            "platform": "1"
        },
        {
            "station": "Stockport",
            "scheduled": "15:56",
            "expected": "16:03",
            "platform": "3"
        },
        {
            "station": "Manchester Piccadilly",
            "scheduled": "16:07",
            "expected": "16:11",
            "platform": "7"
        }
    ]
}
```
