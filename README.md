# contentIO
A distributed and trustfull judgment system

As social media grow, the content inserted on that surpass millions of billions of data, and unfortunatelly the review of their contents are unaccurate.
We can see a lot of users complaining that their content were demonetized, deleted or their account blocked. On the other way, news websites, blogs and others websites which have commentary section have a hard time to review and block texts that have hate speech, unadiviced/missleading context, etc.

With that problem we see the governments having a stronger approach trying to finish with the freedom of speech on the internet. Our belief is that the speech on the platforms must be up to their policies to define what is allowed or not to be told , shared or viewed, not to the goverment. And that's the main reason this platform it's being created.

So, in order to take content review to a new level , a new approach for this issue needs to be approached.

## Goal

To create a blockchain based on smart contracts where the content to be reviewed will be issued, reviewed and the result recorded , using digital signature and third party reviewers. To achieve this Goal , the contentIO will use a consensus algorithm called `Punitive Proof-of-Adequacy`

## Punitive Proof-of-Adequacy

The punitive Proof-of-Adequacy is a type of algorithm layer by which a cryptocurrency blockchain network aims to use distributed consensus to achieve a result on a **settelment** dispute. In PoA-based cryptocurrencies there are two level of peers, where PoA act choosing _n_ P2P curators([Reviewers](#Reviewer)) of a contestation via various combinations of random selection of [Reputations](#Reputation), and generate the prizes, bounty, point achievements to be shared among peers curators and the creator, known as [Witness](#Witness), of the next block(settlement fee). PoA can work standalone or with any other types of blockchain consensus, being itself a layer of better achievment of a Smart Contract Settlement.

A **settelment** dispute must have a trustfull result, and for that **settelment** have to be reviewed by a odd `n` of [Reviewers](#Reviewer)(_R_). To ensure a result was trustfull, the algorithm allow the [benefit ouf doubt](#benefit-of-doubt) of any **settelment** result, and this doubt it's granted by the 3 p2p actors. They are the 2 parts on the dispute(on contentIO the Reporter(_rr_) and the content creator(_cc_)) and the law abiding **Issuer**(_I_), who is who that's define the base rules and regulations the **issuer** is taking place. The amount of [benefit ouf doubt](#benefit-of-doubt) it's determinated by it's own cryptocurrency blockchain network, but in able to avoid fraud it's recommended to follow the instructions on this paperwork.

### Process

When a _rr_ reports a _cc_ , the _I_ sends to the network the **settelment** to be reviewed(_r_) . The system take a number(_n_) of _R_ , where this _n_ it's a odd quantity of minimum of 7, to a maximum of 25 of _R_, assigned to review the content issued. The _R_ assigned to the content to be reviewed are designated based on the following :

- Position on the assignment pool
- Reputation
- Waiting time

After the designation, the content recieve a feedback of the _n_ assigned peer _R_, and the final [result](#Result) it's settled. The [Result](#Result) then it's sent back to PoA algorithm to record it on a blockchain. 

The PoA send a data to a [pool of results](#pool-of-results), to be recorded on a blockchain. The data must contain the Review reference/data [Result](#Result) of the settlement, the price distribution among the winners of the voting settlement added 60% of the [bounty](#Bounty) issued and reduced by the [Witness](#Witness) fee `G = pd + (b*(60/100)) - wf`, if there is any, the Witness Total Price fee attached to 40% fo a bounty isued `SF = wf + (b*(40/100)) `, if there is any, the hash of all reviewers of the dispute, the Hash related [Reviewers](#Reviewer) of the settlement, and the hash of the writing witness.

```javascript

data : {
  RR: 4A12FE7C3773A2B801BFFEB341A77949,
  G : `${pd + (b*(60/100)) - wf)}`,
  SF : `${wf + (b*(40/100))}`
  RW : [CC54BD37BED550B4F756284A9FF42B4E, 79E9BBAE4E3C33C4EC16E1CCB303EE0B, CD47C54AFED2B25F833610FDB8875908, 0AFB3728EC8AEB70B2B13FB1B6E714E2, 39AAF3FEF253178E15963B9CC27DA138, 92238FEAF3A982CF7D42D6C8FB52D804, 688A044D54361D5762100BD1E6559AF4],
  W: F56146D752AA1B96CB455B59FC017FD9
}

```

> G is the total Grant of the [Result](#Result), pd = price distribution, b = bounty , SF = [Witness](#Witness) settlement fee, wf = [Witness](#Witness) fee

A [Witness](#Witness) it's assigned to generate a block on the blockchain via PoS, PoW or the [Witness](#Witness) Assignment Logic. Then it will take _n_ data from the [pool of results](#pool-of-results)

A Appeal of the result can be issued.

### Assignment pool

When a _R_ request a assignment for a review , it gets itself in a Pool (_P_) of assignemt. This _P_ it's responsable to queue the assignees to be assign to a next _r_. The quantity of _R_ to be assigned(_A_) will be the minimum of 7, to a maximum of 25.

`_A_ = _R_[<_rp_>].slice(0,25)`

In order to keep the pool assignment with the must trustfull result as possible, a number of _R_ should be diferenciated, getting the advantage of distribuiting `n` assignees on a single review by a range of experienced _R_ to new one(or still pooly trustable) on the peer network. This range are defined by the _R_ reputation (defined on section [Reputation](#reputation)). To control and maintanin the trustfull of the network the votes will be weight by the assignee reputation, giving the system a controled and better results of the reviews.
Doing that, the aiming it's to avoid misleaging engagement or vicious behaviour from more experienced peer users, avoid power centralization among the reputation peers, and give a more honest result of the review.
The weight of the votes it's referred on the [Vote System Weight](#vote-system-weight) section.

### Bounty

### Reputation

A Range of reputation(_rp_) it's given to the _R_ , these are "Trustfull", "MidLevel", "Non-Trustfull" and "Undesirable". When a new _R_ it's created, a "Non-Trustfull" level it's assign to it's status. The more engaged 
 
### Waiting time 
The Last Will be First.

### Vote System Weight

A _A_ must have assignees distribuited on the following reputation  : _R_['Trustfull'] = 25% , _R_['MidLevel'] = 30%, _R_['Non-Trustfull'] = 45%. The reputation defines the power of the vote of each assignees. The "Non-Trustfull"(_ntt_) it's the benchmark voter, where "MidLevel" has `1.5*ntt` vote power , and the "Trustfull" _R_ having `2.5*ntt` vote power.


### Result

### Pool of Results

### Appeal


### Reputation gratifications/punishment


### Benefit of doubt


## Actors

### Chain

### Issuer
A company like Facebook , request to the blockchain a content to be reviewed , issuing a value(bounty) to be paid for that content.

### Reporter

### Reviewer 
The first `n` users connected to the platform who selfAssign the review lock the analisis of that content and give their result, the distribution of the review it's held by the **Witness**, who assign the review on the pool and check the  **Reviewer** `poor-of-integrity`, based on the issuer internal policies. The users can't know each others , so that the system works a non-trustfull nodes.

### Witness
The **Witness** it's the algorithm(miner) which will hold the distribution of the **Issuer** content for review trough the **Reviewers** , defined by `location` , `reputation`, `proof-of-stake`. Once the **Reviews** are issued, **Witness** algorithms take the reviewers result, and record the content result on the **Chain**, working as a notarybook for consultation by the **Issuer**. Therefore the prize value are divided between the **Reviewers** and credit on their account, which will be paid montlhy/weekly. A **Witness** node who insert the **Review** first it's granted the fee charged from the **Issuer**. The **Issuer** can be a **Witness** for the chain.

### Appealer
users/reporters can appeal te result of the review and a new request are issued. `n` appeals can be granted by review, defined by default of by the **Issuer**



## Security measurement
How to secure the block


## Pros
Companys can use the platform where the pool of nodes to be reviewed can give more returns for the content **Reviewers**
Platform can be `onPrem` or `onCloud`.
**Reviews** can be more reliable.

## Cons

Who review the **Reviewer**

Develop how the platform will recieve the content from the **Issuer** and deliver it to the **Reviewer**

Define how a appeal must be accepeted by a **Reviewer**. A `punitive proof-of-adequacy` must be implemented in full to enforce the need of the reviewer be trustfull on his/her review(also can work for managing the user behaviour)


