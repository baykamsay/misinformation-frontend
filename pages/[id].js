import { useRouter } from "next/router";
import styles from "../styles/Results.module.css";

export default function Results() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <main>
        <div className={styles.nav}>
          <button>Back</button>
          <span>
            Trust Rating: <span>92</span>
          </span>
        </div>
        <h1>
          Covid: Indian delegates in UK for G7 talks self-isolate after Covid
          cases
        </h1>
        <p>
          By Francesca Gillett <br /> May 04, 2021
        </p>
        <p>
          The entire Indian delegation in the UK for G7 talks must self-isolate
          after two Covid cases were detected. India's foreign minister
          Subrahmanyam Jaishankar pulled out of face-to-face talks, saying he
          was "aware of exposure to possible Covid positive cases". He met Home
          Secretary Priti Patel in person on Tuesday but will now join the rest
          of the meetings virtually. India is not in the G7 group of nations but
          delegates from the country were invited as guests. The two cases were
          picked up by tests in advance and none of the party had attended the
          meeting venue, the Press Association said. Mr Jaishankar has not
          tested positive. India is currently on the UK's red list meaning
          travel from there is banned, but some jobs are exempt including
          representatives of a foreign country. There are also some exemptions
          to the self-isolation rule "if it is confirmed that you are travelling
          to the UK for official business that cannot be undertaken while
          self-isolating", according to the government's rules. US Secretary of
          State Antony Blinken attends a press conference with India's Foreign
          Minister Subrahmanyam Jaishankar following a bilateral meeting in
          London on May 3, 2021, during the G7 foreign ministers meeting.image
          copyrightGetty Images image captionIndia's foreign minister, right,
          also spoke with the US delegation earlier this week The G7 group - the
          world's seven largest so-called advanced economies - is made up of the
          UK, Canada, France, Germany, Italy, Japan and the US. The official
          summit of G7 leaders is taking place in Cornwall next month, but
          ministers are currently in the UK for talks. The talks this week are
          the first face-to-face meetings the G7 powers have had in more than
          two years. India, Australia, South Korea and South Africa have been
          invited as guests as the UK tries to deepen ties with the Indo-Pacific
          region. On Tuesday, Home Secretary Ms Patel met Mr Jaishankar and
          tweeted a picture of them wearing masks as they handled folders,
          saying it was "a pleasure" to welcome him as new trade and investment
          deals were signed. It is understood that because strict social
          distancing was maintained, PHE has decided those in the meetings do
          not need to self-isolate. Everyone else attending the G7 talks will
          continue to be tested daily. A senior UK diplomat said they "deeply
          regret" Mr Jaishankar would not be able to attend in person. "[He]
          will now attend virtually, but this is exactly why we have put in
          place strict Covid protocols and daily testing," the diplomat added.
          On Wednesday Mr Jaishankar said: "Was made aware yesterday evening of
          exposure to possible Covid positive cases. "As a measure of abundant
          caution and also out of consideration for others, I decided to conduct
          my engagements in the virtual mode. "That will be the case with the G7
          meeting today as well." The meeting on Wednesday is between foreign
          ministers, who were greeted by Foreign Secretary Dominic Raab with
          elbow and fist bumps in the courtyard of Lancaster House in London.
          Britain"s Foreign Secretary Dominic Raab welcomes South Korea"s
          Foreign minister Chung Eui-yong at the G7 foreign ministers meeting in
          London, Britainimage copyrightReuters image captionMr Raab greets his
          South Korean counterpart at the G7 foreign ministers meeting They then
          went to the summit room where the ministers were separated from one
          another by clear screens in order to minimise any risk from
          coronavirus. The talks are expected to discuss new ways to ensure
          fairer access to vaccine stockpiles and increase support for the
          global vaccine distribution scheme known as Covax. Also on the agenda
          on Wednesday is media freedom, arbitrary detention and girls'
          education. On the news that positive cases had been found among the
          India delegation, Labour leader Sir Keir Starmer said there were
          questions that needed to be raised "about how this happened". "It is a
          reminder of how vigilant we need to be about our borders," he said,
          adding: "Let's get to the bottom of how this happened - we cannot have
          a repeat." Asked whether holding the G7 meeting in person was a
          mistake because of the risk of Covid variants, Boris Johnson said it
          was "very important to try to continue as much business as you can as
          a government". "As I understand it, what has happened is the
          individuals concerned are all isolating now," the prime minister said.
          "I will be seeing the Indian foreign minister later this afternoon but
          that will be a Zoom exchange."
        </p>
      </main>
    </div>
  );
}
