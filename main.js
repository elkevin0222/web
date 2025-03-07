// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const esBtn = document.getElementById('es-btn');
    const enBtn = document.getElementById('en-btn');
    const title = document.getElementById('title');
    const submitBtn = document.querySelector('button[type="submit"]');
    const resetBtn = document.querySelector('button[type="reset"]');
    const resultTitle = document.querySelector('#resultado h2');
    
    // Language translations
    const translations = {
        es: {
            title: 'Predicción Meteorológica',
            cape: 'CAPE (J/kg):',
            cin: 'CIN (J/kg):',
            wind: 'Velocidad del Viento (km/h):',
            temp: 'Temperatura (°C):',
            dewpoint: 'Punto de Rocío (°C):',
            humidity: 'Humedad (%):',
            thetae: 'Theta-e (K):',
            pwat: 'Agua Precipitable (mm):',
            lcl: 'LCL (hPa):',
            li: 'Índice de Elevación:',
            lfc: 'LFC (hPa):',
            el: 'EL (hPa):',
            bulkshear1: 'Cizalladura 0-1km (m/s):',
            bulkshear6: 'Cizalladura 0-6km (m/s):',
            srh1: 'SRH 0-1km (m²/s²):',
            srh3: 'SRH 0-3km (m²/s²):',
            ehi1: 'EHI 0-1km:',
            ehi3: 'EHI 0-3km:',
            lapserate: 'Lapse Rate (°C/km):',
            wind500: 'Viento 500 hPa (kt):',
            wind700: 'Viento 700 hPa (kt):',
            wind850: 'Viento 850 hPa (kt):',
            cape03: 'CAPE 0-3km (J/kg):',
            meanw: 'Viento Medio (kt):',
            lowrh: 'HR Baja (%):',
            midrh: 'HR Media (%):',
            downt: 'Temperatura Downdraft (°C):',
            kindex: 'K-Index:',
            tt: 'Total Totals:',
            convt: 'Temperatura Convectiva (°C):',
            maxt: 'Temperatura Máxima (°C):',
            esp: 'ESP:',
            mmp: 'MMP:',
            dcape: 'DCAPE (J/kg):',
            tei: 'TEI:',
            sigsvr: 'SigSvr:',
            submit: 'Analizar Condiciones',
            reset: 'Limpiar Datos',
            result_title: 'Predicción del Tiempo',
            predictions: {
                high_instability: 'Alta inestabilidad atmosférica',
                moderate_instability: 'Inestabilidad atmosférica moderada',
                severe_storms: 'Condiciones favorables para tormentas severas',
                tornado_risk: 'Riesgo de tornados',
                high_pwat: 'Alto contenido de agua precipitable - Posibles lluvias intensas',
                moderate_pwat: 'Contenido moderado de agua precipitable - Posibles lluvias',
                unstable_atmosphere: 'Atmósfera inestable - Favorable para desarrollo de tormentas',
                stable_atmosphere: 'Atmósfera estable - Condiciones tranquilas',
                low_cloud_base: 'Base de nubes baja - Mayor probabilidad de precipitación',
                low_lfc: 'Nivel de convección libre bajo - Facilidad para iniciar convección',
                high_lfc: 'Nivel de convección libre alto - Mayor energía necesaria para iniciar convección',
                high_el: 'Nivel de equilibrio alto - Potencial para tormentas profundas',
                low_el: 'Nivel de equilibrio bajo - Limitación en el desarrollo vertical de tormentas',
                high_convective_depth: 'Gran profundidad convectiva - Favorable para tormentas intensas',
                moderate_convective_depth: 'Moderada profundidad convectiva - Posibilidad de tormentas',
                high_lapse_rate: 'Lapse rate elevado - Atmósfera muy inestable',
                moderate_lapse_rate: 'Lapse rate moderado - Inestabilidad moderada',
                strong_winds: 'Vientos fuertes en altura - Posible desarrollo de sistemas organizados',
                strong_vertical_shear: 'Fuerte cizalladura vertical - Favorable para tormentas organizadas',
                low_cape_helicity: 'CAPE elevado en niveles bajos con helicidad - Alto riesgo de tornados',
                low_cape: 'CAPE elevado en niveles bajos - Favorable para tormentas severas',
                k_index_very_high: 'K-Index muy alto - Probabilidad >90% de tormentas',
                k_index_high: 'K-Index alto - Probabilidad 80-90% de tormentas',
                k_index_moderate_high: 'K-Index moderado-alto - Probabilidad 60-80% de tormentas',
                k_index_moderate: 'K-Index moderado - Probabilidad 40-60% de tormentas',
                k_index_low_moderate: 'K-Index bajo-moderado - Probabilidad 20-40% de tormentas',
                k_index_low: 'K-Index bajo - Probabilidad <20% de tormentas',
                tt_very_high: 'TT muy alto - Numerosas tormentas fuertes, dispersas severas, tornados dispersos',
                tt_high: 'TT alto - Tormentas fuertes dispersas, algunas severas, posibles tornados aislados',
                tt_moderate_high: 'TT moderado-alto - Tormentas moderadas dispersas, algunas fuertes y severas aisladas',
                tt_moderate: 'TT moderado - Tormentas moderadas dispersas, algunas fuertes',
                tt_low: 'TT bajo - Tormentas moderadas aisladas',
                high_tornado_potential: 'Alto potencial de tornados - EHI elevado',
                moderate_tornado_potential: 'Potencial moderado de tornados - EHI moderado',
                high_supercell_potential: 'Alto potencial de supercelda - EHI-3km elevado',
                moderate_supercell_potential: 'Potencial moderado de supercelda - EHI-3km moderado',
                extreme_thunderstorm_potential: 'Potencial extremo de tormentas - TEI muy elevado',
                high_thunderstorm_potential: 'Alto potencial de tormentas - TEI elevado',
                moderate_thunderstorm_potential: 'Potencial moderado de tormentas - TEI moderado',
                high_storm_maintenance: 'Alta probabilidad de mantenimiento de tormentas - MMP elevado',
                moderate_storm_maintenance: 'Probabilidad moderada de mantenimiento de tormentas - MMP moderado',
                low_storm_maintenance: 'Baja probabilidad de mantenimiento de tormentas - MMP bajo',
                strong_downdraft_potential: 'Alto potencial de corrientes descendentes - DCAPE elevado',
                moderate_downdraft_potential: 'Potencial moderado de corrientes descendentes - DCAPE moderado',
                high_significant_severe: 'Alta probabilidad de tiempo severo significativo - SigSvr elevado',
                moderate_significant_severe: 'Probabilidad moderada de tiempo severo significativo - SigSvr moderado',
                elevated_convection_potential: 'Potencial de convección elevada - Contraste de humedad significativo',
                convective_initiation_likely: 'Probable iniciación convectiva - Temperatura máxima supera temperatura convectiva'
            }
        },
        en: {
            title: 'Weather Prediction',
            cape: 'CAPE (J/kg):',
            cin: 'CIN (J/kg):',
            wind: 'Wind Speed (km/h):',
            temp: 'Temperature (°C):',
            dewpoint: 'Dew Point (°C):',
            humidity: 'Humidity (%):',
            thetae: 'Theta-e (K):',
            pwat: 'Precipitable Water (mm):',
            lcl: 'LCL (hPa):',
            li: 'Lifted Index:',
            lfc: 'LFC (hPa):',
            el: 'EL (hPa):',
            bulkshear1: 'Bulk Shear 0-1km (m/s):',
            bulkshear6: 'Bulk Shear 0-6km (m/s):',
            srh1: 'SRH 0-1km (m²/s²):',
            srh3: 'SRH 0-3km (m²/s²):',
            ehi1: 'EHI 0-1km:',
            ehi3: 'EHI 0-3km:',
            lapserate: 'Lapse Rate (°C/km):',
            wind500: 'Wind 500 hPa (kt):',
            wind700: 'Wind 700 hPa (kt):',
            wind850: 'Wind 850 hPa (kt):',
            cape03: 'CAPE 0-3km (J/kg):',
            meanw: 'Mean Wind (kt):',
            lowrh: 'Low RH (%):',
            midrh: 'Mid RH (%):',
            downt: 'Downdraft Temperature (°C):',
            kindex: 'K-Index:',
            tt: 'Total Totals:',
            convt: 'Convective Temperature (°C):',
            maxt: 'Maximum Temperature (°C):',
            esp: 'ESP:',
            mmp: 'MMP:',
            dcape: 'DCAPE (J/kg):',
            tei: 'TEI:',
            sigsvr: 'SigSvr:',
            submit: 'Analyze Conditions',
            reset: 'Clear Data',
            result_title: 'Weather Forecast',
            predictions: {
                high_instability: 'High atmospheric instability',
                moderate_instability: 'Moderate atmospheric instability',
                severe_storms: 'Favorable conditions for severe storms',
                tornado_risk: 'Risk of tornadoes',
                high_pwat: 'High precipitable water content - Possible intense rainfall',
                moderate_pwat: 'Moderate precipitable water content - Possible rainfall',
                unstable_atmosphere: 'Unstable atmosphere - Favorable for storm development',
                stable_atmosphere: 'Stable atmosphere - Calm conditions',
                low_cloud_base: 'Low cloud base - Higher precipitation probability',
                low_lfc: 'Low level of free convection - Easy convection initiation',
                high_lfc: 'High level of free convection - More energy needed for convection',
                high_el: 'High equilibrium level - Potential for deep storms',
                low_el: 'Low equilibrium level - Limited vertical storm development',
                high_convective_depth: 'Large convective depth - Favorable for intense storms',
                moderate_convective_depth: 'Moderate convective depth - Possibility of storms',
                high_lapse_rate: 'High lapse rate - Very unstable atmosphere',
                moderate_lapse_rate: 'Moderate lapse rate - Moderate instability',
                strong_winds: 'Strong upper-level winds - Possible organized system development',
                strong_vertical_shear: 'Strong vertical shear - Favorable for organized storms',
                low_cape_helicity: 'High low-level CAPE with helicity - High tornado risk',
                low_cape: 'High low-level CAPE - Favorable for severe storms',
                k_index_very_high: 'Very high K-Index - >90% probability of storms',
                k_index_high: 'High K-Index - 80-90% probability of storms',
                k_index_moderate_high: 'Moderate-high K-Index - 60-80% probability of storms',
                k_index_moderate: 'Moderate K-Index - 40-60% probability of storms',
                k_index_low_moderate: 'Low-moderate K-Index - 20-40% probability of storms',
                k_index_low: 'Low K-Index - <20% probability of storms',
                tt_very_high: 'Very high TT - Numerous strong storms, scattered severe, scattered tornadoes',
                tt_high: 'High TT - Scattered strong storms, some severe, possible isolated tornadoes',
                tt_moderate_high: 'Moderate-high TT - Scattered moderate storms, some strong and isolated severe',
                tt_moderate: 'Moderate TT - Scattered moderate storms, some strong',
                tt_low: 'Low TT - Isolated moderate storms',
                high_tornado_potential: 'High tornado potential - Elevated EHI',
                moderate_tornado_potential: 'Moderate tornado potential - Moderate EHI',
                high_supercell_potential: 'High supercell potential - Elevated EHI-3km',
                moderate_supercell_potential: 'Moderate supercell potential - Moderate EHI-3km',
                extreme_thunderstorm_potential: 'Extreme thunderstorm potential - Very high TEI',
                high_thunderstorm_potential: 'High thunderstorm potential - Elevated TEI',
                moderate_thunderstorm_potential: 'Moderate thunderstorm potential - Moderate TEI',
                high_storm_maintenance: 'High storm maintenance probability - Elevated MMP',
                moderate_storm_maintenance: 'Moderate storm maintenance probability - Moderate MMP',
                low_storm_maintenance: 'Low storm maintenance probability - Low MMP',
                strong_downdraft_potential: 'High downdraft potential - Elevated DCAPE',
                moderate_downdraft_potential: 'Moderate downdraft potential - Moderate DCAPE',
                high_significant_severe: 'High probability of significant severe weather - Elevated SigSvr',
                moderate_significant_severe: 'Moderate probability of significant severe weather - Moderate SigSvr',
                elevated_convection_potential: 'Elevated convection potential - Significant humidity contrast',
                convective_initiation_likely: 'Convective initiation likely - Maximum temperature exceeds convective temperature'
            }
        }
    };
    
    // Function to change language
    function setLanguage(lang) {
        // Update active button
        if (lang === 'es') {
            esBtn.classList.add('active');
            enBtn.classList.remove('active');
            document.documentElement.lang = 'es';
        } else {
            enBtn.classList.add('active');
            esBtn.classList.remove('active');
            document.documentElement.lang = 'en';
        }
        
        // Update text content
        title.textContent = translations[lang].title;
        submitBtn.textContent = translations[lang].submit;
        resetBtn.textContent = translations[lang].reset;
        resultTitle.textContent = translations[lang].result_title;
        
        // Update all form labels
        Object.keys(translations[lang]).forEach(key => {
            if (key !== 'predictions' && key !== 'title' && key !== 'submit' && key !== 'reset' && key !== 'result_title') {
                const label = document.querySelector(`label[for="${key}"]`);
                if (label) {
                    label.textContent = translations[lang][key];
                }
            }
        });
        
        // If there's a prediction already displayed, update it to the new language
        if (document.getElementById('resultado').classList.contains('visible')) {
            analyzeWeather();
        }
    }
    
    // Event listeners for language buttons
    esBtn.addEventListener('click', () => setLanguage('es'));
    enBtn.addEventListener('click', () => setLanguage('en'));
    
    // Initialize with Spanish
    setLanguage('es');
    
    // Form submission handler
    const weatherForm = document.getElementById('weatherForm');
    const resultDiv = document.getElementById('resultado');
    const predictionDiv = document.getElementById('prediccion');
    
    weatherForm.addEventListener('submit', function(e) {
        e.preventDefault();
        analyzeWeather();
    });
    
    function analyzeWeather() {
        // Get current language
        const currentLang = document.documentElement.lang;
        
        // Get form values
        const cape = parseFloat(document.getElementById('cape').value);
        const cin = parseFloat(document.getElementById('cin').value);
        const wind = parseFloat(document.getElementById('wind').value);
        const temp = parseFloat(document.getElementById('temp').value);
        const dewpoint = parseFloat(document.getElementById('dewpoint').value);
        const humidity = parseFloat(document.getElementById('humidity').value);
        const thetae = parseFloat(document.getElementById('thetae').value);
        const pwat = parseFloat(document.getElementById('pwat').value);
        const lcl = parseFloat(document.getElementById('lcl').value);
        const li = parseFloat(document.getElementById('li').value);
        const lfc = parseFloat(document.getElementById('lfc').value);
        const el = parseFloat(document.getElementById('el').value);
        const bulkshear1 = parseFloat(document.getElementById('bulkshear1').value);
        const bulkshear6 = parseFloat(document.getElementById('bulkshear6').value);
        const srh1 = parseFloat(document.getElementById('srh1').value);
        const srh3 = parseFloat(document.getElementById('srh3').value);
        const ehi1 = parseFloat(document.getElementById('ehi1').value);
        const ehi3 = parseFloat(document.getElementById('ehi3').value);
        const lapserate = parseFloat(document.getElementById('lapserate').value);
        const wind500 = parseFloat(document.getElementById('wind500').value);
        const wind700 = parseFloat(document.getElementById('wind700').value);
        const wind850 = parseFloat(document.getElementById('wind850').value);
        const cape03 = parseFloat(document.getElementById('cape03').value);
        const meanw = parseFloat(document.getElementById('meanw').value);
        const lowrh = parseFloat(document.getElementById('lowrh').value);
        const midrh = parseFloat(document.getElementById('midrh').value);
        const downt = parseFloat(document.getElementById('downt').value);
        const kindex = parseFloat(document.getElementById('kindex').value);
        const tt = parseFloat(document.getElementById('tt').value);
        const convt = parseFloat(document.getElementById('convt').value);
        const maxt = parseFloat(document.getElementById('maxt').value);
        const esp = parseFloat(document.getElementById('esp').value);
        const mmp = parseFloat(document.getElementById('mmp').value);
        const dcape = parseFloat(document.getElementById('dcape').value);
        const tei = parseFloat(document.getElementById('tei').value);
        const sigsvr = parseFloat(document.getElementById('sigsvr').value);

        // Generate predictions based on values
        let predictions = [];

        // CAPE analysis
        if (cape > 2500) {
            predictions.push(translations[currentLang].predictions.high_instability);
        } else if (cape > 1000) {
            predictions.push(translations[currentLang].predictions.moderate_instability);
        }

        // Combined parameters for severe weather
        if (cape > 2000 && bulkshear6 > 20) {
            predictions.push(translations[currentLang].predictions.severe_storms);
        }

        // Tornado parameters
        if (srh1 > 150 && cape03 > 100 && esp > 0.6) {
            predictions.push(translations[currentLang].predictions.tornado_risk);
        }

        // Precipitable water
        if (pwat > 50) {
            predictions.push(translations[currentLang].predictions.high_pwat);
        } else if (pwat > 30) {
            predictions.push(translations[currentLang].predictions.moderate_pwat);
        }

        // Atmospheric stability
        if (li < -2) {
            predictions.push(translations[currentLang].predictions.unstable_atmosphere);
        } else if (li > 2) {
            predictions.push(translations[currentLang].predictions.stable_atmosphere);
        }

        // Cloud base and convection levels
        if (lcl < 800) {
            predictions.push(translations[currentLang].predictions.low_cloud_base);
        }
        if (lfc < 700) {
            predictions.push(translations[currentLang].predictions.low_lfc);
        } else if (lfc > 850) {
            predictions.push(translations[currentLang].predictions.high_lfc);
        }

        // Equilibrium level
        if (el < 300) {
            predictions.push(translations[currentLang].predictions.high_el);
        } else if (el > 500) {
            predictions.push(translations[currentLang].predictions.low_el);
        }

        // Lapse rate
        if (lapserate > 7.5) {
            predictions.push(translations[currentLang].predictions.high_lapse_rate);
        } else if (lapserate > 6.5) {
            predictions.push(translations[currentLang].predictions.moderate_lapse_rate);
        }

        // Wind analysis
        if (wind500 > 50 || wind700 > 40) {
            predictions.push(translations[currentLang].predictions.strong_winds);
        }

        // Vertical shear
        if (bulkshear6 > 25) {
            predictions.push(translations[currentLang].predictions.strong_vertical_shear);
        }

        // Low-level parameters
        if (cape03 > 250 && srh1 > 150) {
            predictions.push(translations[currentLang].predictions.low_cape_helicity);
        } else if (cape03 > 150) {
            predictions.push(translations[currentLang].predictions.low_cape);
        }

        // K-Index analysis
        if (kindex > 35) {
            predictions.push(translations[currentLang].predictions.k_index_very_high);
        } else if (kindex > 32) {
            predictions.push(translations[currentLang].predictions.k_index_high);
        } else if (kindex > 29) {
            predictions.push(translations[currentLang].predictions.k_index_moderate_high);
        } else if (kindex > 26) {
            predictions.push(translations[currentLang].predictions.k_index_moderate);
        } else if (kindex > 23) {
            predictions.push(translations[currentLang].predictions.k_index_low_moderate);
        } else {
            predictions.push(translations[currentLang].predictions.k_index_low);
        }

        // Total Totals analysis
        if (tt > 55) {
            predictions.push(translations[currentLang].predictions.tt_very_high);
        } else if (tt > 50) {
            predictions.push(translations[currentLang].predictions.tt_high);
        } else if (tt > 45) {
            predictions.push(translations[currentLang].predictions.tt_moderate_high);
        } else if (tt > 40) {
            predictions.push(translations[currentLang].predictions.tt_moderate);
        } else {
            predictions.push(translations[currentLang].predictions.tt_low);
        }
        
        // EHI analysis (Energy Helicity Index)
        if (ehi1 > 2) {
            predictions.push(translations[currentLang].predictions.high_tornado_potential);
        } else if (ehi1 > 1) {
            predictions.push(translations[currentLang].predictions.moderate_tornado_potential);
        }
        
        if (ehi3 > 3) {
            predictions.push(translations[currentLang].predictions.high_supercell_potential);
        } else if (ehi3 > 1.5) {
            predictions.push(translations[currentLang].predictions.moderate_supercell_potential);
        }
        
        // TEI analysis (Thunder Energy Index)
        if (tei > 30) {
            predictions.push(translations[currentLang].predictions.extreme_thunderstorm_potential);
        } else if (tei > 25) {
            predictions.push(translations[currentLang].predictions.high_thunderstorm_potential);
        } else if (tei > 20) {
            predictions.push(translations[currentLang].predictions.moderate_thunderstorm_potential);
        }
        
        // MMP analysis (Mesoscale Maintenance Parameter)
        if (mmp > 0.8) {
            predictions.push(translations[currentLang].predictions.high_storm_maintenance);
        } else if (mmp > 0.6) {
            predictions.push(translations[currentLang].predictions.moderate_storm_maintenance);
        } else if (mmp > 0.4) {
            predictions.push(translations[currentLang].predictions.low_storm_maintenance);
        }
        
        // DCAPE analysis (Downdraft CAPE)
        if (dcape > 1000) {
            predictions.push(translations[currentLang].predictions.strong_downdraft_potential);
        } else if (dcape > 500) {
            predictions.push(translations[currentLang].predictions.moderate_downdraft_potential);
        }
        
        // SigSvr analysis (Significant Severe Parameter)
        if (sigsvr > 1) {
            predictions.push(translations[currentLang].predictions.high_significant_severe);
        } else if (sigsvr > 0.5) {
            predictions.push(translations[currentLang].predictions.moderate_significant_severe);
        }
        
        // Humidity analysis
        if (lowrh < 30 && midrh > 70) {
            predictions.push(translations[currentLang].predictions.elevated_convection_potential);
        }
        
        // Temperature analysis
        if (maxt > convt) {
            predictions.push(translations[currentLang].predictions.convective_initiation_likely);
        }

        // Display results
        predictionDiv.innerHTML = predictions.join('<br><br>');
        resultDiv.style.display = 'block';
        resultDiv.classList.add('visible');
    }
});