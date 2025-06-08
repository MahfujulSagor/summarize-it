import { CheckCheck, Copy, Sun } from "lucide-react"

import "./style.css"

import React, { useState } from "react"

function IndexPopup() {
  const [clicked, setClicked] = useState(false)

  const copyButton = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  }

  return (
    <div className="w-[450px] max-h-[450px] pt-10 ">
      <nav className="bg-slate-800 fixed top-0 left-0 right-0 text-white flex justify-between item-center py-4 px-2">
        <div className="text-2xl font-semibold ">SummarizeIt</div>
        <div className=" flex item-center gap-4 text-2xl">
          <div className="cursor-pointer">
            <Sun />
          </div>
        </div>
      </nav>

      <div className="my-10 hidden ">
        <div className="text-xl font-medium text-center my-4 ">
          Do you want to summarize this page?
        </div>
        <div className="flex justify-center item-center ">
          <button className="bg-teal-400/60 py-2 px-4 text-lg border rounded-lg ">
            Summarize
          </button>
        </div>
      </div>

      <div className="my-10 text-lg px-2 overflow-hidden min-h-[350px]">
        <div onClick={copyButton}>{clicked ? <CheckCheck className="cursor-pointer text-teal-600" /> : <Copy className="cursor-pointer" />}</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas odit
          nisi temporibus dolores beatae ducimus quos fugit, autem dolor maxime
          saepe tenetur ab eligendi dignissimos commodi odio quasi maiores
          deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum a veniam iure ipsum est sit, accusamus nobis nulla ad magnam
          similique facilis rerum repudiandae aut nihil architecto pariatur quae
          at. Aspernatur nisi incidunt blanditiis suscipit dicta, provident,
          perferendis tempora architecto aliquam alias vel, error laboriosam
          consequuntur nesciunt fugiat numquam. Voluptatem accusamus incidunt
          cumque vel alias quasi quam, soluta ad quas? Suscipit, exercitationem
          reiciendis quas vel blanditiis labore, magnam atque maxime nihil
          numquam libero corrupti eligendi nostrum hic accusamus ratione quaerat
          accusantium obcaecati mollitia ex laboriosam minus. Consectetur
          laudantium ipsum ea. A cupiditate optio dolor laborum quas
          exercitationem molestias facilis sapiente earum dolorem, neque qui eum
          quisquam quam incidunt officia dolores accusamus omnis. Perferendis
          consectetur dicta repellat atque cumque fugiat quibusdam? Corrupti,
          accusantium sit temporibus exercitationem debitis vero, molestias
          culpa facilis itaque velit provident excepturi quis. Voluptates, quo.
          Animi debitis aspernatur itaque praesentium, repellendus cumque
          reiciendis corporis eum incidunt ipsa nobis. Natus asperiores culpa
          veniam cum itaque explicabo aspernatur provident neque facere numquam
          quisquam magnam, temporibus inventore impedit eligendi. Quia,
          voluptatum corporis aliquid ea tenetur officiis consequuntur minima
          autem dolor natus. At maxime cum ipsa minus earum suscipit eius,
          tempore perspiciatis deserunt pariatur inventore repellendus, quam
          omnis nemo incidunt minima porro officia nostrum soluta, ratione
          dignissimos illum. Animi quos quaerat beatae? Sed, alias? Itaque at
          ipsam praesentium, quos voluptatibus impedit, iure blanditiis error a
          commodi aspernatur? Consectetur, ratione atque asperiores iure sequi
          nesciunt quo beatae voluptates iste ut modi sint molestiae. Doloremque
          consequatur nemo nihil esse ab, explicabo veniam qui adipisci, fugiat
          earum consequuntur alias eveniet ex fuga dolorem hic, enim id quaerat
          molestiae. Assumenda blanditiis dolorem sequi laudantium esse
          voluptate. Voluptas, repellendus. Similique maxime rerum, porro sed
          dignissimos consequatur, reiciendis repudiandae laboriosam eligendi
          quaerat aut perferendis veniam minima odit debitis esse! Sapiente nisi
          voluptatem quas corporis illo atque excepturi odit?
        </div>
      </div>
    </div>
  )
}

export default IndexPopup
