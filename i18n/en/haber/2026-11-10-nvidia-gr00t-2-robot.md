---
title: "Nvidia's robot model GR00T 2 learns a new task from five demonstrations"
excerpt: "At CoRL 2026, Nvidia unveiled the GR00T 2 model for humanoid robots and Isaac Lab 3.0; according to the company, five demonstrations raise success to 95 percent."
hook: "Five demos, a new skill"
fact: "95%"
factLabel: "Average success with five demonstrations"
category: "News"
---
On 9 November, at the Conference on Robot Learning (CoRL 2026) held in Austin, Nvidia announced GR00T 2, a new AI model for humanoid robots, and Isaac Lab 3.0, its robot simulation tool.

## A new task from a few demonstrations

Nvidia describes GR00T 2 as a "world action model" that can adapt to new tasks and different robot bodies with only a few demonstrations. Besides robot data, the model was trained on 100,000 hours of human video filmed from a first-person point of view. In other words, the robot also learns by watching how people use their hands.

According to Nvidia's own measurements, in an evaluation of 50 tasks the model reached an average success rate of 71 percent with a single demonstration and 95 percent with five. Even with no demonstrations at all, it completed 40 of the 50 tasks at least once. The tasks include dexterous manual work such as aligning gears, plugging in cables and fine assembly. These figures have not gone through an independent audit. Foxconn, Siemens and Nexuni are among the first companies to try the model.

## Isaac Lab 3.0

The new version of Isaac Lab, where robots are trained in a virtual environment before going out into the real world, supports the Newton physics engine, which better simulates flexible objects such as cables and fabric. According to Nvidia, training speed in the dexterous hand movement test increased by up to 2.5 times. Isaac Lab 3.0 has been released as open source; however, it also includes breaking changes that require developers to adapt their old code.

## Why it matters

Teaching a robot a new task today usually takes thousands of trials and custom engineering. If learning from a few demonstrations also holds up in real factories, switching humanoid robots between different jobs could become much cheaper. If you are curious where interaction with computers began, take a look at our [first computer mouse](/yazi/ilk-bilgisayar-faresi-tahta-1964/) article.
