const steps = [
  {
    title: "1.Preparar tods las partes impresas",
    text: "Retira el equipo de la caja asegurando estabilidad. \n lorehs fdsiflsj flgdhfjghgf dghfjgngb dhfgjggf tfjgkhgf jgkjghgg hfjghgifh fzd kugdzhziuflizd hvkjdhvkh \n zdfhzdich kzjclzef  fsgrdhtgmhngb gdhfjgkmhngg hgfjghg fjhgg rhdfjgff sgdhfjngb jskefkdv shgrogklsmgdfi \n bifakfgshlnbzf sgdthgfsd sgdhfjhngbf hgfjghnbfg gdhfjgb gdhfgf gdhfjgjnb vfoioptj klfgbl fgoitjy lhtdmlgkipogrhdtjf \n lorem isdffsfsgrdgvf rgttdfxfdae fsgrthgdbfvfsrgdpsum dolor sit amet, consectetur adipiscing elit. \n Donec a svdgrfdergthgdfvdefgb sgrthfgbfs fsrgthfgbdfvdfsrg fsrgthhfgdf diam lectus. Sed sit amet ipsum mauris.",
    warning: "No levantes el equipo solo.", 
    images: ["paso1-main.jpg", "paso1-detalle1.jpg", "paso1-detalle2.jpg"]
  },
  {
    title: "2. Preparando el módulo X",
    text: "Alinea el módulo con la base antes de fijarlo.",
    warning: "Evita forzar las guías laterales.",
    images: ["paso2-1.jpg", "paso2-2.jpg", "paso2-3.jpg"]
  },
  {
    title: "3. Conexión de cables",
    text: "Conecta cada cable según el código de color.",
    warning: "No conectes con el equipo encendido.",
    images: ["paso3-1.jpg", "paso3-2.jpg", "paso3-3.jpg"]
  },
  {
    title: "4. Ajuste mecánico",
    text: "Ajusta tornillos sin exceder el par recomendado.",
    warning: "El exceso de fuerza puede dañar la estructura.",
    images: ["paso4-1.jpg", "paso4-2.jpg", "paso4-3.jpg"]
  },
  {
    title: "5. Calibración",
    text: "Realiza la calibración automática del sistema.",
    warning: "No interrumpas el proceso.",
    images: ["paso5-1.jpg", "paso5-2.jpg", "paso5-3.jpg"]
  },
  {
    title: "6. Verificación",
    text: "Revisa que todo esté firme y alineado.",
    warning: "Repite pasos si detectas vibraciones.",
    images: ["paso6-1.jpg", "paso6-2.jpg", "paso6-3.jpg"]
  },
  {
    title: "7. Finalización",
    text: "El sistema está listo para operar.",
    warning: "Lee el manual antes del primer uso.",
    images: ["paso7-1.jpg", "paso7-2.jpg", "paso7-3.jpg"]
  },
  {
    title: "8. Cierre del proceso",
    text: "El sistema está listo para operar.",
    warning: "Lee el manual antes del primer uso.",
    images: ["paso8-1.jpg", "paso8-2.jpg", "paso8-3.jpg"]
  }
];

let current = 0;

const title = document.getElementById("stepTitle");
const text = document.getElementById("stepText");
const warning = document.getElementById("warningBox");
const img = document.getElementById("mainImage");
const thumbs = document.getElementById("thumbs");
const progress = document.getElementById("progress");
const progressText = document.getElementById("progressText");
const commentsBox = document.getElementById("comments");

function render() {
  const step = steps[current];
  title.textContent = step.title;
  text.textContent = step.text;
  warning.textContent = "⚠️ " + step.warning;

  img.src = `images/${step.images[0]}`;
  thumbs.innerHTML = "";
  step.images.forEach(i => {
    const t = document.createElement("img");
    t.src = `images/${i}`;
    t.onclick = () => img.src = t.src;
    thumbs.appendChild(t);
  });

  progress.style.width = ((current+1)/steps.length)*100 + "%";
  progressText.textContent = `Paso ${current+1} de ${steps.length}`;
}

document.getElementById("next").onclick = () => {
  if (current < steps.length-1) current++;
  render();
};

document.getElementById("prev").onclick = () => {
  if (current > 0) current--;
  render();
};

render();
