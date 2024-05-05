import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { AppProvider } from '../../components/views/AppProvider'
import { consts } from '../../utils/consts'
import { updateDocTyped, useDb } from '../../utils/db'
import { store, useStore } from '../../utils/store'
import { useStates } from '../../utils/useStateObject'

export default () => {
  useStore()
  useDb()
  const { db } = store()
  const state = useStates({ count: 0 })

  return <div>disabled</div>

  useEffect(() => {
    ;(async () => {
      if (!store().user?.uid) return
      await updateDocTyped(consts.dbExtraId, data.extra)

      for (const label of data.labels) {
        const uid = store().user?.uid
        if (uid !== undefined && db) {
          const { id, ...noIdLabel } = label
          try {
            await setDoc(doc(db, uid, id), noIdLabel)
          } catch (e) {}
        }

        state.count++
      }
    })()
  }, [store().user?.uid])

  return (
    <AppProvider>
      Backup {state.count} of {data.labels.length}
    </AppProvider>
  )
}

const data = {
  labels: [
    {
      image: 'https://i1.sndcdn.com/avatars-000225177212-ozg386-t500x500.jpg',
      artists: [],
      followers: 11691,
      link: 'https://soundcloud.com/demandrecords',
      notes: 'Not accepting demos :(',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-11-15T07:51:59Z',
      lastScraped: 1668963162719,
      tracks: {
        popular: [
          {
            published: '2022-10-02T14:16:11Z',
            title: 'Differend - Walkin',
            url: 'https://soundcloud.com/demandrecords/differend-walkin',
          },
          {
            url: 'https://soundcloud.com/demandrecords/isotropik-oil-water-free-download',
            title: 'Isotropik - Oil & Water [FREE DOWNLOAD]',
            published: '2020-08-05T23:44:21Z',
          },
          {
            title: 'Eastcolors, Traffic & Noel - Dreams VIP (FREE DOWNLOAD)',
            url: 'https://soundcloud.com/demandrecords/eastcolors-traffic-noel-dreams-vip-free-download',
            published: '2015-06-01T17:41:02Z',
          },
          {
            url: 'https://soundcloud.com/demandrecords/submarine-shamane',
            title: 'SubMarine - Shamane',
            published: '2017-06-29T16:06:29Z',
          },
          {
            title: 'BTK - Things I Do (Spectrasoul Remix)',
            url: 'https://soundcloud.com/demandrecords/btk-things-i-do-spectrasoul-remix',
            published: '2010-11-10T18:30:06Z',
          },
          {
            url: 'https://soundcloud.com/demandrecords/submarine-void',
            published: '2016-03-27T17:34:05Z',
            title: 'SubMarine - Void',
          },
          {
            url: 'https://soundcloud.com/demandrecords/isotropik-unchanging',
            published: '2022-08-09T19:25:05Z',
            title: 'Isotropik - Unchanging',
          },
          {
            title: 'Isotropik - Universal',
            published: '2022-08-22T06:42:32Z',
            url: 'https://soundcloud.com/demandrecords/isotropik-universal',
          },
          {
            published: '2016-11-03T19:28:15Z',
            title: 'Big Bud, RoyGreen, Protone & Dual - Gospodi',
            url: 'https://soundcloud.com/demandrecords/big-bud-roygreen-protone-dual-gospodi',
          },
          {
            title: 'Wingz - Confined (Solace Remix)',
            url: 'https://soundcloud.com/demandrecords/wingz-confined-solace-remix',
            published: '2019-07-01T21:30:34Z',
          },
          {
            url: 'https://soundcloud.com/demandrecords/bowsar-microphun',
            published: '2022-11-09T19:23:24Z',
            title: 'Bowsar - Microphun',
          },
          {
            title: 'Differend - Face',
            published: '2022-10-16T12:26:39Z',
            url: 'https://soundcloud.com/demandrecords/differend-face',
          },
          {
            published: '2022-08-23T19:42:38Z',
            url: 'https://soundcloud.com/demandrecords/isotropik-immersion',
            title: 'Isotropik - Immersion',
          },
          {
            url: 'https://soundcloud.com/demandrecords/confined-mystic-state-remix',
            published: '2019-09-01T21:15:14Z',
            title: 'Wingz - Confined (Mystic State Remix)',
          },
          {
            url: 'https://soundcloud.com/demandrecords/sgd-feat-zdenko-beer',
            published: '2022-10-10T06:34:55Z',
            title: 'Differend - SGD (feat Zdenko Beer)',
          },
          {
            published: '2022-11-15T07:51:59Z',
            title: 'Bowsar - Fingerprints',
            url: 'https://soundcloud.com/demandrecords/bowsar-fingerprints',
          },
          {
            url: 'https://soundcloud.com/demandrecords/eastcolors-traffic-noel-dreams',
            published: '2014-12-16T08:03:31Z',
            title: 'EastColors, Traffic & Noel - Dreams',
          },
          {
            url: 'https://soundcloud.com/demandrecords/bredren-backlash',
            title: 'Bredren - Backlash',
            published: '2018-04-01T13:00:43Z',
          },
          {
            url: 'https://soundcloud.com/demandrecords/roygreen-protone-speak-the-truth',
            published: '2014-04-24T08:24:51Z',
            title: 'RoyGreen & Protone - Speak The Truth',
          },
          {
            published: '2014-05-14T20:36:40Z',
            title: 'Bredren - Mechanica',
            url: 'https://soundcloud.com/demandrecords/bredren-mechanica',
          },
          {
            url: 'https://soundcloud.com/demandrecords/clu-distant',
            title: 'clÜ - Distant',
            published: '2022-05-22T15:37:02Z',
          },
          {
            title: 'EastColors - Could Be',
            published: '2014-12-16T08:03:32Z',
            url: 'https://soundcloud.com/demandrecords/eastcolors-could-be',
          },
          {
            title: 'Headroom - Rosemary',
            published: '2022-05-23T19:04:46Z',
            url: 'https://soundcloud.com/demandrecords/headroom-rosemary',
          },
          {
            published: '2015-03-30T20:33:53Z',
            title: 'RoyGreen & Protone - Navarro',
            url: 'https://soundcloud.com/demandrecords/roygreen-protone-navarro',
          },
          {
            published: '2013-10-05T14:25:30Z',
            title: 'Eastcolors - The Light (Troy Gunner Remix)',
            url: 'https://soundcloud.com/demandrecords/eastcolors-the-light-troy-gunner',
          },
          {
            published: '2021-11-13T13:07:47Z',
            title: 'Taelimb - The Crown (Sweetpea Remix)',
            url: 'https://soundcloud.com/demandrecords/taelimb-the-crown-sweetpea-remix',
          },
          {
            title: 'Robustus & Moody - Falling',
            url: 'https://soundcloud.com/demandrecords/robustus-moody-falling',
            published: '2016-02-23T16:14:57Z',
          },
          {
            url: 'https://soundcloud.com/demandrecords/isotropik-gully',
            title: 'Isotropik - Gully',
            published: '2020-08-14T15:56:37Z',
          },
          {
            published: '2017-04-29T14:02:59Z',
            url: 'https://soundcloud.com/demandrecords/qbig-zenith-b-tanoke-1',
            title: 'Qbig & Zenith B - Tanoke',
          },
          {
            url: 'https://soundcloud.com/demandrecords/tshabee-slim',
            title: 'tshabee - S.L.I.M.',
            published: '2021-09-16T20:09:15Z',
          },
        ],
        recent: [
          {
            title: 'Bowsar - Fingerprints',
            url: 'https://soundcloud.com/demandrecords/bowsar-fingerprints',
            published: '2022-11-15T07:51:59Z',
          },
          {
            title: 'Bowsar - Microphun',
            published: '2022-11-09T19:23:24Z',
            url: 'https://soundcloud.com/demandrecords/bowsar-microphun',
          },
          {
            url: 'https://soundcloud.com/demandrecords/differend-face',
            title: 'Differend - Face',
            published: '2022-10-16T12:26:39Z',
          },
          {
            title: 'Differend - SGD (feat Zdenko Beer)',
            url: 'https://soundcloud.com/demandrecords/sgd-feat-zdenko-beer',
            published: '2022-10-10T06:34:55Z',
          },
          {
            title: 'Differend - Walkin',
            published: '2022-10-02T14:16:11Z',
            url: 'https://soundcloud.com/demandrecords/differend-walkin',
          },
          {
            published: '2022-08-23T19:42:38Z',
            url: 'https://soundcloud.com/demandrecords/isotropik-immersion',
            title: 'Isotropik - Immersion',
          },
          {
            url: 'https://soundcloud.com/demandrecords/isotropik-universal',
            title: 'Isotropik - Universal',
            published: '2022-08-22T06:42:32Z',
          },
          {
            url: 'https://soundcloud.com/demandrecords/isotropik-unchanging',
            published: '2022-08-09T19:25:05Z',
            title: 'Isotropik - Unchanging',
          },
          {
            published: '2022-05-23T19:04:46Z',
            url: 'https://soundcloud.com/demandrecords/headroom-rosemary',
            title: 'Headroom - Rosemary',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/bowsar-neurons',
            title: 'Bowsar - Neurons',
            published: '2022-11-08T19:13:26Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/bowsar-lttvp',
            title: 'Bowsar - LTTVP',
            published: '2022-11-02T13:29:33Z',
          },
          {
            url: 'https://soundcloud.com/hotbox-crew-659457538/switchcase-hbx-mix',
            published: '2022-11-01T22:06:08Z',
            title: 'switch/case HBX Mix',
          },
          {
            title: 'Bowsar - LTTVP [Demand Records]',
            url: 'https://soundcloud.com/bowsar/bowsar-lttvp-demand-records',
            published: '2022-10-28T10:48:10Z',
          },
          {
            title: "Differend 'SGD' (feat Zdenko Beer)[Demand Records]",
            url: 'https://soundcloud.com/datatransmissiondnb/differend-sgd-feat-zdenko-beerdemand-records',
            published: '2022-10-12T10:14:38Z',
          },
          {
            title: 'RENEGADE RIDDIMS: Bredren',
            url: 'https://soundcloud.com/datatransmissiondnb/renegade-riddims-bredren',
            published: '2022-10-07T14:56:10Z',
          },
          {
            title: 'Namarone HBX Mix',
            url: 'https://soundcloud.com/hotbox-crew-659457538/namarone-hbx-mix',
            published: '2022-09-06T19:28:06Z',
          },
          {
            title: 'Isotropik - In The Dark',
            url: 'https://soundcloud.com/skankandbass/isotropik-in-the-dark',
            published: '2022-08-01T15:52:19Z',
          },
          {
            title: 'Da Hool - Meet Her At The Love Parade (Bredren bootleg) FREE DOWNLOAD',
            url: 'https://soundcloud.com/bredrenbe/da-hool-meet-her-at-the-love-parade-bredren-bootleg',
            published: '2022-07-02T12:19:32Z',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/clu-x-headroom-all-i-need-demand-records',
            title: "cLÜ X Headroom 'All I Need' [Demand Records]",
            published: '2022-05-13T10:21:07Z',
          },
        ],
      },
      name: 'Demand Records',
      id: '34RCyJ5zBdSNHKIbD4NQ',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000419270988-vaq8xm-t500x500.jpg',
      artists: ['Hugh Hardie', 'Invadhertz', 'Levela'],
      followers: 17444,
      link: 'https://soundcloud.com/districtbassmusic',
      notes: 'Not a label!',
      styles: ['Jump Up', 'Minimal'],
      submission: 'district.bass@hotmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-18T03:34:27Z',
      lastScraped: 1668963164683,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/itisjev/it-is-jev-heat',
            title: 'It Is Jev - Heat',
            published: '2022-11-10T12:50:00Z',
          },
          {
            url: 'https://soundcloud.com/officialdrumad/ophobot-idiom-drm011-new-free-download',
            title: 'Ophobot - Idiom [#DRM011] (free download)',
            published: '2022-05-25T21:14:06Z',
          },
          {
            title: "Samthing 'Outline' [Sine Function Music]",
            published: '2022-11-04T12:30:06Z',
            url: 'https://soundcloud.com/datatransmissiondnb/samthing-outline-sine-function-music',
          },
          {
            title: 'Bare Up - Wonder Man',
            published: '2022-10-20T23:44:17Z',
            url: 'https://soundcloud.com/bassrush/bare-up-wonder-man',
          },
          {
            title: 'Screamarts - So Surreal [Premiere]',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/screamarts-so-surreal-premiere',
            published: '2022-10-16T20:41:59Z',
          },
          {
            url: 'https://soundcloud.com/goatshed/conrad-subs-promises',
            published: '2022-08-13T12:47:30Z',
            title: 'Conrad Subs - Promises',
          },
          {
            published: '2021-12-04T16:47:07Z',
            url: 'https://soundcloud.com/log1n/i-need-a-break',
            title: 'I Need A Break - ft Nuan (FREE DOWNLAD)',
          },
          {
            published: '2022-10-16T12:53:41Z',
            title: 'FANATICS - PHAZON',
            url: 'https://soundcloud.com/oyonoise/fanatics-phazon',
          },
          {
            title: 'Gifta - The Ultimate Weapon (Free Download)',
            url: 'https://soundcloud.com/gifta_dnb/gifta-the-ultimate-weapon-free-download',
            published: '2022-10-12T14:59:19Z',
          },
          {
            published: '2022-09-27T14:48:56Z',
            url: 'https://soundcloud.com/sub-antics/felov-polarized-lose-my-mind-premiere',
            title: 'Felov & Polarized - Lose My Mind [Premiere]',
          },
        ],
        recent: [
          {
            published: '2022-11-18T03:34:27Z',
            url: 'https://soundcloud.com/districtbassmusic/exile-nicky-blackmarket-rumba',
            title: 'Exile & Nicky Blackmarket - Rumba',
          },
          {
            published: '2022-11-17T15:07:12Z',
            url: 'https://soundcloud.com/districtbassmusic/objectiv-fallen-order',
            title: 'Objectiv - Fallen Order',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/kawstic-the-mac',
            title: 'Kawstic - The Mac',
            published: '2022-11-15T11:59:11Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/hugh-hardie-inmost-squelcher',
            title: 'Hugh Hardie & In:Most - Squelcher',
            published: '2022-11-14T17:22:53Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/finalfix-fatter-disk',
            title: 'Finalfix - Fatter Disk',
            published: '2022-11-11T14:50:02Z',
          },
          {
            title: 'HLZ - Iverson',
            url: 'https://soundcloud.com/districtbassmusic/hlz-iverson',
            published: '2022-11-12T16:41:09Z',
          },
          {
            title: 'Dauntless & Cern - No Quarter',
            published: '2022-11-11T14:42:37Z',
            url: 'https://soundcloud.com/districtbassmusic/dauntless-cern-no-quarter',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/invadhertz-horror-vacui',
            published: '2022-11-10T15:34:09Z',
            title: 'Invadhertz - Horror Vacui',
          },
          {
            published: '2022-11-04T14:26:50Z',
            title: 'State Of Disorder - Resonate',
            url: 'https://soundcloud.com/districtbassmusic/state-of-disorder-resonate',
          },
          {
            title: 'Bowsar - LTTVP',
            url: 'https://soundcloud.com/districtbassmusic/bowsar-lttvp',
            published: '2022-11-02T13:29:33Z',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/districtbassmusic/connor-q-silent-pass',
            title: 'Connor q - Silent Pass',
            published: '2022-09-26T11:02:59Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/absu-circuit-breaker',
            published: '2022-06-22T08:44:16Z',
            title: 'Absu - Circuit Breaker',
          },
          {
            title: 'Tali - Love & Migration (State Of Mind Remix)',
            published: '2019-10-06T21:55:58Z',
            url: 'https://soundcloud.com/districtbassmusic/tali-love-migration-state-of-mind-remix',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/pengo-amplify-what-you-want',
            published: '2022-08-10T15:56:52Z',
            title: 'Pengo & Amplify - What You Want',
          },
          {
            published: '2022-08-08T15:57:40Z',
            title: "Objectiv, Zoro & Lupo - Papa's Got Bag (ft. Jappa)",
            url: 'https://soundcloud.com/districtbassmusic/objectiv-zoro-lupo-papas-got-bag-ft-jappa',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/prfct-mandem-jungle-is-massive',
            title: 'PRFCT Mandem - Jungle Is Massive',
            published: '2020-06-02T15:42:08Z',
          },
          {
            title: 'Spektiv - Dog Fight',
            published: '2022-08-15T13:43:21Z',
            url: 'https://soundcloud.com/districtbassmusic/spektiv-dog-fight',
          },
          {
            title: 'Mean Teeth - Nine Lives',
            url: 'https://soundcloud.com/districtbassmusic/mean-teeth-nine-lives-2',
            published: '2018-05-03T14:58:45Z',
          },
          {
            title: 'HighThere - The Knights Of Ren',
            url: 'https://soundcloud.com/districtbassmusic/highthere-the-knights-of-ren',
            published: '2022-07-05T05:58:54Z',
          },
          {
            title: 'BassBrothers - Steady Drip',
            published: '2022-08-19T21:54:59Z',
            url: 'https://soundcloud.com/districtbassmusic/bassbrothers-steady-drip',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/also-impex-epic',
            title: 'AL/SO & Impex - Epic',
            published: '2022-03-25T11:48:16Z',
          },
          {
            title: 'Geostatic - DYWK',
            published: '2022-10-12T10:06:47Z',
            url: 'https://soundcloud.com/districtbassmusic/geostatic-dywk',
          },
          {
            title: 'Akrom - Mamba',
            published: '2020-01-01T17:39:04Z',
            url: 'https://soundcloud.com/districtbassmusic/akrom-mamba',
          },
          {
            title: 'Zound & Glÿph - Manifest',
            url: 'https://soundcloud.com/districtbassmusic/zound-glyph-manifest',
            published: '2022-10-24T10:33:22Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/ephyum-black-clouds',
            title: 'Ephyum - Black Clouds',
            published: '2018-11-12T20:13:50Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/toxinate-ride-or-die',
            published: '2022-08-19T22:00:46Z',
            title: 'Toxinate - Ride Or Die',
          },
          {
            published: '2019-04-28T14:00:59Z',
            title: 'Warp Fa2e - No Fear (ft. Coppa) (Traced Remix)',
            url: 'https://soundcloud.com/districtbassmusic/warp-fa2e-no-fear-ft-coppa-traced-remix',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/symplex-sonar',
            title: 'Symplex - Sonar',
            published: '2019-08-26T22:44:50Z',
          },
          {
            title: 'Chakhan - Tunnel Vision (ft. Trafic MC)',
            url: 'https://soundcloud.com/districtbassmusic/chakhan-tunnel-vision-ft-trafic-mc',
            published: '2022-07-18T00:49:37Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/mob-tactics-irreversible',
            published: '2018-05-19T16:30:00Z',
            title: 'Mob Tactics - Irreversible',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/amplify-feat-stytchd-greeze-nick-the-lot-remix',
            published: '2022-10-13T10:45:36Z',
            title: 'Amplify - Greeze (ft. Stytchd) (Nick The Lot Remix)',
          },
          {
            title: 'Vektah & Levela - Lockdown The Streets',
            url: 'https://soundcloud.com/districtbassmusic/vektah-levela-lockdown-the-streets',
            published: '2022-08-25T18:28:13Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/moody-blast-off',
            published: '2022-09-06T18:41:44Z',
            title: 'Moody - Blast Off',
          },
          {
            published: '2021-02-14T19:27:55Z',
            title: 'Confusion - At Least',
            url: 'https://soundcloud.com/districtbassmusic/confusion-at-least',
          },
          {
            published: '2022-10-10T10:14:31Z',
            url: 'https://soundcloud.com/districtbassmusic/2whales-bad-trip',
            title: '2Whales - Bad Trip',
          },
          {
            published: '2020-01-06T19:15:07Z',
            url: 'https://soundcloud.com/districtbassmusic/cranium-confusion-switch',
            title: 'Cranium & Confusion - Switch',
          },
          {
            published: '2019-11-22T17:10:52Z',
            title: 'The Martens - Ambush',
            url: 'https://soundcloud.com/districtbassmusic/the-martens-ambush',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/xaetis-accelerate',
            published: '2022-07-11T18:48:53Z',
            title: 'Xaetis - Accelerate',
          },
          {
            published: '2020-05-26T14:49:18Z',
            url: 'https://soundcloud.com/districtbassmusic/transforma-plagues',
            title: 'Transforma - Plagues',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/cyntax-eat-it',
            title: 'Cyntax - Eat It',
            published: '2021-03-07T19:22:16Z',
          },
        ],
      },
      widgets: [],
      name: 'DistrictBass',
      id: '3fsK8FcJ2oZAcT1WZPVT',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-BJHpLAqdbubepQcp-qESR3Q-t500x500.jpg',
      artists: ["Dead Man's Chest", 'Coce Bryce'],
      followers: 5641,
      link: 'https://soundcloud.com/dead-mans-chest',
      notes: '',
      styles: ['Jungle'],
      submission: 'deadmansdubs@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-08-31T15:48:44Z',
      lastScraped: 1668963166527,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-seen-lore015-a1',
            published: '2022-08-31T15:48:44Z',
            title: 'Settle Down - Seen (LORE015 A1)',
          },
          {
            published: '2022-08-31T15:48:34Z',
            title: 'Settle Down - The Trip (LORE015 B1)',
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-the-trip-lore015',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/response-pliskin-got-any-pills',
            title: 'Response & Pliskin - Got Any Pills Mate? (LORELTD009 A)',
            published: '2022-08-31T15:34:45Z',
          },
          {
            title: "Western Lore Radio w/ Dead Man's Chest - August 22",
            published: '2022-08-16T16:16:21Z',
            url: 'https://soundcloud.com/dead-mans-chest/western-lore-radio-w-dead-mans-chest-august-22',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-es-restrictions',
            published: '2022-08-31T15:48:39Z',
            title: "Settle Down - E's Restrictions (LORE015 A2)",
          },
          {
            title: 'Settle Down - Raised On Tapes (LORE015 B2)',
            published: '2022-08-31T15:48:27Z',
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-raised-on-tapes',
          },
          {
            published: '2022-08-31T15:34:43Z',
            url: 'https://soundcloud.com/dead-mans-chest/response-pliskin',
            title: 'Response & Pliskin - Misinformation (LORELTD009 B1)',
          },
          {
            title: 'Response & Pliskin - Spirit Of The People (LORELTD009 B2)',
            url: 'https://soundcloud.com/dead-mans-chest/response-pliskin-spirit-of-the',
            published: '2022-08-31T15:34:40Z',
          },
          {
            title: 'Outer Heaven - Untitled Jungle',
            url: 'https://soundcloud.com/dead-mans-chest/outer-heaven-untitled-jungle',
            published: '2018-06-28T17:16:00Z',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/coco-bryce-beats-like-this',
            published: '2019-04-07T13:47:19Z',
            title: 'Coco Bryce - Beats Like This (LORE006B1)',
          },
          {
            title: 'Coco Bryce - Come 2 U (LORE006A1)',
            url: 'https://soundcloud.com/dead-mans-chest/coco-bryce-come-2-u-lore006a1',
            published: '2019-04-07T13:47:45Z',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/01-thugwidow-seventh-circle-of',
            published: '2022-07-05T18:18:26Z',
            title: '01. Thugwidow - Seventh Circle Of Litness (LORELP05)',
          },
          {
            published: '2022-05-23T19:54:24Z',
            url: 'https://soundcloud.com/dead-mans-chest/thugwidow-wildchild',
            title: 'Thugwidow - Wildchild (LORELP05SA1)',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/02-thugwidow-dissociative-funk',
            title: '02. Thugwidow - Dissociative Funk (LORELP05)',
            published: '2022-07-05T18:18:22Z',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/03-thugwidow-human-contact',
            published: '2022-07-05T18:18:17Z',
            title: '03. Thugwidow - Human Contact (LORELP05)',
          },
          {
            published: '2021-03-29T19:11:55Z',
            url: 'https://soundcloud.com/dead-mans-chest/dead-mans-chest-myth-fire',
            title: "Dead Man's Chest - Myth & Fire (LORE011A)",
          },
          {
            title: "Dead Man's Chest - Westworld (Sam Binary Remix) [LORELTD002A]",
            published: '2018-11-06T18:06:23Z',
            url: 'https://soundcloud.com/dead-mans-chest/dead-mans-chest-westworld-sam',
          },
          {
            title:
              "Coco Bryce - Adventures In Perception (Dead Man's Chest & Josimar's Darker Perspectives Remix)",
            url: 'https://soundcloud.com/dead-mans-chest/coco-bryce-adventures-in-perception-dead-mans-chest-josimars-darker-perspectives-remix',
            published: '2018-06-28T17:15:59Z',
          },
          {
            title: '05 (DIGITAL ONLY). Thugwidow -  A Cleansing Pain (LORELP05)',
            published: '2022-07-05T18:18:08Z',
            url: 'https://soundcloud.com/dead-mans-chest/05-digital-only-thugwidow-a',
          },
          {
            title: '04. Thugwidow - United Kingdom (LORELP05)',
            url: 'https://soundcloud.com/dead-mans-chest/04-thugwidow-united-kingdom',
            published: '2022-07-05T18:18:13Z',
          },
          {
            published: '2022-07-05T18:18:00Z',
            title: '07. Thugwidow -  Conduct Yourself With Some Fucking Dignity (LORELP05)',
            url: 'https://soundcloud.com/dead-mans-chest/07-thugwidow-conduct-yourself',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/sam-binary-sentinal-era',
            title: 'Sam Binary - Sentinal Era [LORELTD 002B]',
            published: '2018-11-06T18:06:21Z',
          },
          {
            published: '2021-10-05T16:23:25Z',
            url: 'https://soundcloud.com/dead-mans-chest/raas-kemp-a-grand-day-out',
            title: 'Raas Kemp – A Grand Day Out (LORELTD007A)',
          },
          {
            published: '2018-03-19T19:36:41Z',
            url: 'https://soundcloud.com/dead-mans-chest/dead-mans-chest-trip-ii',
            title: "Dead Man's Chest - Trip II Eclipse (LORE003 A1)",
          },
          {
            published: '2021-03-04T14:08:20Z',
            url: 'https://soundcloud.com/dead-mans-chest/dead-mans-chest-urban',
            title: "Dead Man's Chest - Urban Fossickated Octave [LORELP03A1]",
          },
          {
            published: '2022-07-05T18:18:04Z',
            url: 'https://soundcloud.com/dead-mans-chest/06-thugwidow-a-reduction-in',
            title: '06. Thugwidow -  A Reduction In Stress (LORELP05)',
          },
          {
            published: '2018-08-05T10:46:46Z',
            title: 'Coco Bryce - Adventures In Perception',
            url: 'https://soundcloud.com/dead-mans-chest/coco-bryce-adventures-in-1',
          },
          {
            title: '08 (DIGITAL ONLY). Thugwidow - Funkiest Funk (LORELP05)',
            published: '2022-07-05T18:17:56Z',
            url: 'https://soundcloud.com/dead-mans-chest/08-digital-only-thugwidow',
          },
          {
            published: '2021-10-05T16:23:23Z',
            url: 'https://soundcloud.com/dead-mans-chest/raas-kemp-death-the-lover',
            title: 'Raas Kemp - Death & The Lover (LORELTD007B)',
          },
          {
            published: '2022-07-05T18:17:39Z',
            url: 'https://soundcloud.com/dead-mans-chest/12-thugwidow-good-groovy',
            title: '12. Thugwidow - Good Groovy Energy Guys (LORELP05)',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-seen-lore015-a1',
            published: '2022-08-31T15:48:44Z',
            title: 'Settle Down - Seen (LORE015 A1)',
          },
          {
            published: '2022-08-31T15:48:39Z',
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-es-restrictions',
            title: "Settle Down - E's Restrictions (LORE015 A2)",
          },
          {
            published: '2022-08-31T15:48:34Z',
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-the-trip-lore015',
            title: 'Settle Down - The Trip (LORE015 B1)',
          },
          {
            published: '2022-08-31T15:48:27Z',
            title: 'Settle Down - Raised On Tapes (LORE015 B2)',
            url: 'https://soundcloud.com/dead-mans-chest/settle-down-raised-on-tapes',
          },
          {
            published: '2022-08-31T15:34:45Z',
            title: 'Response & Pliskin - Got Any Pills Mate? (LORELTD009 A)',
            url: 'https://soundcloud.com/dead-mans-chest/response-pliskin-got-any-pills',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/response-pliskin',
            published: '2022-08-31T15:34:43Z',
            title: 'Response & Pliskin - Misinformation (LORELTD009 B1)',
          },
          {
            published: '2022-08-31T15:34:40Z',
            title: 'Response & Pliskin - Spirit Of The People (LORELTD009 B2)',
            url: 'https://soundcloud.com/dead-mans-chest/response-pliskin-spirit-of-the',
          },
          {
            title: "Western Lore Radio w/ Dead Man's Chest - August 22",
            published: '2022-08-16T16:16:21Z',
            url: 'https://soundcloud.com/dead-mans-chest/western-lore-radio-w-dead-mans-chest-august-22',
          },
          {
            title: '01. Thugwidow - Seventh Circle Of Litness (LORELP05)',
            url: 'https://soundcloud.com/dead-mans-chest/01-thugwidow-seventh-circle-of',
            published: '2022-07-05T18:18:26Z',
          },
          {
            url: 'https://soundcloud.com/dead-mans-chest/02-thugwidow-dissociative-funk',
            published: '2022-07-05T18:18:22Z',
            title: '02. Thugwidow - Dissociative Funk (LORELP05)',
          },
        ],
        reposts: [
          {
            title: 'UE Premiere | Thugwidow - United Kingdom [Western Lore]',
            published: '2022-08-01T07:21:36Z',
            url: 'https://soundcloud.com/unearthedsounds/ue-premiere-thugwidow-united-kingdom-western-lore',
          },
          {
            title: 'Thugwidow - Seventh Circle Of Litness (Western Lore) [UKBM Premiere]',
            published: '2022-07-19T11:54:55Z',
            url: 'https://soundcloud.com/ukbassmusic/thugwidow-seventh-circle-of-litness-western-lore-ukbm-premiere',
          },
          {
            title: "Dead Man's Chest - Rupture Mixtape",
            published: '2017-11-08T20:05:55Z',
            url: 'https://soundcloud.com/rupture/dead-mans-chest-rupture-mixtape',
          },
          {
            url: 'https://soundcloud.com/swufm/western-lore-w-dead-man-s-3',
            title: "Western Lore w/ Dead Man's Chest 04TH JUL 2022",
            published: '2022-07-05T00:00:58Z',
          },
          {
            url: 'https://soundcloud.com/swufm/western-lore-w-dead-man-s-2',
            published: '2022-06-07T00:01:13Z',
            title: 'Western Lore w/ Dead Man s Chest 06TH JUN 2022',
          },
          {
            url: 'https://soundcloud.com/swufm/western-lore-w-dead-man-s-1',
            published: '2022-05-03T00:01:00Z',
            title: 'Western Lore w/ Dead Mans Chest 02ND MAY 2022',
          },
          {
            url: 'https://soundcloud.com/swufm/western-lore-w-dead-man-s',
            title: 'Western Lore w/ Dead Man s Chest 04TH APR 2022',
            published: '2022-04-05T00:00:56Z',
          },
          {
            published: '2022-03-08T01:00:56Z',
            title: 'Western Lore w/ Deadmans Chest 07TH MAR 2022',
            url: 'https://soundcloud.com/swufm/western-lore-w-deadmans-1',
          },
          {
            published: '2022-02-08T01:01:00Z',
            url: 'https://soundcloud.com/swufm/western-lore-w-deadmans-chest',
            title: 'Western Lore w/ Deadmans Chest 07TH FEB 2022',
          },
          {
            title: 'Western Lore w/ Dead Mans Chest 03RD JAN 2022',
            url: 'https://soundcloud.com/swufm/western-lore-w-dead-mans-5',
            published: '2022-01-04T01:00:56Z',
          },
        ],
      },
      name: 'Western Lore',
      widgets: [
        'https://soundcloud.com/dead-mans-chest/response-pliskin-got-any-pills',
        'https://soundcloud.com/dead-mans-chest/settle-down-seen-lore015-a1',
        'https://soundcloud.com/dead-mans-chest/coco-bryce-beats-like-this',
      ],
      id: '4TuePBd8vIa9RN1vTwTF',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-rO7WvyGujCj7jReY-slfI5A-t500x500.jpg',
      artists: ['DLR', 'Molecular ', 'Zero T'],
      followers: 16741,
      link: 'https://soundcloud.com/sofasoundbristol',
      notes: '',
      styles: ['Jump Up', 'Minimal'],
      submission: 'sofasoundmanagement@gmail.com',
      songsSubmitted: ['Stamina', 'Now Hear This', 'Night & Day'],
      songsSkipped: ["You Don't Know", 'Sunday Secrets'],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-10T14:31:32Z',
      lastScraped: 1668963168474,
      tracks: {
        reposts: [
          {
            title: 'Molecular Ft. Gusto - Who Goes There',
            url: 'https://soundcloud.com/moleculardnb/molecular-ft-gusto-who-goes-there',
            published: '2022-11-10T14:31:32Z',
          },
          {
            published: '2022-11-10T12:31:04Z',
            title: 'FFS Premiere: Molecular – Beanie Roller',
            url: 'https://soundcloud.com/freefromsleep/ffs-premiere-molecular-beanie-roller',
          },
          {
            title: 'Molecular - Surrounded [Premiere]',
            published: '2022-11-03T06:18:49Z',
            url: 'https://soundcloud.com/wearestudio/molecular-surrounded-premiere',
          },
          {
            published: '2022-11-01T08:10:42Z',
            url: 'https://soundcloud.com/skankandbass/molecular-acid-funk',
            title: 'Molecular - Acid Funk',
          },
          {
            published: '2022-09-27T20:53:58Z',
            title: 'DLR - Like This',
            url: 'https://soundcloud.com/skankandbass/dlr-like-this',
          },
          {
            title: 'DLR - Roll With It',
            url: 'https://soundcloud.com/drumandbassarena/dlr-roll-with-it',
            published: '2022-10-10T07:53:24Z',
          },
          {
            published: '2022-10-06T18:01:22Z',
            url: 'https://soundcloud.com/kyristdnb/kyrist-mc-gusto-live-outlook-festival-uk-sofa-sound-bristol-takeover',
            title: 'Kyrist & MC Gusto - Live @ Outlook Festival UK (Sofa Sound Bristol Takeover)',
          },
          {
            published: '2022-10-04T11:11:32Z',
            title: 'Living Beneath The Surface',
            url: 'https://soundcloud.com/j_dlr/living-beneath-the-surface',
          },
          {
            url: 'https://soundcloud.com/skankandbass/zerozero-brain-blud',
            published: '2022-09-27T20:57:11Z',
            title: 'ZeroZero & Brain - Blud',
          },
          {
            title: 'ZeroZero & Linja - Gobi',
            published: '2022-09-28T07:00:56Z',
            url: 'https://soundcloud.com/drumandbassarena/zerozero-linja-gobi',
          },
        ],
        popular: [
          {
            published: '2022-09-15T17:22:02Z',
            url: 'https://soundcloud.com/sofasoundbristol/promo-mix-hydro-for-sofa-sound-trinity-240922',
            title: 'PROMO MIX! Hydro for Sofa Sound Trinity - 24/09/22',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/molecular-check-it-vip-free-track',
            published: '2022-10-26T14:19:06Z',
            title: 'Molecular - Check It VIP - [FREE TRACK]',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-mixing-bowl-29-zerozero',
            published: '2022-10-05T17:52:42Z',
            title: 'Sofa Sound Mixing Bowl 29 - ZeroZero',
          },
          {
            title: 'Minor Forms - The Funk Line - [FREE TRACK]',
            url: 'https://soundcloud.com/sofasoundbristol/minor-forms-the-funk-line-free-track',
            published: '2022-06-13T17:58:05Z',
          },
          {
            title: 'When Raf Met Freddy >> Molecular & Freddy B - Sofa Singles Club mix',
            published: '2022-08-08T12:59:57Z',
            url: 'https://soundcloud.com/sofasoundbristol/when-raf-met-freddy-molecular-freddy-b-sofa-singles-club-mix',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-mixing-bowl-28-minor-forms',
            published: '2022-06-29T09:37:22Z',
            title: 'Sofa Sound Mixing Bowl 28 - Minor Forms',
          },
          {
            title: 'DLR & Hoppa - A World That Looked The Same - SSFREE001',
            url: 'https://soundcloud.com/sofasoundbristol/dlr-hoppa-a-world-that-looked-the-same-ssfree001',
            published: '2017-08-21T18:24:30Z',
          },
          {
            published: '2019-10-12T15:21:54Z',
            title: 'SS005 - A - The Sauce - Mr Robot Ft Aioli',
            url: 'https://soundcloud.com/sofasoundbristol/ss005-a-the-sauce-mr-robot-ft-aioli',
          },
          {
            title: 'Molecular - Crazy Man',
            published: '2022-11-01T10:14:32Z',
            url: 'https://soundcloud.com/sofasoundbristol/molecular-crazy-man',
          },
          {
            title: 'Sofa Sound Mixing Bowl 25 - Nymfo',
            published: '2022-03-24T16:56:08Z',
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-mixing-bowl-25-nymfo',
          },
          {
            title: 'Thematic - Walks Behind You',
            url: 'https://soundcloud.com/sofasoundbristol/thematic-walks-behind-you',
            published: '2022-05-04T17:50:49Z',
          },
          {
            title: 'Molecular - Skank VIP',
            published: '2022-04-29T08:42:05Z',
            url: 'https://soundcloud.com/sofasoundbristol/molecular-skank-vip',
          },
          {
            title: 'Submotive & Vektah - Groove Control',
            published: '2022-04-15T11:58:39Z',
            url: 'https://soundcloud.com/sofasoundbristol/submotive-vektah-groove-control',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/minor-forms-snap-it',
            published: '2022-06-17T15:23:34Z',
            title: 'Minor Forms - Snap It',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-mixing-bowl-27-kolectiv',
            published: '2022-06-14T13:15:34Z',
            title: 'Sofa Sound Mixing Bowl 27 - Kolectiv',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/minor-forms-zero-t-sinking-deeper',
            published: '2022-06-17T09:18:56Z',
            title: 'Minor Forms & Zero T - Sinking Deeper',
          },
          {
            title: 'Sofa Sound presents: Hollie-may (Jungle Mix)',
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-presents-hollie-may-jungle-mix',
            published: '2022-06-22T17:26:27Z',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/ssdigi002-a-dlr-script',
            title: 'SSDIGI002 - A - DLR & Script - Electronic Heroin',
            published: '2018-05-04T14:11:14Z',
          },
          {
            title: 'Sofa Sound Mixing Bowl 26 - Brain',
            published: '2022-05-25T14:41:24Z',
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-mixing-bowl-26-brain',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/minor-forms-movement-theory',
            title: 'Minor Forms - Movement Theory',
            published: '2022-06-17T15:21:18Z',
          },
          {
            published: '2021-04-16T08:14:11Z',
            title:
              'Sofa Sound Mixing Bowl 16- DLR [Sofa Sound @ High Rise Hub 24th April Hype Mix]',
            url: 'https://soundcloud.com/sofasoundbristol/sofa-sound-mixing-bowl-15-dlr-sofa-sound-high-rise-hub-24th-april-hype-mix',
          },
          {
            title: 'SS005 - AA - The Sauce - The Click',
            published: '2019-10-16T08:29:21Z',
            url: 'https://soundcloud.com/sofasoundbristol/ss005-aa-the-sauce-the-click',
          },
          {
            published: '2020-03-31T15:59:35Z',
            url: 'https://soundcloud.com/sofasoundbristol/jacobs-x-sofa-sound-bristol-present-dlr-gusto-live-recording',
            title: 'Jacobs X Sofa Sound Bristol Present: DLR & Gusto LIVE RECORDING',
          },
          {
            url: 'https://soundcloud.com/sofasoundbristol/trex-freddy-b-go-mad',
            published: '2022-05-05T09:33:09Z',
            title: 'Trex & Freddy B - Go Mad',
          },
          {
            title: 'DLR & Spinline - Follow The Lines',
            published: '2022-02-02T15:39:36Z',
            url: 'https://soundcloud.com/sofasoundbristol/dlr-spinline-follow-the-lines',
          },
          {
            published: '2021-07-06T12:39:34Z',
            title: "Le Peuple De L'Herbe - No Escape [Bob White & Cecil Hotel Remix]",
            url: 'https://soundcloud.com/sofasoundbristol/le-peuple-de-lherbe-no-escape-bob-white-cecil-hotel-remix',
          },
          {
            title: 'Mic Insights #1 - MC Fokus & Nuvaman',
            published: '2022-07-10T13:10:00Z',
            url: 'https://soundcloud.com/sofasoundbristol/mic-insights-1-mc-fokus-nuvaman',
          },
          {
            title: 'PROMO MIX! Submotive for Sofa Sound Brighton 11/12/21',
            published: '2021-12-07T17:32:34Z',
            url: 'https://soundcloud.com/sofasoundbristol/promo-mix-submotive-for-sofa-sound-brighton-111221',
          },
          {
            published: '2019-01-10T12:56:42Z',
            url: 'https://soundcloud.com/sofasoundbristol/dlr-promo-mix-sofa-sound-at-trinity-centre',
            title: 'DLR PROMO MIX: Sofa Sound at Trinity Centre, Bristol',
          },
          {
            title: 'Nymfo - Endless',
            url: 'https://soundcloud.com/sofasoundbristol/ssdigi032-nymfo-endless',
            published: '2022-03-21T14:10:36Z',
          },
        ],
        recent: [],
      },
      name: 'Sofa Sound Bristol',
      widgets: [
        'https://soundcloud.com/sofasoundbristol/molecular-check-it-vip-free-track?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/sofasoundbristol/thematic-walks-behind-you?si=6bde6c96b2104323abc218713d268ca8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/sofasoundbristol/molecular-skank-vip?si=4bcc14579b2b4195b55aa5f945b78a24&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/sofasoundbristol/minor-forms-snap-it?si=cf34df47b34a44f7be95a6066f183b2c&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      id: '4TxRH9mKeqF6BuZJzM7Q',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-chhAN8EcuzNbtjnp-uQgyJQ-t500x500.jpg',
      artists: ['Hyroglifics', 'Mozey'],
      followers: 2697,
      link: 'https://soundcloud.com/peerpressurerecords',
      notes: 'Looks inactive',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2020-11-07T16:42:43Z',
      lastScraped: 1668963170157,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/dnbdojo/javano-coral-premiere',
            title: 'Javano - Coral [Premiere]',
            published: '2020-11-02T15:26:08Z',
          },
          {
            published: '2020-10-30T18:14:48Z',
            url: 'https://soundcloud.com/drumandbassarena/javano-single-light',
            title: 'Javano - Single Light',
          },
          {
            url: 'https://soundcloud.com/skankandbass/javano-for-me',
            title: 'Javano - For Me',
            published: '2020-10-27T13:03:07Z',
          },
          {
            title: 'Javano - Night Ridge',
            url: 'https://soundcloud.com/drumandbassarena/javano-night-ridge',
            published: '2020-10-27T11:21:36Z',
          },
          {
            published: '2020-07-29T16:54:00Z',
            url: 'https://soundcloud.com/djmag/premiere-facing-jinx-talking-sense-feat-dexta-and-becca-jane-grey',
            title: "Premiere: Facing Jinx 'Talking Sense feat. Dexta and Becca Jane Grey'",
          },
          {
            url: 'https://soundcloud.com/skankandbass/facing-jinx-fear-of-losing-you',
            title: 'Facing Jinx & Philth - Fear Of Losing You ft. Formik',
            published: '2020-07-27T15:52:11Z',
          },
          {
            url: 'https://soundcloud.com/skankandbass/facing-jinx-remember-to-breathe',
            title: 'Facing Jinx - Remember to Breathe ft. Tom James',
            published: '2020-06-23T10:04:20Z',
          },
          {
            title: 'Facing Jinx - Here with You feat. Wreckless & Alexsia Louca [Premiere]',
            published: '2020-06-22T07:15:31Z',
            url: 'https://soundcloud.com/wearestudio/facing-jinx-here-with-you-feat-wreckless-alexsia-louca-premiere',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/premiere-facing-jinx-ft-farz-mireilla-my-soul-peer-pressure-records',
            published: '2020-05-28T11:10:53Z',
            title: "PREMIERE: Facing Jinx (Ft. Farz, Mireilla) 'My Soul' [Peer Pressure Records]",
          },
          {
            published: '2019-12-09T19:59:52Z',
            title: 'Shine Shack Sounds #022 - Philth',
            url: 'https://soundcloud.com/shineshacksounds/shine-shack-sounds-022-philth',
          },
        ],
        recent: [
          {
            published: '2020-11-07T16:42:43Z',
            title: 'Javano - The Shed',
            url: 'https://soundcloud.com/peerpressurerecords/javano-the-shed',
          },
          {
            title: 'Javano - The Drift',
            url: 'https://soundcloud.com/peerpressurerecords/javano-the-drift',
            published: '2020-11-05T14:55:24Z',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/javano-warren',
            published: '2020-11-01T17:40:20Z',
            title: 'Javano - Warren',
          },
          {
            published: '2020-10-30T09:52:36Z',
            url: 'https://soundcloud.com/peerpressurerecords/jib',
            title: 'Javano - Jib',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/facing-jinx-come-back-to-me-feat-ewan-j-phillips',
            title: 'Facing Jinx - Come Back to Me feat. Ewan J Phillips',
            published: '2020-05-25T12:36:55Z',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/my-soul-feat-farz-mireilla',
            title: 'Facing Jinx - My Soul feat, Farz & Mireilla',
            published: '2020-05-25T11:12:40Z',
          },
          {
            title: 'Sonic Rain - Unity feat. Libby Rollings',
            url: 'https://soundcloud.com/peerpressurerecords/sonic-rain-unity-feat-libby-rollings',
            published: '2020-05-22T00:23:10Z',
          },
          {
            published: '2020-04-25T12:18:24Z',
            url: 'https://soundcloud.com/peerpressurerecords/no-human-sound-mise-azam-late-night-show',
            title: 'No Human Sound, Mise, Azam - Late Night Show',
          },
          {
            title: 'No Human Sound - Dot Dot',
            published: '2020-04-25T12:16:15Z',
            url: 'https://soundcloud.com/peerpressurerecords/no-human-sound-dot-dot',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/dont-deal',
            published: '2020-04-25T12:12:10Z',
            title: "No Human Sound - Don't Deal",
          },
        ],
        popular: [
          {
            title: 'Javano - The Drift',
            published: '2020-11-05T14:55:24Z',
            url: 'https://soundcloud.com/peerpressurerecords/javano-the-drift',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/free-philth-falling',
            published: '2015-04-20T18:39:17Z',
            title: '*FREE* - Philth - Falling',
          },
          {
            title: 'Facing Jinx & Philth feat. Loz Contreras - Perfect Secret',
            published: '2016-01-17T10:29:08Z',
            url: 'https://soundcloud.com/peerpressurerecords/facing-jinx-philth-feat-loz-contreras-perfect-secret',
          },
          {
            published: '2017-05-29T20:27:50Z',
            url: 'https://soundcloud.com/peerpressurerecords/tephra-arkoze-feelings',
            title: 'Tephra & Arkoze - Feelings',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/javano-warren',
            title: 'Javano - Warren',
            published: '2020-11-01T17:40:20Z',
          },
          {
            published: '2012-05-13T23:31:14Z',
            title: 'Philth - One Perfect Moment - OUT NOW',
            url: 'https://soundcloud.com/peerpressurerecords/philth-one-perfect-moment',
          },
          {
            published: '2016-04-29T00:14:37Z',
            title: 'HLZ - No Peace',
            url: 'https://soundcloud.com/peerpressurerecords/hlz-no-peace',
          },
          {
            title: '*FREE* - Facing Jinx - Lonely VIP',
            published: '2013-12-15T23:41:53Z',
            url: 'https://soundcloud.com/peerpressurerecords/facing-jinx-lonely-vip',
          },
          {
            title: 'Olski & Blastikz - The Promise',
            url: 'https://soundcloud.com/peerpressurerecords/olski-blaztiks-the-promise',
            published: '2016-02-16T19:45:53Z',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/my-soul-feat-farz-mireilla',
            published: '2020-05-25T11:12:40Z',
            title: 'Facing Jinx - My Soul feat, Farz & Mireilla',
          },
          {
            title: '**FREE** Philth - One perfect moment (Facing Jinx Refix)',
            published: '2015-12-07T21:49:09Z',
            url: 'https://soundcloud.com/peerpressurerecords/free-philth-one-perfect-moment-facing-jinx-refix',
          },
          {
            title: 'Philth - Addiction (I Can Feel You)',
            url: 'https://soundcloud.com/peerpressurerecords/philth-addiction-i-can-feel',
            published: '2012-12-17T22:44:26Z',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/javano-the-shed',
            published: '2020-11-07T16:42:43Z',
            title: 'Javano - The Shed',
          },
          {
            title: 'Hyroglifics - Senseless feat. Peta',
            published: '2012-08-21T22:36:51Z',
            url: 'https://soundcloud.com/peerpressurerecords/hyroglifics-senseless-feat',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/olski-look',
            published: '2015-03-26T21:50:56Z',
            title: 'Olski - Look',
          },
          {
            title: 'No Human Sound - Dot Dot',
            published: '2020-04-25T12:16:15Z',
            url: 'https://soundcloud.com/peerpressurerecords/no-human-sound-dot-dot',
          },
          {
            title: 'Mozey - Black Room',
            url: 'https://soundcloud.com/peerpressurerecords/black-room',
            published: '2018-07-31T21:36:35Z',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/wreckless-face-of-the-deep_feat-just_some_guy',
            title: 'Wreckless - Face of the deep Feat. Just Some Guy',
            published: '2013-06-09T09:02:08Z',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/olski-blastikz-carrier',
            published: '2016-02-26T10:49:59Z',
            title: 'Olski & Blastikz - Carrier',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/cant-get-none',
            published: '2017-06-29T21:51:51Z',
            title: "Reckei - Can't Get None",
          },
          {
            published: '2018-09-06T22:29:52Z',
            url: 'https://soundcloud.com/peerpressurerecords/you-took-a-part-of-me-facing',
            title: 'You Took A Part Of Me (Facing Jinx Remix)',
          },
          {
            title: 'Olski - Ballroom Shwdwn',
            url: 'https://soundcloud.com/peerpressurerecords/olski-ballroom-shwdwn',
            published: '2017-07-29T13:38:48Z',
          },
          {
            published: '2015-03-26T21:54:03Z',
            title: 'Olski - Open Heart',
            url: 'https://soundcloud.com/peerpressurerecords/olski-open-heart',
          },
          {
            published: '2014-04-12T19:04:19Z',
            url: 'https://soundcloud.com/peerpressurerecords/noel-exit9-tonight',
            title: 'Noel & Exit9 - Tonight',
          },
          {
            published: '2014-02-17T20:58:20Z',
            title: 'Philth & Wreckless - Daywalker',
            url: 'https://soundcloud.com/peerpressurerecords/philth-wreckless-daywalker',
          },
          {
            published: '2014-12-29T12:32:52Z',
            url: 'https://soundcloud.com/peerpressurerecords/realtime-derpetroid',
            title: 'Realtime - Derpetroid',
          },
          {
            title: 'Javano - Jib',
            url: 'https://soundcloud.com/peerpressurerecords/jib',
            published: '2020-10-30T09:52:36Z',
          },
          {
            title: 'Philth - Attraction- OUT NOW',
            published: '2012-05-13T23:27:03Z',
            url: 'https://soundcloud.com/peerpressurerecords/philth-attraction',
          },
          {
            published: '2013-08-25T23:36:08Z',
            url: 'https://soundcloud.com/peerpressurerecords/philth-destiny',
            title: 'Philth - Destiny',
          },
          {
            url: 'https://soundcloud.com/peerpressurerecords/olski-agnostic-x',
            published: '2017-07-29T13:36:06Z',
            title: 'Olski - Agnostic X',
          },
        ],
      },
      name: 'Peer Pressure Records',
      id: '4gG6tbVUo6lZYawpS3PN',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000751975972-witrr6-t500x500.jpg',
      artists: ['Cesco', 'Ben Snow'],
      followers: 4249,
      link: 'https://soundcloud.com/monkaudiouk',
      notes: '',
      styles: ['Jump Up', 'Liquid', 'Vocal'],
      submission: 'info@monkaudiouk.co.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-12-06T00:03:48Z',
      lastScraped: 1670364985424,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/monkaudiouk/no-patterns-rumble',
            title: 'No Patterns - Rumble [Free Download]',
            published: '2020-02-17T12:32:24Z',
          },
          {
            title: 'Fullstep Phil - Step (feat. Grafta MC) [Free Download]',
            published: '2020-04-20T15:25:03Z',
            url: 'https://soundcloud.com/monkaudiouk/fullstep-phil-step-feat-grafta-mc',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/able-ice-cold-ft-grafta-mc',
            published: '2021-02-03T09:14:28Z',
            title: 'ABLE - Ice Cold Ft Grafta MC',
          },
          {
            title: 'Dubvendor - Play The Game (FREE DOWNLOAD)',
            published: '2022-11-08T16:00:29Z',
            url: 'https://soundcloud.com/monkaudiouk/dubvendor-play-the-game-free-download',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/erritate-sauce-pot-feat-mc-alcemist-1',
            published: '2019-12-24T12:15:58Z',
            title: 'Erritate - Sauce Pot (feat. MC Alcemist) [Free Download]',
          },
          {
            published: '2019-11-26T09:03:44Z',
            title: 'Kidsonic - Mindflyer',
            url: 'https://soundcloud.com/monkaudiouk/kidsonic-mindflyer-1',
          },
          {
            published: '2019-01-25T09:32:45Z',
            url: 'https://soundcloud.com/monkaudiouk/mela-recognise',
            title: 'Mela - Recognise',
          },
          {
            published: '2020-06-22T15:52:20Z',
            url: 'https://soundcloud.com/monkaudiouk/lockerz-daydreaming',
            title: 'Lockerz - Daydreaming [Free Download]',
          },
          {
            title: 'ABLE - Under [Free Download]',
            url: 'https://soundcloud.com/monkaudiouk/able-under-1',
            published: '2020-03-23T15:08:07Z',
          },
          {
            published: '2019-09-19T12:25:54Z',
            url: 'https://soundcloud.com/monkaudiouk/ob-nameless-free-download',
            title: 'OB - Nameless (Free Download)',
          },
          {
            published: '2022-01-26T18:35:47Z',
            title: 'Monk Audio Presents: Sabrina & Diagnostix (Max Baker Promo Mix)',
            url: 'https://soundcloud.com/monkaudiouk/monk-audio-presents-sabrina-diagnostix-max-baker-promo-mix',
          },
          {
            title: 'Kidsonic - Pulse Rate',
            published: '2019-11-26T09:03:43Z',
            url: 'https://soundcloud.com/monkaudiouk/kidsonic-pulse-rate-1',
          },
          {
            title: 'Adzzy - Bombay',
            published: '2019-09-30T11:23:35Z',
            url: 'https://soundcloud.com/monkaudiouk/adzzy-bombay-1',
          },
          {
            published: '2019-01-25T09:32:44Z',
            url: 'https://soundcloud.com/monkaudiouk/erritate-galdem-dance',
            title: 'Erritate - Galdem Dance',
          },
          {
            published: '2021-08-09T09:17:50Z',
            title: 'No-Sine - Spider Nest',
            url: 'https://soundcloud.com/monkaudiouk/spider-nest',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/dunk-guest-mix-monk-audio',
            title: 'Dunk - Guest Mix (Monk Audio)',
            published: '2021-12-26T12:10:06Z',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/mela-valley-low-ep',
            published: '2018-11-05T15:42:47Z',
            title: 'Mela - Valley Low EP',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/no-patterns-days-gone-by-1',
            published: '2020-03-01T09:38:18Z',
            title: 'No Patterns - Days Gone By',
          },
          {
            title: 'Adzzy - Alternate Universe',
            url: 'https://soundcloud.com/monkaudiouk/adzzy-alternate-universe-1',
            published: '2019-09-30T11:23:35Z',
          },
          {
            title: 'Stuss - Containment [Free Download]',
            url: 'https://soundcloud.com/monkaudiouk/stuss-containment-final-master',
            published: '2020-08-26T09:51:03Z',
          },
          {
            published: '2020-05-18T16:00:49Z',
            title: 'LG - Chaos Theory [Free Download]',
            url: 'https://soundcloud.com/monkaudiouk/lg-chaos-theory-free-download',
          },
          {
            published: '2021-06-01T10:41:47Z',
            url: 'https://soundcloud.com/monkaudiouk/sabrina-4k-mix',
            title: 'SABRINA 4K Guest Mix // Tracklist @ 100 likes.',
          },
          {
            published: '2019-02-25T22:28:54Z',
            title: 'Ben Snow - Enter VIP',
            url: 'https://soundcloud.com/monkaudiouk/monk007-ben-snow-enter-vip',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/bee-hive',
            published: '2021-08-09T09:17:48Z',
            title: 'No-Sine - Bee Hive',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/grafta-recognition-ep-launch-promo-mix',
            title: 'GRAFTA - RECOGNITION EP LAUNCH (PROMO MIX)',
            published: '2022-03-05T13:00:26Z',
          },
          {
            published: '2018-09-26T07:59:46Z',
            url: 'https://soundcloud.com/monkaudiouk/ob-fracture',
            title: 'OB - Fracture',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/ob-rush-free-download',
            title: 'OB - Rush [Free Download]',
            published: '2020-01-20T12:06:45Z',
          },
          {
            title: 'Hutt & StillZ - Rubenov',
            published: '2018-05-11T22:03:33Z',
            url: 'https://soundcloud.com/monkaudiouk/hutt-stillz-rubenov',
          },
          {
            title: 'Champagne Breakfast - Monk Audio Presents: Promo Mix',
            url: 'https://soundcloud.com/monkaudiouk/champagne-breakfast-monk-audio-presents-promo-mix',
            published: '2021-11-03T17:15:15Z',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/fullstep-phil-generation-kill-steppin-vip',
            title: "Fullstep Phil - Generation Kill (Steppin' VIP)",
            published: '2020-05-06T20:03:50Z',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/mixmag-1/impact-danielle',
            published: '2022-12-06T00:03:48Z',
            title: 'Impact: Danielle',
          },
          {
            title: 'RHOLODITE (Free Download/Click Buy)',
            url: 'https://soundcloud.com/erritatedj/rholodite-free-downloadclick-buy',
            published: '2022-08-12T15:06:08Z',
          },
          {
            url: 'https://soundcloud.com/officialdrumad/premiere-kidsonic-lay-back-impact-music',
            title: 'PREMIERE: Kidsonic - Lay Back [Impact Music]',
            published: '2022-05-24T16:48:08Z',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/koax-solarity-ft-grafta-mc-creatures-remix-transparent-audio',
            title: "Koax 'Solarity' Ft. Grafta MC (Creatures Remix) [Transparent Audio]",
            published: '2022-07-04T12:22:10Z',
          },
          {
            url: 'https://soundcloud.com/skankandbass/dunk-buffalo-bill',
            published: '2022-01-01T09:34:33Z',
            title: 'Dunk - Buffalo Bill',
          },
          {
            published: '2021-12-17T15:51:31Z',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/dunk-honeycomb-premiere',
            title: 'Dunk - Honeycomb [Premiere]',
          },
          {
            title: 'Groove LDN Guest Mix #065 - OB',
            published: '2021-10-27T12:36:35Z',
            url: 'https://soundcloud.com/grooveldn/groove-ldn-guest-mix-065-ob',
          },
          {
            published: '2021-10-05T16:06:22Z',
            title: 'COLD FOLD (Free)',
            url: 'https://soundcloud.com/ob-dnb/cold-fold-free-dl',
          },
          {
            title: 'Missledz - SINE Summer Shindig Promo Mix',
            url: 'https://soundcloud.com/sine-audio/missledz-sine-summer-shindig-promo-mix',
            published: '2021-08-23T21:28:19Z',
          },
          {
            url: 'https://soundcloud.com/dedmandnb/june-21st-dub',
            title: 'June 21st Dub [Free DL]',
            published: '2021-07-19T16:45:28Z',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/monkaudiouk/dubvendor-play-the-game-free-download',
            published: '2022-11-08T16:00:29Z',
            title: 'Dubvendor - Play The Game (FREE DOWNLOAD)',
          },
          {
            published: '2022-03-05T13:00:26Z',
            url: 'https://soundcloud.com/monkaudiouk/grafta-recognition-ep-launch-promo-mix',
            title: 'GRAFTA - RECOGNITION EP LAUNCH (PROMO MIX)',
          },
          {
            title: 'Monk Audio Presents: Sabrina & Diagnostix (Max Baker Promo Mix)',
            url: 'https://soundcloud.com/monkaudiouk/monk-audio-presents-sabrina-diagnostix-max-baker-promo-mix',
            published: '2022-01-26T18:35:47Z',
          },
          {
            url: 'https://soundcloud.com/monkaudiouk/klutz-guest-mix-monk-audio',
            published: '2022-01-23T11:58:05Z',
            title: 'Klutz - Guest Mix (Monk Audio)',
          },
          {
            title: 'Dunk - Guest Mix (Monk Audio)',
            published: '2021-12-26T12:10:06Z',
            url: 'https://soundcloud.com/monkaudiouk/dunk-guest-mix-monk-audio',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/monkaudiouk/no-patterns-days-gone-by-1',
        'https://soundcloud.com/monkaudiouk/able-ice-cold-ft-grafta-mc',
      ],
      name: 'Monk Audio',
      id: '57RhECSvNc5ZQl3iGqgA',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-t22U2xATNI2RaOfP-gA9OUg-t500x500.jpg',
      artists: ['Alix Perez', 'Cesco', 'Monty'],
      followers: 36151,
      link: 'https://soundcloud.com/1985music1985',
      notes: 'Not just DnB, dubstep and halftime too',
      styles: ['Jungle', 'Liquid', 'Vocal'],
      submission: '1985demos@gmail.com',
      songsSubmitted: ['Night & Day', 'Stamina', "You Don't Know", 'Now Hear This'],
      songsSkipped: ['Sunday Secrets'],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-04T02:54:46Z',
      lastScraped: 1668963172962,
      tracks: {
        reposts: [
          {
            title: '1985 Music with Metrodome - 02 June 2022',
            url: 'https://soundcloud.com/rinsefm/1985-with-metrodome-02-june-2022',
            published: '2022-06-03T13:39:45Z',
          },
          {
            title: 'Dark Wing',
            published: '2022-06-03T08:47:07Z',
            url: 'https://soundcloud.com/shadesmusicpage/dark-wing',
          },
          {
            url: 'https://soundcloud.com/rinsefm/alixperez260122',
            published: '2022-01-27T12:57:26Z',
            title: 'Alix Perez - 26 January 2022',
          },
          {
            published: '2021-05-20T13:45:50Z',
            title: 'Workforce - Apply The Breaks [Premiere]',
            url: 'https://soundcloud.com/wearestudio/workforce-apply-the-breaks-premiere',
          },
          {
            published: '2021-05-21T09:19:19Z',
            title: "Workforce - Don't Tell (Part II)",
            url: 'https://soundcloud.com/drumandbassarena/workforce-dont-tell-part-ii',
          },
          {
            title: 'Visages - Gymnopédies [Premiere]',
            url: 'https://soundcloud.com/wearestudio/visages-gymnopedies-premiere',
            published: '2021-04-25T08:44:03Z',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/visages-yalda',
            published: '2021-04-26T13:55:18Z',
            title: 'Visages - Yalda',
          },
          {
            published: '2021-04-21T14:31:37Z',
            url: 'https://soundcloud.com/skankandbass/visages-egotrip',
            title: 'Visages - Egotrip',
          },
          {
            published: '2021-03-30T09:04:12Z',
            title: 'Monty - F4DE',
            url: 'https://soundcloud.com/skankandbass/monty-f4de',
          },
          {
            title: 'Monty - SVP w/ Icicle',
            published: '2021-03-29T09:12:08Z',
            url: 'https://soundcloud.com/drumandbassarena/monty-svp-w-icicle',
          },
        ],
        popular: [
          {
            published: '2022-08-05T02:45:57Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-bou-trigga-back-to',
            title: 'Alix Perez, Bou, Trigga - Back to Basics',
          },
          {
            url: 'https://soundcloud.com/1985music1985/visages-strategy-lunar-eclipse',
            published: '2022-01-28T02:29:33Z',
            title: 'Visages, Strategy - Lunar Eclipse',
          },
          {
            published: '2022-09-16T02:45:35Z',
            title: 'Monty, Visages - TEK',
            url: 'https://soundcloud.com/1985music1985/monty-visages-tek',
          },
          {
            published: '2022-08-12T02:27:04Z',
            title: 'Alix Perez, T-Man - Under Pressure',
            url: 'https://soundcloud.com/1985music1985/alix-perez-t-man-under',
          },
          {
            published: '2021-11-12T05:37:02Z',
            title: 'Monty, Visages feat. PAV4N, Strategy - Hardware',
            url: 'https://soundcloud.com/1985music1985/monty-visages-feat-pav4n',
          },
          {
            published: '2022-09-30T03:43:17Z',
            title: 'Visages - Love Conspiration',
            url: 'https://soundcloud.com/1985music1985/visages-love-conspiration',
          },
          {
            title: 'Dogger, Mindstate feat. Liam Bailey - Broken Home (Calibre Remix)',
            url: 'https://soundcloud.com/1985music1985/dogger-mindstate-feat-liam',
            published: '2022-08-26T02:39:37Z',
          },
          {
            title: 'Alix Perez, Ebb - Shallow Affect',
            published: '2022-09-23T02:34:21Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-ebb-shallow-affect',
          },
          {
            title: 'Shades, Alix Perez, Eprom - Into Stone',
            url: 'https://soundcloud.com/1985music1985/shades-alix-perez-eprom-into',
            published: '2022-07-22T02:28:58Z',
          },
          {
            title: 'Cesco - Juan40',
            url: 'https://soundcloud.com/1985music1985/cesco-juan40',
            published: '2022-06-21T02:27:48Z',
          },
          {
            title: "Monty, Visages - Vibin'",
            url: 'https://soundcloud.com/1985music1985/monty-visages-vibin',
            published: '2021-10-05T02:23:37Z',
          },
          {
            published: '2022-06-13T02:37:28Z',
            title: 'Shades, Alix Perez, Eprom feat. MC GQ - Immortals',
            url: 'https://soundcloud.com/1985music1985/shades-alix-perez-eprom-feat',
          },
          {
            url: 'https://soundcloud.com/1985music1985/cesco-drone-el-guapo',
            published: '2022-07-05T02:19:35Z',
            title: 'Cesco, Drone - El Guapo',
          },
          {
            published: '2022-08-26T02:40:17Z',
            title: 'Dogger, Mindstate feat. DRS - TMWFTE',
            url: 'https://soundcloud.com/1985music1985/dogger-mindstate-feat-drs',
          },
          {
            title: 'Visages - MK Ultra',
            url: 'https://soundcloud.com/1985music1985/visages-mk-ultra',
            published: '2022-10-28T02:31:45Z',
          },
          {
            title: 'Alix Perez - Desanka',
            published: '2022-02-25T02:12:07Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-desanka',
          },
          {
            title: 'Eprom - Dangerous Sound',
            published: '2021-06-04T10:13:51Z',
            url: 'https://soundcloud.com/1985music1985/eprom-dangerous-sound',
          },
          {
            title: 'Shades, The Gaslamp Killer - Purification',
            url: 'https://soundcloud.com/1985music1985/shades-the-gaslamp-killer',
            published: '2022-07-01T02:46:28Z',
          },
          {
            published: '2022-05-20T02:39:58Z',
            url: 'https://soundcloud.com/1985music1985/shades-alix-perez-eprom-dark',
            title: 'Shades, Alix Perez, Eprom - Dark Wing',
          },
          {
            url: 'https://soundcloud.com/1985music1985/alix-perez-evermore',
            published: '2022-03-04T03:25:39Z',
            title: 'Alix Perez - Evermore',
          },
          {
            title: 'Paige Julia - Ease Your Mind',
            url: 'https://soundcloud.com/1985music1985/paige-julia-ease-your-mind',
            published: '2022-10-07T03:53:14Z',
          },
          {
            title: 'Shades, Alix Perez, Eprom - Bleed',
            url: 'https://soundcloud.com/1985music1985/shades-alix-perez-eprom-bleed',
            published: '2022-07-22T02:26:41Z',
          },
          {
            published: '2021-08-06T07:11:28Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-burning-babylon',
            title: 'Alix Perez - Burning Babylon',
          },
          {
            title: 'Alix Perez - Not Alone',
            published: '2022-10-14T03:39:30Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-not-alone',
          },
          {
            url: 'https://soundcloud.com/1985music1985/tsuruda-migi',
            published: '2021-07-16T12:30:42Z',
            title: 'Tsuruda - Migi',
          },
          {
            published: '2022-07-22T02:27:04Z',
            url: 'https://soundcloud.com/1985music1985/shades-alix-perez-eprom-sub',
            title: 'Shades, Alix Perez, Eprom - Sub Noctem',
          },
          {
            title: 'Cesco - Bomba',
            published: '2020-04-08T10:28:26Z',
            url: 'https://soundcloud.com/1985music1985/bomba',
          },
          {
            title: 'Visages - Nibiru',
            published: '2021-07-02T12:23:43Z',
            url: 'https://soundcloud.com/1985music1985/visages-nibiru',
          },
          {
            published: '2022-07-22T02:28:06Z',
            url: 'https://soundcloud.com/1985music1985/shades-alix-perez-eprom-as-wax',
            title: 'Shades, Alix Perez, Eprom - As Wax by Seal',
          },
          {
            published: '2019-08-27T13:49:18Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-trinity-resident-advisor-premiere',
            title: 'Alix Perez - Trinity (Resident Advisor Premiere)',
          },
        ],
        recent: [
          {
            published: '2022-11-04T02:54:46Z',
            url: 'https://soundcloud.com/1985music1985/visages-alix-perez-black',
            title: 'Visages, Alix Perez - Black Katana',
          },
          {
            published: '2022-10-28T02:31:45Z',
            url: 'https://soundcloud.com/1985music1985/visages-mk-ultra',
            title: 'Visages - MK Ultra',
          },
          {
            title: 'Metrodome - ICJ',
            published: '2022-10-14T04:24:17Z',
            url: 'https://soundcloud.com/1985music1985/metrodome-icj',
          },
          {
            url: 'https://soundcloud.com/1985music1985/cesco-no-fuss',
            published: '2022-10-14T03:39:58Z',
            title: 'Cesco - No Fuss',
          },
          {
            published: '2022-10-14T03:39:30Z',
            url: 'https://soundcloud.com/1985music1985/alix-perez-not-alone',
            title: 'Alix Perez - Not Alone',
          },
          {
            title: 'HIJINX - Relapse',
            url: 'https://soundcloud.com/1985music1985/hijinx-relapse',
            published: '2022-10-14T03:39:21Z',
          },
          {
            url: 'https://soundcloud.com/1985music1985/monty-trail-ferns',
            published: '2022-10-14T03:37:17Z',
            title: 'Monty, Trail - Ferns',
          },
          {
            published: '2022-10-14T03:37:04Z',
            url: 'https://soundcloud.com/1985music1985/trail-velasquez',
            title: 'Trail - Velasquez',
          },
        ],
      },
      name: '1985 Music',
      email: '',
      widgets: [
        'https://soundcloud.com/1985music1985/alix-perez-bou-trigga-back-to',
        'https://soundcloud.com/1985music1985/visages-love-conspiration',
        'https://soundcloud.com/1985music1985/dogger-mindstate-feat-liam',
        'https://soundcloud.com/1985music1985/monty-visages-vibin',
        'https://soundcloud.com/1985music1985/paige-julia-ease-your-mind',
      ],
      id: '5AiDNg0in8t2uaZIzLZt',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000755332414-mlimtf-t500x500.jpg',
      artists: ['Tim Reaper'],
      followers: 76574,
      link: 'https://soundcloud.com/k7-records',
      notes: 'Weird breaks not just jungle ',
      styles: ['Jungle'],
      submission: 'https://k7.com/contact/',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-04T16:02:04Z',
      lastScraped: 1668963174718,
      tracks: {
        recent: [
          {
            title: 'Otik - Rainbow Rhythm',
            url: 'https://soundcloud.com/k7-records/otik-rainbow-rhythm-1',
            published: '2022-11-04T16:02:02Z',
          },
          {
            title: 'Otik - Crystal Clear',
            published: '2022-11-04T16:02:04Z',
            url: 'https://soundcloud.com/k7-records/otik-crystal-clear',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/k7-records/denis-sulta-msnj',
            title: 'Denis Sulta - MSNJ [Jackmaster DJ-Kicks Exclusive]',
            published: '2016-06-03T15:07:37Z',
          },
          {
            published: '2016-12-14T15:39:30Z',
            url: 'https://soundcloud.com/k7-records/luca-dalberto-wait-for-me-7k',
            title: "Luca D'Alberto - Wait For Me [7K!]",
          },
          {
            published: '2019-05-22T09:37:19Z',
            url: 'https://soundcloud.com/k7-records/red-axes-hanoi',
            title: 'Red Axes - Hanoi feat. Cô Đôi Thượng Ngàn & Viet Rice Band',
          },
          {
            title: 'Motor City Drum Ensemble- L.O.V.E. (DJ-Kicks exclusive)',
            published: '2011-06-13T18:53:49Z',
            url: 'https://soundcloud.com/k7-records/motor-city-drum-ensemble-l-o-v',
          },
          {
            title: 'Niklas Paschburg - Spark',
            published: '2017-11-03T14:54:41Z',
            url: 'https://soundcloud.com/k7-records/niklas-paschburg-spark',
          },
          {
            published: '2022-09-14T09:14:13Z',
            title: 'Tim Reaper & Kloke - Flow State',
            url: 'https://soundcloud.com/k7-records/tim-reaper-kloke-flow-state-1',
          },
          {
            title: 'Maceo Plex - Galactic Cinema (DJ-Kicks)',
            url: 'https://soundcloud.com/k7-records/maceo-plex-galactic-cinema',
            published: '2013-04-01T19:33:17Z',
          },
          {
            published: '2013-06-27T16:12:07Z',
            url: 'https://soundcloud.com/k7-records/wsgmhankat',
            title: 'When Saints Go Machine - Iodine (Hankat Remix)',
          },
          {
            title: 'Portable Feat. Lcio - Surrender (Kosi Edit) [from DJ Koze - DJ-Kicks]',
            url: 'https://soundcloud.com/k7-records/portable-feat-lio-surrender-kosi-edit-from-dj-koze-dj-kicks',
            published: '2015-05-29T15:25:38Z',
          },
          {
            published: '2015-11-26T14:02:27Z',
            url: 'https://soundcloud.com/k7-records/tosca-stuttgart-marlow-and-tr',
            title: 'Tosca feat. Lucas Santtana - Stuttgart (Marlow And Trüby Refix)',
          },
          {
            url: 'https://soundcloud.com/k7-records/goldene-acht-ma-remix',
            title: 'Goldene Acht (Mind Against Remix)',
            published: '2020-03-23T11:38:14Z',
          },
          {
            url: 'https://soundcloud.com/k7-records/tim-reaper-kloke-museum-1',
            title: 'Tim Reaper & Kloke - Museum',
            published: '2022-09-14T09:14:45Z',
          },
          {
            published: '2016-10-10T08:49:53Z',
            title: 'Michael Mayer & Joe Goddard - For You',
            url: 'https://soundcloud.com/k7-records/michael-mayer-joe-goddard-for-you',
          },
          {
            title: 'Tosca - Export Import',
            url: 'https://soundcloud.com/k7-records/tosca-export-import',
            published: '2016-12-14T20:41:19Z',
          },
          {
            published: '2013-01-09T16:00:13Z',
            url: 'https://soundcloud.com/k7-records/tosca-what-if-feat-sarah',
            title: 'Tosca - What If feat. Sarah Carlier',
          },
          {
            url: 'https://soundcloud.com/k7-records/gold-panda-an-iceberg-hurled',
            title: 'Gold Panda- An Iceberg Hurled Northward Through Clouds (DJ-Kicks)',
            published: '2011-09-27T19:36:56Z',
          },
          {
            title: "Maceo Plex & Mark O'Sullivan - When It All Comes To This",
            published: '2013-04-22T14:44:37Z',
            url: 'https://soundcloud.com/k7-records/maceo-plex-mark-osullivan',
          },
          {
            title: 'Lone - Saturday Night',
            url: 'https://soundcloud.com/k7-records/lone-saturday-night-1',
            published: '2017-09-12T08:33:16Z',
          },
          {
            published: '2014-09-19T16:28:43Z',
            url: 'https://soundcloud.com/k7-records/tosca-influences-mix',
            title: 'Tosca - Outta Here Influences Mix',
          },
          {
            published: '2015-11-26T14:02:37Z',
            url: 'https://soundcloud.com/k7-records/tosca-swimswimswim',
            title: 'Tosca - Swimswimswim',
          },
          {
            published: '2022-11-04T16:02:02Z',
            url: 'https://soundcloud.com/k7-records/otik-rainbow-rhythm-1',
            title: 'Otik - Rainbow Rhythm',
          },
          {
            published: '2014-11-19T18:36:45Z',
            url: 'https://soundcloud.com/k7-records/knowtoryous-the-revenge-of-the-bomberclad-joint-kruder-dorfmeister-session-pt-ll',
            title:
              'Knowtoryous - The Revenge Of The Bomberclad Joint (Kruder & Dorfmeister Session Pt Il)',
          },
          {
            url: 'https://soundcloud.com/k7-records/actress-bird-matrix-dj-kicks-exclusive',
            published: '2015-03-30T21:42:44Z',
            title: 'Actress - Bird Matrix [DJ-Kicks Exclusive]',
          },
          {
            published: '2019-10-22T10:04:43Z',
            title: 'Kamaal Williams - Snitches Brew (Live In Atlanta)',
            url: 'https://soundcloud.com/k7-records/snitches-brew-live-in-atlanta',
          },
          {
            published: '2011-08-19T16:54:07Z',
            url: 'https://soundcloud.com/k7-records/motor-city-drum-ensemble-l-o-1',
            title: 'Motor City Drum Ensemble- L.O.V.E. (Smallpeople Remix)',
          },
          {
            published: '2018-11-21T09:23:27Z',
            title: 'Bjarki - ( . )_( . )',
            url: 'https://soundcloud.com/k7-records/bjarki-1',
          },
          {
            published: '2018-07-16T13:52:26Z',
            title: 'Red Axes - Abidjan feat Yakomin',
            url: 'https://soundcloud.com/k7-records/red-axes-abidjan-feat-yakomin',
          },
          {
            url: 'https://soundcloud.com/k7-records/levon-vincent-marcel-dettmann-can-you-see-dj-kicks-1',
            published: '2016-09-30T12:49:21Z',
            title: 'Marcel Dettmann & Levon Vincent - Can You See [From DJ-Kicks]',
          },
          {
            published: '2013-04-29T12:31:20Z',
            title: 'When Saints Go Machine - Love And Respect feat. Killer Mike (Unkwon Remix)',
            url: 'https://soundcloud.com/k7-records/when-saints-go-machine-love',
          },
          {
            published: '2019-02-11T11:47:28Z',
            url: 'https://soundcloud.com/k7-records/laurel-halo-sweetie-dj-kicks',
            title: 'Laurel Halo - Sweetie (DJ-Kicks)',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/dominik-eulberg/sets/rotmilan',
            title: 'Rotmilan',
            published: '2021-09-24T14:30:33Z',
          },
          {
            title: 'BJF - WGACA TOOL (2K gift)',
            url: 'https://soundcloud.com/djbjf/bjf-wgaca-1',
            published: '2020-03-29T15:16:31Z',
          },
          {
            title: "SL2 - DJ'S TAKE CONTROL (SNAZZY TRAX GARAGE RE-LICK)",
            url: 'https://soundcloud.com/snazzytraxx/sl2remix',
            published: '2020-04-19T07:40:56Z',
          },
          {
            url: 'https://soundcloud.com/malfnktion/blushbrews-mastersept25',
            title: 'Wandering Still: beats & sketches',
            published: '2017-12-26T12:02:02Z',
          },
          {
            url: 'https://soundcloud.com/delicieuse-musique/premiere-red-axes-ho-chi-min-k7-records',
            published: '2019-05-18T16:25:13Z',
            title:
              'PREMIERE: Red Axes - Ho Chi Min (Beo Dat May Troi feat. HCMC Students) [!K7 Records]',
          },
          {
            url: 'https://soundcloud.com/mixmag-1/premiere-robert-hood-focus',
            title: "Premiere: Robert Hood 'Focus (DJ-Kicks)'",
            published: '2018-10-31T17:45:36Z',
          },
          {
            url: 'https://soundcloud.com/jamesalexanderbright/which-way-from-strange-folk-ep',
            title: 'Which Way (Edit)',
            published: '2018-09-13T10:38:37Z',
          },
          {
            title: "Premiere: DJ Seinfeld 'Typeless'",
            published: '2018-06-14T13:54:34Z',
            url: 'https://soundcloud.com/mixmag-1/premiere-dj-seinfeld-typeless',
          },
          {
            url: 'https://soundcloud.com/tiga/woke-original-mix',
            published: '2017-08-03T12:34:16Z',
            title: 'Tiga - Woke (Original Mix)',
          },
          {
            url: 'https://soundcloud.com/scitec/dubfire-dust-devil-2',
            title: 'Dubfire - Dust Devil',
            published: '2017-06-02T16:49:17Z',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/k7-records/tim-reaper-kloke-museum-1',
        'https://soundcloud.com/k7-records/otik-rainbow-rhythm-1',
      ],
      name: '!K7 Records',
      id: '5MB6E16KeNnoP84Pl2IB',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000021719201-xns0cy-t500x500.jpg',
      artists: ['Break', 'DLR'],
      followers: 28934,
      link: 'https://soundcloud.com/symmetry-recordings',
      notes: 'Make sure SoundCloud download is enabled ',
      styles: ['Jump Up', 'Vocal'],
      submission: 'demos@symmetryrecordings.co.uk',
      songsSubmitted: ['Night & Day', "You Don't Know", 'Sunday Secrets'],
      songsSkipped: ['Now Hear This', 'Stamina'],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-10-16T11:13:51Z',
      lastScraped: 1668963176112,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/drumandbassarena/dr-meaker-the-neutron',
            published: '2022-06-16T13:30:28Z',
            title: 'Dr Meaker - The Neutron',
          },
          {
            title: 'DLR & Break - Absolutely True',
            published: '2022-05-19T16:10:03Z',
            url: 'https://soundcloud.com/drumandbassarena/dlr-break-absolutely-true',
          },
          {
            title: 'Collective x Symmetry w/ Break & Kyo 07TH APR 2022',
            url: 'https://soundcloud.com/swufm/collective-x-symmetry-w-break',
            published: '2022-04-07T22:00:57Z',
          },
          {
            published: '2022-03-29T15:57:08Z',
            title: 'DSP - Weeks Go By',
            url: 'https://soundcloud.com/drumandbassarena/dsp-weeks-go-by',
          },
          {
            published: '2022-03-24T12:26:53Z',
            url: 'https://soundcloud.com/in-reach/premiere-dsp-back-and-forth-symmetry-recordings',
            title: 'PREMIERE: DSP - Back And Forth (Symmetry Recordings)',
          },
          {
            title: 'OIO Guest Mix',
            url: 'https://soundcloud.com/bassrush/oio-guest-mix',
            published: '2022-02-11T17:36:29Z',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/oio-generations-symmetry-recordings',
            title: "OIO 'Generations' [Symmetry Recordings]",
            published: '2022-02-07T12:17:16Z',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/break-release-me',
            published: '2021-12-08T11:07:16Z',
            title: 'Break - Release Me',
          },
          {
            published: '2021-10-25T10:34:31Z',
            url: 'https://soundcloud.com/drumandbassarena/zero-t-gimme-the-loot',
            title: 'Zero T - Gimme The Loot',
          },
          {
            published: '2021-09-29T13:51:34Z',
            url: 'https://soundcloud.com/drumandbassarena/conrad-subs-drumbassarena-guest-mix',
            title: 'Conrad Subs - Drum&BassArena Guest Mix',
          },
        ],
        popular: [
          {
            title: 'Break - Locked Down Live DJ Mix',
            url: 'https://soundcloud.com/symmetry-recordings/break-locked-down-live-dj-mix',
            published: '2020-03-27T19:52:08Z',
          },
          {
            published: '2022-10-16T11:13:51Z',
            title: 'SYMM046 - Break Ft. MC Fats - Natural Way - 1min30',
            url: 'https://soundcloud.com/symmetry-recordings/break-ft-mc-fats-natural-way-1min30',
          },
          {
            published: '2022-08-09T11:44:16Z',
            title: 'Jack Boston - Symmetry Mix August 2022',
            url: 'https://soundcloud.com/symmetry-recordings/jack-boston-symmetry-mix-july-2022',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/break-dnb-mix-symmetrytrinity-centre-promo',
            published: '2017-04-24T17:40:19Z',
            title: 'Break DnB Mix - Symmetry@Trinity Centre Promo',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/symm045-jack-boston-feat-tenisha-edwards-this-time-1min30',
            title: 'SYMM045 - Jack Boston Feat. Tenisha Edwards - This Time (1min30)',
            published: '2022-07-15T05:44:26Z',
          },
          {
            title: 'Break - Promo Mix for Symmetry@Let It Roll 2017',
            url: 'https://soundcloud.com/symmetry-recordings/break-promo-mix-for-symmetrylet-it-roll-2017',
            published: '2017-07-12T13:57:03Z',
          },
          {
            published: '2020-05-27T12:28:16Z',
            url: 'https://soundcloud.com/symmetry-recordings/symm031-aa-break-dlr-city',
            title: 'SYMM031 - AA - Break & DLR - City Slickers (Skeptical Remix) 1min30',
          },
          {
            published: '2019-02-07T13:08:32Z',
            url: 'https://soundcloud.com/symmetry-recordings/uneasy-break-remix',
            title: 'Uneasy (Break Remix)',
          },
          {
            title: 'SYMM043 - DLR & Break - Absolutely True',
            published: '2022-05-16T13:41:08Z',
            url: 'https://soundcloud.com/symmetry-recordings/dlr-break-absolutely-true',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/01-break-feat-celestine-last',
            published: '2018-11-16T17:35:29Z',
            title: '01 - Break Feat. Celestine - Last Goodbye - 1min30',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/symm039-zero-t-come-reprazent',
            published: '2021-10-01T15:22:33Z',
            title: 'SYMM039 - Zero T - Come & Reprazent (1min30)',
          },
          {
            published: '2020-08-17T18:09:11Z',
            title: "B. Break & Total Science - Dog's Dinner - (Mefjus Remix)1min30",
            url: 'https://soundcloud.com/symmetry-recordings/b-break-total-science-dogs',
          },
          {
            title: 'Break Feat. MC Fats & Cleveland Watkiss - Conversations [NEST HQ PREMIERE]',
            published: '2018-10-25T21:12:18Z',
            url: 'https://soundcloud.com/symmetry-recordings/break-feat-mc-fats-cleveland-watkiss-conversations-nest-hq-premiere',
          },
          {
            published: '2022-06-10T10:45:03Z',
            title: 'SYMM044 - Dr Meaker - The Neutron (1min30)',
            url: 'https://soundcloud.com/symmetry-recordings/symm044-dr-meaker-the-neutron-1min30',
          },
          {
            title: 'SYMM040 - Break - Release Me (1min30)',
            published: '2021-11-15T18:24:10Z',
            url: 'https://soundcloud.com/symmetry-recordings/symm040-break-release-me-1min30',
          },
          {
            title: 'A. Break Feat. MC GQ - Whispers In My Ear (Break Remix)1min30',
            url: 'https://soundcloud.com/symmetry-recordings/a-break-feat-mc-gq-whispers-in',
            published: '2020-08-17T18:09:13Z',
          },
          {
            published: '2021-06-22T13:23:14Z',
            url: 'https://soundcloud.com/symmetry-recordings/10-s-murk-hat-spine-vedas',
            title: '10. S.Murk - Hat Spine - Vedas Mastered',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/break-10-years-of-symmetry-mix-30-mins',
            published: '2016-10-28T15:09:28Z',
            title: 'Break - 10 Years Of Symmetry Mix - 30 Mins',
          },
          {
            title: '09 Break Ft. Kyo - Gave Too Much - 1Min30 Clip',
            published: '2015-09-25T16:05:53Z',
            url: 'https://soundcloud.com/symmetry-recordings/09-break-ft-kyo-gave-too-much',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/dsp-30-min',
            title: 'DSP - 30 Minute Mix',
            published: '2022-03-21T18:59:32Z',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/symm042-dsp-back-and-forth',
            title: 'SYMM042 - DSP Back And Forth (1min30)',
            published: '2022-03-11T07:44:17Z',
          },
          {
            published: '2021-09-09T09:47:55Z',
            title: 'SYMM038 - Conrad Subs - Cool Off - 1min30',
            url: 'https://soundcloud.com/symmetry-recordings/symm038-conrad-subs-cool-off',
          },
          {
            title:
              'SYMM034 - AA - Break Feat. MC Fats & Cleveland Watkiss- Conversations (Breakage Remix) - 1min30',
            published: '2021-03-09T17:45:51Z',
            url: 'https://soundcloud.com/symmetry-recordings/symm034-aa-break-feat-mc-3',
          },
          {
            url: 'https://soundcloud.com/symmetry-recordings/conrad-subs-symmetry-mix',
            published: '2021-09-17T18:29:42Z',
            title: 'Conrad Subs - Symmetry Mix',
          },
          {
            title: '08 - Break & Kyo - The Edge Of Time  - 1min30',
            published: '2018-11-16T17:34:54Z',
            url: 'https://soundcloud.com/symmetry-recordings/08-break-kyo-the-edge-of-time',
          },
          {
            title: '04 Derrick & Tonika - Hutsul Voodoo - 1min30 Clip',
            url: 'https://soundcloud.com/symmetry-recordings/04-derrick-tonika-hutsul-1',
            published: '2018-03-02T13:30:10Z',
          },
          {
            published: '2016-09-14T00:09:42Z',
            title: 'SYMMLP005S B - Break - Who Got Da Funk - 1min30 CLIP',
            url: 'https://soundcloud.com/symmetry-recordings/symmlp005s-b-break-who-got-da-funk-1min30-clip',
          },
          {
            published: '2020-01-14T16:10:13Z',
            url: 'https://soundcloud.com/symmetry-recordings/symm030-a-break-got-a-feelin',
            title: 'SYMM030 A - Break - Got A Feelin - 1min30clip',
          },
          {
            title: 'SYMM042 - DSP Weeks Go By (1min30)',
            url: 'https://soundcloud.com/symmetry-recordings/symm042-dsp-weeks-go-by-1min30',
            published: '2022-03-11T07:44:16Z',
          },
          {
            title: 'SYMM039 - Zero T - Gimme The Loot (1min30)',
            published: '2021-10-01T15:22:31Z',
            url: 'https://soundcloud.com/symmetry-recordings/symm039-zero-t-gimme-the-loot',
          },
        ],
        recent: [
          {
            title: 'SYMM046 - Break Ft. MC Fats - Natural Way - 1min30',
            published: '2022-10-16T11:13:51Z',
            url: 'https://soundcloud.com/symmetry-recordings/break-ft-mc-fats-natural-way-1min30',
          },
        ],
      },
      name: 'Symmetry Recordings',
      widgets: [
        'https://soundcloud.com/symmetry-recordings/dlr-break-absolutely-true',
        'https://soundcloud.com/symmetry-recordings/symm040-break-release-me-1min30',
        'https://soundcloud.com/symmetry-recordings/symm039-zero-t-gimme-the-loot',
        'https://soundcloud.com/symmetry-recordings/jack-boston-symmetry-mix-july-2022',
      ],
      id: '5dIWuGEVpYBXZaBKFeps',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000582755472-tg8fkb-t500x500.jpg',
      artists: [],
      followers: 10273,
      link: 'https://soundcloud.com/sgn-ltd',
      notes: 'Shogun sister label',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2020-07-07T09:31:40Z',
      lastScraped: 1668963177478,
      tracks: {
        recent: [
          {
            title: 'Mistrust - Forbidden',
            published: '2020-07-07T09:31:40Z',
            url: 'https://soundcloud.com/sgn-ltd/mistrust-forbidden-1',
          },
          {
            title: 'Mistrust - Only Ever You',
            url: 'https://soundcloud.com/sgn-ltd/mistrust-only-ever-you-1',
            published: '2020-07-07T09:31:37Z',
          },
          {
            published: '2020-07-07T09:31:35Z',
            url: 'https://soundcloud.com/sgn-ltd/mistrust-trickster-ft-leo-wood-1',
            title: 'Mistrust - Trickster ft. Leo Wood',
          },
          {
            published: '2020-06-30T09:49:58Z',
            url: 'https://soundcloud.com/sgn-ltd/mistrust-dreamer-1',
            title: 'Mistrust - Dreamer',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/skankandbass/radio-022',
            published: '2019-08-20T09:13:00Z',
            title: 'Skankandbass On Reprezent - 022 - Sustance Guest Mix',
          },
          {
            title: 'Sustance  - Swank',
            published: '2019-06-20T11:25:47Z',
            url: 'https://soundcloud.com/drumandbassarena/sustance-swank',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/sustance-fold-back',
            title: 'Sustance - Fold Back',
            published: '2019-02-14T17:40:19Z',
          },
          {
            published: '2017-07-21T14:46:09Z',
            url: 'https://soundcloud.com/drumandbassarena/koherent-night-cycles',
            title: 'Koherent - Night Cycles',
          },
          {
            title: 'Macca & Loz Contreras - In The Mood',
            published: '2017-06-27T14:28:30Z',
            url: 'https://soundcloud.com/drumandbassarena/macca-loz-contreras-in-the-mood',
          },
          {
            title: 'Submorphics - Arcata',
            published: '2017-02-15T16:37:02Z',
            url: 'https://soundcloud.com/drumandbassarena/submorphics-arcata',
          },
          {
            title: 'FRESH KICKS: Submorphics',
            published: '2017-02-08T17:04:09Z',
            url: 'https://soundcloud.com/djmag/fresh-kicks-submorphics',
          },
          {
            url: 'https://soundcloud.com/ninjaninja/premiere-submorphics-lost-in-the-lightssgnltd',
            published: '2017-02-07T21:19:18Z',
            title: 'PREMIERE: Submorphics - Lost In The Lights Feat. Christina Tamayo (SGN:LTD)',
          },
          {
            url: 'https://soundcloud.com/mitekiss/sets/final-hours-ep',
            title: 'Final Hours EP',
            published: '2016-11-08T20:14:12Z',
          },
          {
            published: '2016-11-07T19:15:44Z',
            title: 'Mitekiss - No War Inna Dance Ft. Mr Porter',
            url: 'https://soundcloud.com/mitekiss/mitekiss-no-war-inna-dance-ft-mr-porter',
          },
        ],
        popular: [
          {
            published: '2018-02-09T15:00:40Z',
            title: 'Monrroe - In My Head ft Emily Makis',
            url: 'https://soundcloud.com/sgn-ltd/monrroe-in-my-head-ft-emily-makis',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/macca-loz-contreras-anything-for-you',
            title: 'Macca & Loz Contreras - Anything For You',
            published: '2017-06-20T09:17:07Z',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/liz-e-need-you',
            title: 'Liz-E - Need You',
            published: '2014-11-20T17:31:31Z',
          },
          {
            title: 'Macca & Loz Contreras - In The Mood',
            url: 'https://soundcloud.com/sgn-ltd/macca-loz-contreras-in-the-mood',
            published: '2017-06-27T14:13:21Z',
          },
          {
            title: 'Liz-E - On My Mind',
            published: '2014-11-27T16:10:30Z',
            url: 'https://soundcloud.com/sgn-ltd/liz-e-on-my-mind',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/sustance-recognise-1',
            published: '2019-02-13T14:10:30Z',
            title: 'Sustance - Recognise',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/sgn-sessions-monrroe',
            published: '2018-02-21T13:43:17Z',
            title: 'SGN Sessions: Monrroe',
          },
          {
            published: '2017-07-24T09:04:15Z',
            title: 'Koherent - Night Cycles',
            url: 'https://soundcloud.com/sgn-ltd/koherent-night-cycles',
          },
          {
            published: '2017-07-25T11:43:29Z',
            title: 'Koherent - Minimal Clap',
            url: 'https://soundcloud.com/sgn-ltd/koherent-minimal-clap',
          },
          {
            published: '2019-08-21T10:56:24Z',
            url: 'https://soundcloud.com/sgn-ltd/alix-perez-icicle-switch-this-is-how',
            title: 'Alix Perez, Icicle & Switch - This Is How',
          },
          {
            title: 'SGN Sessions: Malaky',
            published: '2019-12-12T18:13:11Z',
            url: 'https://soundcloud.com/sgn-ltd/sgn-sessions-malaky',
          },
          {
            published: '2018-03-02T10:59:30Z',
            url: 'https://soundcloud.com/sgn-ltd/monrroe-easier-this-way',
            title: 'Monrroe - Easier This Way',
          },
          {
            title: 'Sustance - Flatline',
            url: 'https://soundcloud.com/sgn-ltd/sustance-flatline-1',
            published: '2019-06-05T15:55:24Z',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/submorphics-rosewood',
            title: 'Submorphics - Rosewood (OUT NOW)',
            published: '2014-08-15T16:06:29Z',
          },
          {
            title: 'Satl - Rescue Me',
            url: 'https://soundcloud.com/sgn-ltd/satl-rescue-me',
            published: '2016-10-28T14:42:55Z',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/submorphics-long-been-gone',
            title: 'Submorphics - Long Been Gone (OUT NOW)',
            published: '2014-08-07T14:58:27Z',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/zerozero-dangerous',
            title: 'ZeroZero - Dangerous',
            published: '2018-02-16T17:23:27Z',
          },
          {
            title: 'Mistrust - Dreamer',
            published: '2020-06-30T09:49:58Z',
            url: 'https://soundcloud.com/sgn-ltd/mistrust-dreamer-1',
          },
          {
            title: 'Technimatic - The Evening Loop',
            url: 'https://soundcloud.com/sgn-ltd/technimatic-evening-loop-clip',
            published: '2013-06-03T19:38:06Z',
          },
          {
            title: 'Foreign Concept - Possessive',
            published: '2019-08-21T13:30:39Z',
            url: 'https://soundcloud.com/sgn-ltd/foreign-concept-possessive',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/submorphics-all-or-nothing-ft-trac',
            published: '2015-08-11T12:27:54Z',
            title: 'Submorphics - All Or Nothing ft. T.R.A.C',
          },
          {
            title: 'SGN Sessions: Sustance',
            published: '2019-02-15T16:33:39Z',
            url: 'https://soundcloud.com/sgn-ltd/sgn-sessions-sustance',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/aperio-aurora-ft-koherent-1',
            title: 'Aperio - Aurora (ft. Koherent)',
            published: '2019-07-30T14:06:45Z',
          },
          {
            published: '2019-03-27T10:55:48Z',
            title: 'Gerra & Stone - Arashi',
            url: 'https://soundcloud.com/sgn-ltd/gerra-stone-arashi',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/mistrust-trickster-ft-leo-wood-1',
            title: 'Mistrust - Trickster ft. Leo Wood',
            published: '2020-07-07T09:31:35Z',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/aperio-days-nights-ft-maddy-2',
            published: '2019-07-23T09:42:31Z',
            title: 'Aperio - Days & Nights ft. Maddy',
          },
          {
            published: '2019-10-14T15:01:42Z',
            url: 'https://soundcloud.com/sgn-ltd/gerra-stone-breach-1',
            title: 'Gerra & Stone - Breach',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/malaky-sceptical-ft-anastasia-2',
            published: '2019-12-10T13:47:40Z',
            title: 'Malaky - Sceptical ft. Anastasia',
          },
          {
            published: '2019-10-14T15:01:34Z',
            url: 'https://soundcloud.com/sgn-ltd/gerra-stone-cut-loose-1',
            title: 'Gerra & Stone - Cut Loose',
          },
          {
            title: 'Technimatic - Intersection',
            url: 'https://soundcloud.com/sgn-ltd/technimatic-intersection-clip',
            published: '2013-06-03T19:39:29Z',
          },
        ],
      },
      name: 'SGN:LTD',
      id: '5oc53hWevB8JogEWnftr',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-P5dYAZ8niAxhqEVe-8Msc8g-t500x500.jpg',
      artists: [],
      followers: 40742,
      link: 'https://soundcloud.com/medschoolmusic',
      notes: 'Looks inactive ',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2019-11-12T10:09:01Z',
      lastScraped: 1668963179288,
      tracks: {
        reposts: [
          {
            title: 'The Lakeway Minirig Mixtape : In Honour of Med School',
            published: '2019-11-08T15:51:41Z',
            url: 'https://soundcloud.com/minirigs/the-lakeway-minirig-mixtape-in-honour-of-med-school',
          },
          {
            published: '2019-05-21T02:35:20Z',
            title: 'Untitled_Party Dj-Set @ Aaja London [24.09.18]',
            url: 'https://soundcloud.com/bop/up-set',
          },
          {
            url: 'https://soundcloud.com/cardinalsounduk/the-cardinal-sound-show-ft-lakeway-med-school-sabotage-audio',
            published: '2019-04-03T15:01:59Z',
            title: 'The Cardinal Sound Show ft. Lakeway',
          },
          {
            published: '2018-09-25T04:59:25Z',
            url: 'https://soundcloud.com/unchainedasia/severity-fakeworld-ep-sampler',
            title: 'Severity - Fakeworld EP Sampler',
          },
          {
            title: 'Bristol Mix Sessions - Episode 17',
            published: '2018-06-21T14:34:24Z',
            url: 'https://soundcloud.com/keenodnb/bristol-mix-sessions-episode-17',
          },
          {
            published: '2018-03-15T22:21:15Z',
            url: 'https://soundcloud.com/soelaela/i-wish-you-would-come-snippet',
            title: 'I Wish You Would Come (Snippet)',
          },
          {
            url: 'https://soundcloud.com/rinsefm/hospitalrecords250418',
            title: 'Hospital Records : Med School Music - New Blood Takeover - 25th April 2018',
            published: '2018-04-26T10:26:09Z',
          },
          {
            title: 'Track of the Day: Whiney “Overflow”',
            url: 'https://soundcloud.com/insomniacevents/track-of-the-day-whiney-overflow',
            published: '2018-03-14T21:23:11Z',
          },
          {
            url: 'https://soundcloud.com/rinsefm/hospitalrecords271217',
            title: 'Hospital Records - 27th December 2017',
            published: '2017-12-30T20:35:35Z',
          },
          {
            url: 'https://soundcloud.com/rinsefm/hospitalrecordsmulletandroyalston270917',
            title: 'Hospital Records with Mullett and Royalston - 27th September',
            published: '2017-09-28T10:02:04Z',
          },
        ],
        recent: [
          {
            published: '2019-11-12T10:09:01Z',
            title: 'Lakeway - No Regrets',
            url: 'https://soundcloud.com/medschoolmusic/lakeway-no-regrets-1',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/royalston-hassleblad',
            title: 'Royalston - Hasselblad',
            published: '2019-11-04T11:04:44Z',
          },
          {
            title: 'Lakeway - Tearful Tripper',
            published: '2019-11-01T12:33:18Z',
            url: 'https://soundcloud.com/medschoolmusic/lakeway-tearful-tripper-1',
          },
          {
            published: '2019-10-25T15:03:16Z',
            url: 'https://soundcloud.com/medschoolmusic/lakeway-cant-beg-feat-rubi-elle',
            title: "Lakeway - Can't Beg (feat. Rubi Elle)",
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/medschoolmusic/etherwood-full-album-preview-96kbps',
            title: 'Etherwood "Etherwood" - FULL ALBUM PREVIEW (96kbps)',
            published: '2013-10-15T13:21:31Z',
          },
          {
            published: '2013-10-07T15:05:22Z',
            url: 'https://soundcloud.com/medschoolmusic/begin-by-letting-go',
            title: 'Etherwood - Begin By Letting Go',
          },
          {
            title: 'Etherwood - Sunlight Splinters [clip]',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-sunlight-splinters-clip',
            published: '2015-10-05T09:16:04Z',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/whiney-mission-ft-inja',
            published: '2018-10-23T15:27:30Z',
            title: 'Whiney - Mission (ft. Inja)',
          },
          {
            published: '2014-12-11T11:01:21Z',
            title: 'The Erised - Pray',
            url: 'https://soundcloud.com/medschoolmusic/01-the-erised-pray',
          },
          {
            title: 'Rawtekk - Merry Anna (Drum & Bass Version)',
            published: '2013-06-20T12:04:48Z',
            url: 'https://soundcloud.com/medschoolmusic/rawtekk-merry-anna-drum-bass',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/whiney-doin-it-for-time-feat-kwam',
            title: 'Whiney - Doin’ It For Time (feat. Kwam)',
            published: '2018-12-04T10:45:27Z',
          },
          {
            title: 'Etherwood - The Rain Will Fall (feat. LSB) [clip]',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-the-rain-will-fall-feat-lsb-preview',
            published: '2015-08-14T12:08:54Z',
          },
          {
            published: '2017-03-24T14:45:38Z',
            title: 'Keeno - Enigma [clip]',
            url: 'https://soundcloud.com/medschoolmusic/keeno-enigma-clip',
          },
          {
            title: 'Etherwood - Unfolding',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-unfolding',
            published: '2013-03-19T13:57:22Z',
          },
          {
            title: 'Keeno - Nocturne',
            published: '2013-11-18T13:24:03Z',
            url: 'https://soundcloud.com/medschoolmusic/keeno-nocturne',
          },
          {
            title: 'Anile - Stay With Me [clip]',
            published: '2015-07-15T15:54:22Z',
            url: 'https://soundcloud.com/medschoolmusic/anile-stay-with-me-clip',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/etherwood-unfolding-feat-laurelle',
            published: '2013-10-07T15:06:06Z',
            title: 'Etherwood - Unfolding (feat. Laurelle Robichaud)',
          },
          {
            published: '2013-10-07T15:06:07Z',
            title: 'Etherwood - Weightless',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-weightless',
          },
          {
            title: 'Anile - Not The Way To Run (feat. Taelimb & Tiffani Juno) [clip]',
            url: 'https://soundcloud.com/medschoolmusic/anile-not-the-way-to-run-feat-taelimb-tiffani-juno-clip',
            published: '2015-08-10T10:39:12Z',
          },
          {
            published: '2016-03-03T15:46:11Z',
            title:
              "Etherwood 'We're Nothing Without Love' (feat. S.P.Y) (Ivy Lab remix) ['Friction Fire' exclusive]",
            url: 'https://soundcloud.com/medschoolmusic/etherwood-were-nothing-without-love-feat-spy-ivy-lab-remix-friction-fire-exclusive',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/keeno-one-more-moment-feat',
            published: '2015-03-23T11:41:26Z',
            title: "Keeno 'One More Moment (feat. Cepasa) [CLIP]",
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/etherwood-lulerain',
            title: 'Etherwood - Lulerain',
            published: '2019-06-21T13:51:50Z',
          },
          {
            title:
              'Etherwood - Falling Out Of Consciousness (feat. Georgia Yates and Bev Lee Harling)',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-falling-out-of-consciousness',
            published: '2013-10-07T15:06:02Z',
          },
          {
            published: '2015-09-07T15:18:24Z',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-were-nothing-without-love-feat-spyclip',
            title: "Etherwood - We're Nothing Without Love (feat SPY)[clip]",
          },
          {
            title: 'Changing Faces x In:Most - Composure (feat. Dale May)',
            url: 'https://soundcloud.com/medschoolmusic/changing-faces-x-in-most-compsure-ftdale-may',
            published: '2018-05-10T13:02:43Z',
          },
          {
            published: '2013-10-07T15:05:53Z',
            title: 'Etherwood - The Time is Here At Last (feat. Hybrid Minds)',
            url: 'https://soundcloud.com/medschoolmusic/etherwood-the-time-is-here-at-last',
          },
          {
            title: 'Etherwood - Hold Your Breath',
            url: 'https://soundcloud.com/medschoolmusic/hold-your-breath',
            published: '2013-10-07T15:06:05Z',
          },
          {
            published: '2016-03-04T12:46:32Z',
            title: "Anile & Blu Mar Ten  'Lyssakses' [clip]",
            url: 'https://soundcloud.com/medschoolmusic/anile-blu-mar-ten-lyssakses-clip',
          },
          {
            title: 'Royalston - Jungle Gone Down (Kimyan Law Remix) [Clip]',
            published: '2016-04-04T16:36:40Z',
            url: 'https://soundcloud.com/medschoolmusic/royalston-jungle-gone-down-kimyan-law-remix-clip',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/rawtekk-snowflakes-rawtekk',
            published: '2014-01-28T16:17:50Z',
            title: 'Rawtekk - Snowflakes (Rawtekk Neuropop VIP)',
          },
          {
            published: '2015-07-16T12:19:16Z',
            title: 'Keeno live @ Roxy, Prague (CZ) - 15.05.2015',
            url: 'https://soundcloud.com/medschoolmusic/keeno-live-roxy-prague-cz-15052015',
          },
          {
            published: '2015-12-01T11:38:57Z',
            title: 'The Erised - Take Me (Clip)',
            url: 'https://soundcloud.com/medschoolmusic/the-erised-take-me-clip',
          },
          {
            url: 'https://soundcloud.com/medschoolmusic/rawtekk-restless-joe-ford-remix',
            title: 'Rawtekk - Restless (Joe Ford Remix)',
            published: '2018-04-26T12:29:37Z',
          },
          {
            published: '2017-11-27T14:41:09Z',
            title: "Etherwood - Bear's Breeches (feat. Anile)",
            url: 'https://soundcloud.com/medschoolmusic/etherwood-bears-breeches-feat-anile-1',
          },
        ],
      },
      name: 'Med School Music',
      id: '6HQdZlpc98du1z2zzOog',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-hjjKRGIS0kTO9OEq-98rSsw-t500x500.jpg',
      artists: ['Cesco', 'Disrupta', 'Sam Binga'],
      followers: 1470,
      link: 'https://soundcloud.com/bowlcutgarms',
      notes: '',
      styles: ['Jump Up', 'Minimal'],
      submission: 'demos@bowlcutbeats.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-07-28T19:55:44Z',
      lastScraped: 1669230851808,
      tracks: {
        recent: [
          {
            published: '2022-07-28T19:55:44Z',
            title: 'Jammez - Maelstrom',
            url: 'https://soundcloud.com/bowlcutgarms/jammez-maelstrom',
          },
          {
            published: '2022-07-28T19:55:42Z',
            title: 'Jammez - Magma',
            url: 'https://soundcloud.com/bowlcutgarms/jammez-magma',
          },
          {
            title: 'Teej & Fokus MC - Construct studio mix',
            published: '2022-07-04T16:30:32Z',
            url: 'https://soundcloud.com/bowlcutgarms/teej-fokus-mc-construct-studio-mix',
          },
          {
            published: '2022-06-28T13:39:52Z',
            url: 'https://soundcloud.com/bowlcutgarms/teej-trex-telepathy',
            title: 'Teej & Trex - Telepathy',
          },
          {
            title: 'Teej (feat. Fokus) - Construct',
            published: '2022-06-28T13:39:51Z',
            url: 'https://soundcloud.com/bowlcutgarms/teej-feat-fokus-construct',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/dunk-feat-dread-mc-killa-dub-missledz-remix',
            published: '2022-05-24T19:46:34Z',
            title: 'Dunk Feat. Dread MC - Killa Dub (missledz Remix)',
          },
          {
            published: '2022-05-24T19:46:23Z',
            title: 'Dunk - Click Clack',
            url: 'https://soundcloud.com/bowlcutgarms/dunk-click-clack',
          },
          {
            title: 'Dunk Feat. Dread MC - Killa Dub',
            published: '2022-05-24T19:46:08Z',
            url: 'https://soundcloud.com/bowlcutgarms/dunk-feat-dread-mc-killa-dub',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/psychlo-never-say-never-teej-remix',
            published: '2022-04-25T10:02:45Z',
            title: 'Psychlo - Never Say Never (Teej Remix)',
          },
          {
            published: '2022-04-25T10:02:25Z',
            title: 'Psychlo - Never Say Never',
            url: 'https://soundcloud.com/bowlcutgarms/psychlo-never-say-never',
          },
        ],
        popular: [
          {
            published: '2022-01-27T12:14:17Z',
            url: 'https://soundcloud.com/bowlcutgarms/objectiv-the-swan-cesco-remix',
            title: 'Objectiv - The Swan (Cesco Remix)',
          },
          {
            title: 'GLM x Teej - Always',
            published: '2022-03-31T14:52:23Z',
            url: 'https://soundcloud.com/bowlcutgarms/glm-x-teej-always',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/teej-fokus-mc-construct-studio-mix',
            title: 'Teej & Fokus MC - Construct studio mix',
            published: '2022-07-04T16:30:32Z',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/dunk-pirate-junkies-t95-remix',
            title: 'Dunk - Pirate Junkies (T95 Remix)',
            published: '2021-05-24T17:09:27Z',
          },
          {
            title: 'Bowlcut Mix 007 - Fox X Sam Binga X Foreign Concept',
            url: 'https://soundcloud.com/bowlcutgarms/bowlcut-007-fox-x-sam-binga-x-foreign-concept',
            published: '2018-10-17T23:08:50Z',
          },
          {
            published: '2020-04-04T11:09:39Z',
            url: 'https://soundcloud.com/bowlcutgarms/bowlcut-mix-014-charli-brix',
            title: 'Bowlcut Mix 014 - Charli Brix',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/jammez-maelstrom',
            title: 'Jammez - Maelstrom',
            published: '2022-07-28T19:55:44Z',
          },
          {
            published: '2022-04-11T20:16:58Z',
            url: 'https://soundcloud.com/bowlcutgarms/bashington-strongbows-in-the-sun-bbq-mix',
            title: 'BOWLCUT MIX 018 - BASHINGTON (Strongbows in the sun mix)',
          },
          {
            published: '2022-05-24T19:46:23Z',
            title: 'Dunk - Click Clack',
            url: 'https://soundcloud.com/bowlcutgarms/dunk-click-clack',
          },
          {
            published: '2022-05-24T19:46:34Z',
            url: 'https://soundcloud.com/bowlcutgarms/dunk-feat-dread-mc-killa-dub-missledz-remix',
            title: 'Dunk Feat. Dread MC - Killa Dub (missledz Remix)',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/mlh-hard-work',
            published: '2021-09-30T19:02:22Z',
            title: 'MLH - Hard Work',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/psychlo-never-say-never',
            published: '2022-04-25T10:02:25Z',
            title: 'Psychlo - Never Say Never',
          },
          {
            published: '2022-06-28T13:39:51Z',
            url: 'https://soundcloud.com/bowlcutgarms/teej-feat-fokus-construct',
            title: 'Teej (feat. Fokus) - Construct',
          },
          {
            title: 'GLM - Couple Man Tried Feat. T-Man (Disrupta Remix)',
            url: 'https://soundcloud.com/bowlcutgarms/glm-couple-man-tried-feat-t-man-disrupta-remix',
            published: '2022-03-31T14:52:27Z',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/teej-trex-telepathy',
            title: 'Teej & Trex - Telepathy',
            published: '2022-06-28T13:39:52Z',
          },
          {
            published: '2019-04-10T14:35:27Z',
            url: 'https://soundcloud.com/bowlcutgarms/bowlcut-mix-010-champion',
            title: 'Bowlcut Mix 010 - Champion',
          },
          {
            published: '2022-07-28T19:55:42Z',
            title: 'Jammez - Magma',
            url: 'https://soundcloud.com/bowlcutgarms/jammez-magma',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/dunk-feat-dread-mc-killa-dub',
            title: 'Dunk Feat. Dread MC - Killa Dub',
            published: '2022-05-24T19:46:08Z',
          },
          {
            published: '2022-03-01T17:03:08Z',
            url: 'https://soundcloud.com/bowlcutgarms/invert-era-how-about-it-trex-remix',
            title: 'Invert Era - How About It (Trex Remix)',
          },
          {
            title: 'GLM - Couple Man Tried (Feat. T-Man)',
            url: 'https://soundcloud.com/bowlcutgarms/glm-couple-man-tried-feat-t-man-192',
            published: '2022-03-31T14:51:55Z',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/heft-darkestra',
            published: '2022-01-27T12:32:29Z',
            title: 'HEFT - Darkestra',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/mlh-midnight-minimal',
            published: '2021-09-30T18:46:15Z',
            title: 'MLH - Midnight Minimal',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/heft-magnificat',
            title: 'HEFT - Magnificat',
            published: '2022-01-27T12:32:35Z',
          },
          {
            title: 'HEFT - If U Know',
            url: 'https://soundcloud.com/bowlcutgarms/heft-if-u-know',
            published: '2022-01-27T12:32:41Z',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/bowlcut-mix-017-sovryn',
            published: '2022-01-24T16:14:29Z',
            title: 'Bowlcut Mix 017 - SOVRYN',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/objectiv-peck-yard-1',
            published: '2020-07-20T16:06:31Z',
            title: 'Objectiv - Peck Yard',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/psychlo-never-say-never-teej-remix',
            published: '2022-04-25T10:02:45Z',
            title: 'Psychlo - Never Say Never (Teej Remix)',
          },
          {
            published: '2022-03-31T14:52:07Z',
            url: 'https://soundcloud.com/bowlcutgarms/glm-please-discuss',
            title: 'GLM - Please Discuss',
          },
          {
            url: 'https://soundcloud.com/bowlcutgarms/cadense-sinematic-forgive-waeys-remix',
            published: '2021-04-29T16:07:37Z',
            title: 'Cadense & Sinematic - Forgive (Waeys Remix)',
          },
          {
            published: '2022-01-27T12:32:46Z',
            url: 'https://soundcloud.com/bowlcutgarms/heft-motion',
            title: 'HEFT - Motion',
          },
        ],
        reposts: [
          {
            title: "Dunk Feat Dread MC 'Killa Dub' [Bowlcut Beats]",
            url: 'https://soundcloud.com/datatransmissiondnb/dunk-feat-dread-mc-killa-dub-bowlcut-beats',
            published: '2022-05-23T10:37:55Z',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/sets/renegade-riddims-2022',
            title: 'RENEGADE RIDDIMS 2022',
            published: '2022-01-07T10:51:52Z',
          },
          {
            published: '2022-03-04T13:51:13Z',
            url: 'https://soundcloud.com/datatransmissiondnb/renegade-riddims-bashington',
            title: 'RENEGADE RIDDIMS: Bashington',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/invert-era-how-about-it-trex-remix',
            title: 'Invert Era - How About It (Trex Remix)',
            published: '2022-03-02T18:18:12Z',
          },
          {
            url: 'https://soundcloud.com/districtbassmusic/invert-era-how-about-it',
            title: 'Invert Era - How About It',
            published: '2022-02-23T02:38:17Z',
          },
          {
            title: 'Bowlcut Beats w/ MLH - Subtle - 22/09/2021',
            url: 'https://soundcloud.com/subtleradio/bowlcut-beats-w-mlh-subtle-22092021',
            published: '2021-09-23T18:52:13Z',
          },
          {
            published: '2021-09-07T12:25:02Z',
            title: 'Objectiv - Crocs With Socks (Molecular Remix)',
            url: 'https://soundcloud.com/skankandbass/crocs-with-socks-molecular-remix',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/tall-order-cant-breathe-bbc-r1-premiere',
            published: '2021-08-25T13:24:24Z',
            title: "Tall Order  - Can't Breathe [BBC R1 Premiere]",
          },
          {
            url: 'https://soundcloud.com/tallorderuk/prospa-want-need-love-tall-order-bootleg-1',
            published: '2021-06-10T12:32:10Z',
            title: 'Prospa - WANT NEED LOVE (Tall Order Bootleg) [FREE DOWNLOAD]',
          },
          {
            published: '2021-04-29T20:04:15Z',
            url: 'https://soundcloud.com/subtleradio/bowlcut-beats-w-tall-order-subtle-28042021',
            title: 'Bowlcut Beats w/ Tall Order - Subtle - 28/04/2021',
          },
        ],
      },
      name: 'Bowlcut Beats',
      id: '7vKslghFZ9FN5glDKqVG',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000484345767-wmg005-t500x500.jpg',
      artists: ['Bou', 'Mozey', 'Serum'],
      followers: 74433,
      link: 'https://soundcloud.com/skankandbass',
      notes: 'Not a label I think... Just promotion',
      styles: ['Jump Up'],
      submission: 'demos@skankandbass.com',
      songsSubmitted: ['Night & Day', 'Stamina', "You Don't Know"],
      songsSkipped: ['Now Hear This', 'Sunday Secrets'],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-18T08:32:28Z',
      lastScraped: 1668963180815,
      tracks: {
        recent: [
          {
            published: '2022-11-18T08:32:28Z',
            url: 'https://soundcloud.com/skankandbass/01-maysev-maske-24-bit-master',
            title: '01 Maysev - Maske (24-bit Master)',
          },
          {
            url: 'https://soundcloud.com/skankandbass/trex-kawstic-buffer',
            title: 'Trex & Kawstic - Buffer',
            published: '2022-11-17T08:18:00Z',
          },
          {
            published: '2022-11-15T17:55:27Z',
            url: 'https://soundcloud.com/skankandbass/alibi-melinki-macca-bad-trip',
            title: 'Alibi, Melinki & Macca - Bad Trip',
          },
          {
            url: 'https://soundcloud.com/skankandbass/jam-thieves-dexter-enei-remx',
            published: '2022-11-15T08:38:57Z',
            title: 'Jam Thieves - Dexter (Enei Remix)',
          },
          {
            published: '2022-11-14T08:42:22Z',
            url: 'https://soundcloud.com/skankandbass/lameduza-bredren-acqua',
            title: 'LaMeduza & Bredren - Acqua',
          },
          {
            url: 'https://soundcloud.com/skankandbass/need-for-mirrors-happy-mondays',
            published: '2022-11-11T08:53:17Z',
            title: 'Need For Mirrors - Happy Mondays',
          },
          {
            published: '2022-11-11T08:36:23Z',
            url: 'https://soundcloud.com/skankandbass/scar-anxiety-ft-kmrs',
            title: 'SCAR - Anxiety (ft. KMRS)',
          },
          {
            published: '2022-11-09T08:34:18Z',
            title: 'Speaker Louis - Down With Me',
            url: 'https://soundcloud.com/skankandbass/speaker-louis-down-with-me',
          },
          {
            title: 'Invadhertz & Sydney Bryce - Beautiful Stranger',
            url: 'https://soundcloud.com/skankandbass/invadhertz-sydney-bryce-beautiful-stranger',
            published: '2022-11-08T09:19:25Z',
          },
        ],
        popular: [
          {
            title: 'Serum & Inja - Lumberjackin',
            url: 'https://soundcloud.com/skankandbass/serum-inja-lumberjackin',
            published: '2019-02-18T18:16:34Z',
          },
          {
            published: '2020-01-28T17:18:57Z',
            url: 'https://soundcloud.com/skankandbass/mozey-ladykillaz',
            title: 'Mozey - Ladykillaz',
          },
          {
            published: '2022-08-01T12:30:24Z',
            url: 'https://soundcloud.com/skankandbass/veteran-serum-remix',
            title: 'Bou & Trigga - Veteran (Serum Remix)',
          },
          {
            url: 'https://soundcloud.com/skankandbass/bou-mark-xtc-breathe',
            title: 'Bou & Mark XTC - Breathe',
            published: '2019-12-11T13:53:20Z',
          },
          {
            title: 'Upgrade & Trigga - Trigga Finga',
            published: '2019-09-16T13:12:06Z',
            url: 'https://soundcloud.com/skankandbass/upgrade-trigga-trigga-finga',
          },
          {
            title: 'Bou & Trigga - Veteran',
            published: '2019-07-22T14:51:49Z',
            url: 'https://soundcloud.com/skankandbass/bou-trigga-veteran',
          },
          {
            title: 'Mozey - Disco',
            url: 'https://soundcloud.com/skankandbass/mozey-disco',
            published: '2022-09-16T13:54:49Z',
          },
          {
            title: 'Bou & Trigga - Veteran VIP',
            url: 'https://soundcloud.com/skankandbass/bou-veteran-vip',
            published: '2020-09-11T14:44:29Z',
          },
          {
            url: 'https://soundcloud.com/skankandbass/mc-bassman-heavy-dark-bou-simula',
            title: "MC Bassman - Heavy & Dark (Bou & Simula's Mix)",
            published: '2018-11-06T23:31:26Z',
          },
          {
            published: '2022-09-15T21:03:26Z',
            url: 'https://soundcloud.com/skankandbass/koherent-bleep-test',
            title: 'Koherent - Bleep Test',
          },
          {
            title: 'Turno & Ben Snow - Judge Rinder',
            url: 'https://soundcloud.com/skankandbass/turno-ben-snow-judge-rinder',
            published: '2022-07-11T16:47:03Z',
          },
          {
            published: '2017-05-29T11:37:07Z',
            url: 'https://soundcloud.com/skankandbass/document-one-uh-huh',
            title: 'Document One - UH HUH',
          },
          {
            title: 'Simula - Cold Shoulder',
            published: '2021-12-02T13:14:35Z',
            url: 'https://soundcloud.com/skankandbass/simula-cold-shoulder',
          },
          {
            published: '2019-10-09T14:19:36Z',
            url: 'https://soundcloud.com/skankandbass/critical-impact-pretty-girl',
            title: 'Critical Impact - Pretty Girl feat. Youngman & Furniss',
          },
          {
            url: 'https://soundcloud.com/skankandbass/critical-impact-ft-furniss-youngman-pretty-girl-critical-impact-sub-zero-remix',
            title:
              'Critical Impact ft. Furniss & Youngman - Pretty Girl (Critical Impact & Sub Zero Remix)',
            published: '2022-09-26T17:09:05Z',
          },
          {
            url: 'https://soundcloud.com/skankandbass/jappa-lupo-darkest-night',
            published: '2022-05-11T11:33:16Z',
            title: 'Jappa & Lupo - Darkest Night',
          },
          {
            title: 'Teddy Killerz - Night Train',
            published: '2022-01-24T06:45:29Z',
            url: 'https://soundcloud.com/skankandbass/teddy-killerz-night-train',
          },
          {
            published: '2022-04-11T14:42:29Z',
            url: 'https://soundcloud.com/skankandbass/mozey-break-it-down',
            title: 'Mozey - Break It Down',
          },
          {
            url: 'https://soundcloud.com/skankandbass/bou-talk-to-me',
            title: 'Bou - Talk To Me',
            published: '2021-07-09T15:01:38Z',
          },
          {
            title: "MC Bassman - Power To Kill (Serum & Voltage's Mix)",
            url: 'https://soundcloud.com/skankandbass/power-to-kill-serum-voltage-mix',
            published: '2020-02-19T15:56:57Z',
          },
          {
            published: '2022-02-24T15:57:48Z',
            url: 'https://soundcloud.com/skankandbass/unglued-secret-foghorn',
            title: 'Unglued - Secret Foghorn',
          },
          {
            url: 'https://soundcloud.com/skankandbass/brainwork-rift-cold-comfort',
            title: 'Brainwork & Rift - Cold Comfort',
            published: '2022-09-07T08:53:53Z',
          },
          {
            url: 'https://soundcloud.com/skankandbass/higher-love-particle-remix',
            published: '2019-08-22T13:13:42Z',
            title: 'Hybrid Minds feat. Charlotte Haining - Higher Love (Particle Remix)',
          },
          {
            published: '2022-10-18T11:35:26Z',
            url: 'https://soundcloud.com/skankandbass/l-side-think-tonk-6-foot-under',
            title: 'L - Side & Think Tonk - 6 Foot Under',
          },
          {
            url: 'https://soundcloud.com/skankandbass/jappa-disrupta-cheek-of-it-feat-pastry-maker-audioporn-records',
            published: '2022-09-13T17:51:56Z',
            title: 'Jappa & Disrupta - Cheek Of It (ft. Pastry Maker)',
          },
          {
            title: 'Think Tonk - What A Ting (L-Side Remix)',
            published: '2020-04-15T16:33:41Z',
            url: 'https://soundcloud.com/skankandbass/what-a-ting-l-side-remix',
          },
          {
            title: 'DJ Limited - Sun',
            published: '2018-07-30T14:54:20Z',
            url: 'https://soundcloud.com/skankandbass/dj-limited-sun',
          },
          {
            title: 'Exile & DJ Hybrid - Be Mine',
            published: '2022-10-12T08:24:40Z',
            url: 'https://soundcloud.com/skankandbass/exile-dj-hybrid-be-mine',
          },
          {
            published: '2022-09-30T14:31:17Z',
            title: 'Alpha Rosa - Whatever You Do',
            url: 'https://soundcloud.com/skankandbass/alpha-rosa-whatever-you-do',
          },
          {
            published: '2022-11-01T08:10:42Z',
            url: 'https://soundcloud.com/skankandbass/molecular-acid-funk',
            title: 'Molecular - Acid Funk',
          },
        ],
        reposts: [
          {
            published: '2022-11-11T13:35:15Z',
            title: 'Portrait - The Purplest Cat',
            url: 'https://soundcloud.com/boey-audio/portrait-the-purplest-cat',
          },
          {
            title: 'Enei - Trojans',
            published: '2022-11-02T12:04:08Z',
            url: 'https://soundcloud.com/enei/enei-trojans',
          },
          {
            url: 'https://soundcloud.com/subfocus/ready-to-fly',
            published: '2022-09-30T03:46:00Z',
            title: 'Ready To Fly (Sub Focus & Dimension)',
          },
          {
            url: 'https://soundcloud.com/mirror-maze/tellmesomethin',
            published: '2022-06-17T15:37:32Z',
            title: "tellmesomethin' (feat. snuffy)",
          },
          {
            title: 'Pyrex Swing (FREE DOWNLOAD)',
            published: '2022-05-21T14:51:09Z',
            url: 'https://soundcloud.com/willersofficial/pyrex-swing',
          },
          {
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-shut-it-up-feat-magugu',
            title: 'Foreign Concept x Phase x Magugu - Shut It Up',
            published: '2022-09-13T14:08:44Z',
          },
          {
            url: 'https://soundcloud.com/dimension_uk/offender-dimension-grafix',
            title: 'Offender (Dimension & Grafix Remix) (Dimension & Grafix Remix)',
            published: '2022-08-08T19:29:16Z',
          },
          {
            title: 'Klinical - Destined',
            published: '2022-08-09T13:18:09Z',
            url: 'https://soundcloud.com/klinicaldnb/klinical-destined-1',
          },
          {
            url: 'https://soundcloud.com/1991_music/feels',
            published: '2022-06-07T22:21:32Z',
            title: 'Feels',
          },
          {
            published: '2022-07-02T12:19:32Z',
            url: 'https://soundcloud.com/bredrenbe/da-hool-meet-her-at-the-love-parade-bredren-bootleg',
            title: 'Da Hool - Meet Her At The Love Parade (Bredren bootleg) FREE DOWNLOAD',
          },
        ],
      },
      name: 'Skankandbass',
      widgets: [
        'https://soundcloud.com/skankandbass/mozey-ladykillaz',
        'https://soundcloud.com/skankandbass/veteran-serum-remix',
        'https://soundcloud.com/skankandbass/mc-bassman-heavy-dark-bou-simula',
      ],
      id: '9a8Af5eOAgObG2VLQzv3',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-UMAAEQ1Sf7oHug5s-U8Ai8g-t500x500.jpg',
      artists: ['Satl', 'BCee'],
      followers: 7700,
      link: 'https://soundcloud.com/soultraderrecords',
      notes: '',
      styles: ['Liquid', 'Minimal'],
      submission: 'marco@triplevision.nl',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-03T13:03:05Z',
      lastScraped: 1668963182252,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/soultraderrecords/satl-from-time',
            published: '2017-02-24T21:09:15Z',
            title: 'Satl - From Time',
          },
          {
            published: '2022-09-19T12:50:01Z',
            url: 'https://soundcloud.com/soultraderrecords/maykors-sobersoul-in-silence-1',
            title: 'Maykors & Sobersoul - In Silence',
          },
          {
            title: 'Maykors & Alyness - One Night',
            url: 'https://soundcloud.com/soultraderrecords/maykors-alyness-one-night-1',
            published: '2022-09-19T12:50:03Z',
          },
          {
            title: 'BCee ft. Pat Fulgoni - Think U Know',
            published: '2022-07-29T08:01:31Z',
            url: 'https://soundcloud.com/soultraderrecords/bcee-ft-pat-fulgoni-think-u',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/maykors-just-stay-1',
            title: 'Maykors - Just Stay',
            published: '2022-09-19T12:50:04Z',
          },
          {
            title: 'Maykors - 166,5',
            published: '2022-09-19T12:50:06Z',
            url: 'https://soundcloud.com/soultraderrecords/maykors-166-5-fm',
          },
          {
            published: '2022-07-11T14:59:32Z',
            title: 'Phil Tangent & Hannah Eve  - My Heart Knows Why',
            url: 'https://soundcloud.com/soultraderrecords/phil-tangent-hannah-eve-my-6',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/smote-stride',
            published: '2022-06-15T11:45:36Z',
            title: 'Smote - Stride',
          },
          {
            published: '2022-07-11T14:59:36Z',
            url: 'https://soundcloud.com/soultraderrecords/satl-elka-hanah-eve-endless-3',
            title: 'Satl, Elka & Hanah Eve - Endless Daze',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/bcee-think-u-know-feat-pat-fulgoni-out-08042019',
            title: 'BCee - Think U Know Feat Pat Fulgoni (Out 08.04.2019)',
            published: '2019-03-29T15:59:30Z',
          },
          {
            published: '2022-09-19T13:06:58Z',
            title: 'Malaky & Satl - Her (Zero T Remix)',
            url: 'https://soundcloud.com/soultraderrecords/malaky-satl-her-zero-t-remix',
          },
          {
            published: '2022-07-11T14:59:35Z',
            url: 'https://soundcloud.com/soultraderrecords/phil-tangent-hannah-eve-my-7',
            title: 'Phil Tangent & Hannah Eve - My Heart Knows Why (Zero T Remix)',
          },
          {
            published: '2022-06-01T10:24:42Z',
            title: 'Data 3 - Molly (Gerra & Stone Remix)',
            url: 'https://soundcloud.com/soultraderrecords/data-3-molly-gerra-stone-remix',
          },
          {
            title: 'The Vanguard Project - What We Got',
            published: '2022-07-29T08:01:33Z',
            url: 'https://soundcloud.com/soultraderrecords/the-vanguard-project-what-we',
          },
          {
            published: '2022-09-19T12:55:31Z',
            url: 'https://soundcloud.com/soultraderrecords/vodkah-on-fire-1',
            title: 'Vodkah - On Fire',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/vodkah-turn-it-up-1',
            published: '2022-09-19T12:55:32Z',
            title: 'Vodkah - Turn It Up',
          },
          {
            published: '2022-06-15T11:45:33Z',
            url: 'https://soundcloud.com/soultraderrecords/smote-gabanna-always-the-same',
            title: 'Smote & Gabanna - Always The Same',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/surplus-old-skool-hardcorejungle-91-93-vinyl-mix',
            published: '2021-10-29T10:27:06Z',
            title: 'Surplus Old Skool Hardcore/Jungle 91-93 Vinyl Mix',
          },
          {
            published: '2022-07-11T14:53:56Z',
            title: 'Conman & Evasion - Free Will',
            url: 'https://soundcloud.com/soultraderrecords/conman-evasion-free-will',
          },
          {
            published: '2022-09-19T12:55:30Z',
            title: "Vodkah - I Don't Care",
            url: 'https://soundcloud.com/soultraderrecords/vodkah-i-dont-care-1',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/vodkah-no-turning-back-1',
            title: 'Vodkah - No Turning Back',
            published: '2022-09-19T12:55:29Z',
          },
          {
            published: '2022-09-19T13:07:03Z',
            url: 'https://soundcloud.com/soultraderrecords/drifta-here-with-me-total',
            title: 'Drifta - Here With Me (Total Science Remix)',
          },
          {
            published: '2022-07-11T14:53:56Z',
            url: 'https://soundcloud.com/soultraderrecords/conman-evasion-check-it',
            title: 'Conman & Evasion - Check It',
          },
          {
            published: '2022-09-19T13:07:01Z',
            title: 'Data 3 - Virtue',
            url: 'https://soundcloud.com/soultraderrecords/data-3-virtue',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/stimpy-believe-you',
            published: '2022-11-03T13:03:05Z',
            title: 'Stimpy - Believe You',
          },
          {
            title: 'Saxxon - High Tide (Gerra & Stone Remix)',
            published: '2022-06-01T10:24:41Z',
            url: 'https://soundcloud.com/soultraderrecords/saxxon-high-tide-gerra-stone',
          },
          {
            title: 'Bungle - Enclosure',
            url: 'https://soundcloud.com/soultraderrecords/bungle-enclosure-1',
            published: '2022-07-11T14:56:27Z',
          },
          {
            title: 'GLXY - Small Talk',
            published: '2022-09-19T13:06:57Z',
            url: 'https://soundcloud.com/soultraderrecords/glxy-small-talk',
          },
          {
            title: 'Ill Truth - Lightbreak',
            url: 'https://soundcloud.com/soultraderrecords/ill-truth-lightbreak',
            published: '2022-09-19T13:06:59Z',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/evasion-conman-stars',
            title: 'Evasion & Conman - Stars',
            published: '2022-07-11T14:54:00Z',
          },
        ],
        recent: [
          {
            title: 'Stimpy - Falls Down',
            url: 'https://soundcloud.com/soultraderrecords/stimpy-falls-down',
            published: '2022-11-03T13:03:05Z',
          },
          {
            url: 'https://soundcloud.com/soultraderrecords/stimpy-believe-you',
            title: 'Stimpy - Believe You',
            published: '2022-11-03T13:03:05Z',
          },
          {
            title: 'GLXY - Small Talk',
            url: 'https://soundcloud.com/soultraderrecords/glxy-small-talk',
            published: '2022-09-19T13:06:57Z',
          },
          {
            published: '2022-09-19T13:06:58Z',
            title: 'Malaky & Satl - Her (Zero T Remix)',
            url: 'https://soundcloud.com/soultraderrecords/malaky-satl-her-zero-t-remix',
          },
          {
            title: 'Ill Truth - Lightbreak',
            url: 'https://soundcloud.com/soultraderrecords/ill-truth-lightbreak',
            published: '2022-09-19T13:06:59Z',
          },
          {
            title: 'Data 3 - Virtue',
            url: 'https://soundcloud.com/soultraderrecords/data-3-virtue',
            published: '2022-09-19T13:07:01Z',
          },
          {
            published: '2022-09-19T13:07:02Z',
            url: 'https://soundcloud.com/soultraderrecords/hlz-broken-lights',
            title: 'HLZ - Broken Lights',
          },
          {
            published: '2022-09-19T13:07:03Z',
            title: 'Drifta - Here With Me (Total Science Remix)',
            url: 'https://soundcloud.com/soultraderrecords/drifta-here-with-me-total',
          },
        ],
        reposts: [
          {
            title: 'Phaction - What U Need (ft. Stormae)',
            published: '2021-10-14T11:01:04Z',
            url: 'https://soundcloud.com/phaction/phaction-what-u-need-ft-stormae',
          },
          {
            published: '2021-10-05T20:20:39Z',
            url: 'https://soundcloud.com/skankandbass/phaction-revelation-sequence',
            title: 'Phaction - Revelation Sequence',
          },
          {
            title: 'Guest Mix: Surplus',
            published: '2021-09-09T06:29:10Z',
            url: 'https://soundcloud.com/dnbdojo/guest-mix-surplus',
          },
          {
            published: '2020-10-06T09:05:06Z',
            url: 'https://soundcloud.com/silencegroove/stone-cold-1',
            title: 'Stone Cold',
          },
          {
            title: 'Skynet - Pressurized',
            published: '2020-09-21T14:32:54Z',
            url: 'https://soundcloud.com/skankandbass/skynet-pressurized',
          },
          {
            published: '2019-12-08T05:10:52Z',
            title: 'Skynet - Tribal Warfare (192Clip)',
            url: 'https://soundcloud.com/skynetaudio/skynet-tribal-warfare-192clip',
          },
          {
            published: '2019-12-08T05:09:30Z',
            url: 'https://soundcloud.com/skynetaudio/skynet-slave-192clip',
            title: 'Skynet - Slave (192Clip)',
          },
          {
            published: '2019-10-30T16:19:44Z',
            url: 'https://soundcloud.com/skankandbass/bungle-all-for-nothing',
            title: 'Bungle - All For Nothing',
          },
          {
            published: '2019-09-22T14:04:19Z',
            url: 'https://soundcloud.com/markdinimal/md-choked',
            title: 'MD - Choked',
          },
          {
            title: 'Surplus Guest Mix',
            published: '2019-09-10T12:34:32Z',
            url: 'https://soundcloud.com/liquiddnbftws/surplus-guest-mix',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/soultraderrecords/bcee-ft-pat-fulgoni-think-u?si=1913e00a6e2145f98bd5dd34618dfc02&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/soultraderrecords/satl-elka-hanah-eve-endless-3?si=4936713950ea4ad98837fb89213d7fc4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/soultraderrecords/malaky-satl-her-zero-t-remix?si=9b45ccb356db47ab910bbb37337e7431&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      name: 'Soul Trader',
      id: 'Bt1he6WFkigLq0s4CNRP',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000316981934-4551rw-t500x500.jpg',
      artists: ['T>I'],
      followers: 11524,
      link: 'https://soundcloud.com/grid-recordings',
      notes: 'Send files via WeTransfer ',
      styles: ['Jump Up'],
      submission: 'gridrecordingsuk@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-17T00:07:11Z',
      lastScraped: 1668963183594,
      tracks: {
        recent: [
          {
            published: '2022-11-10T16:00:12Z',
            title: 'GRIDUK195 - PA',
            url: 'https://soundcloud.com/grid-recordings/griduk195-pa',
          },
          {
            title: 'ZOMBIEUK063 - WITHIN THE WOODS VOL 5',
            url: 'https://soundcloud.com/grid-recordings/zombieuk063-within-the-woods-vol-5',
            published: '2022-11-04T10:16:44Z',
          },
          {
            published: '2022-10-25T13:47:38Z',
            url: 'https://soundcloud.com/grid-recordings/griduk194-whisper',
            title: 'GRIDUK194  - WHISPER',
          },
          {
            published: '2022-10-25T13:43:54Z',
            title: 'GRIDUK193 - KENJI',
            url: 'https://soundcloud.com/grid-recordings/griduk193-kenji',
          },
          {
            published: '2022-10-19T09:04:46Z',
            title: 'GRIDUK192 - DAMAGE REPORT REMIXES VOL 2',
            url: 'https://soundcloud.com/grid-recordings/griduk192-damage-report-remixes-vol-2',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-frazzledrip',
            published: '2022-10-11T15:51:48Z',
            title: 'TWISTED INDIVIDUAL - FRAZZLEDRIP',
          },
          {
            published: '2022-10-11T15:50:50Z',
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-free-helicopter-ride',
            title: 'TWISTED INDIVIDUAL - FREE HELICOPTER RIDE',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-lab-cultured',
            published: '2022-10-11T15:49:54Z',
            title: 'TWISTED INDIVIDUAL - LAB CULTURED',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-safe-space',
            published: '2022-10-11T15:48:43Z',
            title: 'TWISTED INDIVIDUAL - SAFE SPACE',
          },
          {
            published: '2022-10-11T15:47:34Z',
            title: 'TWISTED INDIVIDUAL - TIN FOIL TWAT',
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-tin-foil-twat',
          },
        ],
        reposts: [
          {
            published: '2022-11-17T00:07:11Z',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/gravit-e-we-are-something',
            title: 'GRAVIT-E - We Are Something',
          },
          {
            published: '2022-11-09T00:42:49Z',
            title: 'Pengo & Master Error & Stillz - Excellent [Premiere]',
            url: 'https://soundcloud.com/all172things/pengo-master-error-stillz-excellent-premiere',
          },
          {
            url: 'https://soundcloud.com/daniel-beale/pengo-cuvurs-necessity-inside-dnb-premiere-11-11-22',
            published: '2022-11-07T10:32:45Z',
            title: 'PENGO & CUVURS - NECESSITY - INSIDE DNB PREMIERE - 11-11-22',
          },
          {
            title: 'PENGO - LIES - INSIDE DNB PREMIERE - 11-11-22',
            published: '2022-11-07T10:31:22Z',
            url: 'https://soundcloud.com/daniel-beale/pengo-lies-inside-dnb-premiere-11-11-22',
          },
          {
            url: 'https://soundcloud.com/daniel-beale/pengo-natrix-sensei-inside-dnb-premiere-11-11-22',
            title: 'PENGO & NATRIX - SENSEI -INSIDE DNB PREMIERE - 11-11-22',
            published: '2022-11-07T10:29:48Z',
          },
          {
            title:
              'Tyke Live On Reprezent Radio - Crate Classics Show Feat. Kenji & Basshunterz Guest Mixes',
            url: 'https://soundcloud.com/tykeplayaz/tyke-live-on-reprezent-radio',
            published: '2022-11-08T12:45:28Z',
          },
          {
            published: '2022-11-07T03:09:30Z',
            url: 'https://soundcloud.com/jungledrumandbassuk/sets/jdnb-feature-pengo-sensei-ep-zombie',
            title: 'JDNB Feature - Pengo - Sensei EP [Zombie]',
          },
          {
            url: 'https://soundcloud.com/all172things/sedo-stop-start-premiere',
            published: '2022-10-31T12:42:57Z',
            title: 'Sedo - Stop Start [Premiere]',
          },
          {
            published: '2022-11-02T08:16:12Z',
            url: 'https://soundcloud.com/basiliskbass/sedo-l0g1n-straight-up',
            title: 'Sedo & L0G1N - Straight Up',
          },
          {
            title: 'Kormz - Holster',
            published: '2022-10-24T22:10:05Z',
            url: 'https://soundcloud.com/districtbassmusic/kormz-holster',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/grid-recordings/griduk080-nick-the-lot',
            title: 'GRIDUK080 - NICK THE LOT',
            published: '2018-09-21T16:09:15Z',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/zombieuk063-pengo',
            title: 'ZOMBIEUK062 - PENGO',
            published: '2022-09-20T17:20:08Z',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk186-jenks',
            title: 'GRIDUK186 - JENKS',
            published: '2022-08-11T20:50:04Z',
          },
          {
            title: 'ZOMBIEUK061 - KORMZ',
            url: 'https://soundcloud.com/grid-recordings/zombieuk061-kormz',
            published: '2022-08-15T21:09:03Z',
          },
          {
            title: 'GRIDUK181 - PENGO',
            url: 'https://soundcloud.com/grid-recordings/griduk181-pengo',
            published: '2022-07-27T19:02:12Z',
          },
          {
            published: '2021-11-25T21:26:35Z',
            title: 'GRIDUK159 - AMPLIFY',
            url: 'https://soundcloud.com/grid-recordings/griduk159-amplify',
          },
          {
            title: 'GRIDUK161 - JENKS',
            url: 'https://soundcloud.com/grid-recordings/griduk161-jenks',
            published: '2021-12-31T18:25:52Z',
          },
          {
            title: 'AMPLIFY & FLINT - WILD (VIP) FREE DOWNLOAD!',
            published: '2021-04-06T19:40:10Z',
            url: 'https://soundcloud.com/grid-recordings/amplify-flint-wild-vip-free-download',
          },
          {
            published: '2022-10-25T13:43:54Z',
            url: 'https://soundcloud.com/grid-recordings/griduk193-kenji',
            title: 'GRIDUK193 - KENJI',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk155-pengo',
            title: 'GRIDUK155 - PENGO',
            published: '2021-10-29T19:02:39Z',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk187-twisted-individual-remixes-vol-6',
            title: 'GRIDUK187 - TWISTED INDIVIDUAL REMIXES VOL 6',
            published: '2022-08-15T16:42:17Z',
          },
          {
            title: 'GRIDUK183 - HARLEY D',
            url: 'https://soundcloud.com/grid-recordings/griduk183-harley-d',
            published: '2022-07-27T19:04:54Z',
          },
          {
            published: '2019-09-26T13:56:56Z',
            title: 'GRIDUK094 - DAMAGE REPORT - THE REMIX EP',
            url: 'https://soundcloud.com/grid-recordings/griduk094-damage-report-remixes',
          },
          {
            title: 'GRIDUK188 - HEADNODDERS VOL 11',
            published: '2022-08-26T17:05:41Z',
            url: 'https://soundcloud.com/grid-recordings/griduk188-headnodders-vol-11',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk190-gravit-e',
            title: 'GRIDUK190 - GRAVIT-E',
            published: '2022-09-21T12:33:16Z',
          },
          {
            title: 'GRIDUK194  - WHISPER',
            published: '2022-10-25T13:47:38Z',
            url: 'https://soundcloud.com/grid-recordings/griduk194-whisper',
          },
          {
            title: 'GRIDUK184 - THATS WHAT WE CALL BASS VOLUME 6',
            published: '2022-08-11T15:10:14Z',
            url: 'https://soundcloud.com/grid-recordings/griduk183-thats-whhat-we-call-bass-volume-6',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/tyke-buzzards-grid-recordings',
            title: 'Tyke - Buzzards [Grid Recordings]',
            published: '2012-10-04T18:27:00Z',
          },
          {
            published: '2022-06-23T21:12:03Z',
            title: 'GRIDUK177 - PA',
            url: 'https://soundcloud.com/grid-recordings/griduk177-pa',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk195-pa',
            published: '2022-11-10T16:00:12Z',
            title: 'GRIDUK195 - PA',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk192-damage-report-remixes-vol-2',
            published: '2022-10-19T09:04:46Z',
            title: 'GRIDUK192 - DAMAGE REPORT REMIXES VOL 2',
          },
          {
            published: '2017-11-09T13:15:38Z',
            title: 'TWISTED IND - SWAN CAKE - TI RMX',
            url: 'https://soundcloud.com/grid-recordings/twisted-ind-swan-cake-ti-rmx',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk191-rouman',
            title: 'GRIDUK191 - ROUMAN',
            published: '2022-09-27T11:27:22Z',
          },
          {
            title: 'Mutated Forms - Wastegash - (The Upbeats Remix) [Grid Recordings]',
            url: 'https://soundcloud.com/grid-recordings/mutated-forms-wastegash-the',
            published: '2013-09-27T10:09:21Z',
          },
          {
            url: 'https://soundcloud.com/grid-recordings/griduk189-sedo',
            published: '2022-09-03T07:57:25Z',
            title: 'GRIDUK189 - SEDO',
          },
          {
            published: '2022-05-11T20:49:02Z',
            url: 'https://soundcloud.com/grid-recordings/griduk171-thats-what-we-call-bass-vol-5',
            title: 'GRIDUK171 - THATS WHAT WE CALL BASS VOL 5',
          },
          {
            published: '2022-10-11T15:51:48Z',
            title: 'TWISTED INDIVIDUAL - FRAZZLEDRIP',
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-frazzledrip',
          },
          {
            title: 'GRIDUK090 - NICK THE LOT',
            url: 'https://soundcloud.com/grid-recordings/griduk090-nick-the-lot',
            published: '2019-07-02T13:59:44Z',
          },
          {
            title: 'ZOMBIEUK063 - WITHIN THE WOODS VOL 5',
            published: '2022-11-04T10:16:44Z',
            url: 'https://soundcloud.com/grid-recordings/zombieuk063-within-the-woods-vol-5',
          },
          {
            title: 'TWISTED INDIVIDUAL - FREE HELICOPTER RIDE',
            published: '2022-10-11T15:50:50Z',
            url: 'https://soundcloud.com/grid-recordings/twisted-individual-free-helicopter-ride',
          },
        ],
      },
      name: 'Grid Recordings',
      widgets: [
        'https://soundcloud.com/grid-recordings/zombieuk063-pengo?si=096e18a189e14902a33b44f5622eb3ee&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/grid-recordings/griduk186-jenks?si=4ccdd3a90d714995bb972cd72f7fac12&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/grid-recordings/zombieuk061-kormz?si=37dcd2750e7a47f58b2da62066c1b635&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      id: 'CN2uMeN1wd8GNFF6C1bi',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-6tzbSTMEYaoJn2xm-nR67zA-t500x500.jpg',
      artists: ['Waeys'],
      followers: 21211,
      link: 'https://soundcloud.com/flexoutaudio',
      notes: '',
      styles: ['Jump Up', 'Minimal'],
      submission: 'tom@flexoutaudio.com',
      songsSubmitted: ['Stamina', 'Now Hear This', 'Night & Day'],
      songsSkipped: ["You Don't Know", 'Sunday Secrets'],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-18T16:23:09Z',
      lastScraped: 1668963185418,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/drumandbassarena/edit-evens',
            title: 'Ed:it - Evens',
            published: '2022-11-18T16:23:09Z',
          },
        ],
        recent: [
          {
            published: '2022-11-16T17:51:05Z',
            title: 'In The Mix: Ed:it',
            url: 'https://soundcloud.com/flexoutaudio/in-the-mix-edit',
          },
          {
            published: '2022-08-23T14:02:44Z',
            url: 'https://soundcloud.com/flexoutaudio/in-the-mix-ozoh',
            title: 'In The Mix: OZOH',
          },
          {
            url: 'https://soundcloud.com/flexoutaudio/in-the-mix-charlo',
            title: 'In The Mix: Charlo',
            published: '2022-05-31T07:29:00Z',
          },
        ],
        popular: [
          {
            published: '2022-08-23T14:02:44Z',
            url: 'https://soundcloud.com/flexoutaudio/in-the-mix-ozoh',
            title: 'In The Mix: OZOH',
          },
          {
            url: 'https://soundcloud.com/flexoutaudio/in-the-mix-edit',
            title: 'In The Mix: Ed:it',
            published: '2022-11-16T17:51:05Z',
          },
          {
            url: 'https://soundcloud.com/flexoutaudio/in-the-mix-charlo',
            published: '2022-05-31T07:29:00Z',
            title: 'In The Mix: Charlo',
          },
        ],
      },
      name: 'Flexout Audio',
      widgets: [
        'https://soundcloud.com/flexoutaudio/amoss-whsniff',
        'https://soundcloud.com/flexoutaudio/theoretical-dinosaurs',
        'https://soundcloud.com/arkaik/fate-determined-waeys-remix?in=flexoutaudio%2Fsets%2Farkaik-mindgames-ep',
      ],
      id: 'COj7K7RLSgI6ps2UMbiI',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000211375705-hmxu5x-t500x500.jpg',
      artists: ['A.I.', 'LSB', 'Lenzman', 'T>I'],
      followers: 133601,
      link: 'https://soundcloud.com/metalheadz',
      notes: '',
      styles: ['Jump Up', 'Jungle', 'Liquid', 'Vocal'],
      submission: 'info@metalheadz.co.uk',
      songsSubmitted: [
        'Night & Day',
        'Now Hear This',
        'Stamina',
        'Sunday Secrets',
        "You Don't Know",
      ],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-18T12:22:25Z',
      lastScraped: 1668963186839,
      tracks: {
        reposts: [
          {
            published: '2022-11-18T12:22:25Z',
            title: 'Metalheadz with SCAR (Album Show) - 17 November 2022',
            url: 'https://soundcloud.com/rinsefm/metalheadz171122',
          },
          {
            published: '2022-11-11T08:36:23Z',
            title: 'SCAR - Anxiety (ft. KMRS)',
            url: 'https://soundcloud.com/skankandbass/scar-anxiety-ft-kmrs',
          },
          {
            url: 'https://soundcloud.com/basiliskbass/scar-the-lane',
            published: '2022-11-06T02:33:51Z',
            title: 'SCAR - The Lane',
          },
          {
            title: 'SCAR - Lifted [Premiere]',
            published: '2022-11-03T12:01:32Z',
            url: 'https://soundcloud.com/all172things/scar-lifted-premiere',
          },
          {
            title: 'SCAR - Caterpillar',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/scar-caterpillar',
            published: '2022-11-06T18:05:08Z',
          },
          {
            title: 'Sub Fusion - Empty Warehouses - 36 Hertz Recordings',
            url: 'https://soundcloud.com/subfusionmusic/sets/sub-fusion-empty-warehouses-36',
            published: '2019-08-22T12:48:29Z',
          },
          {
            published: '2022-11-03T13:55:18Z',
            url: 'https://soundcloud.com/freefromsleep/ffs-premiere-scar-santa-cruz',
            title: 'FFS Premiere: SCAR – Santa Cruz',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/scar-losing-your-mind-ft-naomi-pryor-metalheadz',
            title: "SCAR 'Losing Your Mind '(ft. Naomi Pryor) [Metalheadz]",
            published: '2022-10-26T12:03:38Z',
          },
          {
            url: 'https://soundcloud.com/rinsefm/metalheadz201022',
            published: '2022-10-21T18:35:18Z',
            title: 'Metalheadz with Beyonders - 20 October 2022',
          },
          {
            published: '2022-10-21T11:23:40Z',
            title: 'Archive Volume 1 EP',
            url: 'https://soundcloud.com/friske/sets/archive-volume-1-ep',
          },
        ],
        popular: [
          {
            published: '2019-02-20T08:40:23Z',
            url: 'https://soundcloud.com/metalheadz/phaction-aviatrix-ft-riya',
            title: 'Phaction - Aviatrix (ft. Riya)',
          },
          {
            title: 'Artificial Intelligence- Shrine *Played by Friction on his Radio 1 DnB Show*',
            url: 'https://soundcloud.com/metalheadz/artificial-intelligence-shrine',
            published: '2016-04-05T17:21:38Z',
          },
          {
            published: '2015-11-17T12:53:32Z',
            url: 'https://soundcloud.com/metalheadz/artificial-intelligence-fallen-feat-dawn-wall',
            title: 'Artificial Intelligence - Fallen (feat. Dawn Wall) OUT NOW',
          },
          {
            published: '2015-10-27T12:54:35Z',
            url: 'https://soundcloud.com/metalheadz/b1-artificial-intelligence-scrolls-feat-dawn-wall-sampler-2-exclusivepre-order-now',
            title: 'B1. Artificial Intelligence - Scrolls (feat. Dawn Wall) [Sampler 2 exclusive]',
          },
          {
            title: 'Lenzman - Starz (feat. Kevin King) (LSB Remix)',
            published: '2015-07-20T13:44:08Z',
            url: 'https://soundcloud.com/metalheadz/lenzman-starz-feat-kevin-king-lsb-remix',
          },
          {
            published: '2011-12-18T15:09:39Z',
            title: 'Subwave & Enei - Bring Me Down',
            url: 'https://soundcloud.com/metalheadz/subwave-bring-me-down',
          },
          {
            published: '2019-02-28T11:42:06Z',
            title: 'Lenzman - Pictures Of You (feat. DRS)',
            url: 'https://soundcloud.com/metalheadz/lenzman-pictures-of-you-feat-drs',
          },
          {
            url: 'https://soundcloud.com/metalheadz/podcast-52-lenzman-feat-trac-metalheadz-podcast-july-2015-po',
            published: '2015-07-30T18:50:17Z',
            title: 'Metalheadz Podcast 52 - Lenzman Feat. T.R.A.C.',
          },
          {
            url: 'https://soundcloud.com/metalheadz/scar-count-it-off-ft-2nick8',
            title: 'SCAR - Count It Off (ft. 2Nick8)',
            published: '2022-09-29T13:06:23Z',
          },
          {
            url: 'https://soundcloud.com/metalheadz/ink-loxy-resound-token',
            title: 'Ink, Loxy & Resound - Token (BBC Radio 1 Premiere)',
            published: '2022-08-31T08:04:07Z',
          },
          {
            title: 'SB81 - Ravens Call',
            published: '2022-09-12T13:44:57Z',
            url: 'https://soundcloud.com/metalheadz/sb81-ravens-call',
          },
          {
            title: 'Artificial Intelligence - Metalheadz Promo Mix - Brighton, 18 November 2022',
            published: '2022-11-15T11:04:51Z',
            url: 'https://soundcloud.com/metalheadz/artificial-intelligence-metalheadz-promo-mix-brighton-18-november-2022',
          },
          {
            title: 'Need For Mirrors- Sacred Heart [MethXX011 Out Now]',
            url: 'https://soundcloud.com/metalheadz/need-for-mirrors-sacred-heart-methxx011-pre-order-now',
            published: '2014-11-30T13:30:44Z',
          },
          {
            title: 'John B (Blue Note Set) - recorded live at XOYO, London - 03/09/2021',
            published: '2022-08-10T09:41:22Z',
            url: 'https://soundcloud.com/metalheadz/john-b-blue-note-set-recorded-live-at-xoyo-london-03092021',
          },
          {
            published: '2022-11-09T13:18:24Z',
            url: 'https://soundcloud.com/metalheadz/trex-metalheadz-promo-mix-sheffield-18-november-2022',
            title: 'Trex - Metalheadz Promo Mix - Sheffield, 18 November 2022',
          },
          {
            title: 'Metalheadz Podcast 74 - Binary State',
            published: '2022-09-06T20:15:16Z',
            url: 'https://soundcloud.com/metalheadz/metalheadz-podcast-74-binary-state',
          },
          {
            published: '2022-09-16T11:19:50Z',
            title: 'SB81 - Etched Within',
            url: 'https://soundcloud.com/metalheadz/sb81-etched-within',
          },
          {
            published: '2022-10-03T13:12:37Z',
            title: 'Beyonders - Dojo',
            url: 'https://soundcloud.com/metalheadz/beyonders-dojo',
          },
          {
            title: 'Metalheadz Podcast 73 - Loxy',
            published: '2022-04-26T09:14:32Z',
            url: 'https://soundcloud.com/metalheadz/metalheadz-podcast-73-loxy',
          },
          {
            url: 'https://soundcloud.com/metalheadz/beyonders-moves-like-water-ft-holly-flo-lightly',
            published: '2022-10-07T11:31:40Z',
            title: 'Beyonders - Moves Like Water (ft. Holly Flo Lightly)',
          },
          {
            url: 'https://soundcloud.com/metalheadz/fluidity-deeper-vibe-nest-hq-premiere',
            published: '2018-02-06T17:50:40Z',
            title: 'Fluidity - Deeper Vibe [NEST HQ Premiere]',
          },
          {
            title:
              'dBridge X Jubei X Skeptical X SP:MC. Exit Vs Headz Live on RinseFM November 2014.',
            url: 'https://soundcloud.com/metalheadz/dbridge-x-jubei-x-skeptical-x-spmc-exit-vs-headz-live-on-rinsefm-november-2014',
            published: '2014-11-21T15:04:24Z',
          },
          {
            published: '2022-09-12T13:56:14Z',
            title: 'NC-17 - Jimmy The Gent',
            url: 'https://soundcloud.com/metalheadz/nc-17-jimmy-the-gent',
          },
          {
            url: 'https://soundcloud.com/metalheadz/goldie-essential-mix-1996',
            published: '2010-04-15T16:52:18Z',
            title: 'Goldie: Essential Mix 1996',
          },
          {
            published: '2017-05-25T15:47:39Z',
            url: 'https://soundcloud.com/metalheadz/scar-the-wrong-side-feat-naomi-pryor',
            title: 'SCAR - The Wrong Side (feat. Naomi Pryor)',
          },
          {
            published: '2016-09-26T09:16:37Z',
            title: 'Doc Scott B2B DJ Randall (old School) - Sun & Bass 2016',
            url: 'https://soundcloud.com/metalheadz/doc-scott-b2b-dj-randall-old-school-sun-bass-2016',
          },
          {
            title: 'Artificial Intelligence - Justify ft. Terri Walker (Phil:osophy Remix)',
            published: '2018-01-30T12:07:01Z',
            url: 'https://soundcloud.com/metalheadz/artificial-intelligence-justify-feat-terri-walker-philosophy-remix',
          },
          {
            published: '2016-11-07T10:00:32Z',
            url: 'https://soundcloud.com/metalheadz/villem-phase-thru-my-soul-feat-steopre-order-now',
            title: 'A. Villem & Phase - Thru My Soul (feat. Steo)',
          },
          {
            url: 'https://soundcloud.com/metalheadz/ukf-music-podcast-19-lenzman',
            title: 'UKF Music Podcast #19 - Lenzman in the mix',
            published: '2012-05-08T17:26:35Z',
          },
          {
            title: 'Dillinja with MC GQ & SPMC - Metalheadz History Sessions @ Fire 21.02.14',
            url: 'https://soundcloud.com/metalheadz/dillinja-with-mc-gq-spmc',
            published: '2014-04-25T17:46:21Z',
          },
        ],
        recent: [
          {
            published: '2022-11-17T11:07:49Z',
            title: 'SCAR - Computerised Humanity',
            url: 'https://soundcloud.com/metalheadz/scar-computerised-humanity',
          },
          {
            title: 'SCAR - Error',
            published: '2022-11-17T11:01:31Z',
            url: 'https://soundcloud.com/metalheadz/scar-error-1',
          },
          {
            title: 'Artificial Intelligence - Metalheadz Promo Mix - Brighton, 18 November 2022',
            url: 'https://soundcloud.com/metalheadz/artificial-intelligence-metalheadz-promo-mix-brighton-18-november-2022',
            published: '2022-11-15T11:04:51Z',
          },
          {
            title: 'SCAR - Audio Jungle',
            published: '2022-11-14T12:48:43Z',
            url: 'https://soundcloud.com/metalheadz/scar-audio-jungle',
          },
          {
            published: '2022-11-13T12:13:15Z',
            url: 'https://soundcloud.com/metalheadz/scar-sankyo',
            title: 'SCAR - Sankyo',
          },
          {
            url: 'https://soundcloud.com/metalheadz/scar-grasshopper',
            published: '2022-11-11T09:30:58Z',
            title: 'SCAR - Grasshopper',
          },
          {
            url: 'https://soundcloud.com/metalheadz/scar-bravo-tango',
            title: 'SCAR - Bravo Tango',
            published: '2022-11-11T09:29:19Z',
          },
          {
            title: 'SCAR - The Road Less Travelled',
            published: '2022-11-09T09:13:37Z',
            url: 'https://soundcloud.com/metalheadz/scar-the-road-less-travelled-1',
          },
          {
            published: '2022-11-09T09:15:03Z',
            title: 'SCAR - Shimmer',
            url: 'https://soundcloud.com/metalheadz/scar-shimmer',
          },
          {
            published: '2022-11-09T13:18:24Z',
            url: 'https://soundcloud.com/metalheadz/trex-metalheadz-promo-mix-sheffield-18-november-2022',
            title: 'Trex - Metalheadz Promo Mix - Sheffield, 18 November 2022',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/metalheadz/phaction-aviatrix-ft-riya',
        'https://soundcloud.com/metalheadz/tracks',
        'https://soundcloud.com/metalheadz/lenzman-pictures-of-you-feat-drs',
        'https://soundcloud.com/metalheadz/scar-count-it-off-ft-2nick8',
      ],
      name: 'Metalheadz',
      email: '',
      id: 'DAMIpbi06rkRLmr5JUPW',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-RCw4WAtB3Lyghcfy-Yc62Rg-t500x500.jpg',
      artists: ['Molecular ', 'Waeys', 'Wingz'],
      followers: 21571,
      link: 'https://soundcloud.com/delta9recordings',
      notes: '',
      styles: ['Liquid', 'Minimal', 'Vocal'],
      submission: 'https://www.promo-cloud.com/Tools/SendDemo/449d2579-d634-4155-8411-6239dd08e33c',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-19T08:21:49Z',
      lastScraped: 1668963188589,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/liquiddnbftws/exult-ft-smp-sydney-dream-walking',
            title: 'Exult ft. SMP & Sydney - Dream Walking',
            published: '2022-11-15T18:31:55Z',
          },
          {
            published: '2022-11-10T15:34:09Z',
            title: 'Invadhertz - Horror Vacui',
            url: 'https://soundcloud.com/districtbassmusic/invadhertz-horror-vacui',
          },
          {
            published: '2022-11-09T15:02:20Z',
            url: 'https://soundcloud.com/visionrecordings/vision-radio-s02e45',
            title: 'VISION Radio S02E45 // Hosted by Dave Columbo Jenkins & Thys',
          },
          {
            title: 'Invadhertz X Syren Rivers - The Ride',
            published: '2022-11-07T15:16:43Z',
            url: 'https://soundcloud.com/liquiddnbftws/invadhertz-x-syren-rivers-the-ride',
          },
          {
            published: '2022-11-08T09:19:25Z',
            url: 'https://soundcloud.com/skankandbass/invadhertz-sydney-bryce-beautiful-stranger',
            title: 'Invadhertz & Sydney Bryce - Beautiful Stranger',
          },
          {
            published: '2022-11-02T02:57:29Z',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/forbidden-podcast-029-phase-guest-mix',
            title: 'Forbidden Podcast #029 - Phase Guest Mix',
          },
          {
            title: 'SUNANDBASS Podcast #127 - IAMDOOMED',
            url: 'https://soundcloud.com/sunandbass/sunandbass-podcast-127-iamdoomed',
            published: '2022-11-01T10:32:17Z',
          },
          {
            title: 'Hystatus & Ultra Eko - Ghost In The Machine (Free Download)',
            published: '2022-10-31T12:28:53Z',
            url: 'https://soundcloud.com/hystatus/hystatus-ultra-eko-ghost-in-the-machine',
          },
          {
            published: '2022-10-18T03:27:39Z',
            url: 'https://soundcloud.com/officialdrumad/premiere-martial-taktics-monolith-delta9-recordings',
            title: 'PREMIERE: Martial Taktics - Monolith [Delta9 Recordings]',
          },
          {
            url: 'https://soundcloud.com/amoss/cs2-06',
            title: 'Cranium Session S2 - 06',
            published: '2022-10-26T11:42:56Z',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/delta9recordings/mfx-iamdoomed-flashback',
            title: 'M:FX & IAMDOOMED - Flashback',
            published: '2022-07-14T08:47:26Z',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/invadhertz-anxiety-vip',
            title: 'Invadhertz - Anxiety VIP [FREE DOWNLOAD]',
            published: '2022-09-09T07:06:43Z',
          },
          {
            published: '2022-08-31T07:28:57Z',
            title: 'XHL - Every Day',
            url: 'https://soundcloud.com/delta9recordings/xhl-every-day',
          },
          {
            published: '2022-10-10T09:53:16Z',
            url: 'https://soundcloud.com/delta9recordings/brainwork-rift-the-abyss',
            title: 'Brainwork & Rift - The Abyss',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/xhl-exclusive-mix-045',
            published: '2022-09-06T10:22:11Z',
            title: 'XHL - Exclusive Mix 045',
          },
          {
            title: 'Willers - Exclusive Mix 046',
            published: '2022-09-21T08:44:46Z',
            url: 'https://soundcloud.com/delta9recordings/willers-exclusive-mix-046',
          },
          {
            title: 'Tryst Temps - Dysthymie',
            published: '2022-10-18T10:29:13Z',
            url: 'https://soundcloud.com/delta9recordings/tryst-temps-dysthymie',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/dunk-mad',
            title: 'Dunk - Mad',
            published: '2022-10-11T11:40:09Z',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/xhl-internal-pitfight',
            title: 'XHL - Internal Pitfight',
            published: '2022-10-16T07:51:06Z',
          },
          {
            published: '2022-05-30T08:57:05Z',
            title: 'SD & Quadrant & Iris - Neon Memory',
            url: 'https://soundcloud.com/delta9recordings/sd-quadrant-iris-neon-memory',
          },
          {
            published: '2021-06-28T08:02:46Z',
            title: 'Geostatic - Consideration',
            url: 'https://soundcloud.com/delta9recordings/geostatic-consideration-1',
          },
          {
            title: 'Tweakz - 073',
            published: '2022-05-12T08:10:06Z',
            url: 'https://soundcloud.com/delta9recordings/tweakz-74',
          },
          {
            title: 'Incorporate - Clippers',
            url: 'https://soundcloud.com/delta9recordings/incorporate-clippers',
            published: '2022-10-12T08:50:37Z',
          },
          {
            published: '2019-08-07T13:23:20Z',
            title: 'Screamarts - Confined Space (DOWNLOAD FREE SAMPLE PACK)',
            url: 'https://soundcloud.com/delta9recordings/screamarts-confined-space-free-sample-pack',
          },
          {
            published: '2022-10-26T08:51:19Z',
            title: 'OZOH - Sink Slower',
            url: 'https://soundcloud.com/delta9recordings/ozoh-sink-slower',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/kodin-logics-feat-flipz-mc-neurotic-vip-free-download-sample-pack',
            published: '2019-01-25T12:08:21Z',
            title: 'Kodin & Logics feat. Flipz MC - Neurotic VIP (FREE DOWNLOAD + SAMPLE PACK)',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/half-life-exclusive-mix-047',
            title: 'Half-Life - Exclusive Mix 047',
            published: '2022-10-05T08:08:57Z',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/sili-ay-swetch-ozoh-remix-free-download',
            title: 'Sili - Ay Swetch (Ozoh Remix) [FREE DOWNLOAD]',
            published: '2021-12-24T08:15:48Z',
          },
          {
            title: 'Screamarts - Sonar',
            published: '2022-10-27T08:31:09Z',
            url: 'https://soundcloud.com/delta9recordings/screamarts-sonar',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/nemy-selected',
            published: '2022-10-23T07:21:20Z',
            title: 'Nemy - Selected',
          },
          {
            published: '2020-12-23T07:35:06Z',
            title: 'Bowsar - The Rift [FREE DOWNLOAD]',
            url: 'https://soundcloud.com/delta9recordings/bowsar-the-rift-free-download',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/invadhertz-gemma-rose-under',
            title: 'Invadhertz & Gemma Rose - Under',
            published: '2022-11-09T10:12:41Z',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/neve-hlz-ft-kwality-noladem-quadrant-iris-remix-1',
            published: '2021-11-25T13:06:56Z',
            title: 'Neve & HLZ ft. Kwality - Noladem (Quadrant & Iris Remix)',
          },
          {
            title: 'Extraction - Nausea',
            url: 'https://soundcloud.com/delta9recordings/extraction-nausea-1',
            published: '2020-11-30T13:10:37Z',
          },
          {
            published: '2022-09-28T09:31:35Z',
            title: 'Half-Life - Visions',
            url: 'https://soundcloud.com/delta9recordings/half-life-visions',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/disprove-get-some-d9rec074',
            published: '2019-12-27T15:47:02Z',
            title: 'Disprove - Get Some [D9REC074]',
          },
          {
            published: '2020-07-17T07:14:20Z',
            title: 'Geostatic - Trust [FREE DOWNLOAD]',
            url: 'https://soundcloud.com/delta9recordings/geostatic-trust-free-download',
          },
          {
            published: '2021-05-10T13:04:15Z',
            url: 'https://soundcloud.com/delta9recordings/invadhertz-one-seventy-clash-1',
            title: 'Invadhertz - One Seventy Clash',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/dan-structure-streatham-hill-sizzler-1',
            published: '2021-09-23T11:36:29Z',
            title: 'Dan Structure - Streatham Hill Sizzler',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/karmasynk-exclusive-mix-044',
            published: '2022-08-23T20:27:24Z',
            title: 'KarmasynK - Exclusive Mix 044',
          },
        ],
        recent: [
          {
            title: 'Invadhertz - Exclusive Mix 048',
            url: 'https://soundcloud.com/delta9recordings/invadhertz-exclusive-mix-047',
            published: '2022-11-19T08:21:49Z',
          },
          {
            published: '2022-11-09T10:12:41Z',
            url: 'https://soundcloud.com/delta9recordings/invadhertz-gemma-rose-under',
            title: 'Invadhertz & Gemma Rose - Under',
          },
          {
            published: '2022-10-28T08:10:19Z',
            url: 'https://soundcloud.com/delta9recordings/sonic-rain-incident-clock',
            title: 'Sonic Rain & Incident - Clock',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/anapa-ghostlines',
            title: 'Anapa - Ghostlines',
            published: '2022-10-28T08:07:09Z',
          },
          {
            url: 'https://soundcloud.com/delta9recordings/senchai-on-and-on',
            title: 'Senchai - On And On',
            published: '2022-10-28T08:05:49Z',
          },
          {
            published: '2022-10-28T08:04:23Z',
            url: 'https://soundcloud.com/delta9recordings/silloh-dan-structure-swivel',
            title: 'Silloh & Dan Structure - Swivel',
          },
          {
            title: 'AM:X - Ice Cave',
            url: 'https://soundcloud.com/delta9recordings/amx-ice-cave',
            published: '2022-10-28T08:03:07Z',
          },
        ],
      },
      name: 'Delta9 Recordings',
      widgets: [
        'https://soundcloud.com/districtbassmusic/invadhertz-horror-vacui?in=delta9recordings%2Fsets%2Fout-now-invadhertz-horror',
        'https://soundcloud.com/skankandbass/invadhertz-sydney-bryce-beautiful-stranger?in=delta9recordings%2Fsets%2Fout-now-invadhertz-horror',
        'https://soundcloud.com/delta9recordings/sets/out-now-v-a-from-the-streets-4',
        'https://soundcloud.com/forbiddenfrequenciesdnb/mfx-iamdoomed-badboy-style?in=delta9recordings%2Fsets%2Fout-now-v-a-from-the-streets-4',
      ],
      id: 'EVVTRnpJCKUMsUn6sTb5',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-VdXSJTRfrc6gp9k9-F5IJKg-t500x500.jpg',
      artists: ['LSB', 'Monrroe', 'Technimatic'],
      followers: 94637,
      link: 'https://soundcloud.com/shogunaudio',
      notes: 'Mostly chill but has heavy stuff too',
      styles: ['Liquid'],
      submission: 'shogunaudio@label-engine.com',
      songsSubmitted: [
        'Night & Day',
        'Now Hear This',
        'Stamina',
        'Sunday Secrets',
        "You Don't Know",
      ],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-18T10:54:37Z',
      lastScraped: 1668963191209,
      tracks: {
        recent: [
          {
            published: '2022-11-18T10:54:37Z',
            url: 'https://soundcloud.com/shogunaudio/gest-dj-marky-ruckus-1',
            title: 'GEST & DJ Marky - Ruckus',
          },
        ],
        reposts: [
          {
            published: '2021-02-20T07:52:01Z',
            title: 'Soul:Motion & Vector Point Of Origin Promo Mix (Shogun Audio)',
            url: 'https://soundcloud.com/soulmotion_88/soulmotion-vector-point-of-origin-promo-mix-shogun-audio',
          },
          {
            published: '2021-02-03T12:43:09Z',
            title: 'Monrroe - Drum & Bass sample pack [EST007]',
            url: 'https://soundcloud.com/est-studios/monrroe-drum-bass-sample-pack-est007',
          },
          {
            published: '2020-10-19T09:57:36Z',
            title: 'Sounds Of: Shogun Audio sample pack [EST004]',
            url: 'https://soundcloud.com/est-studios/est-studios-presents-sounds-of-shogun-audio-est004',
          },
          {
            published: '2020-06-30T09:55:59Z',
            url: 'https://soundcloud.com/sgn-ltd/sets/mistrust-forbidden-ep-1',
            title: 'Mistrust - Forbidden EP',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/mistrust-dreamer-1',
            title: 'Mistrust - Dreamer',
            published: '2020-06-30T09:49:58Z',
          },
          {
            title: 'Skankandbass on Reprezent - 031 - GLXY Guest Mix',
            published: '2020-05-16T15:11:19Z',
            url: 'https://soundcloud.com/skankandbass/031-radio',
          },
          {
            published: '2020-04-23T17:26:35Z',
            title: 'Development w/ Visionobi',
            url: 'https://soundcloud.com/glxymusic-1/development-w-visionobi',
          },
          {
            published: '2020-03-12T17:57:06Z',
            title: 'Research.',
            url: 'https://soundcloud.com/glxymusic-1/research',
          },
          {
            title: 'Sustance  - Swank',
            published: '2019-06-20T11:25:47Z',
            url: 'https://soundcloud.com/drumandbassarena/sustance-swank',
          },
          {
            url: 'https://soundcloud.com/sgn-ltd/sustance-go-back-ft-j-appiah-2',
            title: 'Sustance - Go Back ft. J Appiah',
            published: '2019-06-11T12:09:00Z',
          },
        ],
        popular: [
          {
            published: '2022-05-16T10:37:18Z',
            title: 'Pola & Bryson - Tell You What I Did ft. Zitah',
            url: 'https://soundcloud.com/shogunaudio/pola-bryson-tell-you-what-i-did',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/monrroe-never-too-old-ft-emily-makis-1',
            published: '2019-10-18T12:58:52Z',
            title: 'Monrroe - Never Too Old ft. Emily Makis',
          },
          {
            published: '2020-10-02T09:27:49Z',
            title: 'Monrroe - Out Of Time ft. Zara Kershaw',
            url: 'https://soundcloud.com/shogunaudio/monrroe-out-of-time-ft-zara-kershaw',
          },
          {
            title: 'Sustance Ft T - Man - Snakes & Villains',
            published: '2022-07-12T13:45:57Z',
            url: 'https://soundcloud.com/shogunaudio/sustance-ft-t-man-snakes',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/pola-bryson-find-your-way',
            published: '2017-02-07T13:45:01Z',
            title: 'Pola & Bryson - Find Your Way ft. Charlotte Haining',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/technimatic-bristol-break-remix',
            published: '2017-08-15T12:52:44Z',
            title: 'Technimatic - Bristol (Break Remix)',
          },
          {
            published: '2017-08-22T15:11:41Z',
            url: 'https://soundcloud.com/shogunaudio/parallel-lsb',
            title: 'Technimatic - Parallel Ft. Zara Kershaw (LSB Remix)',
          },
          {
            published: '2017-08-08T14:39:39Z',
            url: 'https://soundcloud.com/shogunaudio/my-nu-leng-friction-jigsaw',
            title: 'My Nu Leng & Friction - Jigsaw',
          },
          {
            title: 'Monrroe, Pola & Bryson & Emily Makis - Complete',
            url: 'https://soundcloud.com/shogunaudio/monrroe-pola-bryson-emily-makis',
            published: '2022-01-24T12:08:15Z',
          },
          {
            title: 'Document One - Holy Moly',
            url: 'https://soundcloud.com/shogunaudio/document-one-holy-moly-1',
            published: '2019-07-19T13:55:15Z',
          },
          {
            published: '2022-08-18T13:25:06Z',
            url: 'https://soundcloud.com/shogunaudio/refracta-tears-shogun-origins-1',
            title: 'Refracta - Tears [Shogun Origins]',
          },
          {
            title: 'Simula - Good Vibration Ft. Embr',
            published: '2021-06-14T10:13:32Z',
            url: 'https://soundcloud.com/shogunaudio/simula-good-vibration-ft-embr',
          },
          {
            published: '2015-07-03T09:33:57Z',
            title: 'Technimatic - Secret Smile ft. Lucy Kitchen',
            url: 'https://soundcloud.com/shogunaudio/technimatic-secret-smile-ft-lucy-kitchen',
          },
          {
            published: '2013-06-21T14:13:55Z',
            title: 'SpectraSoul - Away With Me ft. Tamara Blessa (Calibre Remix)',
            url: 'https://soundcloud.com/shogunaudio/spectrasoul-away-with-me-ft-1',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/shogun-audio-presents-2017-continuous-mix-by-deadline',
            title: 'Shogun Audio Presents: 2017 - Continuous Mix By Deadline',
            published: '2017-12-01T14:38:01Z',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/you-got-me',
            published: '2019-01-18T10:37:10Z',
            title: 'Monrroe - You Got Me ft. Alexa Harley',
          },
          {
            published: '2020-06-02T14:16:21Z',
            url: 'https://soundcloud.com/shogunaudio/monrroe-as-i-fall-ft-sydney',
            title: 'Monrroe - As I Fall ft. Sydney',
          },
          {
            published: '2021-02-05T12:05:32Z',
            title: 'T95 & Operate - Set You Free',
            url: 'https://soundcloud.com/shogunaudio/t95-operate-set-you-free',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/spectrasoul-shelter-vip-mix',
            title: 'SpectraSoul - Shelter Ft Lily McKenzie (VIP Mix) (Out Now)',
            published: '2015-05-13T10:03:03Z',
          },
          {
            title: 'Duskee & Sustance - SCUM',
            url: 'https://soundcloud.com/shogunaudio/duskee-sustance-scum',
            published: '2022-09-05T15:31:06Z',
          },
          {
            published: '2021-02-09T12:22:52Z',
            url: 'https://soundcloud.com/shogunaudio/pola-bryson-under-ft-lauren-archer',
            title: 'Pola & Bryson - Under ft. Lauren Archer',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/prolix-we-do-our-thing',
            title: 'Prolix - We Do Our Thing [Bassrush Premiere]',
            published: '2016-11-03T15:48:10Z',
          },
          {
            title: 'GLXY - New Day',
            published: '2022-07-12T13:40:17Z',
            url: 'https://soundcloud.com/shogunaudio/new-day',
          },
          {
            published: '2015-04-27T09:39:41Z',
            title: 'Friction Vs Dimension - Kinetic (OUT NOW)',
            url: 'https://soundcloud.com/shogunaudio/friction-vs-dimension-kinetic',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/monrroe-riya-closer',
            title: 'Monrroe & Riya - Closer',
            published: '2021-02-15T14:33:56Z',
          },
          {
            published: '2017-04-18T14:55:42Z',
            url: 'https://soundcloud.com/shogunaudio/porcelain-polabryson-rmx',
            title: 'Moby - Porcelain (Pola & Bryson Remix)',
          },
          {
            published: '2022-06-01T12:58:28Z',
            title: 'Subten, Harry Shotta & Eloquin - Televised',
            url: 'https://soundcloud.com/shogunaudio/eloquin-subten-harry-shotta-televised',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/fourward-the-storm',
            published: '2016-02-16T12:39:59Z',
            title: 'Fourward - The Storm ft. Linguistics',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/waiting-to-go',
            published: '2022-01-21T16:18:00Z',
            title: 'DRS, Duskee & Disrupta - Waiting To Go',
          },
          {
            url: 'https://soundcloud.com/shogunaudio/prolix-nature-reality',
            title: 'Prolix - Nature of Reality',
            published: '2016-02-03T10:49:03Z',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/shogunaudio/monrroe-out-of-time-ft-zara-kershaw',
        'https://soundcloud.com/shogunaudio/technimatic-bristol-break-remix',
        'https://soundcloud.com/shogunaudio/duskee-sustance-scum',
        'https://soundcloud.com/shogunaudio/sustance-ft-t-man-snakes',
      ],
      name: 'Shogun Audio',
      id: 'FzC3StFdxmFAzc9qtsoa',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-w1GWvyHwVSP5IcJO-ydAHoQ-t500x500.jpg',
      artists: ['Enei', 'Halogenix', 'Waeys'],
      followers: 98804,
      link: 'https://soundcloud.com/critical-music',
      notes: '',
      styles: ['Jump Up', 'Minimal'],
      submission: 'https://criticalmusic.com/contact/',
      songsSubmitted: ['Night & Day', 'Now Hear This', 'Stamina'],
      songsSkipped: ['Sunday Secrets', "You Don't Know"],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-16T17:02:22Z',
      lastScraped: 1668963192745,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/critical-music/enei-sinking',
            published: '2019-12-16T09:29:21Z',
            title: 'Enei - Sinking',
          },
          {
            published: '2022-09-05T16:15:25Z',
            title: 'Particle & En:vy - With U',
            url: 'https://soundcloud.com/critical-music/particle-envy-with-u',
          },
          {
            title: 'Enei - Sinking VIP',
            url: 'https://soundcloud.com/critical-music/enei-sinking-vip',
            published: '2020-10-29T11:23:39Z',
          },
          {
            title: 'Foreign Concept x Phase x Magugu - Shut It Up',
            published: '2022-09-13T14:08:44Z',
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-shut-it-up-feat-magugu',
          },
          {
            title: 'Waeys x Unglued - Take 2007',
            published: '2022-10-07T10:29:05Z',
            url: 'https://soundcloud.com/critical-music/waeys-x-unglued-take-2007',
          },
          {
            url: 'https://soundcloud.com/critical-music/halogenix-techy-ft-chimpo',
            title: 'Halogenix - Techy (ft. Chimpo)',
            published: '2022-05-27T09:45:01Z',
          },
          {
            title: 'latesleeper - Rubber Ducky',
            url: 'https://soundcloud.com/critical-music/latesleeper-rubber-ducky',
            published: '2022-08-24T14:47:01Z',
          },
          {
            published: '2022-10-05T15:10:38Z',
            url: 'https://soundcloud.com/critical-music/waeys-unfinished-business',
            title: 'Waeys - Unfinished Business',
          },
          {
            url: 'https://soundcloud.com/critical-music/particle-business-techno',
            title: 'Particle - Business Techno',
            published: '2020-05-15T08:14:11Z',
          },
          {
            title: 'Particle - That Hz',
            published: '2022-04-06T14:26:06Z',
            url: 'https://soundcloud.com/critical-music/particle-that-hz',
          },
          {
            published: '2022-09-14T16:02:37Z',
            title: 'Foreign Concept & Phase - Heart & Soul',
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-heart-soul',
          },
          {
            url: 'https://soundcloud.com/critical-music/emz-sam-binga-dont-stress',
            title: "Emz & Sam Binga - Don't Stress",
            published: '2022-05-03T13:42:45Z',
          },
          {
            url: 'https://soundcloud.com/critical-music/enei-runnin-feat-georgia-yates',
            published: '2012-10-18T16:55:54Z',
            title: "Enei - Runnin feat. Georgia Yates - 'Machines' Album",
          },
          {
            published: '2022-07-27T16:21:38Z',
            title: 'YAANO - Get It Like',
            url: 'https://soundcloud.com/critical-music/yaano-get-it-like',
          },
          {
            url: 'https://soundcloud.com/critical-music/bou-upgrade-creeper-feat-chimpo',
            published: '2021-01-11T11:31:20Z',
            title: 'Bou & Upgrade - Creeper (feat. Chimpo)',
          },
          {
            title: 'QZB - Take It All VIP (feat. Charli Brix)',
            url: 'https://soundcloud.com/critical-music/qzb-take-it-all-vip-feat-charli-brix',
            published: '2019-06-19T15:27:13Z',
          },
          {
            title: 'YAANO - Christian Dubstep',
            published: '2022-08-01T15:37:20Z',
            url: 'https://soundcloud.com/critical-music/yaano-christian-dubstep',
          },
          {
            url: 'https://soundcloud.com/critical-music/buunshin-forget-about-me',
            title: 'Buunshin - Forget About Me',
            published: '2022-04-26T16:27:49Z',
          },
          {
            published: '2022-10-10T11:24:58Z',
            title: 'The Critical Music Show w/ Kasra, Waeys & Spectral | Rinse FM | 06.10.22',
            url: 'https://soundcloud.com/critical-music/the-critical-music-show-w-kasra-waeys-spectral-rinse-fm-061022',
          },
          {
            published: '2021-07-29T16:08:07Z',
            title: 'Enei - Escape (feat. Elipsa)',
            url: 'https://soundcloud.com/critical-music/enei-escape-feat-elipsa',
          },
          {
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-witch-groove',
            published: '2022-09-16T09:14:32Z',
            title: 'Foreign Concept & Phase - Witch Groove',
          },
          {
            published: '2019-08-07T18:34:44Z',
            url: 'https://soundcloud.com/critical-music/sam-binga-redders-vandilero-particle-remix',
            title: 'Sam Binga & Redders - Vandilero (Particle Remix)',
          },
          {
            url: 'https://soundcloud.com/critical-music/bou-mefjus-wormhole',
            published: '2020-12-22T10:25:21Z',
            title: 'Bou & Mefjus - Wormhole',
          },
          {
            published: '2019-07-04T15:06:48Z',
            url: 'https://soundcloud.com/critical-music/enei-widowed',
            title: 'Enei - Widowed',
          },
          {
            url: 'https://soundcloud.com/critical-music/latesleeper-cellophane',
            title: 'latesleeper - Cellophane',
            published: '2022-08-26T09:22:25Z',
          },
          {
            published: '2022-09-23T15:05:05Z',
            url: 'https://soundcloud.com/critical-music/cauzer-critical-vs-overview-manchester-3010-hit-run-promo-mix',
            title: 'Cauzer: Critical vs Overview - Manchester 30.09.22 [Hit&Run] : Promo Mix',
          },
          {
            title:
              'The Critical Music Show w/ Enei (Humans LP Showcase) & The Upbeats | Rinse FM | 03.11.22',
            published: '2022-11-07T10:35:05Z',
            url: 'https://soundcloud.com/critical-music/the-critical-music-show-w-enei-humans-lp-showcase-the-upbeats-rinse-fm-031122',
          },
          {
            published: '2017-03-07T17:59:47Z',
            title: 'Ivy Lab - Magikess [NEST HQ Premiere]',
            url: 'https://soundcloud.com/critical-music/ivy-lab-magikess',
          },
          {
            title: 'Shyun - The Beast',
            url: 'https://soundcloud.com/critical-music/shyun-the-beast',
            published: '2018-04-23T11:06:32Z',
          },
          {
            published: '2019-03-06T12:31:49Z',
            url: 'https://soundcloud.com/critical-music/bou-cat-women',
            title: 'Bou - Cat Women',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/enei/enei-acid-shot',
            published: '2022-11-11T17:24:56Z',
            title: 'Enei - Acid Shot',
          },
          {
            url: 'https://soundcloud.com/enei/enei-trojans',
            published: '2022-11-02T12:04:08Z',
            title: 'Enei - Trojans',
          },
          {
            url: 'https://soundcloud.com/halogenix/halogenix-the-upbeats-earache',
            published: '2022-10-30T00:22:42Z',
            title: 'Halogenix & The Upbeats - Earache',
          },
          {
            title: 'Enei - The Hammer',
            published: '2022-10-19T17:08:56Z',
            url: 'https://soundcloud.com/enei/enei-the-hammer',
          },
          {
            title: 'Klinical_Selects_03',
            published: '2022-10-06T13:19:27Z',
            url: 'https://soundcloud.com/klinicaldnb/klinical_selects_03',
          },
          {
            published: '2022-09-26T10:34:30Z',
            url: 'https://soundcloud.com/overviewuk/yaano-critical-vs-overview-manchester-300922-hitrun-promo-mix',
            title: 'YAANO: Critical vs Overview - Manchester 30.09.22 [Hit&Run] : Promo Mix',
          },
          {
            title: 'Enei - Show Me (feat. Odddi)',
            published: '2022-08-31T15:11:17Z',
            url: 'https://soundcloud.com/enei/enei-show-me-feat-odddi',
          },
          {
            title: 'The Sound Of: Critical Music, mixed by Kasra',
            url: 'https://soundcloud.com/djmag/the-sound-of-critical-music-mixed-by-kasra',
            published: '2022-08-23T14:05:18Z',
          },
          {
            title: 'Enei - No Man',
            url: 'https://soundcloud.com/enei/enei-no-man',
            published: '2022-08-10T08:13:21Z',
          },
          {
            url: 'https://soundcloud.com/yaanodnb/yaano-like-this',
            published: '2022-07-27T14:45:24Z',
            title: 'YAANO - Like This',
          },
        ],
        recent: [
          {
            published: '2022-11-16T17:02:22Z',
            url: 'https://soundcloud.com/critical-music/enei-tide-guide-feat-t-man',
            title: 'Enei - Tide Guide (feat. T-Man)',
          },
          {
            url: 'https://soundcloud.com/critical-music/the-critical-music-show-w-enei-humans-lp-showcase-the-upbeats-rinse-fm-031122',
            title:
              'The Critical Music Show w/ Enei (Humans LP Showcase) & The Upbeats | Rinse FM | 03.11.22',
            published: '2022-11-07T10:35:05Z',
          },
          {
            published: '2022-10-10T11:24:58Z',
            title: 'The Critical Music Show w/ Kasra, Waeys & Spectral | Rinse FM | 06.10.22',
            url: 'https://soundcloud.com/critical-music/the-critical-music-show-w-kasra-waeys-spectral-rinse-fm-061022',
          },
          {
            title: 'Waeys x Unglued - Take 2007',
            url: 'https://soundcloud.com/critical-music/waeys-x-unglued-take-2007',
            published: '2022-10-07T10:29:05Z',
          },
          {
            published: '2022-10-05T15:10:38Z',
            title: 'Waeys - Unfinished Business',
            url: 'https://soundcloud.com/critical-music/waeys-unfinished-business',
          },
          {
            title: 'Cauzer: Critical vs Overview - Manchester 30.09.22 [Hit&Run] : Promo Mix',
            url: 'https://soundcloud.com/critical-music/cauzer-critical-vs-overview-manchester-3010-hit-run-promo-mix',
            published: '2022-09-23T15:05:05Z',
          },
          {
            published: '2022-09-16T09:14:32Z',
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-witch-groove',
            title: 'Foreign Concept & Phase - Witch Groove',
          },
          {
            published: '2022-09-16T09:16:31Z',
            title: 'Foreign Concept & Phase - Tuff Times',
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-tuff-times',
          },
          {
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-heart-soul',
            published: '2022-09-14T16:02:37Z',
            title: 'Foreign Concept & Phase - Heart & Soul',
          },
          {
            published: '2022-09-13T14:08:44Z',
            title: 'Foreign Concept x Phase x Magugu - Shut It Up',
            url: 'https://soundcloud.com/critical-music/foreign-concept-phase-shut-it-up-feat-magugu',
          },
        ],
      },
      name: 'Critical Music',
      email: '',
      widgets: [
        'https://soundcloud.com/critical-music/enei-sinking',
        'https://soundcloud.com/critical-music/particle-envy-with-u',
        'https://soundcloud.com/critical-music/halogenix-techy-ft-chimpo',
        'https://soundcloud.com/critical-music/enei-escape-feat-elipsa',
      ],
      id: 'HPfIOr5sOv8z46AmLTLK',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-CUX8ViYyQKz1mlew-WFp27Q-t500x500.jpg',
      artists: ['DC Breaks'],
      followers: 6959,
      link: 'https://soundcloud.com/korsakovmusic',
      notes: '',
      styles: ['Dancefloor', 'Neurofunk'],
      submission: 'elmar@korsakovdnb.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-08T23:29:56Z',
      lastScraped: 1668963194132,
      tracks: {
        popular: [
          {
            title: 'Phibes - Forever',
            published: '2022-05-20T12:59:18Z',
            url: 'https://soundcloud.com/korsakovmusic/phibes-forever',
          },
          {
            title: 'Manta & Frank Lemon - Adrenaline Rush',
            published: '2022-06-08T08:51:27Z',
            url: 'https://soundcloud.com/korsakovmusic/manta-frank-lemon-adrenaline',
          },
          {
            url: 'https://soundcloud.com/korsakovmusic/also-cliques-feck-off',
            published: '2021-12-09T21:20:36Z',
            title: 'AL/SO & CLIQUES. - Feck Off',
          },
          {
            published: '2022-09-23T07:21:42Z',
            url: 'https://soundcloud.com/korsakovmusic/mylen-heartslocked',
            title: 'Mylen - Hearts Locked',
          },
          {
            title: 'Tong8 - Chance',
            published: '2022-05-20T12:51:18Z',
            url: 'https://soundcloud.com/korsakovmusic/chance',
          },
          {
            title: 'Gydra - Verse Tonijn',
            url: 'https://soundcloud.com/korsakovmusic/10-gydra-verse-tonijn',
            published: '2019-08-22T16:05:21Z',
          },
          {
            published: '2022-10-26T21:23:20Z',
            title: 'Protostar - Into Dark ft. MYLK',
            url: 'https://soundcloud.com/korsakovmusic/protostar-into-dark-ft-mylk',
          },
          {
            title: 'I.C.U - Remedy',
            published: '2022-08-14T22:11:49Z',
            url: 'https://soundcloud.com/korsakovmusic/icu-remedy-1',
          },
          {
            published: '2018-09-21T15:40:22Z',
            title: 'Jade & Mindscape - Dangerous',
            url: 'https://soundcloud.com/korsakovmusic/jade-mindscape-dangerous',
          },
          {
            title: 'Binary - Timeless',
            url: 'https://soundcloud.com/korsakovmusic/binary-timeless',
            published: '2022-05-20T12:51:39Z',
          },
          {
            published: '2022-04-15T12:52:11Z',
            url: 'https://soundcloud.com/korsakovmusic/sovryn-valhalla',
            title: 'Sovryn - Valhalla',
          },
          {
            published: '2021-12-23T23:36:24Z',
            url: 'https://soundcloud.com/korsakovmusic/mylen-twilight-zone',
            title: 'Mylen - Twilight Zone',
          },
          {
            title: 'C:rcle - Love Survives',
            url: 'https://soundcloud.com/korsakovmusic/crcle-love-survives',
            published: '2022-11-08T23:29:56Z',
          },
          {
            title: 'Feint - Empathy Box',
            published: '2018-09-21T14:51:42Z',
            url: 'https://soundcloud.com/korsakovmusic/feint-empathy-box',
          },
          {
            url: 'https://soundcloud.com/korsakovmusic/do-you-feel-it',
            title: 'Methis - Do You Feel It',
            published: '2020-05-27T14:29:49Z',
          },
          {
            published: '2021-11-15T01:32:53Z',
            title: 'I.C.U & Hybrid Theory ft. Nehanda - Burn',
            url: 'https://soundcloud.com/korsakovmusic/i-c-u-hybrid-theory-ft-nehanda',
          },
          {
            published: '2020-05-28T09:39:06Z',
            url: 'https://soundcloud.com/korsakovmusic/droptek-comply-smooth-dc-breaks-remix',
            title: 'Droptek - Comply (Smooth & DC Breaks Remix)',
          },
          {
            published: '2022-03-08T01:09:50Z',
            title: 'AL/SO & R3dx - Blame',
            url: 'https://soundcloud.com/korsakovmusic/also-r3dx-blame',
          },
          {
            url: 'https://soundcloud.com/korsakovmusic/manta-eternity-ft-sazzles-exe',
            published: '2022-06-08T08:51:36Z',
            title: 'Manta - Eternity ft. Sazzles:exe',
          },
          {
            published: '2022-05-20T12:51:27Z',
            title: 'Jenske - Altered Future',
            url: 'https://soundcloud.com/korsakovmusic/altered-future',
          },
          {
            title: 'Sovryn - Static Vision Ft. Gid Sedgwick',
            url: 'https://soundcloud.com/korsakovmusic/sovryn-static-vision-ft-gid',
            published: '2021-02-23T18:07:29Z',
          },
          {
            title: 'High Maintenance & AL/SO - Here We Go Again(Mean Teeth Remix)',
            url: 'https://soundcloud.com/korsakovmusic/high-maintenance-al-so-here-1',
            published: '2021-06-23T01:53:38Z',
          },
          {
            url: 'https://soundcloud.com/korsakovmusic/drop-em',
            title: 'Visceral - Drop Em',
            published: '2022-05-20T12:51:36Z',
          },
          {
            published: '2018-06-18T16:32:36Z',
            url: 'https://soundcloud.com/korsakovmusic/krskv009',
            title: 'KRSKV009 - Mixed By Killbox',
          },
          {
            title: 'Kaizah & Perplex - When The Drum Rolls',
            published: '2022-05-20T12:51:25Z',
            url: 'https://soundcloud.com/korsakovmusic/when-the-drum-rolls',
          },
          {
            published: '2018-09-19T13:14:39Z',
            url: 'https://soundcloud.com/korsakovmusic/merikan-vektor',
            title: 'Merikan - Vektor',
          },
          {
            title: 'High Maintenance & AL/SO - Party Every Day',
            published: '2020-02-26T12:44:13Z',
            url: 'https://soundcloud.com/korsakovmusic/high-maintenance-also-party',
          },
          {
            published: '2021-03-31T01:14:13Z',
            url: 'https://soundcloud.com/korsakovmusic/chainsaw',
            title: 'Smooth - Chainsaw  ft. DC Breaks & Coppa',
          },
          {
            published: '2020-02-26T12:44:12Z',
            title: 'High Maintenance & AL/SO - Here We Go Again',
            url: 'https://soundcloud.com/korsakovmusic/high-maintenance-also-here-we-go-again',
          },
          {
            title: 'Sovryn - Obelisk',
            published: '2022-04-15T12:52:08Z',
            url: 'https://soundcloud.com/korsakovmusic/sovryn-obelisk',
          },
        ],
        reposts: [
          {
            published: '2022-06-27T16:02:17Z',
            title: 'Phibes - Upside down [OUT NOW]',
            url: 'https://soundcloud.com/phibes/phibes-upside-down',
          },
          {
            published: '2021-10-14T17:13:08Z',
            title: 'Phibes - Like Whoa (Out Now)',
            url: 'https://soundcloud.com/phibes/phibes-like-whoa',
          },
          {
            title:
              'Sleep Less Generation on Radio Fro . Ft Elmar From Korsakov Music- Creatures -& Zubs',
            url: 'https://soundcloud.com/sleep-less-records-uk/sleep-less-generation-on-radio-fro-show-ft-elmar-korsakov-creatures-zubs',
            published: '2021-05-05T08:43:39Z',
          },
          {
            title: 'Droptek - Devoid (Levela Remix)',
            published: '2020-11-16T14:14:02Z',
            url: 'https://soundcloud.com/skankandbass/devoid-levela-remix',
          },
          {
            published: '2020-11-16T20:45:26Z',
            url: 'https://soundcloud.com/clockvice/invoke-remix',
            title: 'Droptek - Invoke (Clockvice Remix)',
          },
          {
            url: 'https://soundcloud.com/billain/billain-codename',
            title: 'Billain - Codename',
            published: '2020-11-06T14:20:37Z',
          },
          {
            title: 'SPOKEN WORD (FORTHCOMING KORSAKOV MUSIC 23RD OCTOBER)',
            url: 'https://soundcloud.com/l3mmy-dubz/spoken-word-forthcoming-korsakov-music-23rd-october',
            published: '2020-10-09T16:27:18Z',
          },
          {
            published: '2020-06-11T14:49:41Z',
            title: 'Droptek - Minutiae (InsideInfo Remix)',
            url: 'https://soundcloud.com/skankandbass/minutiae-insideinfo-remix',
          },
          {
            published: '2020-05-27T16:54:42Z',
            url: 'https://soundcloud.com/districtbassmusic/prfct-mandem-oscillation',
            title: 'PRFCT Mandem - Oscillation',
          },
          {
            url: 'https://soundcloud.com/akovmusic/altered-carbon-korsakov-music',
            published: '2020-03-30T13:18:36Z',
            title: 'Altered Carbon [Korsakov Music]',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/korsakovmusic/crcle-love-survives',
            title: 'C:rcle - Love Survives',
            published: '2022-11-08T23:29:56Z',
          },
          {
            title: 'Protostar - Into Dark ft. MYLK',
            published: '2022-10-26T21:23:20Z',
            url: 'https://soundcloud.com/korsakovmusic/protostar-into-dark-ft-mylk',
          },
          {
            published: '2022-09-23T07:21:42Z',
            url: 'https://soundcloud.com/korsakovmusic/mylen-heartslocked',
            title: 'Mylen - Hearts Locked',
          },
          {
            published: '2021-12-09T21:20:36Z',
            title: 'AL/SO & CLIQUES. - Feck Off',
            url: 'https://soundcloud.com/korsakovmusic/also-cliques-feck-off',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/korsakovmusic/phibes-forever',
        'https://soundcloud.com/korsakovmusic/icu-remedy-1',
        'https://soundcloud.com/korsakovmusic/protostar-into-dark-ft-mylk',
        'https://soundcloud.com/korsakovmusic/drop-em',
        'https://soundcloud.com/korsakovmusic/crcle-love-survives',
      ],
      name: 'Korsakov Music',
      id: 'ICBfiQ7Tk2S9tOA4M3Gu',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000390746748-9wvhai-t500x500.jpg',
      artists: [],
      followers: 13598,
      link: 'https://soundcloud.com/integralrecords',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-11-15T11:04:51Z',
      lastScraped: 1668963195435,
      tracks: {
        reposts: [
          {
            published: '2022-11-15T11:04:51Z',
            title: 'Artificial Intelligence - Metalheadz Promo Mix - Brighton, 18 November 2022',
            url: 'https://soundcloud.com/metalheadz/artificial-intelligence-metalheadz-promo-mix-brighton-18-november-2022',
          },
          {
            published: '2022-09-20T21:33:56Z',
            url: 'https://soundcloud.com/drumandbassarena/zero-t-steo-stopstart',
            title: 'Zero T & Steo - Stop/Start',
          },
          {
            published: '2022-09-02T11:18:12Z',
            url: 'https://soundcloud.com/tatoraworld/tatora-studio-mix-2',
            title: 'Tatora - Studio Mix 2',
          },
          {
            title: 'Tatora - Ashes',
            published: '2022-07-08T07:39:40Z',
            url: 'https://soundcloud.com/drumandbassarena/tatora-ashes',
          },
          {
            title: 'Tatora - FWM [Premiere]',
            url: 'https://soundcloud.com/wearestudio/tatora-fwm-premiere',
            published: '2022-07-07T08:23:36Z',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/tatora-kaloa-eyes-closed',
            title: 'Tatora & KALOA - Eyes Closed',
            published: '2022-07-05T12:53:37Z',
          },
          {
            published: '2022-06-23T16:43:55Z',
            url: 'https://soundcloud.com/tatoraworld/eyes-closed-wkaloa',
            title: 'Eyes Closed w/KALOA',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/tz-stay-in-touch-ft-tatora',
            published: '2022-06-03T10:43:55Z',
            title: 'TZ - Stay in Touch (ft. Tatora)',
          },
          {
            published: '2022-05-31T10:49:41Z',
            title: 'TZ & Edlan - Blue Waters',
            url: 'https://soundcloud.com/skankandbass/tz-edlan-blue-waters',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/tz-native-integral-records',
            published: '2022-05-27T12:02:04Z',
            title: "TZ 'Native' [Integral Records]",
          },
        ],
        recent: [
          {
            title: 'HLZ - Orbit',
            url: 'https://soundcloud.com/integralrecords/hlz-orbit-ten-eight-seven-mastered',
            published: '2021-12-10T17:20:41Z',
          },
          {
            url: 'https://soundcloud.com/integralrecords/1-tatora-faded-mastered',
            published: '2020-12-14T08:37:35Z',
            title: '1. Tatora - Faded - (Liquicity Premiere)',
          },
          {
            title: '3. Tatora - Nightmares',
            published: '2020-12-14T07:29:52Z',
            url: 'https://soundcloud.com/integralrecords/3-tatora-nightmares-mastered',
          },
          {
            published: '2020-12-07T09:36:41Z',
            url: 'https://soundcloud.com/integralrecords/integral-records-present-ai-1-exclusive-mix-for-bbcr1-wind-down-series',
            title: "Integral Records Present - AI - 'Exclusive Mix for BBCR1 Wind Down Series'",
          },
          {
            published: '2020-11-04T20:32:03Z',
            title: 'Fluidity - Still Hope (UKF Premiere live now)',
            url: 'https://soundcloud.com/integralrecords/fluidity-still-hope-teaser',
          },
          {
            published: '2020-02-25T11:37:55Z',
            title: 'Mosaic - These Games(Radio 1 Premiere)GLOW/5 VA',
            url: 'https://soundcloud.com/integralrecords/mosaic-these-games-radio-1-premiere',
          },
          {
            url: 'https://soundcloud.com/integralrecords/macca-loz-contreras-you-were-mine-ukf-premiere',
            published: '2020-02-18T12:59:51Z',
            title: "Macca & Loz Contreras - 'You Were Mine' UKF PREMIERE",
          },
          {
            title: "Edlan & Djah - 'Replay' Radio 1 Premiere",
            published: '2019-12-04T15:01:37Z',
            url: 'https://soundcloud.com/integralrecords/edlan-djah-r1-premiere',
          },
          {
            published: '2019-10-30T12:03:02Z',
            url: 'https://soundcloud.com/integralrecords/ai-inwards',
            title: "Artificial Intelligence - Inwards (Forthcoming on 'The Outtakes')",
          },
          {
            published: '2019-10-24T18:58:48Z',
            title: 'Artificial Intelligence - Even Though (OUTTAKES) UKF PREMIERE',
            url: 'https://soundcloud.com/integralrecords/artificial-intelligence-even-though-outtakes-ukf-premiere',
          },
        ],
        popular: [
          {
            published: '2018-02-06T09:28:04Z',
            url: 'https://soundcloud.com/integralrecords/mohican-sun-living-this-way-radio-1-tune-of-the-week',
            title: 'Mohican Sun - Living This Way - R1 Tune Of The Week',
          },
          {
            title: 'Dawn Wall - Shy',
            published: '2017-11-08T10:51:54Z',
            url: 'https://soundcloud.com/integralrecords/dawn-wall-shy',
          },
          {
            title: 'Dawn Wall - Lose Face (Radio 1 Friction RIP)',
            published: '2015-12-17T12:34:13Z',
            url: 'https://soundcloud.com/integralrecords/dawan-wall-lose-face-radio-1-friction-rip',
          },
          {
            title: 'Dawn Wall - Lemon Dogs - Radio 1  Premiere',
            url: 'https://soundcloud.com/integralrecords/dawn-wall-lemon-dogs-radio-1-premiere',
            published: '2017-10-23T09:24:09Z',
          },
          {
            title: 'Artificial Intelligence - Even Though (OUTTAKES) UKF PREMIERE',
            url: 'https://soundcloud.com/integralrecords/artificial-intelligence-even-though-outtakes-ukf-premiere',
            published: '2019-10-24T18:58:48Z',
          },
          {
            url: 'https://soundcloud.com/integralrecords/technimatic-lsb-rotary-motion-calibre-remix-radio-1',
            published: '2014-05-23T08:43:19Z',
            title: 'TECHNIMATIC & LSB - ROTARY MOTION - CALIBRE REMIX (RADIO 1)',
          },
          {
            url: 'https://soundcloud.com/integralrecords/macca-loz-contreras-you-were-mine-ukf-premiere',
            title: "Macca & Loz Contreras - 'You Were Mine' UKF PREMIERE",
            published: '2020-02-18T12:59:51Z',
          },
          {
            published: '2016-02-28T20:22:32Z',
            url: 'https://soundcloud.com/integralrecords/bad-blood-dawn-wall-radio-1',
            title: 'Bad Blood (Dawn Wall) Radio 1',
          },
          {
            url: 'https://soundcloud.com/integralrecords/phil-tangent-drawing-you-radio-1-exclusive',
            title: 'Phil Tangent - Drawing You -(Radio 1 Exclusive)',
            published: '2016-05-31T08:43:44Z',
          },
          {
            url: 'https://soundcloud.com/integralrecords/integral-records-present-ai-1-exclusive-mix-for-bbcr1-wind-down-series',
            title: "Integral Records Present - AI - 'Exclusive Mix for BBCR1 Wind Down Series'",
            published: '2020-12-07T09:36:41Z',
          },
          {
            published: '2016-07-26T07:56:03Z',
            url: 'https://soundcloud.com/integralrecords/dw-one-year-on-10min-minimix-limit',
            title: 'DW - One Year On (10min Minimix) - Studio Mix',
          },
          {
            published: '2017-09-14T10:06:08Z',
            url: 'https://soundcloud.com/integralrecords/heavyhearts',
            title: "Phil Tangent & Philth Present 'Phil:osophy' - Heavy Hearts - Radio 1 Premiere",
          },
          {
            title: '1. Tatora - Faded - (Liquicity Premiere)',
            url: 'https://soundcloud.com/integralrecords/1-tatora-faded-mastered',
            published: '2020-12-14T08:37:35Z',
          },
          {
            published: '2021-12-10T17:20:41Z',
            title: 'HLZ - Orbit',
            url: 'https://soundcloud.com/integralrecords/hlz-orbit-ten-eight-seven-mastered',
          },
          {
            url: 'https://soundcloud.com/integralrecords/philosophy-clouds-radio-1-prem-10-years-of-integral',
            published: '2017-12-06T12:16:35Z',
            title: 'Phil:osophy - Clouds - Radio 1 Prem (10 Years Of Integral)',
          },
          {
            title: 'Fluidity - Feeling Inside (Coming Soon) GLOW/3',
            url: 'https://soundcloud.com/integralrecords/fluidity-feeling-inside-coming-soon-glow3',
            published: '2019-01-28T13:00:37Z',
          },
          {
            url: 'https://soundcloud.com/integralrecords/ai-dreams-of-freedom-radio1',
            title: 'AI - Dreams Of Freedom (Radio1)',
            published: '2016-11-16T11:55:42Z',
          },
          {
            url: 'https://soundcloud.com/integralrecords/3-tatora-nightmares-mastered',
            title: '3. Tatora - Nightmares',
            published: '2020-12-14T07:29:52Z',
          },
          {
            title: 'Dawn Wall - Seeds Of Change (Teaser)',
            url: 'https://soundcloud.com/integralrecords/dawn-wall-seeds-of-change-teaser-1',
            published: '2015-08-28T09:29:48Z',
          },
          {
            published: '2018-12-05T17:17:34Z',
            url: 'https://soundcloud.com/integralrecords/phil-tangent-universal-sigh-ukf-premiere',
            title: 'Phil Tangent - Universal Sigh - UKF PREMIERE',
          },
          {
            title: 'Dawn Wall - Saigon Blaze (Teaser)Digital Exclusive',
            published: '2015-06-19T07:58:40Z',
            url: 'https://soundcloud.com/integralrecords/dawn-wall-saigon-blaze-teaserdigital-exclusive',
          },
          {
            published: '2016-06-07T08:47:10Z',
            title: 'Phil Tangent - Illuminate (teaser)',
            url: 'https://soundcloud.com/integralrecords/phil-tangent-illuminate-teaser',
          },
          {
            published: '2019-12-04T15:01:37Z',
            title: "Edlan & Djah - 'Replay' Radio 1 Premiere",
            url: 'https://soundcloud.com/integralrecords/edlan-djah-r1-premiere',
          },
          {
            published: '2019-10-30T12:03:02Z',
            url: 'https://soundcloud.com/integralrecords/ai-inwards',
            title: "Artificial Intelligence - Inwards (Forthcoming on 'The Outtakes')",
          },
          {
            title: 'Satl - Midnight Moon - Radio 1 Premiere',
            url: 'https://soundcloud.com/integralrecords/satl-midnight-moon-radio-1-premiere',
            published: '2017-12-12T09:03:16Z',
          },
          {
            published: '2016-06-14T10:18:12Z',
            url: 'https://soundcloud.com/integralrecords/phil-tangent-as-much-as-i-can-take-teaser',
            title: 'Phil Tangent - As Much As I Can Take (teaser)',
          },
          {
            published: '2013-03-15T14:24:19Z',
            title: 'Zero T & Alix Perez - Dangerous Liaison (INT002)',
            url: 'https://soundcloud.com/integralrecords/dangerous-liaison-clip',
          },
          {
            published: '2016-08-26T10:38:48Z',
            title: 'Dawn Wall - Diplomatic (Teaser) Digital',
            url: 'https://soundcloud.com/integralrecords/dawn-wall-diplomatic-teaser',
          },
          {
            published: '2017-07-18T10:56:27Z',
            title: 'AI - True Colours (Radio 1 Premiere)',
            url: 'https://soundcloud.com/integralrecords/ai-true-colours-radio-1-premiere',
          },
          {
            published: '2014-07-14T15:34:41Z',
            url: 'https://soundcloud.com/integralrecords/technimatic-lsb-rotary-motion-calibre-alternative-mix-radio-1',
            title: 'Technimatic & LSB - Rotary Motion (Calibre Alternate Mix) Radio 1',
          },
        ],
      },
      name: 'Integral Records',
      id: 'LA78vPAeCGKZsGJ1LqPR',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-VRFLxm7AZ2zb5oK8-mAL3sA-t500x500.jpg',
      artists: ['Monrroe'],
      followers: 17080,
      link: 'https://soundcloud.com/soul-deep-recordings',
      notes: '',
      styles: ['Liquid', 'Vocal'],
      submission: 'info@souldeeprecordings.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-14T04:41:51Z',
      lastScraped: 1668963196845,
      tracks: {
        recent: [
          {
            title: "Treex - Movin' To Lille",
            url: 'https://soundcloud.com/soul-deep-recordings/treex-movin-to-lille',
            published: '2022-11-14T04:41:51Z',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/treex-liquid-punk',
            published: '2022-11-14T04:41:48Z',
            title: 'Treex - Liquid Punk',
          },
          {
            published: '2022-11-14T04:41:45Z',
            url: 'https://soundcloud.com/soul-deep-recordings/treex-trapped',
            title: 'Treex - Trapped',
          },
          {
            title: 'Treex - Dubbing To Lille',
            published: '2022-11-14T04:41:41Z',
            url: 'https://soundcloud.com/soul-deep-recordings/treex-dubbing-to-lille',
          },
          {
            title: 'Dub Defense - Tropical Dub',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-tropical-dub',
            published: '2022-08-15T20:46:20Z',
          },
          {
            published: '2022-08-15T20:46:17Z',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-age-dub',
            title: 'Dub Defense - Age Dub',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-dem-a-wonder',
            title: 'Dub Defense - Dem A Wonder',
            published: '2022-08-15T20:46:14Z',
          },
          {
            title: 'Dub Defense - Jupiter',
            published: '2022-08-15T20:46:11Z',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-jupiter',
          },
          {
            published: '2022-08-15T20:46:09Z',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-war-in-babylon',
            title: 'Dub Defense - War In Babylon',
          },
          {
            title: 'Skuff - Unbound Mystery',
            url: 'https://soundcloud.com/soul-deep-recordings/skuff-unbound-mystery',
            published: '2022-08-10T19:48:25Z',
          },
        ],
        reposts: [
          {
            published: '2022-07-09T07:01:25Z',
            title: 'Drum Force 1 - Falling Behind EP (Soul Deep Digital)',
            url: 'https://soundcloud.com/drumforce1/sets/drum-force-1-falling-behind-ep-soul-deep-digital',
          },
          {
            url: 'https://soundcloud.com/mystic-trip/sets/this-sound-ep',
            published: '2022-06-19T12:09:27Z',
            title: 'Mystic Trip - This Sound EP',
          },
          {
            url: 'https://soundcloud.com/phatplayaz/ncamargo-phat-playaz-take-care',
            title: 'NCamargo & Phat Playaz - Take Care - Forthcoming on Soul Deep.',
            published: '2022-06-09T20:32:12Z',
          },
          {
            published: '2022-03-27T17:16:12Z',
            title: 'Sounds of Soul Deep Show ft. Viewer - March 2022',
            url: 'https://soundcloud.com/scottallen/sounds-of-soul-deep-show-ft-viewer-march-2022',
          },
          {
            url: 'https://soundcloud.com/scottallen/scott-allen-sounds-of-soul-deep-mix-ft-blade-february-2022',
            published: '2022-02-21T16:03:34Z',
            title: 'Scott Allen - Sounds of Soul Deep Mix ft. Blade - February 2022',
          },
          {
            title: 'Nancy - Available on 31/01/22 on Soul Deep Exclusives',
            url: 'https://soundcloud.com/jrumhand/nancy',
            published: '2021-07-28T20:19:15Z',
          },
          {
            published: '2022-01-12T19:16:26Z',
            url: 'https://soundcloud.com/sesionesfm/sfm030-scott-allen',
            title: 'SFM030 - Scott Allen',
          },
          {
            title: 'Scott Allen - Sounds of Soul Deep Show  ft. Carter- December 2021',
            url: 'https://soundcloud.com/scottallen/scott-allen-sounds-of-soul-deep-show-ft-carter-december-2021',
            published: '2021-12-20T01:42:53Z',
          },
          {
            published: '2021-05-16T21:26:01Z',
            title: 'Scott Allen - Sounds of Soul Deep Show - May 2021',
            url: 'https://soundcloud.com/scottallen/scott-allen-sounds-of-soul-deep-show-may-2021-mastered',
          },
          {
            title: 'Scott Allen - Soul Deep vs Smooth N Groove - Feb. 2021',
            published: '2021-03-14T16:03:50Z',
            url: 'https://soundcloud.com/scottallen/scott-allen-sd-vs-sng-feb-2021',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/soul-deep-recordings/al-pack-back-when',
            title: 'Al Pack - Back When',
            published: '2016-02-07T17:07:47Z',
          },
          {
            title: 'LORDE - BRAVADO (KARAS & ZEN DUB BOOTLEG)(FREE TUNE!!)',
            url: 'https://soundcloud.com/soul-deep-recordings/lorde-bravado-karas-zen-dub-bootleg',
            published: '2014-12-23T21:33:28Z',
          },
          {
            title: 'Seba - Soul Deep vs Smooth N Groove - Feb. 2021',
            url: 'https://soundcloud.com/soul-deep-recordings/seba-soul-deep-vs-smooth-n-groove-feb-2021',
            published: '2021-03-01T19:56:45Z',
          },
          {
            published: '2014-01-10T05:38:50Z',
            title: 'Baby Bash feat. Frankie J - Suga Suga (HumaNature Bootleg Remix)',
            url: 'https://soundcloud.com/soul-deep-recordings/baby-bash-feat-frankie-j-suga',
          },
          {
            published: '2015-08-03T06:02:31Z',
            title: 'Degster - Falling Leaves',
            url: 'https://soundcloud.com/soul-deep-recordings/degster-falling-leaves',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-tropical-dub',
            title: 'Dub Defense - Tropical Dub',
            published: '2022-08-15T20:46:20Z',
          },
          {
            published: '2013-05-21T16:19:26Z',
            url: 'https://soundcloud.com/soul-deep-recordings/one-to-blame-clip-mp3',
            title:
              'Everything But the Girl - Blame (Silence Groove Bootleg) NOW AVAILABLE FOR FREE DOWNLOAD!!.mp3',
          },
          {
            title: 'Furney - Love Changes',
            url: 'https://soundcloud.com/soul-deep-recordings/furney-love-changes',
            published: '2022-05-17T01:33:16Z',
          },
          {
            published: '2021-11-22T18:50:24Z',
            title: 'Henry & Echo Motion - Another Wave',
            url: 'https://soundcloud.com/soul-deep-recordings/henry-echo-motion-another-wave',
          },
          {
            published: '2015-08-10T05:33:56Z',
            title: 'Spective - Ohh Baby',
            url: 'https://soundcloud.com/soul-deep-recordings/spective-ohh-baby',
          },
          {
            title: "Treex - Movin' To Lille",
            url: 'https://soundcloud.com/soul-deep-recordings/treex-movin-to-lille',
            published: '2022-11-14T04:41:51Z',
          },
          {
            title: 'Monrroe - Never Too Far',
            url: 'https://soundcloud.com/soul-deep-recordings/monrroe-never-too-far',
            published: '2016-02-01T00:08:24Z',
          },
          {
            published: '2022-11-14T04:41:48Z',
            title: 'Treex - Liquid Punk',
            url: 'https://soundcloud.com/soul-deep-recordings/treex-liquid-punk',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/walk-r-tee-j-something-about',
            published: '2018-08-04T19:18:18Z',
            title: 'Walk - R & TEE - J - Something About You (Silence Groove Remix)',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/treex-trapped',
            title: 'Treex - Trapped',
            published: '2022-11-14T04:41:45Z',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/ritual-succulent',
            published: '2021-09-19T18:09:19Z',
            title: 'Ritual - Succulent',
          },
          {
            published: '2020-08-06T05:47:14Z',
            url: 'https://soundcloud.com/soul-deep-recordings/madcap-soul-deep-vs-smooth-n-groove-artist-fundraiser-mix-1',
            title: 'Madcap - Soul Deep vs Smooth N Groove Artist Fundraiser Mix',
          },
          {
            title: 'Duoscience - Honey Lips',
            published: '2022-07-18T04:14:10Z',
            url: 'https://soundcloud.com/soul-deep-recordings/duoscience-honey-lips',
          },
          {
            title: 'Billie Eilish vs Insideman - Time To Die (VIP)',
            published: '2020-03-01T00:20:44Z',
            url: 'https://soundcloud.com/soul-deep-recordings/billie-eilish-vs-insideman-time-to-die-vip',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/furney-ever-love',
            title: 'Furney - Ever Love',
            published: '2022-05-17T01:33:12Z',
          },
          {
            published: '2022-08-15T20:46:17Z',
            title: 'Dub Defense - Age Dub',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-age-dub',
          },
          {
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-war-in-babylon',
            published: '2022-08-15T20:46:09Z',
            title: 'Dub Defense - War In Babylon',
          },
          {
            title: 'Dub Defense - Dem A Wonder',
            published: '2022-08-15T20:46:14Z',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-dem-a-wonder',
          },
          {
            title: 'Treex - Dubbing To Lille',
            url: 'https://soundcloud.com/soul-deep-recordings/treex-dubbing-to-lille',
            published: '2022-11-14T04:41:41Z',
          },
          {
            title: 'nCamargo - The Promised',
            url: 'https://soundcloud.com/soul-deep-recordings/ncamargo-the-promised-land',
            published: '2022-07-26T04:20:15Z',
          },
          {
            published: '2018-11-10T23:26:57Z',
            title: 'The House Crew - Super Hero (My Knight)(Furney Remix)',
            url: 'https://soundcloud.com/soul-deep-recordings/the-house-crew-super-hero-my-knightfurney-remix-1',
          },
          {
            published: '2022-08-15T20:46:11Z',
            title: 'Dub Defense - Jupiter',
            url: 'https://soundcloud.com/soul-deep-recordings/dub-defense-jupiter',
          },
          {
            title: 'Skuff - Meditation',
            published: '2022-08-10T19:48:22Z',
            url: 'https://soundcloud.com/soul-deep-recordings/skuff-meditation',
          },
          {
            published: '2022-05-30T19:25:58Z',
            url: 'https://soundcloud.com/soul-deep-recordings/marvel-cinema-illustrations',
            title: 'Marvel Cinema - Illustrations',
          },
          {
            published: '2021-11-22T18:50:15Z',
            url: 'https://soundcloud.com/soul-deep-recordings/henry-echo-motion-worth',
            title: 'Henry & Echo Motion - Worth Something',
          },
        ],
      },
      name: 'Soul Deep Recordings',
      widgets: [
        'https://soundcloud.com/soul-deep-recordings/henry-echo-motion-another-wave',
        'https://soundcloud.com/soul-deep-recordings/seba-soul-deep-vs-smooth-n-groove-feb-2021',
        'https://soundcloud.com/soul-deep-recordings/ritual-succulent',
      ],
      id: 'MbRE4BVI4wYrNFd7aQ3J',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-AjgNBz3G2SZcWk72-ltHlyQ-t500x500.jpg',
      artists: ['BCee', 'S.P.Y', 'Break'],
      followers: 39623,
      link: 'https://soundcloud.com/spearheadrecords',
      notes: '',
      styles: ['Liquid'],
      submission: 'https://spearheadrecords.label-engine.com/demos',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-10-11T16:23:25Z',
      lastScraped: 1668963198220,
      tracks: {
        reposts: [
          {
            published: '2022-09-29T22:31:51Z',
            url: 'https://soundcloud.com/drumandbassarena/bcee-charlotte-haining-emba-before-you-goddard-remix',
            title: 'BCee, Charlotte Haining & Emba - Before You (goddard. Remix)',
          },
          {
            published: '2022-09-03T11:41:44Z',
            url: 'https://soundcloud.com/drumandbassarena/lens-gun-point',
            title: 'Lens - Gun Point',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/bcee-charlotte-haining-emba-before-you-extended-mix',
            published: '2022-08-26T10:02:53Z',
            title: 'BCee, Charlotte Haining & Emba - Before You (Extended Mix)',
          },
          {
            title: 'Emba - Holding Back (ft. L.I.T.A.)',
            url: 'https://soundcloud.com/drumandbassarena/emba-holding-back-ft-lita',
            published: '2022-07-29T10:34:50Z',
          },
          {
            title: 'BCee - God Fixation',
            published: '2022-07-19T11:01:55Z',
            url: 'https://soundcloud.com/skankandbass/bcee-god-fixation',
          },
          {
            url: 'https://soundcloud.com/skankandbass/artsea-new-religion',
            title: 'Artsea - New Religion',
            published: '2022-05-25T14:01:00Z',
          },
          {
            published: '2022-01-04T15:27:27Z',
            url: 'https://soundcloud.com/ukf/bcee-catching-cairo-draco',
            title: 'BCee & Catching Cairo - Draco',
          },
          {
            url: 'https://soundcloud.com/millstreetdnb/lwl-ep-59-bcee-faith-raising-ducks-and-the-struggles-of-pressing-vinyls',
            title: 'LWL Ep. 59: Bcee - Faith, Raising Ducks and the Struggles of Pressing Vinyls',
            published: '2021-11-01T15:44:20Z',
          },
          {
            published: '2021-10-01T16:16:25Z',
            url: 'https://soundcloud.com/drumandbassarena/bcee-solah-spirals',
            title: 'BCee & Solah - Spirals',
          },
          {
            title: "Jolliffe 'Can This Be Real' Feat. Eckoes [Spearhead Records]",
            url: 'https://soundcloud.com/datatransmissiondnb/jolliffe-can-this-be-real-feat-eckoes-spearhead-records',
            published: '2021-09-15T11:12:44Z',
          },
        ],
        popular: [
          {
            published: '2013-06-21T23:06:55Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-back-to-the-street-feat',
            title: 'BCee - Back To The Street  feat. Philippa Hanna - Spearhead Records',
          },
          {
            title: 'Netsky - I Refuse (Shock One Remix) - Spearhead Records',
            published: '2010-05-11T21:37:29Z',
            url: 'https://soundcloud.com/spearheadrecords/netsky-i-refuse-shock-one-remix',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/bcee-charlotte-haining-tempza-in-the-moment-monrroe-remix-spearhead-records',
            title:
              'BCee, Charlotte Haining & Tempza - In The Moment (Monrroe Remix) - Spearhead Records',
            published: '2021-01-22T09:36:21Z',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/hybrid-minds-album-launch-promo-mix-november-2014',
            published: '2014-11-22T15:46:13Z',
            title: 'Hybrid Minds - Album Launch Promo Mix - November 2014',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/dexcell-ghost-notes-feat-emily-makis-spearhead-records',
            title: 'Dexcell - Ghost Notes feat. Emily Makis - Spearhead Records',
            published: '2020-03-20T10:25:19Z',
          },
          {
            title: 'BCee & Charlotte Haining - Remind Me (S.P.Y Remix)',
            published: '2021-04-09T07:14:21Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-charlotte-haining-remind-me-spy-remix',
          },
          {
            title: 'BCee - Morning Star (Break Remix) [NEST HQ Premiere]',
            published: '2016-11-30T20:17:42Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-morning-star-break-remix-nest-hq-premiere',
          },
          {
            title: '2 Villem & McLeod - Let It Breathe feat. Leo Wood [CLIP]',
            url: 'https://soundcloud.com/spearheadrecords/2-villem-mcleod-let-it-breathe',
            published: '2018-06-25T17:48:41Z',
          },
          {
            published: '2011-03-15T00:04:41Z',
            title:
              'BCee & S.P.Y. - Is Anybody Out There (Friction & K-Tee Remix) - Spearhead Records',
            url: 'https://soundcloud.com/spearheadrecords/bcee-s-p-y-is-anybody-out',
          },
          {
            published: '2010-05-23T18:31:12Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-s-p-y-is-anybody-out-there-spearhead-records',
            title: 'BCee & S.P.Y. - Is Anybody Out There? - Spearhead Records',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/bungle-the-siren-feat-ayah-1',
            title: 'Bungle - The Siren feat. Ayah Marar (Camo & Krooked Remix) - Spearhead Records',
            published: '2012-04-04T19:30:05Z',
          },
          {
            title: 'BCee - Surfacing feat. Lucy Kitchen (Radio 1 Clip)',
            published: '2017-07-18T10:04:14Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-surfacing-feat-lucy-kitchen-radio-1-clip',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/sunandbass-2022-bcee-charlotte-haining-tempza-la-cinta-beach',
            title: 'SUNANDBASS 2022 - BCee, Charlotte Haining & Tempza @ La Cinta Beach',
            published: '2022-10-11T16:23:25Z',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/bcee-tempza-in-the-moment-promo-mix-spearhead-records',
            published: '2020-05-28T13:03:23Z',
            title: "BCee & Tempza - 'In The Moment' Promo Mix - Spearhead Records",
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/villem-mcleod-degs-crossways-l-side-remix-spearhead-records',
            published: '2020-12-04T09:47:32Z',
            title: 'Villem, McLeod & Degs - Crossways (L-Side Remix) - Spearhead Records',
          },
          {
            title: 'LSB - Overthinking feat. Sian Sanderson - Spearhead Records',
            published: '2012-05-30T19:29:06Z',
            url: 'https://soundcloud.com/spearheadrecords/lsb-overthinking-feat-sian',
          },
          {
            published: '2013-06-02T19:37:00Z',
            url: 'https://soundcloud.com/spearheadrecords/hybrid-minds-halcyon-feat',
            title: 'Hybrid Minds - Halcyon feat. Grimm - Spearhead Records',
          },
          {
            title: 'BCee & Charlotte Haining - The Hills - Spearhead Records',
            published: '2020-07-17T09:39:15Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-charlotte-haining-the-hills-spearhead-records',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/bcee-bladerunner-fatal',
            published: '2012-08-30T22:01:17Z',
            title: 'BCee & Bladerunner - Fatal Attraction - Nu Directions',
          },
          {
            title: 'BCee - Is Anybody Out There Feat. SPY (The Vanguard Project Remix)',
            published: '2016-09-09T09:56:57Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-is-anybody-out-there-feat-spy-the-vanguard-project-remix',
          },
          {
            title: 'BCee - Cut Me Loose feat. Hybrid Minds & Rocky Nti - Spearhead Records',
            published: '2015-02-28T12:29:40Z',
            url: 'https://soundcloud.com/spearheadrecords/bcee-cut-me-loose-feat-hybrid',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/bcee-studio-mix-march-2013',
            title: 'BCee - Studio Mix March 2013',
            published: '2013-03-01T18:56:00Z',
          },
          {
            published: '2012-12-07T13:03:18Z',
            title: 'SPEARLTD015 - Hybrid Minds - Meant To Be - Spearhead Limited',
            url: 'https://soundcloud.com/spearheadrecords/spearltd015-hybrid-minds',
          },
          {
            title: 'LSB - All Of My Love (Technicolour & Komatic Remix) - Spearhead Records',
            published: '2012-05-30T18:59:35Z',
            url: 'https://soundcloud.com/spearheadrecords/lsb-all-of-my-love',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/bcee-cannot-escape-your-love-feat-lucy-grimble-clip',
            published: '2019-08-20T20:24:02Z',
            title: 'BCee - Cannot Escape Your Love feat. Lucy Grimble [CLIP]',
          },
          {
            title: 'Vector, Macca & Loz Contreras - Lose Myself feat. Charli Brix',
            published: '2017-06-08T21:40:06Z',
            url: 'https://soundcloud.com/spearheadrecords/vector-macca-loz-contreras',
          },
          {
            published: '2015-03-24T15:52:32Z',
            url: 'https://soundcloud.com/spearheadrecords/riya-fear-bites-feat-dynamite',
            title: 'Riya - Fear Bites feat. Dynamite MC, Villem & McLeod - Spearhead Records',
          },
          {
            published: '2018-02-14T11:35:07Z',
            title: 'BCee - Had It All Feat. Logistics (Monty Remix) [CLIP]',
            url: 'https://soundcloud.com/spearheadrecords/bcee-had-it-all-feat-logistics',
          },
          {
            title: 'Emba & Paper Dragon - State Of Flow',
            published: '2020-11-05T13:30:01Z',
            url: 'https://soundcloud.com/spearheadrecords/emba-paper-dragon-state-of-flow',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/spear081-2-bcee-little-bird',
            published: '2017-07-29T17:38:55Z',
            title: 'SPEAR081(2) - BCee - Little Bird [Clip]',
          },
        ],
        recent: [
          {
            title: 'SUNANDBASS 2022 - BCee, Charlotte Haining & Tempza @ La Cinta Beach',
            url: 'https://soundcloud.com/spearheadrecords/sunandbass-2022-bcee-charlotte-haining-tempza-la-cinta-beach',
            published: '2022-10-11T16:23:25Z',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/spear192-terror-lottie-woodward-come-as-you-are-spearhead-records',
            title: 'Terror & Lottie Woodward - Come As You Are - Spearhead Records',
            published: '2022-02-21T13:21:59Z',
          },
          {
            title: 'Lowr & Aleya Mae - Make The Most - Spearhead Records',
            published: '2022-02-21T13:24:55Z',
            url: 'https://soundcloud.com/spearheadrecords/spear194-lowr-aleya-mae-make-the-most-spearhead-records',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/spear195-terror-lottie-woodward-come-as-you-are-bcee-remix-spearhead-records',
            published: '2022-02-21T13:25:36Z',
            title: 'Terror & Lottie Woodward - Come As You Are (BCee Remix) - Spearhead Records',
          },
          {
            title: 'Artsea - New Religion - Future Retro',
            url: 'https://soundcloud.com/spearheadrecords/artsea-new-religion-ntm',
            published: '2022-05-04T14:36:39Z',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/artsea-in-spirit-ntm-mastered',
            published: '2022-05-04T14:36:40Z',
            title: 'Artsea - In Spirit - Future Retro',
          },
          {
            published: '2022-05-04T14:36:06Z',
            url: 'https://soundcloud.com/spearheadrecords/spear203-4-bert-h-sydney-bryce',
            title: 'Bert H & Sydney Bryce - Beauty Of The Opposite - Spearhead Records',
          },
          {
            published: '2022-05-04T14:36:07Z',
            url: 'https://soundcloud.com/spearheadrecords/spear203-3-bert-h-hiraeth',
            title: 'Bert H & Hiraeth - Loved & Lost - Spearhead Records',
          },
          {
            url: 'https://soundcloud.com/spearheadrecords/spear2031-bert-h-the-connection-spearhead-records',
            published: '2022-05-04T14:36:21Z',
            title: 'Bert H - The Connection - Spearhead Records',
          },
          {
            title: 'Lens - Feels Like - Spearhead Records',
            url: 'https://soundcloud.com/spearheadrecords/lens-feels-like-spearhead-records-17th-june',
            published: '2022-05-04T15:20:22Z',
          },
        ],
      },
      name: 'Spearhead Records',
      widgets: [
        'https://soundcloud.com/spearheadrecords/villem-mcleod-degs-crossways-l-side-remix-spearhead-records',
        'https://soundcloud.com/spearheadrecords/villem-mcleod-degs-crossways-l-side-remix-spearhead-records',
        'https://soundcloud.com/spearheadrecords/bcee-charlotte-haining-remind-me-spy-remix',
        'https://soundcloud.com/spearheadrecords/bcee-tempza-in-the-moment-promo-mix-spearhead-records',
      ],
      id: 'PHItM81MJJzBxCvZJ9OY',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-fg3pLj6Gg2D1o4kE-ma9MBw-t500x500.jpg',
      artists: ['Fred V', 'The Prototypes ', 'Grafix'],
      followers: 122685,
      link: 'https://soundcloud.com/viperrecordings',
      notes: '',
      styles: ['Dancefloor', 'Jump Up', 'Neurofunk', 'Vocal'],
      submission: 'https://www.labelradar.com/labels/viper/portal',
      songsSubmitted: ['Night & Day'],
      songsSkipped: ['Sunday Secrets'],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-11T11:16:32Z',
      lastScraped: 1668963199730,
      tracks: {
        popular: [
          {
            published: '2014-07-17T22:51:57Z',
            url: 'https://soundcloud.com/viperrecordings/the-prototypes-dont-let-me-go',
            title: "The Prototypes - Don't Let Me Go (feat. Amy Pearson)",
          },
          {
            url: 'https://soundcloud.com/viperrecordings/dossa-locuzzed-shag',
            title: 'Dossa & Locuzzed - Shag',
            published: '2016-09-27T21:49:31Z',
          },
          {
            published: '2012-07-28T18:01:38Z',
            url: 'https://soundcloud.com/viperrecordings/metrik-freefall-feat-reija-lee',
            title: 'Metrik - Freefall (feat. Reija Lee)',
          },
          {
            title: 'Blaine Stranger & Solomon France - Rewind ft Venjent [VPR280]',
            published: '2022-09-16T11:46:16Z',
            url: 'https://soundcloud.com/viperrecordings/blaine-stranger-solomon-france-rewind-ft-venjent-vpr280',
          },
          {
            title: 'Jack Mirror - With You ft. flowanastasia [VPR265]',
            url: 'https://soundcloud.com/viperrecordings/jack-mirror-with-you-ft-flowanastasia-vpr265',
            published: '2022-03-28T17:48:38Z',
          },
          {
            published: '2020-05-20T10:51:16Z',
            url: 'https://soundcloud.com/viperrecordings/jack-mirror-champion-oculus-vpr202',
            title: 'Jack Mirror & Champion - Oculus [VPR202]',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/the-prototypes-lights',
            published: '2014-02-07T07:18:07Z',
            title: 'The Prototypes - Lights',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/six-blade-amc-strangers',
            published: '2014-05-21T21:17:05Z',
            title: 'Six Blade & A.M.C - Strangers',
          },
          {
            title: 'Jack Mirror x Kove - Placebo [VPR276]',
            url: 'https://soundcloud.com/viperrecordings/jack-mirror-x-kove-placebo-vpr276',
            published: '2022-08-10T10:00:49Z',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/v-o-e-chemical-tr-tactics-remix',
            title: 'V O E - Chemical (TR Tactics Remix)',
            published: '2022-10-07T12:08:42Z',
          },
          {
            published: '2014-04-08T22:01:21Z',
            url: 'https://soundcloud.com/viperrecordings/insideinfo-metamorphosis-miss-trouble',
            title: 'InsideInfo - Metamorphosis (feat. Miss Trouble)',
          },
          {
            published: '2022-07-27T08:47:36Z',
            url: 'https://soundcloud.com/viperrecordings/axel-boy-ft-ruth-royall-oxygen-vpr275',
            title: 'Axel Boy ft. Ruth Royall - Oxygen [VPR275]',
          },
          {
            published: '2022-08-29T11:32:28Z',
            title: 'Futurebound presents Viper Radio: Episode 017',
            url: 'https://soundcloud.com/viperrecordings/futurebound-presents-viper-radio-episode-017',
          },
          {
            published: '2015-09-09T04:40:43Z',
            url: 'https://soundcloud.com/viperrecordings/ekko-sidetrack-alone-without-you',
            title: 'Ekko & Sidetrack - Alone Without You (feat. Samahra Eames)',
          },
          {
            title: 'Smooth - I Try [Free Download]',
            url: 'https://soundcloud.com/viperrecordings/smooth-i-try-free-download',
            published: '2012-11-21T08:04:39Z',
          },
          {
            published: '2014-02-09T20:47:28Z',
            title: 'The Prototypes - Pale Blue Dot',
            url: 'https://soundcloud.com/viperrecordings/the-prototypes-pale-blue-dot',
          },
          {
            title: 'Cyantific - Colour In The Shadows (feat. Benji)',
            url: 'https://soundcloud.com/viperrecordings/cyantific-colour-in-the-shadows',
            published: '2015-08-10T22:53:46Z',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/blvck-crowz-all-night-vpr278',
            published: '2022-08-26T09:08:19Z',
            title: 'BLVCK CROWZ - All Night [VPR278]',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/fred-v-grafix-just-a-thought-feat-reija-lee',
            published: '2012-03-19T00:56:11Z',
            title: 'Fred V & Grafix - Just A Thought (feat. Reija Lee) (Vocal Mix)',
          },
          {
            title: 'Cyantific - Bloodline feat Raphaella (Hybrid Minds Remix)',
            published: '2018-11-16T11:35:54Z',
            url: 'https://soundcloud.com/viperrecordings/cyantific-bloodline-feat-raphaella-hybrid-minds-remix',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/blvck-crowz-aktive-collide-vpr263',
            published: '2022-02-25T09:36:08Z',
            title: 'BLVCK CROWZ & AKTIVE - Collide [VPR263]',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/pop-it-off-feat-mad-hed-city',
            title: 'The Prototypes - Pop It Off (feat. Mad Hed City)',
            published: '2015-04-06T20:12:11Z',
          },
          {
            published: '2014-08-16T20:24:59Z',
            title: 'BBC 1Xtra D&B Soundclash (Viper vs Hospital vs Shogun vs Ram)',
            url: 'https://soundcloud.com/viperrecordings/bbc-1xtra-dnb-soundclash',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/futurebound-at-home',
            published: '2020-04-14T10:43:18Z',
            title: 'Futurebound At Home - 60 minute DnB mix via Amazon Music',
          },
          {
            title: 'Futurebound presents Viper Radio: Episode 018',
            published: '2022-09-30T09:53:55Z',
            url: 'https://soundcloud.com/viperrecordings/futurebound-presents-viper-radio-episode-018',
          },
          {
            title: 'V O E - Chemical (VIP)',
            url: 'https://soundcloud.com/viperrecordings/v-o-e-chemical-vip',
            published: '2022-10-07T11:55:47Z',
          },
          {
            title: 'Maduk - How Could You',
            url: 'https://soundcloud.com/viperrecordings/maduk-how-could-you',
            published: '2015-01-14T18:20:09Z',
          },
          {
            published: '2022-08-10T10:03:13Z',
            url: 'https://soundcloud.com/viperrecordings/dossa-locuzzed-stuff-vpr277',
            title: 'Dossa & Locuzzed - Stuff [VPR277]',
          },
          {
            published: '2013-02-21T21:23:30Z',
            title: 'Koven - More Than You (DC Breaks Remix)',
            url: 'https://soundcloud.com/viperrecordings/koven-more-than-you-dc-breaks',
          },
          {
            published: '2015-11-28T19:04:35Z',
            url: 'https://soundcloud.com/viperrecordings/north-base-what-r-u-doing-trei-remix',
            title: 'North Base & ISVK feat. Ragga Twins - What R U Doing? (Trei Remix)',
          },
        ],
        recent: [
          {
            published: '2022-11-11T11:16:32Z',
            url: 'https://soundcloud.com/viperrecordings/john-dee-x-blvck-crowz-on-my-mind-house-edit-vpr283',
            title: 'John Dee x BLVCK CROWZ - On My Mind (House Edit) [VPR283]',
          },
          {
            title: 'John Dee x BLVCK CROWZ - On My Mind (Original) [VPR283]',
            published: '2022-11-11T11:16:31Z',
            url: 'https://soundcloud.com/viperrecordings/john-dee-x-blvck-crowz-on-my-mind-original-vpr283',
          },
          {
            published: '2022-11-04T10:47:15Z',
            url: 'https://soundcloud.com/viperrecordings/john-dee-blvck-crowz-on-my-mind-upgrade-remixvpr283',
            title: 'John Dee & BLVCK CROWZ - On My Mind (Upgrade Remix)[VPR283]',
          },
          {
            published: '2022-10-28T12:01:00Z',
            title: 'Futurebound presents Viper Radio: Episode 019',
            url: 'https://soundcloud.com/viperrecordings/futurebound-presents-viper-radio-episode-019',
          },
          {
            published: '2022-10-28T09:28:44Z',
            url: 'https://soundcloud.com/viperrecordings/solomon-france-let-you-down-vpr282',
            title: 'Solomon France - Let You Down [VPR282]',
          },
          {
            title: 'V O E - Chemical (TR Tactics Remix)',
            published: '2022-10-07T12:08:42Z',
            url: 'https://soundcloud.com/viperrecordings/v-o-e-chemical-tr-tactics-remix',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/v-o-e-chemical-tadeleot-remix',
            title: 'V O E - Chemical (Tadeleot Remix)',
            published: '2022-10-07T12:06:05Z',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/v-o-e-chemical-synthetic-remix',
            title: 'V O E - Chemical (SYNTHETIC Remix)',
            published: '2022-10-07T12:02:48Z',
          },
          {
            url: 'https://soundcloud.com/viperrecordings/v-o-e-chemical-skrybe-remix',
            published: '2022-10-07T11:59:34Z',
            title: 'V O E - Chemical (Skrybe Remix)',
          },
        ],
        reposts: [
          {
            published: '2021-11-10T12:01:32Z',
            title: "Don't Tell Me",
            url: 'https://soundcloud.com/tallorderuk/dont-tell-me',
          },
          {
            title: "Solomon France - I'll Be Ready (feat. Alec Primavera)",
            url: 'https://soundcloud.com/solomonfranceofficial/sol-ill-be-ready-feat-alec-primavera',
            published: '2021-11-12T08:13:49Z',
          },
          {
            url: 'https://soundcloud.com/voeaus/fight-you-1',
            title: 'Fight You',
            published: '2021-08-18T16:36:30Z',
          },
          {
            title: 'Solomon France - Need You',
            published: '2021-09-03T06:24:55Z',
            url: 'https://soundcloud.com/solomonfranceofficial/sol-need-you',
          },
          {
            title: 'Bass Camp Guest Mix #044 - V O E',
            url: 'https://soundcloud.com/basscampldn/bass-camp-guest-mix-044-v-o-e',
            published: '2021-08-26T16:11:43Z',
          },
          {
            url: 'https://soundcloud.com/dossalocuzzed/in-the-booth-episode-3',
            title: 'In The Booth - Episode 3',
            published: '2021-08-20T18:31:14Z',
          },
          {
            published: '2021-08-03T10:44:36Z',
            url: 'https://soundcloud.com/skankandbass/dossa-locuzzed-prism',
            title: 'Dossa & Locuzzed - Prism',
          },
          {
            published: '2021-07-07T07:58:02Z',
            url: 'https://soundcloud.com/solomonfranceofficial/sol-let-it-out-feat-joshua-luke',
            title: 'Solomon France - Let It Out (feat. Joshua Luke)',
          },
          {
            title: 'In The Booth - Episode 2',
            published: '2021-07-02T17:12:46Z',
            url: 'https://soundcloud.com/dossalocuzzed/in-the-booth-episode-2',
          },
          {
            published: '2021-06-03T01:02:01Z',
            url: 'https://soundcloud.com/bassrush/blaine-stranger-ft-voicians-sirens-bassrush-premiere',
            title: 'Blaine Stranger ft. Voicians - Sirens [Bassrush Premiere]',
          },
        ],
      },
      name: 'Viper Recordings ',
      email: '',
      widgets: [
        'https://soundcloud.com/viperrecordings/jack-mirror-with-you-ft-flowanastasia-vpr265',
        'https://soundcloud.com/viperrecordings/blvck-crowz-all-night-vpr278',
        'https://soundcloud.com/viperrecordings/axel-boy-ft-ruth-royall-oxygen-vpr275',
        'https://soundcloud.com/viperrecordings/jack-mirror-x-kove-placebo-vpr276',
      ],
      id: 'QAKufuhTomI53L9knm8y',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000602550027-wno169-t500x500.jpg',
      artists: ['Subcurrent'],
      followers: 1748,
      link: 'https://soundcloud.com/srvlnc',
      notes: '',
      styles: ['Jump Up', 'Minimal', 'Neurofunk'],
      submission: 'srvlncmusic@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-08-26T13:04:30Z',
      lastScraped: 1668963201273,
      tracks: {
        recent: [
          {
            title: 'Jon Tho - Solitude (Subcurrent Remix)',
            url: 'https://soundcloud.com/srvlnc/jon-tho-solitude-subcurrent-remix',
            published: '2022-08-26T13:04:30Z',
          },
          {
            url: 'https://soundcloud.com/srvlnc/archaea-drz-granular',
            published: '2022-07-21T14:44:46Z',
            title: 'Archaea & DRZ - Granular',
          },
          {
            title: 'Kung - Heartbeat Racing',
            published: '2022-01-28T14:20:18Z',
            url: 'https://soundcloud.com/srvlnc/kung-heartbeat-racing',
          },
          {
            title: 'Rillium - Ether',
            url: 'https://soundcloud.com/srvlnc/rillium-ether',
            published: '2021-10-01T13:29:48Z',
          },
          {
            published: '2021-02-17T18:35:08Z',
            url: 'https://soundcloud.com/srvlnc/kit-jones-foretold-premiere',
            title: 'Kit Jones - Foretold',
          },
          {
            url: 'https://soundcloud.com/srvlnc/kit-jones-valeyard',
            title: 'Kit Jones - Valeyard',
            published: '2021-02-03T15:25:03Z',
          },
          {
            published: '2020-12-03T11:54:56Z',
            title: 'Exept & IHR - Neon Rising',
            url: 'https://soundcloud.com/srvlnc/exept-ihr-neon-rising',
          },
          {
            url: 'https://soundcloud.com/srvlnc/freshney-bloom-out-now',
            title: 'Freshney - Bloom (OUT NOW)',
            published: '2020-01-14T16:19:54Z',
          },
          {
            url: 'https://soundcloud.com/srvlnc/freshney-the-silence-out-now',
            title: 'Freshney - The Silence (OUT NOW)',
            published: '2020-01-14T16:19:00Z',
          },
          {
            url: 'https://soundcloud.com/srvlnc/freshney-dissonance-premiere',
            title: 'Freshney - Dissonance (OUT NOW)',
            published: '2020-01-12T18:56:08Z',
          },
        ],
        popular: [
          {
            title: 'Rillium - Ether',
            published: '2021-10-01T13:29:48Z',
            url: 'https://soundcloud.com/srvlnc/rillium-ether',
          },
          {
            url: 'https://soundcloud.com/srvlnc/archaea-drz-granular',
            title: 'Archaea & DRZ - Granular',
            published: '2022-07-21T14:44:46Z',
          },
          {
            published: '2022-08-26T13:04:30Z',
            title: 'Jon Tho - Solitude (Subcurrent Remix)',
            url: 'https://soundcloud.com/srvlnc/jon-tho-solitude-subcurrent-remix',
          },
          {
            published: '2019-10-04T12:52:30Z',
            url: 'https://soundcloud.com/srvlnc/disprove-am-i-out-now',
            title: 'Disprove - Am I (OUT NOW)',
          },
          {
            published: '2019-07-07T17:48:19Z',
            url: 'https://soundcloud.com/srvlnc/vowel-borderline',
            title: 'Vowel - Borderline',
          },
          {
            title: 'Freshney - Crank (OUT NOW)',
            published: '2020-01-07T15:17:33Z',
            url: 'https://soundcloud.com/srvlnc/freshney-crank-premiere',
          },
          {
            title: 'Exept & IHR - Neon Rising',
            published: '2020-12-03T11:54:56Z',
            url: 'https://soundcloud.com/srvlnc/exept-ihr-neon-rising',
          },
          {
            url: 'https://soundcloud.com/srvlnc/kit-jones-valeyard',
            title: 'Kit Jones - Valeyard',
            published: '2021-02-03T15:25:03Z',
          },
          {
            url: 'https://soundcloud.com/srvlnc/freshney-bloom-out-now',
            published: '2020-01-14T16:19:54Z',
            title: 'Freshney - Bloom (OUT NOW)',
          },
          {
            title: 'Kung - Heartbeat Racing',
            published: '2022-01-28T14:20:18Z',
            url: 'https://soundcloud.com/srvlnc/kung-heartbeat-racing',
          },
          {
            url: 'https://soundcloud.com/srvlnc/the-mime-out-now',
            title: 'Vowel - The Mime (OUT NOW)',
            published: '2019-11-25T15:26:24Z',
          },
          {
            published: '2019-11-20T16:32:30Z',
            url: 'https://soundcloud.com/srvlnc/vowel-mason-fervour-premiere',
            title: 'Vowel & Mason - Fervour (OUT NOW)',
          },
          {
            published: '2020-01-12T18:56:08Z',
            title: 'Freshney - Dissonance (OUT NOW)',
            url: 'https://soundcloud.com/srvlnc/freshney-dissonance-premiere',
          },
          {
            url: 'https://soundcloud.com/srvlnc/kit-jones-foretold-premiere',
            title: 'Kit Jones - Foretold',
            published: '2021-02-17T18:35:08Z',
          },
          {
            published: '2020-01-14T16:19:00Z',
            title: 'Freshney - The Silence (OUT NOW)',
            url: 'https://soundcloud.com/srvlnc/freshney-the-silence-out-now',
          },
          {
            title: "Disprove - Fool's Paradise (OUT NOW)",
            url: 'https://soundcloud.com/srvlnc/disprove-fools-paradise',
            published: '2019-10-04T12:52:31Z',
          },
          {
            published: '2019-07-07T17:48:23Z',
            url: 'https://soundcloud.com/srvlnc/mean-teeth-x-fragz-underpass',
            title: 'Mean Teeth x Fragz - Underpass',
          },
          {
            title: 'Screamarts - Emulate',
            published: '2019-06-30T16:54:25Z',
            url: 'https://soundcloud.com/srvlnc/screamarts-emulate-premiere',
          },
          {
            url: 'https://soundcloud.com/srvlnc/volatitle-cycle-beaky-blinder',
            published: '2019-07-07T17:48:15Z',
            title: 'Volatitle Cycle - Beaky Blinder',
          },
          {
            url: 'https://soundcloud.com/srvlnc/surveillance-broadcast-001-fragz-blast',
            title: 'Surveillance Broadcast 001 - Fragz & Blast',
            published: '2019-07-10T14:18:28Z',
          },
          {
            published: '2019-09-29T15:14:23Z',
            url: 'https://soundcloud.com/srvlnc/surveillance-broadcast-002-disprove',
            title: 'Surveillance Broadcast 002 - Disprove',
          },
        ],
        reposts: [
          {
            published: '2022-08-18T12:18:07Z',
            url: 'https://soundcloud.com/wearestudio/jon-tho-no-more-dj-ride-remix-premiere',
            title: 'Jon Tho - No More (DJ Ride Remix) [Premiere]',
          },
          {
            title: 'Jon Tho - In Silence (Circumference Remix) [Premiere]',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/jon-tho-in-silence-circumference-remix-premiere',
            published: '2022-08-16T15:59:40Z',
          },
          {
            published: '2022-08-10T16:57:01Z',
            title: 'Jon Tho - Sundials (Audio Remix) [Premiere]',
            url: 'https://soundcloud.com/wearestudio/jon-tho-sundials-audio-remix-premiere',
          },
          {
            published: '2022-07-11T22:30:30Z',
            url: 'https://soundcloud.com/all172things/sign-no-pleasure-responsibility-premiere',
            title: 'Sign - No Pleasure Responsibility [Premiere]',
          },
          {
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/subcurrent-drone-premiere',
            published: '2022-07-14T23:11:35Z',
            title: 'Subcurrent - Drone [Premiere]',
          },
          {
            published: '2022-07-15T23:15:06Z',
            title: 'PREMIERE: Intercept - Liberty [Surveillance Music]',
            url: 'https://soundcloud.com/officialdrumad/premiere-intercept-liberty-surveillance-music',
          },
          {
            title: 'Tryst Temps - Ultimatum [Rendah Mag Premiere]',
            published: '2022-07-18T20:57:20Z',
            url: 'https://soundcloud.com/rendahmag/tryst-temps-ultimatum-rendah-mag-premiere',
          },
          {
            title: 'Lavance - Ergo Sum',
            published: '2022-02-16T17:22:01Z',
            url: 'https://soundcloud.com/skankandbass/lavance-ergo-sum',
          },
          {
            published: '2022-01-10T00:45:11Z',
            url: 'https://soundcloud.com/skankandbass/kung-hued',
            title: 'Kung - Hued',
          },
          {
            published: '2021-09-21T13:43:09Z',
            title: 'Rillium - Control',
            url: 'https://soundcloud.com/skankandbass/rillium-control',
          },
        ],
      },
      name: 'Surveillance Music',
      widgets: [
        'https://soundcloud.com/srvlnc/rillium-ether',
        'https://soundcloud.com/srvlnc/archaea-drz-granular',
      ],
      id: 'SY5E2l4Hv2KTvgoujWbB',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-HbjGuUAPnzTbJ7gB-43pwow-t500x500.jpg',
      artists: [],
      followers: 112695,
      link: 'https://soundcloud.com/drumandbassarena',
      notes: "Can't find submission method ",
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-11-18T16:23:09Z',
      lastScraped: 1668963202929,
      tracks: {
        popular: [
          {
            title: 'Document One - LSD',
            published: '2018-06-05T11:26:50Z',
            url: 'https://soundcloud.com/drumandbassarena/document-one-lsd',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/bou-envy',
            title: 'Bou - Envy',
            published: '2019-10-07T16:57:47Z',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/amc-brazil',
            published: '2021-11-12T12:01:17Z',
            title: 'A.M.C - Brazil',
          },
          {
            published: '2022-09-29T22:31:51Z',
            title: 'BCee, Charlotte Haining & Emba - Before You (goddard. Remix)',
            url: 'https://soundcloud.com/drumandbassarena/bcee-charlotte-haining-emba-before-you-goddard-remix',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/bcee-charlotte-haining-emba-before-you-extended-mix',
            published: '2022-08-26T10:02:53Z',
            title: 'BCee, Charlotte Haining & Emba - Before You (Extended Mix)',
          },
          {
            published: '2022-09-13T16:32:56Z',
            url: 'https://soundcloud.com/drumandbassarena/koherent-collette-warren-red-lipstick',
            title: 'Koherent & Collette Warren - Red Lipstick',
          },
          {
            published: '2022-08-24T16:37:00Z',
            title: 'Operate & Madrush MC - One By One',
            url: 'https://soundcloud.com/drumandbassarena/operate-madrush-mc-one-by-one',
          },
          {
            title: 'Serum - Wave Riders',
            published: '2022-11-11T15:36:24Z',
            url: 'https://soundcloud.com/drumandbassarena/serum-wave-riders',
          },
          {
            title: 'Bou - Wine Ya B',
            url: 'https://soundcloud.com/drumandbassarena/bou-wine-ya-b',
            published: '2019-03-11T17:48:14Z',
          },
          {
            title: 'Simula & Bou - Lifeline (ft. Sydney)',
            url: 'https://soundcloud.com/drumandbassarena/simula-bou-lifeline-ft-sydney',
            published: '2019-06-14T11:48:36Z',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/azifm-scout-think-about-me',
            title: 'Azifm & Scout - Think About Me',
            published: '2022-06-29T09:03:08Z',
          },
          {
            published: '2020-06-18T16:19:36Z',
            title: "Gentleman's Dub Club x The Nextmen - Rudeboy ft. Gardna (Bish & Gray Remix)",
            url: 'https://soundcloud.com/drumandbassarena/gentlemans-dub-club-x-the-nextmen-rudeboy-ft-gardna-bish-gray-remix',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/jorja-smith-blue-lights-macca-loz-contreras-bootlegfree-download',
            published: '2017-09-15T12:09:42Z',
            title: 'Jorja Smith - Blue Lights (Macca & Loz Contreras Bootleg)(FREE DOWNLOAD)',
          },
          {
            title: 'BCee - The Great Scorer (Emba Remix)',
            url: 'https://soundcloud.com/drumandbassarena/bcee-the-great-scorer-emba-remix-1',
            published: '2022-08-25T16:32:25Z',
          },
          {
            title: "High Contrast & Bou - Don't Need You",
            published: '2021-11-26T14:16:12Z',
            url: 'https://soundcloud.com/drumandbassarena/high-contrast-bou-dont-need-you',
          },
          {
            title: 'Skylark - ESPADA',
            url: 'https://soundcloud.com/drumandbassarena/skylark-espada',
            published: '2022-10-18T10:18:08Z',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/amc-bass',
            published: '2021-06-24T11:26:34Z',
            title: 'A.M.C - Bass',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/mc-bassman-heavy-dark-serums-vip',
            published: '2019-02-25T12:15:57Z',
            title: "MC Bassman - Heavy & Dark (Serum's VIP)",
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/drumbassarena-podcast-016-w-salo-guest-mix',
            title: 'Drum&BassArena Podcast #016 w/ Salo Guest Mix',
            published: '2022-09-22T18:50:36Z',
          },
          {
            title: 'DLR - Roll With It',
            url: 'https://soundcloud.com/drumandbassarena/dlr-roll-with-it',
            published: '2022-10-10T07:53:24Z',
          },
          {
            title: 'LaMeduza & GROUND - Terra',
            url: 'https://soundcloud.com/drumandbassarena/lameduza-ground-terra',
            published: '2022-10-20T08:20:07Z',
          },
          {
            title: 'Particle - Fall 2 Fast',
            published: '2021-04-30T10:23:42Z',
            url: 'https://soundcloud.com/drumandbassarena/particle-fall-2-fast-1',
          },
          {
            title: 'Sully - 5ives',
            url: 'https://soundcloud.com/drumandbassarena/sully-5ives',
            published: '2021-08-05T16:57:31Z',
          },
          {
            published: '2022-08-11T16:22:18Z',
            title: 'Drum&BassArena Podcast #015 w/ Dogger Guest Mix',
            url: 'https://soundcloud.com/drumandbassarena/drumbassarena-podcast-015-w-dogger-guest-mix',
          },
          {
            title: 'Klinical - Together (ft. Shady Novelle)',
            published: '2022-08-02T15:59:02Z',
            url: 'https://soundcloud.com/drumandbassarena/klinical-together-ft-shady-novelle',
          },
          {
            published: '2019-07-03T16:18:51Z',
            title: 'Kanine - What I Said',
            url: 'https://soundcloud.com/drumandbassarena/kanine-what-i-said-1',
          },
          {
            title: 'OZOH - Sunless Sky (ft. GEAR)',
            url: 'https://soundcloud.com/drumandbassarena/ozoh-sunless-sky-ft-gear',
            published: '2022-08-28T11:35:07Z',
          },
          {
            published: '2022-08-27T13:31:51Z',
            title: 'Teej, Trex & Medic MC - Blackout',
            url: 'https://soundcloud.com/drumandbassarena/teej-trex-medic-mc-blackout',
          },
          {
            title: 'ZeroZero - Tracker',
            url: 'https://soundcloud.com/drumandbassarena/zerozero-tracker',
            published: '2022-09-22T21:30:57Z',
          },
          {
            published: '2022-10-05T09:43:19Z',
            url: 'https://soundcloud.com/drumandbassarena/host-eyes-ft-taurri',
            title: 'Høst - Eyes (ft. Taurri)',
          },
        ],
        recent: [
          {
            published: '2022-11-18T16:23:09Z',
            title: 'Ed:it - Evens',
            url: 'https://soundcloud.com/drumandbassarena/edit-evens',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/amc-dont-forget-the-dots-gydra-remix',
            published: '2022-11-18T11:21:19Z',
            title: "A.M.C - Don't Forget The Dots (Gydra Remix)",
          },
          {
            title: 'DSP - Index',
            published: '2022-11-17T14:03:27Z',
            url: 'https://soundcloud.com/drumandbassarena/dsp-index',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/housty-stella-high-contrast-remix',
            published: '2022-11-15T10:55:29Z',
            title: 'Housty - Stella (High Contrast Remix)',
          },
          {
            published: '2022-11-14T17:31:35Z',
            title: 'L-Side & Salo - Daydreaming (ft. MC Moose)',
            url: 'https://soundcloud.com/drumandbassarena/l-side-salo-daydreaming-ft-mc-moose',
          },
          {
            published: '2022-11-14T09:25:10Z',
            title: 'Constrict & Don Cirelli - Voyage',
            url: 'https://soundcloud.com/drumandbassarena/constrict-don-cirelli-voyage',
          },
          {
            title: 'Serum - Wave Riders',
            published: '2022-11-11T15:36:24Z',
            url: 'https://soundcloud.com/drumandbassarena/serum-wave-riders',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/was-a-be-up-to-you',
            title: 'Was A Be - Up To You',
            published: '2022-11-11T11:36:59Z',
          },
          {
            title: 'Rockwell & Novelist - Peak',
            published: '2022-11-10T18:20:10Z',
            url: 'https://soundcloud.com/drumandbassarena/rockwell-novelist-peak',
          },
        ],
        reposts: [
          {
            published: '2022-11-17T08:32:42Z',
            title: 'LaMeduza & Solace - Vento',
            url: 'https://soundcloud.com/overviewuk/lameduza-solace-vento',
          },
          {
            url: 'https://soundcloud.com/critical-music/waeys-x-unglued-take-2007',
            published: '2022-10-07T10:29:05Z',
            title: 'Waeys x Unglued - Take 2007',
          },
          {
            url: 'https://soundcloud.com/overviewuk/koherent-analog-roller',
            published: '2022-09-20T14:09:35Z',
            title: 'Koherent - Analog Roller',
          },
          {
            title: 'FR007',
            published: '2022-04-29T16:16:09Z',
            url: 'https://soundcloud.com/futureretrolondon/fr007',
          },
          {
            published: '2022-08-29T10:58:47Z',
            url: 'https://soundcloud.com/overviewuk/operate-grudges',
            title: 'Operate - Grudges',
          },
          {
            url: 'https://soundcloud.com/phace/phace-x-grey-code-e-linked-10',
            title: 'PHACE X GREY CODE - Ë - LINKED 10 [NEOSIGNAL]',
            published: '2022-08-19T12:13:44Z',
          },
          {
            url: 'https://soundcloud.com/overviewuk/klinical-lost-vanity',
            title: 'Klinical - Lost Vanity',
            published: '2022-08-10T12:19:44Z',
          },
          {
            published: '2022-07-22T11:53:11Z',
            url: 'https://soundcloud.com/1991_music/thinking-about-you',
            title: 'Thinking About You',
          },
          {
            published: '2022-06-23T11:53:32Z',
            url: 'https://soundcloud.com/skylark/klp-remembr-ft-hana-bens-skylark-remix',
            title: 'KL!P & Lafa  (feat. Hana Bens) - Remembr (Skylark Remix)',
          },
          {
            url: 'https://soundcloud.com/critical-music/halogenix-techy-ft-chimpo',
            title: 'Halogenix - Techy (ft. Chimpo)',
            published: '2022-05-27T09:45:01Z',
          },
        ],
      },
      email: '',
      name: 'Drum & Bass Arena',
      id: 'SqSSerOzLESTnhPL8OlA',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-D4UE1mPlkTnDGqkp-htt9uA-t500x500.jpg',
      artists: [],
      followers: 50061,
      link: 'https://soundcloud.com/thenorthquarter',
      notes: "Can't find submission method ",
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-11-17T15:52:07Z',
      lastScraped: 1668963204768,
      tracks: {
        reposts: [
          {
            title: "Satl 'Kamikaze' [The North Quarter]",
            url: 'https://soundcloud.com/datatransmissiondnb/satl-kamikaze-the-north-quarter',
            published: '2022-11-17T15:52:07Z',
          },
          {
            url: 'https://soundcloud.com/orbmag/premiere-satl-reality-check',
            title: 'Premiere: Satl - Reality Check',
            published: '2022-11-14T09:49:59Z',
          },
          {
            title: 'The North Quarter with Satl (Gloom LP Special) - 9th November 2022',
            url: 'https://soundcloud.com/rinsefm/thenorthquarter091122',
            published: '2022-11-10T09:59:06Z',
          },
          {
            url: 'https://soundcloud.com/rinsefm/thenorthquarter121022',
            published: '2022-10-13T13:04:30Z',
            title: 'The North Quarter with Redeyes Wonder Years EP Special -  12 October 2022',
          },
          {
            url: 'https://soundcloud.com/rinsefm/thenorthquarter140922',
            published: '2022-09-16T21:37:00Z',
            title: 'The North Quarter with Echo Brown - 14 September 2022',
          },
          {
            published: '2022-09-14T16:15:32Z',
            url: 'https://soundcloud.com/drumandbassarena/lenzman-redeyes-playing-it-off-ft-private-joy',
            title: 'Lenzman & Redeyes - Playing It Off (ft. Private Joy)',
          },
          {
            url: 'https://soundcloud.com/rinsefm/thenorthquarter100822',
            title: 'The North Quarter with Sam Binary the Reality Slip EP Special - 10 August 2022',
            published: '2022-08-14T18:23:06Z',
          },
          {
            title: 'The North Quarter with Submorphics - 13 July 2022',
            url: 'https://soundcloud.com/rinsefm/the-north-quarter-with-submorphics-13-july-2022',
            published: '2022-07-18T17:04:57Z',
          },
          {
            published: '2022-06-09T18:37:01Z',
            url: 'https://soundcloud.com/rinsefm/the-north-quarter-with-fd-8-june-2022',
            title: 'The North Quarter with FD - 8 June 2022',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/fd-double-drizzle',
            title: 'FD - Double Drizzle',
            published: '2022-06-09T11:00:14Z',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-11-lenzman-submophics-echobox-radio-010922',
            published: '2022-09-20T08:24:27Z',
            title: 'The North Quarter #11 - Lenzman & Submorphics // Echobox Radio 01/09/22',
          },
          {
            title:
              'The North Quarter #12 - Lenzman & Submorphics w/Redeyes Guest Mix // Echobox Radio 29/09/2022',
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-12-lenzman-submorphics-wredeyes-guest-mix-echobox-radio-29092022',
            published: '2022-10-18T09:54:38Z',
          },
          {
            published: '2016-11-14T15:02:39Z',
            title: 'Lenzman - In My Mind (feat. IAMDDB)',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-in-my-mind-feat-iamddb',
          },
          {
            published: '2015-12-23T10:50:12Z',
            title: 'Lenzman & Dan Stezo - The Dope Tape',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-dan-stezo-the-dope-tape',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/08-lenzman-in-my-mind-feat-iamddb-break-remix',
            published: '2020-03-24T09:13:26Z',
            title: 'Lenzman - In My Mind (feat. IAMDDB) (Break Remix)',
          },
          {
            published: '2015-02-03T11:14:06Z',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-dan-stezo-the-soul-tape',
            title: 'Lenzman & Dan Stezo - The Soul Tape',
          },
          {
            title: 'The North Quarter #10 - Lenzman & Submorphics // Echobox Radio 14/07/22',
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-10-lenzman-submorphics-echobox-radio-140722',
            published: '2022-07-29T11:08:37Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/lenzman-redeyes-wet-like-water',
            title: 'Lenzman & Redeyes - Wet Like Water',
            published: '2022-08-15T14:24:59Z',
          },
          {
            published: '2021-04-26T12:32:39Z',
            url: 'https://soundcloud.com/thenorthquarter/08-fox-walk-out-prod-dlr-alix-perez',
            title: 'Fox - Walk Out (prod. DLR & Alix Perez)',
          },
          {
            title: 'Redeyes Feat. [ K S R ] - A Thousand Times (Visages Remix)',
            published: '2021-10-28T08:21:13Z',
            url: 'https://soundcloud.com/thenorthquarter/redeyes-feat-k-s-r-a-thousand-times-visages-remix',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/children-of-zeus-still-standing-feat-drs-lenzman-remix',
            title: 'Children Of Zeus - Still Standing (feat. DRS) (Lenzman Remix)',
            published: '2016-08-23T16:37:51Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/redeyes-keep-on-feat-glxy-tyler-daley',
            title: 'Redeyes - Keep On (feat. GLXY & Tyler Daley)',
            published: '2017-07-09T14:35:13Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/redeyes-fox-nq-state-of-mind-vol-2',
            published: '2021-12-01T07:38:05Z',
            title: 'Redeyes & Fox - NQ State Of Mind, Vol. 2',
          },
          {
            title: 'Satl - Karma (feat. Frank H. Carter III)',
            published: '2022-09-19T08:03:25Z',
            url: 'https://soundcloud.com/thenorthquarter/satl-karma-feat-frank-carter-iii',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/lenzman-dan-stezo-the-boombox',
            title: 'Lenzman & Dan Stezo - The Boombox',
            published: '2017-12-07T09:50:56Z',
          },
          {
            title:
              'The North Quarter #13 - Lenzman & Submorphics w/ Satl Interview // Echobox Radio 27/10/2022',
            published: '2022-11-15T08:46:54Z',
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-13-lenzman-submorphics-w-satl-interview-echobox-radio-27102022',
          },
          {
            published: '2022-09-19T08:03:59Z',
            title: 'Satl - Standing By (feat. SAÍGO)',
            url: 'https://soundcloud.com/thenorthquarter/satl-standing-by-feat-saigo',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/05-satl-just-words',
            title: 'Satl - Just Words',
            published: '2020-08-05T14:08:07Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/lenzman-dan-stezo-nq-state-of-mind-vol-1',
            title: 'Lenzman & Dan Stezo - NQ State Of Mind, Vol. 1',
            published: '2020-11-22T13:13:11Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/sam-binary-for-real-feat-deviant',
            published: '2022-07-06T08:15:11Z',
            title: 'Sam Binary - For Real (feat. Deviant)',
          },
          {
            published: '2022-07-04T11:39:25Z',
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-9-submorphics-w-fd-guest-mix-echobox-radio-160622',
            title: 'The North Quarter #9 - Submorphics w/ FD Guest Mix // Echobox Radio 16/06/22',
          },
          {
            title: 'Lenzman & Dan Stezo - The Ensō Tape',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-dan-stezo-the-enso-tape',
            published: '2019-01-22T15:01:46Z',
          },
          {
            published: '2016-08-23T16:38:13Z',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-african-dream',
            title: 'Lenzman - African Dream',
          },
          {
            published: '2022-08-15T14:25:14Z',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-redeyes-busters',
            title: 'Lenzman & Redeyes - Busters',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/sam-binary-travelling-somewhere',
            title: 'Sam Binary - Travelling Somewhere',
            published: '2022-07-06T08:14:48Z',
          },
          {
            title: 'Lenzman & Redeyes - Dizzy Heights',
            url: 'https://soundcloud.com/thenorthquarter/lenzman-redeyes-dizzy-heights',
            published: '2022-08-15T14:25:00Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-6-lenzman-submorphics-w-tokyo-prose-guest-mix-echobox-radio-240322',
            published: '2022-04-11T17:47:33Z',
            title:
              'The North Quarter #6 - Lenzman & Submorphics w/ Tokyo Prose Guest Mix // Echobox Radio 24/03/22',
          },
          {
            published: '2022-05-12T07:42:02Z',
            title: 'The North Quarter #7 - Lenzman w/ Zero T Guest Mix // Echobox Radio 21/04/22',
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-7-lenzman-w-zero-t-guest-mix-echobox-radio-210422',
          },
          {
            title: 'Quarter 1: Lenzman',
            url: 'https://soundcloud.com/thenorthquarter/quarter-1-lenzman',
            published: '2020-05-06T18:48:22Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/sam-binary-teodoro-nights-feat-deviant',
            published: '2022-07-06T08:15:06Z',
            title: 'Sam Binary - Teodoro Nights (feat. Deviant)',
          },
        ],
        recent: [
          {
            published: '2022-09-19T08:03:38Z',
            url: 'https://soundcloud.com/thenorthquarter/satl-falling',
            title: 'Satl - Falling',
          },
          {
            published: '2022-09-19T08:05:46Z',
            title: 'Satl - Zmiana',
            url: 'https://soundcloud.com/thenorthquarter/satl-zmiana',
          },
          {
            title: 'Satl - Kamikaze',
            url: 'https://soundcloud.com/thenorthquarter/satl-kamikaze',
            published: '2022-09-19T08:03:29Z',
          },
          {
            title: 'Satl - UFO',
            published: '2022-09-19T08:04:11Z',
            url: 'https://soundcloud.com/thenorthquarter/satl-ufo',
          },
          {
            published: '2022-09-19T08:04:23Z',
            url: 'https://soundcloud.com/thenorthquarter/satl-rxde-or-dxe-pt-2-arp-xcx',
            title: 'Satl - Rxde Or Dxe, Pt. 2',
          },
          {
            title: 'Satl - Ride Or Die (feat. Rhi)',
            url: 'https://soundcloud.com/thenorthquarter/satl-ride-or-die-feat-rhi',
            published: '2022-09-19T08:04:37Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/satl-werk-it',
            published: '2022-09-19T08:05:03Z',
            title: 'Satl - Werk It',
          },
          {
            title: 'Satl - Hard Times',
            published: '2022-09-19T08:05:13Z',
            url: 'https://soundcloud.com/thenorthquarter/satl-hard-times',
          },
          {
            title: 'Satl - Frozen',
            url: 'https://soundcloud.com/thenorthquarter/satl-frozen',
            published: '2022-09-19T08:05:26Z',
          },
          {
            url: 'https://soundcloud.com/thenorthquarter/the-north-quarter-13-lenzman-submorphics-w-satl-interview-echobox-radio-27102022',
            published: '2022-11-15T08:46:54Z',
            title:
              'The North Quarter #13 - Lenzman & Submorphics w/ Satl Interview // Echobox Radio 27/10/2022',
          },
        ],
      },
      name: 'The North Quarter',
      id: 'TO3wJ3ayjjlD1CIViGTt',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-yC8OwfppcD359jwS-0aZBjg-t500x500.jpg',
      artists: ['DJ GAW', 'Sub Zero', 'Disrupta'],
      followers: 31500,
      link: 'https://soundcloud.com/onyx-recordings',
      notes: 'Not explicitly a demo box',
      styles: ['Jump Up', 'Vocal'],
      submission: 'info@onyxrecordings.co.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-10-30T17:38:09Z',
      lastScraped: 1668963206156,
      tracks: {
        recent: [
          {
            url: 'https://soundcloud.com/onyx-recordings/05-exile-gaw-turn-the-voume-on-ca-mastered',
            title: 'Exile & Gaw - Turn The Voume On',
            published: '2022-10-10T10:53:26Z',
          },
          {
            published: '2022-10-10T10:53:00Z',
            url: 'https://soundcloud.com/onyx-recordings/10-exile-feat-spyda-panja-people-ca-re-mastered',
            title: 'Exile Feat. Spyda - Panja People',
          },
          {
            published: '2022-10-10T10:52:56Z',
            url: 'https://soundcloud.com/onyx-recordings/12-exile-mark-xtc-shadows-ca-mastered',
            title: 'Exile & Mark XTC - Shadows',
          },
          {
            published: '2022-10-10T10:52:52Z',
            url: 'https://soundcloud.com/onyx-recordings/14-exile-feat-shady-novelle-deepening-ca-mastered',
            title: 'Exile Feat. Shady Novelle - Deepening',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/07-exile-feat-mc-whizzkid-intrigue-ca-mastered',
            published: '2022-10-10T10:52:36Z',
            title: 'Exile Feat. MC Whizzkid - Intrigue',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/08-exile-feat-madrush-mc-broken-beats-ca-mastered',
            title: 'Exile Feat. Madrush Mc - Broken Beats',
            published: '2022-10-10T10:52:32Z',
          },
          {
            title: 'Exile & Nicky Blackmarket - Rumba',
            published: '2022-10-10T10:52:24Z',
            url: 'https://soundcloud.com/onyx-recordings/09-exile-nicky-blackmarket-rumba-ca-mastered',
          },
          {
            published: '2022-10-10T10:52:16Z',
            url: 'https://soundcloud.com/onyx-recordings/11-exile-bennie-feat-mc-eksman-jmulla-foot-to-the-floor-ca-mastered',
            title: 'Exile & Bennie Feat. MC Eksman & JMulla - Foot To The Floor',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/15-exile-exd-deepening-ca-mastered',
            published: '2022-10-10T10:52:02Z',
            title: 'Exile - EXD - Deepening',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/04-exile-feat-collette-warren-trafic-mc-falling-down-ca-mastered',
            published: '2022-10-10T10:51:41Z',
            title: 'Exile Feat. Collette Warren & Trafic MC - Falling Down',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/onyx-recordings/gaw-dutchie-crossy-rework-free-download',
            published: '2020-03-24T15:14:52Z',
            title: 'GAW - Dutchie [Crossy Rework] (Free Download)',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/hoax-crowd-control-1',
            published: '2022-08-28T13:13:28Z',
            title: 'Hoax - Crowd Control',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/christian-rich-cactus-flowers-enigma-bootleg-free-download',
            title: 'Christian Rich - Cactus Flowers (Enigma Bootleg) [FREE DOWNLOAD]',
            published: '2022-08-03T07:50:45Z',
          },
          {
            title: "Jappa - Can't Run Away",
            published: '2018-11-29T20:02:42Z',
            url: 'https://soundcloud.com/onyx-recordings/jappa-cant-run-away',
          },
          {
            title: 'Sean Paul - Still In Love (AC13 Bootleg) - ONX010',
            published: '2018-10-04T16:52:37Z',
            url: 'https://soundcloud.com/onyx-recordings/sean-paul-still-in-love-ac13-bootleg-onx010',
          },
          {
            published: '2020-07-06T23:09:56Z',
            title: "Lost Girl - I Won't Give Up (Objectiv x Jappa Bootleg)[Free Download]",
            url: 'https://soundcloud.com/onyx-recordings/lost-girl-i-wont-give-up-objectiv-x-jappa-bootleg',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/hoax-nebula',
            published: '2022-08-28T13:13:23Z',
            title: 'Hoax - Nebula',
          },
          {
            published: '2022-01-31T11:45:30Z',
            url: 'https://soundcloud.com/onyx-recordings/sota-whiplash',
            title: 'Sota - Whiplash',
          },
          {
            title: 'Fugees - Fu-Gee-La (AC13 Bootleg) - ONX010',
            url: 'https://soundcloud.com/onyx-recordings/fugees-fu-gee-la-ac13-bootleg-onx010',
            published: '2018-10-04T16:52:39Z',
          },
          {
            title: 'DJ GAW - Dutchie (Free Download)',
            published: '2019-07-10T16:01:44Z',
            url: 'https://soundcloud.com/onyx-recordings/dj-gaw-dutchie-free-download',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/sota-drums',
            title: 'Sota - Drums',
            published: '2022-01-31T11:49:05Z',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/hoax-error-code',
            title: 'Hoax - Error Code',
            published: '2022-08-28T13:13:24Z',
          },
          {
            title: 'Aries b2b Kelvin 373 - Remote Mix 002',
            published: '2020-04-26T13:08:09Z',
            url: 'https://soundcloud.com/onyx-recordings/aries-b2b-kelvin-373-remote-mix-002',
          },
          {
            title: 'Exile & DJ Hybrid - Be Mine',
            published: '2022-10-18T04:57:45Z',
            url: 'https://soundcloud.com/onyx-recordings/exile-dj-hybrid-be-mine',
          },
          {
            published: '2022-08-28T13:13:21Z',
            url: 'https://soundcloud.com/onyx-recordings/hoax-promise-me',
            title: 'Hoax - Promise Me',
          },
          {
            title: 'Sota - Shawty (Sub Zero Remix)',
            published: '2022-01-31T11:47:10Z',
            url: 'https://soundcloud.com/onyx-recordings/sota-shawty-sub-zero-remix',
          },
          {
            title: 'Aaron Payne & Portrait - U Give',
            url: 'https://soundcloud.com/onyx-recordings/aaron-payne-portrait-u-give',
            published: '2022-09-23T09:24:40Z',
          },
          {
            published: '2020-01-23T07:57:34Z',
            url: 'https://soundcloud.com/onyx-recordings/onyx-sessions-018-disrupta',
            title: 'Onyx Sessions 018 - Disrupta',
          },
          {
            title: 'Adzzy - Yin',
            url: 'https://soundcloud.com/onyx-recordings/adzzy-yin-1',
            published: '2019-05-29T18:04:33Z',
          },
          {
            published: '2021-11-18T06:06:10Z',
            title: 'I Heard It Through The Grapevine (Muted Hue Jungle Flip)',
            url: 'https://soundcloud.com/onyx-recordings/i-heard-it-through-the-grapevine-muted-hue-jungle-flip',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/glm-x-banditt-arena-free-download',
            published: '2020-12-27T12:01:41Z',
            title: 'GLM X Banditt - Arena [Free Download]',
          },
          {
            title: 'KIPPO - Sun (feat. Freddie Skinz)',
            url: 'https://soundcloud.com/onyx-recordings/kippo-sunfeat-freddie-skinz',
            published: '2022-07-22T07:24:55Z',
          },
          {
            title: 'Supersonic (Muted Hue Jungle Flip) [Free Download]',
            published: '2021-07-05T10:41:25Z',
            url: 'https://soundcloud.com/onyx-recordings/supersonic-muted-hue-jungle-flip',
          },
          {
            title: 'Horde - Airframe',
            published: '2022-05-31T08:28:12Z',
            url: 'https://soundcloud.com/onyx-recordings/horde-airframe-v10-1644-ca-master',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/caitc-everything-you-say',
            title: 'CaitC - Everything You Say',
            published: '2022-05-10T10:46:25Z',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/mofes-x-disrupta-listen',
            title: 'Disrupta & Mofes - Listen (Out NOW)',
            published: '2021-09-14T14:29:19Z',
          },
          {
            published: '2021-02-02T19:50:52Z',
            title: 'Koffee - Blazin (Sudley x Thread Bootleg) [Free Download]',
            url: 'https://soundcloud.com/onyx-recordings/kofee-blazin-sudley-x-thread-bootleg',
          },
          {
            published: '2022-04-15T06:17:01Z',
            url: 'https://soundcloud.com/onyx-recordings/invert-era-becca-jane-grey-holding-me-under',
            title: 'Invert Era & Becca Jane Grey - Holding Me Under',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/refracta-take-me-for-a-ride-1',
            title: 'Refracta - Take Me For A Ride',
            published: '2022-05-11T10:13:53Z',
          },
          {
            url: 'https://soundcloud.com/onyx-recordings/hoax-big-up',
            published: '2021-06-22T09:07:53Z',
            title: 'Hoax - Big Up',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/exile-nc-17-pain',
            title: 'Exile & NC-17 - Pain',
            published: '2022-10-30T17:38:09Z',
          },
          {
            title: 'Exile & DJ Hybrid - Be Mine',
            published: '2022-10-12T08:24:40Z',
            url: 'https://soundcloud.com/skankandbass/exile-dj-hybrid-be-mine',
          },
          {
            published: '2022-09-09T16:42:40Z',
            url: 'https://soundcloud.com/skankandbass/subten-trex-lameduza-over-it',
            title: 'Subten, Trex & LaMeduza - Over It',
          },
          {
            published: '2022-08-09T23:42:52Z',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/lavance-feel-you-premiere',
            title: 'Lavance - Feel You [Premiere]',
          },
          {
            url: 'https://soundcloud.com/basiliskbass/lavance-phrenology',
            title: 'Lavance - Phrenology',
            published: '2022-08-10T09:31:14Z',
          },
          {
            published: '2022-08-09T05:44:06Z',
            title: 'Lavance - Mind Control [Premiere]',
            url: 'https://soundcloud.com/wearestudio/lavance-mind-control-premiere',
          },
          {
            title: 'Lavance - The Shimmer',
            url: 'https://soundcloud.com/skankandbass/lavance-the-shimmer',
            published: '2022-07-30T17:56:46Z',
          },
          {
            url: 'https://soundcloud.com/basiliskbass/kippo-never-lie',
            published: '2022-07-15T11:17:50Z',
            title: 'Kippo - Never Lie',
          },
          {
            title: 'VISION Radio S02E23 // Hosted by Martijn',
            url: 'https://soundcloud.com/visionrecordings/vision-radio-s02e23',
            published: '2022-06-08T13:42:07Z',
          },
          {
            url: 'https://soundcloud.com/base-culture/duke-dumont-let-me-go-muted-hue-remix',
            published: '2022-05-27T09:20:46Z',
            title: 'Duke Dumont - Let Me Go (Muted Hue Bootleg) [FREE DOWNLOAD]',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/onyx-recordings/hoax-crowd-control-1',
        'https://soundcloud.com/onyx-recordings/christian-rich-cactus-flowers-enigma-bootleg-free-download',
        'https://soundcloud.com/onyx-recordings/lost-girl-i-wont-give-up-objectiv-x-jappa-bootleg',
      ],
      name: 'Onyx Recordings',
      id: 'Tk4l76QmN6wFKTztKOat',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-GmmRITtaC5K8ztJs-tqGZJg-t500x500.jpg',
      artists: ['Interplanetary Criminal', 'Tim Reaper'],
      followers: 15989,
      link: 'https://soundcloud.com/banoffee-pies',
      notes: '',
      styles: ['Jungle'],
      submission: 'ell@banoffeepies.co.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-18T13:55:47Z',
      lastScraped: 1668963207918,
      tracks: {
        reposts: [
          {
            published: '2022-10-11T11:02:40Z',
            title: 'LAPSE002 - Len Lewis & Mariiin',
            url: 'https://soundcloud.com/lapserecords/sets/lapse002-len-lewis-mariiin',
          },
          {
            published: '2022-09-05T08:38:29Z',
            url: 'https://soundcloud.com/headroom_dance/sets/live-headroom-2022',
            title: 'Live @ Headroom 2022',
          },
          {
            published: '2021-06-17T12:25:30Z',
            title: 'Smoke & Mirrors Show w/ DJ Autumn',
            url: 'https://soundcloud.com/autumn-bpr/sets/smoke-and-mirrors-show',
          },
          {
            title: 'Pugilist - Illumination (STW Premiere)',
            published: '2022-02-08T15:07:24Z',
            url: 'https://soundcloud.com/stampthewax/pugilist-illumination',
          },
          {
            published: '2021-11-17T12:15:30Z',
            title: 'B2. Frankel & Harper - Madness Of Life',
            url: 'https://soundcloud.com/groove-magazin/b2-frankel-harper-madness-of-life',
          },
          {
            published: '2021-11-08T21:38:55Z',
            url: 'https://soundcloud.com/hurfyd/jeigo-bloom-banoffee-pies-disc-service',
            title: 'Jeigo - Bloom [Banoffee Pies Disc Service]',
          },
          {
            url: 'https://soundcloud.com/hearthug/hearthug-love-lesson-ft-fig-republic',
            title: 'PREMIERE: HearThuG - Love Lesson Ft. Fig Republic',
            published: '2021-10-11T20:13:46Z',
          },
          {
            title: 'OS Premiere: Euphonic - R.H.Y.T.H.M [Banoffee Pies Records]',
            url: 'https://soundcloud.com/originssound/os-premiere-euphonic-rhythm-banoffee-pies-records',
            published: '2021-09-14T08:25:05Z',
          },
          {
            title: 'XLR8R Podcast 710: DJ Autumn',
            published: '2021-08-24T18:16:30Z',
            url: 'https://soundcloud.com/xlr8r/xlr8r-podcast-710-dj-autumn',
          },
          {
            url: 'https://soundcloud.com/djmag/premiere-euphonic-space-in-my-soul-ft-neech',
            published: '2021-08-24T09:16:01Z',
            title: 'Premiere: Euphonic ‘Space In My Soul Ft. Neech’',
          },
        ],
        popular: [
          {
            title: 'PREMIERE: HearThuG - Planet Rhythm X',
            published: '2021-10-12T12:32:29Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-hearthug-planet-rhythm-x',
          },
          {
            published: '2022-09-02T11:12:14Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-koloah-pharaoh',
            title: 'PREMIERE: Koloah - Pharaoh',
          },
          {
            title: "Banana'Cast 43 ➤ Solid Blake",
            published: '2022-09-08T11:16:30Z',
            url: 'https://soundcloud.com/banoffee-pies/bananacast-43-solid-blake',
          },
          {
            title: 'PREMIERE: Paradise 3001 - Several Huge Yellow Snaplike Somethings',
            published: '2020-08-11T11:34:30Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-paradise-3001-several-huge-yellow-snaplike-somethings',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/club-paint-v2-cassius-select-clips',
            published: '2022-10-26T09:14:14Z',
            title: 'Club Paint V2. - Cassius Select (CLIPS)',
          },
          {
            title: 'PREMIERE: Tim Reaper & Comfort Zone - All The Time',
            url: 'https://soundcloud.com/banoffee-pies/premiere-tim-reaper-comfort-zone-all-the-time',
            published: '2021-06-18T09:27:52Z',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/premiere-hassan-abou-alam-kesibt-ft-shbl-lbsh',
            title: 'PREMIERE: Hassan Abou Alam -  Kesibt Ft. SHBL-LBSH',
            published: '2022-03-08T12:07:43Z',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/bp021-herman-unlocked-clips',
            title: 'BP021 - Herman - Unlocked - CLIPS',
            published: '2022-06-01T11:03:04Z',
          },
          {
            published: '2022-07-12T11:07:55Z',
            title: 'Koloah - Time Traveller (BPMISC02) CLIPS',
            url: 'https://soundcloud.com/banoffee-pies/koloah-time-traveller-bpmisc02-clips',
          },
          {
            title: 'BP018 - HearThuG - Planet Rhythm X - 12" CLIPS',
            published: '2021-09-01T11:01:44Z',
            url: 'https://soundcloud.com/banoffee-pies/bp018-hearthug-planet-rhythm-x-12-clips',
          },
          {
            published: '2022-09-02T11:11:48Z',
            title: 'PREMIERE: Koloah - Time Traveller',
            url: 'https://soundcloud.com/banoffee-pies/premiere-koloah-time-traveller',
          },
          {
            published: '2022-10-05T12:02:29Z',
            url: 'https://soundcloud.com/banoffee-pies/la-dame-zumbidos-bpmisc03-clips',
            title: 'La Dame - Zumbidos (BPMISC03) CLIPS',
          },
          {
            published: '2022-08-19T11:23:11Z',
            url: 'https://soundcloud.com/banoffee-pies/bananacast-42-hassan-abou-alam',
            title: "Banana'Cast 42 ➤ Hassan Abou Alam",
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/premiere-interplanetary-criminal-thats-all-folks',
            published: '2019-11-15T12:36:47Z',
            title: "PREMIERE: Interplanetary Criminal - That's All Folks",
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/premiere-jon-sable-light-transportation-ft-kroba',
            title: 'PREMIERE: Jon Sable - Light Transportation Ft Kroba',
            published: '2017-05-18T12:03:15Z',
          },
          {
            published: '2022-08-29T11:45:03Z',
            title: 'PREMIERE: Herman - Unlocked',
            url: 'https://soundcloud.com/banoffee-pies/premiere-herman-unlocked',
          },
          {
            title: "PREMIERE: Angel D'lite - CRYSTALZ",
            published: '2020-07-16T11:38:04Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-angel-dlite-crystalz',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/premiere-koloah-invisibility',
            title: 'PREMIERE: Koloah - Invisibility',
            published: '2022-09-02T11:12:54Z',
          },
          {
            title: 'PREMIERE: Herman - Solitary Breaks',
            published: '2022-08-29T11:45:41Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-herman-solitary-breaks',
          },
          {
            published: '2022-10-05T15:03:27Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-la-dame-non-ducor-duco',
            title: 'PREMIERE: La Dame - Non Ducor, Duco',
          },
          {
            published: '2022-02-15T12:03:03Z',
            title: 'BP020 - Hassan Abou Alam - Fasla - 12" CLIPS',
            url: 'https://soundcloud.com/banoffee-pies/bp020-hassan-abou-alam-fasla-12-clips',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/premiere-pugilist-future-retro',
            title: 'PREMIERE: Pugilist - Future Retro',
            published: '2022-02-04T09:44:02Z',
          },
          {
            title: "Banana'Cast 44 ➤ Vatsanah",
            url: 'https://soundcloud.com/banoffee-pies/bananacast-44-vatsanah',
            published: '2022-10-06T10:33:19Z',
          },
          {
            title: 'PREMIERE: Koloah - Retrocognition',
            published: '2022-09-02T11:12:33Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-koloah-retrocognition',
          },
          {
            published: '2022-08-29T11:45:52Z',
            title: 'PREMIERE: Herman - Gevangen',
            url: 'https://soundcloud.com/banoffee-pies/premiere-herman-gevangen',
          },
          {
            published: '2022-07-12T11:44:14Z',
            title: 'PREMIERE: Koloah - Pharaoh (Lost Dub Version) [bandcamp exclusive)',
            url: 'https://soundcloud.com/banoffee-pies/premiere-koloah-pharaoh-lost-dub-version-bandcamp-exclusive',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/bpre001-paradise-3001-low-sun-archives-12-clips',
            title: 'BPRE01 - Paradise 3001 - Low Sun Archives - 12" CLIPS',
            published: '2020-08-05T11:25:52Z',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/bpwl01-tim-reaper-comfort-zone-12-clips',
            title: 'BPWL01 - Tim Reaper & Comfort Zone - 12" CLIPS',
            published: '2021-05-26T11:12:54Z',
          },
          {
            title: 'PREMIERE: Herman - Echo Trip',
            url: 'https://soundcloud.com/banoffee-pies/premiere-herman-echo-trip',
            published: '2022-08-29T11:45:23Z',
          },
          {
            published: '2020-10-28T12:36:27Z',
            url: 'https://soundcloud.com/banoffee-pies/premiere-cassius-select-sicko-groove',
            title: 'PREMIERE: Cassius Select -  Sicko Groove',
          },
        ],
        recent: [
          {
            title: 'Smoke & Mirrors w/ DJ Autumn',
            url: 'https://soundcloud.com/banoffee-pies/smoke-mirrors-dj-autumn-november2022-radioraheem',
            published: '2022-11-18T13:55:47Z',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/smoke-mirrors-dj-autumn-october2022-radioraheem',
            published: '2022-10-28T09:21:07Z',
            title: 'Smoke & Mirrors w/ DJ Autumn',
          },
          {
            url: 'https://soundcloud.com/banoffee-pies/club-paint-v2-cassius-select-clips',
            title: 'Club Paint V2. - Cassius Select (CLIPS)',
            published: '2022-10-26T09:14:14Z',
          },
        ],
      },
      name: 'Banoffee Pies Records',
      widgets: [
        'https://soundcloud.com/banoffee-pies/bpwl01-tim-reaper-comfort-zone-12-clips',
        'https://soundcloud.com/banoffee-pies/premiere-pugilist-future-retro',
        'https://soundcloud.com/banoffee-pies/premiere-interplanetary-criminal-thats-all-folks',
      ],
      id: 'VI4R5OIk2Levyv9EUVaj',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000367648727-gp601z-t500x500.jpg',
      artists: ['Alcemist', 'Goddard', 'Mozey', 'Vibe Chemistry'],
      followers: 72243,
      link: 'https://soundcloud.com/dnballstars',
      notes: '',
      styles: ['Dancefloor', 'Vocal'],
      submission: 'dnballstars@hotmail.com',
      songsSubmitted: ['Night & Day', 'Stamina', "You Don't Know"],
      songsSkipped: ['Sunday Secrets', 'Now Hear This'],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-16T18:51:07Z',
      lastScraped: 1668963209168,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-balling-feat-songer-mr-traumatik-devilman-oneda',
            published: '2022-03-24T19:26:36Z',
            title: 'Vibe Chemistry - Balling (feat. Songer, Mr Traumatik, Devilman & Oneda)',
          },
          {
            title: 'Alcemist & Coco - Stan Smith',
            published: '2022-01-26T16:33:20Z',
            url: 'https://soundcloud.com/dnballstars/alcemist-coco-stan-smith',
          },
          {
            published: '2021-07-29T18:17:42Z',
            title: 'Vibe Chemistry - Balling',
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-balling',
          },
          {
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-baddest',
            title: 'Vibe Chemistry - Baddest',
            published: '2022-07-21T14:38:22Z',
          },
          {
            published: '2021-04-29T13:24:57Z',
            title: 'Goddard - Nicotine',
            url: 'https://soundcloud.com/dnballstars/goddard-nicotine',
          },
          {
            title: 'Mr Traumatik & Jamezy - Mi Familia     (Pre-Save)',
            published: '2022-09-28T00:21:22Z',
            url: 'https://soundcloud.com/dnballstars/mr-traumatik-jamezy-mi-familia',
          },
          {
            title:
              'Hedex & Skywalker - DnB Allstars at Printworks Halloween 2021 - Live From London (DJ Set)',
            published: '2021-11-16T19:16:05Z',
            url: 'https://soundcloud.com/dnballstars/hedex-skywalker-dnb-allstars-at-printworks',
          },
          {
            url: 'https://soundcloud.com/dnballstars/alcemist-sober-ft-mila-falls',
            published: '2022-08-02T10:02:34Z',
            title: 'Alcemist - Sober Ft. Mila Falls',
          },
          {
            url: 'https://soundcloud.com/dnballstars/traumatik-special-powers-ft-ego-trippin',
            title: 'Mr Traumatik - Special Powers Ft. Ego Trippin',
            published: '2022-06-23T11:35:35Z',
          },
          {
            title: 'Goddard - Prospa',
            published: '2020-12-10T23:57:47Z',
            url: 'https://soundcloud.com/dnballstars/goddard-prospa',
          },
          {
            published: '2022-03-23T22:29:54Z',
            title: 'Vibe Chemistry - Balling (Feat. Songer, Mr Traumatik, Devilman, Oneda)',
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-balling-feat-songer-traumatik-devilman-oneda',
          },
          {
            title: 'DNB Allstars Mix 008 w/ Kelvin 373',
            published: '2020-07-27T17:22:34Z',
            url: 'https://soundcloud.com/dnballstars/dnb-allstars-mix-008-w-kelvin-373',
          },
          {
            published: '2021-01-30T14:30:03Z',
            title: 'Tokyo Drift - Teriyaki Boyz (Bish Bootleg) [Free Download]',
            url: 'https://soundcloud.com/dnballstars/tokyo-drift-teriyaki-boyz-bish-bootleg-free-download',
          },
          {
            url: 'https://soundcloud.com/dnballstars/alcemist-gone',
            published: '2020-04-09T20:56:36Z',
            title: 'Alcemist - Gone',
          },
          {
            url: 'https://soundcloud.com/dnballstars/jamezy-osu-let-me-know',
            published: '2022-06-07T18:17:04Z',
            title: 'Jamezy & OSU - Let Me Know',
          },
          {
            title: 'Mollie Collins & Champion DI - Estate Of Mind',
            published: '2022-08-18T16:57:05Z',
            url: 'https://soundcloud.com/dnballstars/mollie-collins-champion-di-estate-of-mind',
          },
          {
            url: 'https://soundcloud.com/dnballstars/jungle-cakes-phibes-x-ed-solo-x-benny-page-x-deekline-dnb-allstars-at-printworks-dj-set',
            published: '2022-02-16T16:06:22Z',
            title:
              'Jungle Cakes (Phibes x Ed Solo x Benny Page x Deekline) - DnB Allstars at Printworks (DJ Set)',
          },
          {
            url: 'https://soundcloud.com/dnballstars/devilman-allstars-mic-dnb-allstars',
            published: '2021-11-25T00:49:15Z',
            title: 'Devilman - Allstars MIC | DnB Allstars',
          },
          {
            published: '2021-12-16T12:08:24Z',
            url: 'https://soundcloud.com/dnballstars/catch-22-what-i-need-tsuki-remix',
            title: 'Catch-22 - What I Need (Tsuki Remix)',
          },
          {
            title: 'Jamezy - Mi Familia',
            url: 'https://soundcloud.com/dnballstars/jamezy-mi-familia',
            published: '2022-10-20T15:47:05Z',
          },
          {
            published: '2021-12-01T13:14:36Z',
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-chasing',
            title: 'Vibe Chemistry - Chasing',
          },
          {
            published: '2020-05-21T20:20:29Z',
            title: 'Joely & Madrush MC - Backhand',
            url: 'https://soundcloud.com/dnballstars/joely-madrush-mc-backhand',
          },
          {
            url: 'https://soundcloud.com/dnballstars/alcemist-ej-kitto-the-plan',
            title: 'Alcemist & EJ Kitto - The Plan',
            published: '2020-07-30T22:43:38Z',
          },
          {
            url: 'https://soundcloud.com/dnballstars/j-hus-play-play-toby-ross-bootleg',
            published: '2021-01-09T16:13:35Z',
            title: 'J Hus - Play Play (Toby Ross Bootleg) [Free Download]',
          },
          {
            published: '2022-09-01T17:37:31Z',
            title: 'Mr Traumatik & Ego Trippin - Special Powers Ft. Devilman & Local [Remix]',
            url: 'https://soundcloud.com/dnballstars/mr-traumatik-ego-trippin-special-powers-ft-devilman-local-remix',
          },
          {
            url: 'https://soundcloud.com/dnballstars/mtox-evoke-listen-up',
            published: '2022-11-03T16:15:43Z',
            title: 'Mtox & Evoke - Listen Up',
          },
          {
            published: '2021-08-08T20:11:45Z',
            title: 'Aries & Crossy - DnB Allstars @ E1 2021 - Live From London (DJ Set)',
            url: 'https://soundcloud.com/dnballstars/aries-crossy-dnb-allstars-e1',
          },
          {
            url: 'https://soundcloud.com/dnballstars/alcemist-coco-stan-smith-radio-edit',
            published: '2022-02-08T21:15:09Z',
            title: 'Alcemist & Coco - Stan Smith (Radio Edit)',
          },
          {
            title: 'Vibe Chemistry - Gravity',
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-gravity',
            published: '2021-07-29T23:54:15Z',
          },
          {
            url: 'https://soundcloud.com/dnballstars/alcemist-us',
            title: 'Alcemist - Us',
            published: '2019-12-20T06:04:22Z',
          },
        ],
        reposts: [
          {
            published: '2022-09-22T16:51:19Z',
            url: 'https://soundcloud.com/nuformuk/monss-flute-2',
            title: 'Monss - Flute',
          },
          {
            published: '2019-08-09T12:21:07Z',
            title: 'Lunar VIP',
            url: 'https://soundcloud.com/turnodj/lunar-vip',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/dnballstars/the-sauce-spmc-dnb-allstars-at-here-2022-live-from-london-dj-set',
            title: 'The Sauce & SP:MC - DnB Allstars at Here 2022- Live from London (DJ SET)',
            published: '2022-11-16T18:51:07Z',
          },
          {
            url: 'https://soundcloud.com/dnballstars/bou-all-u-gotta-do-pre-save',
            title: 'Bou - All U Gotta Do (Pre-Save)',
            published: '2022-11-15T11:55:41Z',
          },
          {
            url: 'https://soundcloud.com/dnballstars/jamezy-world-cup-riddim-ft-azza-grima-devilman-local-tommy-b-nv',
            published: '2022-11-10T16:02:29Z',
            title: 'Jamezy - World Cup Riddim Ft Azza & Grima, Devilman, Local, Tommy B, NV',
          },
          {
            title:
              'Selecta J-Man B2B Benny Page B2B Kara W/Spyda- DnB Allstars at Here 2022- Live from London (DJ SET)',
            url: 'https://soundcloud.com/dnballstars/selecta-j-man-b2b-benny-page-b2b-kara-wspyda-dnb-allstars-at-here-2022-live-from-london-dj-set',
            published: '2022-11-04T15:21:16Z',
          },
          {
            url: 'https://soundcloud.com/dnballstars/mtox-evoke-listen-up',
            title: 'Mtox & Evoke - Listen Up',
            published: '2022-11-03T16:15:43Z',
          },
          {
            url: 'https://soundcloud.com/dnballstars/jamezy-mi-familia',
            published: '2022-10-20T15:47:05Z',
            title: 'Jamezy - Mi Familia',
          },
          {
            title: 'Millbrook - Daydreams (ft. Medyk)',
            url: 'https://soundcloud.com/dnballstars/millbrook-daydreams-ft-medyk',
            published: '2022-09-28T16:12:17Z',
          },
          {
            published: '2022-09-28T00:21:22Z',
            title: 'Mr Traumatik & Jamezy - Mi Familia     (Pre-Save)',
            url: 'https://soundcloud.com/dnballstars/mr-traumatik-jamezy-mi-familia',
          },
          {
            url: 'https://soundcloud.com/dnballstars/vibe-chemistry-baddest-ft-azza-grima-xxxx-xxxx',
            title: 'Vibe Chemistry - Baddest ft Azza & Grima & XXXX & XXXX (Pre-Save)',
            published: '2022-09-18T13:59:09Z',
          },
          {
            published: '2022-09-15T11:17:51Z',
            url: 'https://soundcloud.com/dnballstars/t95-emotions',
            title: 'T95 - Emotions',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/dnballstars/alcemist-coco-stan-smith',
        'https://soundcloud.com/dnballstars/vibe-chemistry-balling',
        'https://soundcloud.com/dnballstars/goddard-prospa',
        'https://soundcloud.com/dnballstars/joely-madrush-mc-backhand',
      ],
      email: '',
      name: 'DnB Allstars',
      id: 'Wmdyp0Izq4XJzE5mR8zr',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000670836392-v8afny-t500x500.jpg',
      artists: [],
      followers: 15847,
      link: 'https://soundcloud.com/elevaterecordsuk',
      notes: 'Submit via shogun audio',
      styles: [],
      submission: 'http://shogunaudio.label-engine.com/demos',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-11-18T10:29:46Z',
      lastScraped: 1668963210916,
      tracks: {
        popular: [
          {
            title: 'Macky Gee - Tour',
            url: 'https://soundcloud.com/elevaterecordsuk/macky-gee-tour',
            published: '2017-09-20T09:37:51Z',
          },
          {
            title: 'Ben Snow - Out In The Streets',
            published: '2019-10-22T10:48:17Z',
            url: 'https://soundcloud.com/elevaterecordsuk/ben-snow-out-in-the-streets',
          },
          {
            title: 'Friction - Set Me Free',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-set-me-free-m',
            published: '2021-11-22T12:56:00Z',
          },
          {
            published: '2022-05-11T11:26:29Z',
            url: 'https://soundcloud.com/elevaterecordsuk/turno-polarity-vip',
            title: 'Turno - Polarity V.I.P',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/subsonic-last-time',
            published: '2021-10-05T14:53:42Z',
            title: 'Subsonic - Last Time',
          },
          {
            title: 'Friction - Remember',
            published: '2022-08-01T12:07:28Z',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-remember-1',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-falling-down-ft-poppy-baskcomb-1',
            published: '2021-04-15T17:59:17Z',
            title: 'Friction - Falling Down (ft. Poppy Baskcomb)',
          },
          {
            published: '2017-07-12T20:30:36Z',
            title: 'Friction - Mad In The Jungle ft. Doctor',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-mad-in-the-jungle-ft-doctor',
          },
          {
            published: '2019-04-09T13:51:24Z',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-forever-dub-ft-kiko-bun-kanine-remix',
            title: 'Friction - Forever Dub (ft. Kiko Bun) (Kanine Remix)',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/subsonic-x-flowidus-come-around',
            title: 'Subsonic X Flowidus - Come Around',
            published: '2022-08-01T12:20:43Z',
          },
          {
            title: 'Sota - Harter Street',
            url: 'https://soundcloud.com/elevaterecordsuk/sota-harter-street',
            published: '2022-04-05T13:26:10Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/document-one-flute-ting',
            title: 'Document One - Flute Ting',
            published: '2022-04-01T07:46:40Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-vs-jonny-l-back-to-your-roots-2021-1',
            published: '2021-06-22T15:21:34Z',
            title: 'Friction vs Jonny L - Back To Your Roots 2021',
          },
          {
            title: 'Friction Ft. A Little Sound - Weed & Wine',
            published: '2022-06-23T11:25:48Z',
            url: 'https://soundcloud.com/elevaterecordsuk/weed-wine',
          },
          {
            title: 'Document One x A Little Sound - Back To Me',
            url: 'https://soundcloud.com/elevaterecordsuk/document-one-x-a-little-sound-back-to-me',
            published: '2022-01-31T17:56:15Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-jp-cooper-dancing-1',
            published: '2018-07-24T09:22:23Z',
            title: 'Friction & JP Cooper - Dancing (Dawn Wall Remix)',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/dux-n-bass-catch-my-love',
            title: 'Dux N Bass - Catch My Love (Feat. Ni.Co)',
            published: '2022-05-04T10:41:58Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-supersonic-1',
            title: 'Friction - Supersonic',
            published: '2022-09-23T10:22:17Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/freaks-geeks-pressure-feat-anastasia-louder-ten-eight-seven-mastered',
            title: 'Freaks & Geeks - Pressure  (Ft flowanastasia)',
            published: '2021-03-09T10:11:29Z',
          },
          {
            published: '2022-09-23T10:29:48Z',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-pola-bryson-into-the-night-ft-shells',
            title: 'Friction & Pola & Bryson - Into The Night (ft. SHELLS)',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/document-one-x-dynamite-mc-this-time',
            title: 'Document One x Dynamite MC - This Time',
            published: '2021-07-07T13:37:55Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-bring-it-back-ft-stylo-g-tantrum-desire-rmx',
            published: '2016-08-16T14:53:01Z',
            title: 'Friction - Bring It Back ft. Stylo G (Tantrum Desire RMX)',
          },
          {
            title: 'Friction - Running (Radio Edit)',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-running-radio-edit',
            published: '2017-10-20T13:09:12Z',
          },
          {
            published: '2021-07-16T09:35:17Z',
            title: 'Rusko - Mac 19',
            url: 'https://soundcloud.com/elevaterecordsuk/rusko-mac-19',
          },
          {
            title: 'Document One - Cheap Shot',
            url: 'https://soundcloud.com/elevaterecordsuk/document-one-cheap-shot',
            published: '2022-07-19T12:33:48Z',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-i-need-to-feel-ft-poppy-baskcomb',
            title: 'Friction - I Need To Feel (ft Poppy Baskcomb)',
            published: '2021-08-31T13:37:09Z',
          },
          {
            title: 'Freaks & Geeks - Freefalling',
            url: 'https://soundcloud.com/elevaterecordsuk/freaks-geeks-freefalling-presave',
            published: '2021-09-28T12:11:12Z',
          },
          {
            published: '2019-11-13T12:11:36Z',
            title: 'Friction - Good To Me',
            url: 'https://soundcloud.com/elevaterecordsuk/friction-good-to-me',
          },
          {
            url: 'https://soundcloud.com/elevaterecordsuk/friction-stinker-feat-riko-dan-tantrum-desire',
            title: 'Friction - Stinker (feat. Riko Dan & Tantrum Desire)',
            published: '2018-02-02T11:41:47Z',
          },
          {
            published: '2019-08-19T13:40:51Z',
            title: 'Killer Hertz - More ft. Raphaella',
            url: 'https://soundcloud.com/elevaterecordsuk/killer-hertz-more-ft-raphaella-1',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/est-studios/sounds-of-elevate-records-sample-pack-est005',
            title: 'Sounds Of: Elevate Records sample pack [EST005]',
            published: '2020-11-02T11:32:12Z',
          },
          {
            published: '2020-06-12T09:12:05Z',
            url: 'https://soundcloud.com/deadlinednb/bbc-radio-1-guest-mix',
            title: 'Deadline - BBC Radio 1 Guest Mix (June 2020)',
          },
          {
            title: 'Flowidus - Kids In The Club',
            url: 'https://soundcloud.com/drumandbassarena/flowidus-kids-in-the-club',
            published: '2019-06-21T11:24:07Z',
          },
          {
            url: 'https://soundcloud.com/flowidus/clarity-ft-emily-kendall',
            title: 'Clarity (Ft. Emily Kendall)',
            published: '2019-06-17T14:17:39Z',
          },
          {
            published: '2019-06-04T09:57:29Z',
            title: 'Compressor',
            url: 'https://soundcloud.com/flowidus/compressor',
          },
          {
            published: '2019-06-03T10:19:22Z',
            title: 'Disconnected EP',
            url: 'https://soundcloud.com/officialfriction/sets/disconnected-ep',
          },
          {
            published: '2019-06-04T09:57:29Z',
            title: 'Footsteps',
            url: 'https://soundcloud.com/flowidus/sets/footsteps',
          },
          {
            url: 'https://soundcloud.com/insomniacevents/track-of-the-day-flowidus-pocket-drop',
            published: '2019-02-22T18:09:08Z',
            title: 'Track of the Day: Flowidus “Pocket Drop”',
          },
          {
            published: '2019-02-21T18:45:01Z',
            url: 'https://soundcloud.com/turnodj/microwave-elevate-records',
            title: 'Microwave',
          },
          {
            title: 'DUBPLATE SOLDIER (OUT NOW!)',
            url: 'https://soundcloud.com/kaninednb/dubplate-soldier-out-now',
            published: '2019-02-12T19:47:13Z',
          },
        ],
        recent: [
          {
            title: 'Polygon - Hypnotize',
            published: '2022-11-18T10:29:46Z',
            url: 'https://soundcloud.com/elevaterecordsuk/polygon-hypnotize-1',
          },
          {
            title: 'Document One & Emily Makis - Tongue Tied',
            published: '2022-11-11T10:59:10Z',
            url: 'https://soundcloud.com/elevaterecordsuk/document-one-emily-makis-tongue-tied',
          },
        ],
      },
      name: 'Elevate Records',
      id: 'XS18BleBpjlmX55PrWZJ',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000619712157-xeizdc-t500x500.jpg',
      artists: ['Gray'],
      followers: 3889,
      link: 'https://soundcloud.com/desolaterecs',
      notes: '',
      styles: [],
      submission: 'desolatedemos@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2021-06-18T12:08:41Z',
      lastScraped: 1668963212213,
      tracks: {
        recent: [
          {
            url: 'https://soundcloud.com/desolaterecs/focal-tone-manifold',
            title: 'Focal Tone - Manifold',
            published: '2021-06-18T12:08:41Z',
          },
          {
            title: 'Immoral - Space',
            published: '2021-06-18T12:08:23Z',
            url: 'https://soundcloud.com/desolaterecs/immoral-space',
          },
          {
            title: 'Shiya & Vesper - I Can',
            published: '2021-06-18T12:08:10Z',
            url: 'https://soundcloud.com/desolaterecs/shiya-vesper-i-can',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/sypne-mechanical-spider',
            published: '2021-06-18T12:08:06Z',
            title: 'Spyne - Mechanical Spider',
          },
          {
            published: '2021-02-14T15:42:53Z',
            title: 'Enver & Kalliope - Reflections | Out now!',
            url: 'https://soundcloud.com/desolaterecs/reflections',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/notice',
            title: 'Enver - Notice | Out Now!',
            published: '2021-02-14T15:42:50Z',
          },
          {
            published: '2021-02-14T15:42:48Z',
            title: 'Enver & Shiya - Boxers | Out now!',
            url: 'https://soundcloud.com/desolaterecs/boxers',
          },
          {
            title: 'Enver & Gracy May - See you | Out Now!',
            published: '2021-02-14T15:42:45Z',
            url: 'https://soundcloud.com/desolaterecs/see-you',
          },
          {
            published: '2021-02-14T15:42:43Z',
            url: 'https://soundcloud.com/desolaterecs/one',
            title: 'Enver - One | Out now!',
          },
          {
            published: '2021-02-14T15:42:40Z',
            url: 'https://soundcloud.com/desolaterecs/architect',
            title: 'Enver - Architect | Out now!',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/desolaterecs/gray-fallen-ft-a-little-sound',
            published: '2020-02-20T18:18:23Z',
            title: 'Gray - Fallen Ft. A Little Sound | Out Now!',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/james-brown-i-feel-good-movin-whata-bootleg-free-download',
            title: 'James Brown - I Feel Good (Movin Whata - Bootleg)',
            published: '2018-12-07T18:28:08Z',
          },
          {
            title: 'Desolate Podcast VOL008 - SKAMR Dubplate Mix',
            published: '2019-08-01T16:26:57Z',
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol008-dubplate-mix-skamr',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/gray-soundboy-ft-joe-burn-clip',
            title: 'Gray - Soundboy Ft. Joe Burn | Out Now!',
            published: '2020-02-20T19:24:06Z',
          },
          {
            published: '2018-10-30T20:03:59Z',
            title: 'Dreamskape - No Light [Free Download]',
            url: 'https://soundcloud.com/desolaterecs/dreamskape-no-light',
          },
          {
            published: '2019-11-13T13:28:07Z',
            title: 'SKAMR - Money On My Mind | Out now!',
            url: 'https://soundcloud.com/desolaterecs/skamr-money-on-my-mind',
          },
          {
            title: 'Desolate Recordings | Shiya B2b Bodhi | | Tearout Winter Festival Entry mix',
            url: 'https://soundcloud.com/desolaterecs/desolate-recordings-shiya-b2b-bodhi-tearout-winter-festival-competition-entry',
            published: '2020-08-25T13:20:03Z',
          },
          {
            title: 'SKAMR - All I Wanna Do | Out now!',
            published: '2019-11-13T13:27:43Z',
            url: 'https://soundcloud.com/desolaterecs/skamr-all-i-wanna-do',
          },
          {
            published: '2018-11-20T17:54:10Z',
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol001-db-rollers-bodhi',
            title: 'Desolate Podcast VOL001 - Bodhi',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/sypne-mechanical-spider',
            published: '2021-06-18T12:08:06Z',
            title: 'Spyne - Mechanical Spider',
          },
          {
            published: '2021-06-18T12:08:23Z',
            title: 'Immoral - Space',
            url: 'https://soundcloud.com/desolaterecs/immoral-space',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/boxers',
            published: '2021-02-14T15:42:48Z',
            title: 'Enver & Shiya - Boxers | Out now!',
          },
          {
            title: 'Desolate Podcast VOL010 - Shiya',
            published: '2020-04-28T16:00:52Z',
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol010-shiya',
          },
          {
            title: 'Desolate Podcast VOL009 - Depth',
            published: '2020-02-05T17:19:16Z',
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-009-depth',
          },
          {
            published: '2021-06-18T12:08:10Z',
            url: 'https://soundcloud.com/desolaterecs/shiya-vesper-i-can',
            title: 'Shiya & Vesper - I Can',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/focal-tone-manifold',
            published: '2021-06-18T12:08:41Z',
            title: 'Focal Tone - Manifold',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol006-deep-dark-rollers-modulus',
            title: 'Desolate Podcast VOL006 - Modulus',
            published: '2019-04-09T17:08:32Z',
          },
          {
            published: '2021-02-14T15:42:53Z',
            title: 'Enver & Kalliope - Reflections | Out now!',
            url: 'https://soundcloud.com/desolaterecs/reflections',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/notice',
            title: 'Enver - Notice | Out Now!',
            published: '2021-02-14T15:42:50Z',
          },
          {
            title: 'Desolate Podcast VOL005 - Watzi',
            published: '2019-02-12T18:23:21Z',
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol005-rolling-drum-bass-watzi',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol004-drum-bass-in-sayn',
            published: '2019-01-29T17:47:12Z',
            title: 'Desolate Podcast VOL004 - In-Sayn',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/focal-tone-carbon-copy',
            published: '2019-05-29T17:53:14Z',
            title: 'Focal Tone - Carbon Copy [Free Download]',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol011-alx',
            published: '2020-07-01T16:16:15Z',
            title: 'Desolate Podcast VOL011 - ALX',
          },
          {
            title: 'Focal Tone - Hive Mind [Free Download]',
            published: '2019-05-29T17:52:29Z',
            url: 'https://soundcloud.com/desolaterecs/focal-tone-hive-mind',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/see-you',
            published: '2021-02-14T15:42:45Z',
            title: 'Enver & Gracy May - See you | Out Now!',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol003-dark-rollers-dreamskape',
            published: '2019-01-09T18:40:57Z',
            title: 'Desolate Podcast VOL003 - Dreamskape',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/desolate-podcast-vol007-dj-hideaway',
            published: '2019-04-23T17:49:39Z',
            title: 'Desolate Podcast VOL007 - DJ Hideaway',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/one',
            title: 'Enver - One | Out now!',
            published: '2021-02-14T15:42:43Z',
          },
          {
            url: 'https://soundcloud.com/desolaterecs/architect',
            title: 'Enver - Architect | Out now!',
            published: '2021-02-14T15:42:40Z',
          },
        ],
        reposts: [
          {
            published: '2021-01-26T17:32:37Z',
            url: 'https://soundcloud.com/shiya-desolate/dystopian-futures',
            title: 'dystopian futures.// DEEP D&B',
          },
          {
            title: 'DreamSkape - Golden Smile (Promo Clip)',
            published: '2020-04-15T08:58:57Z',
            url: 'https://soundcloud.com/lockdown-recordings-uk/dreamskape-golden-smile-promo-clip',
          },
          {
            published: '2019-04-05T15:35:31Z',
            url: 'https://soundcloud.com/bodhi-desolate/bodhi-bludclart-rollaz',
            title: 'Bodhi - Bludclart Rollaz',
          },
          {
            url: 'https://soundcloud.com/shiya-desolate/strictly-rollers-vol-3',
            published: '2019-06-19T18:13:00Z',
            title: 'Strictly Rollers Volume 3',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/desolaterecs/gray-fallen-ft-a-little-sound',
        'https://soundcloud.com/desolaterecs/sypne-mechanical-spider',
        'https://soundcloud.com/desolaterecs/boxers',
      ],
      name: 'Desolate Records',
      id: 'YBEssW57Y7j1jp1K741Z',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-vp4hXHcyYydvzV8x-QmC6Zw-t500x500.jpg',
      artists: [],
      followers: 2311,
      link: 'https://soundcloud.com/futureretrolondon',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-04-29T16:18:13Z',
      lastScraped: 1668963213483,
      tracks: {
        reposts: [],
        popular: [
          {
            url: 'https://soundcloud.com/futureretrolondon/fr007',
            title: 'FR007',
            published: '2022-04-29T16:16:09Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/crfr001',
            published: '2021-09-10T13:54:19Z',
            title: 'CRFR001',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/djfr001',
            published: '2022-04-29T16:18:13Z',
            title: 'DJFR001',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/submerged-into-darkness',
            title: 'Submerged Into Darkness [INTODARKNESS]',
            published: '2022-04-29T16:07:43Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/fr006',
            title: 'FR006',
            published: '2022-03-13T19:16:42Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/fr004',
            published: '2022-03-13T19:12:26Z',
            title: 'FR004',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/fr002',
            published: '2022-03-13T19:05:04Z',
            title: 'FR002',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/fr005',
            title: 'FR005',
            published: '2022-03-13T19:13:35Z',
          },
          {
            title: 'Meeting Of The Minds Vol. 8 [FRMOTM008]',
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-8-frmotm008',
            published: '2021-09-10T13:47:37Z',
          },
          {
            published: '2020-06-18T16:48:51Z',
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-2-frmotm002',
            title: 'Meeting Of The Minds Vol. 2 [FRMOTM002]',
          },
          {
            title: 'FR003',
            url: 'https://soundcloud.com/futureretrolondon/fr003',
            published: '2022-03-13T19:06:39Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-6-frmotm006',
            title: 'Meeting Of The Minds Vol. 6 [FRMOTM006]',
            published: '2021-06-03T17:35:04Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-1-frmotm001',
            title: 'Meeting Of The Minds Vol. 1 [FRMOTM001]',
            published: '2020-06-18T16:37:27Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-7-frmotm007',
            published: '2021-09-10T13:49:40Z',
            title: 'Meeting Of The Minds Vol. 7 [FRMOTM007]',
          },
          {
            published: '2021-09-10T13:51:25Z',
            url: 'https://soundcloud.com/futureretrolondon/fr001',
            title: 'FR001',
          },
          {
            title: 'SWRFR001',
            url: 'https://soundcloud.com/futureretrolondon/swrfr001',
            published: '2021-09-10T13:43:19Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-5-frmotm005',
            title: 'Meeting Of The Minds Vol. 5 [FRMOTM005]',
            published: '2021-06-03T17:29:56Z',
          },
          {
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-4-frmotm004',
            title: 'Meeting Of The Minds Vol. 4 [FRMOTM004]',
            published: '2020-11-25T14:20:09Z',
          },
          {
            title: 'Meeting Of The Minds Vol. 3 [FRMOTM003]',
            published: '2020-11-25T14:15:02Z',
            url: 'https://soundcloud.com/futureretrolondon/meeting-of-the-minds-vol-3-frmotm003',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/futureretrolondon/submerged-into-darkness',
            title: 'Submerged Into Darkness [INTODARKNESS]',
            published: '2022-04-29T16:07:43Z',
          },
          {
            title: 'FR007',
            published: '2022-04-29T16:16:09Z',
            url: 'https://soundcloud.com/futureretrolondon/fr007',
          },
          {
            published: '2022-04-29T16:18:13Z',
            title: 'DJFR001',
            url: 'https://soundcloud.com/futureretrolondon/djfr001',
          },
        ],
      },
      name: 'Future Retro London',
      id: 'YrZ3jxQpL46CJvvm24EJ',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000689836592-p4wg5c-t500x500.jpg',
      artists: [],
      followers: 32679,
      link: 'https://soundcloud.com/shallnotfade',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-10-27T10:53:14Z',
      lastScraped: 1668963215027,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/aksports/kurupt',
            title: 'Kurupt',
            published: '2022-06-21T12:29:06Z',
          },
          {
            url: 'https://soundcloud.com/aksports/sayulita',
            title: 'Sayulita',
            published: '2022-06-21T12:27:49Z',
          },
          {
            title: 'Join The Operation',
            url: 'https://soundcloud.com/djpsychiatre/join-the-operation-2',
            published: '2022-05-27T12:20:41Z',
          },
          {
            url: 'https://soundcloud.com/mixmag-1/premiere-chrissy-you-dont-have-to-worry',
            title: "Premiere: Chrissy 'You Don't Have To Worry'",
            published: '2022-09-29T15:02:30Z',
          },
          {
            url: 'https://soundcloud.com/theshadowchild/sets/time-is-now-white-vol-22',
            title: 'Time Is Now White, Vol.22',
            published: '2022-04-14T17:36:32Z',
          },
          {
            url: 'https://soundcloud.com/djpsychiatre/lucidity',
            title: 'Lucidity',
            published: '2022-05-27T12:20:53Z',
          },
          {
            title: 'About Last Night',
            published: '2022-05-12T17:14:18Z',
            url: 'https://soundcloud.com/alexvirgo/about-last-night',
          },
          {
            title: 'Charge The Gun',
            url: 'https://soundcloud.com/alexvirgo/charge-the-gun-1',
            published: '2022-05-12T17:15:23Z',
          },
          {
            published: '2022-04-14T16:23:46Z',
            title: 'O Yeah',
            url: 'https://soundcloud.com/theshadowchild/o-yeah',
          },
          {
            published: '2022-05-12T17:14:33Z',
            title: 'FM Trilogy',
            url: 'https://soundcloud.com/alexvirgo/fm-trilogy-3',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/shallnotfade/t-e-s-t-p-r-e-s-s-make-my-body',
            published: '2022-07-19T12:26:32Z',
            title: 't e s t p r e s s - make my body move',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/jamesjamesjames-my-purple-ipod',
            published: '2021-07-02T18:17:25Z',
            title: 'jamesjamesjames - My Purple iPod Nano',
          },
          {
            published: '2022-04-01T12:57:08Z',
            title: 'Soul Mass Transit System - Hold U Tight',
            url: 'https://soundcloud.com/shallnotfade/soul-mass-transit-system-hold',
          },
          {
            title: 'Mark Laird - Bet',
            url: 'https://soundcloud.com/shallnotfade/mark-laird-bet',
            published: '2021-05-20T16:20:01Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/obskuer-home-interlude',
            published: '2021-07-21T13:14:46Z',
            title: 'Obskür - Home Interlude',
          },
          {
            published: '2022-04-01T14:13:29Z',
            url: 'https://soundcloud.com/shallnotfade/soul-mass-transit-system-killa',
            title: 'Soul Mass Transit System, Killa P - Blocked (Bakey Dub)',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/rhode-brown-coast-to-coast',
            published: '2022-06-20T15:26:19Z',
            title: 'Rhode & Brown - Coast To Coast',
          },
          {
            title: "Barry Can't Swim - El Layali",
            published: '2021-04-09T17:15:27Z',
            url: 'https://soundcloud.com/shallnotfade/barry-cant-swim-el-layali',
          },
          {
            published: '2021-07-02T18:18:00Z',
            title: 'jamesjamesjames - It’s Not You, It’s Me (Club Mix)',
            url: 'https://soundcloud.com/shallnotfade/jamesjamesjames-its-not-you',
          },
          {
            title: 'Yemi - Run Sound',
            published: '2022-04-01T14:13:18Z',
            url: 'https://soundcloud.com/shallnotfade/yemi-run-sound',
          },
          {
            title: 'ATRIP - Patchouli',
            url: 'https://soundcloud.com/shallnotfade/atrip-patchouli',
            published: '2022-09-30T18:49:53Z',
          },
          {
            title: 'Bluetoof - That Got Dark (Interplanetary Criminal Remix)',
            published: '2022-01-31T19:22:10Z',
            url: 'https://soundcloud.com/shallnotfade/bluetoof-that-got-dark-1',
          },
          {
            published: '2022-07-19T12:26:38Z',
            title: 't e s t p r e s s - tenderlove',
            url: 'https://soundcloud.com/shallnotfade/t-e-s-t-p-r-e-s-s-tenderlove',
          },
          {
            title: 'Alan Fitzpatrick, Reset Robot - Alpha',
            url: 'https://soundcloud.com/shallnotfade/alan-fitzpatrick-reset-robot',
            published: '2022-10-11T11:32:36Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/tin037-interplanetary-criminal-coming-on-strong-ep',
            title: 'TIN037 // Interplanetary Criminal - Coming On Strong EP',
            published: '2022-10-27T10:53:14Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/testpress-wit-u-uptae',
            title: 't e s t p r e s s - wit u uptae?',
            published: '2022-01-06T17:22:31Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/barry-cant-swim-lone-raver',
            title: "Barry Can't Swim - Lone Raver",
            published: '2021-04-09T17:16:35Z',
          },
          {
            published: '2021-07-02T18:17:18Z',
            url: 'https://soundcloud.com/shallnotfade/jamesjamesjames-orange-tesla',
            title: 'jamesjamesjames - Orange Tesla',
          },
          {
            published: '2022-07-19T11:03:21Z',
            title: 'Liam Doc - Manager At Pikes',
            url: 'https://soundcloud.com/shallnotfade/liam-doc-manager-at-pikes',
          },
          {
            title: 'Jordan Brando - Flux Deluxe',
            url: 'https://soundcloud.com/shallnotfade/jordan-brando-flux-deluxe',
            published: '2022-02-11T13:19:35Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/adelphi-music-factory-sample-1',
            published: '2021-04-12T15:47:10Z',
            title: 'Adelphi Music Factory - Sample Seduction (Club Mix)',
          },
          {
            published: '2022-05-26T16:38:41Z',
            title: 'Hammer, Dart - Scope',
            url: 'https://soundcloud.com/shallnotfade/hammer-dart-scope',
          },
          {
            title: 'Arfa - Real Badman (Bakey Remix)',
            url: 'https://soundcloud.com/shallnotfade/arfa-real-badman-bakey-remix',
            published: '2022-01-31T17:38:13Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/eastside-avenue',
            title: 'KETTAMA - Eastside Avenue',
            published: '2019-10-24T10:10:59Z',
          },
          {
            title: 'Alan Fitzpatrick, DJ Deeon, DJOKO - Shake That Thang (DJOKO Remix)',
            published: '2021-10-05T17:18:02Z',
            url: 'https://soundcloud.com/shallnotfade/alan-fitzpatrick-dj-deeon',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/interplanterary-criminal',
            published: '2022-06-20T13:22:00Z',
            title: 'Interplanetary Criminal - Gangster Time (feat. Killa P)',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/koko-you-cant-buy-luxury',
            published: '2021-11-25T13:00:00Z',
            title: "KOKO.IT - You Can't Buy Luxury",
          },
          {
            published: '2022-01-05T13:16:29Z',
            title: 'KaySoul - That Blackness',
            url: 'https://soundcloud.com/shallnotfade/kaysoul-that-blackness',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/jasper-tygner-joe-hertz-equals',
            published: '2021-10-18T17:04:12Z',
            title: 'Jasper Tygner, Joe Hertz - Equals',
          },
          {
            published: '2022-05-27T12:20:49Z',
            url: 'https://soundcloud.com/shallnotfade/chrissy-assure-us-theres-a',
            title: "Chrissy - Assure Us There's A Heaven",
          },
        ],
        recent: [],
      },
      widgets: [],
      name: 'Shall Not Fade',
      id: 'Z1BFNOnVNF5PLLUDxt72',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000217551280-8ls9te-t500x500.jpg',
      artists: ['T>I', 'Voltage', 'DJ Marky'],
      followers: 13940,
      link: 'https://soundcloud.com/innergroundmusic',
      notes: '',
      styles: ['Liquid'],
      submission: 'https://labelinnergroundrecords.label-engine.com/demos',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-10-21T08:33:19Z',
      lastScraped: 1668963216751,
      tracks: {
        recent: [
          {
            url: 'https://soundcloud.com/innergroundmusic/surreal-motiv-fading',
            title: 'Surreal & Motiv - Fading',
            published: '2022-10-21T08:31:15Z',
          },
          {
            title: 'Surreal & Motiv - Deleted',
            published: '2022-10-21T08:33:19Z',
            url: 'https://soundcloud.com/innergroundmusic/surreal-motiv-deleted',
          },
          {
            published: '2022-10-21T08:31:45Z',
            title: 'Surreal - Now',
            url: 'https://soundcloud.com/innergroundmusic/surreal-now',
          },
        ],
        popular: [
          {
            title: 'Voltage - Private Time',
            published: '2016-04-27T14:39:43Z',
            url: 'https://soundcloud.com/innergroundmusic/voltage-private-time',
          },
          {
            title: 'Roy Green & Protone - The Storm Featuring Natural Flavor & Dorian',
            published: '2016-04-27T14:44:59Z',
            url: 'https://soundcloud.com/innergroundmusic/roy-green-protone-the-storm-featuring-natural-flavor-dorian',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/t-i-2nd-chance',
            title: 'T>I - 2nd Chance',
            published: '2013-03-27T12:37:36Z',
          },
          {
            published: '2016-04-26T14:15:23Z',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-spy-mystic-sunset',
            title: 'DJ Marky & S.P.Y - Mystic Sunset',
          },
          {
            published: '2016-04-27T15:00:03Z',
            title: 'DJ Marky - Silly',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-silly',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/inn100-02-data-3-string-theory',
            published: '2021-05-20T13:11:16Z',
            title: 'Data 3 - String Theory',
          },
          {
            published: '2016-04-27T13:00:28Z',
            title: 'T>I - 2nd Chance',
            url: 'https://soundcloud.com/innergroundmusic/ti-2nd-chance',
          },
          {
            published: '2017-03-31T07:37:58Z',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-silly-dj-marky-vip-1',
            title: 'DJ Marky - Silly (DJ Marky VIP)',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-s-p-y-yellow-shoes',
            published: '2013-03-08T17:08:16Z',
            title: 'DJ Marky & S.P.Y. - Yellow Shoes [Calibre Remix]',
          },
          {
            published: '2016-04-27T09:28:09Z',
            url: 'https://soundcloud.com/innergroundmusic/dramatic-dbaudio-flex-through-the-solar-system',
            title: 'dRamatic & dbAudio - Flex Through The Solar System',
          },
          {
            published: '2019-03-30T10:27:13Z',
            title: 'Rise N Grind',
            url: 'https://soundcloud.com/innergroundmusic/rise-n-grind',
          },
          {
            title: 'Calibre - Typical Things',
            published: '2019-04-29T10:12:16Z',
            url: 'https://soundcloud.com/innergroundmusic/calibre-typical-things',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-should-i',
            title: 'DJ Marky - Should I',
            published: '2019-08-21T15:48:20Z',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/satl-blo',
            title: 'Satl - B.L.O',
            published: '2016-09-29T11:22:05Z',
          },
          {
            published: '2022-01-26T15:17:11Z',
            title: "Furniss - Can't You See It",
            url: 'https://soundcloud.com/innergroundmusic/furniss-cant-you-see-it',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-funky-train',
            published: '2016-09-29T21:22:22Z',
            title: 'DJ Marky - Funky Train',
          },
          {
            published: '2022-03-30T16:08:47Z',
            title: 'DJ Marky & XRS - LK Feat. Stamina MC (Carol Carolina Bela) (Original Mix)',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-xrs-lk-feat-stamina-mc-carol-carolina-bela-original-mix',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/furniss-lalo',
            title: 'Furniss - Lalo',
            published: '2022-01-26T15:18:07Z',
          },
          {
            published: '2022-06-15T13:36:58Z',
            title: 'Quadrant & Iris - False Spring',
            url: 'https://soundcloud.com/innergroundmusic/quadrant-iris-false-spring-1',
          },
          {
            published: '2022-10-21T08:31:45Z',
            title: 'Surreal - Now',
            url: 'https://soundcloud.com/innergroundmusic/surreal-now',
          },
          {
            title: 'Dorian & Echoround - Back To U',
            published: '2019-02-18T15:31:49Z',
            url: 'https://soundcloud.com/innergroundmusic/dorian-echoround-back-to-u',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/trex-thats-a-lyric-ya-know',
            published: '2022-06-16T09:48:45Z',
            title: "Trex - That's A Lyric Ya Know",
          },
          {
            title: 'Surreal & Motiv - Fading',
            url: 'https://soundcloud.com/innergroundmusic/surreal-motiv-fading',
            published: '2022-10-21T08:31:15Z',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/random-movement-a-day-without-death',
            published: '2016-04-27T15:21:54Z',
            title: 'Random Movement - A Day Without Death',
          },
          {
            title: 'DJ Marky & S.P.Y - Yellow Shoes',
            published: '2016-04-26T14:15:24Z',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-spy-yellow-shoes',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/saikon-guilty-pleasures',
            published: '2021-09-23T11:27:42Z',
            title: 'Saikon - Guilty Pleasures',
          },
          {
            url: 'https://soundcloud.com/innergroundmusic/mcleod-symptom-just-the-way',
            published: '2017-07-06T22:45:00Z',
            title: 'McLeod & Symptom - Just The Way',
          },
          {
            title: 'DJ Marky & XRS - Distant Lover',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-xrs-distant-lover',
            published: '2016-04-20T20:14:22Z',
          },
          {
            title: 'DJ Marky - Parlet',
            published: '2020-07-21T13:43:28Z',
            url: 'https://soundcloud.com/innergroundmusic/dj-marky-parlet',
          },
          {
            title: 'BCee & Lomax - One Year On',
            url: 'https://soundcloud.com/innergroundmusic/bcee-lomax-one-year-on',
            published: '2016-04-25T10:11:47Z',
          },
        ],
        reposts: [
          {
            title: '360 Sessions #5',
            url: 'https://soundcloud.com/dj-hex/360-sessions-5',
            published: '2022-05-09T17:19:25Z',
          },
          {
            published: '2022-03-22T22:18:09Z',
            title: 'The Hierarchy Audio Show #22.03',
            url: 'https://soundcloud.com/datatransmission/the-hierarchy-audio-show-2203',
          },
          {
            published: '2022-03-14T18:36:20Z',
            url: 'https://soundcloud.com/fluiditydnb/fluidity-innerground-records-mix',
            title: 'Fluidity Innerground Records Mix',
          },
          {
            url: 'https://soundcloud.com/leroybroughtflowers/self-defense',
            title: 'Self Defense',
            published: '2021-10-31T16:15:31Z',
          },
          {
            title: 'RENEGADE MASTERS: Drumsound & Bassline Smith',
            published: '2021-12-10T16:28:59Z',
            url: 'https://soundcloud.com/datatransmissiondnb/renegade-masters-drumsound-bassline-smith',
          },
          {
            title: "Saikon 'Guilty Pleasures' [Innerground Records]",
            url: 'https://soundcloud.com/datatransmissiondnb/saikon-guilty-pleasures-innerground-records',
            published: '2021-09-23T13:27:17Z',
          },
          {
            url: 'https://soundcloud.com/mrtraumatik/absolute-local-x-mr-traumatik-x-fernquest-prod-vibe-chemistry',
            title: 'Absolute - Local X Mr Traumatik X Fernquest (prod. Vibe Chemistry)',
            published: '2021-06-25T11:53:35Z',
          },
          {
            title: "PREMIERE: Tephra & Kathryn Brenna (TKB) 'Endless' [Innerground Records]",
            published: '2021-01-15T12:20:40Z',
            url: 'https://soundcloud.com/datatransmissiondnb/premiere-tkb-endless-innerground-records',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/tephra-kathryn-brenna-free-your-mind',
            published: '2021-01-08T17:00:48Z',
            title: 'Tephra & Kathryn Brenna - Free Your Mind',
          },
          {
            url: 'https://soundcloud.com/rstlssnss/sets/rstlssnss16-deeper-south',
            title: 'RSTLSSNSS16: Deeper South - Breeze',
            published: '2019-08-15T08:33:32Z',
          },
        ],
      },
      name: 'Innerground Music',
      id: 'aT73IPCkXWmAoIFjYFNb',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000704662972-d0zs1a-t500x500.jpg',
      artists: ['Dutta', 'Stompz', 'Joely'],
      followers: 3853,
      link: 'https://soundcloud.com/informalrecordings',
      notes: '',
      styles: ['Jump Up'],
      submission: 'informalrecordings@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-10-17T13:59:52Z',
      lastScraped: 1668963218640,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/informalrecordings/jayline-do-you-like-rollers-out-151119',
            title: 'JAYLINE FT DUTTA - DO YOU LIKE ROLLERS? (OUT NOW!)',
            published: '2019-11-06T12:35:26Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/keg175-ft-venz-glock-whole-spine-wobble',
            published: '2022-08-22T19:09:42Z',
            title: 'KEG175 FT VENZ - GLOCK / WHOLE SPINE WOBBLE (OUT NOW!)',
          },
          {
            published: '2021-03-29T11:17:36Z',
            url: 'https://soundcloud.com/informalrecordings/dutta-rusko-reefers',
            title: 'DUTTA & RUSKO - REEFERS',
          },
          {
            published: '2022-09-13T14:33:24Z',
            url: 'https://soundcloud.com/informalrecordings/dutta-ft-sleazy-f-baby-notorious-out-210922',
            title: 'DUTTA FT SLEAZY F BABY - NOTORIOUS (OUT NOW!)',
          },
          {
            published: '2021-07-24T16:47:01Z',
            url: 'https://soundcloud.com/informalrecordings/hood-joely-pon-de-replay-free-download-in-bio',
            title: 'HOOD & JOELY - PON DE REPLAY (FREE DOWNLOAD IN BIO)',
          },
          {
            published: '2020-06-07T14:39:33Z',
            url: 'https://soundcloud.com/informalrecordings/dutta-ft-trigga-cali-packs-vibe-with-me',
            title: 'DUTTA FT TRIGGA - CALI PACKS /VIBE WITH ME (OUT NOW!)',
          },
          {
            published: '2022-10-03T01:17:42Z',
            title: 'DREADNAUGHT & FRAYS - SECRETS (OUT NOW!)',
            url: 'https://soundcloud.com/informalrecordings/dreadnaught-frays-secrets-out-now',
          },
          {
            title: 'Dreadnaught & Gail - Shell A Verse (Out Now)',
            published: '2022-10-17T13:59:52Z',
            url: 'https://soundcloud.com/informalrecordings/dreadnaught-gail-shell-a-verse-out-now',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/babybellz-bring-me-back-free-download',
            title: 'BabyBellz - Bring Me Back (FREE DOWNLOAD)',
            published: '2020-05-26T16:12:40Z',
          },
          {
            published: '2021-03-18T16:43:09Z',
            url: 'https://soundcloud.com/informalrecordings/flipnosis-bricks-kicks-master',
            title: 'Flipnosis - Bricks & Kicks (Master)',
          },
          {
            published: '2022-10-03T01:21:36Z',
            url: 'https://soundcloud.com/informalrecordings/krux-over-arcade',
            title: 'Krux - Over / Arcade',
          },
          {
            title: 'DUTTA & RUSKO - THUNDERBALL',
            published: '2021-03-29T11:17:41Z',
            url: 'https://soundcloud.com/informalrecordings/dutta-rusko-thunderball',
          },
          {
            published: '2020-09-08T13:35:49Z',
            url: 'https://soundcloud.com/informalrecordings/megan-thee-stalion-savage-flawoh-bootleg',
            title: 'Megan Thee Stalion - Savage (Flawoh Bootleg)',
          },
          {
            title: 'DUTTA & RUSKO - KIWI CANDY',
            url: 'https://soundcloud.com/informalrecordings/dutta-rusko-kiwi-candy',
            published: '2021-03-29T11:17:46Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/jayline-ft-dutta-do-you-like-rollers-ego-trippin-remix-informal-usb',
            title: 'JAYLINE FT DUTTA - DO YOU LIKE ROLLERS (EGO TRIPPIN REMIX) (INFORMAL USB)',
            published: '2021-04-26T14:06:31Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/bare-up-generation-out-11119',
            title: 'BARE UP - GENERATION (OUT NOW!)',
            published: '2019-10-24T16:23:52Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/dutta-rusko-blank-shot',
            published: '2021-03-29T11:17:45Z',
            title: 'DUTTA & RUSKO - BLANK SHOT',
          },
          {
            published: '2021-03-29T11:17:51Z',
            url: 'https://soundcloud.com/informalrecordings/dutta-rusko-no-time-wasted',
            title: 'DUTTA & RUSKO  - NO TIME WASTED',
          },
          {
            title: 'DUTTA & STOMPZ - DIRTY WATER / BACK TO ME (WEBSITE EXCLUSIVE)',
            url: 'https://soundcloud.com/informalrecordings/dutta-stompz-dirty-water-back-to-me-website-exclusive',
            published: '2020-02-28T15:05:10Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/hood-160-mix',
            published: '2021-10-25T15:09:18Z',
            title: 'HOOD - 160 MIX',
          },
          {
            published: '2021-11-08T07:02:35Z',
            title: 'Flipnosis - Bad Bitch /Burn Ya (OUT NOW!)',
            url: 'https://soundcloud.com/informalrecordings/flipnosis-bad-bitch-burn-ya-out-friday',
          },
          {
            published: '2020-07-10T13:13:06Z',
            title: 'DUTTA - EVOLVE (FREE DOWNLOAD)',
            url: 'https://soundcloud.com/informalrecordings/dutta-evolve-free-download',
          },
          {
            published: '2020-10-24T16:58:09Z',
            title: 'JAYLINE FT DUTTA - DO YOU LIKE ROLLERS (T.I REMIX)',
            url: 'https://soundcloud.com/informalrecordings/jayline-ft-dutta-do-you-like-rollers-ti-remix',
          },
          {
            published: '2021-02-09T17:25:07Z',
            title: 'JENKS & ACP - BIG',
            url: 'https://soundcloud.com/informalrecordings/jenks-acp-big',
          },
          {
            published: '2021-08-09T14:08:56Z',
            title: 'KRUX - LA VIE EP (OUT NOW!)',
            url: 'https://soundcloud.com/informalrecordings/krux-la-vie-ep-out-15082021',
          },
          {
            title: 'STOMPZ & KY - DEEP SPACE (OUT NOW!)',
            url: 'https://soundcloud.com/informalrecordings/stompz-ky-deep-space-informal-clip',
            published: '2019-10-22T14:38:01Z',
          },
          {
            title: 'ROSCO - NEVER EP',
            url: 'https://soundcloud.com/informalrecordings/rosco-never-ep',
            published: '2020-04-18T16:07:22Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/jenks-ft-magenta-these-things-questions',
            published: '2021-08-31T15:42:02Z',
            title: 'Jenks ft Magenta - These Things / Questions',
          },
          {
            title: '100% JENKS PRODUCTIONS',
            url: 'https://soundcloud.com/informalrecordings/100-jenks-productions-1',
            published: '2021-05-16T15:13:48Z',
          },
          {
            title: 'CRAMZ - DESTRUCTION (OUT NOW!)',
            published: '2019-10-24T16:11:23Z',
            url: 'https://soundcloud.com/informalrecordings/cramz-destruction-out-11119',
          },
        ],
        recent: [
          {
            title: 'Dreadnaught & Gail - Shell A Verse (Out Now)',
            url: 'https://soundcloud.com/informalrecordings/dreadnaught-gail-shell-a-verse-out-now',
            published: '2022-10-17T13:59:52Z',
          },
          {
            title: 'Krux - Over / Arcade',
            url: 'https://soundcloud.com/informalrecordings/krux-over-arcade',
            published: '2022-10-03T01:21:36Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/dreadnaught-frays-secrets-out-now',
            published: '2022-10-03T01:17:42Z',
            title: 'DREADNAUGHT & FRAYS - SECRETS (OUT NOW!)',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/dutta-ft-sleazy-f-baby-notorious-out-210922',
            title: 'DUTTA FT SLEAZY F BABY - NOTORIOUS (OUT NOW!)',
            published: '2022-09-13T14:33:24Z',
          },
          {
            title: 'KEG175 FT VENZ - GLOCK / WHOLE SPINE WOBBLE (OUT NOW!)',
            url: 'https://soundcloud.com/informalrecordings/keg175-ft-venz-glock-whole-spine-wobble',
            published: '2022-08-22T19:09:42Z',
          },
          {
            url: 'https://soundcloud.com/informalrecordings/flipnosis-bad-bitch-burn-ya-out-friday',
            published: '2021-11-08T07:02:35Z',
            title: 'Flipnosis - Bad Bitch /Burn Ya (OUT NOW!)',
          },
          {
            published: '2021-10-25T15:09:18Z',
            url: 'https://soundcloud.com/informalrecordings/hood-160-mix',
            title: 'HOOD - 160 MIX',
          },
          {
            published: '2021-10-15T11:51:18Z',
            url: 'https://soundcloud.com/informalrecordings/krux-illuminate-northern-lights-out-05112021',
            title: 'KRUX - ILLUMINATE / NORTHERN LIGHTS (OUT 05.11.2021)',
          },
          {
            title: 'JENKS - STOP / THE FUNK FT FLIPNOSIS (OUT NOW)',
            published: '2021-10-15T11:39:45Z',
            url: 'https://soundcloud.com/informalrecordings/jenks-stop-the-funk-ft-flipnosis',
          },
        ],
        reposts: [
          {
            published: '2022-08-21T13:40:54Z',
            title: "HOOD - LOVIN' ME (Original Mix)",
            url: 'https://soundcloud.com/hooddubs/hood-lovin-me',
          },
          {
            url: 'https://soundcloud.com/duttadubs/the-story-so-far-vol-1',
            published: '2022-08-17T17:25:18Z',
            title: 'THE STORY SO FAR VOL 1 (100% DUTTA MIX)',
          },
          {
            published: '2021-08-23T14:28:17Z',
            url: 'https://soundcloud.com/dnballstars/dutta-ft-bone-slim-slap-dat',
            title: 'Dutta Ft. Bone Slim - Slap Dat',
          },
          {
            published: '2021-08-31T16:00:01Z',
            url: 'https://soundcloud.com/acpuk/jenks-acp-lowkey',
            title: 'JENKS & ACP - LOWKEY',
          },
          {
            published: '2021-08-30T14:47:33Z',
            url: 'https://soundcloud.com/guestdnb/drillin-forthcoming-informal',
            title: 'Drillin [FORTHCOMING INFORMAL]',
          },
          {
            url: 'https://soundcloud.com/guestdnb/flippant-forthcoming-informal',
            published: '2021-08-30T14:47:33Z',
            title: 'Flippant [FORTHCOMING INFORMAL]',
          },
          {
            title: 'Ultimatum [FORTHCOMING INFORMAL]',
            url: 'https://soundcloud.com/guestdnb/ultimatum-forthcoming-informal',
            published: '2021-08-30T14:47:34Z',
          },
          {
            url: 'https://soundcloud.com/guestdnb/soul-shake-forthcoming',
            published: '2021-08-30T14:47:32Z',
            title: 'Soul Shake [FORTHCOMING INFORMAL]',
          },
          {
            published: '2021-08-30T14:47:31Z',
            url: 'https://soundcloud.com/guestdnb/unforgiven-forthcoming',
            title: 'Unforgiven [FORTHCOMING INFORMAL]',
          },
        ],
      },
      name: 'Informal Recordings',
      widgets: ['https://soundcloud.com/informalrecordings/jayline-do-you-like-rollers-out-151119'],
      id: 'bUP38KW4XxzGKp48JFgH',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-HAeNzaHzkb9waz8M-qzHfdg-t500x500.jpg',
      artists: ['DJ Zinc'],
      followers: 5420,
      link: 'https://soundcloud.com/bingobass',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-11-11T06:37:20Z',
      lastScraped: 1668963220844,
      tracks: {
        popular: [
          {
            published: '2020-06-18T10:33:47Z',
            url: 'https://soundcloud.com/bingobass/dj-zinc-maverick-sabre-hedex-remix',
            title: 'DJ Zinc & Maverick Sabre - Through It All (Hedex Remix)',
          },
          {
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-chris-lorenzo-gammy-elbow',
            title: 'DJ Zinc x Chris Lorenzo - Gammy Elbow',
            published: '2017-08-02T13:24:58Z',
          },
          {
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-charlotte-haining-therapy',
            published: '2020-11-26T14:03:31Z',
            title: 'DJ Zinc X Charlotte Haining - Therapy',
          },
          {
            title: 'DJ Zinc & M.A.R.Y - Unshakeable',
            url: 'https://soundcloud.com/bingobass/dj-zinc-mary-unshakeable',
            published: '2021-09-15T15:02:30Z',
          },
          {
            url: 'https://soundcloud.com/bingobass/dj-zinc-glitter-feat-macky-gee',
            published: '2019-08-02T10:41:52Z',
            title: 'DJ Zinc - Glitter feat. Macky Gee',
          },
          {
            url: 'https://soundcloud.com/bingobass/dj-zinc-ft-alicai-harley',
            title: 'DJ Zinc Ft Alicai Harley - Bubble (Sully Remix)',
            published: '2020-04-20T09:22:52Z',
          },
          {
            published: '2020-05-16T16:41:23Z',
            title: 'Mozey Ft Shady Novelle - I Can Be Your Future - Bingo Bass',
            url: 'https://soundcloud.com/bingobass/01-mozey-ft-shady-novelle-i-can-be-your-future-bingo-bass-club-exp-zm-1',
          },
          {
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-chris-lorenzo-conditioning',
            published: '2019-06-07T10:25:53Z',
            title: 'DJ Zinc x Chris Lorenzo - Conditioning',
          },
          {
            url: 'https://soundcloud.com/bingobass/ufo',
            published: '2020-10-16T08:49:54Z',
            title: 'UFO',
          },
          {
            title: 'DJ Zinc, Mozey & M.A.R.Y - Get Wiser',
            url: 'https://soundcloud.com/bingobass/dj-zinc-mozey-mary-get-wiser',
            published: '2022-08-25T19:05:55Z',
          },
          {
            url: 'https://soundcloud.com/bingobass/zero-feat-ej-kitto-1-more',
            title: 'Zero feat. EJ Kitto - 1 More',
            published: '2020-08-25T15:01:12Z',
          },
          {
            published: '2021-04-15T09:28:24Z',
            title: 'Spence - Hybrid',
            url: 'https://soundcloud.com/bingobass/spence-hybrid',
          },
          {
            title: "DJ Zinc Andreya Triyana - Baby it's You",
            url: 'https://soundcloud.com/bingobass/dj-zinc-andreya-triyana-baby-its-you',
            published: '2020-10-02T13:35:05Z',
          },
          {
            published: '2022-10-29T10:11:09Z',
            url: 'https://soundcloud.com/bingobass/dj-zinc-perfect-storm',
            title: 'DJ Zinc - Perfect Storm',
          },
          {
            title: 'DJ Zinc x Holy Goof - Push It',
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-holy-goof-push-it',
            published: '2017-07-19T14:54:46Z',
          },
          {
            published: '2021-01-13T08:11:46Z',
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-chris-lorenzo-full-of-love',
            title: 'DJ Zinc X Chris Lorenzo - Full of Love',
          },
          {
            url: 'https://soundcloud.com/bingobass/t-i-screen-mesh',
            title: 'T>I - Screen Mesh',
            published: '2020-10-22T12:04:35Z',
          },
          {
            title: 'Hexa - Berlin',
            url: 'https://soundcloud.com/bingobass/hexa-berlin',
            published: '2022-09-15T19:42:14Z',
          },
          {
            title: 'DJ Zinc feat. Kudu Blue - Out Of Control',
            published: '2020-08-19T13:13:13Z',
            url: 'https://soundcloud.com/bingobass/dj-zinc-ft-kudu-blue-out-of-3',
          },
          {
            published: '2019-12-13T11:02:33Z',
            title: 'DJ Zinc x Chris Lorenzo - Deeper',
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-chris-lorenzo-deeper-1',
          },
          {
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-ozone',
            published: '2022-08-24T11:26:53Z',
            title: 'Coffee Shop Jungle - Ozone',
          },
          {
            title: 'Coffee Shop Jungle - Allpress',
            published: '2022-09-04T20:39:33Z',
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-allpress',
          },
          {
            title: 'Hot Goods - Feel It (Radio Edit)',
            published: '2021-08-24T19:43:44Z',
            url: 'https://soundcloud.com/bingobass/hot-goods-feel-it-radio-edit',
          },
          {
            title: 'ELHC - Love Me All Night Baby',
            url: 'https://soundcloud.com/bingobass/elhc-love-me-all-night-baby',
            published: '2022-08-18T13:14:43Z',
          },
          {
            url: 'https://soundcloud.com/bingobass/turtleneck-step-right-back-bingo-bass',
            title: 'Turtleneck - Step Right Back',
            published: '2020-05-22T10:32:53Z',
          },
          {
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-jack-beats-the-anvil-1',
            published: '2017-07-12T16:04:07Z',
            title: 'DJ Zinc x Jack Beats - The Anvil',
          },
          {
            published: '2021-10-02T12:08:35Z',
            url: 'https://soundcloud.com/bingobass/dommix-kotj',
            title: 'Dommix - KOTJ',
          },
          {
            published: '2022-06-21T16:19:22Z',
            title: 'DJ Zinc - Follow Me (Drum & Bass Remix)',
            url: 'https://soundcloud.com/bingobass/dj-zinc-follow-me-drum-bass-remix',
          },
          {
            published: '2019-12-13T10:55:46Z',
            title: 'DJ Zinc x Chris Lorenzo - I Was There',
            url: 'https://soundcloud.com/bingobass/dj-zinc-x-chris-lorenzo-i-was-there',
          },
          {
            title: 'DJ Zinc & M.A.R.Y - All We Need',
            url: 'https://soundcloud.com/bingobass/dj-zinc-mary-all-we-need',
            published: '2022-04-14T19:33:34Z',
          },
        ],
        reposts: [
          {
            title: "Premiere: Jammin 'Drummer Some'",
            url: 'https://soundcloud.com/mixmag-1/premiere-jammin-drummer-some',
            published: '2020-02-19T14:09:47Z',
          },
          {
            published: '2020-01-17T16:14:58Z',
            title: 'DJ Zinc - Super Sharp Shooter (Neon Steve Remix)',
            url: 'https://soundcloud.com/neonsteve/dj-zinc-super-sharp-shooter-neon-steve-remix',
          },
          {
            title: 'Stackz',
            url: 'https://soundcloud.com/dommix/stackz',
            published: '2019-12-06T11:21:28Z',
          },
          {
            published: '2019-11-01T12:02:09Z',
            title: 'Show You',
            url: 'https://soundcloud.com/dommix/show-you',
          },
          {
            url: 'https://soundcloud.com/hotgoodsuk/sets/snapple',
            title: 'Snapple',
            published: '2019-10-11T15:12:01Z',
          },
          {
            published: '2019-09-13T11:10:18Z',
            url: 'https://soundcloud.com/hotgoodsuk/substance-1',
            title: 'Substance',
          },
          {
            url: 'https://soundcloud.com/zinc/lets-get-together-1',
            title: "Let's Get Together",
            published: '2019-09-06T10:27:29Z',
          },
          {
            published: '2019-08-18T17:08:57Z',
            url: 'https://soundcloud.com/tengu-11/deep-in-your-soul-vip-free-download',
            title: 'Deep In Your Soul (VIP) [FREE DOWNLOAD!]',
          },
          {
            title: 'Music Culture',
            published: '2019-06-28T13:50:01Z',
            url: 'https://soundcloud.com/hotgoodsuk/music-culture',
          },
          {
            published: '2019-05-24T10:35:08Z',
            title: "Time's Up",
            url: 'https://soundcloud.com/hotgoodsuk/hot-goods-times-up',
          },
        ],
        recent: [
          {
            title: 'DJ Zinc - Like That',
            url: 'https://soundcloud.com/bingobass/dj-zinc-like-that',
            published: '2022-11-11T06:37:20Z',
          },
          {
            published: '2022-11-11T06:37:15Z',
            url: 'https://soundcloud.com/bingobass/dj-zinc-stax',
            title: 'Dj Zinc - Stax',
          },
          {
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-ft-mitekiss-kitsune',
            title: 'Coffee Shop Jungle ft Mitekiss - Kitsune',
            published: '2022-10-17T08:31:00Z',
          },
          {
            published: '2022-10-29T10:11:09Z',
            url: 'https://soundcloud.com/bingobass/dj-zinc-perfect-storm',
            title: 'DJ Zinc - Perfect Storm',
          },
          {
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-feat-makoto-motoya-espresso',
            title: 'Coffee Shop Jungle feat Makoto- Motoya Espresso',
            published: '2022-10-17T08:31:13Z',
          },
          {
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-laynes',
            title: 'Coffee Shop Jungle - Laynes',
            published: '2022-10-17T08:31:20Z',
          },
          {
            published: '2022-10-17T08:31:28Z',
            title: 'Coffee Shop Jungle ft Makoto - Monmouth',
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-ft-makoto-monmouth',
          },
          {
            title: 'Coffee Shop Jungle ft dj zinc - Look Mum No Hands!',
            published: '2022-10-17T08:31:38Z',
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-ft-dj-zinc-look-mum-no-hands',
          },
          {
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-towpath',
            title: 'Coffee Shop Jungle - Towpath',
            published: '2022-10-17T08:31:45Z',
          },
          {
            published: '2022-10-17T08:37:16Z',
            title: 'Coffee Shop Jungle - Dose',
            url: 'https://soundcloud.com/bingobass/coffee-shop-jungle-dose',
          },
        ],
      },
      name: 'BINGO',
      id: 'c28nF3ApNApRA2Ip7tRX',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000526711830-9t5of5-t500x500.jpg',
      artists: ['Degs', 'Duskee', 'Klinical', 'Waeys'],
      followers: 23371,
      link: 'https://soundcloud.com/overviewuk',
      notes: 'Not explicitly demo box ',
      styles: ['Jump Up', 'Liquid', 'Minimal', 'Vocal'],
      submission: 'info@overviewmusic.co.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-18T09:58:34Z',
      lastScraped: 1668963222201,
      tracks: {
        recent: [
          {
            title: 'LaMeduza & Waeys - Aether',
            published: '2022-11-18T09:58:34Z',
            url: 'https://soundcloud.com/overviewuk/lameduza-waeys-aether',
          },
          {
            published: '2022-11-17T08:32:42Z',
            url: 'https://soundcloud.com/overviewuk/lameduza-solace-vento',
            title: 'LaMeduza & Solace - Vento',
          },
        ],
        reposts: [
          {
            title: 'LaMeduza & Bredren - Acqua',
            published: '2022-11-14T08:42:22Z',
            url: 'https://soundcloud.com/skankandbass/lameduza-bredren-acqua',
          },
          {
            published: '2022-11-04T10:52:50Z',
            url: 'https://soundcloud.com/drumandbassarena/lameduza-phase-fuoco',
            title: 'LaMeduza & Phase - Fuoco',
          },
          {
            url: 'https://soundcloud.com/klinicaldnb/klinical-sinful-v1p-patreon-exclusive',
            title: 'Klinical - Sinful (V1P) (PATREON EXCLUSIVE)',
            published: '2022-11-03T12:08:49Z',
          },
          {
            title: 'LaMeduza EP (15/11/2022)',
            url: 'https://soundcloud.com/sub-antics/sets/lameduza-ground-terra-out-now',
            published: '2022-10-21T12:39:46Z',
          },
          {
            title: 'LaMeduza & GROUND - Terra',
            published: '2022-10-20T08:20:07Z',
            url: 'https://soundcloud.com/drumandbassarena/lameduza-ground-terra',
          },
          {
            published: '2022-10-06T13:19:27Z',
            title: 'Klinical_Selects_03',
            url: 'https://soundcloud.com/klinicaldnb/klinical_selects_03',
          },
          {
            title: 'Koherent - Bleep Test EP (OUT NOW)',
            url: 'https://soundcloud.com/sub-antics/sets/koherent-bleep-test-ep-out-now',
            published: '2022-09-26T14:26:15Z',
          },
          {
            title: 'Cauzer: Critical vs Overview - Manchester 30.09.22 [Hit&Run] : Promo Mix',
            url: 'https://soundcloud.com/critical-music/cauzer-critical-vs-overview-manchester-3010-hit-run-promo-mix',
            published: '2022-09-23T15:05:05Z',
          },
          {
            url: 'https://soundcloud.com/sub-antics/sets/koherent-bleep-test-ep-23-09',
            published: '2022-09-21T14:53:01Z',
            title: 'Koherent - Bleep Test EP (OUT NOW)',
          },
          {
            title: 'Koherent & Collette Warren - Red Lipstick (OUT NOW)',
            url: 'https://soundcloud.com/sub-antics/sets/koherent-collette-warren-red',
            published: '2022-09-19T17:08:18Z',
          },
        ],
        popular: [
          {
            title: 'Operate - Grudges',
            published: '2022-08-29T10:58:47Z',
            url: 'https://soundcloud.com/overviewuk/operate-grudges',
          },
          {
            url: 'https://soundcloud.com/overviewuk/koherent-stab-trilogy',
            title: 'Koherent - Stab Trilogy',
            published: '2022-09-22T08:39:44Z',
          },
          {
            title: 'Koherent - Analog Roller',
            url: 'https://soundcloud.com/overviewuk/koherent-analog-roller',
            published: '2022-09-20T14:09:35Z',
          },
          {
            url: 'https://soundcloud.com/overviewuk/gyrofield-tech-flex-vip-free-download',
            published: '2022-07-05T11:29:17Z',
            title: 'gyrofield - Tech Flex VIP [Free Download]',
          },
          {
            title: 'Klinical - Lost Vanity',
            url: 'https://soundcloud.com/overviewuk/klinical-lost-vanity',
            published: '2022-08-10T12:19:44Z',
          },
          {
            url: 'https://soundcloud.com/overviewuk/wingz-sorrow-visages-remix',
            title: 'Wingz - Sorrow (Visages Remix)',
            published: '2022-06-29T14:04:09Z',
          },
          {
            url: 'https://soundcloud.com/overviewuk/operate-switchblade',
            published: '2022-08-31T12:10:24Z',
            title: 'Operate - Switchblade',
          },
          {
            title: 'YAANO: Critical vs Overview - Manchester 30.09.22 [Hit&Run] : Promo Mix',
            url: 'https://soundcloud.com/overviewuk/yaano-critical-vs-overview-manchester-300922-hitrun-promo-mix',
            published: '2022-09-26T10:34:30Z',
          },
          {
            url: 'https://soundcloud.com/overviewuk/klinical-sweet-lies',
            title: 'Klinical - Sweet Lies',
            published: '2020-09-25T09:51:40Z',
          },
          {
            url: 'https://soundcloud.com/overviewuk/operate-rizzle-mindset-feat-rider-shafique',
            title: 'Operate & Rizzle - Mindset feat. Rider Shafique',
            published: '2020-11-24T16:56:46Z',
          },
          {
            published: '2022-08-25T13:05:47Z',
            url: 'https://soundcloud.com/overviewuk/overview-podcast-s3e6',
            title: 'Overview Podcast S3E6',
          },
          {
            published: '2021-08-03T12:41:27Z',
            title: 'Operate, Degs & Duskee - Diamonds',
            url: 'https://soundcloud.com/overviewuk/operate-degs-duskee-diamonds',
          },
          {
            published: '2022-10-27T11:48:05Z',
            url: 'https://soundcloud.com/overviewuk/overview-podcast-s3e7',
            title: 'Overview Podcast S3E7',
          },
          {
            published: '2022-07-21T14:33:42Z',
            url: 'https://soundcloud.com/overviewuk/gyrofield-katsuragi',
            title: 'gyrofield - Katsuragi',
          },
          {
            url: 'https://soundcloud.com/overviewuk/rueben-no-need-to',
            published: '2022-01-31T15:16:37Z',
            title: 'Rueben - No Need To',
          },
          {
            url: 'https://soundcloud.com/overviewuk/nami-wriggler',
            title: 'Nami - Wriggler',
            published: '2022-03-16T14:25:33Z',
          },
          {
            title: 'Rizzle - Too Much',
            published: '2022-04-11T11:12:05Z',
            url: 'https://soundcloud.com/overviewuk/rizzle-too-much',
          },
          {
            published: '2022-06-08T14:02:58Z',
            title: 'Waeys - The Rush',
            url: 'https://soundcloud.com/overviewuk/waeys-the-rush',
          },
          {
            published: '2021-07-02T11:51:26Z',
            url: 'https://soundcloud.com/overviewuk/wingz-hurt-fre4knc-remix-patreon-exclusive',
            title: 'Wingz - Hurt (Fre4knc Remix) [Patreon Exclusive]',
          },
          {
            url: 'https://soundcloud.com/overviewuk/offline-motion-blur',
            title: 'Offline - Motion Blur',
            published: '2021-04-28T10:31:28Z',
          },
          {
            title: 'Creatures & Visionobi - Taboo',
            published: '2022-05-18T10:14:45Z',
            url: 'https://soundcloud.com/overviewuk/creatures-visionobi-taboo',
          },
          {
            published: '2022-04-27T11:47:52Z',
            url: 'https://soundcloud.com/overviewuk/trex-sleep-on-it',
            title: 'Trex - Sleep On It',
          },
          {
            url: 'https://soundcloud.com/overviewuk/operate-rizzle-think-of-you-wingz-remix-patreon-exclusive',
            title: 'Operate & Rizzle - Think Of You (Wingz Remix) [Patreon Exclusive]',
            published: '2021-11-01T15:27:01Z',
          },
          {
            published: '2022-06-16T17:02:50Z',
            url: 'https://soundcloud.com/overviewuk/creatures-taboo-instrumental-patreon-exclusive',
            title: 'Creatures - Taboo (Instrumental) [Patreon Exclusive]',
          },
          {
            title: 'Trex - 16 Capsules [Patreon Exclusive]',
            url: 'https://soundcloud.com/overviewuk/trex-16-capsules-patreon-exclusive',
            published: '2022-05-25T08:33:14Z',
          },
          {
            published: '2021-12-04T10:49:27Z',
            title: 'Waeys - Mapper (Rift Remix) [Free Download]',
            url: 'https://soundcloud.com/overviewuk/waeys-mapper-rift-remix-free-download',
          },
          {
            published: '2022-11-17T08:32:42Z',
            url: 'https://soundcloud.com/overviewuk/lameduza-solace-vento',
            title: 'LaMeduza & Solace - Vento',
          },
          {
            published: '2022-11-07T14:37:14Z',
            url: 'https://soundcloud.com/overviewuk/koherent-seven-sisters-england-overview-x-goat-shed',
            title: 'Koherent @ Seven Sisters, England : Overview x Goat Shed',
          },
          {
            url: 'https://soundcloud.com/overviewuk/wingz-affection-feat-sammie-hall',
            title: 'Wingz - Affection feat. Sammie Hall',
            published: '2021-04-02T12:19:19Z',
          },
          {
            published: '2021-05-27T09:21:12Z',
            title: 'Klinical - In Vain',
            url: 'https://soundcloud.com/overviewuk/klinical-in-vain',
          },
        ],
      },
      name: 'Overview Music',
      id: 'dPCoX4Ijpvfgo84okgUm',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000210261349-jci4gw-t500x500.jpg',
      artists: ['SUBZERO', 'TURNO'],
      followers: 22376,
      link: 'https://soundcloud.com/biological-beats',
      notes: '',
      styles: ['Jump Up', 'Minimal'],
      submission: 'http://biologicalbeats.com/contact/',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-07T18:01:41Z',
      lastScraped: 1668963223622,
      tracks: {
        recent: [
          {
            title: 'PUPPETZ - COME AROUND ( CHUBBS REMIX)',
            url: 'https://soundcloud.com/biological-beats/puppetz-come-around-chubbs-remix',
            published: '2022-11-07T18:01:41Z',
          },
          {
            url: 'https://soundcloud.com/biological-beats/traumatize-profile-don-dada-enta-remix',
            title: 'TRAUMATIZE & PROFILE - DON DADA ( ENTA REMIX)',
            published: '2022-11-07T17:56:17Z',
          },
          {
            published: '2022-11-07T17:52:52Z',
            title: 'PROFILE & SUBKILLAZ - REBEL BOY (DJ LIMITED REMIX)',
            url: 'https://soundcloud.com/biological-beats/profile-subkillaz-rebel-boy-dj-limited-remix',
          },
          {
            url: 'https://soundcloud.com/biological-beats/dj-limited-fatman-d-badboy-sound',
            published: '2022-10-17T16:38:42Z',
            title: 'DJ LIMITED & FATMAN D - BADBOY SOUND',
          },
          {
            published: '2022-10-14T20:35:54Z',
            url: 'https://soundcloud.com/biological-beats/kumo-renegade',
            title: 'KUMO - RENEGADE',
          },
          {
            url: 'https://soundcloud.com/biological-beats/kumo-error-249',
            title: 'KUMO - ERROR 249',
            published: '2022-10-14T20:34:45Z',
          },
          {
            published: '2022-10-14T20:33:35Z',
            url: 'https://soundcloud.com/biological-beats/kumo-assert-28',
            title: 'KUMO - ASSERT 28',
          },
          {
            url: 'https://soundcloud.com/biological-beats/kumo-brukshot',
            title: 'KUMO - BRUKSHOT FEAT FATMAN D',
            published: '2022-10-14T20:32:01Z',
          },
          {
            url: 'https://soundcloud.com/biological-beats/dj-limited-army',
            title: 'DJ LIMITED - ARMY',
            published: '2022-09-09T10:59:57Z',
          },
          {
            title: 'ENTA - BITCHIN',
            url: 'https://soundcloud.com/biological-beats/enta-bitchin',
            published: '2022-09-06T17:30:49Z',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/biological-beats/nicky-fatmans-party-at-boxpark-tna-b2b-nbc',
            published: '2020-02-05T21:29:28Z',
            title: 'TNA B2B NBC (Eksman & Herbzie) - NICKY & FATMANS PARTY AT BOXPARK',
          },
          {
            published: '2022-09-06T03:40:12Z',
            title: 'SUB KILLAZ - SHOCK OUT REMIX - SUBZERO & GINO',
            url: 'https://soundcloud.com/biological-beats/sub-killaz-shock-out-remix-subzero-gino',
          },
          {
            title: 'FREE DOWN LOAD ALL THE WAY UP (KANINE+HIGH IMPACT BOOTLEG)',
            url: 'https://soundcloud.com/biological-beats/all-the-way-up-kaninehigh-impact-bootleg',
            published: '2016-09-23T19:05:20Z',
          },
          {
            published: '2014-09-12T17:20:37Z',
            url: 'https://soundcloud.com/biological-beats/klip-outlaw-wiggle-feat-fat-man-d',
            title: "Klip & Outlaw 'Wiggle' Feat Fat Man D",
          },
          {
            published: '2022-10-17T16:38:42Z',
            title: 'DJ LIMITED & FATMAN D - BADBOY SOUND',
            url: 'https://soundcloud.com/biological-beats/dj-limited-fatman-d-badboy-sound',
          },
          {
            url: 'https://soundcloud.com/biological-beats/traumatize-nuh-know-dem',
            published: '2019-04-01T14:05:31Z',
            title: 'TRAUMATIZE - NUH KNOW DEM - FREE DOWNLOAD',
          },
          {
            published: '2022-09-09T10:59:57Z',
            url: 'https://soundcloud.com/biological-beats/dj-limited-army',
            title: 'DJ LIMITED - ARMY',
          },
          {
            url: 'https://soundcloud.com/biological-beats/hizzleguy-mr-whippy',
            published: '2015-05-22T18:13:51Z',
            title: 'HIZZLEGUY - Mr Whippy',
          },
          {
            published: '2018-10-16T16:59:40Z',
            title: 'DJ GUV B2B DJ DOMINATOR MCS STORMIN & SHABBA D',
            url: 'https://soundcloud.com/biological-beats/dj-guv-b2b-dj-dominator-mcs-stormin-shabba-d',
          },
          {
            title: 'ENTA - CENSORED',
            url: 'https://soundcloud.com/biological-beats/enta-censeored',
            published: '2022-08-23T22:46:16Z',
          },
          {
            url: 'https://soundcloud.com/biological-beats/puppetz-element-115-profile-sub-killaz-remix',
            published: '2022-09-06T03:47:11Z',
            title: 'PUPPETZ - ELEMENT 115 (PROFILE & SUB KILLAZ REMIX)',
          },
          {
            title: 'CHUBBS - LINK - LIMITED REMIX',
            url: 'https://soundcloud.com/biological-beats/chubbs-link-limited-remix',
            published: '2022-09-06T03:44:11Z',
          },
          {
            published: '2019-09-27T12:31:39Z',
            title: 'VOLTAGE 15 Years Of Bio Beats - Fabric 2019',
            url: 'https://soundcloud.com/biological-beats/voltage-15-years-of-bio-beats-fabric-2019',
          },
          {
            url: 'https://soundcloud.com/biological-beats/fatman-d-15-min-blast-hybrid-master',
            title: 'FATMAN D - 15 MIN BLAST VOL 3 ( DJ AMPLIFY )',
            published: '2022-02-13T01:47:41Z',
          },
          {
            url: 'https://soundcloud.com/biological-beats/traumatize-stereo-yout',
            published: '2018-08-29T15:32:52Z',
            title: 'TRAUMATIZE - STEREO YOUT',
          },
          {
            published: '2022-03-09T18:20:56Z',
            url: 'https://soundcloud.com/biological-beats/hunger-games-live-sas-turno-rip-skibadee',
            title: 'Hunger games live (SAS - TURNO) RIP SKIBADEE',
          },
          {
            url: 'https://soundcloud.com/biological-beats/toxinate-anger-issues',
            published: '2020-11-20T01:11:37Z',
            title: 'TOXINATE - ANGER ISSUES',
          },
          {
            url: 'https://soundcloud.com/biological-beats/dj-vacuum-the-avenger-vip',
            title: 'DJ VACUUM The Avenger VIP',
            published: '2015-02-20T19:19:36Z',
          },
          {
            title: 'ENTA - DIGITAL RAGE',
            published: '2022-09-06T17:28:11Z',
            url: 'https://soundcloud.com/biological-beats/enta-digital-rage',
          },
          {
            url: 'https://soundcloud.com/biological-beats/enta-bitchin',
            published: '2022-09-06T17:30:49Z',
            title: 'ENTA - BITCHIN',
          },
          {
            published: '2019-09-25T08:41:24Z',
            url: 'https://soundcloud.com/biological-beats/subzero-15-years-of-bio-beats-fabric-2019',
            title: 'SUBZERO 15 Years Of Bio Beats - Fabric 2019',
          },
          {
            title: 'ENTA - MIND THE WHALE',
            published: '2022-09-06T17:31:53Z',
            url: 'https://soundcloud.com/biological-beats/enta-mind-the-whale',
          },
          {
            published: '2022-09-06T17:30:01Z',
            title: 'ENTA - LED ASTRAY',
            url: 'https://soundcloud.com/biological-beats/enta-led-astray',
          },
          {
            published: '2022-07-21T03:37:35Z',
            title: 'DJ LIMITED - TAPPED INTERVIEW',
            url: 'https://soundcloud.com/biological-beats/limited-tapped-interview',
          },
          {
            published: '2022-06-23T00:01:56Z',
            url: 'https://soundcloud.com/biological-beats/enta-vindicated',
            title: 'ENTA - VINDICATED',
          },
          {
            title: 'DJ DOMINATOR - SOUND JOURNEY (Telekom & Flat T Remix)',
            url: 'https://soundcloud.com/biological-beats/dj-dominator-sound-journey-telekom-flat-t-remix',
            published: '2021-05-11T12:25:34Z',
          },
          {
            url: 'https://soundcloud.com/biological-beats/puppetz-come-around-chubbs-remix',
            published: '2022-11-07T18:01:41Z',
            title: 'PUPPETZ - COME AROUND ( CHUBBS REMIX)',
          },
          {
            published: '2020-12-25T22:18:24Z',
            url: 'https://soundcloud.com/biological-beats/traumatize-you-tell-me-mofes-remix-free-download',
            title: 'Traumatize - You Tell Me (Mofes Remix) - Free Download',
          },
          {
            title: 'ENTA - FT FATMAN D - SPEECHLESS',
            published: '2022-05-20T14:49:58Z',
            url: 'https://soundcloud.com/biological-beats/enta-ft-fatman-d-speechless',
          },
          {
            url: 'https://soundcloud.com/biological-beats/hyn-bloodclart',
            title: 'HYN - BLOODCLART',
            published: '2022-07-28T12:40:48Z',
          },
        ],
        reposts: [
          {
            published: '2022-10-11T15:41:31Z',
            title: 'Smugglin Beats Vol.1 (100%Mix)',
            url: 'https://soundcloud.com/smuggler_dnb/100-mix-v2',
          },
          {
            title: 'Chubbs - Never Die {Birthday free download!}',
            published: '2022-08-18T10:56:00Z',
            url: 'https://soundcloud.com/chubbsdnb/chubbs-never-die',
          },
          {
            published: '2022-08-16T09:31:31Z',
            title: 'Amplify Radio 1 Guest Mix Rene La Vice Show (15/8/22)',
            url: 'https://soundcloud.com/djamplifydnb/amplify-radio-1-guest-mix-rene-la-vice-show-1582',
          },
          {
            published: '2022-08-03T19:08:38Z',
            title: 'Trimer Guest Mix For Mollie Collins - Kiss Nights',
            url: 'https://soundcloud.com/trimer/trimer-guest-mix-for-mollie-collins-kiss-nights',
          },
          {
            title: 'DJ Limited - Lost & Found Dub Pack (GLTCH Mini Mix)- [Out Now]',
            url: 'https://soundcloud.com/dj-limited202/pre-order-dj-limited-lost-found-dub-pack-gltch-mini-mix',
            published: '2022-07-11T06:44:33Z',
          },
          {
            published: '2022-06-01T19:48:19Z',
            url: 'https://soundcloud.com/chubbsdnb/100-chubbs-3',
            title: '100% Chubbs Vol. 3',
          },
          {
            title: 'Enta - Guest mix for Free From Sleep FFS085',
            published: '2022-05-18T10:05:26Z',
            url: 'https://soundcloud.com/entadnb/sets/enta-guest-mix-for-free-from',
          },
          {
            published: '2022-04-04T16:59:07Z',
            title: 'Enta - Rinse FM Mix for Hospital Records: Lens Mixtape Special',
            url: 'https://soundcloud.com/entadnb/enta-rinse-fm-mix-for-hospital-records-lens-mixtape-special',
          },
          {
            published: '2022-01-25T10:18:06Z',
            url: 'https://soundcloud.com/puppetzdnb/youve-got-courage',
            title: "Glitch City & Puppetz - You've Got Courage",
          },
          {
            title: 'FROM THE VAULTS LP (2017) - PREVIOUSLY UNRELEASED - COMING SOON',
            url: 'https://soundcloud.com/scratchmasterky/sets/from-the-vaults-ep-2017',
            published: '2022-01-27T20:20:48Z',
          },
        ],
      },
      name: 'Biological Beats',
      id: 'g4eSY7YXCbDuv7LaUfn5',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000003787000-9p6fot-t500x500.jpg',
      artists: ['A.M.C', 'Macky Gee'],
      followers: 5679,
      link: 'https://soundcloud.com/radar-records',
      notes: '',
      styles: ['Jump Up'],
      submission: 'radar.recs@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-18T10:33:40Z',
      lastScraped: 1668963224916,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/radar-records/basstripper-lightspeed',
            title: 'Basstripper - Lightspeed',
            published: '2021-12-20T15:35:07Z',
          },
          {
            url: 'https://soundcloud.com/radar-records/macky-gee-x-dj-phantasy-ramped-up-rampage-2017-master-1',
            published: '2017-01-23T05:06:13Z',
            title: 'Macky Gee X DJ Phantasy - Ramped Up - Rampage 2017 - Master',
          },
          {
            published: '2022-09-02T09:25:00Z',
            title: 'Basstripper - Battle Axe VIP',
            url: 'https://soundcloud.com/radar-records/basstripper-battle-axe-vip',
          },
          {
            title: 'D-Nasty - In Da Club',
            url: 'https://soundcloud.com/radar-records/d-nasty-in-da-club-2',
            published: '2019-02-15T13:29:06Z',
          },
          {
            url: 'https://soundcloud.com/radar-records/basstripper-getting-hyped',
            title: 'Basstripper - Getting Hyped',
            published: '2022-09-02T09:24:58Z',
          },
          {
            title: 'Bare Up - Let You Go',
            published: '2020-11-04T12:04:38Z',
            url: 'https://soundcloud.com/radar-records/bare-up-let-you-go',
          },
          {
            url: 'https://soundcloud.com/radar-records/basstripper-battle-axe',
            published: '2020-10-01T12:31:07Z',
            title: 'Basstripper - Battle Axe',
          },
          {
            published: '2015-03-17T17:33:21Z',
            url: 'https://soundcloud.com/radar-records/james-marvel-mc-mota-face-of-the-earth-rdr013-1',
            title: 'James Marvel & MC Mota - Face Of The Earth - RDR013',
          },
          {
            published: '2017-01-23T05:05:03Z',
            url: 'https://soundcloud.com/radar-records/tc-metrik-the-light-amc-remix-rampage-2017-master-1',
            title: 'TC & Metrik - The Light (A.M.C Remix) - Rampage 2017 - Master',
          },
          {
            published: '2019-02-15T13:28:59Z',
            title: 'D-Nasty - Unusual',
            url: 'https://soundcloud.com/radar-records/d-nasty-unusual-2',
          },
          {
            title: 'SASASAS - Rampage Anthem - Rampage 2017 - Master',
            published: '2017-01-23T05:07:31Z',
            url: 'https://soundcloud.com/radar-records/sasasas-rampage-anthem-rampage-2017-master-1',
          },
          {
            title: "Used - I'm Yours",
            url: 'https://soundcloud.com/radar-records/used-im-yours',
            published: '2021-03-26T14:19:51Z',
          },
          {
            title: 'Maze - Octopodinae',
            published: '2022-02-24T17:08:11Z',
            url: 'https://soundcloud.com/radar-records/maze-octopodinae',
          },
          {
            url: 'https://soundcloud.com/radar-records/bare-up-feat-soljer-if-you-want-me',
            title: 'Bare Up feat. Soljer - If You Want Me',
            published: '2020-11-24T16:00:09Z',
          },
          {
            title: 'D-Nasty - Arsenic',
            url: 'https://soundcloud.com/radar-records/d-nasty-arsenic-2',
            published: '2019-02-15T13:29:09Z',
          },
          {
            published: '2021-12-20T15:35:09Z',
            title: 'Basstripper - Back To Normal',
            url: 'https://soundcloud.com/radar-records/basstripper-back-to-normal',
          },
          {
            title: 'Maze - The Darkling',
            published: '2022-02-24T17:08:13Z',
            url: 'https://soundcloud.com/radar-records/maze-the-darkling',
          },
          {
            published: '2022-02-24T17:08:06Z',
            title: 'Maze - This Love',
            url: 'https://soundcloud.com/radar-records/maze-this-love',
          },
          {
            published: '2021-10-15T09:45:03Z',
            title: 'D-Nasty - Unusual VIP',
            url: 'https://soundcloud.com/radar-records/d-nasty-unusual-vip',
          },
          {
            url: 'https://soundcloud.com/radar-records/fox-stevenson-knowhow-rdr027-rampage-2017-master-1',
            title: 'Fox Stevenson - Knowhow - RDR027 - Rampage 2017 - Master',
            published: '2017-01-23T05:11:00Z',
          },
          {
            published: '2020-10-01T12:31:15Z',
            url: 'https://soundcloud.com/radar-records/basstripper-woofer',
            title: 'Basstripper - Woofer',
          },
          {
            title: 'Hypoxia Ft MC Mota - Low Town - Rampage EP 3 - RDR021',
            published: '2016-03-14T14:48:09Z',
            url: 'https://soundcloud.com/radar-records/hypoxia-ft-mc-mota-low-town-rampage-ep-3-rdr021',
          },
          {
            published: '2021-09-24T10:03:58Z',
            url: 'https://soundcloud.com/radar-records/d-nasty-feat-laura-destiny',
            title: 'D-Nasty feat. Laura - Destiny',
          },
          {
            title: 'Murdock & Doctrine - Arena VIP (Rampage Anthem)',
            url: 'https://soundcloud.com/radar-records/murdock-doctrine-arena-rampage-anthem-vip-v2',
            published: '2016-03-22T15:41:47Z',
          },
          {
            title: 'Basstripper - Sleeping Pills',
            url: 'https://soundcloud.com/radar-records/basstripper-sleeping-pills',
            published: '2020-10-01T12:31:13Z',
          },
          {
            published: '2017-01-23T05:20:58Z',
            title:
              'JPhelpz Feat. Merky Ace - Hench (jPhelpz & FuntCase VIP) - Rampage 2017 - Master',
            url: 'https://soundcloud.com/radar-records/jphelpz-feat-merky-ace-hench-jphelpz-funtcase-vip-rampage-2017-master-1',
          },
          {
            title: 'Used - The Art Of Missing You',
            url: 'https://soundcloud.com/radar-records/used-the-art-of-missing-you',
            published: '2021-03-26T14:20:19Z',
          },
          {
            title: 'Used - Jailyard',
            url: 'https://soundcloud.com/radar-records/used-jailyard',
            published: '2021-03-26T14:19:14Z',
          },
          {
            url: 'https://soundcloud.com/radar-records/d-nasty-new-era-2',
            published: '2019-02-15T13:29:04Z',
            title: 'D-Nasty - New Era',
          },
          {
            title: 'Used - Take It',
            url: 'https://soundcloud.com/radar-records/used-take-it',
            published: '2021-03-26T14:18:33Z',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/radar-records/krankk-shaka-shams-the-wire',
            title: 'KRANKk & Shaka Shams - The Wire',
            published: '2022-11-18T10:33:40Z',
          },
          {
            published: '2022-09-02T09:25:00Z',
            url: 'https://soundcloud.com/radar-records/basstripper-battle-axe-vip',
            title: 'Basstripper - Battle Axe VIP',
          },
          {
            published: '2022-09-02T09:24:58Z',
            url: 'https://soundcloud.com/radar-records/basstripper-getting-hyped',
            title: 'Basstripper - Getting Hyped',
          },
          {
            published: '2022-02-24T17:08:13Z',
            title: 'Maze - The Darkling',
            url: 'https://soundcloud.com/radar-records/maze-the-darkling',
          },
          {
            title: 'Maze - Octopodinae',
            published: '2022-02-24T17:08:11Z',
            url: 'https://soundcloud.com/radar-records/maze-octopodinae',
          },
          {
            title: 'Maze - This Love',
            url: 'https://soundcloud.com/radar-records/maze-this-love',
            published: '2022-02-24T17:08:06Z',
          },
          {
            published: '2021-12-20T15:35:09Z',
            title: 'Basstripper - Back To Normal',
            url: 'https://soundcloud.com/radar-records/basstripper-back-to-normal',
          },
          {
            title: 'Basstripper - Lightspeed',
            published: '2021-12-20T15:35:07Z',
            url: 'https://soundcloud.com/radar-records/basstripper-lightspeed',
          },
          {
            published: '2021-10-15T09:45:57Z',
            url: 'https://soundcloud.com/radar-records/d-nasty-feat-laura-naufrage-instrumental',
            title: 'D-Nasty feat. Laura - Naufragé (Instrumental)',
          },
          {
            title: 'D-Nasty feat. Laura - Naufragé',
            url: 'https://soundcloud.com/radar-records/d-nasty-feat-laura-naufrage',
            published: '2021-10-15T09:45:52Z',
          },
        ],
        reposts: [
          {
            title: 'Poison w/ CHAMOS',
            published: '2021-10-15T16:04:52Z',
            url: 'https://soundcloud.com/davenunes/poison-w-chamos-1',
          },
          {
            url: 'https://soundcloud.com/frankynuts/franky-nuts-glow-feat-mylki-youredmcom-premiere',
            published: '2020-06-18T11:14:27Z',
            title: 'Glow Feat. MYLKI',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/premiere-d-nasty-arsenic-rampage-recordings',
            published: '2019-02-14T16:21:23Z',
            title: 'Premiere: D-Nasty - Arsenic [Radar Recordings]',
          },
          {
            url: 'https://soundcloud.com/nct-1/give-in-ft-raign',
            title: 'Give In (ft. RAIGN)',
            published: '2016-12-05T17:41:31Z',
          },
          {
            published: '2016-04-15T07:26:09Z',
            url: 'https://soundcloud.com/murdock_radar/arena-vip-on-bbc-radio-1-friction',
            title: 'Arena VIP on BBC Radio 1 - Friction',
          },
          {
            title: 'Red Bull Elektropedia - Insider Trading 06 - Radar Records by Baz & Simplistix',
            published: '2016-03-03T12:25:38Z',
            url: 'https://soundcloud.com/rbemixtapes/red-bull-elektropedia-insider-trading-06-radar-records-by-baz-simplistix',
          },
          {
            url: 'https://soundcloud.com/bazandsimplistix/baz-simplistix-drop-the-bass-supported-by-london-elektricity-hospital-podcast_260-cut',
            published: '2015-05-07T15:24:22Z',
            title: 'Drop The Bass ( Supported by London Elektricity - Hospital Podcast_260 cut)',
          },
          {
            published: '2014-10-14T16:14:55Z',
            title: 'Murdock, Submatik & Jenna G: Good Luv (Hospital Podcast cut)',
            url: 'https://soundcloud.com/murdock_radar/murdock-submatik-jenna-g-good-luv-hospital-podcast-cut',
          },
        ],
      },
      name: 'Radar Records',
      widgets: [
        'https://soundcloud.com/radar-records/basstripper-lightspeed?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/radar-records/maze-octopodinae?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/radar-records/basstripper-back-to-normal?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/radar-records/bare-up-feat-soljer-if-you-want-me?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/radar-records/baz-simplistix-lickle-boy?in=radar-records/sets/baz-simplistix-wicked-man-ep&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      id: 'gNhEaZGpReiu5MdKqJph',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-7QRCaZqMJSuDWeXJ-Ube2YA-t500x500.jpg',
      artists: ['DUTTA FEAT. STOMPZ', 'MC Spyda'],
      followers: 2749,
      link: 'https://soundcloud.com/original-key-records',
      notes: '',
      styles: ['Jump Up', 'Jungle', 'Minimal'],
      submission: 'originalkeyrecords@gmx.de',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-04T19:03:28Z',
      lastScraped: 1668963226283,
      tracks: {
        reposts: [
          {
            title: 'DJ OKey & MC Fearless - Junglekidz Silodom Saarbrücken 20.11.2021',
            published: '2021-12-01T15:15:52Z',
            url: 'https://soundcloud.com/okeydnb/dj-okey-mc-fearless-junglekidz-silodom-saarbrucken-20112021',
          },
          {
            published: '2022-02-03T10:28:31Z',
            url: 'https://soundcloud.com/goatshedmusic/mad-vibes-radio-w-dj-okey-020222',
            title: 'Mad Vibes Radio w/ DJ Okey 02.02.22',
          },
          {
            title: 'Brian Brainstorm & Sweetie Irie - Gunman',
            published: '2021-09-21T12:44:37Z',
            url: 'https://soundcloud.com/skankandbass/brian-brainstorm-sweetie-irie-gunman',
          },
          {
            published: '2021-05-17T08:59:29Z',
            url: 'https://soundcloud.com/drumandbassarena/speaker-louis-blackout-ja-the-city-is-burning-spy-remix',
            title: 'Speaker Louis & Blackout JA - The City Is Burning (S.P.Y Remix)',
          },
          {
            published: '2021-02-07T09:38:40Z',
            url: 'https://soundcloud.com/okeydnb/dj-okey-jungle-sound-vinyl-mix-001',
            title: 'Dj OKey - Jungle Sound Vinyl Mix 001',
          },
          {
            published: '2020-10-20T21:39:25Z',
            url: 'https://soundcloud.com/ragga-bombs/ragga-bombs-special-mix-vol7-mixed-by-okey',
            title: 'RAGGA BOMBS - Special Mix Vol.7 (Mixed By OKey)',
          },
          {
            published: '2019-10-07T05:34:46Z',
            url: 'https://soundcloud.com/lwrdz/lowriderz-claws-skank-neuropunk-pt49',
            title: 'Lowriderz & Claws - Skank (Neuropunk Pt.49)',
          },
          {
            published: '2019-10-12T17:49:45Z',
            url: 'https://soundcloud.com/conradsubs/the-jungle-smackdown-mixtape',
            title: 'The Jungle Smackdown Mixtape [FREE DOWNLOAD]',
          },
          {
            title: 'Lowriderz - Soundbwoy (Neuropunk Pt.49)',
            published: '2019-10-07T05:32:15Z',
            url: 'https://soundcloud.com/lwrdz/lowriderz-soundbwoy-neuropunk-pt49',
          },
          {
            title: 'MC BELLYMAN & DJ OKEY@Junglekidz Silodom Saarbruecken 14.09.19',
            published: '2019-09-18T06:27:57Z',
            url: 'https://soundcloud.com/okeydnb/mc-bellyman-dj-okeyjunglekidz-silodom-saarbruecken-140919',
          },
        ],
        popular: [
          {
            title: 'BRIAN BRAINSTORM - NO ORDINARY SOUND - ARIES REMIX - ORIGINAL KEY RECORDS',
            url: 'https://soundcloud.com/original-key-records/brian-brainstorm-no-ordinary-sound-aries-remix-original-key-records',
            published: '2021-03-10T08:12:57Z',
          },
          {
            published: '2021-11-15T20:10:12Z',
            url: 'https://soundcloud.com/original-key-records/bassface-sascha-mc-spyda-one-time-whiney-remix-original-key-records',
            title: 'Bassface Sascha & MC Spyda - One Time (Whiney Remix) - Original Key Records',
          },
          {
            published: '2018-09-19T10:08:21Z',
            url: 'https://soundcloud.com/original-key-records/tomoyoshi-drop-da-bass-original-key-records',
            title: 'Tomoyoshi - Drop Da Bass - Original Key Records - FREE DOWNLOAD',
          },
          {
            title: 'Brian Brainstorm & Speaker Louis - Come Again',
            url: 'https://soundcloud.com/original-key-records/brian-brainstorm-speaker-1',
            published: '2022-03-10T12:30:51Z',
          },
          {
            published: '2022-03-10T12:30:12Z',
            title: 'Brian Brainstorm & Speaker Louis - Dance Haffi Gwan',
            url: 'https://soundcloud.com/original-key-records/brian-brainstorm-speaker-louis',
          },
          {
            url: 'https://soundcloud.com/original-key-records/dutta-feat-stompz-throw-ups',
            title: 'DUTTA FEAT. STOMPZ - THROW UPS',
            published: '2019-04-10T13:29:10Z',
          },
          {
            title: 'Brian Brainstorm feat. Sweetie irie - Gunman - Original Key Records',
            published: '2021-09-05T11:38:14Z',
            url: 'https://soundcloud.com/original-key-records/brian-brainstorm-feat-sweetie-irie-gunman-original-key-records',
          },
          {
            url: 'https://soundcloud.com/original-key-records/gold-dubs-the-truth-original',
            published: '2021-07-27T12:00:46Z',
            title: 'GOLD DUBS - THE TRUTH - ORIGINAL KEY RECORDS',
          },
          {
            title: 'Conrad Subs - Collide - J.O.E Remix - Original Key Records',
            published: '2021-03-10T08:16:32Z',
            url: 'https://soundcloud.com/original-key-records/conrad-subs-collide-joe-remix-original-key-records',
          },
          {
            published: '2021-04-17T12:14:44Z',
            title: 'CONRAD SUBS - ALL MASSIVE (MOTIV REMIX)',
            url: 'https://soundcloud.com/original-key-records/conrad-subs-all-massive-motiv-remix',
          },
          {
            url: 'https://soundcloud.com/original-key-records/speaker-louis-blackout-ja-the-city-is-burning-spy-remix-original-key-records-1',
            title:
              'Speaker Louis & Blackout JA - The City Is Burning - (S.P.Y Remix) - Original Key Records',
            published: '2021-05-19T19:23:44Z',
          },
          {
            url: 'https://soundcloud.com/original-key-records/bassface-sascha-feat-mc-spyda',
            title: 'BASSFACE SASCHA FEAT. MC SPYDA - ONE TIME - Original Key Records',
            published: '2021-05-27T19:19:52Z',
          },
          {
            title:
              'Lowriderz & Shiny Radio Feat. Blackout JA - Face Defeat [Brian Brainstorm Remix] - Original Key',
            url: 'https://soundcloud.com/original-key-records/lowriderz-shiny-radio-feat-blackout-ja-face-defeat-brian-brainstorm-remix-original-key',
            published: '2020-06-17T09:10:27Z',
          },
          {
            title: 'Veak - Deliver Dub - Original Key Records',
            published: '2021-05-06T08:04:16Z',
            url: 'https://soundcloud.com/original-key-records/veak-deliver-dub-original-key',
          },
          {
            published: '2021-05-06T08:04:20Z',
            title: 'Veak - Execute That  - Original Key Records',
            url: 'https://soundcloud.com/original-key-records/veak-execute-that-original-key',
          },
          {
            published: '2021-07-27T12:00:38Z',
            title: 'GOLD DUBS - LOST TRANSLATIONS - ORIGINAL KEY RECORDS',
            url: 'https://soundcloud.com/original-key-records/gold-dubs-lost-translations',
          },
          {
            published: '2020-08-20T13:47:57Z',
            title: 'Tomoyoshi - Kai Denpa - Original Key Records',
            url: 'https://soundcloud.com/original-key-records/tomoyoshi-kai-denpa-original',
          },
          {
            url: 'https://soundcloud.com/original-key-records/bassface-sascha-so-much-better',
            title: 'BASSFACE SASCHA - SO MUCH BETTER WITH YOU - Original Key Records',
            published: '2021-05-27T19:19:57Z',
          },
          {
            title:
              'Conrad Subs - Risk Ft. Lady D - Zire - Bassface Sascha Remix - Original Key Records.wav',
            published: '2021-01-13T07:44:32Z',
            url: 'https://soundcloud.com/original-key-records/conrad-subs-risk-ft-lady-d',
          },
          {
            published: '2019-06-11T08:36:00Z',
            title: 'Veak - Heads High - Original Key Records FREE DOWNLOAD',
            url: 'https://soundcloud.com/original-key-records/veak-heads-high-original-key-records-free-download',
          },
          {
            published: '2021-01-17T16:37:24Z',
            title: 'Speaker Louis - Soundman Pressure (Isaac Maya Remix) - Original Key Records',
            url: 'https://soundcloud.com/original-key-records/speaker-louis-soundman-pressure-isaac-maya-remix-original-key-records',
          },
          {
            url: 'https://soundcloud.com/original-key-records/speaker-louis-heatwave-gold-dubs-remix-original-key-records',
            title: 'SPEAKER LOUIS - HEATWAVE - GOLD DUBS REMIX - Original Key Records',
            published: '2020-11-24T09:19:46Z',
          },
          {
            title: 'Veak & Zudakabass - Surrender - Original Key Records',
            published: '2021-08-03T09:35:26Z',
            url: 'https://soundcloud.com/original-key-records/veak-zudakabass-surrender',
          },
          {
            published: '2020-11-24T09:19:42Z',
            url: 'https://soundcloud.com/original-key-records/conrad-subs-bassline-kickin-sl8r-remix-original-key-records',
            title: 'Conrad Subs - Bassline Kickin - Sl8r Remix - Original Key Records',
          },
          {
            published: '2020-07-14T13:27:16Z',
            url: 'https://soundcloud.com/original-key-records/veak-puur-babylon-bassface',
            title: 'Veak - Puur Babylon (Bassface Sascha Remix) - Original Key Records',
          },
          {
            title: 'Mr Explicit - Blind Reality - Original Key Records',
            published: '2020-06-30T09:02:34Z',
            url: 'https://soundcloud.com/original-key-records/mr-explicit-blind-reality',
          },
          {
            url: 'https://soundcloud.com/original-key-records/veak-bringing-the-vibe',
            title: 'Veak - Bringing The Vibe - Original Key Records',
            published: '2021-05-06T08:04:13Z',
          },
          {
            title: 'Mr Explicit - Nibiru - Original Key Records',
            url: 'https://soundcloud.com/original-key-records/mr-explicit-nibiru-original',
            published: '2020-06-30T09:02:32Z',
          },
          {
            url: 'https://soundcloud.com/original-key-records/veak-undercover-original-key-records',
            title: 'Veak - Undercover - Original Key Records',
            published: '2020-02-23T18:43:49Z',
          },
          {
            url: 'https://soundcloud.com/original-key-records/total-recall-firing-pistol',
            published: '2020-06-03T20:08:54Z',
            title: 'Total Recall - Firing Pistol - OriginalKeyRecords',
          },
        ],
        recent: [
          {
            title: 'Bring The Beat Mack - Same Old Story - Faces Of Jungle',
            published: '2022-11-04T19:03:28Z',
            url: 'https://soundcloud.com/original-key-records/bring-the-beat-mack-same-old-story-faces-of-jungle',
          },
        ],
      },
      name: 'Original Key Records',
      id: 'ilOoTsqePm6eVfm8YYXl',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-YRXiwYjsnksOJ3gx-ylOCBg-t500x500.jpg',
      artists: ['Halogenix ', 'K.O.T.R', 'Whiney', 'Degs'],
      followers: 136149,
      link: 'https://soundcloud.com/hospitalrecords',
      notes: '',
      styles: ['Jump Up', 'Liquid', 'Neurofunk', 'Vocal'],
      submission: 'http://www.hospitalrecords.com/demos/',
      songsSubmitted: [
        'Night & Day',
        'Now Hear This',
        'Stamina',
        'Sunday Secrets',
        "You Don't Know",
      ],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-17T14:14:12Z',
      lastScraped: 1668963227780,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/minirigs/whiney-minirig-mixtape-22',
            title: "Whiney - Minirig Mixtape '22",
            published: '2022-10-04T09:13:25Z',
          },
          {
            published: '2022-10-26T23:53:36Z',
            url: 'https://soundcloud.com/rinsefm/hospitalrecords261022',
            title: 'Hospital Records with Lens - 26 October 2022',
          },
          {
            published: '2022-10-02T23:31:51Z',
            url: 'https://soundcloud.com/rinsefm/hospitalrecords280922',
            title: 'Hospital Records with Lens, Whiney, Slay & Subten - 28 September 2022',
          },
          {
            url: 'https://soundcloud.com/rinsefm/hospital-records-with-lens-villem-napes-25-may-2022',
            title: 'Hospital Records with Lens, Villem & Napes - 25 May 2022',
            published: '2022-05-26T09:13:39Z',
          },
          {
            url: 'https://soundcloud.com/rinsefm/hospitalrecords270422',
            published: '2022-04-29T18:08:21Z',
            title: 'Hospital Records with Lens, Benny L & Unglued - 27 April 2022',
          },
          {
            published: '2022-04-22T09:06:33Z',
            title: 'Lens - BBC Radio 1 Mix - René Le Vice 04.04.2022',
            url: 'https://soundcloud.com/lens_dnb/lens-bbc-radio-1-mix-rene-le-vice-04042022',
          },
          {
            title: 'Hospital Records: Lens Mixtape Special | Rinse FM | 30th March 22',
            published: '2022-03-31T10:30:28Z',
            url: 'https://soundcloud.com/lens_dnb/hospital-recs-lens-mixtape-rinse',
          },
          {
            title:
              'Hospital Records with Lens, Bladerunner and Vektah | Rinse FM | 29th January 22',
            published: '2022-01-30T12:34:24Z',
            url: 'https://soundcloud.com/lens_dnb/hospital-recs-lens-bladerunner-vektah',
          },
          {
            title: 'Hospital Records with Lens and Dynamite MC | Rinse FM | 29th December 22',
            url: 'https://soundcloud.com/lens_dnb/hospital-recs-rinse-29th-dec',
            published: '2021-12-30T14:29:30Z',
          },
          {
            published: '2021-12-27T12:09:25Z',
            title: 'Degscast Christmas Guest Mix 25.12.21',
            url: 'https://soundcloud.com/lens_dnb/lens-degscast-mix',
          },
        ],
        recent: [
          {
            title: 'Unglued - Peanut Butter Kid',
            published: '2022-11-17T14:14:12Z',
            url: 'https://soundcloud.com/hospitalrecords/unglued-peanut-butter-kid',
          },
          {
            published: '2022-11-14T17:44:00Z',
            url: 'https://soundcloud.com/hospitalrecords/emz-stellar-feat-sir-hiss',
            title: 'Emz - Stellar (feat. Sir Hiss)',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-neverwhere',
            published: '2022-11-10T17:04:07Z',
            title: 'Bop x Subwave - Neverwhere',
          },
          {
            title: 'Bop x Subwave - Last Night',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-last-night',
            published: '2022-11-10T17:04:11Z',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-addicted-to',
            title: 'Bop x Subwave - Addicted To Space',
            published: '2022-11-10T17:04:16Z',
          },
          {
            title: 'Bop x Subwave - Hush (feat. Enei & SOLAH)',
            published: '2022-11-10T17:04:20Z',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-hush-feat-enei',
          },
          {
            published: '2022-11-10T17:04:22Z',
            title: 'Bop x Subwave - Deepnoid',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-deepnoid',
          },
          {
            title: 'Bop x Subwave - Run Away (feat. Karina Ramage)',
            published: '2022-11-10T17:04:25Z',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-run-away-feat',
          },
          {
            published: '2022-11-10T17:04:27Z',
            title: 'Bop x Subwave - Closer 2 U',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-closer-2-u',
          },
          {
            published: '2022-11-10T17:04:30Z',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-wet-cigarette',
            title: 'Bop x Subwave - Wet Cigarette',
          },
        ],
        popular: [
          {
            title: 'Kings Of The Rollers - Somebody Else (feat. Lydia Plain)',
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-somebody-else-feat-lydia-plain',
            published: '2020-04-16T09:42:13Z',
          },
          {
            published: '2017-01-09T15:04:42Z',
            title: 'Serum & Inja - Blow Them Away',
            url: 'https://soundcloud.com/hospitalrecords/serum-inja-blow-them-away',
          },
          {
            title: 'John Holt - Police In Helicopter (Benny L Remix)',
            url: 'https://soundcloud.com/hospitalrecords/john-holt-police-in-helicopter-benny-l-remix',
            published: '2019-01-11T10:35:14Z',
          },
          {
            title: 'P Money & Whiney - Dead In The Eye (feat. Example)',
            url: 'https://soundcloud.com/hospitalrecords/p-money-whiney-dead-in-the-eyes-feat-example',
            published: '2022-08-19T08:47:10Z',
          },
          {
            published: '2020-01-17T14:09:43Z',
            title: 'Kings Of The Rollers - You Got Me (S.P.Y Remix)',
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-you-got-me-spy-remix',
          },
          {
            title: 'P Money x Whiney - Buss The Red',
            published: '2021-11-22T10:01:10Z',
            url: 'https://soundcloud.com/hospitalrecords/p-money-x-whiney-buss-the-red-1',
          },
          {
            title: 'Winslow - Slapbox Funk (ft. PRSPKTV)',
            published: '2022-08-25T14:21:20Z',
            url: 'https://soundcloud.com/hospitalrecords/winslow-x-prspktv-slapbox-funk-ntm-mastered',
          },
          {
            published: '2022-05-06T09:42:50Z',
            url: 'https://soundcloud.com/hospitalrecords/p-money-x-whiney-sorry-im-not-sorry-1',
            title: "P Money x Whiney - Sorry I'm Not Sorry",
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/metrik-fatso-vip',
            title: 'Metrik - Fatso VIP',
            published: '2017-08-04T14:53:02Z',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-shella-feat-chimpo-halogenix-remix',
            title: 'Kings Of The Rollers - Shella (feat. Chimpo) (Halogenix Remix)',
            published: '2021-03-12T11:27:12Z',
          },
          {
            title: 'Zeitgeist - Move On (feat. Nia Archives)',
            published: '2021-03-10T14:48:38Z',
            url: 'https://soundcloud.com/hospitalrecords/zeitgeist-move-on-feat-nia-archives',
          },
          {
            title: 'Bop x Subwave - Wait For Me',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-wait-for-me-1',
            published: '2022-09-20T08:52:32Z',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/whiney-doktor-coco-slay-flight-mode',
            title: 'Whiney, Doktor, Coco & Slay - Flight Mode',
            published: '2022-09-23T09:54:24Z',
          },
          {
            published: '2021-02-17T14:46:53Z',
            title: 'Whiney & Inja - Game Face (Stay Alert)',
            url: 'https://soundcloud.com/hospitalrecords/whiney-inja-game-face-stay-alert-1',
          },
          {
            published: '2018-08-02T15:48:44Z',
            title: 'Kings Of The Rollers - Rave Alarm',
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-rave-alarm',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/metrik-grafix-overdrive-1',
            published: '2021-07-27T08:52:26Z',
            title: 'Metrik & Grafix - Overdrive',
          },
          {
            published: '2022-08-26T10:15:18Z',
            url: 'https://soundcloud.com/hospitalrecords/solah-brand-new-2',
            title: 'SOLAH - Brand New',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/netsky-hybrid-minds-let-me-hold-you',
            published: '2020-11-03T16:29:57Z',
            title: 'Netsky & Hybrid Minds - Let Me Hold You',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/netsky-hold-on-feat-becky-hill',
            published: '2020-11-30T15:22:44Z',
            title: 'Netsky - Hold On (feat. Becky Hill)',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-you-got-me',
            published: '2019-03-15T11:11:40Z',
            title: 'Kings Of The Rollers - You Got Me',
          },
          {
            published: '2022-10-28T09:05:51Z',
            title: "Bop x Subwave - Rave I Didn't Know Was The Last",
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-rave-i-didnt-know-was-the-last',
          },
          {
            url: 'https://soundcloud.com/hospitalrecords/metrik-gravity-1',
            title: 'Metrik - Gravity',
            published: '2019-09-23T10:10:06Z',
          },
          {
            title: 'Fred V & Grafix & Metrik - Tension (feat. Kate Westall)',
            published: '2017-01-06T15:03:35Z',
            url: 'https://soundcloud.com/hospitalrecords/fred-v-grafix-metrik-tension-feat-kate-westall',
          },
          {
            title: 'Kings Of The Rollers - Somebody Else Part 2 (feat. Lydia Plain)',
            published: '2021-11-11T10:25:28Z',
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-somebody-else-part-2-feat-lydia-plain',
          },
          {
            published: '2022-09-30T09:09:19Z',
            title: 'Fred V x Audioscribe - Lose Yourself Again',
            url: 'https://soundcloud.com/hospitalrecords/fred-v-lose-yourself-again',
          },
          {
            published: '2022-11-07T10:52:23Z',
            url: 'https://soundcloud.com/hospitalrecords/unglued-x-whiney-x-lens-if-you-like-that-feat-doktor',
            title: 'Unglued x Whiney x Lens - If You Like That (feat. Doktor)',
          },
          {
            published: '2022-10-07T08:10:19Z',
            title: 'Bop x Subwave - Storm In A Teacup (feat. Isaac Howlett)',
            url: 'https://soundcloud.com/hospitalrecords/bop-x-subwave-storm-in-a-teacup-feat-isaac-howlett',
          },
          {
            published: '2018-05-10T13:20:14Z',
            url: 'https://soundcloud.com/hospitalrecords/degs-povegila',
            title: 'Degs - Poveglia (feat. De:Tune)',
          },
          {
            title: 'SOLAH - Glorify',
            published: '2022-09-23T10:28:41Z',
            url: 'https://soundcloud.com/hospitalrecords/solah-glorify-1',
          },
          {
            title: 'Kings Of The Rollers - Round Here (feat. Redders)',
            published: '2019-04-29T10:14:47Z',
            url: 'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-round-here-feat-redders',
          },
        ],
      },
      email: '',
      name: 'Hospital Records',
      widgets: [
        'https://soundcloud.com/hospitalrecords/kings-of-the-rollers-you-got-me-spy-remix',
        'https://soundcloud.com/hospitalrecords/p-money-x-whiney-buss-the-red-1',
        'https://soundcloud.com/hospitalrecords/zeitgeist-move-on-feat-nia-archives',
        'https://soundcloud.com/hospitalrecords/degs-povegila',
      ],
      id: 'ip8wTfx5IuzCUxzeohz1',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000602524887-lmsv1x-t500x500.jpg',
      artists: [],
      followers: 2469,
      link: 'https://soundcloud.com/terrafirmasound',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2021-06-15T17:15:23Z',
      lastScraped: 1668963229472,
      tracks: {
        reposts: [
          {
            url: 'https://soundcloud.com/skankandbass/subdue-you-make-me',
            title: 'Subdue - You Make Me',
            published: '2021-06-15T11:40:05Z',
          },
          {
            title: 'Subdue - Flip The Coin (feat. SMB) [Premiere]',
            published: '2021-06-15T17:15:23Z',
            url: 'https://soundcloud.com/dnbdojo/subdue-flip-the-coin-feat-smb-premiere',
          },
          {
            url: 'https://soundcloud.com/skankandbass/shibumi-hajimari-morningstar',
            published: '2021-05-21T10:52:55Z',
            title: 'Shibumi & Hajimari - Morningstar',
          },
          {
            url: 'https://soundcloud.com/standtogetherdnb/stand-together-mix-by-pyxis',
            published: '2021-04-28T16:12:56Z',
            title: 'Stand Together Mix by Pyxis',
          },
          {
            title: 'Flawoh - Always [Boey]',
            published: '2021-04-21T15:59:56Z',
            url: 'https://soundcloud.com/standtogetherdnb/flawoh-always',
          },
          {
            published: '2021-04-16T12:43:42Z',
            url: 'https://soundcloud.com/freefromsleep/ffs-premiere-kray-stop-eloisa',
            title: 'FFS Premiere: Kray — Stop [Eloisa]',
          },
          {
            title: 'Kublai - Migration [Goldfat]',
            url: 'https://soundcloud.com/standtogetherdnb/kublai-migration-goldfat',
            published: '2021-04-20T10:49:58Z',
          },
          {
            url: 'https://soundcloud.com/standtogetherdnb/brainwork-mnml-not-afraid-free-download',
            published: '2021-04-15T12:06:49Z',
            title: 'Brainwork & Mnml - Not Afraid [Free Download]',
          },
          {
            url: 'https://soundcloud.com/skankandbass/heu-tamepohe',
            title: 'Heu - Tamepohe',
            published: '2021-03-30T15:52:00Z',
          },
          {
            published: '2021-03-09T09:22:11Z',
            url: 'https://soundcloud.com/skankandbass/smb-helix',
            title: 'SMB - Helix',
          },
        ],
        popular: [
          {
            published: '2019-01-29T13:36:33Z',
            url: 'https://soundcloud.com/terrafirmasound/objectiv-bad-karma-feat',
            title: 'Objectiv - Bad Karma (feat. Haribo)',
          },
          {
            title: 'Hiraeth - Greatest Day',
            published: '2020-08-26T16:07:17Z',
            url: 'https://soundcloud.com/terrafirmasound/hiraethgreatestday',
          },
          {
            published: '2020-08-26T16:11:26Z',
            title: 'Rift - Where Did You Go',
            url: 'https://soundcloud.com/terrafirmasound/rift-where-did-you-go',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/alexvnder-the-little-things',
            title: 'Alexvnder - The Little Things',
            published: '2019-06-03T19:34:42Z',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/retrakt-even-flow-1',
            title: 'Retrakt - Even Flow',
            published: '2019-01-29T13:36:19Z',
          },
          {
            title: 'Subdue - Your Everything',
            url: 'https://soundcloud.com/terrafirmasound/subdue-your-everything',
            published: '2020-08-26T16:12:05Z',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/shibumi-629pm-feat-george-lunn',
            published: '2021-05-25T02:59:10Z',
            title: 'Shibumi - 629PM (feat. George Lunn)',
          },
          {
            published: '2018-10-20T13:13:47Z',
            title: 'Low:r - Let You In',
            url: 'https://soundcloud.com/terrafirmasound/lowr-let-you-in',
          },
          {
            published: '2018-09-14T15:00:05Z',
            url: 'https://soundcloud.com/terrafirmasound/missing-shaku-1',
            title: 'Missing - Shaku',
          },
          {
            title: 'Nelver - Search Within',
            url: 'https://soundcloud.com/terrafirmasound/nelver-search-within',
            published: '2020-08-26T16:10:05Z',
          },
          {
            title: 'Pulsate & Nexus & Tight - No Grudge',
            published: '2018-01-22T13:06:19Z',
            url: 'https://soundcloud.com/terrafirmasound/no-grudge',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/qua-rush-frame-memories',
            title: 'Qua Rush & Frame - Memories',
            published: '2020-09-20T21:04:02Z',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/plox-conditions',
            title: 'Plox - Conditions',
            published: '2020-11-12T08:41:41Z',
          },
          {
            title: 'Heu - Dragonflies',
            url: 'https://soundcloud.com/terrafirmasound/heu-dragonflies',
            published: '2021-04-11T07:37:06Z',
          },
          {
            title: 'Nemy & Missin - Did To Me',
            url: 'https://soundcloud.com/terrafirmasound/did-to-me',
            published: '2018-01-22T13:06:18Z',
          },
          {
            published: '2017-09-05T18:20:47Z',
            title: 'Telomic - Control',
            url: 'https://soundcloud.com/terrafirmasound/telomic-control',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/radicall-something-more',
            title: 'Radicall - Something More',
            published: '2017-04-05T08:50:54Z',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/smb-intoxication-ntm-mastered-1',
            title: 'SMB - Intoxication',
            published: '2021-03-16T03:44:08Z',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/retrakt-mix-it-up-tf014',
            published: '2018-11-05T12:51:28Z',
            title: 'Retrakt - Mix It Up',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/terra-rising-mixed-by-lowr-out-tomorrow',
            published: '2020-10-06T03:14:26Z',
            title: 'Terra Rising - Mixed by Low:r',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/radicall-upside-down',
            title: 'Radicall - Upside Down',
            published: '2017-05-08T15:08:45Z',
          },
          {
            title: 'Low:r & Horton - Skewed',
            url: 'https://soundcloud.com/terrafirmasound/low-r-horton-skewed',
            published: '2019-01-29T13:36:29Z',
          },
          {
            published: '2017-06-05T13:24:11Z',
            title: 'Outer Mass - White Lies (Redemptive Remix)',
            url: 'https://soundcloud.com/terrafirmasound/outer-mass-white-lies-1',
          },
          {
            title: 'Askel - Nothing To Say',
            url: 'https://soundcloud.com/terrafirmasound/askel-nothing-to-say-1',
            published: '2019-04-26T10:42:40Z',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/low5-orbin-the-basement-1',
            published: '2017-05-05T19:18:47Z',
            title: 'Low5 & Orbin - The Basement',
          },
          {
            published: '2018-01-22T13:06:16Z',
            url: 'https://soundcloud.com/terrafirmasound/soul-switch',
            title: 'Tarz - Soul Switch',
          },
          {
            published: '2020-08-26T16:07:48Z',
            title: 'Ackroyd & Surface - Into The Valley',
            url: 'https://soundcloud.com/terrafirmasound/ackroydsurfaceintothevalley',
          },
          {
            title: 'Manikin - Decapitate Ft. Hijak MC',
            published: '2019-07-17T12:31:47Z',
            url: 'https://soundcloud.com/terrafirmasound/manikin-decapitate-ft-hijak-1',
          },
          {
            published: '2017-09-05T21:04:58Z',
            url: 'https://soundcloud.com/terrafirmasound/telomic-onism',
            title: 'Telomic - Onism',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/aperio-critical-event-so-hot',
            title: 'Aperio & Critical Event - So Hot',
            published: '2019-01-29T13:36:38Z',
          },
        ],
        recent: [
          {
            published: '2021-05-25T02:59:10Z',
            url: 'https://soundcloud.com/terrafirmasound/shibumi-629pm-feat-george-lunn',
            title: 'Shibumi - 629PM (feat. George Lunn)',
          },
          {
            published: '2021-04-11T07:37:06Z',
            url: 'https://soundcloud.com/terrafirmasound/heu-dragonflies',
            title: 'Heu - Dragonflies',
          },
          {
            url: 'https://soundcloud.com/terrafirmasound/smb-intoxication-ntm-mastered-1',
            title: 'SMB - Intoxication',
            published: '2021-03-16T03:44:08Z',
          },
          {
            title: 'Plox - Conditions',
            published: '2020-11-12T08:41:41Z',
            url: 'https://soundcloud.com/terrafirmasound/plox-conditions',
          },
        ],
      },
      name: 'Terra Firma',
      id: 'ivBDxvhosDw2Zv0v4bcL',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-kDYdkIoaBPUXckva-dXapaA-t500x500.jpg',
      artists: ['Gray', 'Aries', 'Disrupta'],
      followers: 25501,
      link: 'https://soundcloud.com/born-on-road',
      notes: '',
      styles: ['Jump Up', 'Jungle'],
      submission: 'https://bornonroad.com/contact/',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-15T18:46:23Z',
      lastScraped: 1668963230873,
      tracks: {
        reposts: [
          {
            published: '2022-08-30T16:46:46Z',
            title: 'Arctic Monkeys - When the Sun Goes Down (Gray Bootleg) ⫷Free Download⫸',
            url: 'https://soundcloud.com/gray_music/arctic-monkeys-when-the-sun-goes-down-gray-bootleg-free-download',
          },
          {
            title: 'Born On Road w/ Marcus Visionary, Aries & Kelvin 373 - 09TH JUN 2022',
            url: 'https://soundcloud.com/swufm/born-on-road-09-jun-2022',
            published: '2022-06-09T22:00:56Z',
          },
          {
            published: '2022-05-12T22:00:59Z',
            url: 'https://soundcloud.com/swufm/born-on-road-12-may-2022',
            title: 'Born On Road 12TH MAY 2022',
          },
          {
            published: '2022-03-10T23:00:58Z',
            url: 'https://soundcloud.com/swufm/born-on-road-w-tc-jakes-aries',
            title: 'Born On Road w/ TC & Jakes + Aries & Kelvin 373 10TH MAR 2022',
          },
          {
            title: 'Born On Road w/ DJ SS & Napes 14TH APR 2022',
            url: 'https://soundcloud.com/swufm/born-on-road-w-dj-ss-napes-14',
            published: '2022-04-14T22:01:01Z',
          },
          {
            title: 'Born On Road w/ Disrupta 09TH SEP 2021',
            url: 'https://soundcloud.com/swufm/born-on-road-w-disrupta-09-sep',
            published: '2021-09-09T22:00:58Z',
          },
          {
            title: 'Born On Road w/ Gold Dubs & A Little Sound 09TH DEC 2021',
            url: 'https://soundcloud.com/swufm/born-on-road-w-gold-dubs-a',
            published: '2021-12-09T23:00:58Z',
          },
          {
            published: '2022-01-13T23:01:02Z',
            url: 'https://soundcloud.com/swufm/born-on-road-w-gold-dubs-x',
            title: 'Born On Road w/ Gold Dubs x Frenetic 13TH JAN 2022',
          },
          {
            title: 'Born On Road 10TH FEB 2022',
            published: '2022-02-10T23:00:56Z',
            url: 'https://soundcloud.com/swufm/born-on-road-10-feb-2022',
          },
          {
            url: 'https://soundcloud.com/golddubs/stand-up-tall-jungle-music',
            published: '2021-11-09T14:37:42Z',
            title: 'STAND UP TALL / JUNGLE MUSIC - PATREON DUBSCRIPTION',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/born-on-road/gray-one-spliff-clip',
            published: '2019-12-09T13:35:22Z',
            title: 'Gray - One Spliff - Clip - Out Now',
          },
          {
            url: 'https://soundcloud.com/born-on-road/dont-stop',
            title: "Acuna ft. MC Spyda - Don't Stop - Clip - Out Now!",
            published: '2022-04-21T19:12:04Z',
          },
          {
            url: 'https://soundcloud.com/born-on-road/aries-rahmanee',
            title: 'Aries & Rahmanee feat. Gardna - On Road (Ben Snow Remix)- Clip',
            published: '2019-07-03T18:29:08Z',
          },
          {
            url: 'https://soundcloud.com/born-on-road/nick-the-lot-life-is-a-journey',
            title: 'Nick The Lot - Life Is A Journey',
            published: '2022-09-01T14:45:43Z',
          },
          {
            url: 'https://soundcloud.com/born-on-road/gray-rubadub-clip',
            published: '2019-12-09T13:19:49Z',
            title: 'Gray - Rubadub - Clip - Out Now',
          },
          {
            title: "ARIES & DAVID BOOMAH - AIN'T NO SUNSHINE (FREE DOWNLOAD)",
            published: '2021-02-04T19:04:53Z',
            url: 'https://soundcloud.com/born-on-road/aries-david-boomah-aint-no-sunshine',
          },
          {
            title: 'Selecta J-Man Ft. Suku - Couple Guinness - Clip - Out Now!',
            published: '2021-02-25T18:01:28Z',
            url: 'https://soundcloud.com/born-on-road/selecta-j-man-ft-suku-couple-guinness-clip',
          },
          {
            url: 'https://soundcloud.com/born-on-road/1-disrupta-the-night-feat-kathika-clip',
            published: '2020-06-09T17:08:11Z',
            title: 'Disrupta - The Night (Feat. Kathika) - CLIP',
          },
          {
            url: 'https://soundcloud.com/born-on-road/5-disrupta-honey-clip',
            title: 'Disrupta - Honey - CLIP',
            published: '2020-06-09T18:01:31Z',
          },
          {
            url: 'https://soundcloud.com/born-on-road/dj-gaw-selecta-j-man-ft-a-little-sound-rum-lime-clip',
            published: '2020-08-12T13:30:26Z',
            title: 'DJ Gaw & Selecta J - Man Ft. A Little Sound - Rum & Lime - Clip - Out Now!',
          },
          {
            url: 'https://soundcloud.com/born-on-road/100-gray-productions-mix',
            published: '2019-11-27T17:00:49Z',
            title: '100% Gray Productions Mix',
          },
          {
            url: 'https://soundcloud.com/born-on-road/napes-chopper-gunner-promo-mix',
            title: 'Napes - Chopper Gunner Promo Mix',
            published: '2022-03-08T11:45:00Z',
          },
          {
            title: 'ARIES, GOLD DUBS, BEVAN & ANDY SIM FT LION ART - CHEM TRAILS - CLIP',
            url: 'https://soundcloud.com/born-on-road/aries-gold-bevan-andy-sim-ft',
            published: '2013-03-20T02:41:43Z',
          },
          {
            published: '2020-01-21T11:36:35Z',
            title: 'LUPO & JAPPA - NUFF GAL (CLIP)',
            url: 'https://soundcloud.com/born-on-road/lupo-jappa-nuff-gal-clip-born',
          },
          {
            title:
              'Aries, Gold Dubs & Jinx Ft. Eva Lazarus - Fall In Love - DJ Gaw & Offline Remix - Out Now!',
            published: '2020-11-24T15:35:28Z',
            url: 'https://soundcloud.com/born-on-road/aries-gold-dubs-jinx-ft-eva-lazarus-fall-in-love-dj-gaw-offline-remix-bor-dub-clip',
          },
          {
            published: '2020-05-25T15:40:30Z',
            url: 'https://soundcloud.com/born-on-road/prod-mix-2',
            title: '100% Disrupta Productions Mix',
          },
          {
            published: '2022-11-10T15:43:05Z',
            url: 'https://soundcloud.com/born-on-road/a-little-sound-document-one-better-off-alone',
            title: 'A Little Sound & Document One - Better Off Alone',
          },
          {
            url: 'https://soundcloud.com/born-on-road/1-zoro-ft-junior-dangerous-light-it-up-born-on-road-dub',
            title: 'Zoro Ft. Junior Dangerous - Light It Up - Clip',
            published: '2020-09-29T15:16:14Z',
          },
          {
            published: '2022-08-05T09:53:35Z',
            url: 'https://soundcloud.com/born-on-road/phibes-just-for-tonight',
            title: 'Phibes - Just For Tonight - Out now!',
          },
          {
            published: '2019-07-03T16:39:48Z',
            url: 'https://soundcloud.com/born-on-road/aries-herbsmoke-benny-page',
            title: 'Aries - Herbsmoke (Benny Page)- Clip',
          },
          {
            title: 'Selecta J-Man - Run Dat - Out Now!',
            url: 'https://soundcloud.com/born-on-road/selecta-j-man-run-dat-out-now',
            published: '2022-11-15T18:45:23Z',
          },
          {
            title:
              'Aries, Gold Dubs, Bevan & Andy Sim - Chem Trails Ft. Lion Art (Napes Remix) - Free D/L',
            url: 'https://soundcloud.com/born-on-road/aries-gold-dubs-bevan-andy-sim-chem-trails-ft-lion-art-napes-remix-free-dl',
            published: '2020-03-26T18:05:25Z',
          },
          {
            published: '2019-12-09T13:37:32Z',
            title: 'Gray - Blood Ft. Ragga Twins - Clip - Out Now',
            url: 'https://soundcloud.com/born-on-road/gray-blood-ft-ragga-twins-clip-out-december-13th',
          },
          {
            url: 'https://soundcloud.com/born-on-road/alcemist-like-that-clip',
            title: 'Alcemist - Like That - Clip',
            published: '2020-08-25T15:49:02Z',
          },
          {
            title: 'Gray & Mozey - Give Me A Sign Ft. 2Shy - Clip - Out Now!',
            published: '2022-03-04T13:28:14Z',
            url: 'https://soundcloud.com/born-on-road/gray-mozey-give-me-a-sign-ft-2shy-clip',
          },
          {
            url: 'https://soundcloud.com/born-on-road/phibes-i-can-never-get-enough-clip-24092021',
            title: 'Phibes - Never Get Enough - Clip - Out Now!',
            published: '2021-09-09T12:53:31Z',
          },
          {
            published: '2021-12-04T16:50:46Z',
            title: 'Gray - Rubadub VIP - Out Now!',
            url: 'https://soundcloud.com/born-on-road/gray-rubadub-vip-born-on-road',
          },
          {
            title: 'Born on Road Mixtape Episode #1 - Crossy',
            url: 'https://soundcloud.com/born-on-road/born-on-road-mixtape-series-1-crossy',
            published: '2020-03-11T18:23:38Z',
          },
          {
            title: 'Disrupta - Too Much - Clip - Out Now!',
            published: '2022-07-01T17:21:18Z',
            url: 'https://soundcloud.com/born-on-road/disrupta-too-much-clip',
          },
          {
            url: 'https://soundcloud.com/born-on-road/dr-meaker-gold-dubs-ft-j-man-born-inna-babylon-clip',
            title: 'Dr Meaker & Gold Dubs Ft. Jman - Born Inna Babylon - Clip - Out Now!',
            published: '2021-04-14T15:38:46Z',
          },
        ],
        recent: [
          {
            published: '2022-11-15T18:46:23Z',
            title: 'MC Det & Martial Taktics - Godfather - Out Now!',
            url: 'https://soundcloud.com/born-on-road/mc-det-martial-taktics-godfather-born-on-road',
          },
          {
            url: 'https://soundcloud.com/born-on-road/selecta-j-man-run-dat-out-now',
            published: '2022-11-15T18:45:23Z',
            title: 'Selecta J-Man - Run Dat - Out Now!',
          },
          {
            published: '2022-11-10T15:43:59Z',
            title: 'A Little Sound & Dr Meaker - The Other Side',
            url: 'https://soundcloud.com/born-on-road/a-little-sound-dr-meaker-the-other-side-born-on-road',
          },
          {
            url: 'https://soundcloud.com/born-on-road/a-little-sound-document-one-better-off-alone',
            published: '2022-11-10T15:43:05Z',
            title: 'A Little Sound & Document One - Better Off Alone',
          },
          {
            url: 'https://soundcloud.com/born-on-road/a-little-sound-breathe',
            title: 'A Little Sound - Breathe',
            published: '2022-11-10T15:42:07Z',
          },
          {
            url: 'https://soundcloud.com/born-on-road/a-little-sound-gray-memories',
            title: 'A Little Sound  & Gray - Memories',
            published: '2022-11-10T15:41:16Z',
          },
          {
            title: 'Nick The Lot - Life Is A Journey',
            published: '2022-09-01T14:45:43Z',
            url: 'https://soundcloud.com/born-on-road/nick-the-lot-life-is-a-journey',
          },
          {
            published: '2022-08-05T09:53:35Z',
            url: 'https://soundcloud.com/born-on-road/phibes-just-for-tonight',
            title: 'Phibes - Just For Tonight - Out now!',
          },
        ],
      },
      email: '',
      name: 'Born on Road',
      widgets: [
        'https://soundcloud.com/born-on-road/gray-one-spliff-clip',
        'https://soundcloud.com/born-on-road/selecta-j-man-ft-suku-couple-guinness-clip',
        'https://soundcloud.com/born-on-road/zoro-jappa-bish-lsd-clip',
        'https://soundcloud.com/born-on-road/dont-stop',
      ],
      id: 'jXcG3i9KvqRA59RcJ3JH',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-xhzielgwuvZ60Ee9-yxyrzw-t500x500.jpg',
      artists: ['Calyx & TeeBee', 'Simula', 'Voltage ', 'Andy C'],
      followers: 128751,
      link: 'https://soundcloud.com/ramrecords',
      notes: '',
      styles: ['Jump Up', 'Neurofunk'],
      submission: 'info@ramrecords.com',
      songsSubmitted: [
        'Night & Day',
        'Now Hear This',
        'Stamina',
        'Sunday Secrets',
        "You Don't Know",
      ],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-18T11:57:48Z',
      lastScraped: 1668963232210,
      tracks: {
        reposts: [
          {
            title: "My Time / Can't Get Enough",
            published: '2022-10-24T08:15:13Z',
            url: 'https://soundcloud.com/alb-dnb/sets/my-time-cant-get-enough',
          },
          {
            url: 'https://soundcloud.com/alb-dnb/my-time',
            published: '2022-10-24T06:35:40Z',
            title: 'My Time',
          },
          {
            title: "Can't Get Enough",
            published: '2022-10-24T06:39:01Z',
            url: 'https://soundcloud.com/alb-dnb/cant-get-enough',
          },
          {
            title: "ALB 'Can't Get Enough' [RAM Records]",
            published: '2022-11-10T15:14:15Z',
            url: 'https://soundcloud.com/datatransmissiondnb/alb-cant-get-enough-ram-records',
          },
          {
            title: 'ALB - My Time [Premiere]',
            url: 'https://soundcloud.com/wearestudio/alb-mytime',
            published: '2022-11-10T11:43:08Z',
          },
          {
            published: '2022-10-28T15:19:38Z',
            title: 'RENEGADE RIDDIMS: Shanks',
            url: 'https://soundcloud.com/datatransmissiondnb/renegade-riddims-shanks',
          },
          {
            title: 'Forum - Ohka [Rendah Mag Premiere]',
            url: 'https://soundcloud.com/rendahmag/forum-ohka-premiere',
            published: '2022-09-20T09:15:34Z',
          },
          {
            title: "Forum 'Jouvence' [ProgRAM]",
            url: 'https://soundcloud.com/datatransmissiondnb/forum-jouvence-program-1',
            published: '2022-09-20T14:59:20Z',
          },
          {
            published: '2022-09-14T12:26:44Z',
            url: 'https://soundcloud.com/datatransmissiondnb/hadley-catching-feelings-ram-records',
            title: "Hadley 'Catching Feelings' [RAM Records]",
          },
        ],
        popular: [
          {
            title: 'Loadstar - Stepped Outside',
            url: 'https://soundcloud.com/ramrecords/loadstar-stepped-outside',
            published: '2014-04-14T12:04:52Z',
          },
          {
            published: '2013-03-25T13:24:26Z',
            title: 'Wilkinson - Take You Higher',
            url: 'https://soundcloud.com/ramrecords/wilkinson-take-you-higher-7',
          },
          {
            published: '2015-10-26T10:17:15Z',
            title: 'DC Breaks - Breathe Feat. Dave Gibson',
            url: 'https://soundcloud.com/ramrecords/dc-breaks-breathe-feat-dave-gibson-1',
          },
          {
            url: 'https://soundcloud.com/ramrecords/sub-focus-timewarp-vip',
            title: 'Sub Focus - Timewarp VIP',
            published: '2010-04-14T16:03:54Z',
          },
          {
            url: 'https://soundcloud.com/ramrecords/mandidextrous-bish-techno-on-my-mind',
            title: 'Mandidextrous & BiSH - Techno On My Mind',
            published: '2021-10-22T11:23:29Z',
          },
          {
            published: '2022-09-23T11:33:46Z',
            title: 'Forum - Pissed Up',
            url: 'https://soundcloud.com/ramrecords/forum-pissed-up-2',
          },
          {
            title: 'Junk Mail & A.M.C - Blocklist',
            url: 'https://soundcloud.com/ramrecords/junk-mail-amc-blocklist',
            published: '2022-04-28T12:56:39Z',
          },
          {
            url: 'https://soundcloud.com/ramrecords/forum-pissed-up-1',
            published: '2022-09-15T13:41:59Z',
            title: 'Forum - Pissed Up',
          },
          {
            url: 'https://soundcloud.com/ramrecords/voltage-between-the-lines',
            title: 'Voltage - Between The Lines',
            published: '2019-07-01T13:36:09Z',
          },
          {
            url: 'https://soundcloud.com/ramrecords/sub-focus-tidal-wave-feat-1',
            title: 'Sub Focus - Tidal Wave feat Alpines',
            published: '2012-11-06T16:58:59Z',
          },
          {
            url: 'https://soundcloud.com/ramrecords/shanks-the-universe',
            title: 'Shanks - The Universe',
            published: '2022-10-21T10:36:11Z',
          },
          {
            published: '2015-12-25T12:41:54Z',
            url: 'https://soundcloud.com/ramrecords/mind-vortex-future-fold',
            title: 'Mind Vortex - Future Fold',
          },
          {
            title: 'Calyx & TeeBee - Elevate This Sound',
            url: 'https://soundcloud.com/ramrecords/calyx-teebee-elevate-this',
            published: '2012-07-11T11:55:41Z',
          },
          {
            url: 'https://soundcloud.com/ramrecords/major-lazer-ft-amber-coffman',
            published: '2013-03-13T14:38:22Z',
            title: 'Major Lazer ft Amber Coffman - Get Free (Andy C Remix)',
          },
          {
            url: 'https://soundcloud.com/ramrecords/origin-unknown-valley-of-the-shadows-ramrewind',
            title: 'Origin Unknown - Valley Of The Shadows #RamRewind',
            published: '2014-10-02T10:15:51Z',
          },
          {
            title: 'Meraki: 30 Years of RAM Records Mix',
            published: '2022-10-20T15:00:45Z',
            url: 'https://soundcloud.com/ramrecords/meraki-30-years-of-ram-records-mix',
          },
          {
            url: 'https://soundcloud.com/ramrecords/mc-det-martial-taktics-follow-me',
            published: '2022-10-07T10:56:59Z',
            title: 'MC Det & Martial Taktics - Follow Me',
          },
          {
            title: 'Simula - See It Through My Eyes',
            published: '2020-05-29T10:13:14Z',
            url: 'https://soundcloud.com/ramrecords/simula-see-it-through-my-eyes',
          },
          {
            title: 'L 33 - If You',
            published: '2022-07-21T10:40:27Z',
            url: 'https://soundcloud.com/ramrecords/06-l-33-if-you',
          },
          {
            published: '2014-10-16T15:43:29Z',
            url: 'https://soundcloud.com/ramrecords/audio-nil-by-mouth',
            title: 'Audio - Nil By Mouth',
          },
          {
            published: '2013-08-27T11:27:30Z',
            title: 'Frankee - Wonderland',
            url: 'https://soundcloud.com/ramrecords/frankee-wonderland-1',
          },
          {
            title: 'D - Code & Psylence Coming Down Ft. Jessica Wilde',
            url: 'https://soundcloud.com/ramrecords/d-code-psylence-coming-down-ft-jessica-wilde',
            published: '2022-09-14T16:06:24Z',
          },
          {
            title: 'Conrad Subs - Revival',
            url: 'https://soundcloud.com/ramrecords/05-conrad-subs-revival',
            published: '2022-07-21T10:40:19Z',
          },
          {
            published: '2022-10-07T10:57:43Z',
            url: 'https://soundcloud.com/ramrecords/mc-det-martial-taktics-play-with-me',
            title: 'MC Det & Martial Taktics - Play With Me',
          },
          {
            published: '2022-11-04T18:12:34Z',
            title: 'Carrier - Locust',
            url: 'https://soundcloud.com/ramrecords/carrier-locust',
          },
          {
            title: 'Andy C - Workout - out now',
            published: '2013-10-12T10:43:22Z',
            url: 'https://soundcloud.com/ramrecords/andy-c-workout-annie-mac-1',
          },
          {
            url: 'https://soundcloud.com/ramrecords/june-miller-himsa-2',
            published: '2015-10-12T11:20:54Z',
            title: 'June Miller - Himsa',
          },
          {
            published: '2022-09-23T11:34:35Z',
            url: 'https://soundcloud.com/ramrecords/forum-cecil-hotel-the-wegger',
            title: 'Forum & Cecil Hotel - The Wegger',
          },
          {
            title: 'Forum - Jouvence',
            published: '2022-09-23T11:37:01Z',
            url: 'https://soundcloud.com/ramrecords/forum-jouvence',
          },
          {
            url: 'https://soundcloud.com/ramrecords/forum-every-step-define-me',
            published: '2022-09-23T11:34:07Z',
            title: 'Forum - Every Step Define Me',
          },
        ],
        recent: [
          {
            title: 'Prestige - Silence Is Gold',
            published: '2022-11-18T11:57:48Z',
            url: 'https://soundcloud.com/ramrecords/prestige-silence-is-gold',
          },
          {
            published: '2022-11-18T11:57:15Z',
            url: 'https://soundcloud.com/ramrecords/prestige-last-night',
            title: 'Prestige - Last Night',
          },
          {
            published: '2022-11-18T11:55:21Z',
            title: 'Prestige - Big Man Problems',
            url: 'https://soundcloud.com/ramrecords/prestige-big-man-problems',
          },
          {
            title: 'Prestige - Zlatoglavaya',
            url: 'https://soundcloud.com/ramrecords/prestige-zlatoglavaya',
            published: '2022-11-18T11:55:18Z',
          },
          {
            title: 'Prestige - No Bright',
            published: '2022-11-18T11:55:13Z',
            url: 'https://soundcloud.com/ramrecords/prestige-no-bright',
          },
        ],
      },
      name: 'RAM Records',
      widgets: [
        'https://soundcloud.com/ramrecords/forum-pissed-up-2',
        'https://soundcloud.com/ramrecords/shanks-the-universe',
        'https://soundcloud.com/ramrecords/06-l-33-if-you',
        'https://soundcloud.com/ramrecords/mc-det-martial-taktics-follow-me',
      ],
      email: '',
      id: 'jjcs8psaJ0XNqJMw8BYO',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-LUHMOt5cN3VHyUuy-PPQyyA-t500x500.jpg',
      artists: ['Roni Size', 'Serum'],
      followers: 47291,
      link: 'https://soundcloud.com/vrecordings',
      notes: '',
      styles: ['Jump Up', 'Jungle', 'Liquid'],
      submission: 'https://www.vrecordings.com/content/demos',
      songsSubmitted: ['Night & Day', 'Stamina', "You Don't Know"],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-17T13:05:19Z',
      lastScraped: 1668963233410,
      tracks: {
        recent: [
          {
            url: 'https://soundcloud.com/vrecordings/melinki-macca-raptor-v-recordings',
            title: 'Melinki & Macca - Raptor [V Recordings]',
            published: '2022-11-17T13:05:19Z',
          },
          {
            title: 'Melinki & Macca - Murder Situation [V Recordings]',
            published: '2022-11-17T13:03:01Z',
            url: 'https://soundcloud.com/vrecordings/melinki-macca-murder-situation-v-recordings',
          },
          {
            url: 'https://soundcloud.com/vrecordings/carlito-passenger-liquid-v',
            published: '2022-11-16T11:11:14Z',
            title: 'Carlito - Passenger [Liquid V]',
          },
          {
            published: '2022-11-10T10:46:05Z',
            title: 'MC Fava & Acuna - Unseen [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/mc-fava-acuna-unseen-v-recordings-1',
          },
          {
            title: 'MC Fava & L-Side & Go Harder [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/mc-fava-l-side-go-harder-v-recordings',
            published: '2022-11-10T10:45:33Z',
          },
          {
            published: '2022-11-01T10:33:46Z',
            title: 'V Podcast 136 - Hosted by Bryan Gee',
            url: 'https://soundcloud.com/vrecordings/v-podcast-136-hosted-by-bryan-gee',
          },
          {
            published: '2022-10-27T08:59:36Z',
            title: 'MC Fava & Alibi - Mr Junglist Man feat. MC Fats [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/mc-fava-alibi-mr-junglist-man-feat-mc-fats-v-recordings',
          },
          {
            published: '2022-10-18T11:51:50Z',
            url: 'https://soundcloud.com/vrecordings/need-for-mirrors-bounty-hunter',
            title: 'Need For Mirrors - Bounty Hunter',
          },
          {
            published: '2022-10-20T10:16:53Z',
            title: 'Think Tonk x Longman - Tell We Are The Don [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/think-tonk-x-longman-tell-we-are-the-don-v-recordings',
          },
          {
            title: 'Think Tonk x Longman - Boogoo Yagga Music [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/think-tonk-x-longman-boogoo-yagga-music-v-recordings',
            published: '2022-10-20T10:15:11Z',
          },
        ],
        popular: [
          {
            title: 'Serum, Paul T & Edward Oberon - Moon In Your Eyes [V Recordings]',
            published: '2019-07-29T15:09:52Z',
            url: 'https://soundcloud.com/vrecordings/serum-paul-t-edward-oberon-moon-in-your-eyes-v-recordings',
          },
          {
            title: 'L-Side - So High Feat MC Fava [V Recordings]',
            published: '2014-07-10T09:08:33Z',
            url: 'https://soundcloud.com/vrecordings/plv047dd-001-l-side-so-high',
          },
          {
            url: 'https://soundcloud.com/vrecordings/v-podcast-134-bryan-gee-w-jumpin-jack-frost',
            published: '2022-09-06T13:42:34Z',
            title: 'V Podcast 134 - Bryan Gee w/ Jumpin Jack Frost',
          },
          {
            url: 'https://soundcloud.com/vrecordings/v-podcast-135-hosted-by-bryan-gee',
            published: '2022-09-29T10:08:52Z',
            title: 'V Podcast 135 - Hosted by Bryan Gee',
          },
          {
            title: 'Sl8r & Zar - Daydream [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/sl8r-zar-daydream-v-recordings',
            published: '2022-08-17T13:22:28Z',
          },
          {
            published: '2021-03-04T14:11:56Z',
            url: 'https://soundcloud.com/vrecordings/paul-t-edward-oberon-somewhere-else-v-recordings',
            title: 'Paul T & Edward Oberon - Somewhere Else [V Recordings]',
          },
          {
            published: '2013-10-02T14:03:21Z',
            url: 'https://soundcloud.com/vrecordings/boosta-and-atmos-t-all-my-love',
            title: 'Boosta & Atmos T - All My Love feat. Nicole [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/vrecordings/l-side-gq-zaga-dan-v-recordings',
            published: '2020-10-08T12:10:42Z',
            title: 'L-Side & GQ - Zaga Dan [V Recordings]',
          },
          {
            title: 'V Podcast 136 - Hosted by Bryan Gee',
            url: 'https://soundcloud.com/vrecordings/v-podcast-136-hosted-by-bryan-gee',
            published: '2022-11-01T10:33:46Z',
          },
          {
            published: '2022-09-21T12:37:17Z',
            url: 'https://soundcloud.com/vrecordings/need-for-mirrors-dub-pack-mini-mix',
            title: 'Need For Mirrors - Dub Pack (Minimix)',
          },
          {
            published: '2022-07-15T09:09:15Z',
            title: 'V Podcast 132 - hosted by Bryan Gee w/ L-Side',
            url: 'https://soundcloud.com/vrecordings/v-podcast-132-hosted-by-bryan-gee-w-l-side',
          },
          {
            url: 'https://soundcloud.com/vrecordings/v-podcast-133-hosted-by-bryan-gee',
            title: 'V Podcast 133 - Hosted by Bryan Gee',
            published: '2022-08-10T09:07:24Z',
          },
          {
            url: 'https://soundcloud.com/vrecordings/dr-meaker-fighter-dj-sly-vip',
            published: '2014-11-10T21:49:56Z',
            title: 'Dr Meaker-Fighter - DJ Sly VIP Remix [V Recordings]',
          },
          {
            title: 'Need For Mirrors - Tidal Wavey [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/need-for-mirrors-tidal-wavey-v-recordings',
            published: '2018-10-04T11:46:03Z',
          },
          {
            title: 'Nazca Linez - Acid Fashion [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/nazca-linez-acid-fashion-v-recordings',
            published: '2018-05-23T13:20:50Z',
          },
          {
            title: 'Carlito - Heart In Her Hands [Liquid V]',
            published: '2022-08-24T10:57:41Z',
            url: 'https://soundcloud.com/vrecordings/carlito-heart-in-her-hands-liquid-v',
          },
          {
            published: '2022-10-18T11:51:50Z',
            title: 'Need For Mirrors - Bounty Hunter',
            url: 'https://soundcloud.com/vrecordings/need-for-mirrors-bounty-hunter',
          },
          {
            title: 'MC Fava & Alibi - Mr Junglist Man feat. MC Fats [V Recordings]',
            published: '2022-10-27T08:59:36Z',
            url: 'https://soundcloud.com/vrecordings/mc-fava-alibi-mr-junglist-man-feat-mc-fats-v-recordings',
          },
          {
            title: 'Drumsound & Bassline Smith - Rasta Blasta VIP [V Recordings]',
            published: '2016-09-01T08:31:15Z',
            url: 'https://soundcloud.com/vrecordings/drumsound-bassline-smith-rasta-blasta-vip-v-recordings',
          },
          {
            published: '2016-11-22T22:03:16Z',
            url: 'https://soundcloud.com/vrecordings/serum-paul-t-edward-oberon-take-my-breath-away-v-recordings',
            title: 'Serum, Paul T & Edward Oberon - Take My Breath Away [V Recordings]',
          },
          {
            published: '2022-10-06T15:15:33Z',
            title: 'MC Fava & Acuna - Unseen [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/mc-fava-acuna-unseen-v-recordings',
          },
          {
            url: 'https://soundcloud.com/vrecordings/mc-fava-command-strange-choices-v-recordings',
            published: '2022-09-07T08:55:09Z',
            title: 'MC Fava & Command Strange - Choices [V Recordings]',
          },
          {
            title: 'Think Tonk x Longman - Boogoo Yagga Music [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/think-tonk-x-longman-boogoo-yagga-music-v-recordings',
            published: '2022-10-20T10:15:11Z',
          },
          {
            published: '2022-05-20T16:16:42Z',
            url: 'https://soundcloud.com/vrecordings/alibi-dunk-rockers-v-recordings',
            title: 'Alibi & Dunk - Rockers [V Recordings]',
          },
          {
            url: 'https://soundcloud.com/vrecordings/disrupta-wireless-v-recordings',
            title: 'Disrupta - Wireless [V Recordings]',
            published: '2021-07-07T08:29:04Z',
          },
          {
            title: 'Beat Merchants - Hurricane feat. Dan-I (Command Strange Remix) [V Recordings]',
            published: '2019-09-09T14:30:49Z',
            url: 'https://soundcloud.com/vrecordings/beat-merchants-hurricane-feat-dan-i-command-strange-remix-v-recordings',
          },
          {
            url: 'https://soundcloud.com/vrecordings/andrezz-charm-liquid-v',
            published: '2022-10-05T12:22:17Z',
            title: 'Andrezz - Charm [Liquid V]',
          },
          {
            published: '2022-10-18T11:51:11Z',
            title: 'Need For Mirrors - Slump [Dub Pack]',
            url: 'https://soundcloud.com/vrecordings/need-for-mirrors-slump-dub-pack',
          },
          {
            published: '2020-07-28T12:44:47Z',
            title: 'Alibi & Phentix - Unfolded [V Recordings]',
            url: 'https://soundcloud.com/vrecordings/alibi-phentix-unfolded-v-recordings',
          },
          {
            url: 'https://soundcloud.com/vrecordings/think-tonk-x-longman-tell-we-are-the-don-v-recordings',
            published: '2022-10-20T10:16:53Z',
            title: 'Think Tonk x Longman - Tell We Are The Don [V Recordings]',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/skankandbass/l-side-think-tonk-6-foot-under',
            title: 'L - Side & Think Tonk - 6 Foot Under',
            published: '2022-10-18T11:35:26Z',
          },
          {
            published: '2021-11-03T11:58:29Z',
            url: 'https://soundcloud.com/minirigs/paul-t-edward-oberon-minirigs-mixtape',
            title: 'Paul T & Edward Oberon - Minirig Mixtape',
          },
          {
            url: 'https://soundcloud.com/freefromsleep/ffs053-alibi',
            title: 'FFS053: Alibi',
            published: '2021-09-14T10:23:58Z',
          },
          {
            title: 'Alibi @ FM4 Digital Konfusion | Mainframe Recordings Takeover 29.05.2021',
            published: '2021-05-30T11:10:22Z',
            url: 'https://soundcloud.com/officialalibi/fm4mainframetakeover',
          },
          {
            url: 'https://soundcloud.com/officialalibi/blue',
            title: 'Blue (Original Mix)',
            published: '2021-02-26T09:34:29Z',
          },
          {
            title: 'Deeper (Original Mix)',
            published: '2021-02-25T10:52:39Z',
            url: 'https://soundcloud.com/officialalibi/deeper-original-mix',
          },
          {
            published: '2021-02-25T10:47:51Z',
            title: "Rua Dub 'Street Dub' (Original Mix)",
            url: 'https://soundcloud.com/officialalibi/rua-dub-street-dub-original-mix',
          },
          {
            published: '2021-02-25T10:55:51Z',
            title: 'Trunk (DUB Mix)',
            url: 'https://soundcloud.com/officialalibi/trunk-dub-mix',
          },
          {
            url: 'https://soundcloud.com/officialalibi/loophole-original-mix',
            title: 'Loophole (Original Mix)',
            published: '2021-02-25T10:49:20Z',
          },
          {
            url: 'https://soundcloud.com/officialalibi/directions-vip-mix',
            published: '2021-02-25T10:42:08Z',
            title: 'Directions (VIP Mix)',
          },
        ],
      },
      name: 'V Recordings',
      widgets: [
        'https://soundcloud.com/vrecordings/sl8r-zar-daydream-v-recordings',
        'https://soundcloud.com/vrecordings/paul-t-edward-oberon-somewhere-else-v-recordings',
        'https://soundcloud.com/vrecordings/l-side-gq-zaga-dan-v-recordings',
        'https://soundcloud.com/vrecordings/disrupta-wireless-v-recordings',
        'https://soundcloud.com/vrecordings/carlito-heart-in-her-hands-liquid-v',
      ],
      id: 'kKefEkLNTmshj4bgnZmJ',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000451404636-1v3919-t500x500.jpg',
      artists: ['DJ GAW', 'Disrupta'],
      followers: 5416,
      link: 'https://soundcloud.com/nuusic',
      notes: '',
      styles: ['Jungle'],
      submission: 'label@nuusic.co.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-16T14:20:56Z',
      lastScraped: 1668963234720,
      tracks: {
        recent: [
          {
            url: 'https://soundcloud.com/nuusic/rv-um-bongo-out-281022',
            published: '2022-10-25T09:02:03Z',
            title: 'RV - Um Bongo (OUT 28/10/22)',
          },
          {
            url: 'https://soundcloud.com/nuusic/rv-ft-natty-campbell-wake-up-out-281022',
            published: '2022-10-25T09:02:02Z',
            title: 'RV Ft. Natty Campbell - Wake Up (OUT 28/10/22)',
          },
          {
            title: 'ELLM - THE BREAKDOWN (VIP) (OUT 30/09/22)',
            published: '2022-09-27T10:08:00Z',
            url: 'https://soundcloud.com/nuusic/ellm-the-breakdown-vip-out-300922',
          },
          {
            url: 'https://soundcloud.com/nuusic/ellm-the-bass-out-300922',
            title: 'ELLM - THE BASS (OUT 30/09/22)',
            published: '2022-09-27T10:07:58Z',
          },
          {
            title: 'ELLM - ILN (OUT 30/09/22)',
            published: '2022-09-27T10:07:57Z',
            url: 'https://soundcloud.com/nuusic/ellm-iln-out-300922',
          },
          {
            url: 'https://soundcloud.com/nuusic/ellm-chromatic-out-300922',
            published: '2022-09-27T10:07:55Z',
            title: 'ELLM - CHROMATIC (OUT 30/09/22)',
          },
        ],
        reposts: [
          {
            title: '13. Rafiki Dubs - All I Ever Need Clip',
            url: 'https://soundcloud.com/grand-theft-audio-records/13-rafiki-dubs-all-i-ever-need-clip',
            published: '2022-11-16T14:20:56Z',
          },
          {
            url: 'https://soundcloud.com/guzidnb/guzi-eruption-radio-004-031122',
            published: '2022-11-04T12:36:24Z',
            title: 'Guzi - Eruption Radio 004 - 03/11/22',
          },
          {
            url: 'https://soundcloud.com/section63recordings/sets/rafiki-dubs-full-fat-ep',
            published: '2022-08-12T08:21:01Z',
            title: 'Rafiki Dubs - Full Fat',
          },
          {
            url: 'https://soundcloud.com/the_drum_pusher/rafiki-dubs-king-dizz-section-63',
            published: '2022-08-12T16:03:49Z',
            title: '{Premiere} Rafiki Dubs - King Dizz (Section 63)',
          },
          {
            published: '2022-08-12T08:56:49Z',
            url: 'https://soundcloud.com/section63recordings/rafiki-dubs-full-fat-ep',
            title: 'Rafiki Dubs - Full Fat EP',
          },
          {
            url: 'https://soundcloud.com/officialdrumad/premiere-rafiki-dubs-reese-witherspoon-section-63-recordings',
            title: 'PREMIERE: Rafiki Dubs - Reese Witherspoon [Section 63 Recordings]',
            published: '2022-08-10T19:40:15Z',
          },
          {
            published: '2022-08-04T23:20:22Z',
            url: 'https://soundcloud.com/jungledrumandbassuk/jdnb-premiere-rafiki-dubs-full-fat-section-63-recordings',
            title: 'JDNB Premiere - Rafiki Dubs - Full Fat [Section 63 Recordings]',
          },
          {
            url: 'https://soundcloud.com/sudleydnb/fred-again-jungle-sudley-ivy-bootleg-free-download',
            published: '2022-08-03T15:30:34Z',
            title: 'fred again.. - Jungle (Sudley & [IVY] Bootleg) FREE DOWNLOAD',
          },
          {
            published: '2022-07-11T08:34:54Z',
            url: 'https://soundcloud.com/kojikirecords/rafiki-dubs-brass-tooth-free',
            title: 'Rafiki Dubs :: Brass Tooth [FREE DOWNLOAD]',
          },
          {
            published: '2022-06-20T16:56:42Z',
            title: 'MILITANT - NAPES, TOBY ROSS & ORAM (FREE DL)',
            url: 'https://soundcloud.com/oramdnb/militant-napes-toby-ross-oram-free-dl',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/nuusic/audiomission-x-cramz-ft-redders-proper-tingz',
            title: 'Audiomission & Cramz Ft Redders - Proper Tingz (Out Now)',
            published: '2022-08-23T16:56:11Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/legacy-conrad-subs-2k-free-download',
            title: 'Conrad Subs - Legacy (2K FREE DOWNLOAD)',
            published: '2019-06-27T16:36:14Z',
          },
          {
            published: '2019-10-02T07:33:54Z',
            title: 'Disrupta & Zoro - Fire (OUT NOW)',
            url: 'https://soundcloud.com/nuusic/disrupta-zoro-fire-preview',
          },
          {
            published: '2022-08-23T16:56:13Z',
            title: 'Audiomission - Kick Da Flava (VIP) (Out Now)',
            url: 'https://soundcloud.com/nuusic/audiomission-kick-da-flava-vip',
          },
          {
            title: '4K - Pump Action (Free Download)',
            url: 'https://soundcloud.com/nuusic/4k-pump-action-free-download',
            published: '2020-06-15T16:53:01Z',
          },
          {
            title: 'ELLM - THE BREAKDOWN (VIP) (OUT 30/09/22)',
            url: 'https://soundcloud.com/nuusic/ellm-the-breakdown-vip-out-300922',
            published: '2022-09-27T10:08:00Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/arkala-dre-rise-absense-out-soon',
            title: 'Arkala Dre & Rise - Absense (Out Now)',
            published: '2022-03-10T18:51:59Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/teej-disrupta-duppy-feat-riko',
            published: '2020-02-11T11:16:51Z',
            title: 'Teej & Disrupta - Duppy (Feat. Riko Dan) (OUT NOW)',
          },
          {
            url: 'https://soundcloud.com/nuusic/ellm-the-bass-out-300922',
            published: '2022-09-27T10:07:58Z',
            title: 'ELLM - THE BASS (OUT 30/09/22)',
          },
          {
            published: '2022-03-10T18:52:02Z',
            url: 'https://soundcloud.com/nuusic/conrad-subs-leave-dem-dj-gaw-remix-out-soon',
            title: 'Conrad Subs - Leave Dem (DJ GAW Remix) (Out Now)',
          },
          {
            published: '2020-11-11T09:00:59Z',
            url: 'https://soundcloud.com/nuusic/ellm-run-tune-free-download',
            title: 'ELLM - Run Tune (FREE DOWNLOAD)',
          },
          {
            published: '2022-03-10T18:51:57Z',
            url: 'https://soundcloud.com/nuusic/arkala-dre-pirate-radio-out-soon',
            title: 'Arkala Dre - Pirate Radio (Out Now)',
          },
          {
            title: 'ELLM - CHROMATIC (OUT 30/09/22)',
            published: '2022-09-27T10:07:55Z',
            url: 'https://soundcloud.com/nuusic/ellm-chromatic-out-300922',
          },
          {
            published: '2022-10-25T09:02:02Z',
            url: 'https://soundcloud.com/nuusic/rv-ft-natty-campbell-wake-up-out-281022',
            title: 'RV Ft. Natty Campbell - Wake Up (OUT 28/10/22)',
          },
          {
            title: 'Speaker Louis - Stand And Deliver - Nuusic (Out Now)',
            published: '2022-02-15T18:05:03Z',
            url: 'https://soundcloud.com/nuusic/speaker-louis-stand-and-deliver-nuusic-out-soon',
          },
          {
            published: '2022-09-27T10:07:57Z',
            url: 'https://soundcloud.com/nuusic/ellm-iln-out-300922',
            title: 'ELLM - ILN (OUT 30/09/22)',
          },
          {
            title: 'Teej - Drama EP - Promo Mix',
            url: 'https://soundcloud.com/nuusic/teej-drama-ep-promo-mix',
            published: '2021-06-18T17:05:29Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/rv-um-bongo-out-281022',
            title: 'RV - Um Bongo (OUT 28/10/22)',
            published: '2022-10-25T09:02:03Z',
          },
          {
            title: 'Conrad Subs - Conviction (Myth Remix) (OUT NOW)',
            published: '2022-05-23T16:31:48Z',
            url: 'https://soundcloud.com/nuusic/conrad-subs-conviction-myth-remix-out-thursday',
          },
          {
            published: '2019-09-28T15:51:38Z',
            url: 'https://soundcloud.com/nuusic/conrad-subs-bump-and-grind-preview',
            title: 'Conrad Subs - Bump And Grind (OUT NOW)',
          },
          {
            url: 'https://soundcloud.com/nuusic/teej-jappa-16-speakers-preview',
            title: 'Teej & Jappa - 16 Speakers (OUT NOW)',
            published: '2020-02-11T11:16:47Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/teej-war-cry-preview',
            title: 'Teej - War Cry (OUT NOW)',
            published: '2020-02-11T11:16:59Z',
          },
          {
            published: '2022-05-23T16:31:49Z',
            title: 'Conrad Subs - Bump And Grind (VIP) (OUT NOW)',
            url: 'https://soundcloud.com/nuusic/conrad-subs-bump-and-grind-vip-out-thursday',
          },
          {
            title: 'Conrad Subs - FLAK (FREE DOWNLOAD)',
            published: '2018-12-24T09:37:53Z',
            url: 'https://soundcloud.com/nuusic/conrad-subs-flak',
          },
          {
            title: 'Kumo - Bless The Dance (NOW)',
            url: 'https://soundcloud.com/nuusic/kumo-bless-the-dance-out-soon',
            published: '2022-06-20T17:55:39Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/conrad-subs-lethal-session-free-download',
            published: '2018-06-05T09:39:32Z',
            title: 'Conrad Subs - Lethal Session (FREE DOWNLOAD)',
          },
          {
            published: '2022-06-20T17:55:44Z',
            url: 'https://soundcloud.com/nuusic/kumo-no-stone-unturned-out-soon',
            title: 'Kumo - No Stone Unturned (OUT NOW)',
          },
          {
            url: 'https://soundcloud.com/nuusic/conrad-subs-its-the-way-out-thursday',
            published: '2022-05-23T16:31:52Z',
            title: 'Conrad Subs - Its The Way (OUT NOW)',
          },
          {
            url: 'https://soundcloud.com/nuusic/teej-disrupta-ft-riko-dan-duppy-dj-hybrid-remix-clip',
            title: 'Teej & Disrupta (Ft. Riko Dan) - Duppy (DJ Hybrid Remix) (Clip)',
            published: '2021-06-15T07:08:20Z',
          },
          {
            url: 'https://soundcloud.com/nuusic/kumo-kick-a-penguin-out-soon',
            published: '2022-06-20T17:55:41Z',
            title: 'Kumo - Kick A Penguin (OUT NOW)',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/nuusic/audiomission-kick-da-flava-vip?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/nuusic/arkala-dre-rise-absense-out-soon?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/nuusic/ellm-the-breakdown-vip-out-300922',
        'https://soundcloud.com/nuusic/audiomission-x-cramz-ft-redders-proper-tingz?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      name: 'Nuusic',
      id: 'ktLZ8N9UfWcR50xgn5M3',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000270441772-pweqz1-t500x500.jpg',
      artists: ['Bru-C', 'Kanine', 'AC13'],
      followers: 51157,
      link: 'https://soundcloud.com/crucast',
      notes: '',
      styles: ['Jump Up', 'Vocal'],
      submission: 'music@crucast.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-18T14:12:08Z',
      lastScraped: 1668963236054,
      tracks: {
        recent: [
          {
            title: 'Crucast UK Bass Serum Presets Vol 2',
            published: '2022-11-18T14:12:08Z',
            url: 'https://soundcloud.com/crucast/crucast-uk-bass-serum-presets-vol-2',
          },
          {
            url: 'https://soundcloud.com/crucast/mikey-b-whoa-coming-soon',
            published: '2022-11-15T16:45:53Z',
            title: 'Mikey B - Whoa (Coming Soon)',
          },
          {
            published: '2022-11-15T16:45:31Z',
            title: "Mikey B - Don't Tell Your Lover (Coming Soon)",
            url: 'https://soundcloud.com/crucast/mikey-b-dont-tell-your-lover-coming-soon',
          },
          {
            published: '2022-11-17T14:31:12Z',
            title: 'Crucast Rinse FM - Cajama b2b Michael Sparks & Wa-Fu',
            url: 'https://soundcloud.com/crucast/crucast-rinse-fm-cajama-b2b-michael-sparks-wa-fu',
          },
          {
            title: 'Crucast Printworks - Skepsis & P Money',
            url: 'https://soundcloud.com/crucast/crucast-printworks-skepsis-p-money',
            published: '2022-11-15T10:10:56Z',
          },
          {
            published: '2022-11-11T10:43:02Z',
            title: 'Crucast Printworks - Jade Louise',
            url: 'https://soundcloud.com/crucast/crucast-printworks-jade-louise',
          },
          {
            title: 'Skepsis - Moving',
            url: 'https://soundcloud.com/crucast/2skepsis-moving',
            published: '2022-11-08T14:05:40Z',
          },
          {
            title: 'Skepsis - Blow',
            url: 'https://soundcloud.com/crucast/skepsis-blow',
            published: '2022-11-08T14:06:01Z',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/rinsefm/sets/crucasttakeover020618',
            published: '2018-06-03T18:22:32Z',
            title: 'Crucast Takeover - 2nd June 2018',
          },
        ],
        popular: [
          {
            title: 'Bru-C & Bou - Streetside',
            published: '2021-03-04T16:01:45Z',
            url: 'https://soundcloud.com/crucast/bru-c-bou-streetside',
          },
          {
            title: 'Subsonic - Love VIP',
            url: 'https://soundcloud.com/crucast/subsonic-love-vip-1',
            published: '2020-04-01T15:53:57Z',
          },
          {
            url: 'https://soundcloud.com/crucast/darkzy-party-all-the-time-ft-kay',
            title: 'Darkzy - Party All The Time (Ft. Kay)',
            published: '2019-11-28T08:38:11Z',
          },
          {
            title: 'Bru-C & Mr Traumatik - Wavey One (Prod by Tsuki)',
            url: 'https://soundcloud.com/crucast/bru-c-mr-traumatik-wavey-one-prod-by-tsuki',
            published: '2019-11-06T12:17:52Z',
          },
          {
            url: 'https://soundcloud.com/crucast/bru-c-simula-you-i-bou-remix',
            published: '2020-07-20T10:30:40Z',
            title: 'Bru-C & Simula - You & I (Bou Remix)',
          },
          {
            published: '2022-09-22T13:59:26Z',
            title: 'Spice - So Mi Like It (Burt Cope Bootleg)',
            url: 'https://soundcloud.com/crucast/spice-so-mi-like-it-burt-cope-bootleg',
          },
          {
            url: 'https://soundcloud.com/crucast/darkzy-example-drops-kanine-remix',
            title: 'Darkzy & Example - Drops (Kanine Remix)',
            published: '2019-06-06T13:04:47Z',
          },
          {
            published: '2018-10-02T15:52:37Z',
            title: 'Kanine - Want You',
            url: 'https://soundcloud.com/crucast/kanine-want-you-1',
          },
          {
            url: 'https://soundcloud.com/crucast/michael-sparks-roadman',
            title: 'Michael Sparks - Roadman',
            published: '2022-06-20T13:48:56Z',
          },
          {
            url: 'https://soundcloud.com/crucast/interupt-show-me-love',
            title: 'Interupt - Show Me Love',
            published: '2019-11-07T11:03:41Z',
          },
          {
            title: 'Tsuki - Over',
            published: '2019-06-14T13:23:43Z',
            url: 'https://soundcloud.com/crucast/tsuki-over',
          },
          {
            url: 'https://soundcloud.com/crucast/oliver-heldens-overdrive-ombro-remix',
            published: '2020-04-17T08:52:52Z',
            title: 'Oliver Heldens - Overdrive (OMBRO Remix)',
          },
          {
            published: '2020-04-29T11:48:49Z',
            url: 'https://soundcloud.com/crucast/skepsis-ts7-freak',
            title: 'Skepsis & TS7 - Freak',
          },
          {
            title: 'Bru-C - Snakes & Ladders (feat. Bou, Ella Knight)',
            published: '2019-11-21T16:04:15Z',
            url: 'https://soundcloud.com/crucast/bru-c-snakes-ladders-feat-bou-ella-knight',
          },
          {
            url: 'https://soundcloud.com/crucast/bru-c-sunrise-feat-chromatic',
            published: '2019-11-13T09:23:52Z',
            title: 'Bru-C - Sunrise (feat. Chromatic)',
          },
          {
            published: '2021-10-12T10:36:44Z',
            url: 'https://soundcloud.com/crucast/ac13-take-me-down',
            title: 'AC13 - Take Me Down',
          },
          {
            title: 'David Guetta - Titanium Ft. Sia [REESE Bootleg]',
            published: '2022-07-22T10:31:03Z',
            url: 'https://soundcloud.com/crucast/david-guetta-titanium-ft-sia-reese-bootleg',
          },
          {
            title: 'Michael Sparks - Slayer',
            published: '2022-06-20T13:49:03Z',
            url: 'https://soundcloud.com/crucast/michael-sparks-slayer',
          },
          {
            published: '2019-06-14T13:31:36Z',
            title: 'Bru-C & Simula - You & I',
            url: 'https://soundcloud.com/crucast/bru-c-simula-you-i',
          },
          {
            published: '2017-07-26T19:31:50Z',
            title: 'TS7 - Motion Shift',
            url: 'https://soundcloud.com/crucast/ts7-motion-shift',
          },
          {
            title: 'Original Sin & Sub Zero - Haunted',
            published: '2022-11-08T11:52:25Z',
            url: 'https://soundcloud.com/crucast/original-sin-sub-zero-haunted-coming-soon',
          },
          {
            published: '2022-06-07T11:08:02Z',
            title: 'Skepsis - Sun Go Down (Tsuki Remix)',
            url: 'https://soundcloud.com/crucast/skepsis-sun-go-down-tsuki',
          },
          {
            published: '2022-04-14T06:06:25Z',
            title: 'AC13 - Remedy Ft. Grace Barton',
            url: 'https://soundcloud.com/crucast/ac13-remedy-ft-grace-barton',
          },
          {
            title: 'Michael Sparks - Juggernaut',
            published: '2021-08-03T12:59:25Z',
            url: 'https://soundcloud.com/crucast/michael-sparks-juggernaut',
          },
          {
            title: 'Simula - One Second',
            published: '2018-07-30T19:05:04Z',
            url: 'https://soundcloud.com/crucast/simula-one-second',
          },
          {
            title: 'Cooky - Feeling',
            published: '2022-06-28T08:40:32Z',
            url: 'https://soundcloud.com/crucast/cooky-feeling',
          },
          {
            url: 'https://soundcloud.com/crucast/hybrid-theory-migraine-skank',
            published: '2020-10-09T10:20:22Z',
            title: 'Hybrid Theory - Migraine Skank',
          },
          {
            url: 'https://soundcloud.com/crucast/g-dub-amplify-lights-in-the-air-feat-eksman',
            title: 'G Dub & Amplify - Lights In The Air (Feat. Eksman)',
            published: '2022-07-04T08:58:13Z',
          },
          {
            url: 'https://soundcloud.com/crucast/zero-barry-white',
            published: '2020-07-07T10:36:26Z',
            title: 'Zero - Barry White',
          },
          {
            published: '2019-12-17T15:50:42Z',
            title: 'Axtion - Kennel War',
            url: 'https://soundcloud.com/crucast/axtion-kennel-war',
          },
        ],
      },
      name: 'CRUCAST',
      widgets: [
        'https://soundcloud.com/crucast/bru-c-bou-streetside',
        'https://soundcloud.com/crucast/spice-so-mi-like-it-burt-cope-bootleg',
        'https://soundcloud.com/crucast/kanine-want-you-1',
        'https://soundcloud.com/crucast/simula-one-second',
      ],
      id: 'mLrDt6qXxiQE5EEuBxkx',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-rERUsvEDDhPyU7kC-jnPBHw-t500x500.jpg',
      artists: ['Bryson', 'Pola', 'The Vanguard Project', 'Duskee'],
      followers: 27674,
      link: 'https://soundcloud.com/fokuzrecordings',
      notes: '',
      styles: ['Liquid', 'Minimal', 'Vocal'],
      submission: 'marco@triplevision.nl',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-17T10:18:23Z',
      lastScraped: 1668963237367,
      tracks: {
        popular: [
          {
            title: 'Alpha Rhythm - Tranquility',
            published: '2020-11-26T11:01:19Z',
            url: 'https://soundcloud.com/fokuzrecordings/alpha-rhythm-tranquility-final',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/alpha-rhythm-humanature-leo',
            title: 'Alpha Rhythm, Humanature & Leo Wood -  Keeping On',
            published: '2022-01-26T13:44:37Z',
          },
          {
            title: 'Rezilient, Alpha Rhythm, Leo Wood - One Day At A Time',
            published: '2022-05-24T10:39:44Z',
            url: 'https://soundcloud.com/fokuzrecordings/rezilienht-alpha-rhythm-leo',
          },
          {
            title: 'The Vanguard Project feat. Leo Wood - Rise & Fall',
            published: '2018-04-23T18:49:40Z',
            url: 'https://soundcloud.com/fokuzrecordings/the-vanguard-project-feat-leo-wood-rise-fall',
          },
          {
            published: '2020-05-19T09:29:14Z',
            url: 'https://soundcloud.com/fokuzrecordings/duskee-operate-passenger-1',
            title: 'Duskee & Operate - Passenger',
          },
          {
            published: '2022-09-06T13:23:47Z',
            url: 'https://soundcloud.com/fokuzrecordings/fokuz-recordings-podcast-98-subliminal-bazil-mc',
            title: 'Fokuz Recordings Podcast #98 - Sub:liminal & Bazil MC',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/archangel-run-to-you-1',
            published: '2022-10-03T12:08:59Z',
            title: 'Archangel - Run To You',
          },
          {
            title: 'Fokuz Recordings Podcast #99 - Scatterbrain & Maykors',
            url: 'https://soundcloud.com/fokuzrecordings/fokuz-recordings-podcast-99-scatterbrain-maykors',
            published: '2022-10-10T11:03:35Z',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/alpha-rhythm-humanature-leo-1',
            title: 'Alpha Rhythm, Humanature & Leo Wood -  Keeping On (Villem Remix)',
            published: '2022-03-10T16:34:41Z',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/cutworx-wrong-papers',
            published: '2022-07-29T07:31:01Z',
            title: 'Cutworx - Wrong Papers',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/melinki-demure-feat-havelock-cant-see-straight',
            published: '2018-06-18T16:59:15Z',
            title: "Melinki & Demure feat. Havelock - Can't See Straight",
          },
          {
            title: 'Fokuz Recordings Podcast #97 - Sub:liminal',
            published: '2022-08-01T12:35:26Z',
            url: 'https://soundcloud.com/fokuzrecordings/fokuz-recordings-podcast-97-subliminal',
          },
          {
            title: 'Pola & Bryson - Flat Jam',
            published: '2022-09-19T12:14:19Z',
            url: 'https://soundcloud.com/fokuzrecordings/flat-jam',
          },
          {
            published: '2022-09-27T13:29:54Z',
            title: 'Sub:liminal - Second Spring (Silence Groove Remix)',
            url: 'https://soundcloud.com/fokuzrecordings/sub-liminal-second-spring',
          },
          {
            title: 'Crimson and Frame - Come Bring Me',
            url: 'https://soundcloud.com/fokuzrecordings/come-bring-me',
            published: '2022-08-08T12:04:44Z',
          },
          {
            published: '2020-09-01T09:39:30Z',
            url: 'https://soundcloud.com/fokuzrecordings/leo-wood-lions-feat-villem',
            title: 'Leo Wood  - Lions (feat. Villem & McLeod)',
          },
          {
            title: 'Maykors & Electrosoul System - Untitled',
            published: '2022-10-03T12:32:38Z',
            url: 'https://soundcloud.com/fokuzrecordings/maykors-electro-soul-system',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/liquid-drum-and-bass-sessions-40-special-edition-february-2021',
            published: '2021-02-01T10:04:39Z',
            title:
              'Liquid Drum and Bass Sessions  #40 : [Hiphop /RnB / Soul vs Drum & Bass Remixes]',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/fokuz-recordings-podcast-96-subliminal',
            title: 'Fokuz Recordings Podcast #96 - Sub:liminal',
            published: '2022-06-20T12:59:45Z',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/archangel-salamanca-1',
            published: '2022-10-03T12:08:59Z',
            title: 'Archangel - Salamanca',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/the-way-of-time-ft-smote',
            published: '2020-01-10T11:45:07Z',
            title: 'Edlan x Smote - The Way Of Time ft. Bazil MC',
          },
          {
            title: 'Mage - Out Of Touch',
            published: '2022-08-08T12:04:42Z',
            url: 'https://soundcloud.com/fokuzrecordings/out-of-touch',
          },
          {
            title: 'Liquid Drum & Bass Sessions #55 [November 2022]',
            url: 'https://soundcloud.com/fokuzrecordings/liquid-drum-bass-sessions-55-november-2022',
            published: '2022-11-14T16:22:46Z',
          },
          {
            title: 'Silence Groove - Cheeky Growler(Pola & Bryson Remix)',
            url: 'https://soundcloud.com/fokuzrecordings/silence-groove-cheeky-1',
            published: '2022-07-01T10:38:11Z',
          },
          {
            title: 'Pat Fulgoni - Beautiful You (The Vanguard Project Remix)',
            published: '2022-08-08T11:38:50Z',
            url: 'https://soundcloud.com/fokuzrecordings/beautiful-you-the-vanguard',
          },
          {
            title: 'Maykors & Mage - Another Way Out',
            published: '2022-10-03T12:32:36Z',
            url: 'https://soundcloud.com/fokuzrecordings/maykors-mage-another-way-out',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/edlan-shadow-vip-ft-emy-perez',
            title: 'Edlan - Shadow VIP Ft. Emy Perez',
            published: '2018-07-16T22:21:19Z',
          },
          {
            published: '2022-08-03T09:54:32Z',
            url: 'https://soundcloud.com/fokuzrecordings/purify',
            title: 'SOLR and Minos - Purify',
          },
          {
            published: '2022-09-27T13:29:53Z',
            title: 'Sub:liminal & Minos - Future Lines Feat. Cardia (Command Strange Remix)',
            url: 'https://soundcloud.com/fokuzrecordings/sub-liminal-minos-future-lines',
          },
          {
            published: '2022-10-03T12:08:57Z',
            url: 'https://soundcloud.com/fokuzrecordings/archangel-life-indoors-1',
            title: 'Archangel - Life Indoors',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/fokuzrecordings/alpha-rhythm-mindless',
            title: 'Alpha Rhythm - Mindless',
            published: '2022-10-26T11:02:46Z',
          },
          {
            published: '2022-10-26T11:36:04Z',
            url: 'https://soundcloud.com/fokuzrecordings/sevin-how-she-did-it',
            title: 'Sevin - How She Did It',
          },
          {
            title: 'Vodkah - Breathing Tides',
            published: '2022-10-25T14:19:54Z',
            url: 'https://soundcloud.com/fokuzrecordings/vodkah-breathing-tides',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/alpha-rhythm-lost-grace',
            title: 'Alpha Rhythm - Lost Grace',
            published: '2022-10-26T11:02:47Z',
          },
          {
            url: 'https://soundcloud.com/fokuzrecordings/sevin-get-down',
            published: '2022-10-26T11:36:05Z',
            title: 'Sevin - Get Down',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/nine-windows/nine-windows-mixtape',
            title: 'Nine Windows Mixtape',
            published: '2022-10-22T13:18:33Z',
          },
          {
            title: 'Minos & Sub:liminal - Motions (Bert H Remix)',
            published: '2022-11-17T10:18:23Z',
            url: 'https://soundcloud.com/subliminaldrumandbass/minos-subliminal-motions-bert-h-remix',
          },
          {
            title: 'Sub:liminal & Minos - Future Lines Feat. Cardia (Command Strange Remix)',
            url: 'https://soundcloud.com/subliminaldrumandbass/subliminal-minos-future-lines-feat-cardia-command-strange-remix',
            published: '2022-11-17T10:01:14Z',
          },
          {
            published: '2022-11-17T09:50:42Z',
            title: 'Sub:liminal - Second Spring (Silence Groove Remix)',
            url: 'https://soundcloud.com/subliminaldrumandbass/subliminal-second-spring-silence-groove-remix',
          },
          {
            title: 'Oversight - October 2022 Mix',
            url: 'https://soundcloud.com/oversight/oversight-october-2022-mix',
            published: '2022-10-28T09:41:10Z',
          },
          {
            published: '2022-10-01T11:54:11Z',
            url: 'https://soundcloud.com/subliminaldrumandbass/subliminal-humanature-around-the-world-phaction-remix',
            title: 'Sub:liminal & HumaNature - Around The World (Phaction Remix)',
          },
          {
            title: 'SPIRAL INSTINCT - Billionaire Purge',
            url: 'https://soundcloud.com/centrovisione/spiral-instinct-billionaire-purge',
            published: '2022-05-10T13:45:29Z',
          },
          {
            title: 'STR22045 // Maykors, Sobersoul and Alyness - In Silence EP',
            url: 'https://soundcloud.com/soultraderrecords/sets/str22045-maykors-sobersoul-and-alyness-in-silence-ep',
            published: '2022-09-19T12:50:07Z',
          },
          {
            title: '"Blue Monday" (New Order cover)',
            published: '2022-09-14T01:27:14Z',
            url: 'https://soundcloud.com/heirsaludone/blue-monday-new-order-cover',
          },
          {
            title: "Uncreate - You Can't",
            published: '2022-08-25T11:19:57Z',
            url: 'https://soundcloud.com/ledgednb/uncreate-you-cant',
          },
        ],
      },
      name: 'Fokuz Recordings',
      id: 'oQ21zizpqReWPguHfKdS',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-KSUtzkYZzAJKMHFz-G9zT8A-t500x500.jpg',
      artists: ['Teej'],
      followers: 3217,
      link: 'https://soundcloud.com/trustaudiodnb',
      notes: '',
      styles: ['Jump Up'],
      submission: 'info@trust-audio.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-11-28T13:56:46Z',
      lastScraped: 1670365606356,
      tracks: {
        reposts: [
          {
            title: 'Kawstic - Trauma',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/kawstic-trauma',
            published: '2022-11-17T18:24:33Z',
          },
          {
            title: 'Trex & Kawstic - Buffer',
            published: '2022-11-17T08:18:00Z',
            url: 'https://soundcloud.com/skankandbass/trex-kawstic-buffer',
          },
          {
            title: 'Kawstic - The Mac',
            published: '2022-11-15T11:59:11Z',
            url: 'https://soundcloud.com/districtbassmusic/kawstic-the-mac',
          },
          {
            url: 'https://soundcloud.com/djtrex/trex-death-breath-patreon-october-dub-2',
            title: 'Trex - Death Breath - Patreon October Dub 2  www.patreon.com/trexdnb1',
            published: '2022-10-10T08:12:21Z',
          },
          {
            title: 'Trex - Different Ting - out now exclsv -  www.patreon.com/trexdnb1',
            url: 'https://soundcloud.com/djtrex/trex-different-ting-out-now-exclsv-wwwpatreoncomtrexdnb1',
            published: '2022-10-03T16:47:14Z',
          },
          {
            published: '2022-07-08T11:42:53Z',
            title: 'T❯I & Trex - Spirit Level [Premiere]',
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/ti-trex-spirit-level-premiere',
          },
          {
            url: 'https://soundcloud.com/djtrex/action-bronson-feat-chance-the-rapper-baby-blue-trex-remix',
            published: '2022-06-29T12:12:08Z',
            title:
              'Action Bronson - Baby Blue - Trex remix (www.patreon.com/trexdnb1  Bonus Track)',
          },
          {
            url: 'https://soundcloud.com/skankandbass/ti-trex-return-to-sender',
            title: 'T>I & Trex - Return To Sender',
            published: '2022-06-22T10:35:11Z',
          },
          {
            url: 'https://soundcloud.com/forbiddenfrequenciesdnb/stokka-slug-breath',
            published: '2022-05-25T13:21:55Z',
            title: 'Stokka - Slug Breath',
          },
          {
            title: 'Teej, Trex & Medic MC - Hot One',
            published: '2022-04-20T09:59:42Z',
            url: 'https://soundcloud.com/drumandbassarena/teej-trex-medic-mc-hot-one',
          },
        ],
        recent: [
          {
            published: '2022-11-28T13:56:46Z',
            url: 'https://soundcloud.com/trustaudiodnb/kawstic-trust-audio-promo-mix',
            title: 'Kawstic - Trust Audio Promo Mix',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/kawstic-anatomy-trust-audio-free-dl',
            published: '2022-11-24T13:56:36Z',
            title: 'Kawstic - Anatomy - Trust Audio Free D/L',
          },
          {
            published: '2022-10-19T16:07:02Z',
            title: 'Philth - Trust Audio Mix',
            url: 'https://soundcloud.com/trustaudiodnb/philth-trust-audio-mix',
          },
          {
            title: 'Trex & Philth - Cloud Riddim',
            published: '2022-10-15T00:29:27Z',
            url: 'https://soundcloud.com/trustaudiodnb/trex-philth-cloud-riddim',
          },
          {
            title: 'Teej - Blackout Promo Mix (Trust Audio)',
            published: '2022-09-12T13:16:16Z',
            url: 'https://soundcloud.com/trustaudiodnb/teej-x-medic-mc-blackout-promo-mix-trust-audio',
          },
          {
            title: 'Teej - Section 17 VIP (Free D/L)',
            url: 'https://soundcloud.com/trustaudiodnb/teej-section-17-vip-free-dl',
            published: '2022-09-07T14:31:43Z',
          },
          {
            title: 'Oli Lewis - Trust Audio Mix',
            published: '2022-08-01T15:18:01Z',
            url: 'https://soundcloud.com/trustaudiodnb/oli-lewis-trust-audio-mix',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/oli-lewis-this-aint-over',
            published: '2022-07-31T16:37:31Z',
            title: "Oli Lewis - This Ain't Over",
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/stokka-something-brewing',
            published: '2022-05-27T10:32:21Z',
            title: 'Stokka - Something Brewing',
          },
          {
            published: '2022-05-27T10:25:07Z',
            title: 'Stokka - Trust Audio Mix',
            url: 'https://soundcloud.com/trustaudiodnb/stokka-trust-audio-mix',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/trustaudiodnb/teej-section-17-vip-free-dl',
            published: '2022-09-07T14:31:43Z',
            title: 'Teej - Section 17 VIP (Free D/L)',
          },
          {
            title: 'Teej - Blackout Promo Mix (Trust Audio)',
            published: '2022-09-12T13:16:16Z',
            url: 'https://soundcloud.com/trustaudiodnb/teej-x-medic-mc-blackout-promo-mix-trust-audio',
          },
          {
            title: 'Philth - Trust Audio Mix',
            published: '2022-10-19T16:07:02Z',
            url: 'https://soundcloud.com/trustaudiodnb/philth-trust-audio-mix',
          },
          {
            published: '2022-10-15T00:29:27Z',
            url: 'https://soundcloud.com/trustaudiodnb/trex-philth-cloud-riddim',
            title: 'Trex & Philth - Cloud Riddim',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/kawstic-anatomy-trust-audio-free-dl',
            published: '2022-11-24T13:56:36Z',
            title: 'Kawstic - Anatomy - Trust Audio Free D/L',
          },
          {
            published: '2022-11-28T13:56:46Z',
            title: 'Kawstic - Trust Audio Promo Mix',
            url: 'https://soundcloud.com/trustaudiodnb/kawstic-trust-audio-promo-mix',
          },
          {
            title: "Oli Lewis - This Ain't Over",
            published: '2022-07-31T16:37:31Z',
            url: 'https://soundcloud.com/trustaudiodnb/oli-lewis-this-aint-over',
          },
          {
            published: '2022-04-22T03:08:08Z',
            title: 'Teej - Section 17 (TRUST028)',
            url: 'https://soundcloud.com/trustaudiodnb/teej-section-17-trust028',
          },
          {
            title: 'Witzen  - Shop Run',
            published: '2021-06-11T15:22:43Z',
            url: 'https://soundcloud.com/trustaudiodnb/witzen-shop-run',
          },
          {
            title: 'Stokka - Trust Audio Mix',
            url: 'https://soundcloud.com/trustaudiodnb/stokka-trust-audio-mix',
            published: '2022-05-27T10:25:07Z',
          },
          {
            published: '2022-03-02T02:25:27Z',
            url: 'https://soundcloud.com/trustaudiodnb/trex-what-free-download',
            title: 'Trex - What (Free Download)',
          },
          {
            published: '2022-08-01T15:18:01Z',
            title: 'Oli Lewis - Trust Audio Mix',
            url: 'https://soundcloud.com/trustaudiodnb/oli-lewis-trust-audio-mix',
          },
          {
            title: 'Kalane - Remova (Free Download)',
            published: '2022-03-29T13:31:26Z',
            url: 'https://soundcloud.com/trustaudiodnb/kalane-remova-free-download',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/stokka-something-brewing',
            published: '2022-05-27T10:32:21Z',
            title: 'Stokka - Something Brewing',
          },
          {
            published: '2020-10-07T16:50:17Z',
            title: 'Trex - Technicals VIP *Free Download*',
            url: 'https://soundcloud.com/trustaudiodnb/trex-technicals-vip-free-dl',
          },
          {
            title: 'Subtle Element - Smokescreen (Free Download)',
            published: '2021-08-12T20:56:08Z',
            url: 'https://soundcloud.com/trustaudiodnb/subtle-element-smokescreen-free-download',
          },
          {
            published: '2021-05-14T13:03:12Z',
            url: 'https://soundcloud.com/trustaudiodnb/trex-did-you-know-free-download',
            title: 'Trex - Did You Know *Free Download*',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/dunk-trojan',
            published: '2021-03-16T06:31:44Z',
            title: 'Dunk - Trojan *Free Download*',
          },
          {
            title: 'Dunk - Supreme Dream',
            url: 'https://soundcloud.com/trustaudiodnb/dunk-supreme-dream',
            published: '2021-03-05T00:33:25Z',
          },
          {
            title: 'Frame - Native *FREE DOWNLOAD*',
            published: '2021-07-21T16:01:27Z',
            url: 'https://soundcloud.com/trustaudiodnb/frame-native-free-download',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/trust-audio-promo-mix-r3idy',
            published: '2022-03-30T09:19:12Z',
            title: 'Trust Audio Promo Mix - R3IDY',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/subtle-element-trust-audio-mix',
            published: '2021-08-19T21:07:42Z',
            title: 'Subtle Element - Trust Audio Mix',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/trust-audio-strictly-myth-mix',
            title: 'Trust Audio - Strictly Myth Mix',
            published: '2021-12-09T00:00:28Z',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/ninive-goddess-trust027',
            title: 'Ninive - Goddess (Trust027)',
            published: '2022-03-24T11:28:47Z',
          },
          {
            title: 'Frame - Boogaloo',
            url: 'https://soundcloud.com/trustaudiodnb/frame-boogaloo',
            published: '2021-07-21T17:04:20Z',
          },
          {
            published: '2021-09-22T15:08:11Z',
            url: 'https://soundcloud.com/trustaudiodnb/covert-garden-trust-mix',
            title: 'Covert Garden ( Trust Mix)',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/trex-one-time',
            published: '2021-05-13T19:54:38Z',
            title: 'Trex - One Time',
          },
          {
            url: 'https://soundcloud.com/trustaudiodnb/sedo-night-moves',
            published: '2020-07-16T23:35:16Z',
            title: 'Sedo - Night Moves',
          },
          {
            published: '2021-12-06T12:58:29Z',
            title: 'Myth - Crawl VIP',
            url: 'https://soundcloud.com/trustaudiodnb/myth-crawl-vip',
          },
          {
            title: 'Trust XXI Mix',
            url: 'https://soundcloud.com/trustaudiodnb/trust-xxi-mix',
            published: '2022-01-11T02:54:51Z',
          },
        ],
      },
      name: 'Trust Audio',
      id: 'p9yJPT0OUry0L5Y8xAZm',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-eXMwEt0C2RICx4kG-qEN7vg-t500x500.jpg',
      artists: ['Sub Zero', 'Voltage ', 'T95'],
      followers: 54513,
      link: 'https://soundcloud.com/playazrecordings',
      notes: '',
      styles: ['Jump Up', 'Jungle', 'Vocal'],
      submission: 'demosubs@playaz.co.uk',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-08-26T15:17:31Z',
      lastScraped: 1668963241014,
      tracks: {
        reposts: [
          {
            title: 'Lockdown 2021 MIX',
            published: '2020-12-25T16:02:34Z',
            url: 'https://soundcloud.com/ariusofficial/lockdown-2021-mix',
          },
          {
            published: '2020-05-01T15:36:57Z',
            title: 'Konnect Guest Mix by BassBrothers',
            url: 'https://soundcloud.com/konnectpt/bassbrothers-konnect-guest-mix-k010',
          },
          {
            url: 'https://soundcloud.com/annixuk/100-annix',
            title: '100% Annix',
            published: '2019-07-16T16:54:38Z',
          },
          {
            published: '2019-03-08T18:48:45Z',
            title: 'Track of the Day: Critical Impact ft. Skibadee “Bulletproof Vest”',
            url: 'https://soundcloud.com/insomniacevents/track-of-the-day-critical-impact-ft-skibadee-bulletproof-vest',
          },
          {
            url: 'https://soundcloud.com/bassbrothersdnb/bassbrothers-x-mc-dino-live-at-respect-dnb-la-march-2018',
            title: 'BassBrothers x Mc Dino live at Respect - LA March 2018',
            published: '2018-04-23T16:00:45Z',
          },
          {
            url: 'https://soundcloud.com/tykeplayaz/tyke-nutcracka-live-on-rinse-fm-marcus-nasty-show-31-01-18',
            title: 'Tyke & Nutcracka Live on Rinse Fm (Marcus Nasty Show) 31-01-18',
            published: '2018-02-01T12:04:31Z',
          },
          {
            published: '2017-11-21T10:31:58Z',
            url: 'https://soundcloud.com/annixuk/get-you-freak-on-annix-db-bootleg',
            title: 'Get You Freak On (Annix D&B Bootleg)',
          },
          {
            published: '2017-09-29T15:54:54Z',
            url: 'https://soundcloud.com/bassbrothersdnb/bassbrothers-guest-mix-for-dj-hype-on-kiss-sept-2017',
            title: 'BassBrothers Guest Mix for Dj Hype on Kiss - Sept 2017',
          },
          {
            published: '2017-09-29T08:30:09Z',
            url: 'https://soundcloud.com/skankandbass/bass-brothers-tuff-tuna',
            title: 'Bass Brothers - Tuff Tuna',
          },
          {
            url: 'https://soundcloud.com/bassbrothersdnb/bassbrothers-badboy-noisia-radio-clip',
            published: '2017-09-20T15:27:18Z',
            title: 'BassBrothers - Badboy (Noisia Radio)',
          },
        ],
        popular: [
          {
            published: '2022-01-21T11:51:10Z',
            url: 'https://soundcloud.com/playazrecordings/t95-bounce',
            title: 'T95 - Bounce',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/dj-limited-sub-zero-cant-go-to-sleep',
            title: "DJ Limited & Sub Zero - Can't Go To Sleep",
            published: '2018-07-20T09:19:17Z',
          },
          {
            title: 'Sub Zero & T95 - Battle Of The Beast',
            published: '2021-09-17T08:19:43Z',
            url: 'https://soundcloud.com/playazrecordings/sub-zero-t95-battle-of-the-beast',
          },
          {
            title: 'Taxman - It Comes At Night (clip)',
            published: '2019-07-03T10:08:39Z',
            url: 'https://soundcloud.com/playazrecordings/taxman-it-comes-at-night',
          },
          {
            title: 'Sub Zero & DJ Limited - The Vibrations EP',
            published: '2017-12-11T16:39:52Z',
            url: 'https://soundcloud.com/playazrecordings/sub-zero-dj-limited-the-vibrations-ep',
          },
          {
            title: 'Tyke & Recipe - Mind Games',
            published: '2021-11-19T16:50:11Z',
            url: 'https://soundcloud.com/playazrecordings/tyke-recipe-mind-games',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/critical-impact-bulletproof-vest-mr-smith',
            published: '2019-02-25T09:37:08Z',
            title: 'Critical Impact - Bulletproof Vest / Mr Smith',
          },
          {
            published: '2015-05-11T10:03:44Z',
            title: 'Sub Zero - Inside the Beast EP - Playaz Recordings',
            url: 'https://soundcloud.com/playazrecordings/sub-zero-inside-the-beast-ep-playaz-recordings',
          },
          {
            published: '2018-08-03T10:46:53Z',
            title: 'Mob Tactics - Crazy Hype (Annix Remix)',
            url: 'https://soundcloud.com/playazrecordings/mob-tactics-crazy-hype-annix-remix',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/potential-badboy-girlz-l-side-remix-1',
            title: 'Potential Badboy - Girlz (L-Side Remix)',
            published: '2021-03-12T10:35:12Z',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/tyke-skank',
            published: '2022-08-26T15:17:31Z',
            title: 'Tyke - Skank',
          },
          {
            title: 'Taxman - Out Of Your Mind',
            url: 'https://soundcloud.com/playazrecordings/taxman-out-of-your-mind',
            published: '2022-07-18T09:42:22Z',
          },
          {
            published: '2016-05-23T12:51:48Z',
            title: 'Potential Badboy - Revolution (Remixes)',
            url: 'https://soundcloud.com/playazrecordings/potential-badboy-revolution-remixes',
          },
          {
            published: '2015-12-23T17:19:09Z',
            title: "Annix - Nuff Sound Can't Play - Free Download",
            url: 'https://soundcloud.com/playazrecordings/annix-nuff-sound-cant-play',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/majistrate-turno-worlds-end',
            published: '2016-10-31T14:18:20Z',
            title: 'Majistrate & Turno - Worlds End / Mutton',
          },
          {
            title: 'Voltage - Pop It Off feat Logan',
            published: '2021-09-24T12:58:06Z',
            url: 'https://soundcloud.com/playazrecordings/voltage-pop-it-off-feat-logan',
          },
          {
            published: '2015-09-21T11:56:33Z',
            title: 'Playaz Radio #002 - Potential Badboy',
            url: 'https://soundcloud.com/playazrecordings/playazradio002',
          },
          {
            title: 'Jam Thieves & Voltage - LSD',
            url: 'https://soundcloud.com/playazrecordings/jam-thieves-voltage-lsd',
            published: '2017-12-22T17:44:00Z',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/annix-remixed-vol-1',
            title: 'Annix - Axshun (Neonlight Remix)',
            published: '2018-02-13T09:06:32Z',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/tyke-feat-daddy-earl-earth',
            title: 'Tyke feat Daddy Earl - Earth',
            published: '2022-06-17T07:46:21Z',
          },
          {
            title: 'Potential Badboy - Revolution (Mistajam Show)',
            url: 'https://soundcloud.com/playazrecordings/potential-badboy-revolution-mistajam-show',
            published: '2015-10-06T14:46:17Z',
          },
          {
            title: 'Playaz Radio #001 - Annix',
            published: '2015-08-27T08:25:33Z',
            url: 'https://soundcloud.com/playazrecordings/playazradio001',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/annix-buss-off-feat-dj-hype-eksman',
            published: '2018-06-22T08:38:52Z',
            title: 'Buss Off feat DJ Hype & Eksman',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/taxman-special-request',
            title: 'Taxman - Special Request',
            published: '2022-07-18T09:42:23Z',
          },
          {
            title: 'Jam Thieves - Love Forever EP',
            url: 'https://soundcloud.com/playazrecordings/jam-thieves-love-forever-ep',
            published: '2019-11-01T11:49:00Z',
          },
          {
            title: 'When The Dreams Are Over',
            url: 'https://soundcloud.com/playazrecordings/when-the-dreams-are-over',
            published: '2020-12-23T13:29:13Z',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/taxman-ganja',
            published: '2022-02-11T16:31:49Z',
            title: 'Taxman - Ganja',
          },
          {
            title: 'DJ Hazard - Machete VIP - Playaz Digital',
            url: 'https://soundcloud.com/playazrecordings/dj-hazard-machete-vip-playaz-digital',
            published: '2010-07-07T16:06:02Z',
          },
          {
            published: '2016-06-27T12:19:53Z',
            title: 'Jam Thieves - Minimal Funk Project',
            url: 'https://soundcloud.com/playazrecordings/jam-thieves-minimal-funk-project',
          },
          {
            published: '2015-06-29T09:03:55Z',
            title: 'Jam Thieves - City On Fire EP - New Playaz',
            url: 'https://soundcloud.com/playazrecordings/jam-thieves-city-on-fire-ep',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/playazrecordings/tyke-skank',
            title: 'Tyke - Skank',
            published: '2022-08-26T15:17:31Z',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/taxman-special-request',
            published: '2022-07-18T09:42:23Z',
            title: 'Taxman - Special Request',
          },
          {
            published: '2022-07-18T09:42:22Z',
            title: 'Taxman - Out Of Your Mind',
            url: 'https://soundcloud.com/playazrecordings/taxman-out-of-your-mind',
          },
          {
            published: '2022-06-17T07:46:21Z',
            url: 'https://soundcloud.com/playazrecordings/tyke-feat-daddy-earl-earth',
            title: 'Tyke feat Daddy Earl - Earth',
          },
          {
            published: '2022-05-10T19:03:07Z',
            title: 'Tyke - May 2022',
            url: 'https://soundcloud.com/playazrecordings/tyke-may-2022',
          },
          {
            title: 'Tyke - March 2022',
            url: 'https://soundcloud.com/playazrecordings/tyke-march-2022',
            published: '2022-03-23T17:49:21Z',
          },
          {
            title: 'Taxman - Ganja',
            published: '2022-02-11T16:31:49Z',
            url: 'https://soundcloud.com/playazrecordings/taxman-ganja',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/taxman-ratty-badboy',
            title: 'Taxman - Ratty Badboy',
            published: '2022-02-11T16:29:49Z',
          },
          {
            url: 'https://soundcloud.com/playazrecordings/t95-bounce',
            title: 'T95 - Bounce',
            published: '2022-01-21T11:51:10Z',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/playazrecordings/t95-bounce?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/playazrecordings/sub-zero-t95-battle-of-the-beast?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/playazrecordings/tyke-recipe-mind-games?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/playazrecordings/potential-badboy-girlz-l-side-remix-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      name: 'Playaz',
      id: 'pnSxNPmDKolPNzBcGdgU',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-mQjZGwGDZGWp6Hei-VgEqew-t500x500.jpg',
      artists: ['C&K', 'K Motionz', 'Mefjus', 'The Upbeats'],
      followers: 274263,
      link: 'https://soundcloud.com/ukf',
      notes: '',
      styles: ['Jump Up', 'Liquid', 'Neurofunk', 'Vocal'],
      submission: 'http://widget.demobox.co/ukf-main',
      songsSubmitted: ['Night & Day', 'Stamina', "You Don't Know"],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-18T12:32:51Z',
      lastScraped: 1668963243374,
      tracks: {
        popular: [
          {
            published: '2022-03-23T12:02:24Z',
            url: 'https://soundcloud.com/ukf/goddard-green-light',
            title: 'Goddard - Green Light (ft. Megan Linnell)',
          },
          {
            title: 'Mefjus & Camo & Krooked - Sientelo',
            published: '2020-12-09T14:19:47Z',
            url: 'https://soundcloud.com/ukf/mefjus-camo-krooked-sientelo',
          },
          {
            published: '2019-10-10T11:52:33Z',
            title: '1991 - Full Send',
            url: 'https://soundcloud.com/ukf/1991-full-send',
          },
          {
            url: 'https://soundcloud.com/ukf/k-motionz-high-note',
            published: '2021-03-24T16:05:19Z',
            title: 'K Motionz - High Note (ft. Emily Makis)',
          },
          {
            url: 'https://soundcloud.com/ukf/tcp-buunshin-rhode-i-need-a-break',
            title: 'The Caracal Project, Buunshin & Rhode - I need a break.',
            published: '2022-07-14T15:07:13Z',
          },
          {
            title: 'The Caracal Project - The lights on your face.',
            published: '2022-09-06T11:56:58Z',
            url: 'https://soundcloud.com/ukf/the-caracal-project-the-lights-on-your-face',
          },
          {
            published: '2017-12-03T17:10:50Z',
            title: 'Hybrid Minds - Solitude (ft. Alexa Harley)',
            url: 'https://soundcloud.com/ukf/hybrid-minds-solitude',
          },
          {
            published: '2015-01-28T17:20:57Z',
            title: 'The Prodigy - Nasty (Spor Remix)',
            url: 'https://soundcloud.com/ukf/the-prodigy-nasty-spor-remix',
          },
          {
            title: 'Bensley - Hit The Lights',
            published: '2022-07-07T14:25:04Z',
            url: 'https://soundcloud.com/ukf/bensley-hit-the-lights',
          },
          {
            title: 'BenZel - Wasted Love (SpectraSoul Remix)',
            published: '2014-10-16T17:12:06Z',
            url: 'https://soundcloud.com/ukf/benzel-wasted-love-spectrasoul-remix',
          },
          {
            title: 'MENDOZA - Love Druggie (Addict) (Jade Blue Remix)',
            url: 'https://soundcloud.com/ukf/mendoza-love-druggie-jade-blue-remix',
            published: '2015-11-25T15:23:33Z',
          },
          {
            published: '2022-03-29T13:34:52Z',
            url: 'https://soundcloud.com/ukf/blossom-surreal',
            title: 'Blossom - Surreal (ft. Abi Flynn)',
          },
          {
            url: 'https://soundcloud.com/ukf/the-upbeats-all-over-you',
            title: 'The Upbeats - All Over You',
            published: '2022-05-25T10:08:15Z',
          },
          {
            title: 'Elipsa - Survival',
            published: '2022-07-14T14:47:10Z',
            url: 'https://soundcloud.com/ukf/elipsa-survival',
          },
          {
            url: 'https://soundcloud.com/ukf/shockone-follow-me',
            title: 'ShockOne - Follow Me',
            published: '2020-09-08T09:50:14Z',
          },
          {
            url: 'https://soundcloud.com/ukf/shockone-lee-mvtthews-thinkin-about',
            title: 'ShockOne & Lee Mvtthews - Thinkin About',
            published: '2022-03-29T13:35:35Z',
          },
          {
            url: 'https://soundcloud.com/ukf/wilkinson-machina',
            published: '2019-10-23T10:36:07Z',
            title: 'Wilkinson - Machina',
          },
          {
            title: "Blinkie - Don't Give Up (On Love) (Frankee Remix)",
            published: '2015-11-17T17:47:09Z',
            url: 'https://soundcloud.com/ukf/blinkie-dont-give-up-on-love-frankee-remix',
          },
          {
            title: "The Upbeats - We Don't Lie",
            url: 'https://soundcloud.com/ukf/the-upbeats-we-dont-lie',
            published: '2022-04-13T12:32:04Z',
          },
          {
            url: 'https://soundcloud.com/ukf/only-us-bc4',
            title: 'Francois & Louis Benton x Riddim Commission - Only Us (ft. Asha)',
            published: '2018-09-07T14:03:28Z',
          },
          {
            title: 'Georgie Riot - Do Better',
            published: '2022-07-07T14:43:18Z',
            url: 'https://soundcloud.com/ukf/georgie-riot-do-better',
          },
          {
            url: 'https://soundcloud.com/ukf/imanu-a-taste-of-hope',
            published: '2021-02-24T11:27:42Z',
            title: 'IMANU - A Taste of Hope',
          },
          {
            published: '2020-06-26T11:02:29Z',
            title: 'K Motionz - Hack It (ft. Duskee)',
            url: 'https://soundcloud.com/ukf/k-motionz-hack-it',
          },
          {
            published: '2021-09-22T13:20:30Z',
            title: 'Camo & Krooked & Mefjus - U',
            url: 'https://soundcloud.com/ukf/camo-krooked-mefjus-u',
          },
          {
            title: 'Kumarion - Right Now',
            url: 'https://soundcloud.com/ukf/kumarion-right-now',
            published: '2022-03-29T13:32:56Z',
          },
          {
            published: '2021-04-11T15:13:08Z',
            url: 'https://soundcloud.com/ukf/imanu-a-taste-of-hope-hallowvale',
            title: 'IMANU - A Taste of Hope (Hallowvale)',
          },
          {
            url: 'https://soundcloud.com/ukf/imanu-the-caracal-project-leotrix-gaspin-4-air',
            published: '2021-06-16T13:03:46Z',
            title: 'IMANU x The Caracal Project x Leotrix - Gaspin 4 Air',
          },
          {
            title: 'K Motionz - Dusk',
            url: 'https://soundcloud.com/ukf/k-motionz-dusk',
            published: '2019-11-27T16:44:07Z',
          },
          {
            title: 'goddard. & Charlotte Haining - Feel Like That',
            url: 'https://soundcloud.com/ukf/goddard-charlotte-haining-feel-like-that',
            published: '2022-08-19T15:41:33Z',
          },
          {
            published: '2015-03-25T10:45:42Z',
            title: 'Ivy Lab - Sunday Crunk (Mefjus Remix)',
            url: 'https://soundcloud.com/ukf/ivy-lab-sunday-crunk-mefjus-remix',
          },
        ],
        recent: [
          {
            title: 'Matrix & Futurebound & Synth System - Return To You (ft. Anna Simone)',
            url: 'https://soundcloud.com/ukf/matrix-futurebound-synth-system-return-to-you-ft-anna-simone',
            published: '2022-11-18T12:32:51Z',
          },
          {
            url: 'https://soundcloud.com/ukf/andromedik-luka-lied-to-you',
            title: 'Andromedik & Luka - Lied To You',
            published: '2022-08-19T15:43:46Z',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/enei/enei-acid-shot',
            title: 'Enei - Acid Shot',
            published: '2022-11-11T17:24:56Z',
          },
          {
            title: 'Justin Hawkes - Existential',
            url: 'https://soundcloud.com/justinhawkes/sets/existential-lp',
            published: '2022-10-25T22:32:02Z',
          },
          {
            published: '2022-10-28T11:15:13Z',
            url: 'https://soundcloud.com/foxstevenson/cant-even-tell',
            title: "Can't Even Tell",
          },
          {
            published: '2022-10-26T17:11:12Z',
            url: 'https://soundcloud.com/thecaracalproject/journee-de-merde',
            title: 'Journée De Merde. [FREE DOWNLOAD]',
          },
          {
            published: '2022-08-18T15:44:35Z',
            title: 'Tempo',
            url: 'https://soundcloud.com/solahmusic/tempo',
          },
          {
            published: '2022-08-18T15:43:05Z',
            url: 'https://soundcloud.com/solahmusic/time',
            title: 'Time',
          },
          {
            published: '2022-08-18T15:41:17Z',
            url: 'https://soundcloud.com/solahmusic/king',
            title: 'King',
          },
          {
            published: '2022-09-23T12:30:50Z',
            url: 'https://soundcloud.com/synergysnrg/klip-touch-the-sky-synergy-remix',
            title: 'KL!P - Touch The Sky (Synergy Remix)',
          },
          {
            title: 'Better Than Gold (feat. Andrew Hellier)',
            published: '2022-09-23T17:56:25Z',
            url: 'https://soundcloud.com/justinhawkes/better-than-gold',
          },
          {
            title: 'Victory Over Truth',
            published: '2022-09-16T08:56:15Z',
            url: 'https://soundcloud.com/foxstevenson/victory-over-truth',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/ukf/mefjus-camo-krooked-sientelo',
        'https://soundcloud.com/ukf/the-caracal-project-the-lights-on-your-face',
        'https://soundcloud.com/ukf/bensley-hit-the-lights',
      ],
      name: 'UKF',
      email: '',
      id: 'qPUspYYTPsZ3WyGHvLS0',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-RofXBSMzzXyTKWbT-JLj00w-t500x500.jpg',
      artists: ['Gray', 'Satl', 'Whiney'],
      followers: 8865,
      link: 'https://soundcloud.com/absysrecords',
      notes: '',
      styles: ['Jungle', 'Liquid', 'Minimal'],
      submission: 'absysrec@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-14T11:50:13Z',
      lastScraped: 1668963244767,
      tracks: {
        reposts: [
          {
            title: 'Bita Godzina Studio Mix | SHO | 2022 11 13',
            url: 'https://soundcloud.com/bitagodzina/bita-godzina-studio-mix-sho-2022-11-13',
            published: '2022-11-14T11:50:13Z',
          },
          {
            url: 'https://soundcloud.com/sharpsonmusic/sharpson-centre-point-breaks-drum-bass-set',
            title: '🍪Choki Biki🍪Sharpson Live @ Centre Point [Breaks / Drum & Bass / Jungle Mix]',
            published: '2022-10-17T20:03:01Z',
          },
          {
            title: 'HeadRead - Bleep [Absys Records - ABSDIG024]',
            url: 'https://soundcloud.com/headread/headread-bleep',
            published: '2021-12-15T07:23:12Z',
          },
          {
            published: '2021-12-15T07:23:10Z',
            title: 'HeadRead - Contra [Absys Records - ABSDIG024]',
            url: 'https://soundcloud.com/headread/headread-contra',
          },
          {
            published: '2021-12-15T07:23:08Z',
            url: 'https://soundcloud.com/headread/headread-jazz-force-one',
            title: 'HeadRead - Jazz Force One [Absys Records - ABSDIG024]',
          },
          {
            title: 'HeadRead - Starcrash [Absys Records - ABSDIG024]',
            url: 'https://soundcloud.com/headread/headread-starcrash',
            published: '2021-12-15T07:23:06Z',
          },
          {
            published: '2021-02-15T11:07:40Z',
            title: 'Crilli Drum and Bass Podcast 2021/2 - Sho Absys',
            url: 'https://soundcloud.com/crillidnb/crilli-drum-and-bass-podcast-february-2021-sho-absyswav',
          },
          {
            published: '2018-12-20T19:50:51Z',
            title: 'Handra & Mystic State - Side Effects (Fre4knc Remix)',
            url: 'https://soundcloud.com/drumandbassarena/handra-mystic-state-side-effects-fre4knc-remix',
          },
          {
            url: 'https://soundcloud.com/dnbdojo/radicall-touch-premiere',
            title: 'Radicall - Touch [Premiere]',
            published: '2018-07-02T13:38:18Z',
          },
          {
            published: '2017-07-17T17:43:38Z',
            title: 'SHO - Absys Live At Kompas Audio',
            url: 'https://soundcloud.com/kompas-audio/sho-absys-live-at-kompas-audio',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/absysrecords/hidden-element-feat-john-lamonica-the-next-day',
            title: 'Hidden Element feat John LaMonica - The Next Day',
            published: '2016-12-14T17:42:26Z',
          },
          {
            title: 'Handra & Mystic State - Side Effects (Fre4knc Remix)',
            url: 'https://soundcloud.com/absysrecords/handra-mystic-state-side-effects-fre4knc-remix',
            published: '2018-10-25T19:39:31Z',
          },
          {
            title: 'Queensway - Sixth Race',
            url: 'https://soundcloud.com/absysrecords/queensway-sixth-race',
            published: '2011-05-16T22:38:38Z',
          },
          {
            url: 'https://soundcloud.com/absysrecords/harland-moon-mark-system-remix',
            published: '2020-08-04T17:27:47Z',
            title: 'Harland - Moon (Mark System Remix)',
          },
          {
            url: 'https://soundcloud.com/absysrecords/pluton-skyer-feat-grimm-lead-me-on',
            title: 'Pluton & Skyer feat Grimm - Lead Me On',
            published: '2017-11-17T23:04:56Z',
          },
          {
            url: 'https://soundcloud.com/absysrecords/electrosoul-system-satl-satless',
            title: 'Electrosoul System & Satl - Satless',
            published: '2017-07-18T20:23:20Z',
          },
          {
            title: 'Ricky Force - Ecstasy',
            published: '2019-07-31T19:50:10Z',
            url: 'https://soundcloud.com/absysrecords/ricky-force-ecstasy',
          },
          {
            url: 'https://soundcloud.com/absysrecords/nuage-open-road-clip',
            title: 'Nuage - Open Road',
            published: '2011-03-03T13:02:32Z',
          },
          {
            title: 'Derrick & Tonika - Slow Heaven (I Wannabe Remix)',
            published: '2020-05-03T22:32:00Z',
            url: 'https://soundcloud.com/absysrecords/derrick-tonika-slow-heaven-i-wannabe-remix',
          },
          {
            url: 'https://soundcloud.com/absysrecords/mortem-proximity',
            published: '2015-08-03T14:53:23Z',
            title: 'Mortem - Proximity',
          },
          {
            published: '2022-05-03T15:54:51Z',
            url: 'https://soundcloud.com/absysrecords/leagues-deep-resound-remix',
            title: 'Loxy & Resound - Leagues Deep (Resound Remix)',
          },
          {
            url: 'https://soundcloud.com/absysrecords/nuage-feat-yorra-gray',
            published: '2012-12-18T00:05:05Z',
            title: 'Nuage feat. Yorra - Gray',
          },
          {
            title: 'Loxy & Resound - Leagues Deep (Original 2011 Mix)',
            url: 'https://soundcloud.com/absysrecords/leagues-deep-original-2011-mix',
            published: '2022-05-03T15:55:10Z',
          },
          {
            title: 'Invadhertz - Boreal',
            url: 'https://soundcloud.com/absysrecords/invadhertz-boreal',
            published: '2017-04-03T17:17:57Z',
          },
          {
            published: '2020-08-04T17:04:07Z',
            url: 'https://soundcloud.com/absysrecords/harland-moon-original-mix',
            title: 'Harland - Moon (Original Mix)',
          },
          {
            title: 'SNIK - Absence (Hatti Vatti Remix)',
            published: '2022-06-07T19:08:35Z',
            url: 'https://soundcloud.com/absysrecords/snik-absence-hatti-vatti-remix',
          },
          {
            title: 'Ricky Force - Firehouse Dub',
            url: 'https://soundcloud.com/absysrecords/ricky-force-firehouse-dub',
            published: '2019-07-31T19:44:29Z',
          },
          {
            url: 'https://soundcloud.com/absysrecords/radicall-femme-fatale-silence-groove-remix',
            published: '2016-08-17T10:18:26Z',
            title: 'Radicall - Femme Fatale (Silence Groove Remix)',
          },
          {
            title: 'Evocativ - The Lovers (Whiney Remix) - Free Download',
            url: 'https://soundcloud.com/absysrecords/evocativ-the-lovers-whiney-remix-free-download',
            published: '2014-09-03T16:15:21Z',
          },
          {
            title: 'Handra & Mystic State - Side Effects',
            published: '2018-10-25T19:43:16Z',
            url: 'https://soundcloud.com/absysrecords/handra-mystic-state-side-effects',
          },
          {
            published: '2016-08-22T17:05:05Z',
            url: 'https://soundcloud.com/absysrecords/radicall-feat-satl-silent-voices-handra-remix',
            title: 'Radicall feat. Satl - Silent Voices (Handra Remix)',
          },
          {
            published: '2013-04-15T16:34:19Z',
            title: 'Nuage - Eversky (Anile Remix)',
            url: 'https://soundcloud.com/absysrecords/nuage-eversky-anile-remix-12',
          },
          {
            title: 'Evocativ - Lixir',
            url: 'https://soundcloud.com/absysrecords/evocativ-lixir',
            published: '2013-12-11T20:41:59Z',
          },
          {
            title: 'Queensway - Within Each Of Us',
            published: '2011-05-16T22:14:53Z',
            url: 'https://soundcloud.com/absysrecords/queensway-within-each-of-us',
          },
          {
            title: 'Radicall - Build Me Up (Bungle Remix)',
            published: '2018-07-02T17:27:14Z',
            url: 'https://soundcloud.com/absysrecords/radicall-build-me-up-bungle-remix',
          },
          {
            url: 'https://soundcloud.com/absysrecords/leagues-deep-am94-remix',
            title: 'Loxy & Resound - Leagues Deep (AM94 Remix)',
            published: '2022-05-03T15:55:00Z',
          },
          {
            title: 'Absys Records Podcast Mix 10 by Mortem & Harland',
            url: 'https://soundcloud.com/absysrecords/absys-records-podcast-mix-10-by-mortem-harland',
            published: '2015-12-31T14:33:54Z',
          },
          {
            published: '2009-12-18T00:54:43Z',
            title: 'Radicall feat. Lady Katee - Emotive',
            url: 'https://soundcloud.com/absysrecords/radicall-feat-ktee-emotive',
          },
          {
            title: 'Airtek - To Your Heart',
            published: '2017-02-17T13:58:14Z',
            url: 'https://soundcloud.com/absysrecords/airtek-to-your-heart',
          },
          {
            url: 'https://soundcloud.com/absysrecords/estereo-hatti-vatti-kolours',
            title: 'Es.tereo & Hatti Vatti - Kolours',
            published: '2016-07-08T13:57:35Z',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/absysrecords/snik-absence-hatti-vatti-remix',
            published: '2022-06-07T19:08:35Z',
            title: 'SNIK - Absence (Hatti Vatti Remix)',
          },
          {
            published: '2022-05-03T15:55:10Z',
            url: 'https://soundcloud.com/absysrecords/leagues-deep-original-2011-mix',
            title: 'Loxy & Resound - Leagues Deep (Original 2011 Mix)',
          },
          {
            url: 'https://soundcloud.com/absysrecords/leagues-deep-am94-remix',
            published: '2022-05-03T15:55:00Z',
            title: 'Loxy & Resound - Leagues Deep (AM94 Remix)',
          },
          {
            url: 'https://soundcloud.com/absysrecords/leagues-deep-resound-remix',
            title: 'Loxy & Resound - Leagues Deep (Resound Remix)',
            published: '2022-05-03T15:54:51Z',
          },
          {
            published: '2020-08-04T17:54:48Z',
            url: 'https://soundcloud.com/absysrecords/harland-leo',
            title: 'Harland - Leo',
          },
          {
            title: 'Harland - Simon Lake',
            url: 'https://soundcloud.com/absysrecords/harland-simon-lake',
            published: '2020-08-04T17:45:28Z',
          },
          {
            url: 'https://soundcloud.com/absysrecords/harland-moon-mark-system-remix',
            title: 'Harland - Moon (Mark System Remix)',
            published: '2020-08-04T17:27:47Z',
          },
          {
            url: 'https://soundcloud.com/absysrecords/harland-moon-mark-system-ambient-edit',
            published: '2020-08-04T17:14:59Z',
            title: 'Harland - Moon (Mark System Ambient Edit)',
          },
          {
            title: 'Harland - Moon (Original Mix)',
            published: '2020-08-04T17:04:07Z',
            url: 'https://soundcloud.com/absysrecords/harland-moon-original-mix',
          },
          {
            published: '2020-05-03T22:32:00Z',
            title: 'Derrick & Tonika - Slow Heaven (I Wannabe Remix)',
            url: 'https://soundcloud.com/absysrecords/derrick-tonika-slow-heaven-i-wannabe-remix',
          },
        ],
      },
      name: 'Absys Records',
      id: 'qqPGYIKGLMYuJu3JVMaL',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000684532253-2wjib0-t500x500.jpg',
      artists: ['BCee', 'Data 3', 'Etherwood'],
      followers: 8061,
      link: 'https://soundcloud.com/soulventrecords',
      notes: '',
      styles: ['Dancefloor', 'Liquid', 'Minimal', 'Vocal'],
      submission: 'http://soulventrecords.label-engine.com/demos',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-14T17:22:53Z',
      lastScraped: 1668963246194,
      tracks: {
        popular: [
          {
            published: '2016-10-03T11:56:49Z',
            url: 'https://soundcloud.com/soulventrecords/pathos-ft-zoe-moon',
            title: 'Phloem - Pathos ft. Zoe Moon',
          },
          {
            title: 'Pola & Bryson - Way Back ft. Siege MC (Data 3 Remix)',
            published: '2017-09-27T19:12:23Z',
            url: 'https://soundcloud.com/soulventrecords/pola-bryson-way-back-ft-siege-mc-data-3-remix',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/vektah-echo-mode-feat-pav4n-t',
            title: 'Vektah - Echo Mode (feat. PAV4N & T - Man)',
            published: '2022-07-26T14:04:53Z',
          },
          {
            published: '2020-03-24T14:15:09Z',
            url: 'https://soundcloud.com/soulventrecords/inmost-home-ft-anastasia',
            title: 'In:Most - Home ft. Anastasia',
          },
          {
            published: '2022-06-29T12:58:48Z',
            title: "Mountain - I'm Free (feat. Kojo) (Hugh Hardie Remix)",
            url: 'https://soundcloud.com/soulventrecords/im-free-feat-kojo-hugh-hardie',
          },
          {
            title: 'Pola & Bryson - Run From You ft. Sammie Bella (Hugh Hardie Remix)',
            published: '2017-10-11T13:53:03Z',
            url: 'https://soundcloud.com/soulventrecords/pola-bryson-run-from-you-ft-sammie-bella-hugh-hardie-remix',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/off-angle-feat-pav4n',
            published: '2022-04-25T14:01:49Z',
            title: 'Askel & Elere x Unglued - Off-angle (feat. PAV4N)',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/breathe',
            title: 'Circumference - Breathe',
            published: '2021-10-08T12:20:35Z',
          },
          {
            title: 'Jon Tho - Smile (feat. Freshney)',
            published: '2022-07-04T16:39:05Z',
            url: 'https://soundcloud.com/soulventrecords/smile-feat-freshney',
          },
          {
            published: '2022-03-16T12:26:31Z',
            url: 'https://soundcloud.com/soulventrecords/ghost-mode-inmost-remix',
            title: 'Crate Classics & Catching Cairo - Ghost Mode (In:Most Remix)',
          },
          {
            published: '2022-08-22T16:11:46Z',
            url: 'https://soundcloud.com/soulventrecords/hugh-hardie-blush-feat-zara-kershaw',
            title: 'Hugh Hardie - Blush (feat. Zara Kershaw)',
          },
          {
            published: '2021-11-03T13:33:00Z',
            url: 'https://soundcloud.com/soulventrecords/hide-and-seek',
            title: 'Screamarts - Hide and Seek',
          },
          {
            title: 'Pola & Bryson - Bad Habit',
            url: 'https://soundcloud.com/soulventrecords/pola-bryson-bad-habit',
            published: '2015-03-31T21:44:29Z',
          },
          {
            title: 'In:Most & Etherwood - Bloodstream',
            url: 'https://soundcloud.com/soulventrecords/inmost-etherwood-bloodstream',
            published: '2021-06-15T16:14:11Z',
          },
          {
            published: '2015-01-19T09:21:48Z',
            url: 'https://soundcloud.com/soulventrecords/glaive-all-is-not-lost-feat-kate-mcquaide-original-mix',
            title: 'Glaive - All Is Not Lost ft. Kate McQuaide (Original Mix)',
          },
          {
            published: '2021-04-09T13:17:25Z',
            url: 'https://soundcloud.com/soulventrecords/request',
            title: 'Vektah - Request',
          },
          {
            title: 'Ruth Royall x Makoto - New Love',
            url: 'https://soundcloud.com/soulventrecords/new-love',
            published: '2021-07-22T14:38:34Z',
          },
          {
            published: '2018-09-19T20:46:17Z',
            url: 'https://soundcloud.com/soulventrecords/lq-keep-hiding',
            title: 'LQ - Keep Hiding',
          },
          {
            title: 'Changing Faces - Talk To You',
            published: '2017-05-26T09:34:51Z',
            url: 'https://soundcloud.com/soulventrecords/talk-to-you-1',
          },
          {
            published: '2017-12-20T19:23:10Z',
            url: 'https://soundcloud.com/soulventrecords/monrroe-take-me-away',
            title: 'Monrroe - Take Me Away',
          },
          {
            published: '2019-07-03T17:11:20Z',
            url: 'https://soundcloud.com/soulventrecords/dubplate-culture-ft-coppa-1',
            title: 'Jolliffe - Dubplate Culture ft. Coppa',
          },
          {
            title: 'Vektah & Levela - Lockdown The Streets',
            published: '2022-07-26T14:04:51Z',
            url: 'https://soundcloud.com/soulventrecords/vektah-levela-lockdown-the',
          },
          {
            published: '2022-05-26T14:55:50Z',
            title: 'Jam Thieves - YAM (feat. Arkaik)',
            url: 'https://soundcloud.com/soulventrecords/yam-feat-arkaik',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/soulvent-records-podcast-episode-53-hosted-by-mike-drop',
            title: 'Soulvent Records Podcast: Episode 53 (hosted by Mike Drop)',
            published: '2022-10-18T21:47:43Z',
          },
          {
            published: '2022-06-29T12:58:39Z',
            url: 'https://soundcloud.com/soulventrecords/request-whiney-remix',
            title: 'Vektah - Request (Whiney Remix)',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/dont-wake-me-up-pola-bryson',
            title: "Bop & Subwave - Don't Wake Me Up (Pola & Bryson Remix)",
            published: '2022-06-29T12:58:49Z',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/do-i-know-u',
            published: '2021-08-24T10:34:59Z',
            title: 'Askel & Elere - Do I Know U',
          },
          {
            published: '2016-11-14T15:18:51Z',
            url: 'https://soundcloud.com/soulventrecords/imba-ravana',
            title: 'Imba - Ravana',
          },
          {
            published: '2022-07-26T14:04:49Z',
            url: 'https://soundcloud.com/soulventrecords/vektah-spectral',
            title: 'Vektah - Spectral',
          },
          {
            published: '2022-09-01T18:41:05Z',
            url: 'https://soundcloud.com/soulventrecords/picture-disc',
            title: 'BCee & T.R.A.C. - Picture Disc',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/soulventrecords/squelcher',
            title: 'Hugh Hardie & In:Most - Squelcher',
            published: '2022-09-01T18:41:07Z',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/what-i-want',
            published: '2022-09-01T18:41:15Z',
            title: 'Vektah & Ruth Royall - What I Want',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/picture-disc',
            title: 'BCee & T.R.A.C. - Picture Disc',
            published: '2022-09-01T18:41:05Z',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/clash-vip',
            published: '2022-09-01T18:41:13Z',
            title: 'Jappa - Clash VIP',
          },
          {
            title: "Beeson & Dynamite MC - 'Til 4am",
            url: 'https://soundcloud.com/soulventrecords/til-4am',
            published: '2022-09-01T18:41:26Z',
          },
          {
            title: 'Soulvent Records Podcast: Episode 53 (hosted by Mike Drop)',
            url: 'https://soundcloud.com/soulventrecords/soulvent-records-podcast-episode-53-hosted-by-mike-drop',
            published: '2022-10-18T21:47:43Z',
          },
          {
            url: 'https://soundcloud.com/soulventrecords/soulvent-records-podcast-episode-52-hosted-by-mike-drop',
            title: 'Soulvent Records Podcast: Episode 52 (hosted by Mike Drop)',
            published: '2022-09-27T00:11:20Z',
          },
          {
            title: 'Hugh Hardie - Blush (feat. Zara Kershaw)',
            url: 'https://soundcloud.com/soulventrecords/hugh-hardie-blush-feat-zara-kershaw',
            published: '2022-08-22T16:11:46Z',
          },
          {
            title: 'Visionobi - Wayside (feat. Mikal)',
            url: 'https://soundcloud.com/soulventrecords/wayside-ntm-mastered',
            published: '2022-08-16T14:53:15Z',
          },
          {
            published: '2022-07-26T14:04:49Z',
            title: 'Vektah - Spectral',
            url: 'https://soundcloud.com/soulventrecords/vektah-spectral',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/wearestudio/jon-tho-echoes-of-nothing-premiere-1',
            title: 'Jon Tho - Echoes of Nothing [Premiere]',
            published: '2022-11-11T07:33:24Z',
          },
          {
            published: '2022-11-14T17:22:53Z',
            title: 'Hugh Hardie & In:Most - Squelcher',
            url: 'https://soundcloud.com/districtbassmusic/hugh-hardie-inmost-squelcher',
          },
          {
            url: 'https://soundcloud.com/skankandbass/data-3-foundation',
            title: 'Data 3 - Foundation',
            published: '2022-11-07T08:30:36Z',
          },
          {
            published: '2022-11-03T17:06:47Z',
            url: 'https://soundcloud.com/paleblumusic/paleblu-on-reprezent-feat-sweetpea-shady-novelle-mountain-november-2022',
            title:
              'Paleblu on Reprezent (feat. Sweetpea, Shady Novelle & Mountain) - November 2022',
          },
          {
            url: 'https://soundcloud.com/skankandbass/light-up-the-night-feat-karina-ramage',
            published: '2022-10-03T16:50:01Z',
            title: 'In:Most - Light Up The Night (feat. Karina Ramage)',
          },
          {
            title: 'Visionobi - Wayside (ft. Mikal)',
            published: '2022-09-14T22:58:01Z',
            url: 'https://soundcloud.com/drumandbassarena/visionobi-wayside-ft-mikal',
          },
          {
            url: 'https://soundcloud.com/rinsefm/soulvent-meets-hospital-records-with-hugh-hardie-mountain-winslow-imo-lu-27-july-2022',
            title:
              'Soulvent Meets Hospital Records with Hugh Hardie, Mountain, Winslow & imo-Lu - 27 July 2022',
            published: '2022-07-30T13:52:34Z',
          },
          {
            published: '2022-08-12T08:27:54Z',
            title: "Jon Tho - Don't Want To Know",
            url: 'https://soundcloud.com/skankandbass/jon-tho-dont',
          },
          {
            title: 'Dazed: Soulvent Takeover w/ Askel & Elere + Circumference 16TH JUL 2022',
            url: 'https://soundcloud.com/swufm/dazed-soulvent-takeover-w',
            published: '2022-07-17T00:01:00Z',
          },
          {
            published: '2022-06-30T14:00:17Z',
            url: 'https://soundcloud.com/skankandbass/jam-thieves-arkaik-yam',
            title: 'Jam Thieves & Arkaik - YAM',
          },
        ],
      },
      name: 'Soulvent Records',
      id: 'rTwTkky5MifjETfUSMSf',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000098767208-4164j1-t500x500.jpg',
      artists: [],
      followers: 21601,
      link: 'https://soundcloud.com/commercialsuicide',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2021-07-26T11:11:54Z',
      lastScraped: 1668963247755,
      tracks: {
        popular: [
          {
            url: 'https://soundcloud.com/commercialsuicide/soul-intent-commercial-suicide-promo-mix-28th-april-21',
            published: '2021-04-28T09:18:40Z',
            title: 'Soul Intent - Commercial Suicide Promo Mix 28th April 21.',
          },
          {
            published: '2020-04-10T11:08:53Z',
            url: 'https://soundcloud.com/commercialsuicide/quadrant-iris-form-constant-ep-suicide107-released-240420',
            title: 'Quadrant & Iris - "Form Constant" EP - Suicide107 - Released 24/04/20',
          },
          {
            published: '2018-05-22T15:45:50Z',
            url: 'https://soundcloud.com/commercialsuicide/cold-blade',
            title: 'SD - Cold Blade (Suicide095)',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/elevator-swing',
            published: '2018-05-22T15:45:44Z',
            title: 'SD - Elevator Swing (Suicide095)',
          },
          {
            title: 'Klute - Blood Rich - from "Singles 1995 - 1999" - OUT NOW.',
            published: '2021-07-26T11:11:54Z',
            url: 'https://soundcloud.com/commercialsuicide/klute-blood-rich-from-singles-1995-1999-out-now',
          },
          {
            title:
              'Hydro & War - Shifting Sands (ft. Villem, Fields, M-Zine & Scepticz) - Suicide094 - out 09/02/18',
            published: '2018-01-10T10:14:53Z',
            url: 'https://soundcloud.com/commercialsuicide/shifting-sands-ft-villem',
          },
          {
            title:
              'KLUTE - "My Black & White" ft. Klose (CALIBRE rmx) - suicide078a. - released 31/03/14',
            published: '2014-03-21T13:56:01Z',
            url: 'https://soundcloud.com/commercialsuicide/klute-my-black-white-ft-klose',
          },
          {
            title: 'Klute B2b Dom & Roland Ft. Stamina MC Sun & Bass 07/09/2017',
            published: '2017-09-15T12:22:21Z',
            url: 'https://soundcloud.com/commercialsuicide/klute-b2b-dom-roland-ftm-stamina-sun-bass-2017',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/war-m-zine-asemic-suicide096',
            title: 'War & M - Zine - Asemic - Suicide096',
            published: '2018-09-20T13:51:02Z',
          },
          {
            published: '2012-04-03T17:27:47Z',
            title: 'AA. Klute + Silent Witness - Friendless - suicide063 - OUT NOW!',
            url: 'https://soundcloud.com/commercialsuicide/aa-klute-silent-witness',
          },
          {
            published: '2020-03-05T10:11:43Z',
            url: 'https://soundcloud.com/commercialsuicide/need-for-mirrors-cold-harbour-suicide106-released-300320',
            title: 'Need For Mirrors - "Cold Harbour" EP - Suicide106 - Released 30/03/20',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/2-suicide089-spirit-from-creation-digital-master-01-01',
            published: '2016-05-04T10:16:03Z',
            title: 'Spirit - From Creation (suicide089aa1)- released 27/05/16',
          },
          {
            title: 'Zombie Cats - Draw Blood - released 21/08/15',
            url: 'https://soundcloud.com/commercialsuicide/zombie-cats-draw-blood',
            published: '2015-08-01T06:04:54Z',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/zombie-cats-cat-attack',
            title: 'Zombie Cats - Cat Attack - released 21/08/15',
            published: '2015-08-01T06:07:25Z',
          },
          {
            title: 'Hydro & War - Malicious - Suicide094 - Released 09/02/18',
            url: 'https://soundcloud.com/commercialsuicide/malicious',
            published: '2018-01-10T10:14:55Z',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/klute-we-r-the-ones-ulterior',
            title: 'KLUTE - WE R THE ONES (Ulterior Motive RMX) - Suicide062 A - 12/3/12. OUT NOW!',
            published: '2012-02-23T22:46:20Z',
          },
          {
            published: '2019-07-21T16:21:50Z',
            url: 'https://soundcloud.com/commercialsuicide/concord-dawn-fenris-suicide104',
            title: 'Concord Dawn - Fenris - Suicide104 - released 22/07/19',
          },
          {
            title: 'Spirit - Consciousness (suicide089a) - released 27/05/16',
            url: 'https://soundcloud.com/commercialsuicide/1-suicide089-spirit-conciousness-digital-master-01-01',
            published: '2016-05-04T10:16:05Z',
          },
          {
            title: 'SD - "Scat Rats" - Suicide109 - Released 03/07/20',
            url: 'https://soundcloud.com/commercialsuicide/sd-scat-rats-suicide109-released-030720',
            published: '2020-06-28T15:27:13Z',
          },
          {
            title: 'Soul Intent - "Bite It" - Suicide111 - Released 26/04/21',
            url: 'https://soundcloud.com/commercialsuicide/1-soul-intent-bite-it-suicide111-released-260421',
            published: '2021-04-25T14:24:49Z',
          },
          {
            title: 'Concord Dawn - 1999 - Suicide104 - released 22/07/19',
            url: 'https://soundcloud.com/commercialsuicide/concord-dawn-1999-suicide104',
            published: '2019-07-21T16:21:57Z',
          },
          {
            published: '2016-06-16T10:56:45Z',
            title: 'Klute  - Commercial Suicide comes to LIGHTBOX 17/06/16 - pre-mix',
            url: 'https://soundcloud.com/commercialsuicide/klute-commercial-suicide-mix-june-2016',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/sd-transitory-amnesia-suicide109-released-030720',
            title: 'SD - "Transitory Amnesia" - Suicide109 - Released 03/07/20',
            published: '2020-06-28T15:29:23Z',
          },
          {
            published: '2020-11-24T11:25:11Z',
            url: 'https://soundcloud.com/commercialsuicide/sal-untitled-touch-suicide110-released-301120',
            title: 'SAL - "Untitled Touch" - Suicide110 - Released 30/11/20',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/calibre-student-music',
            title: 'Calibre - Student Music - suicide061 / suicidecd010 - OUT NOW!',
            published: '2011-11-18T15:17:49Z',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/2-soul-intent-throwing-shapes-suicide111-released-260421',
            title: 'Soul Intent - "Throwing Shapes" - Suicide111 - Released 26/04/21',
            published: '2021-04-25T14:26:01Z',
          },
          {
            published: '2019-08-13T09:08:14Z',
            title: 'Need For Mirrors - Bully - Suicide105',
            url: 'https://soundcloud.com/commercialsuicide/bully',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/zombie-cats-dont-be-playing-released-210815',
            title: 'Zombie Cats - Don´t Be Playing - released 21/08/15',
            published: '2015-08-01T06:03:08Z',
          },
          {
            published: '2019-05-22T14:53:34Z',
            title: 'Seba - In Your Arms Again - Suicide103',
            url: 'https://soundcloud.com/commercialsuicide/in-your-arms-again-suicide103',
          },
          {
            url: 'https://soundcloud.com/commercialsuicide/sd-dunk-toothpaste-suicide109-released-030720',
            published: '2020-06-28T15:28:13Z',
            title: 'SD & Dunk - "Toothpaste" - Suicide109 - Released 03/07/20',
          },
        ],
        recent: [
          {
            published: '2021-07-26T11:11:54Z',
            title: 'Klute - Blood Rich - from "Singles 1995 - 1999" - OUT NOW.',
            url: 'https://soundcloud.com/commercialsuicide/klute-blood-rich-from-singles-1995-1999-out-now',
          },
        ],
        reposts: [
          {
            title: 'Klute',
            url: 'https://soundcloud.com/dsci4/klute',
            published: '2020-05-25T20:24:35Z',
          },
          {
            url: 'https://soundcloud.com/naomi-pryor/hands-klute-remix',
            title: 'Hands (Klute Remix)',
            published: '2020-10-09T11:26:46Z',
          },
          {
            title: 'SUNANDBASS Podcast #106 - Klute',
            url: 'https://soundcloud.com/sunandbass/sunandbass-podcast-106-klute',
            published: '2021-01-08T13:14:06Z',
          },
          {
            published: '2019-10-30T13:45:20Z',
            url: 'https://soundcloud.com/fabric/klute-fabriclive-promo-mix',
            title: 'Klute FABRICLIVE Promo Mix',
          },
          {
            url: 'https://soundcloud.com/fabric/seba-fabriclive-x-sine-series-promo-mix',
            title: 'Seba FABRICLIVE x Sine Series Promo Mix',
            published: '2019-05-02T12:55:22Z',
          },
          {
            title: 'SD - Iron wall (cut from Noisia radio S05E15)',
            published: '2019-04-12T09:49:48Z',
            url: 'https://soundcloud.com/sddrumandbass/iron-wall-cut-from-noisia-radio-s05e15',
          },
          {
            published: '2018-11-16T11:37:39Z',
            url: 'https://soundcloud.com/spearheadrecords/mc-fava-another-me-feat-klute-spearhead-records',
            title: 'MC Fava - Another Me feat. Klute - Spearhead Records',
          },
          {
            url: 'https://soundcloud.com/mcfava/mc-fava-feat-klute-another-me-spearhead-rec-02-19-clip',
            published: '2019-01-29T12:09:41Z',
            title: 'MC Fava feat. Klute - Another Me [Spearhead Rec / 02-19] - CLIP',
          },
          {
            published: '2018-11-12T11:38:49Z',
            title: 'Need For Mirrors - Tresor',
            url: 'https://soundcloud.com/skankandbass/need-for-mirrors-tresor',
          },
          {
            published: '2018-11-02T12:48:58Z',
            url: 'https://soundcloud.com/drumandbassarena/need-for-mirrors-oval',
            title: 'Need For Mirrors - Oval',
          },
        ],
      },
      name: 'Commercial Suicide',
      id: 'typNisAwU5B4rdHhGqXp',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-k4G7DYas7tnAxmqW-CEwcUw-t500x500.jpg',
      artists: [],
      followers: 11290,
      link: 'https://soundcloud.com/liquidvofficial',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-05-03T13:44:32Z',
      lastScraped: 1668963249394,
      tracks: {
        recent: [
          {
            title: 'Simple Souls - Day & Night [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-day-night-liquid',
            published: '2022-05-03T13:44:32Z',
          },
          {
            title: 'Simple Souls - Fusion [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-fusion-liquid-v',
            published: '2022-05-03T13:44:30Z',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/simplification-ncamargo-listen-up-sl8r-remix-liquid-v',
            published: '2022-03-23T14:09:08Z',
            title: 'Simplification & nCamargo - Listen Up (Sl8r Remix) [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/simplification-back-in-the-game-ill-truth-remix-liquid-v',
            published: '2022-03-23T14:07:16Z',
            title: 'Simplification - Back In The Game (Ill Truth Remix) [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/simplification-forever-feat-blak-villem-remix-liquid-v',
            published: '2022-03-16T11:16:47Z',
            title: 'Simplification - Forever feat. Blak (Villem Remix) [Liquid V]',
          },
          {
            title: 'Simplification - Massive Style (Disrupta Remix) [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simplification-massive-style-disrupta-remix-liquid-v',
            published: '2022-03-03T10:42:24Z',
          },
          {
            title: 'A-Audio - Save Us [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/a-audio-save-us-liquid-v',
            published: '2022-02-10T15:18:41Z',
          },
          {
            title: 'A-Audio - Stop Right There [Liquid V]',
            published: '2022-02-10T15:15:14Z',
            url: 'https://soundcloud.com/liquidvofficial/a-audio-stop-right-there-liquid-v',
          },
          {
            title: 'Zar - Autumn Days feat. Duskee, Visionobi & Phoebe Freya [Liquid V]',
            published: '2021-12-01T12:11:03Z',
            url: 'https://soundcloud.com/liquidvofficial/zar-autumn-days-feat-duskee-visionobi-phoebe-freya-liquid-v',
          },
          {
            published: '2021-11-18T15:55:45Z',
            url: 'https://soundcloud.com/liquidvofficial/illmatika-sherona-maverick-soul-oshun-liquid-v',
            title: 'Illmatika, Sherona & Maverick Soul - Oshun [Liquid V]',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/vrecordings/v-recordings-podcast-094-macca-loz-contreras-guest-mix',
            title: 'V Recordings Podcast 094 - Macca & Loz Contreras Guest Mix',
            published: '2020-07-16T14:19:50Z',
          },
          {
            published: '2019-10-10T10:37:25Z',
            url: 'https://soundcloud.com/datatransmissiondnb/premiere-atlantic-connection-shine-feat-irene-merring-macca-loz-contreras-remixliquid-v',
            title:
              "Premiere: Atlantic Connection 'Shine' Feat Irene Merring (Macca & Loz Contreras Remix)[Liquid V]",
          },
          {
            title: "Premiere: Danny Wheeler 'Weekend Rush' [Liquid V]",
            published: '2019-08-01T09:36:46Z',
            url: 'https://soundcloud.com/datatransmissiondnb/premiere-danny-wheeler-weekend-rush-liquid-v',
          },
          {
            title: 'Velocity & MC Fats - We Gotcha Junglist',
            published: '2019-02-21T12:39:44Z',
            url: 'https://soundcloud.com/drumandbassarena/velocity-mc-fats-we-gotcha-junglist',
          },
          {
            title: 'V Recordings Podcast 066 - Hosted by Bryan Gee',
            published: '2018-06-01T13:53:21Z',
            url: 'https://soundcloud.com/vrecordings/v-recordings-podcast-066-hosted-by-bryan-gee',
          },
          {
            url: 'https://soundcloud.com/sine-audio/ss016-bryan-gee-past-present-of-liquid-v-mix',
            published: '2018-05-16T12:25:25Z',
            title: 'SS016 ~ Bryan Gee (Past & Present of Liquid V+++ mix)',
          },
          {
            title: 'V Recordings Podcast 063 - Hosted by Bryan  Gee',
            published: '2018-03-07T13:07:33Z',
            url: 'https://soundcloud.com/vrecordings/v-recordings-podcast-063-hosted-by-bryan-gee',
          },
          {
            title: 'V Recordings Podcast 062 - Hosted by Bryan Gee',
            published: '2018-02-04T18:09:47Z',
            url: 'https://soundcloud.com/vrecordings/v-recordings-podcast-062-hosted-by-bryan-gee',
          },
          {
            url: 'https://soundcloud.com/vrecordings/v-recordings-podcast-061-hosted-by-bryan-gee',
            title: 'V Recordings Podcast 061 - Hosted by Bryan Gee',
            published: '2018-01-08T11:39:12Z',
          },
          {
            title: 'V Recordings Podcast 059 - Hosted by Bryan Gee',
            url: 'https://soundcloud.com/vrecordings/v-recordings-podcast-059-hosted-by-bryan-gee',
            published: '2017-11-07T09:29:37Z',
          },
        ],
        popular: [
          {
            title: 'Simplification - Back In The Game (Ill Truth Remix) [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simplification-back-in-the-game-ill-truth-remix-liquid-v',
            published: '2022-03-23T14:07:16Z',
          },
          {
            title: 'Macca & Loz Contreras - Elastic Love [Liquid V]',
            published: '2021-09-08T12:18:22Z',
            url: 'https://soundcloud.com/liquidvofficial/macca-loz-contreras-elastic-love-liquid-v',
          },
          {
            title: 'Simple Souls - Fusion [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-fusion-liquid-v',
            published: '2022-05-03T13:44:30Z',
          },
          {
            published: '2022-05-03T13:44:32Z',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-day-night-liquid',
            title: 'Simple Souls - Day & Night [Liquid V]',
          },
          {
            title: 'A-Audio - Save Us [Liquid V]',
            published: '2022-02-10T15:18:41Z',
            url: 'https://soundcloud.com/liquidvofficial/a-audio-save-us-liquid-v',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/illmatika-sherona-maverick-soul-oshun-liquid-v',
            title: 'Illmatika, Sherona & Maverick Soul - Oshun [Liquid V]',
            published: '2021-11-18T15:55:45Z',
          },
          {
            published: '2021-07-21T12:05:26Z',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-sofi-mari-leaving',
            title: 'Simple Souls & Sofi Mari - Leaving Home [Liquid V]',
          },
          {
            published: '2022-03-16T11:16:47Z',
            url: 'https://soundcloud.com/liquidvofficial/simplification-forever-feat-blak-villem-remix-liquid-v',
            title: 'Simplification - Forever feat. Blak (Villem Remix) [Liquid V]',
          },
          {
            title: 'Zar - Autumn Days feat. Duskee, Visionobi & Phoebe Freya [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/zar-autumn-days-feat-duskee-visionobi-phoebe-freya-liquid-v',
            published: '2021-12-01T12:11:03Z',
          },
          {
            published: '2022-02-10T15:15:14Z',
            title: 'A-Audio - Stop Right There [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/a-audio-stop-right-there-liquid-v',
          },
          {
            published: '2022-03-23T14:09:08Z',
            url: 'https://soundcloud.com/liquidvofficial/simplification-ncamargo-listen-up-sl8r-remix-liquid-v',
            title: 'Simplification & nCamargo - Listen Up (Sl8r Remix) [Liquid V]',
          },
          {
            title: 'Simplification - Massive Style (Disrupta Remix) [Liquid V]',
            published: '2022-03-03T10:42:24Z',
            url: 'https://soundcloud.com/liquidvofficial/simplification-massive-style-disrupta-remix-liquid-v',
          },
          {
            title: 'Beat Merchants & Suv - Rock You Round feat. Paul Charles [Liquid V]',
            published: '2021-09-22T10:40:08Z',
            url: 'https://soundcloud.com/liquidvofficial/beat-merchants-suv-rock-you-round-feat-paul-charles-liquid-v',
          },
          {
            published: '2021-07-21T12:05:23Z',
            title: 'Simple Souls & Flotation - Basslines In The Sun [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-flotation',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/sl8r-instant-attraction-liquid',
            published: '2021-10-21T10:10:57Z',
            title: 'Sl8r - Instant Attraction [Liquid V]',
          },
          {
            title: 'Euphorics & Okee - Dusty Groove [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/euphorics-okee-dusty-groove',
            published: '2021-10-21T10:10:05Z',
          },
          {
            title: 'Zar, Motiv & Anya Asia - Sugar [Liquid V]',
            published: '2021-10-21T10:10:25Z',
            url: 'https://soundcloud.com/liquidvofficial/zar-motiv-anya-asia-sugar',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/marcus-tee-time-stands-still',
            title: 'Marcus Tee - Time Stands Still [Liquid V]',
            published: '2021-10-21T10:11:33Z',
          },
          {
            title: 'Simple Souls, Miss Guided & Marnée - I Get High [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-miss-guided',
            published: '2021-10-21T10:09:48Z',
          },
          {
            published: '2021-09-29T10:47:00Z',
            url: 'https://soundcloud.com/liquidvofficial/zar-sahala-taking-flight-liquid-v',
            title: 'Zar & Sahala - Taking Flight [Liquid V]',
          },
          {
            published: '2021-10-21T10:10:44Z',
            url: 'https://soundcloud.com/liquidvofficial/zar-sahala-taking-flight',
            title: 'Zar & Sahala - Taking Flight [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/motiv-shortcuts-liquid-v',
            published: '2021-10-21T10:11:19Z',
            title: 'Motiv - Shortcuts [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/euphorics-reality-liquid-v',
            published: '2021-10-21T10:09:43Z',
            title: 'Euphorics - Reality [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/donavon-bad-boy-smith-beat',
            title: "Donavon 'Bad Boy' Smith & Beat Merchants - Like It Like That [Liquid V]",
            published: '2021-10-21T10:11:07Z',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/mr-joseph-comon-now-liquid-v',
            published: '2021-10-21T10:10:30Z',
            title: "Mr Joseph - Com'on Now [Liquid V]",
          },
          {
            published: '2021-10-21T10:10:27Z',
            url: 'https://soundcloud.com/liquidvofficial/beat-merchants-illmatika-reach',
            title: 'Beat Merchants & Illmatika - Reach Out [Liquid V]',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/acuna-dont-want-you-liquid-v',
            published: '2021-10-21T10:10:09Z',
            title: "Acuna - Don't Want You [Liquid V]",
          },
          {
            published: '2021-10-21T10:09:39Z',
            title: 'Macca & Loz Contreras - Elastic Love [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/macca-loz-contreras-elastic',
          },
          {
            url: 'https://soundcloud.com/liquidvofficial/simple-souls-i-cue-good',
            title: 'Simple Souls & I-Cue - Good Morning [Liquid V]',
            published: '2021-10-21T10:08:00Z',
          },
          {
            published: '2021-10-21T10:09:32Z',
            title: 'Soul Method & Link - Breezin [Liquid V]',
            url: 'https://soundcloud.com/liquidvofficial/soul-method-link-breezin',
          },
        ],
      },
      name: 'Liquid V',
      id: 'u1s02j63QgVWmeSoYiTS',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-ufQDsY6xaqyYj9zq-oJQMfA-t500x500.jpg',
      artists: ['Serum', 'Voltage', 'Bou'],
      followers: 13810,
      link: 'https://soundcloud.com/soupeduprecords',
      notes: '',
      styles: ['Jump Up'],
      submission: 'https://www.soupedupshop.co.uk/contact',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: false,
      lastUploaded: '2022-08-19T21:54:59Z',
      lastScraped: 1668963250696,
      tracks: {
        reposts: [
          {
            title: 'BassBrothers - Steady Drip',
            published: '2022-08-19T21:54:59Z',
            url: 'https://soundcloud.com/districtbassmusic/bassbrothers-steady-drip',
          },
          {
            published: '2021-09-21T13:31:56Z',
            url: 'https://soundcloud.com/skankandbass/d-minds-charlies-sheen',
            title: "D Minds - Charlie's Sheen",
          },
          {
            url: 'https://soundcloud.com/skankandbass/my-daily-meal-teddy-killerz-remix',
            published: '2021-06-30T16:21:18Z',
            title: 'Armodine - My Daily Meal (Teddy Killerz Remix)',
          },
          {
            title: "Rohaan - Let's Play",
            url: 'https://soundcloud.com/drumandbassarena/rohaan-lets-play',
            published: '2021-06-22T12:06:50Z',
          },
          {
            title: 'The Sauce meets Serum - Got The Money',
            published: '2021-06-14T14:03:14Z',
            url: 'https://soundcloud.com/skankandbass/the-sauce-serum-got-the-money',
          },
          {
            published: '2021-04-14T12:32:14Z',
            url: 'https://soundcloud.com/dnballstars/lynx-in-my-mind',
            title: 'Lynx - In My Mind',
          },
          {
            url: 'https://soundcloud.com/drumandbassarena/voltage-cold-air',
            title: 'Voltage - Cold Air',
            published: '2020-06-24T11:34:25Z',
          },
          {
            title: 'Serum - Chop House',
            published: '2020-08-13T10:36:10Z',
            url: 'https://soundcloud.com/skankandbass/serum-chop-house',
          },
          {
            url: 'https://soundcloud.com/dnballstars/dnb-allstars-mix-043-w-souped-up-showcase',
            published: '2021-03-31T15:33:00Z',
            title: 'DNB Allstars Mix 043 w/ Souped Up Showcase Mixed by Benny V',
          },
          {
            published: '2021-02-16T16:13:31Z',
            title: 'Mini Mixes',
            url: 'https://soundcloud.com/serum/sets/mini-mixes',
          },
        ],
        recent: [
          {
            url: 'https://soundcloud.com/soupeduprecords/benny-v-souped-up-records-mix',
            published: '2022-01-26T19:31:20Z',
            title: 'Benny V - Souped Up Records Mix',
          },
          {
            published: '2021-06-19T11:54:06Z',
            url: 'https://soundcloud.com/soupeduprecords/the-sauce-a-truck-load',
            title: 'The Sauce - A Truck Load',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/simula-apollo-17-preview',
            title: 'Simula - Apollo 17 - Preview',
            published: '2020-11-24T15:15:22Z',
          },
          {
            title: 'OG - Preview',
            url: 'https://soundcloud.com/soupeduprecords/og-preview',
            published: '2020-05-25T19:49:39Z',
          },
          {
            published: '2020-05-25T19:49:38Z',
            url: 'https://soundcloud.com/soupeduprecords/tiger-claw-preview',
            title: 'Tiger Claw - Preview',
          },
          {
            title: 'Woah - preview',
            url: 'https://soundcloud.com/soupeduprecords/woah-preview',
            published: '2020-05-25T19:49:37Z',
          },
          {
            title: 'Need For Mirrors - Emoji Crash',
            url: 'https://soundcloud.com/soupeduprecords/need-for-mirrors-emoji-crash',
            published: '2020-04-16T12:18:21Z',
          },
        ],
        popular: [
          {
            title: 'Serum - Lumberjack - Souped Up Records',
            published: '2018-06-13T20:55:08Z',
            url: 'https://soundcloud.com/soupeduprecords/serum-lumberjack-souped-up-records',
          },
          {
            published: '2017-05-14T12:18:01Z',
            url: 'https://soundcloud.com/soupeduprecords/serum-voltage-gunfingers-inja-freestyle',
            title: 'SERUM & VOLTAGE - GUNFINGERS - INJA TAKEOVER',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/the-sauce-a-truck-load',
            title: 'The Sauce - A Truck Load',
            published: '2021-06-19T11:54:06Z',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/mc-bassman-heavy-and-dark-serums-mix',
            published: '2018-11-06T15:19:55Z',
            title: "MC Bassman - Heavy And Dark - Serum's Mix",
          },
          {
            title: 'Need For Mirrors - Peng A Leng (Stepper Mix) - Souped Up Records',
            url: 'https://soundcloud.com/soupeduprecords/need-for-mirrors-peng-a-leng-stepper-mix-souped-up-records',
            published: '2019-05-09T13:20:24Z',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/serum-voltage-mission-control-inja-takeover',
            title: 'Serum & Voltage - Mission Control - Inja Takeover',
            published: '2017-10-18T12:01:05Z',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/benny-v-souped-up-records-mix',
            published: '2022-01-26T19:31:20Z',
            title: 'Benny V - Souped Up Records Mix',
          },
          {
            title: 'Bou & Sub Killaz - Pressure',
            published: '2018-10-17T10:48:00Z',
            url: 'https://soundcloud.com/soupeduprecords/bou-sub-killaz-pressure',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/bou-feat-serum-its-a-trap-souped-up-records',
            title: "Bou Feat Serum - It's A Trap - Souped Up Records",
            published: '2018-06-25T11:25:37Z',
          },
          {
            published: '2019-01-08T19:38:04Z',
            title: 'Voltage feat Serum - Circuits',
            url: 'https://soundcloud.com/soupeduprecords/voltage-feat-serum-circuits',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/bou-feat-current-value-higher-souped-up-records',
            published: '2018-07-03T11:17:15Z',
            title: 'Bou Feat Current Value - Higher - Souped Up Records',
          },
          {
            published: '2020-11-24T15:15:22Z',
            url: 'https://soundcloud.com/soupeduprecords/simula-apollo-17-preview',
            title: 'Simula - Apollo 17 - Preview',
          },
          {
            published: '2019-04-18T19:56:35Z',
            title: 'Dr Meaker - The Rooster - Souped Up Records',
            url: 'https://soundcloud.com/soupeduprecords/dr-meaker-the-rooster-souped-up-records',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/bou-feat-stompz-no-love-souped-up-records',
            title: 'Bou Feat Stompz - No Love - Souped Up Records',
            published: '2018-06-18T10:26:05Z',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/serum-voltage-mission-control-souped-up-records',
            published: '2017-10-03T17:45:11Z',
            title: 'Serum & Voltage - Mission Control - Souped Up Records',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/current-value-city-syndrome-1',
            published: '2018-08-17T09:07:40Z',
            title: 'Current Value - City Syndrome',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/current-value-feat-coppa-remorse-puer-lp',
            title: 'Current Value feat Coppa - Remorse - PUER LP',
            published: '2019-08-07T14:53:11Z',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/serial-killaz-start-the-killing-souped-up-records',
            title: 'Serial Killaz - Start The Killing - Souped Up Records',
            published: '2018-01-14T14:48:57Z',
          },
          {
            published: '2018-09-18T09:04:51Z',
            title: 'Dutta - Dominos - BASSRUSH PREMIERE',
            url: 'https://soundcloud.com/soupeduprecords/dutta-dominos',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/serum-earth-rot-souped-up-records',
            title: 'Serum - Earth Rot - Souped Up Records',
            published: '2017-08-16T19:41:48Z',
          },
          {
            title: 'Serum & Voltage - Steamroller - Souped Up Records',
            published: '2017-10-03T17:42:44Z',
            url: 'https://soundcloud.com/soupeduprecords/serum-voltage-steamroller-souped-up-records',
          },
          {
            title: 'Current Value - AVGR - PUER Album Sampler',
            url: 'https://soundcloud.com/soupeduprecords/current-value-avgr-puer-album-sampler',
            published: '2019-06-12T09:43:23Z',
          },
          {
            title: 'Serum - Hunchback - Souped Up Records',
            url: 'https://soundcloud.com/soupeduprecords/serum-hunchback-souped-up-records',
            published: '2017-11-14T12:39:54Z',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/serum-voltage-gunfingers-soup0001b',
            published: '2017-04-25T20:18:07Z',
            title: 'Serum & Voltage - Gunfingers - SOUP0001B',
          },
          {
            published: '2019-10-03T10:25:29Z',
            url: 'https://soundcloud.com/soupeduprecords/current-value-puer-album-mini-mix',
            title: 'Current Value PUER album mini mix',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/current-value-ti-dead-out',
            title: 'Current Value & TI - Dead Out',
            published: '2019-10-17T15:32:54Z',
          },
          {
            published: '2018-01-08T20:00:58Z',
            title: 'Serial Killaz - Spread Out - Souped Up Records',
            url: 'https://soundcloud.com/soupeduprecords/serial-killaz-spread-out-souped-up-records',
          },
          {
            url: 'https://soundcloud.com/soupeduprecords/serum-road-dog-souped-up-records',
            title: 'Serum - Road Dog - Souped Up Records',
            published: '2017-11-02T09:34:17Z',
          },
          {
            title: 'Tiger Claw - Preview',
            url: 'https://soundcloud.com/soupeduprecords/tiger-claw-preview',
            published: '2020-05-25T19:49:38Z',
          },
          {
            published: '2019-01-07T20:08:42Z',
            title: 'Voltage - High Frequency',
            url: 'https://soundcloud.com/soupeduprecords/high-frequency',
          },
        ],
      },
      widgets: [
        'https://soundcloud.com/soupeduprecords/the-sauce-a-truck-load?si=d5524895870448a1808c1344234aaf9a&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/soupeduprecords/dr-meaker-the-rooster-souped-up-records?si=c32535c8e8594db38abcbe56f7f1cf8f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
        'https://soundcloud.com/soupeduprecords/mc-bassman-heavy-and-dark-serums-mix?si=4be657d8c2ab44ce9da3b03b8f5be944&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      ],
      email: '',
      name: 'Souped Up Records',
      id: 'yXLxktrm8kcei77W2dQQ',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-000689836592-p4wg5c-t500x500.jpg',
      artists: ['Bakey', 'DJOKO', 'Interplanetary Criminal'],
      followers: 32736,
      link: 'https://soundcloud.com/shallnotfade',
      notes: '',
      styles: [],
      submission: '',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: true,
      acceptDemos: false,
      lastUploaded: '2022-10-27T10:53:14Z',
      lastScraped: 1669296097518,
      tracks: {
        recent: [],
        reposts: [
          {
            url: 'https://soundcloud.com/aksports/kurupt',
            title: 'Kurupt',
            published: '2022-06-21T12:29:06Z',
          },
          {
            published: '2022-06-21T12:27:49Z',
            title: 'Sayulita',
            url: 'https://soundcloud.com/aksports/sayulita',
          },
          {
            published: '2022-05-27T12:20:41Z',
            title: 'Join The Operation',
            url: 'https://soundcloud.com/djpsychiatre/join-the-operation-2',
          },
          {
            published: '2022-09-29T15:02:30Z',
            title: "Premiere: Chrissy 'You Don't Have To Worry'",
            url: 'https://soundcloud.com/mixmag-1/premiere-chrissy-you-dont-have-to-worry',
          },
          {
            published: '2022-04-14T17:36:32Z',
            title: 'Time Is Now White, Vol.22',
            url: 'https://soundcloud.com/theshadowchild/sets/time-is-now-white-vol-22',
          },
          {
            url: 'https://soundcloud.com/djpsychiatre/lucidity',
            published: '2022-05-27T12:20:53Z',
            title: 'Lucidity',
          },
          {
            published: '2022-05-12T17:14:18Z',
            url: 'https://soundcloud.com/alexvirgo/about-last-night',
            title: 'About Last Night',
          },
          {
            url: 'https://soundcloud.com/alexvirgo/charge-the-gun-1',
            title: 'Charge The Gun',
            published: '2022-05-12T17:15:23Z',
          },
          {
            published: '2022-04-14T16:23:46Z',
            title: 'O Yeah',
            url: 'https://soundcloud.com/theshadowchild/o-yeah',
          },
          {
            title: 'FM Trilogy',
            published: '2022-05-12T17:14:33Z',
            url: 'https://soundcloud.com/alexvirgo/fm-trilogy-3',
          },
        ],
        popular: [
          {
            url: 'https://soundcloud.com/shallnotfade/t-e-s-t-p-r-e-s-s-make-my-body',
            published: '2022-07-19T12:26:32Z',
            title: 't e s t p r e s s - make my body move',
          },
          {
            published: '2021-07-02T18:17:25Z',
            title: 'jamesjamesjames - My Purple iPod Nano',
            url: 'https://soundcloud.com/shallnotfade/jamesjamesjames-my-purple-ipod',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/soul-mass-transit-system-hold',
            title: 'Soul Mass Transit System - Hold U Tight',
            published: '2022-04-01T12:57:08Z',
          },
          {
            published: '2021-05-20T16:20:01Z',
            title: 'Mark Laird - Bet',
            url: 'https://soundcloud.com/shallnotfade/mark-laird-bet',
          },
          {
            title: 'Obskür - Home Interlude',
            published: '2021-07-21T13:14:46Z',
            url: 'https://soundcloud.com/shallnotfade/obskuer-home-interlude',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/rhode-brown-coast-to-coast',
            title: 'Rhode & Brown - Coast To Coast',
            published: '2022-06-20T15:26:19Z',
          },
          {
            title: 'Soul Mass Transit System, Killa P - Blocked (Bakey Dub)',
            published: '2022-04-01T14:13:29Z',
            url: 'https://soundcloud.com/shallnotfade/soul-mass-transit-system-killa',
          },
          {
            title: 'ATRIP - Patchouli',
            url: 'https://soundcloud.com/shallnotfade/atrip-patchouli',
            published: '2022-09-30T18:49:53Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/barry-cant-swim-el-layali',
            published: '2021-04-09T17:15:27Z',
            title: "Barry Can't Swim - El Layali",
          },
          {
            url: 'https://soundcloud.com/shallnotfade/jamesjamesjames-its-not-you',
            title: 'jamesjamesjames - It’s Not You, It’s Me (Club Mix)',
            published: '2021-07-02T18:18:00Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/yemi-run-sound',
            published: '2022-04-01T14:13:18Z',
            title: 'Yemi - Run Sound',
          },
          {
            title: 'Bluetoof - That Got Dark (Interplanetary Criminal Remix)',
            url: 'https://soundcloud.com/shallnotfade/bluetoof-that-got-dark-1',
            published: '2022-01-31T19:22:10Z',
          },
          {
            published: '2022-10-27T10:53:14Z',
            title: 'TIN037 // Interplanetary Criminal - Coming On Strong EP',
            url: 'https://soundcloud.com/shallnotfade/tin037-interplanetary-criminal-coming-on-strong-ep',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/alan-fitzpatrick-reset-robot',
            published: '2022-10-11T11:32:36Z',
            title: 'Alan Fitzpatrick, Reset Robot - Alpha',
          },
          {
            title: "Barry Can't Swim - Lone Raver",
            url: 'https://soundcloud.com/shallnotfade/barry-cant-swim-lone-raver',
            published: '2021-04-09T17:16:35Z',
          },
          {
            title: 't e s t p r e s s - wit u uptae?',
            url: 'https://soundcloud.com/shallnotfade/testpress-wit-u-uptae',
            published: '2022-01-06T17:22:31Z',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/t-e-s-t-p-r-e-s-s-tenderlove',
            title: 't e s t p r e s s - tenderlove',
            published: '2022-07-19T12:26:38Z',
          },
          {
            title: 'jamesjamesjames - Orange Tesla',
            published: '2021-07-02T18:17:18Z',
            url: 'https://soundcloud.com/shallnotfade/jamesjamesjames-orange-tesla',
          },
          {
            published: '2022-05-26T16:38:41Z',
            url: 'https://soundcloud.com/shallnotfade/hammer-dart-scope',
            title: 'Hammer, Dart - Scope',
          },
          {
            published: '2022-06-20T13:22:00Z',
            title: 'Interplanetary Criminal - Gangster Time (feat. Killa P)',
            url: 'https://soundcloud.com/shallnotfade/interplanterary-criminal',
          },
          {
            published: '2021-04-12T15:47:10Z',
            url: 'https://soundcloud.com/shallnotfade/adelphi-music-factory-sample-1',
            title: 'Adelphi Music Factory - Sample Seduction (Club Mix)',
          },
          {
            title: 'Jordan Brando - Flux Deluxe',
            published: '2022-02-11T13:19:35Z',
            url: 'https://soundcloud.com/shallnotfade/jordan-brando-flux-deluxe',
          },
          {
            published: '2022-01-31T17:38:13Z',
            title: 'Arfa - Real Badman (Bakey Remix)',
            url: 'https://soundcloud.com/shallnotfade/arfa-real-badman-bakey-remix',
          },
          {
            url: 'https://soundcloud.com/shallnotfade/kaysoul-that-blackness',
            published: '2022-01-05T13:16:29Z',
            title: 'KaySoul - That Blackness',
          },
          {
            published: '2019-10-24T10:10:59Z',
            url: 'https://soundcloud.com/shallnotfade/eastside-avenue',
            title: 'KETTAMA - Eastside Avenue',
          },
          {
            published: '2022-07-19T11:03:21Z',
            url: 'https://soundcloud.com/shallnotfade/liam-doc-manager-at-pikes',
            title: 'Liam Doc - Manager At Pikes',
          },
          {
            title: 'Alan Fitzpatrick, DJ Deeon, DJOKO - Shake That Thang (DJOKO Remix)',
            published: '2021-10-05T17:18:02Z',
            url: 'https://soundcloud.com/shallnotfade/alan-fitzpatrick-dj-deeon',
          },
          {
            published: '2021-10-18T17:04:12Z',
            title: 'Jasper Tygner, Joe Hertz - Equals',
            url: 'https://soundcloud.com/shallnotfade/jasper-tygner-joe-hertz-equals',
          },
          {
            title: "Chrissy - Assure Us There's A Heaven",
            published: '2022-05-27T12:20:49Z',
            url: 'https://soundcloud.com/shallnotfade/chrissy-assure-us-theres-a',
          },
          {
            published: '2022-05-27T12:20:26Z',
            url: 'https://soundcloud.com/shallnotfade/chrissy-you-dont-have-to-worry',
            title: "Chrissy - You Don't Have To Worry",
          },
        ],
      },
      name: 'Shall Not Fade',
      id: 'zKplHHYAwTVY8XSklgW0',
    },
    {
      image: 'https://i1.sndcdn.com/avatars-dcVeWRc7UEtAxr40-htw84g-t500x500.jpg',
      artists: ['Mitekiss', 'Mystic State'],
      followers: 3835,
      link: 'https://soundcloud.com/thechikaraproject',
      notes: '',
      styles: ['Liquid', 'Minimal'],
      submission: 'thechikaraproject@gmail.com',
      songsSubmitted: [],
      songsSkipped: [],
      inactive: false,
      acceptDemos: true,
      lastUploaded: '2022-11-03T22:32:13Z',
      lastScraped: 1670365388122,
      tracks: {
        recent: [
          {
            title: 'Levrige - Sickness EP [CKRA031] (Out This Friday)',
            published: '2022-11-02T16:44:46Z',
            url: 'https://soundcloud.com/thechikaraproject/levrige-sickness-ep-ckra031',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/zar-out-of-time-ep-ckra028',
            title: 'Zar - Out Of Time EP [CKRA028]',
            published: '2022-07-01T07:18:33Z',
          },
          {
            published: '2022-05-06T19:03:41Z',
            url: 'https://soundcloud.com/thechikaraproject/drytek-exodus-ep',
            title: 'Drytek - Exodus EP [CKRA027] (Bandcamp Exclusive)',
          },
          {
            published: '2022-04-01T02:41:10Z',
            title: "Haida - Don't Need A Title EP [CKRA026]",
            url: 'https://soundcloud.com/thechikaraproject/ckra026',
          },
          {
            title: "Margari's Kid - Lost In Translation / Demolition [CKRA025]",
            url: 'https://soundcloud.com/thechikaraproject/margaris-kid-ckra025',
            published: '2022-03-03T15:30:04Z',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/therma-introspect-ep-clips-ckra022',
            published: '2021-12-02T13:49:58Z',
            title: 'Therma - Introspect EP (Clips) [CKRA022]',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/marenn-sukie-enough-of-you-ep-ckra021',
            title: 'Marenn Sukie - Enough Of You EP [CKRA021]',
            published: '2021-11-06T17:12:17Z',
          },
          {
            title: 'Levrige - Karma EP (w/ Mystic State) [CKRA018]',
            url: 'https://soundcloud.com/thechikaraproject/levrige-karma-ep-w-mystic-state-ckra018-bandcamp-exclusive',
            published: '2021-05-07T14:14:11Z',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-mopi-the-remixes-ckra017',
            published: '2021-03-31T15:44:16Z',
            title: 'Mystic State - My Own Private Island (The Remixes) [CKRA017]',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-captivate-ckra015',
            title: 'Mystic State & Captivate - Fade Into Dust / Departure [CKRA015]',
            published: '2021-02-01T18:11:09Z',
          },
        ],
        popular: [
          {
            published: '2022-11-02T16:44:46Z',
            url: 'https://soundcloud.com/thechikaraproject/levrige-sickness-ep-ckra031',
            title: 'Levrige - Sickness EP [CKRA031] (Out This Friday)',
          },
          {
            published: '2021-02-01T18:11:09Z',
            title: 'Mystic State & Captivate - Fade Into Dust / Departure [CKRA015]',
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-captivate-ckra015',
          },
          {
            title: 'Mystic State - Attitudes [CKRA005]',
            published: '2018-11-28T18:03:39Z',
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-attitudes-ckra005',
          },
          {
            published: '2020-06-03T15:22:44Z',
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-congi-closer-ep-showreel',
            title: 'Mystic State & Congi - Closer (EP Showreel) [CKRA011]',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-if-i-could',
            title: 'Mystic State - If I Could [CKRA001]',
            published: '2017-02-22T19:13:30Z',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/brainwork-mnml-had-it-all-ep',
            published: '2020-11-05T16:01:45Z',
            title: 'Brainwork & mnml - Had It All EP w/ Mystic State Remix [CKRA013]',
          },
          {
            title: 'Drytek - Exodus EP [CKRA027] (Bandcamp Exclusive)',
            url: 'https://soundcloud.com/thechikaraproject/drytek-exodus-ep',
            published: '2022-05-06T19:03:41Z',
          },
          {
            title: 'Fiend - Afterlife (EP Showreel) [CKRA012]',
            published: '2020-06-25T15:50:43Z',
            url: 'https://soundcloud.com/thechikaraproject/fiend-afterlife-ep-showreel',
          },
          {
            title: 'Zar - Out Of Time EP [CKRA028]',
            published: '2022-07-01T07:18:33Z',
            url: 'https://soundcloud.com/thechikaraproject/zar-out-of-time-ep-ckra028',
          },
          {
            title: 'Mystic State & Crypticz - Truth Through Texture [Free D/L]',
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-crypticz-truth-through-texture-free-download',
            published: '2019-06-20T17:46:33Z',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/ckra026',
            published: '2022-04-01T02:41:10Z',
            title: "Haida - Don't Need A Title EP [CKRA026]",
          },
          {
            published: '2018-05-03T15:41:23Z',
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-inside-your-love',
            title: 'Mystic State - Inside Your Love (feat. Jevon Ives)',
          },
          {
            published: '2019-06-03T16:50:45Z',
            url: 'https://soundcloud.com/thechikaraproject/transparent-do-so-wrong',
            title: 'Transparent - Do So Wrong (feat. Jevon Ives) [CKRA007] Out Now',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/therma-introspect-ep-clips-ckra022',
            published: '2021-12-02T13:49:58Z',
            title: 'Therma - Introspect EP (Clips) [CKRA022]',
          },
          {
            published: '2021-11-06T17:12:17Z',
            url: 'https://soundcloud.com/thechikaraproject/marenn-sukie-enough-of-you-ep-ckra021',
            title: 'Marenn Sukie - Enough Of You EP [CKRA021]',
          },
          {
            published: '2018-12-06T20:31:51Z',
            title: 'Ethos - The Same [CKRA005] (Out Now)',
            url: 'https://soundcloud.com/thechikaraproject/ethos-the-same-ckra005-out-now',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-mopi-the-remixes-ckra017',
            title: 'Mystic State - My Own Private Island (The Remixes) [CKRA017]',
            published: '2021-03-31T15:44:16Z',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/levrige-karma-ep-w-mystic-state-ckra018-bandcamp-exclusive',
            published: '2021-05-07T14:14:11Z',
            title: 'Levrige - Karma EP (w/ Mystic State) [CKRA018]',
          },
          {
            published: '2019-05-24T17:11:45Z',
            url: 'https://soundcloud.com/thechikaraproject/transparent-do-so-wrong-ep-teaser-ckra007',
            title: 'Transparent - Do So Wrong (EP Teaser) [CKRA007]',
          },
          {
            published: '2020-08-25T17:00:33Z',
            url: 'https://soundcloud.com/thechikaraproject/my-own-private-island-showreel',
            title: 'Mystic State - My Own Private Island [Album Showreel]',
          },
          {
            published: '2022-03-03T15:30:04Z',
            url: 'https://soundcloud.com/thechikaraproject/margaris-kid-ckra025',
            title: "Margari's Kid - Lost In Translation / Demolition [CKRA025]",
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/missin-unknown-ckra005',
            title: 'Missin - Unknown [CKRA005]',
            published: '2018-11-19T18:04:54Z',
          },
          {
            title: 'Deviant - Silk Notes EP (w/ Sam Binary & Mystic State) [Out Now]',
            published: '2020-12-02T19:04:37Z',
            url: 'https://soundcloud.com/thechikaraproject/deviant-silk-notes-ep',
          },
          {
            published: '2018-11-21T17:41:46Z',
            title: 'Transparent - What is Love [CKRA005] (12" Vinyl)',
            url: 'https://soundcloud.com/thechikaraproject/transparent-what-is-love-ckra005-12-vinyl',
          },
          {
            published: '2017-06-01T18:58:11Z',
            url: 'https://soundcloud.com/thechikaraproject/elias-mystic-state-sister-mitekiss-remix-ckra002-2',
            title: 'Elias & Mystic State - Sister (Mitekiss Remix) [CKRA002]',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/crypticz-ages-transition-ckra005-12-vinyl',
            title: 'Crypticz - Ages Transition [CKRA005] (12" Vinyl)',
            published: '2018-11-26T17:48:35Z',
          },
          {
            published: '2017-02-26T19:36:34Z',
            url: 'https://soundcloud.com/thechikaraproject/elias-mystic-state-sister-ckra001',
            title: 'Elias & Mystic State - Sister [CKRA001]',
          },
          {
            published: '2018-12-03T17:29:47Z',
            url: 'https://soundcloud.com/thechikaraproject/taelimb-conscience-icon-ckra005',
            title: 'Taelimb & Conscience - Icon [CKRA005]',
          },
          {
            url: 'https://soundcloud.com/thechikaraproject/mystic-state-forget',
            title: 'Mystic State - Forget [CKRA004]',
            published: '2018-04-29T16:01:55Z',
          },
        ],
        reposts: [
          {
            url: 'https://soundcloud.com/elemental-arts-fm/levrige-snapback-elemental-arts-premiere',
            title: 'Levrige - Snapback [Elemental Arts Premiere]',
            published: '2022-11-03T22:32:13Z',
          },
          {
            title: '𝐏𝐑𝐄𝐌𝐈𝐄𝐑𝐄: Levrige - Sickness (Captivate Remix)(CKRA031)',
            published: '2022-11-03T17:41:46Z',
            url: 'https://soundcloud.com/cimmerianrecords/levrige-sickness-captivate-remixckra031',
          },
          {
            published: '2022-10-07T16:27:40Z',
            title: "Aaron Payne - Won't Fall",
            url: 'https://soundcloud.com/drumandbassarena/aaron-payne-wont-fall',
          },
          {
            url: 'https://soundcloud.com/all172things/aaron-payne-walk-away-premiere',
            published: '2022-09-30T12:32:20Z',
            title: 'Aaron Payne - Walk Away [Premiere]',
          },
          {
            url: 'https://soundcloud.com/datatransmissiondnb/aaron-payne-understanding-the-chikara-project',
            title: 'Aaron Payne ‘Understanding’ [The Chikara Project]',
            published: '2022-10-05T14:51:44Z',
          },
          {
            url: 'https://soundcloud.com/mysticstate/mystic-state-method-sound-telling-me-nothing-feat-elysia-grace',
            title: 'Mystic State & Method Sound - Telling Me Nothing (feat. Elysia Grace)',
            published: '2022-09-08T14:03:04Z',
          },
          {
            published: '2022-09-02T15:07:39Z',
            title: 'Mystic State - Stutter [Elemental Arts Premiere]',
            url: 'https://soundcloud.com/elemental-arts-fm/mystic-state-stutter-elemental-arts-premiere1',
          },
          {
            url: 'https://soundcloud.com/cimmerianrecords/mystic-state-smbr-ruminateckra029-1',
            published: '2022-09-02T19:04:16Z',
            title: '𝐏𝐑𝐄𝐌𝐈𝐄𝐑𝐄: Mystic State & SMBR - Ruminate(CKRA029)',
          },
          {
            title: '𝐏𝐑𝐄𝐌𝐈𝐄𝐑𝐄: Mystic State & Jack Flynn - Oakley - Falling Down (CKRA029)',
            published: '2022-09-01T19:07:53Z',
            url: 'https://soundcloud.com/cimmerianrecords/mystic-state-jack-flynn-oakley-falling-down-ckra029-1',
          },
          {
            published: '2022-08-30T15:29:59Z',
            title: 'Mystic State - Stutter (EP Showreel) [CKRA029]',
            url: 'https://soundcloud.com/mysticstate/mystic-state-stutter-ep-showreel-ckra029',
          },
        ],
      },
      name: 'The Chikara Project',
      id: 'zSy3BXplji1efddI8O6A',
    },
  ],
  extra: {
    songs: [
      {
        title: 'Night & Day',
        styles: ['Dancefloor', 'Vocal'],
        id: '1669725787725',
        link: 'https://on.soundcloud.com/ByQke',
      },
      {
        title: 'Sunday Secrets',
        styles: ['Jungle', 'Liquid'],
        id: '1669725817300',
        link: 'https://on.soundcloud.com/xXeLU',
      },
      {
        styles: ['Liquid', 'Vocal'],
        link: 'https://on.soundcloud.com/kQifC',
        title: "You Don't Know",
        id: '1669725871135',
      },
      {
        title: 'Endpoint',
        styles: ['Jungle', 'Liquid'],
        id: '1670366740432',
        link: 'https://on.soundcloud.com/RaZvM',
      },
      {
        styles: ['Minimal'],
        id: '1670443020207',
        title: 'Threaded',
        link: 'https://on.soundcloud.com/PWhs3',
      },
      {
        styles: ['Jungle', 'Liquid'],
        id: '1670443046770',
        title: 'Call Back',
        link: 'https://on.soundcloud.com/Z6wxp',
      },
    ],
    compact: true,
    styles: ['Vocal', 'Minimal', 'Jump Up', 'Liquid', 'Neurofunk', 'Dancefloor', 'Jungle'],
    template:
      'Hi <label>,\n\nMy name is Felix, I produce with the name WUFO. I would like to share with you some exciting Drum & Bass songs I have been working on, as I am looking for labels to sign them onto. Could any of these be a good fit for your label?\n\n<songs>\n\nA little more about me:\nI have only recently created the alias WUFO as a way to focus entirely on DnB, but I have been releasing other styles of music with my other alias Noxive for over 8 years now, which has seen some success in the last few years.\n\nLinks to my non-DnB alias Noxive:\nhttps://soundcloud.com/noxive\nhttps://open.spotify.com/artist/50XpNPncKlgkgpwRf5U2Jp\n\nIf you are interested in any of the songs or if you have any feedback at all, I would really love to hear back from you!\n\nThank you for your time,\nFelix',
  },
}
