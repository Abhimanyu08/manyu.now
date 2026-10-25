---
title: Abhimanyu's work
description: Work that I've done so far
hideTitle: true
---

# [Putting scene](https://puttingscene.com)

Putting scene is an app/website where users flock to book the interesting offline events happening in Bangalore. The way it differentiated itself from other local competitors like District was by manually curating the good events out of a large volume of events from other websites (yes, we listed events listed on our competitors's website too) and by partnering with interesting venues/resturants to list events on the app/website. This means that it required three pieces of software

- An app/website for consumers to come and book events.
- A platform for restaurants/venues i.e partners to upload events and see bookings.
- An internal dashboard for operations team through which they could upload the manually curated events and oversee the event and partner details.

As the founding engineer, I saw built and launched the Putting Scene website, Partner dashboard and Admin dashboard within first quarter of me joining the company.
I then built the company's first ever Android and iOS app while learning how to build one on the go. The app was built and launched on 9th October, 2025.

# Emergent 


Note: `pre-llm` All the code written while working was almost pre-llm. The most you could do was paste in your code into ChatGPT's chat box and paste that output back into your code editor. 

I joined Mukund Jha, founder of Dunzo and Madhav Jha in the pre-seed phase of [Emergent](https://emergent.sh) on the recommendation of [Siddharth Sharma](https://svs.io). At that time we were heavily in experimentation phase but our initial goal was the build an Agent which could automate UI testing of apps and websites. An MVP, I built an agent which could take natural language commands like "Book a flight from me from Bombay to Delhi" and write playwright code to achieve the goal.
I later built a telegram bot which could receive these intructions as telegram messages. It would operated on a remote machine to achieve it's goals and would converse with user if it got stuck anywhere.

Although impressive when they worked, these demos were extremely flaky. Thankfully, the demo worked on call during our YC interview. I'm not sure how big of a role it played, but we eventually got into YC.



# [A better journal](https://abetterjournal.com)

`pre-llm`

Me and [Judah](https://joodaloop.com) collaborated on making a journalling app which we claimed was better than anything on the market. We set out to make an app which we could use to track our day and what projects we worked on. But, after I made v0 of the app as an SPA, we expanded our goals to make this app local-first i.e It should be usable locally, without any network connection. 
This meant, we took on a full rewrite of the app including writing a [Sync engine](https://manyu.now/better-journal-sync) - A system which syncs changes made by user periodically to the server while the UI code read/writes from IndexDB in the browser. This is one of the most challenging technical task I've done till date. 
Although, we stopped using the app ourselves and thereby developing it further, I'm still proud of how app looks/feels when using. 

# Notedown

`pre-llm`

A markdown based note-taking tool on web in which you could execute the code written in markdown code blocks in a remote sandbox! If none of that made sense watch this demo video - https://youtu.be/eOq9_mD1TNo

I was really proud to have made something which followed [Knuth's literate programming paradigm](https://en.wikipedia.org/wiki/Literate_programming), but had to shut it down because of extremely costly and brittle architecture. Me and a couple of my friends used this extensively for a year. 

All that is left of this project is the demo video and it's github repositories

1. Notedown frontend - https://github.com/Abhimanyu08/Notedown
2. Notedown backend - https://github.com/Abhimanyu08/Notedown-rce-server

# [sarbjeet-dubey.blog](https://sarbjeet-dubey.blog/)

My father is extremely fond of writing. But, he stopped writing as his hands used to tremor because of B-12 deficiency. He also couldn't type because learning to type was too big of a learning curve for him. Thankfully, he discovered excellent speech-to-text on Google keyboard and started putting his thoughts on paper (or I should say notes app). He started writing essays and distributing them by individually sending them to each one of his friends using WhatsApp. Seven years later, he's still going strong and has been extremely prolific in his output. But, his distribution methods still lagged behind. 

So, I decided to build a website for him which hosts all of his essays. I scraped them off of his WhatsApp chats and hosted them on https://sarbjeet-dubey.blog. Another problem I needed to solve was of updating the archive on the website whenever he published a new essay. I then built a telegram bot which would take his essays as a normal message and publish them on the site by pushing that essay to github repository of his website. I was really proud of this one because it didn't even take him a day to get used to  this system as it was almost like sending an essay to a friend on WhatsApp. 

# [Kasrat](https://kasrat.app)

Me and brother have been building a workout tracking app in our free time. Stay tuned!
