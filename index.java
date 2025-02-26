package firstcode;

import java.awt.Color;
import java.awt.Font;
import java.net.InetAddress;
import java.lang.management.ManagementFactory;
import javax.swing.JFrame;
import javax.swing.JLabel;

public class index {
    
    public static void main(String[] args) {
        try {
            // Obtendo informações do sistema e hardware
            String[] info = {
                "💻 Sistema Operacional: " + System.getProperty("os.name"),
                "📦 Versão do SO: " + System.getProperty("os.version"),
                "🏗️ Arquitetura do SO: " + System.getProperty("os.arch"),
                "🌍 Nome do Computador: " + InetAddress.getLocalHost().getHostName(),
                "⚙️ Processadores Disponíveis: " + Runtime.getRuntime().availableProcessors(),
                "🧠 Memória Total JVM: " + (Runtime.getRuntime().totalMemory() / (1024 * 1024)) + " MB",
                "🚀 Memória Livre JVM: " + (Runtime.getRuntime().freeMemory() / (1024 * 1024)) + " MB",
                "⏳ Tempo de Execução JVM: " + (ManagementFactory.getRuntimeMXBean().getUptime() / 1000) + " segundos",
                "☕ Versão do Java: " + System.getProperty("java.version"),
                "🏭 Fornecedor do Java: " + System.getProperty("java.vendor"),
                "📂 Diretório do Java: " + System.getProperty("java.home"),
                "👤 Usuário: " + System.getProperty("user.name"),
                "📍 Diretório do Usuário: " + System.getProperty("user.home"),
                "📌 Diretório Atual: " + System.getProperty("user.dir"),
                "🌎 Idioma do Sistema: " + System.getProperty("user.language"),
            };

            // Juntando todas as informações com quebras de linha
            StringBuilder infoText = new StringBuilder("<html>");
            for (String line : info) {
                infoText.append(line).append("<br>");
            }
            infoText.append("</html>");

            // Criando a JLabel com as informações do sistema
            JLabel label = new JLabel(infoText.toString(), JLabel.CENTER);
            label.setFont(new Font("Calibri", Font.BOLD, 16));
            label.setForeground(Color.white);

            // Criando a janela (JFrame)
            JFrame window = new JFrame("Informações do Sistema");
            window.setSize(700, 700);
            window.getContentPane().setBackground(new Color(50, 50, 50));
            window.add(label);
            window.setVisible(true);
            window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
