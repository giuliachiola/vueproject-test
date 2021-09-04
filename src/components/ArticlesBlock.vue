<template>
  <div class="articles-block">

    <h1>Articles block</h1>

    <article-single>
      <h2 slot="slot-title">Netflix is raising its prices</h2>
      <p slot="slot-paragraph">
        The company is raising the prices on its standard and premium streaming subscription services.
        The standard service, which allows customers to stream shows and movies in HD on up to two screens at once, is now priced at $10.99 monthly, up from $9.99. The premium service, which provides viewing on up to four screens (plus ultra HD content access), is $13.99, up from $11.99. The basic service, which enables Netflix (NFLX, Tech30) streaming on one screen and doesn't allow for HD or ultra HD viewing, will remain at $7.99.</p>
    </article-single>

    <hr>

    <article-single>
      <h2 slot="slot-title">Cities are doing wacky things to host Amazon's second headquarters</h2>
      <p slot="slot-paragraph">
        Cities across North America are pulling out the stops to become the home of Amazon's second headquarters. The efforts to lure the tech giant to town have been both big and creative, from sending a giant cactus to CEO Jeff Bezos to offering big tax breaks. A Georgia town even said it would de-annex some of its land and name it the city of Amazon. Last month, Amazon announced plans to open another headquarters in North America. Called "HQ2," the facility will cost at least $5 billion to construct and operate, and will employ as many as 50,000 workers.</p>
    </article-single>

  </div>
</template>


<script>
import articleSingle from '../components/articleSingle.vue';

export default {
    components: {
        'article-single': articleSingle,
    }
}

</script>
