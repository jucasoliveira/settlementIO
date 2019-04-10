# contentIO
A blockchain cloud plaform for content review

As social media grow, the content inserted on that surpass millions of billions of data, and unfortunatelly the review of their contents are unaccurate.
We can see a lot of users complaining that their content were demonetized, deleted or their account blocked. On the other way, news websites, blogs and others websites which have commentary section have a hard time to review and block texts that have hate speech, unadiviced/missleading context, etc.

With that problem we see the governments having a stronger approach trying to finish with the freedom of speech on the internet. Our belief is that the speech on the platforms must be up to their policies to define what is allowed or not to be told , shared or viewed, not to the goverment. And that's the main reason this platform it's being created.

So, in order to take content review to a new level , a new approach for this issue needs to be approached.

## Goal

To create a blockchain notary book where the content to be reviewed will be issued, reviewed and the result recorded , using digital signature and third party reviewers.


## Process

1. The **Issuer**: a company like Facebook , request to the blockchain a content to be reviewed , issuing a value(bounty) to be paid for that content.

2. The **Reviewer**: The first `n` users connected to the platform who selfAssign the review lock the analisis of that content and give their result, the distribution of the review it's held by the **Witness**, who assign the review on the pool and check the  **Reviewer** `poor-of-integrity`, based on the issuer internal policies. The users can't know each others , so that the system works a non-trustfull nodes.

3. The **Witness**: The **Witness** it's the algorithm(miner) which will hold the distribution of the **Issuer** content for review trough the **Reviewers** , defined by `location` , `reputation`, `proof-of-stake`. Once the **Reviews** are issued, **Witness** algorithms take the reviewers result, and record the content result on the blockchain, working as a notarybook for consultation by the **Issuer**. Therefore the prize value are divided between the **Reviewers** and credit on their account, which will be paid montlhy/weekly. A **Witness** node who insert the **Review** first it's granted the fee charged from the **Issuer**.

4. **Appealling** : users/reporters can appeal te result of the review and a new request are issued. `n` appeals can be granted by review, defined by the **Issuer**


## Pros
Companys can use the platform where the pool of nodes to be reviewed can give more returns for the content **Reviewers**
Platform can be `onPrem` or `onCloud`.
**Reviews** can be more reliable.

## Cons

Who review the **Reviewer**

Develop how the platform will recieve the content from the **Issuer** and deliver it to the **Reviewer**

Define how a appeal must be accepeted by a **Reviewer**. A `punitive proof-of-stake` must be implemented to enforce the need of the reviewer be trustfull on his/her review(also can work for managing the user behaviour)


## Security measurement
How to secure the block

## Proof-of-Integrity

A algorith where the integrity of the **Reviewer** it's pointed, based on his acitivity durring it's review process.
