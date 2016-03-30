# Train Calling points

This project is generated with [React Redux Starter Kit](https://github.com/davezuko/react-redux-starter-kit)
Please note that files, environment settings are unchanged from the starter kit. The only files changed or added
are relevant to this exercise

## Build & development

1. npm install
2. npm test
3. npm start
4. Then visit `localhost:3000` in your browser.
http://localhost:3000

---

## Testing

1. npm test

This project has been tested in three mordern browsers viz. [Chrome](http://i.imgur.com/FqOVTGP.png), [Firefox](http://i.imgur.com/ReKyCLU.png) and [Microsoft Edge](http://i.imgur.com/zZQYFMl.png). Results can be found on clicking in the links

## ThoughtProcess while working on this project
1. This is an interesting problem, I first thought of creating a template of calling points. This is possible when there are no 'actual' property present in the data.
![first.png](http://i.imgur.com/wou9e0V.png)

2. Then I started putting in the 'actual' property in the data to see the station covered.
![second.png](http://i.imgur.com/OD1JOc6.png)

3. And at last, I'm assuming that when the journey is finished, the station icon is never reached the destination point.
![third.png](http://i.imgur.com/ffrMt1o.png)

4. And at last, what happens when 'actual' property exists in subsequent stations, this -
![fourth.png](http://i.imgur.com/6h9aG32.png)

---
## Data
###data.json

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
