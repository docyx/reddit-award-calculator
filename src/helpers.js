import { result, loading, awardIcons } from "./stores";

export const removeUrlFragments = (url) => {
  return url.split("?")[0].split("#")[0];
};

export const formatUSD = (result) => {
  return result.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

const getNormalizedAwards = (data) => {
  let getter;

  if (data[1].data.children.length === 1) {
      // It's a comment!
      getter = data[1].data.children[0].data;
  } else {
      // It's a post!
      // ...or something else that I haven't made a case for...
      getter = data[0].data.children[0].data;
  }

  return getter.all_awardings.map((awarding) => {
      return {
          amount: awarding.count,
          price: awarding.coin_price,
          icon: awarding.icon_url,
      };
  });
};

export const calculate = (url) => {
  result.set(null);
  loading.set(true);
  awardIcons.set([]);

  fetch(`${removeUrlFragments(url)}.json`)
      .then((res) => res.json())
      .then((json) => {
          const awards = getNormalizedAwards(json);

          awards.forEach((award) => {
              result.update(result => result + award.price * 0.003 * award.amount);
              awardIcons.update(icons => [...icons, award.icon]);
          });

          loading.set(false);
      })
      .catch((e) => {
          loading.set(false);
          throw e;
      });
}
