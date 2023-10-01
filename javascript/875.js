/*
Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

Return the minimum integer k such that she can eat all the bananas within h hours.
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let left = 0;
    let right = Math.max(...piles);
    let res = right;
    let mid;
    let hours;

    while (left <= right) {
        mid = Math.round((left + right) / 2);
        hours = 0;
        for (const p of piles) {
            hours += Math.ceil(p / mid);
        }
        if (hours <= h) {
            res = Math.min(res, mid);
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return res;
};

console.log(minEatingSpeed([3, 6, 7, 11], 8));
