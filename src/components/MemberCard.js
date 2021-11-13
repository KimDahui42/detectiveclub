import "../styles/ClubMembers.css";
import PropTypes from "prop-types";

function ClubMember({ id,name, sex, birth, bloodtype, subjects, dream, places, motivated }) {
	const printSubjects = () => {
		var length = subjects.length;
		var finalStr = "";
		for (var i = 0; i < length - 1; i++) {
			finalStr += subjects[i] + ', ';
		}
		finalStr += subjects[length - 1];
		return finalStr;
	}
	const printPlaces = () => {
		var length = places.length;
		var finalStr = "";
		for (var i = 0; i < length - 1; i++) {
			finalStr += places[i] + ', ';
		}
		finalStr += places[length - 1];
		return finalStr;
	}
	return (
		<div>
			<img src={id} alt={name} />
			<table>
				<tr>
					<td>�л�����</td>
					<td>
						<tr>{name} ����: {sex}</tr>
						<tr>{birth.year}.{birth.month}.{birth.day} ������: {bloodtype}</tr>
					</td>
				</tr>
				<tr>
					<td>��ȣ����</td>
					<td>{printSubjects()}</td>
				</tr>
				<tr>
					<td>�������</td>
					<td>{dream}</td>
				</tr>
				<tr>
					<td>��ȣ����</td>
					<td>{printPlaces()}</td>
				</tr>
				<tr>
					<td>���Ե���</td>
					<td>{motivated}</td>
				</tr>
			</table>
		</div>
	);
}

ClubMember.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	sex: PropTypes.string.isRequired,
	birth: PropTypes.objectOf(PropTypes.number).isRequired,
	bloodtype: PropTypes.string.isRequired,
	subjects: PropTypes.arrayOf(PropTypes.string).isRequired,
	dream: PropTypes.string.isRequired,
	places: PropTypes.arrayOf(PropTypes.string).isRequired,
	motivated: PropTypes.string.isRequired
};

export default ClubMember;