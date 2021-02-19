/**
 * @author Jacob Willis
 * @version 12/26/2020
 */
import java.awt.BorderLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JTextField;
import javax.swing.JPanel;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;

public class GUI extends JFrame{
	
	static final int SURROUND = 8;
	static final int INSET = 5;
	static final int VGAP = 8;
	static final int HGAP = 0;
	static final int TITLE_INSET = 5;
	static final Border EMPTY_BORDER = new EmptyBorder(INSET, INSET, INSET, INSET);
	private static final long serialVersionUID = 1L;
	private JFrame mainFrame;
	private JButton button9;
	private JButton button8;
	private JButton button7;
	private JButton button6;
	private JButton button5;
	private JButton button4;
	private JButton button3;
	private JButton button2;
	private JButton button1;
	private JButton button0;
	private JButton multiplyButton;
	private JButton divideButton;
	private JButton addButton;
	private JButton subtractButton;
	private JButton equalsButton;
	private JTextField display;
	private JPanel mainPanel;
	private JPanel topRow;
	private JPanel secondRow;
	private JPanel thirdRow;
	private JPanel fourthRow;
	private JPanel fifthRow;
	private JPanel lastRow;
	private JPanel hold1;
	private JPanel hold2;
	
	public GUI() {
		
		setTitle("Calculator");
		setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
		mainFrame = this;
		
		mainFrame.setLayout(new BorderLayout(HGAP, VGAP));
		mainPanel = new JPanel(new BorderLayout());
		topRow = new JPanel();
		topRow.setLayout(new BorderLayout());
		secondRow = new JPanel();
		secondRow.setLayout(new BorderLayout());
		thirdRow = new JPanel();
		thirdRow.setLayout(new BorderLayout());
		fourthRow = new JPanel();
		fourthRow.setLayout(new BorderLayout());
		fifthRow = new JPanel();
		fifthRow.setLayout(new BorderLayout());
		lastRow = new JPanel();
		lastRow.setLayout(new BorderLayout());
		display = new JTextField(8);
		topRow.add(display);
		button9 = new JButton("9");
		button9.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "9");
			}
		});
		button8 = new JButton("8");
		button8.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "8");
			}
		});
		button7 = new JButton("7");
		button7.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "7");
			}
		});
		secondRow.add(BorderLayout.EAST, button9);
		secondRow.add(BorderLayout.CENTER, button8);
		secondRow.add(BorderLayout.WEST, button7);
		button6 = new JButton("6");
		button6.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "6");
			}
		});
		button5 = new JButton("5");
		button5.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "5");
			}
		});
		button4 = new JButton("4");
		button4.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "4");
			}
		});
		thirdRow.add(BorderLayout.EAST, button6);
		thirdRow.add(BorderLayout.CENTER, button5);
		thirdRow.add(BorderLayout.WEST, button4);
		button3 = new JButton("3");
		button3.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "3");
			}
		});
		button2 = new JButton("2");
		button2.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "2");
			}
		});
		button1 = new JButton("1");
		button1.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "1");
			}
		});
		fourthRow.add(BorderLayout.EAST, button3);
		fourthRow.add(BorderLayout.CENTER, button2);
		fourthRow.add(BorderLayout.WEST, button1);
		button0 = new JButton("0");
		button0.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "0");
			}
		});
		multiplyButton = new JButton("X");
		multiplyButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "*");
			}
		});
		divideButton = new JButton("/");
		divideButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "/");
			}
		});
		fifthRow.add(BorderLayout.CENTER, button0);
		fifthRow.add(BorderLayout.EAST, multiplyButton);
		fifthRow.add(BorderLayout.WEST, divideButton);
		addButton = new JButton("+");
		addButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "+");
			}
		});
		subtractButton = new JButton("-");
		subtractButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				display.setText(display.getText() + "-");
			}
		});
		equalsButton = new JButton("=");
		equalsButton.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				String equation = display.getText();
				if (equation.contains("*")) {
					String[] temp = equation.split("\\*");
					int hold = Integer.valueOf(temp[0]) * Integer.valueOf(temp[1]);
					display.setText(hold + "");
				} else if (equation.contains("/")) {
					String[] temp = equation.split("/");
					int hold = Integer.valueOf(temp[0]) / Integer.valueOf(temp[1]);
					display.setText(hold + "");
				} else if (equation.contains("\\+")) {
					String[] temp = equation.split("+");
					int hold = Integer.valueOf(temp[0]) + Integer.valueOf(temp[1]);
					display.setText(hold + "");
				} else if (equation.contains("-")) {
					String[] temp = equation.split("-");
					int hold = Integer.valueOf(temp[0]) - Integer.valueOf(temp[1]);
					display.setText(hold + "");
				} else {
					display.setText("Error!");
				}
			}
		});
		lastRow.add(BorderLayout.EAST, addButton);
		lastRow.add(BorderLayout.CENTER, subtractButton);
		lastRow.add(BorderLayout.WEST, equalsButton);
		hold1 = new JPanel();
		hold1.setLayout(new BorderLayout());
		hold2 = new JPanel();
		hold2.setLayout(new BorderLayout());
		hold1.add(BorderLayout.NORTH, topRow);
		hold1.add(BorderLayout.CENTER, secondRow);
		hold1.add(BorderLayout.SOUTH, thirdRow);
		hold2.add(BorderLayout.NORTH, fourthRow);
		hold2.add(BorderLayout.CENTER, fifthRow);
		hold2.add(BorderLayout.SOUTH, lastRow);
		mainPanel.add(BorderLayout.NORTH, hold1);
		mainPanel.add(BorderLayout.SOUTH, hold2);
		mainFrame.add(mainPanel);
		
		pack();
		setLocationRelativeTo(null);
	}
}
