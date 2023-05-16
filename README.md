This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Components

app/api/route.js
- fetching lunch lists, needs optimization & cache control maybe


## to do
- omit the date as soon as possible, preferably when scraping for the data (note: every restaurant has a different way of formatting the numbers, example blancco "15.5" and factory "15.5.2023")


## notes

- removal of date probably easiest to do in the array
    - blancco and maplestr date is in the first index
    - factory date and first food item are in the same index

blancco fetch result:
[
  '15.5',
  'Herkkusienikeitto (L+G)',
  'Runsas salaattipöytä ja leipää',
  'Juustoinen sveitsinleike (VL)– perunamuusia (L+G)',
  'Paistettua riisiä ja kasviksia (M+G+VS+VE)',
  'Voissa paistetut puna-ahvenfileet (L+G)– kevätsipulikastiketta (L+G)– uudet perunat tillillä (M+G+VE)',
  'Savuporo-koskenlaskijapasta (L)',
  'Kebabliha-jalapeno pizzaa (L)',
  'Mustikka-vadelmapiirakka (L)'
]

factory fetch result:
[
  '15.5.2022Basilikalla maustettu palsternakkasosekeitto (L+G)',
  'Paistettua lohta sitrusvinaigretella (M+G) paahdetut varhaisperunat (VE+G) tzatziki (VL+G+VS)',
  'Pulled pork tortillat cheddarjuustolla (VL+VS) paahdetut sipulit (VE), jalapeno, creme fraiche (L+G)',
  'Pepperoni-paprikapasta tomaatti-jalapenokastikkeella (L+VS)',
  'Teriyaki-paahdetut kasvikset ja tofua tuoreella korianterilla (VE+G+VS)',
  'Ranskalaista kirsikka-pannukakkua “',
  'Clafoutis” (L) vaniljavaahtoa (L+G)'
]

mapleStr fetch result:
[
  '15.5.-',
  'Kievin kanaa (Lactose free, garlic, citrus), riisiä (vegan, gluten free) ja currymajoneesia (egg, lactose free, chili, citrus)-',
  'Makkarastrognaoff (Lactose free, glutein free, garlic) ja perunamuusia (Lactose free, glutein free)-',
  'Tofua kookos-kasviskastikkeessa (dairy free, glutein free, garlig, chili,soy, citrus) ja riisiä (dairy free, glutein free)',
  'WELL-',
  'Päivän salaatti ja',
  'Pähkinäinen bataattisosekeitto (Lactose free, glutein free, soy, nuts)',
  'WELL-',
  'Mustikkasmoothie (Lactose free, glutein free)-',
  'Grilli:',
  'Katkarapuwokkia (dairy free, gluten free,soy, chili, citrus) 13€'
]