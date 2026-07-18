/* Cite popup — Google-Scholar-style copyable BibTeX per publication. */
const BIBS = {
  mssc2026: `@article{lu2026aiassisted,
  title={AI-Assisted IC Design with Accelerated Computing and LLM-Driven Optimization},
  author={Lu, Yi-Chen and Hsiao, Hao-Hsiang and Liang, Rongjian and Ren, Haoxing},
  journal={IEEE Solid-State Circuits Magazine},
  year={2026},
  publisher={IEEE}
}`,
  maptuner2026: `@inproceedings{hsiao2026maptuner,
  title={MapTuner: Multimodal Recipe Recommendation for Physical Design with Layout Maps and Design Insights},
  author={Hsiao, Hao-Hsiang and Kundu, Sudipto and Chan, Wei-Ting Jonas and Dasgupta, Chitralekha and Lim, Sung Kyu},
  booktitle={IEEE International Conference on LLM-Aided Design (ICLAD)},
  year={2026},
  organization={IEEE}
}`,
  hybridrl2026: `@article{hsiao2026hybrid,
  title={A Hybrid Reinforcement Learning Framework for Efficient Physical Design Parameter Tuning},
  author={Hsiao, Hao-Hsiang and Lu, Yi-Chen and Vanna-Iampikul, Pruek and Lim, Sung Kyu},
  journal={ACM Transactions on Design Automation of Electronic Systems},
  year={2026},
  publisher={ACM}
}`,
  c3po2026: `@inproceedings{lu2026c3po,
  title={C3PO: Commercial-Quality Global Placement via Coherent, Concurrent Timing, Routability, and Wirelength Optimization},
  author={Lu, Yi-Chen and Hsiao, Hao-Hsiang and Liang, Rongjian and Liu, Wen-Hao and Ren, Haoxing},
  booktitle={31st IEEE/ACM Asia and South Pacific Design Automation Conference (ASP-DAC)},
  year={2026},
  organization={IEEE},
  note={Best Paper Award}
}`,
  tier2026: `@inproceedings{lu2026differentiable,
  title={Differentiable Tier Assignment for Timing and Congestion-Aware Routing in 3D ICs},
  author={Lu, Yuan-Hsiang and Hsiao, Hao-Hsiang and Lu, Yi-Chen and Ren, Haoxing and Lim, Sung Kyu},
  booktitle={31st IEEE/ACM Asia and South Pacific Design Automation Conference (ASP-DAC)},
  year={2026},
  organization={IEEE}
}`,
  legopd2025: `@inproceedings{lu2025llmenhanced,
  title={LLM-Enhanced GPU-Optimized Physical Design at Scale},
  author={Lu, Yi-Chen and Hsiao, Hao-Hsiang and Ren, Haoxing},
  booktitle={44th IEEE/ACM International Conference on Computer-Aided Design (ICCAD)},
  year={2025},
  organization={IEEE},
  note={Invited paper}
}`,
  buffalo2025: `@inproceedings{hsiao2025buffalo,
  title={BUFFALO: PPA-Configurable, LLM-based Buffer Tree Generation via Group Relative Policy Optimization},
  author={Hsiao, Hao-Hsiang and Lu, Yi-Chen and Lim, Sung Kyu and Ren, Haoxing},
  booktitle={44th IEEE/ACM International Conference on Computer-Aided Design (ICCAD)},
  year={2025},
  organization={IEEE}
}`,
  dco3d2025: `@inproceedings{hsiao2025dco3d,
  title={DCO-3D: Differentiable Congestion Optimization in 3D ICs},
  author={Hsiao, Hao-Hsiang and Lu, Yi-Chen and Vanna-Iampikul, Pruek and Agnesina, Anthony and Liang, Rongjian and Lu, Yuan-Hsiang and Ren, Haoxing and Lim, Sung Kyu},
  booktitle={62nd ACM/IEEE Design Automation Conference (DAC)},
  year={2025},
  organization={IEEE}
}`,
  insightalign2025: `@inproceedings{hsiao2025insightalign,
  title={InsightAlign: A Transferable Physical Design Recipe Recommender Based on Design Insights},
  author={Hsiao, Hao-Hsiang and Kundu, Sudipto and Zeng, Wei and Chan, Wei-Ting Jonas and Guo, Deyuan and Lim, Sung Kyu},
  booktitle={62nd ACM/IEEE Design Automation Conference (DAC)},
  year={2025},
  organization={IEEE}
}`,
  pdpo2024: `@inproceedings{hsiao2024mlbased,
  title={ML-based Physical Design Parameter Optimization for 3D ICs: From Parameter Selection to Optimization},
  author={Hsiao, Hao-Hsiang and Vanna-Iampikul, Pruek and Lu, Yi-Chen and Lim, Sung Kyu},
  booktitle={61st ACM/IEEE Design Automation Conference (DAC)},
  year={2024},
  organization={IEEE}
}`,
  ganplace2024: `@article{lu2024ganplace,
  title={GAN-Place: Advancing Open Source Placers to Commercial-Quality Using Generative Adversarial Networks and Transfer Learning},
  author={Lu, Yi-Chen and Ren, Haoxing and Hsiao, Hao-Hsiang and Lim, Sung Kyu},
  journal={ACM Transactions on Design Automation of Electronic Systems},
  volume={29},
  number={2},
  pages={1--17},
  year={2024},
  publisher={ACM},
  doi={10.1145/3636461}
}`,
  fasttuner2024: `@inproceedings{hsiao2024fasttuner,
  title={FastTuner: Transferable Physical Design Parameter Optimization using Fast Reinforcement Learning},
  author={Hsiao, Hao-Hsiang and Lu, Yi-Chen and Vanna-Iampikul, Pruek and Lim, Sung Kyu},
  booktitle={Proceedings of the 2024 International Symposium on Physical Design (ISPD)},
  pages={93--101},
  year={2024},
  organization={ACM},
  doi={10.1145/3626184.3633328}
}`,
  dreamgan2023: `@inproceedings{lu2023dreamgan,
  title={DREAM-GAN: Advancing DREAMPlace towards Commercial-Quality using Generative Adversarial Learning},
  author={Lu, Yi-Chen and Ren, Haoxing and Hsiao, Hao-Hsiang and Lim, Sung Kyu},
  booktitle={Proceedings of the 2023 International Symposium on Physical Design (ISPD)},
  pages={141--148},
  year={2023},
  organization={ACM},
  doi={10.1145/3569052.3572993}
}`,
};

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("bib-modal");
  var pre = document.getElementById("bib-text");
  var copyBtn = document.getElementById("bib-copy");

  function open(key) {
    if (!BIBS[key]) return;
    pre.textContent = BIBS[key];
    copyBtn.textContent = "Copy";
    modal.style.display = "flex";
  }
  function close() {
    modal.style.display = "none";
  }

  document.querySelectorAll(".bib-btn").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      open(btn.getAttribute("data-key"));
    });
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });
  document.getElementById("bib-close").addEventListener("click", close);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
  copyBtn.addEventListener("click", function () {
    var text = pre.textContent;
    function done() {
      copyBtn.textContent = "Copied ✓";
      setTimeout(function () { copyBtn.textContent = "Copy"; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done);
    } else {
      var ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      done();
    }
  });
});
