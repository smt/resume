require "rake"

namespace :html do
  desc "Compile stylesheet"
  task :styles do
    puts "Compiling CSS file"
    system("compass compile")
  end

  desc "Generate standalone HTML file"
  task :generate => [:styles] do
    puts "Generating standalone HTML file from Markdown"
    system("pandoc -s -S resume.markdown -o resume.html -t html5 --self-contained --section-divs --template=resume-template.html -c css/main.css -H js/main.js")
    system("cp resume.html index.html")
    puts "Done"
  end
end

namespace :tex do
  desc "Generate LaTeX file"
  task :generate do
    puts "Generating LaTeX file from Markdown"
    system("pandoc -s -w context resume.markdown -o resume.tex")
    puts "Done"
  end
end

namespace :pdf do
  desc "Generate PDF file"
  task :generate => ["tex:generate"] do
    puts "Generating PDF file from LaTeX"
    system("texexec --pdf resume.tex")
    puts "Done"
  end
end

namespace :rtf do
  desc "Generate RTF file"
  task :generate do
    puts "Generating RTF file from Markdown"
    system("pandoc -s -S resume.markdown -o resume.rtf")
    puts "Done"
  end
end

namespace :word do
  desc "Generate docx file"
  task :generate do
    puts "Generating docx file from Markdown"
    system("pandoc -s -S resume.markdown -o resume.docx --reference-docx=resume-reference.docx")
    puts "Done"
  end
end

namespace :odt do
  desc "Generate ODT file"
  task :generate do
    puts "Generating ODT file from Markdown"
    system("pandoc -s -S resume.markdown -o resume.odt")
    puts "Done"
  end
end

namespace :epub do
  desc "Generate EPUB file"
  task :generate do
    puts "Generating EPUB file from Markdown"
    system("pandoc -s -S resume.markdown -o resume.epub")
    puts "Done"
  end
end

task :readme do
  desc "Copy resume to README"
  system("cp resume.markdown README.markdown")
end

task :all => [
  "html:generate",
  "pdf:generate",
  "rtf:generate",
  "word:generate",
  "odt:generate",
  "epub:generate",
  "readme"
]

desc "Transfer resume files to web"
task :push do
  path = "smt@s17r.com:s17r.com/public/resume"
  system("scp resume.* index.html #{path}")
end

task :default => ["html:generate"]
