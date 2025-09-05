

Última actualización: Julio 2025
[[lilo]]
---

## **📘 Módulo 1: Fundamentos de la Terminal**

  

### **¿Qué es la terminal?**

  

La terminal es una interfaz que permite interactuar con el sistema operativo usando comandos de texto. Es más rápida y poderosa para desarrolladores que muchas interfaces gráficas.

  

### **Comandos básicos**

```
pwd             # Muestra el directorio actual
ls              # Lista archivos
ls -la          # Lista todo, incluyendo ocultos
cd carpeta/     # Entra a una carpeta
cd ..           # Sube un nivel
clear           # Limpia la pantalla
exit            # Sale de la terminal
```

---

## **📁 Módulo 2: Archivos y Carpetas**

```
touch archivo.txt         # Crea archivo vacío
mkdir nueva_carpeta       # Crea carpeta
cp origen.txt destino.txt # Copia archivo
mv archivo carpeta/       # Mueve o renombra archivo
rm archivo.txt            # Borra archivo
rm -r carpeta             # Borra carpeta y su contenido
```

---

## **🔍 Módulo 3: Búsqueda y Visualización**

```
cat archivo.txt           # Muestra contenido completo
less archivo.txt          # Muestra contenido paginado
head archivo.txt          # Primeras 10 líneas
tail archivo.txt          # Últimas 10 líneas
grep "texto" archivo.txt  # Busca texto
find . -name "*.js"       # Busca archivos .js en el directorio actual
```

---

## **⚙️ Módulo 4: Permisos y Procesos**

  

### **Permisos**

```
ls -l                     # Muestra permisos
chmod +x script.sh        # Da permiso de ejecución
```

### **Procesos**

```
ps aux                    # Lista todos los procesos
kill 1234                 # Termina proceso por PID
top                       # Monitor de sistema
htop                      # (mejorado, requiere instalación)
```

---

## **🧰 Módulo 5: Alias, Scripts y Productividad**

  

### **Alias**

```
alias ll='ls -lah'
unalias ll
```

Para que persistan:

```
# En ~/.bashrc o ~/.zshrc
alias gs='git status'
```

### **Scripts**

```
# script.sh
#!/bin/bash
echo "Hola, Marcelo"
```

```
chmod +x script.sh
./script.sh
```

---

## **🌳 Módulo 6: Git desde la Terminal**

```
git status
git add .
git commit -m "Mensaje"
git push origin main
git pull
```

---

## **🚀 Módulo 7: Comandos Útiles para Desarrolladores Web**

```
curl https://ejemplo.com          # Peticiones HTTP
npx serve                         # Servir sitio estático
npm run dev                       # Proyecto en desarrollo
code .                            # Abrir VS Code desde terminal
open .                            # Abrir carpeta en macOS
xdg-open .                        # Abrir carpeta en Linux
```

---

## **🧠 Extensión: Uso de Zsh (Z Shell)**

  

### **¿Qué es Zsh?**

  

Zsh es una versión avanzada de Bash con funciones modernas, como:

- Autocompletado inteligente
    
- Sugerencias al escribir comandos
    
- Corrección automática de errores de tipeo
    
- Plugins y temas (Oh My Zsh)
    

  

### **Instalación**

```
# macOS (con Homebrew)
brew install zsh

# Linux (Debian/Ubuntu)
sudo apt install zsh
```

### **Activar Zsh como shell por defecto**

```
chsh -s $(which zsh)
```

---

## **🚀 Oh My Zsh**

  

### **Instalación**

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

### **Temas populares**

- robbyrussell (por defecto)
    
- agnoster (requiere fuente Powerline)
    
- powerlevel10k (recomendado)
    

  

Instalación de Powerlevel10k:

```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git \
  ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

Luego en ~/.zshrc:

```
ZSH_THEME="powerlevel10k/powerlevel10k"
```

---

## **🔌 Plugins útiles para Zsh**

  

En ~/.zshrc, dentro de plugins=(...), puedes agregar:

- git → comandos git abreviados
    
- z → navegación rápida de carpetas usadas
    
- extract → descomprimir archivos
    
- sudo → autocompleta con sudo si olvidas
    
- web-search → buscar en Google desde terminal
    

  

Ejemplo:

```
plugins=(git z sudo web-search)
```

---

## **🧪 Módulo Final: Consejos de Productividad**

- Ctrl + R → busca comandos previos
    
- history → muestra comandos recientes
    
- Usa scripts para tareas repetitivas
    
- Divide tu .zshrc por secciones
    
- Usa terminal dividida con tmux o pestañas en VS Code
    

---

## **✅ ¿Qué sigue?**

  

Puedes avanzar a temas como:

- tmux (multipanel de terminal)
    
- ssh / scp (conexiones remotas)
    
- rsync (sincronización de archivos)
    
- jq (procesar JSON)
    
- dig, nmap, curl, wget (networking)
    

---

🎯 _Este curso está pensado para que trabajes más rápido, reduzcas el uso del mouse y te conviertas en un desarrollador más eficiente desde la terminal._