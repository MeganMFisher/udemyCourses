Promises represent the number one way we will interact with the mongo database. 

3 states of Promises

#1.unresolved: waiting for something to finish

#2.resolved: something finished and all went ok

#3.rejected: something finished and something went bad.


We can change the state of the promise by either calling resolve or reject. 

When resolve anything attached to the .then() will run.

When reject anything attached to the .catch() will run.

Promise can only ever be one or the other of these states. Once it is one it cant change to the other. 

