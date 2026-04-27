const fs = require('fs');
let content = fs.readFileSync('src/App.jsx', 'utf8');

// Replacements
content = content.replace(/Luana Brant/g, 'Gislainy Pamplona');
content = content.replace(/Luana/g, 'Gislainy');
content = content.replace(/CRP 09\/17500/g, 'CRP 09/17366');
content = content.replace(/Arteterapeuta/g, 'Psicanalista');
content = content.replace(/Arteterapia/g, 'Psicanálise');
content = content.replace(/luanabrant\.psi/g, 'psigispamplona');
content = content.replace(/5562999298283/g, '5562999616626');
content = content.replace(/\(62\) 99929-8283/g, '(62) 99961-6626');
content = content.replace(/Clínica Avivar/g, 'Espaço Absolut');
content = content.replace(/Rua 148, 620/g, 'Rua T-38, nº 1710');
content = content.replace(/Setor Marista/g, 'Setor Serrinha');

// Specialties
content = content.replace(/Core Energetics/g, 'Traumas');
content = content.replace(/Grupos Terapêuticos/g, 'Dependência');
content = content.replace(/TDAH Adulto/g, 'Ansiedade & Depressão');

// Fix Images
content = content.replace(/Luana1\.png/g, 'Gislainy1.png');
content = content.replace(/luana2\.png/g, 'Gislainy2.png');

// Update Google Maps Link - Fixed Regex to look for double quote
content = content.replace(/https:\/\/www\.google\.com\/maps\/embed\?[^"]+/, 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15286.088667523912!2d-49.2736181!3d-16.7007624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1586fb8eb57%3A0x7d6a5c1a8e268994!2sEspa%C3%A7o%20Absolut!5e0!3m2!1spt-BR!2sbr!4v1714227300000!5m2!1spt-BR!2sbr');

// Fix Instagram links if they point to the old url explicitly
content = content.replace(/https:\/\/www\.instagram\.com\/psigispamplona\//g, 'https://www.instagram.com/psigispamplona/');

fs.writeFileSync('src/App.jsx', content);
