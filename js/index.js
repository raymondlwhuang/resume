function myDemo (widgetsRequiredID,widgetContainerId){
	this.widgetsRequired = $('#'+widgetsRequiredID);
	this.widgetContainer = $('#'+widgetContainerId);
}
myDemo.prototype.createEmployment = function(summary){
	summary
	let elementToInsert = `
		<h2>Raymond Huang </h2>
		<p>42 Hainsworth Court</p>
		<p>Markham, Ontario L3S 1T6</p> 
		<p>Cell Phone 416-904-9826 </p>
		<p>personal website: http://www.raymondlwhuang.com/ (new build)</p>
		<p>e-mail:raymondlwhuang@yahoo.com </p>
	`
}
myDemo.prototype.createEmployment = function(employment){
	let elementToInsert = `
				<div class="employment-container">
					<div>
						<div class="employment-inner-box">
							<div class="employment-left">
								<img src='${ employment.imgUrl }'>
							</div>
							<div class="employment-right">
								<p class="company">${ employment.company}</p>
								<p class="period">${ employment.period }</p>
								<p class="location">${ employment.location }</p>
								<div class="detail">
									<div class="title">${ employment.detail.title }</div>
									<ul>
`							
this.widgetContainer.append(elementToInsert);
employment.detail.responsibilitie.forEach(detail=>{
	elementToInsert = this.createDetail(detail);
	this.widgetContainer.append(elementToInsert);
});								
elementToInsert = `
					</ul>
								 </div>
											
							</div>    
						</div>
						<div class="line">
							<svg height="5" width="300">
								<line x1="0" y1="0" x2="300" y2="0" style="stroke:#ccc;stroke-width:2" />
								Sorry, your browser does not support inline SVG.
							</svg>
					
						</div>

					</div>
				</div>		
		`;
		this.widgetContainer.append(elementToInsert);
}
myDemo.prototype.createDetail = function(detail){
	return '<li>'+detail+'</li>';
}
myDemo.prototype.create = function(){
	//resume.summary.forEach(item=>this.createSummary(item));
	resume.employments.forEach(employment=>this.createEmployment(employment));
}
const myDemo1 = new myDemo('widget-needed','widget-container');
myDemo1.create();