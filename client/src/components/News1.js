import React from 'react'
import INews1 from "../images/news_1.jpg"

function News1() {
  return (
    <div className="container my-3">
  <h1 className='my-4'>Higher Lithium Levels in Drinking Water May Raise Autism Risk</h1>
  <div className="alert alert-success" role="alert">
  <strong>Summary: </strong>Women who drink tap water containing higher levels of lithium are at higher risk of their children being diagnosed with autism later in life. Researchers found as lithium concentrations increased in drinking water, so too did the risk of ASD diagnosis.
</div>
<h5>Pregnant women whose household tap water had higher levels of lithium had a moderately higher risk of their offspring being diagnosed with autism spectrum disorder, according to a new study led by a UCLA Health researcher.</h5>
<p>
The study, published April 3 in JAMA Pediatrics, is believed to be the first to identify naturally occurring lithium in drinking water as a possible environmental risk factor for autism.</p>

<p>“Any drinking water contaminants that may affect the developing human brain deserve intense scrutiny,” said lead study author Beate Ritz, MD, PhD, professor of neurology in the David Geffen School of Medicine at UCLA and professor of epidemiology and environmental health at the UCLA Fielding School of Public Health.</p>

<p>“The results of our study are based on high-quality Danish data but need to be replicated in other populations and areas of the world.”</p>

<p>Because of lithium’s mood-stabilizing effects, some lithium compounds have long been used as a treatment for depression and bipolar disorders. However, there has been debate about whether mothers can safely take lithium during pregnancy amid increasing evidence it is associated with higher risk of miscarriage and cardiac anomalies or defects in newborns.</p>

<p>Ritz, whose research focuses on how environmental exposures influence neurodevelopmental disorders and neurodegenerative diseases, said she decided to examine the possible association between lithium and autism risk after finding there had been little research in humans about how lithium affects brain growth and development.</p>
<p>Still, she found that some experimental research indicated lithium, which is among several naturally occurring metals often found in water, could affect an important molecular pathway involved in neurodevelopment and autism.</p>
<p>Zeyan Liew, PhD, MPH, first author of the study and an Assistant Professor of Epidemiology at the Yale University School of Public Health, added that this study was important because prior research findings from Denmark using high-quality medical registry data have already shown that ingestion of chronic and low-dose lithium from drinking can influence the occurrence of adult onset neuropsychiatric disorders.</p>
<p>However, no study has been performed to assess whether lithium from drinking water consumed by pregnant women affects their child’s neurodevelopment.</p>
<p>Ritz and Liew worked with Danish researchers who analyzed lithium levels in 151 public waterworks in Denmark, representing the water supply for about half of the country’s population.</p>
<p>To identify which waterworks supplied mothers’ homes at the time of their pregnancy, the researchers used address information from Denmark’s comprehensive civil registry system.</p>
<img src={INews1} className="img-fluid" alt="clean water" />

  <p className='mt-3'>Using a nationwide database of patients with psychiatric disorders, the researchers identified children who were born in 1997-2013, and compared 12,799 diagnosed with autism against 63,681 children who did not have an autism diagnosis.</p>
  <p>The researchers also controlled for maternal characteristics, some socioeconomic factors and air pollution exposures, all of which have been linked to increased risk of autism in children.</p>
  <p>As lithium levels increased, so did the risk of an autism diagnosis, the researchers reported. Compared to the lowest quartile of recorded lithium levels – in other words, those in the 25th percentile – lithium levels in the second and third quartiles were associated with a 24-26% higher risk of autism. In the highest quartile, the risk was 46% higher compared to the lowest quartile.</p>
  <p>The researchers found a similar relationship between increased lithium levels and higher risk of autism diagnosis when the data were broken down by subtypes of the disorder. They also found the association between lithium levels and autism risk was slightly stronger for those living in urban areas compared to smaller towns and rural areas.</p>
  <p>In addition to Denmark’s comprehensive civil databases that have proven to be valuable resources for public health researchers, several other factors made Denmark ideal for this study. Denmark’s consumption of bottled water ranks among the lowest in Europe, meaning Danes largely rely on tap water.</p>
  <p>The country also has a robust system for measuring trace metals and other contaminants in their water supply. Ritz said lithium levels in Denmark’s water, when compared to other countries, are likely in the low to moderate range.</p>

  <div className="alert alert-warning" role="alert">
<strong>Author:</strong> Jason Millman<br/>
<strong>Source:</strong> UCLA<br/>
<strong>Contact:</strong> Jason Millman – UCLA<br/>
<strong>Image:</strong> The image is in the public domain<br/>
</div>
</div>
  )
}

export default News1