---
title: "The 2038 Problem: Why Will Some Computers Jump Back to 1901?"
excerpt: "32-bit Unix time runs out at 03:14:07 UTC on January 19, 2038, and older systems may think it's December 13, 1901. What is the 2038 problem, and how is it being fixed?"
hook: "Computers will jump back to 1901!"
fact: "03:14:07"
factLabel: "January 19, 2038, UTC: the 32-bit limit"
category: "Computing"
---
As we headed into the year 2000, the world talked about a computer bug called "Y2K". Now another date is coming: January 19, 2038. The moment the clock passes 03:14:07 (UTC) on that day, some older computers may suddenly flip their calendar back to 1901. This isn't a science fiction scenario, it's a simple math problem.

## How do computers count time?

Unix and many systems derived from it don't store time as a clock or a calendar, but as a single number. That number is the count of seconds since midnight (UTC) on January 1, 1970. It's called "Unix time".

The problem is that on many older systems this number is stored as a signed 32-bit integer. The largest value a signed 32-bit number can hold is 2,147,483,647, which is 2 to the power of 31 minus 1. That many seconds comes to roughly 68 years. "Signed" means one bit is set aside to say whether the number is positive or negative. So not all 32 bits are used for the magnitude, only 31.

Add 68 years to 1970 and you reach 2038. The math lands exactly on January 19, 2038, 03:14:07 UTC.

## What happens one second later?

One second after the counter hits its maximum value, it overflows. Think of the old mechanical odometers in cars: after 999,999 they roll over to 000,000. Something similar happens here, except that because the number is signed, the value wraps around to a very large negative number.

An affected system reads that negative number as seconds counted backwards from 1970. The result: the date shows up as December 13, 1901, 20:45:52 (UTC). A computer that has suddenly gone back 136 years may start misbehaving: certificates, timers, logs and date comparisons can all go wrong.

> **Did you know?** This problem has already shown up in some software without waiting for 2038. According to Wikipedia, in 2006 the AOLserver software crashed after setting a timeout value one billion seconds into the future pushed it past the 2038 limit. In other words, any program that calculates "a date in the future" can hit the limit today. A similar 32-bit limit also caused trouble for Microsoft Exchange in 2022: the version number of an update was read like a timestamp and exceeded the limit, so malware scanning functions stopped working.

## Who is at risk?

The vast majority of modern phones and computers you use every day now use 64-bit time values. The real risk is in systems that have run for many years without being updated. Wikipedia especially highlights legacy and embedded systems: industrial controllers, some network devices, in-car systems, and other machines that were installed once and forgotten.

Because such devices are rarely updated, when 2038 arrives there may still be a piece inside them counting time in 32 bits.

| 32-bit signed time | 64-bit signed time |
|---|---|
| Maximum value 2,147,483,647 | A far larger range |
| Limit: January 19, 2038 | Limit: roughly 292 billion years from now |
| Legacy and embedded systems | Modern operating systems |

## The fix: a bigger counter

The difficulty here is more practical than technical. Changing the size of the number that holds time can affect every program that uses it, every file format and every database field. Fixing a single line is easy; finding and updating all the software inside a device can take years.


The fix is simple in concept: store time as a 64-bit signed number. According to Wikipedia, this pushes the overflow moment out by roughly 292 billion years. That is far beyond the current age of the universe.

This transition has been under way for years. According to a January 2020 Phoronix report, Linux 5.6 was being prepared as the first mainline kernel release that could lay the groundwork for 32-bit systems to keep running past 2038. Wikipedia notes that Linux 5.6, released in 2020, added 64-bit time support on 32-bit architectures. For this to work, applications also need to be recompiled with 64-bit time.

Another proposed fix is to make the number unsigned. But that only moves the limit to 2106 and breaks the handling of dates before 1970. That's why the real way forward is seen as moving to 64 bits.

Y2K didn't turn into a huge disaster because people worked on it in advance. Do you think the same quiet heroism will repeat itself in the years left before 2038?
