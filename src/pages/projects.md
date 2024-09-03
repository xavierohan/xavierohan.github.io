---
layout: ../layouts/Projects.astro
projects:
  Code:
    - name: edubotics-core
      link: https://github.com/edubotics-ai/edubotics-core
      desc: edubotics-core is an open-source Python library that allows developers to build LLM-based chatbots efficiently. It provides a comprehensive set of core modules for vector storage, retrieval, processing, with more to come.
      tech:
        - i-logos:python
      repo: edubotics-ai/edubotics-core
    - name: AdaClust_DomainBed
      link: https://github.com/xavierohan/AdaClust_DomainBed
      desc: Code for AdaClust, Adaptive Methods for Aggregated Domain Generalization
      tech:
        - i-logos:python
      repo: xavierohan/AdaClust_DomainBed
    - name: diversity_vs_recognizability
      link: https://github.com/serre-lab/diversity_vs_recognizability
      desc: Code for Diversity vs. Recognizability, Human-like generalization in one-shot generative models
      tech:
        - i-logos:python
      repo: serre-lab/diversity_vs_recognizability
---

## edubotics-core: An Open-Source Python Library for Building LLM-based Applications

edubotics-core is an open-source Python library that allows developers to build LLM-based chatbots efficiently. It provides a comprehensive set of core modules for vector storage, retrieval, processing, with more to come.

<img src="https://github.com/edubotics-ai/.github/blob/main/assets/images/edubot-mascot.png?raw=true" class="paper-images"  width="30%" height="30%"/>

**Installation:**

```bash
pip install edubotics-core
```

Code: https://github.com/edubotics-ai/edubotics-core

Full Documentation: http://docs.edubotics.ai

Applications built with edubotics-core: https://github.com/edubotics-ai/edubotics-app

<img src="/img/my_imgs/edubotics_1.png" class="paper-images"  width="100%" height="100%"/>
<img src="/img/my_imgs/edubotics_2.png" class="paper-images"  width="100%" height="100%"/>


## AdaClust: Adaptive Methods for Aggregated Domain Generalization

Domain generalization involves learning a classifier from a heterogeneous collection of training sources such that it generalizes to data drawn from similar unknown target domains, with applications in large-scale learning and personalized inference. In many settings, privacy concerns prohibit obtaining domain labels for the training data samples, and instead only have an aggregated collection of training points. Existing approaches that utilize domain labels to create domain-invariant feature representations are inapplicable in this setting, requiring alternative approaches to learn generalizable classifiers. In this paper, we propose a domain-adaptive approach to this problem, which operates in two steps: (a) we cluster training data within a carefully chosen feature space to create pseudo-domains, and (b) using these pseudo-domains we learn a domain-adaptive classifier that makes predictions using information about both the input and the pseudo-domain it belongs to. Our approach achieves state-of-the-art performance on a variety of domain generalization benchmarks without using domain labels whatsoever. Furthermore, we provide novel theoretical guarantees on domain generalization  in using cluster information. Our approach is amenable to ensemble-based methods and provides substantial gains even on large-scale benchmark datasets.

<img src="/img/my_imgs/main_cvpr22_new.jpg" class="paper-images"/>

Full Paper: [https://arxiv.org/abs/2112.04766](https://arxiv.org/abs/2112.04766) 

Code: [https://github.com/xavierohan/AdaClust_DomainBed](https://github.com/xavierohan/AdaClust_DomainBed)

&nbsp;

## Diversity vs. Recognizability: Human-like generalization in one-shot generative models

Robust generalization to new concepts has long remained a distinctive feature of human intelligence. However, recent progress in deep generative models has now led to neural architectures capable of synthesizing novel instances of unknown visual concepts from a single training example. Yet, a more precise comparison between these models and humans is not possible because existing performance metrics for generative models (i.e., FID, IS, likelihood) are not appropriate for the one-shot generation scenario. Here, we propose a new framework to evaluate one-shot generative models along two axes: sample recognizability vs. diversity  (i.e., intra-class variability). Using this framework, we perform a systematic evaluation of representative one-shot generative models on the Omniglot handwritten dataset. We first show that GAN-like and VAE-like models fall on opposite ends of the diversity-recognizability space. Extensive analyses of the effect of key model parameters further revealed that spatial attention and context integration have a linear contribution to the diversity-recognizability trade-off. In contrast, disentanglement transports the model along a parabolic curve that could be used to maximize recognizability. Using the diversity-recognizability framework, we were able to identify models and parameters that closely approximate human data.

<div style="display: flex; justify-content: space-between; align-items: center;">
  <img src="/img/my_imgs/Fig_serrelab_resized.png" class="paper-images" width="50%" height="50%"/>
  <img src="/img/my_imgs/div_vs_rec2.png" class="paper-images" width="50%" height="50%"/>
</div>


Full Paper: [https://arxiv.org/abs/2205.10370](https://arxiv.org/abs/2205.10370) 

Code: [https://github.com/serre-lab/diversity_vs_recognizability](https://github.com/serre-lab/diversity_vs_recognizability)

