MAJOR CHANGES! 
It is recommended that you remove any previous version and replace it with the updated version here. Much as I love simplicity when it comes to installing software - I have found a potential weakness when entering data into multiple RTEs on a page. The revised version is slightly more complicated to instal. 
The steps are: 
i) as before download the folder into your root directory.
ii) Instead of including estrte_functions.js at the bottom of relevant page - the js file must be included in each iteration of the form which contains the RTE. The placeholder in each form must then be converted into a 4 digit counter.
<script type="text/javascript">
<!--
   fetch("est_rte_multi/js/estrte_functions.js")
  .then(response => response.text())
  .then(scriptContent => {
    let updatedContent = scriptContent.replace(/__entrycounter__/g, [[COUNTER]]);
    let scriptTag = document.createElement("script");
    scriptTag.textContent = updatedContent;
   document.getElementById("[[COUNTER]]rte_holder").appendChild(scriptTag);
  });
//-->
</script>
Then include the RTE form - 
</script>
		<?php include 'est_rte_multi/estrte_form.html'; ?>
		</div><?php
		 $estrte_form = file_get_contents('est_rte_multi/estrte_form.html'); 
		 $page_content = str_replace("%%placeholder%%", [[COUNTER]], $estrte_form);
		?>
		<div><input type="text" name="author" id="author" placeholder="Name" /></div>
		<div><input type="submit" /></div>
	<script type="text/javascript">
<!--
	inputForm = document.getElementById("[[COUNTER]]>rte_holder").innerHTML;
	document.getElementById("[[COUNTER]]rte_holder").innerHTML = inputForm.replace(/%%placeholder%%/g, '[[COUNTER]]')
//-->
</script>
And convert the %%placeholder%%  into the 4 diigit counter.
For example: using PHP: 		
<div id="estrte_demo_cont">
		<?php
	for($i = 1000; $i < 1005; $i++){
		$pic_counter = $i;
		echo $pic_counter;
		?><form action="process_rte.php" method="post">
		<div id="<?php echo $pic_counter; ?>rte_holder">
<script type="text/javascript">
<!--
   fetch("est_rte_multi/js/estrte_functions.js")
  .then(response => response.text())
  .then(scriptContent => {
    let updatedContent = scriptContent.replace(/__entrycounter__/g, "<?php echo $pic_counter; ?>");
    let scriptTag = document.createElement("script");
    scriptTag.textContent = updatedContent;
   document.getElementById("<?php echo $pic_counter; ?>rte_holder").appendChild(scriptTag);
  })
  .catch(error => console.error("Error fetching script:", error));
//-->
</script>
		<?php include 'est_rte_multi/estrte_form.html'; ?>
		</div><?php
		 $estrte_form = file_get_contents('est_rte_multi/estrte_form.html'); 
		 $page_content = str_replace("%%placeholder%%", $pic_counter, $estrte_form);
		?>
		<div><input type="text" name="author" id="author" placeholder="Name" /></div>
		<div><input type="submit" /></div>
	<script type="text/javascript">
<!--
	inputForm = document.getElementById("<?php echo $pic_counter; ?>rte_holder").innerHTML;
	document.getElementById("<?php echo $pic_counter; ?>rte_holder").innerHTML = inputForm.replace(/%%placeholder%%/g, '<?php echo $pic_counter; ?>')
//-->
</script>
		</form>
	<?php 
	}
	?>
		</div>

# Estuary-Rich-Text-Element-multi
A rich text input element for online forms which can be hosted multiple times on same page. 
POSSIBLY FURTHER IMPROVEMENTS TO THE USER INTERFACE. FIXED ISSUES FOUND WITH SAFARI BROWSER
