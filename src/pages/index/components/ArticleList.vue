<script setup lang="ts">
import { getArticleListApi } from '@/apis'
import type { ArticleListReq } from 'types'
import { watch } from 'vue'

const props = defineProps<ArticleListReq>()

// const getList = async () => {
//   const res = await getArticleListApi({
//     channel_id: 11,
//     timestamp: props.timestamp
//   })
//   console.log('我触发了', res)
// }

// watch(() => props.channel_id, getList, { immediate: true })
</script>

<template>
  <div class="article-container">
    {{ props.channel_id }}---
    {{ props.timestamp }}
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias aliquam
    maxime reiciendis, qui excepturi culpa architecto laborum. Nemo eveniet,
    dolorem explicabo reiciendis et totam cupiditate accusamus facilis,
    architecto ea saepe! Iure necessitatibus dolor natus voluptatibus, vitae
    eligendi laboriosam officiis aliquam earum voluptas, animi architecto odit
    error aspernatur esse tempore porro blanditiis itaque incidunt quisquam!
    Incidunt numquam modi sint quos a. Quis ipsum commodi praesentium enim
    inventore veritatis explicabo odio, tempore necessitatibus facilis vitae
    dolores incidunt maxime repellendus porro dolor dolorum nam earum? Neque,
    assumenda eaque. Pariatur corrupti tenetur veniam odit. Esse deleniti
    commodi debitis, quo minima quisquam, hic libero maiores aut repellendus
    eum. Earum sunt, amet autem aliquid voluptatibus corporis doloremque veniam
    ducimus aspernatur odio hic veritatis, dolore voluptatem iste? Nihil, id
    consequatur ea, provident quod veniam unde magni facere, enim voluptate
    dignissimos ut quaerat tempore mollitia dolor ex eaque ullam! Numquam iste
    iusto autem provident vel facere nostrum velit. Repellat vitae est earum
    culpa officia minima a quisquam quam, ab assumenda ex delectus commodi ipsam
    rem. Dignissimos beatae maxime fugiat itaque in nulla quam tempore, odio non
    aliquid soluta. Maiores voluptas doloribus repellendus a ut, voluptates,
    fugit placeat sed ratione quisquam quaerat quod porro numquam odit tempora
    hic dolorum quo reiciendis necessitatibus repudiandae non neque totam.
    Necessitatibus, corporis explicabo? Doloremque eaque laudantium quidem neque
    quas fugiat molestiae, in saepe molestias, recusandae aspernatur quisquam
    sint ea quam ex ipsam. Architecto atque illum dolores iste recusandae ad
    quam. In, voluptatem sint. Ipsam quam non dolores dignissimos molestias
    velit, reiciendis eligendi tempore quo odio officia culpa enim saepe,
    provident maxime, facere aut et. Omnis praesentium ut quidem suscipit
    voluptates, iure dolores ipsum! Unde ratione, fugit ab dolorum nam quod quia
    error a, ducimus obcaecati repellat provident minima autem ut pariatur sequi
    magnam veritatis rerum illo earum omnis ea ad dolor minus? Consequuntur. Eum
    magni libero aperiam repudiandae similique. Ex veniam quia aliquid, quidem
    id, nesciunt temporibus recusandae, illo obcaecati ad repellendus. Quis
    sequi, fugiat nobis blanditiis accusantium ipsa harum. Dolorum, quidem
    quasi. Praesentium perspiciatis optio ea nam quis! Repellat maiores vitae ut
    error quae aspernatur aut sit reprehenderit blanditiis officia ullam
    voluptas nisi hic repudiandae architecto corporis, dignissimos id saepe est
    omnis. Provident tempore temporibus beatae, molestias architecto placeat
    tenetur, aliquid magni vel, sit quos nesciunt. Aliquam in, eius, assumenda
    rem odit hic velit facere eaque quam modi, voluptates perspiciatis!
    Exercitationem, impedit. Blanditiis accusantium consequuntur, possimus,
    officiis voluptatibus unde obcaecati pariatur fugiat ab suscipit odit eum
    omnis beatae qui cumque! Amet odio provident quis sint, consequatur cum
    fugit sunt debitis voluptatibus magnam! Enim reiciendis, illo aspernatur
    est, fugit alias dolores quaerat sit consectetur eum ipsum. Facere
    voluptatibus delectus voluptas sed sint ea odit modi, esse reprehenderit,
    sequi repudiandae ipsam, quos quibusdam minus. Ab laudantium iste quos
    cupiditate amet quod repudiandae corrupti sint veniam! Voluptas molestiae
    doloribus atque esse sunt hic dolor laboriosam nesciunt mollitia aut, omnis
    dolorum obcaecati, magni recusandae, totam cupiditate? Iste corporis dolorum
    blanditiis. Quos nostrum perspiciatis officia est ducimus libero ut incidunt
    quod voluptatibus in atque, quasi similique optio velit! Exercitationem ipsa
    illo odit suscipit pariatur doloribus veritatis. Nulla! Cupiditate mollitia
    assumenda aliquam nostrum in accusantium amet atque quos dolorem iure sed
    eaque facilis corporis magnam, aut quasi? Quae omnis ducimus asperiores sit
    error voluptate, dolorum unde dicta. Doloribus. Quibusdam eos obcaecati
    exercitationem commodi iure consectetur hic itaque nemo deserunt, nesciunt
    aut quasi harum soluta suscipit? Iusto nihil fugiat dolores qui nemo, quis
    rerum ipsum ut voluptate suscipit ipsa. Saepe modi quaerat enim debitis quos
    voluptates unde! Voluptate, quia excepturi! Maxime, consectetur iste
    voluptates tempora mollitia dignissimos soluta pariatur at! Natus architecto
    eum unde repellat sit, incidunt rerum deserunt! Ad recusandae ab
    reprehenderit, quos culpa, eaque sequi nemo, modi atque fugit natus tempora
    ea ut aliquid ipsa consequatur quasi tempore hic unde ipsam nam animi?
    Possimus error alias dolor. Facilis molestias illum odio perspiciatis
    aliquid laboriosam itaque, facere quam amet deserunt provident laudantium
    magni earum nisi atque. Perspiciatis aliquam cupiditate impedit dignissimos
    repellat officiis omnis provident similique rem alias. Ullam vitae aliquam
    asperiores cum officia dicta quaerat deserunt pariatur? Fuga, suscipit?
    Neque quo perspiciatis ipsa, alias velit omnis vitae eos, debitis cupiditate
    sed rem fugiat maxime nam voluptate itaque? Cum, maxime. Dolor, nesciunt
    doloremque aliquam ducimus ut voluptas dolores quidem quia fugiat ullam iure
    provident quibusdam est vitae pariatur rerum assumenda tempore mollitia
    cupiditate a, qui minus illo at? Ad illo nobis autem quo consequatur aliquam
    culpa architecto veniam voluptatum alias facilis enim ut possimus sapiente,
    eligendi labore exercitationem harum sit repellendus a rem. Quidem
    recusandae soluta veritatis inventore. Nulla, aperiam. Sint tempore
    distinctio possimus totam aperiam maxime voluptas dicta blanditiis, ipsum
    odio quas esse, laboriosam, voluptates sapiente error laborum non incidunt
    provident minus nesciunt? Incidunt cumque culpa ad. Assumenda iste repellat
    cum quibusdam voluptas! In quo ipsum a earum deserunt! Atque veritatis,
    aperiam neque nemo pariatur consequatur ad quia, tempore aspernatur quaerat
    placeat illo officia quo alias quis. Amet quos laborum facilis, rem
    doloremque, harum aperiam ratione fuga, placeat quo molestias? Delectus
    tempora laborum amet doloremque numquam quia quaerat debitis minima, cumque
    quidem distinctio quis architecto accusamus aut! Eos deleniti officia
    perferendis dolorum. Optio odit consequatur obcaecati. Iure necessitatibus
    consequatur unde nesciunt ea animi minus praesentium quibusdam similique
    dicta recusandae vitae dignissimos omnis sunt, nemo explicabo nulla enim?
    Cum, maiores facere veniam in doloremque repellendus fugit reprehenderit.
    Earum magnam mollitia porro quam magni facere officiis velit nam numquam,
    asperiores recusandae distinctio illum tempore odit quas? Esse, expedita
    nesciunt. Tempora dolore quam asperiores incidunt esse culpa, libero debitis
    voluptates praesentium sunt corrupti molestiae natus accusamus! Ad nobis
    ipsam excepturi sit nulla in quaerat, aliquam consectetur iusto quasi, illo
    corporis. Iste tempore totam nam reprehenderit labore dolores odio provident
    omnis. Tenetur ea sit, aliquam assumenda inventore quis porro, beatae
    molestias nesciunt temporibus dolorem rerum. Consequatur consectetur ullam
    saepe ratione temporibus. Illum repudiandae eveniet, beatae esse aliquid
    nemo, recusandae maiores est animi voluptatum iure placeat facere? Explicabo
    totam tempora aut nesciunt eaque. Quibusdam mollitia alias beatae laboriosam
    a. Accusantium, aperiam voluptatibus! Facere vero doloribus voluptatum cum?
    Harum praesentium hic eligendi quam veniam, atque temporibus nam quasi,
    libero ratione cumque voluptate at maiores nihil nulla natus officia, dolor
    minima dicta quaerat aliquam! Deserunt distinctio inventore tempore
    dignissimos! Quia neque, iusto eos totam repellat cum nihil aspernatur
    assumenda fuga, quaerat cumque aliquid deleniti blanditiis odio. Sequi
    dolores, quo animi dolor error iusto ad. Harum est libero veniam non ipsam
    ea quod deserunt cumque beatae at facilis nobis ex minus doloribus
    reiciendis eligendi eaque quo, molestias unde molestiae. Cumque error
    ducimus autem inventore laudantium. Sunt eos accusamus obcaecati adipisci,
    repudiandae dolorem labore fuga vel vitae expedita alias facilis ad neque,
    dolorum quibusdam minus enim maiores odio voluptate voluptatem molestiae
    magnam! Maxime asperiores saepe odio. Quos illum reiciendis, quibusdam,
    fugiat voluptatum nobis culpa doloribus facilis error accusamus saepe
    commodi id temporibus a. Debitis enim exercitationem distinctio iste magnam
    assumenda libero, voluptates ullam optio obcaecati minima. Possimus fugiat,
    doloremque nisi minima magni asperiores dolorem mollitia illo delectus
    cumque provident, odio rerum, eius repellat veritatis odit. Optio ab enim
    error aliquam ducimus temporibus iusto velit, expedita at. Quia vel
    inventore eum facere corrupti eligendi exercitationem sequi molestiae iusto
    provident voluptate accusantium illum, saepe, nihil quis! Mollitia itaque
    veniam esse cum tempora aspernatur debitis ex sed aliquid nam.
  </div>
</template>
<style lang="scss">
.article-container {
  background-color: rebeccapurple;
  position: fixed;
  top: 100px;
  bottom: 50px;
  left: 0;
  overflow: auto;
  width: 100%;
}
</style>
